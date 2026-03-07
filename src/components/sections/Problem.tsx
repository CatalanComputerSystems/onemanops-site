import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";

const withoutItems = [
  "Generic ChatGPT responses with no domain expertise",
  "Rebuilding context every conversation",
  "No verification — confident hallucinations",
  "Zero lessons learned integration",
  "Strategies based on theory, not validated outcomes",
];

const withItems = [
  "5 specialized agents with deep domain knowledge",
  "Persistent knowledge bases that compound over time",
  "Mandatory verification protocols on every output",
  "Lessons learned from 1000s of real decisions",
  "Strategies validated with documented performance data",
];

export default function Problem() {
  return (
    <section className="py-[120px] px-[clamp(24px,5vw,80px)] border-t border-brand-section-border">
      <FadeIn>
        <div className="max-w-[800px] mx-auto text-center">
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-brand-text-primary leading-[1.1] mb-6 tracking-[1px]">
            You&apos;re operating in{" "}
            <span className="text-brand-accent">five domains</span> with zero
            backup
          </h2>
          <p className="font-body text-[17px] text-brand-text-dim leading-[1.8] mb-12">
            Trading decisions at 2 AM. Content deadlines. Health optimization
            research. Business strategy. Prompt engineering. You&apos;re doing the
            work of five departments with one brain, one pair of hands, and 24
            hours. Generic AI gives you generic results. You need specialized
            operators.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 max-w-[900px] mx-auto items-start">
          {/* Without */}
          <div>
            <div className="font-mono text-[11px] tracking-[3px] text-brand-danger mb-4">
              WITHOUT ONE MAN OPS
            </div>
            {withoutItems.map((item, i) => (
              <div
                key={i}
                className="font-body flex gap-2.5 mb-3 text-sm text-brand-text-dim leading-relaxed"
              >
                <span className="text-brand-danger shrink-0">✗</span>
                {item}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="hidden md:block w-px min-h-[200px] self-stretch"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(232,83,14,0.2), transparent)",
            }}
          />

          {/* With */}
          <div>
            <div className="font-mono text-[11px] tracking-[3px] text-brand-success mb-4">
              WITH ONE MAN OPS
            </div>
            {withItems.map((item, i) => (
              <div
                key={i}
                className="font-body flex gap-2.5 mb-3 text-sm text-brand-text-body leading-relaxed"
              >
                <span className="text-brand-success shrink-0">→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
