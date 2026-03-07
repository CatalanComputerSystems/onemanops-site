import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";
import { heroStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,5vw,80px)] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,83,14,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,83,14,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent animate-scan z-[1]" />

      {/* Accent vertical line */}
      <div
        className="absolute left-[clamp(24px,5vw,80px)] top-0 bottom-0 w-0.5 opacity-20"
        style={{
          background: "linear-gradient(to bottom, transparent, #E8530E, transparent)",
        }}
      />

      <div className="relative z-[2] max-w-[900px]">
        <FadeIn>
          <div className="font-mono text-xs tracking-[4px] text-brand-accent mb-5 uppercase">
            <span className="animate-pulse-line inline-block">▸</span> SYSTEM
            ONLINE — 5 AGENTS DEPLOYED
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="font-display text-[clamp(64px,10vw,120px)] leading-[0.9] font-normal tracking-[2px] text-brand-text-primary mb-6">
            ONE <span className="text-brand-accent">MAN</span>
            <br />
            OPS
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-body text-[clamp(18px,2.2vw,24px)] leading-relaxed text-brand-text-muted max-w-[640px] mb-3 font-light">
            You don&apos;t need a team. You need a system.
          </p>
          <p className="font-body text-[clamp(15px,1.6vw,17px)] leading-[1.7] text-brand-text-dim max-w-[580px] mb-10">
            Five AI agents. Trading. Longevity. Content. Business. Systems.
            Built on thousands of hours of battle-tested strategies and
            real-world validated outcomes. Deploy your unfair advantage.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex gap-4 flex-wrap">
            <GlowButton href="#tiers">DEPLOY NOW →</GlowButton>
            <GlowButton href="#agents" variant="secondary">
              VIEW AGENTS
            </GlowButton>
          </div>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.6} className="absolute bottom-10 left-[clamp(24px,5vw,80px)] right-[clamp(24px,5vw,80px)]">
        <div className="flex gap-10 border-t border-brand-border pt-5 flex-wrap">
          {heroStats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-[28px] text-brand-accent tracking-[1px]">
                {s.val}
              </div>
              <div className="font-body text-[11px] text-brand-text-ghost tracking-[1px] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
