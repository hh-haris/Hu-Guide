import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FeaturesSection = {
  title: string;
  items: string[];
};

type PricingCardProps = {
  title: string;
  description: string;
  price: number | string;
  originalPrice?: number;
  features: FeaturesSection[];
  buttonText: string;
  onButtonClick?: () => void;
  highlight?: boolean;
};

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  features,
  buttonText,
  onButtonClick,
  highlight,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow-sm h-full flex flex-col',
        highlight && 'ring-2 ring-brand-orange'
      )}
    >
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-secondary text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-baseline gap-2">
          {typeof price === 'number' ? (
            <>
              <span className="text-sm text-muted-foreground">PKR</span>
              <span className="text-3xl font-bold">{price}</span>
              <span className="text-sm text-muted-foreground">one-time</span>
              {originalPrice ? (
                <span className="text-sm text-muted-foreground line-through">PKR {originalPrice}</span>
              ) : null}
            </>
          ) : (
            <span className="text-2xl font-bold">{price}</span>
          )}
        </div>
      </div>
      <div className="px-6 pb-6 space-y-4 flex-1">
        {features.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-sm font-semibold text-brand-blue">{section.title}</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={onButtonClick}
          className={cn(
            'w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium smooth-transition',
            highlight ? 'bg-brand-orange text-white hover:bg-brand-orange/90' : 'bg-secondary hover:bg-secondary/80'
          )}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}

