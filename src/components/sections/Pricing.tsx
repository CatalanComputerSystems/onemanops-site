import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import TierCard from "../TierCard";
import { tiers, features } from "@/lib/constants";

export default function Pricing() {
  return (
    <section
      id="tiers"
      style={{
        padding: "100px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #111",
      }}
    >
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>CHOOSE YOUR LEVEL</SectionLabel>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#FAFAFA",
              lineHeight: 1.1,
              letterSpacing: "1px",
            }}
          >
            Recon → Operator → Commander →{" "}
            <span style={{ color: "#E8530E" }}>Architect</span>
          </h2>
        </div>
      </FadeIn>

      {/* Tier Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          maxWidth: "1100px",
          margin: "0 auto 60px",
        }}
      >
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <TierCard
              name={tier.name}
              price={tier.price}
              priceSub={tier.priceSub}
              color={tier.color}
              cta={tier.cta}
              popular={tier.popular}
            />
          </FadeIn>
        ))}
      </div>

      {/* Feature Comparison Matrix */}
      <FadeIn>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#52525B",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            DETAILED COMPARISON
          </div>
          <div
            style={{
              background: "#0C0C0E",
              borderRadius: "10px",
              border: "1px solid #1A1A1E",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px repeat(4, 1fr)",
                borderBottom: "1px solid #1A1A1E",
              }}
            >
              <div style={{ padding: "16px 20px" }} />
              {tiers.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: "16px 14px",
                    textAlign: "center",
                    borderLeft: "1px solid #1A1A1E",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: t.color,
                      fontWeight: 700,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "22px",
                      color: "#FAFAFA",
                      marginTop: "2px",
                    }}
                  >
                    {t.price}
                  </div>
                </div>
              ))}
            </div>
            {/* Rows */}
            {features.map((feat, fi) => (
              <div
                key={feat.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px repeat(4, 1fr)",
                  borderBottom:
                    fi < features.length - 1 ? "1px solid #1A1A1E" : "none",
                  background: fi % 2 === 0 ? "transparent" : "#0A0A0C",
                }}
              >
                <div
                  style={{
                    padding: "14px 20px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "#A1A1AA",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {feat.name}
                </div>
                {feat.values.map((val, vi) => (
                  <div
                    key={vi}
                    style={{
                      padding: "14px",
                      textAlign: "center",
                      borderLeft: "1px solid #1A1A1E",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color:
                        val === "—"
                          ? "#2A2A2E"
                          : val === "✓"
                          ? "#10B981"
                          : "#D4D4D8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
