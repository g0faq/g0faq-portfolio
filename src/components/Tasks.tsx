import { Bot, Cable, CalendarCheck, Inbox, Rocket } from "lucide-react";
import { tasks } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [CalendarCheck, Inbox, Rocket, Bot, Cable];

export function Tasks() {
  return (
    <section className="section section-tint-blue">
      <Reveal><SectionHeader eyebrow="Задачи" title="С какими задачами можно прийти" text="Не обязательно знать технические термины. Достаточно описать, что сейчас неудобно или что хочется автоматизировать." /></Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {tasks.map(([title, text], index) => {
          const Icon = icons[index];
          return <Reveal key={title} delay={index * 0.05}><article className="task-card h-full min-h-[185px]"><span className="task-number">0{index + 1}</span><div className="icon-tile"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/[0.65]">{text}</p></article></Reveal>;
        })}
      </div>
    </section>
  );
}
