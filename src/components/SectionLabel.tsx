interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="font-mono text-[11px] tracking-[4px] text-brand-text-ghost uppercase mb-3">
      {children}
    </div>
  );
}
