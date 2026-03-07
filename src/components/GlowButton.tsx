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
  const base =
    "font-mono text-sm font-semibold tracking-[2px] rounded-[4px] cursor-pointer transition-all duration-300 inline-block text-center";

  const variants = {
    primary:
      "glow-btn bg-brand-accent text-white px-9 py-4",
    secondary:
      "px-9 py-4 bg-transparent text-brand-text-muted border border-brand-border-hover hover:border-brand-text-ghost",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
