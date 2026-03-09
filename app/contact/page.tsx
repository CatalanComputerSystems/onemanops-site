export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-6 text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        Book a Discovery Call
      </h1>
      <p className="text-xl text-text-secondary mb-12 text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        Schedule a 30-minute discovery call to discuss your operations and get a customized deployment plan.
      </p>
      <div className="bg-bg-surface rounded-lg border border-border-default p-8">
        <p className="text-text-muted text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          [Booking widget placeholder — Cal.com or equivalent will be embedded here]
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Or Contact via Email
        </h2>
        <p className="text-text-secondary mb-6" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Prefer email? Send us a message with your requirements.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-1" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-border-default px-4 py-2 text-text-primary bg-bg-default focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-1" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-border-default px-4 py-2 text-text-primary bg-bg-default focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-1" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-lg border border-border-default px-4 py-2 text-text-primary bg-bg-default focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-blue px-6 py-3 text-white font-bold hover:bg-brand-blue-hover transition-colors"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
