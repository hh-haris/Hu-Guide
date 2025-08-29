export type SearchResult = {
  text: string;
  score: number;
  anchor: string | null;
  path: string;
  context: string;
};

type IndexNode = {
  text: string;
  weight: number;
  anchor: string | null;
  path: string;
  context: string;
};

const HEADING_WEIGHTS: Record<string, number> = {
  H1: 8,
  H2: 6,
  H3: 4,
  H4: 3,
  H5: 2,
  H6: 1,
  P: 1,
  LI: 1,
  DT: 1,
  DD: 1,
  STRONG: 2,
  EM: 2,
};

function getAnchor(element: Element): string | null {
  const id = (element as HTMLElement).id;
  if (id) return `#${id}`;
  const heading = element.closest('h1, h2, h3, h4, h5, h6');
  if (heading && (heading as HTMLElement).id) return `#${(heading as HTMLElement).id}`;
  return null;
}

function collectNodes(root: ParentNode): IndexNode[] {
  const selector = [
    'h1','h2','h3','h4','h5','h6',
    'p','li','dt','dd','strong','em',
    '[data-search]','[data-search-keywords]'
  ].join(',');

  const path = location.pathname;
  const nodes: IndexNode[] = [];

  root.querySelectorAll(selector).forEach((el) => {
    const tag = el.tagName.toUpperCase();
    const baseWeight = HEADING_WEIGHTS[tag] ?? 1;
    const extraKeywords = (el as HTMLElement).getAttribute('data-search-keywords') ?? '';
    const explicit = (el as HTMLElement).getAttribute('data-search') ?? '';
    const text = `${explicit} ${el.textContent ?? ''} ${extraKeywords}`.trim();
    if (!text) return;
    nodes.push({
      text,
      weight: baseWeight,
      anchor: getAnchor(el),
      path,
      context: (el.closest('section, article, div')?.textContent ?? '').slice(0, 240),
    });
  });

  return nodes;
}

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

class SiteSearchImpl {
  private index: IndexNode[] = [];
  private observer: MutationObserver | null = null;

  initialize(): void {
    this.rebuild();
    if (this.observer) return;
    this.observer = new MutationObserver(() => {
      // Debounced rebuild
      if (this._rebuildHandle) cancelAnimationFrame(this._rebuildHandle);
      this._rebuildHandle = requestAnimationFrame(() => this.rebuild());
    });
    this.observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    window.addEventListener('popstate', () => this.rebuild());
  }

  private _rebuildHandle: number | null = null;

  rebuild(): void {
    this.index = collectNodes(document);
  }

  search(query: string, limit = 20): SearchResult[] {
    const terms = tokenize(query);
    if (terms.length === 0) return [];

    const results: SearchResult[] = [];
    for (const node of this.index) {
      const hay = node.text.toLowerCase();
      let termMatches = 0;
      let proximityBonus = 0;

      let lastPos = -1;
      for (const term of terms) {
        const pos = hay.indexOf(term);
        if (pos >= 0) {
          termMatches += 1;
          if (lastPos >= 0) {
            const gap = Math.abs(pos - lastPos);
            proximityBonus += Math.max(0, 10 - Math.min(gap, 10));
          }
          lastPos = pos;
        }
      }

      if (termMatches > 0) {
        const score = termMatches * node.weight + proximityBonus * 0.1 + Math.min(hay.length / 200, 1);
        results.push({
          text: node.text.slice(0, 200),
          score,
          anchor: node.anchor,
          path: node.path,
          context: node.context,
        });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, limit);
  }
}

export const SiteSearch = new SiteSearchImpl();

declare global {
  interface Window {
    __siteSearch?: SiteSearchImpl;
  }
}

if (typeof window !== 'undefined') {
  // Expose a singleton for integration from existing search bars
  (window as any).__siteSearch = SiteSearch;
}

