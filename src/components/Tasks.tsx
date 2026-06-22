import { Bot, Cable, CalendarCheck, Inbox, Rocket } from "lucide-react";
import { tasks } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [CalendarCheck, Inbox, Rocket, Bot, Cable];

export function Tasks() {
  return (
    <section className="section section-tint-blue">
      <Reveal><SectionHeader eyebrow="Задачи" title="С какими задачами можно прийти" text="Не обязательно знать технические термины. Достаточно описать, что сейчас неудобно или что хочется автоматизировать." /></Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {tasks.map(([title, text], index) => {
          const Icon = icons[index];
          const size = index === 0 ? "lg:col-span-3 lg:row-span-2" : index === 4 ? "lg:col-span-3" : "lg:col-span-3";
          return <Reveal key={title} className={size} delay={index * 0.06}><article className={`task-card h-full ${index === 0 ? "min-h-[250px]" : "min-h-[165px]"}`}><span className="task-number">0{index + 1}</span><div className="icon-tile"><Icon className="h-5 w-5" /></div><h3 className="mt-auto pt-6 font-display text-2xl font-semibold text-white">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/[0.65]">{text}</p></article></Reveal>;
        })}
      </div>
    </section>
  );
}
