import { useEffect, useMemo, useState } from 'react';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useNavigate } from 'react-router-dom';

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type SearchDoc = {
  id: string;
  title: string;
  path: string;
  section?: string;
  text: string;
};

const globPages = import.meta.glob('../pages/*.tsx', { as: 'raw' });

function extractHeadingsAndTerms(source: string): { title?: string; sections: Array<{ heading: string; text: string }> } {
  const sections: Array<{ heading: string; text: string }> = [];
  let title: string | undefined;

  const jsxText = source;
  // h1 title
  const h1Match = jsxText.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) title = h1Match[1].replace(/<[^>]+>/g, '').trim();

  const headingRegex = /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(jsxText))) {
    const heading = match[2].replace(/<[^>]+>/g, '').trim();
    // capture nearby paragraph/list text after heading
    const slice = jsxText.slice(match.index, Math.min(match.index + 2000, jsxText.length));
    const paraMatch = slice.match(/<p[^>]*>([\s\S]*?)<\/p>|<li[^>]*>([\s\S]*?)<\/li>/i);
    const text = (paraMatch?.[1] || paraMatch?.[2] || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    sections.push({ heading, text });
  }

  return { title, sections };
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const docs: SearchDoc[] = useMemo(() => {
    const entries: SearchDoc[] = [];
    const pageToPath: Record<string, string> = {};

    Object.keys(globPages).forEach((key) => {
      const pathName = key.replace('../pages/', '/').replace(/\.tsx$/, '');
      pageToPath[key] = pathName === '/Home' ? '/' : pathName;
    });

    for (const [key, loader] of Object.entries(globPages)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - vite will transform to string at build
      const source: string = loader as unknown as string;
      const { title, sections } = extractHeadingsAndTerms(source);
      const base: SearchDoc[] = [];
      const path = pageToPath[key];
      if (title) {
        base.push({ id: `${path}#_title`, title, path, text: title });
      }
      sections.forEach((sec, idx) => {
        const id = `${path}#h${idx}`;
        base.push({ id, title: sec.heading, path, section: sec.heading, text: `${sec.heading} ${sec.text}` });
      });
      entries.push(...base);
    }

    return entries;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return docs.slice(0, 20);
    const q = query.trim().toLowerCase();
    return docs
      .map((d) => {
        const text = `${d.title} ${d.text}`.toLowerCase();
        let score = 0;
        if (text.includes(q)) score += 10;
        // prioritize key domain terms
        const boosters = ['insights', 'details', 'tuition fee', 'stipend', 'accommodation', 'medical insurance', 'ticket', 'etc', 'tempus', 'hec portal', 'visa', 'usat', 'schedule', 'preparation tips', 'universities', 'documents', 'cities', 'jobs'];
        boosters.forEach((b) => {
          if (q.includes(b) && text.includes(b)) score += 2;
        });
        return { doc: d, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
      .map((r) => r.doc);
  }, [docs, query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search headings, sections, terms..." value={query} onValueChange={setQuery} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Results">
          {filtered.map((doc) => (
            <CommandItem
              key={doc.id}
              value={doc.id}
              onSelect={() => {
                onOpenChange(false);
                navigate(doc.path);
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm">{doc.title}</span>
                {doc.section ? (
                  <span className="text-xs text-muted-foreground">{doc.section}</span>
                ) : null}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

