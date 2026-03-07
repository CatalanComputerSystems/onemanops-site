"use client";

interface TierCardProps {
  name: string;
  price: string;
  priceSub: string;
  color: string;
  cta: string;
  popular: boolean;
}

export default function TierCard({
  name,
  price,
  priceSub,
  color,
  cta,
  popular,
}: TierCardProps) {
  return (
    <div
      className="tier-card"
      style={{
        background: "#0C0C0E",
        border: popular ? `2px solid ${color}` : "1px solid #1A1A1E",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        cursor: "default",
        boxShadow: popular
          ? `0 0 30px ${color}15, 0 4px 20px rgba(0,0,0,0.3)`
          : "0 4px 20px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = popular ? color : `${color}60`;
        e.currentTarget.style.boxShadow = `0 0 30px ${color}20, 0 8px 30px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = popular ? color : "#1A1A1E";
        e.currentTarget.style.boxShadow = popular
          ? `0 0 30px ${color}15, 0 4px 20px rgba(0,0,0,0.3)`
          : "0 4px 20px rgba(0,0,0,0.2)";
      }}
    >
      {popular && (
        <div
          style={{
            background: color,
            padding: "6px",
            textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          MOST POPULAR
        </div>
      )}
      <div style={{ padding: "28px" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "3px",
            color,
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "4px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "48px",
              color: "#FAFAFA",
              lineHeight: 1,
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#52525B",
            }}
          >
            {priceSub}
          </span>
        </div>
        <button
          className="glow-btn"
          style={{
            width: "100%",
            padding: "14px",
            background: popular ? color : "transparent",
            color: popular ? "#fff" : color,
            border: popular ? "none" : `1px solid ${color}40`,
            borderRadius: "4px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
