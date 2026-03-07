import FadeIn from "../FadeIn";
import GlowButton from "../GlowButton";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #111",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(232,83,14,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <FadeIn>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#FAFAFA",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "1px",
            }}
          >
            STOP OPERATING
            <br />
            LIKE A <span style={{ color: "#E8530E" }}>ONE MAN BAND.</span>
            <br />
            START OPERATING
            <br />
            LIKE A <span style={{ color: "#E8530E" }}>ONE MAN OPS.</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "#71717A",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Deploy your first agent today. Free at Recon. No credit card. No
            commitment. Just capability.
          </p>
          <a
            href="/pricing"
            className="glow-btn"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              padding: "18px 48px",
              background: "#E8530E",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              cursor: "pointer",
              display: "inline-block",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            DEPLOY NOW →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
