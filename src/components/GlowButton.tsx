import Link from "next/link";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}: GlowButtonProps) {
  const base: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "2px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    padding: "16px 36px",
    transition: "all 0.3s",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: "#E8530E",
      color: "#fff",
      border: "none",
    },
    secondary: {
      background: "transparent",
      color: "#A1A1AA",
      border: "1px solid #27272A",
    },
  };

  return (
    <Link
      href={href}
      className={`glow-btn ${className}`}
      style={{ ...base, ...variants[variant] }}
    >
      {children}
    </Link>
  );
}
