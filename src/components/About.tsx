import { Code2, Layers3, Zap } from "lucide-react";
import { aboutCards, aboutText } from "../data/siteData";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase text-mint">Обо мне</p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Не просто делаю сайты. Собираю инструменты для заявок, учёта и продаж.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-white/[0.66] sm:text-lg">
              {aboutText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["landing", "CRM", "bot", "automation"].map((item) => (
                <span key={item} className="rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4">
          <Reveal>
            <div className="card overflow-hidden p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-[8px] bg-premium-gradient font-display text-lg font-bold text-ink">
                    g0
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-white">g0_faq</p>
                    <p className="text-sm text-white/[0.52]">digital tools for small business</p>
                  </div>
                </div>
                <Zap className="h-5 w-5 text-mint" />
              </div>
              <div className="mt-5 rounded-[8px] border border-mint/25 bg-mint/10 p-4">
                <p className="font-display text-lg font-semibold text-white">design + code + business logic</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.68]">Собираю понятный путь от первого клика до заявки, учёта и следующего действия владельца.</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
                  <Code2 className="mb-3 h-5 w-5 text-mint" />
                  <p className="text-sm font-semibold text-white">React / CRM / Bot</p>
                </div>
                <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
                  <Layers3 className="mb-3 h-5 w-5 text-violet" />
                  <p className="text-sm font-semibold text-white">Структура / UX / запуск</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="card h-full p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/[0.58]">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
