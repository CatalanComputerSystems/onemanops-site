import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";
import { heroStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden"
      style={{ minHeight: "100vh", padding: "0 clamp(24px, 5vw, 80px)" }}
    >
      {/* Grid background — 60px grid, accent at 3% */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(232,83,14,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,83,14,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line — 1px horizontal, accent 30%, 8s top-to-bottom */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(232,83,14,0.4) 50%, transparent 100%)",
          zIndex: 1,
          animation: "scan 8s linear infinite",
        }}
      />

      {/* Accent vertical line */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          left: "clamp(24px, 5vw, 80px)",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, transparent, #E8530E, transparent)",
          opacity: 0.2,
        }}
      />

      {/* Spacer top */}
      <div className="flex-1 min-h-[80px]" />

      {/* Hero content — left aligned, max-width 900px */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
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
            className="font-body text-brand-text-muted font-light"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              lineHeight: 1.6,
              maxWidth: "640px",
              marginBottom: "12px",
            }}
          >
            You don&apos;t need a team. You need a system.
          </p>
          <p
            className="font-body text-brand-text-dim"
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.7,
              maxWidth: "580px",
              marginBottom: "40px",
            }}
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

      {/* Spacer — tighter gap before stats */}
      <div className="flex-1 min-h-[40px] max-h-[80px]" />

      {/* Stats bar — flows at bottom of hero, not absolute */}
      <FadeIn delay={0.6} style={{ position: "relative", zIndex: 2, paddingBottom: "40px" }}>
        <div
          className="flex border-t border-brand-border pt-5"
          style={{ gap: "40px", flexWrap: "wrap" }}
        >
          {heroStats.map((s, i) => (
            <div key={i}>
              <div
                className="font-display text-brand-accent"
                style={{ fontSize: "28px", letterSpacing: "1px" }}
              >
                {s.val}
              </div>
              <div
                className="font-body text-brand-text-ghost uppercase"
                style={{ fontSize: "11px", letterSpacing: "1px" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
