import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";
import { heroStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: "0 clamp(24px, 5vw, 80px)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,83,14,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,83,14,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(232,83,14,0.4), transparent)",
          animation: "scan 8s linear infinite",
        }}
      />

      {/* Accent vertical line */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: "clamp(24px, 5vw, 80px)",
          width: "2px",
          background: "linear-gradient(to bottom, transparent, #E8530E, transparent)",
          opacity: 0.2,
        }}
      />

      <div className="relative z-[2] max-w-[900px]">
        <FadeIn>
          <div className="font-mono text-xs tracking-[4px] text-brand-accent mb-5 uppercase">
            <span
              className="inline-block"
              style={{ animation: "pulse-line 2s ease infinite" }}
            >
              ▸
            </span>{" "}
            SYSTEM ONLINE — 5 AGENTS DEPLOYED
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1
            className="font-display font-normal text-brand-text-primary mb-6"
            style={{
              fontSize: "clamp(64px, 10vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "2px",
            }}
          >
            ONE <span className="text-brand-accent">MAN</span>
            <br />
            OPS
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="font-body text-brand-text-muted max-w-[640px] mb-3 font-light"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.6 }}
          >
            You don&apos;t need a team. You need a system.
          </p>
          <p
            className="font-body text-brand-text-dim max-w-[580px] mb-10"
            style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
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
      <FadeIn
        className="absolute bottom-10"
        style={{
          left: "clamp(24px, 5vw, 80px)",
          right: "clamp(24px, 5vw, 80px)",
        }}
      >
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
