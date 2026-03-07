import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";
import { heroStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "0 clamp(24px, 5vw, 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
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

      {/* Scan line */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,83,14,0.4) 50%, transparent 100%)",
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
          background:
            "linear-gradient(to bottom, transparent, #E8530E, transparent)",
          opacity: 0.2,
        }}
      />

      {/* Hero content — left aligned, max-width 900px, vertically centered */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
        <FadeIn>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#E8530E",
              marginBottom: "20px",
            }}
          >
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
            className="font-display"
            style={{
              fontSize: "clamp(64px, 10vw, 120px)",
              lineHeight: 0.9,
              fontWeight: 400,
              letterSpacing: "2px",
              color: "#FAFAFA",
              marginBottom: "24px",
            }}
          >
            ONE <span style={{ color: "#E8530E" }}>MAN</span>
            <br />
            OPS
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="font-body"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              lineHeight: 1.6,
              color: "#A1A1AA",
              maxWidth: "640px",
              marginBottom: "12px",
              fontWeight: 300,
            }}
          >
            You don&apos;t need a team. You need a system.
          </p>
          <p
            className="font-body"
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.7,
              color: "#71717A",
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
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <GlowButton href="#tiers">DEPLOY NOW →</GlowButton>
            <GlowButton href="#agents" variant="secondary">
              VIEW AGENTS
            </GlowButton>
          </div>
        </FadeIn>
      </div>

      {/* Stats bar — absolute at bottom 40px, matching reference exactly */}
      <FadeIn
        delay={0.6}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "clamp(24px, 5vw, 80px)",
          right: "clamp(24px, 5vw, 80px)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            borderTop: "1px solid #1A1A1E",
            paddingTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {heroStats.map((s, i) => (
            <div key={i}>
              <div
                className="font-display"
                style={{
                  fontSize: "28px",
                  color: "#E8530E",
                  letterSpacing: "1px",
                }}
              >
                {s.val}
              </div>
              <div
                className="font-body"
                style={{
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
      </FadeIn>
    </section>
  );
}
