import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Man Ops — Security-Isolated OpenClaw for Business Operations",
  description: "Multi-agent OpenClaw deployments with role-isolated architecture. Cost transparency, failure mode runbooks, and human-in-the-loop oversight. From $1,500 setup.",
  openGraph: {
    title: "One Man Ops — Security-Isolated OpenClaw for Business Operations",
    description: "Multi-agent OpenClaw deployments with role-isolated architecture. Cost transparency, failure mode runbooks, and human-in-the-loop oversight.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b border-border-default bg-bg-default">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-text-primary" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  onemanops
                </a>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <a href="/services" className="text-text-secondary hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Services</a>
                <a href="/how-it-works" className="text-text-secondary hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>How It Works</a>
                <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>About</a>
                <a href="/case-studies" className="text-text-secondary hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Case Studies</a>
                <a href="/faq" className="text-text-secondary hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>FAQ</a>
                <a href="/contact" className="rounded-lg bg-brand-blue px-4 py-2 text-white font-bold hover:bg-brand-blue-hover transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  Book a Call
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border-default bg-bg-surface mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>onemanops</h3>
                <p className="text-text-secondary text-sm" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Security-isolated OpenClaw deployments for business operations.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Services</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><a href="/services" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Pricing & Tiers</a></li>
                  <li><a href="/how-it-works" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>How It Works</a></li>
                  <li><a href="/case-studies" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Company</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><a href="/about" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>About</a></li>
                  <li><a href="/faq" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>FAQ</a></li>
                  <li><a href="/contact" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary mb-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Connect</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><a href="https://github.com/CatalanComputerSystems" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border-default text-center text-sm text-text-muted" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              © {new Date().getFullYear()} One Man Ops. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
