import { ArrowRight, CheckCircle2, Github, Send } from "lucide-react";
import { contacts } from "../data/siteData";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contacts" className="section pb-16">
      <Reveal><div className="cta-card grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12"><div><p className="eyebrow">Начать проект</p><h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">Хотите сайт, CRM или бота без лишней возни?</h2><p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">Напишите мне в любой соцсети: @g0_faq. Скиньте нишу, ссылку на соцсети или пример того, что нравится. Я предложу структуру и покажу, как это может выглядеть.</p><div className="mt-7 flex flex-wrap gap-3 text-sm text-white/[0.65]"><span className="indicator"><CheckCircle2 className="h-4 w-4 text-mint" />Понятный старт</span><span className="indicator"><CheckCircle2 className="h-4 w-4 text-mint" />Быстрая демка</span></div></div><div className="rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5"><a href={contacts.telegram} className="btn btn-primary w-full justify-center">Написать @g0_faq <ArrowRight className="h-4 w-4" /></a><div className="mt-3 grid grid-cols-3 gap-3"><a href={contacts.vk} className="social-link">VK</a><a href={contacts.github} target="_blank" rel="noreferrer" className="social-link"><Github className="h-4 w-4" />GitHub</a><a href={contacts.other} className="social-link"><Send className="h-4 w-4" />Other</a></div><div className="mt-5 grid grid-cols-3 gap-2">{["landing", "CRM", "bot"].map((item, i) => <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 text-center" key={item}><span className={`mx-auto block h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-violet" : "bg-mint"}`} /><p className="mt-2 text-xs text-white/55">{item}</p></div>)}</div></div></div></Reveal>
    </section>
  );
}
