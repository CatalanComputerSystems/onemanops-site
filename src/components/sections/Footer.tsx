export default function Footer() {
  return (
    <footer className="border-t border-brand-section-border py-8 px-[clamp(24px,5vw,80px)] flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        <div className="font-display text-xl text-brand-text-primary tracking-[2px]">
          ONE <span className="text-brand-accent">MAN</span> OPS
        </div>
        <div className="font-body text-xs text-brand-text-dead mt-1">
          You don&apos;t need a team. You need a system.
        </div>
      </div>
      <div className="font-mono text-[11px] text-brand-border-hover tracking-[1px]">
        © 2026 ONE MAN OPS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
