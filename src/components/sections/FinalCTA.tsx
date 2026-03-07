import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";

export default function FinalCTA() {
  return (
    <section className="py-[120px] px-[clamp(24px,5vw,80px)] border-t border-brand-section-border text-center relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,83,14,0.08) 0%, transparent 70%)",
        }}
      />

      <FadeIn>
        <div className="relative z-[1]">
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-brand-text-primary leading-[1.05] mb-5 tracking-[1px]">
            STOP OPERATING
            <br />
            LIKE A <span className="text-brand-accent">ONE MAN BAND.</span>
            <br />
            START OPERATING
            <br />
            LIKE A <span className="text-brand-accent">ONE MAN OPS.</span>
          </h2>
          <p className="font-body text-[17px] text-brand-text-dim max-w-[500px] mx-auto mb-10 leading-[1.7]">
            Deploy your first agent today. Free at Recon. No credit card. No
            commitment. Just capability.
          </p>
          <GlowButton href="/pricing" className="text-[15px] font-bold tracking-[3px] px-12 py-[18px]">
            DEPLOY NOW →
          </GlowButton>
        </div>
      </FadeIn>
    </section>
  );
}
