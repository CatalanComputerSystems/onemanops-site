"use client";

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
      className="tier-card rounded-[10px] overflow-hidden relative cursor-default"
      style={{
        background: "#0C0C0E",
        border: popular ? `2px solid ${color}` : `1px solid #1A1A1E`,
        boxShadow: popular ? `0 0 30px ${color}15, 0 4px 20px rgba(0,0,0,0.3)` : "0 4px 20px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}${popular ? "" : "60"}`;
        e.currentTarget.style.boxShadow = `0 0 30px ${color}20, 0 8px 30px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = popular ? color : "#1A1A1E";
        e.currentTarget.style.boxShadow = popular
          ? `0 0 30px ${color}15, 0 4px 20px rgba(0,0,0,0.3)`
          : "0 4px 20px rgba(0,0,0,0.2)";
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
        <button
          className="glow-btn w-full py-3.5 rounded-[4px] font-mono text-xs font-semibold tracking-[1px] cursor-pointer transition-all duration-300"
          style={{
            background: popular ? color : "transparent",
            color: popular ? "#fff" : color,
            border: popular ? "none" : `1px solid ${color}40`,
          }}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
