import { ArrowRight, MousePointer2 } from "lucide-react";
import { contacts, heroBadges } from "../data/siteData";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-24">
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-mint/[0.14] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/[0.68] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(121,242,192,0.8)]" />
              Быстрые digital-решения для малого бизнеса
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              Лендинги, CRM и боты для малого бизнеса
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl">
              Собираю быстрые digital-решения под реальные задачи: сайт для заявок, простую CRM, Telegram-бота или автоматизацию. Без лишней бюрократии, с понятной ценой и быстрым запуском.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#works" className="btn btn-primary">
                Посмотреть работы
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={contacts.telegram} className="btn btn-secondary">
                Написать @g0_faq
                <MousePointer2 className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-white/[0.72] backdrop-blur-xl">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <HeroVisual />
      </div>
    </section>
  );
}
