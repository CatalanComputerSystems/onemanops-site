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

      {/* All 5 agents — flex wrap, centered last row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {agents.map((agent, i) => (
          <FadeIn
            key={agent.callsign}
            delay={i * 0.08}
            style={{
              flex: "0 1 calc(33.333% - 11px)",
              minWidth: "280px",
            }}
          >
            <AgentCard {...agent} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
