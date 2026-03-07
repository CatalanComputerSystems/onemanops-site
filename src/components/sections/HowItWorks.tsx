import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import { deploySteps } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #111",
      }}
    >
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <SectionLabel>DEPLOYMENT</SectionLabel>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#FAFAFA",
              lineHeight: 1.1,
              letterSpacing: "1px",
            }}
          >
            Three steps. <span style={{ color: "#E8530E" }}>Full ops.</span>
          </h2>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {deploySteps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.12}>
            <div
              style={{
                background: "#0C0C0E",
                border: "1px solid #1A1A1E",
                borderRadius: "8px",
                padding: "32px",
                textAlign: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "48px",
                  color: "#E8530E",
                  opacity: 0.3,
                  marginBottom: "8px",
                }}
              >
                {s.step}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#FAFAFA",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                {s.title}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#71717A",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
