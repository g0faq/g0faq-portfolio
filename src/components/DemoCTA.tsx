import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contacts, demoBenefits } from "../data/siteData";
import { Reveal } from "./Reveal";

export function DemoCTA() {
  return (
    <section className="section section-tint-violet">
      <Reveal>
        <div className="demo-card grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow">Демо перед запуском</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">Можно начать с демки</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Вы скидываете нишу, ссылку на соцсети или пример. Я собираю первый вариант, чтобы было видно направление: структура, стиль, блоки и логика заявки.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {demoBenefits.map((item) => <div key={item} className="flex gap-2.5 text-sm text-white/[0.72]"><CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />{item}</div>)}
            </div>
            <a href={contacts.telegram} className="btn btn-primary mt-8">Написать @g0_faq <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative mx-auto w-full max-w-lg rounded-xl border border-white/10 bg-black/25 p-5 sm:p-7">
            <div className="absolute inset-0 -z-10 bg-violet/15 blur-3xl" />
            <p className="text-sm font-semibold text-white/55">Путь до запуска</p>
            <div className="mt-7 space-y-3">
              {["ниша", "демка", "правки", "запуск"].map((item, index) => <div className="relative flex items-center gap-4" key={item}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-mint/[0.35] bg-mint/10 font-display text-sm font-semibold text-mint">0{index + 1}</span><div className="h-px flex-1 overflow-hidden bg-white/10"><span className="demo-flow block h-full bg-premium-gradient" style={{ animationDelay: `${index * 0.35}s` }} /></div><span className="w-16 text-right text-sm font-semibold text-white/80">{item}</span></div>)}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
