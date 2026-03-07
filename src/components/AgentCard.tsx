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
      className="group bg-brand-card border border-brand-border rounded-lg p-7 cursor-default transition-all duration-300 h-full"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}80`;
        e.currentTarget.style.backgroundColor = `${color}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <div className="flex justify-between items-start mb-4 gap-3">
        <div className="min-w-0">
          <span className="text-[28px]" style={{ color }}>
            {icon}
          </span>
          <div
            className="font-mono text-lg font-bold tracking-[3px] mt-2"
            style={{ color }}
          >
            {callsign}
          </div>
          <div className="font-body text-xs text-brand-text-ghost mt-0.5">
            {domain} Operations
          </div>
        </div>
        <div className="text-right shrink-0">
          <div
            className="font-display leading-none"
            style={{ color, fontSize: "clamp(24px, 3vw, 32px)" }}
          >
            {stat}
          </div>
          <div className="font-mono text-[9px] text-brand-text-ghost tracking-[1px] uppercase">
            {statLabel}
          </div>
        </div>
      </div>
      <p className="font-body text-sm text-brand-text-dim leading-relaxed m-0">
        {desc}
      </p>
    </div>
  );
}
