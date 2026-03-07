import GlowButton from "./GlowButton";

interface TierCardProps {
  name: string;
  price: string;
  priceSub: string;
  color: string;
  cta: string;
  popular: boolean;
}

export default function TierCard({
  name,
  price,
  priceSub,
  color,
  cta,
  popular,
}: TierCardProps) {
  return (
    <div
      className="tier-card bg-brand-card rounded-[10px] overflow-hidden relative cursor-default"
      style={{
        border: popular ? `2px solid ${color}` : "1px solid var(--color-brand-border)",
      }}
    >
      {popular && (
        <div
          className="text-center font-mono text-[10px] tracking-[3px] text-white font-bold py-1.5 px-2"
          style={{ backgroundColor: color }}
        >
          MOST POPULAR
        </div>
      )}
      <div className="p-7">
        <div
          className="font-mono text-xs tracking-[3px] font-bold mb-1"
          style={{ color }}
        >
          {name}
        </div>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="font-display text-5xl text-brand-text-primary leading-none">
            {price}
          </span>
          <span className="font-body text-sm text-brand-text-ghost">
            {priceSub}
          </span>
        </div>
        <GlowButton
          href="/pricing"
          variant={popular ? "primary" : "secondary"}
          className={`w-full text-center text-xs ${
            !popular
              ? `!border-opacity-40`
              : ""
          }`}
        >
          {cta}
        </GlowButton>
      </div>
    </div>
  );
}
