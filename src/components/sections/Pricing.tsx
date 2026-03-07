import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import TierCard from "../TierCard";
import { tiers, features } from "@/lib/constants";

export default function Pricing() {
  return (
    <section
      id="tiers"
      className="border-t border-brand-section-border"
      style={{ padding: "100px clamp(24px, 5vw, 80px)" }}
    >
      <FadeIn>
        <div className="text-center mb-12">
          <SectionLabel>DEPLOYMENT OPTIONS</SectionLabel>
          <h2
            className="font-display text-brand-text-primary tracking-[1px]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            Recon → Operator → Commander →{" "}
            <span className="text-brand-accent">Architect</span>
          </h2>
        </div>
      </FadeIn>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto mb-16">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <TierCard
              name={tier.name}
              price={tier.price}
              priceSub={tier.priceSub}
              color={tier.color}
              cta={tier.cta}
              popular={tier.popular}
            />
          </FadeIn>
        ))}
      </div>

      {/* Feature Comparison Matrix */}
      <FadeIn>
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[3px] text-brand-text-ghost mb-5 text-center">
            DETAILED COMPARISON
          </div>
          <div className="bg-brand-card rounded-[10px] border border-brand-border overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-[200px_repeat(4,1fr)] min-w-[700px] border-b border-brand-border">
              <div className="p-4" />
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="p-4 text-center border-l border-brand-border"
                >
                  <div
                    className="font-mono text-xs tracking-[2px] font-bold"
                    style={{ color: t.color }}
                  >
                    {t.name}
                  </div>
                  <div className="font-display text-[22px] text-brand-text-primary mt-0.5">
                    {t.price}
                  </div>
                </div>
              ))}
            </div>
            {/* Rows */}
            {features.map((feat, fi) => (
              <div
                key={feat.name}
                className={`grid grid-cols-[200px_repeat(4,1fr)] min-w-[700px] ${
                  fi < features.length - 1
                    ? "border-b border-brand-border"
                    : ""
                } ${fi % 2 === 0 ? "" : "bg-brand-card-alt"}`}
              >
                <div className="p-3.5 px-5 font-body text-[13px] text-brand-text-muted font-medium flex items-center">
                  {feat.name}
                </div>
                {feat.values.map((val, vi) => (
                  <div
                    key={vi}
                    className={`p-3.5 text-center border-l border-brand-border font-body text-[13px] flex items-center justify-center ${
                      val === "—"
                        ? "text-brand-border-hover"
                        : val === "✓"
                        ? "text-brand-success"
                        : "text-brand-text-body"
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
