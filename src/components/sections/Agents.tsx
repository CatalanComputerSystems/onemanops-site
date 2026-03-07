import FadeIn from "../FadeIn";
import SectionLabel from "../SectionLabel";
import AgentCard from "../AgentCard";
import { agents } from "@/lib/constants";

export default function Agents() {
  return (
    <section
      id="agents"
      style={{
        padding: "100px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #111",
      }}
    >
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>YOUR TEAM</SectionLabel>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#FAFAFA",
              lineHeight: 1.1,
              letterSpacing: "1px",
            }}
          >
            Five agents. Five{" "}
            <span style={{ color: "#E8530E" }}>callsigns.</span>
          </h2>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {agents.map((agent, i) => (
          <FadeIn key={agent.callsign} delay={i * 0.08}>
            <AgentCard {...agent} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
