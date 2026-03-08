export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #111",
        padding: "32px clamp(24px, 5vw, 80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20px",
            color: "#FAFAFA",
            letterSpacing: "2px",
          }}
        >
          ONE <span style={{ color: "#E8530E" }}>MAN</span> OPS
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "#3F3F46",
            marginTop: "4px",
          }}
        >
          You don&apos;t need a team. You need a system.
        </div>
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "#27272A",
          letterSpacing: "1px",
        }}
      >
        © 2026 ONE MAN OPS. ALL RIGHTS RESERVED.
        <span style={{ display: "block", marginTop: "4px", fontSize: "9px", color: "#1A1A1E" }}>v17</span>
      </div>
    </footer>
  );
}
