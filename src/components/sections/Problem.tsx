import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";

const withoutItems = [
  "Generic ChatGPT responses with no domain expertise",
  "Rebuilding context every conversation",
  "No verification — confident hallucinations",
  "Zero lessons learned integration",
  "Strategies based on theory, not validated outcomes",
];

const withItems = [
  "5 specialized agents with deep domain knowledge",
  "Persistent knowledge bases that compound over time",
  "Mandatory verification protocols on every output",
  "Lessons learned from 1000s of real decisions",
  "Strategies validated with documented performance data",
];

export default function Problem() {
  return (
    <section style={{ padding: "120px clamp(24px, 5vw, 80px)", borderTop: "1px solid #111" }}>
      <FadeIn>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#FAFAFA",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "1px",
            }}
          >
            You&apos;re operating in{" "}
            <span style={{ color: "#E8530E" }}>five domains</span> with zero backup
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "#71717A",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}
          >
            Trading decisions at 2 AM. Content deadlines. Health optimization
            research. Business strategy. Prompt engineering. You&apos;re doing the
            work of five departments with one brain, one pair of hands, and 24
            hours. Generic AI gives you generic results. You need specialized
            operators.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Without */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#EF4444",
                marginBottom: "16px",
              }}
            >
              WITHOUT ONE MAN OPS
            </div>
            {withoutItems.map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  fontSize: "14px",
                  color: "#71717A",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#EF4444", flexShrink: 0 }}>✗</span> {item}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(232,83,14,0.2), transparent)",
              minHeight: "200px",
              alignSelf: "stretch",
            }}
          />

          {/* With */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#10B981",
                marginBottom: "16px",
              }}
            >
              WITH ONE MAN OPS
            </div>
            {withItems.map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  fontSize: "14px",
                  color: "#D4D4D8",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#10B981", flexShrink: 0 }}>→</span> {item}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
