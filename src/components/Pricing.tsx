import { pricing } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="section section-tint-green">
      <Reveal>
        <SectionHeader
          eyebrow="Прайс"
          title="Понятный старт без раздутой сметы"
          text="Цены ориентировочные, чтобы сразу было понятно, с какого бюджета можно начинать разговор."
        />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-5">
        {pricing.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article className="card flex h-full min-h-[220px] flex-col p-5">
              <p className="font-display text-xl font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-2xl font-semibold text-mint">{item.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/[0.58]">{item.text}</p>
              <a href="#contacts" className="mt-auto pt-6 text-sm font-semibold text-mint transition hover:text-white">Обсудить →</a>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-5 rounded-[8px] border border-mint bg-mint p-5 text-sm font-medium leading-6 text-ink/[0.85] shadow-glow">
          Точная цена зависит от задачи. Можно начать с простой демки и постепенно расширять проект.
        </div>
      </Reveal>
    </section>
  );
}
