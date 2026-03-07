export const agents = [
  {
    callsign: "CIPHER",
    domain: "Trading",
    icon: "◈",
    color: "#F59E0B",
    tailwindColor: "agent-cipher",
    desc: "17+ validated strategies. Market Cipher B mastery. Signal-based exits with documented 933% improvement over percentage-based exits.",
    stat: "933%",
    statLabel: "exit improvement",
  },
  {
    callsign: "VITALS",
    domain: "Longevity",
    icon: "◉",
    color: "#10B981",
    tailwindColor: "agent-vitals",
    desc: "Evidence-graded protocols. Tier 1/2/3 research classification. Biomarker tracking. Your personal health research lab.",
    stat: "3-Tier",
    statLabel: "evidence system",
  },
  {
    callsign: "BROADCAST",
    domain: "Content",
    icon: "◎",
    color: "#8B5CF6",
    tailwindColor: "agent-broadcast",
    desc: "Retention-optimized scripts. 45-second action rule. Competitive analysis. Built on real performance data, not theory.",
    stat: "45s",
    statLabel: "action rule",
  },
  {
    callsign: "VENTURE",
    domain: "Business",
    icon: "◆",
    color: "#EF4444",
    tailwindColor: "agent-venture",
    desc: "VALIDATE protocol. FREEDOM architecture. Revenue modeling. Location-independent business design from day one.",
    stat: "6-Step",
    statLabel: "VALIDATE protocol",
  },
  {
    callsign: "ARCHITECT",
    domain: "Systems",
    icon: "◇",
    color: "#06B6D4",
    tailwindColor: "agent-architect",
    desc: "57-67% accuracy gains from engineered prompts. 23% hallucination reduction. The meta-agent that builds all others.",
    stat: "67%",
    statLabel: "accuracy gain",
  },
] as const;

export const tiers = [
  {
    name: "RECON",
    price: "Free",
    priceSub: "forever",
    color: "#64748B",
    tailwindColor: "tier-recon",
    cta: "Start Recon",
    popular: false,
  },
  {
    name: "OPERATOR",
    price: "$97",
    priceSub: "/month",
    color: "#0EA5E9",
    tailwindColor: "tier-operator",
    cta: "Deploy as Operator",
    popular: false,
  },
  {
    name: "COMMANDER",
    price: "$297",
    priceSub: "/month",
    color: "#8B5CF6",
    tailwindColor: "tier-commander",
    cta: "Go Commander",
    popular: true,
  },
  {
    name: "ARCHITECT",
    price: "$2,500",
    priceSub: "/month",
    color: "#E8530E",
    tailwindColor: "tier-architect",
    cta: "Apply for Architect",
    popular: false,
  },
] as const;

export const features = [
  { name: "AI Agents", values: ["1 (demo)", "2 of choice", "All 5", "All 5 + custom"] },
  { name: "Knowledge Bases", values: ["Sample only", "Standard", "Premium + Lessons Learned", "Premium + custom builds"] },
  { name: "System Updates", values: ["—", "Weekly", "Priority + early access", "First access + R&D"] },
  { name: "Community", values: ["Read-only", "Full access", "Full access", "Private channel"] },
  { name: "Group Calls", values: ["—", "Monthly Q&A", "Bi-weekly strategy", "—"] },
  { name: "1:1 Sessions", values: ["—", "—", "—", "2x / month"] },
  { name: "Custom Agent Builds", values: ["—", "—", "Templates", "Full custom"] },
  { name: "White-Label Rights", values: ["—", "—", "—", "✓"] },
  { name: "Cross-Agent Workflows", values: ["—", "—", "✓", "✓"] },
  { name: "Direct Async Access", values: ["—", "—", "—", "Slack / Telegram"] },
] as const;

export const heroStats = [
  { val: "17+", label: "Validated strategies" },
  { val: "933%", label: "Exit improvement documented" },
  { val: "67%", label: "Accuracy gains from engineering" },
  { val: "23%", label: "Hallucination reduction" },
] as const;

export const deploySteps = [
  {
    step: "01",
    title: "Choose Your Tier",
    desc: "Start at Recon for free or deploy as Operator with 2 agents. Every tier unlocks more firepower.",
  },
  {
    step: "02",
    title: "Deploy Your Agents",
    desc: "Each agent arrives with loaded knowledge bases, verification protocols, and lessons learned from real operations.",
  },
  {
    step: "03",
    title: "Compound Your Edge",
    desc: "Agents learn from your outcomes. Knowledge bases grow. Your competitive advantage compounds every week.",
  },
] as const;
