import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";
import { heroStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#060607",
      }}
    >
      {/* Grid background */}
      <div
        className="hero-grid"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Scan line */}
      <div className="hero-scanline" />

      {/* Accent vertical line */}
      <div
        style={{
          position: "absolute",
          left: "clamp(24px, 5vw, 80px)",
          top: 0,
          bottom: 0,
          width: "2px",
          background:
            "linear-gradient(to bottom, transparent, #E8530E, transparent)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      {/* Hero content — centered both vertically and horizontally */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: "90%",
          maxWidth: "900px",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <div>
          <FadeIn>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "4px",
                color: "#E8530E",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              <span
                className="pulse-indicator"
                style={{ display: "inline-block" }}
              >
                ▸
              </span>{" "}
              SYSTEM ONLINE — 5 AGENTS DEPLOYED
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(64px, 10vw, 120px)",
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: "2px",
                color: "#FAFAFA",
                marginBottom: "24px",
                whiteSpace: "nowrap",
              }}
            >
              ONE <span style={{ color: "#E8530E" }}>MAN</span> OPS
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.6,
                color: "#A1A1AA",
                maxWidth: "640px",
                margin: "0 auto 12px",
                fontWeight: 300,
              }}
            >
              You don&apos;t need a team. You need a system.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                lineHeight: 1.7,
                color: "#71717A",
                maxWidth: "580px",
                margin: "0 auto 40px",
              }}
            >
              Five AI agents. Trading. Longevity. Content. Business. Systems.
              Built on thousands of hours of battle-tested strategies and
              real-world validated outcomes. Deploy your unfair advantage.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <GlowButton href="#tiers">DEPLOY NOW →</GlowButton>
              <GlowButton href="#agents" variant="secondary">
                VIEW AGENTS
              </GlowButton>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats bar — absolute at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "clamp(24px, 5vw, 80px)",
          right: "clamp(24px, 5vw, 80px)",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            borderTop: "1px solid #1A1A1E",
            paddingTop: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {heroStats.map((s, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "28px",
                  color: "#E8530E",
                  letterSpacing: "1px",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  color: "#52525B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
