type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-7 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 font-display text-sm font-semibold uppercase text-mint">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-white/[0.62] sm:text-lg">{text}</p> : null}
    </div>
  );
}
