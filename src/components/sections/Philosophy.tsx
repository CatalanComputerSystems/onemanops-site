import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";

export default function Philosophy() {
  return (
    <section
      className="border-t border-brand-section-border text-center"
      style={{ padding: "120px clamp(24px, 5vw, 80px)" }}
    >
      <FadeIn>
        <div className="max-w-[700px] mx-auto">
          <SectionLabel>THE PHILOSOPHY</SectionLabel>
          <blockquote className="font-display text-[clamp(32px,4.5vw,52px)] text-brand-text-primary leading-[1.2] mb-6 tracking-[1px]">
            &ldquo;Whatever you are not changing, you are{" "}
            <span className="text-brand-accent">choosing.</span>&rdquo;
          </blockquote>
          <p className="font-body text-[17px] text-brand-text-dim leading-[1.8] mb-4">
            One Man Ops isn&apos;t a product. It&apos;s a decision. A decision
            that one person, armed with the right systems, can outperform entire
            teams. That evidence beats opinion. That verification beats guessing.
            That compounding knowledge bases beat starting from scratch every
            day.
          </p>
          <p className="font-body text-[15px] text-brand-text-ghost leading-[1.7]">
            Every agent is built on real outcomes — validated trades, documented
            improvements, tested frameworks. Not theory. Not vibes. Forged
            systems.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
