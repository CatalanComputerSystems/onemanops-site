"use client";

interface AgentCardProps {
  callsign: string;
  domain: string;
  icon: string;
  color: string;
  desc: string;
  stat: string;
  statLabel: string;
}

export default function AgentCard({
  callsign,
  domain,
  icon,
  color,
  desc,
  stat,
  statLabel,
}: AgentCardProps) {
  return (
    <div
      className="h-full"
      style={{
        background: "#0C0C0E",
        border: "1px solid #1A1A1E",
        borderRadius: "8px",
        padding: "28px",
        cursor: "default",
        transition: "all 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.backgroundColor = `${color}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1A1A1E";
        e.currentTarget.style.backgroundColor = "#0C0C0E";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
          gap: "12px",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <span style={{ fontSize: "28px", color }}>{icon}</span>
          <div
            className="font-mono"
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color,
              letterSpacing: "3px",
              marginTop: "8px",
            }}
          >
            {callsign}
          </div>
          <div
            className="font-body"
            style={{ fontSize: "12px", color: "#52525B", marginTop: "2px" }}
          >
            {domain} Operations
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div
            className="font-display"
            style={{ fontSize: "24px", color, lineHeight: 1 }}
          >
            {stat}
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: "9px",
              color: "#52525B",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {statLabel}
          </div>
        </div>
      </div>
      <p
        className="font-body"
        style={{
          fontSize: "14px",
          color: "#71717A",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
