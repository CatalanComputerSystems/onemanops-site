import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import AgentCard from "../AgentCard";
import { agents } from "@/lib/constants";

export default function Agents() {
  return (
    <section
      id="agents"
      className="py-[100px] px-[clamp(24px,5vw,80px)] border-t border-brand-section-border"
    >
      <FadeIn>
        <SectionLabel>YOUR TEAM</SectionLabel>
        <h2 className="font-display text-[clamp(36px,5vw,56px)] text-brand-text-primary leading-[1.1] mb-12 tracking-[1px]">
          Five agents. Five{" "}
          <span className="text-brand-accent">callsigns.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent, i) => (
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
    </section>
  );
}
