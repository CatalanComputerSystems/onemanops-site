import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-text-primary mb-6" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Security-Isolated OpenClaw for Business Operations
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Multi-agent deployments with role-isolated architecture. Cost transparency, failure mode runbooks, and human-in-the-loop oversight. Designed for consultants, fractional executives, and service agencies.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="rounded-lg bg-brand-blue px-6 py-3 text-white font-bold hover:bg-brand-blue-hover transition-colors inline-block" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Book a Discovery Call
            </Link>
            <Link href="/services" className="rounded-lg border border-brand-blue text-brand-blue px-6 py-3 font-bold hover:bg-brand-blue-light transition-colors inline-block" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-default rounded-lg border border-border-default p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Cost Transparency
              </h3>
              <p className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Monthly cost breakdown reports. Know exactly what you're paying for API calls, infrastructure, and maintenance — no surprise bills.
              </p>
            </div>
            <div className="bg-bg-default rounded-lg border border-border-default p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Failure Mode Runbooks
              </h3>
              <p className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Documented recovery procedures for every known failure mode. When something breaks, you know what to do.
              </p>
            </div>
            <div className="bg-bg-default rounded-lg border border-border-default p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Human-in-the-Loop
              </h3>
              <p className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                8–10 hours per day of human oversight on all agent output. Every automated action is reviewed before execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Overview Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Service Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-surface rounded-lg border border-border-default p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Foundation
              </h3>
              <p className="text-text-muted mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                For solo operators
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$1,500</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$500</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <li>✓ 3 agents (Operator, Inbox, Watchdog)</li>
                <li>✓ Role-isolated architecture</li>
                <li>✓ Architecture documentation</li>
                <li>✓ Monthly operations review</li>
              </ul>
              <Link href="/services" className="block w-full text-center rounded-lg bg-brand-blue px-6 py-3 text-white font-bold hover:bg-brand-blue-hover transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Learn More
              </Link>
            </div>

            <div className="bg-bg-surface rounded-lg border-2 border-brand-blue p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Popular
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Growth
              </h3>
              <p className="text-text-muted mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                For small agencies
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$3,000</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$1,000</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <li>✓ 5 agents (adds Signal + Ledger)</li>
                <li>✓ Full role isolation</li>
                <li>✓ Parallel processing</li>
                <li>✓ All Foundation features</li>
              </ul>
              <Link href="/services" className="block w-full text-center rounded-lg bg-brand-blue px-6 py-3 text-white font-bold hover:bg-brand-blue-hover transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Learn More
              </Link>
            </div>

            <div className="bg-bg-surface rounded-lg border border-border-default p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Custom
              </h3>
              <p className="text-text-muted mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                For complex operations
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$5K–$15K</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>$2.5K–$5K</span>
                <span className="text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <li>✓ Custom agent count</li>
                <li>✓ Full architecture consultation</li>
                <li>✓ All Growth features</li>
                <li>✓ Priority support</li>
              </ul>
              <Link href="/contact" className="block w-full text-center rounded-lg border border-brand-blue text-brand-blue px-6 py-3 font-bold hover:bg-brand-blue-light transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="bg-bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Trusted By Operators
          </h2>
          <p className="text-center text-text-muted" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Case studies and testimonials coming soon.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Ready to Deploy Security-Isolated Agents?
          </h2>
          <p className="text-xl text-text-secondary mb-8" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Book a discovery call to discuss your operations and get a customized deployment plan.
          </p>
          <Link href="/contact" className="rounded-lg bg-brand-blue px-6 py-3 text-white font-bold hover:bg-brand-blue-hover transition-colors inline-block" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Book Your Call Now
          </Link>
        </div>
      </section>
    </div>
  );
}
