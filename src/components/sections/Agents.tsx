import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import AgentCard from "../AgentCard";
import { agents } from "@/lib/constants";

export default function Agents() {
  return (
    <section
      id="agents"
      className="border-t border-brand-section-border"
      style={{ padding: "100px clamp(24px, 5vw, 80px)" }}
    >
      <FadeIn>
        <SectionLabel>YOUR TEAM</SectionLabel>
        <h2
          className="font-display text-brand-text-primary mb-12 tracking-[1px]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Five agents. Five{" "}
          <span className="text-brand-accent">callsigns.</span>
        </h2>
      </FadeIn>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {agents.slice(0, 3).map((agent, i) => (
          <FadeIn key={agent.callsign} delay={i * 0.08}>
            <AgentCard
              callsign={agent.callsign}
              domain={agent.domain}
              icon={agent.icon}
              color={agent.color}
              desc={agent.desc}
              stat={agent.stat}
              statLabel={agent.statLabel}
            />
          </FadeIn>
        ))}
      </div>

      {/* Bottom row: 2 cards, centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[calc(66.666%+8px)] mx-auto">
        {agents.slice(3).map((agent, i) => (
          <FadeIn key={agent.callsign} delay={(i + 3) * 0.08}>
            <AgentCard
              callsign={agent.callsign}
              domain={agent.domain}
              icon={agent.icon}
              color={agent.color}
              desc={agent.desc}
              stat={agent.stat}
              statLabel={agent.statLabel}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
