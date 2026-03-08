import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";

export default function Philosophy() {
  return (
    <section
      style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #111",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <SectionLabel>THE PHILOSOPHY</SectionLabel>
          <blockquote
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#FAFAFA",
              lineHeight: 1.2,
              marginBottom: "24px",
              letterSpacing: "1px",
            }}
          >
            &ldquo;Whatever you are not changing, you are
            <br />
            <span style={{ color: "#E8530E" }}>choosing.</span>&rdquo;
          </blockquote>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "#71717A",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            One Man Ops isn&apos;t a product. It&apos;s a decision. A decision
            that one person, armed with the right systems, can outperform entire
            teams. That evidence beats opinion. That verification beats guessing.
            That compounding knowledge bases beat starting from scratch every day.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#52525B",
              lineHeight: 1.7,
            }}
          >
            Every agent is built on real outcomes — validated trades, documented
            improvements, tested frameworks. Not theory. Not vibes. Forged
            systems.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
