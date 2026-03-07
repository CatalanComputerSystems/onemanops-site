import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import { deploySteps } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      className="border-t border-brand-section-border"
      style={{ padding: "100px clamp(24px, 5vw, 80px)" }}
    >
      <FadeIn>
        <div className="text-center mb-14">
          <SectionLabel>DEPLOYMENT</SectionLabel>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-brand-text-primary leading-[1.1] tracking-[1px]">
            Three steps. <span className="text-brand-accent">Full ops.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
        {deploySteps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.12}>
            <div className="bg-brand-card border border-brand-border rounded-lg p-8 text-center h-full">
              <div className="font-display text-5xl text-brand-accent opacity-30 mb-2">
                {s.step}
              </div>
              <div className="font-mono text-[15px] font-bold text-brand-text-primary tracking-[1px] mb-3">
                {s.title}
              </div>
              <p className="font-body text-sm text-brand-text-dim leading-relaxed m-0">
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
