import { Bot, Contact, FileInput, Gauge, LayoutDashboard, PanelsTopLeft, UserRound, Workflow } from "lucide-react";
import { buildOptions } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [PanelsTopLeft, Contact, LayoutDashboard, Bot, UserRound, FileInput, Gauge, Workflow];

export function BuildOptions() {
  return (
    <section id="solutions" className="section section-mesh">
      <Reveal><SectionHeader eyebrow="Решения" title="Что можно собрать под ваш бизнес" text="Можно начать с простой страницы, а потом расширить её до CRM, бота или автоматизации." /></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {buildOptions.map(([title, text], index) => {
          const Icon = icons[index];
          return <Reveal key={title} delay={index * 0.05}><article className={`solution-card ${index === 2 || index === 7 ? "sm:col-span-2" : ""}`}><div className="icon-tile"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/[0.64]">{text}</p><div className="mt-6 h-px bg-gradient-to-r from-mint/60 via-violet/30 to-transparent" /></article></Reveal>;
        })}
      </div>
    </section>
  );
}
