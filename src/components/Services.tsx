import { Bot, Check, Database, PanelsTopLeft, Workflow } from "lucide-react";
import { services } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  const serviceIcons = [PanelsTopLeft, Database, Bot, Workflow];

  return (
    <section id="services" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Что делаю"
          title="Не витрина ради витрины, а рабочие инструменты под задачу"
          text="Можно начать с одного лендинга, а потом добавить CRM, Telegram-бота или автоматизацию процесса."
        />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <article className="card group flex h-full min-h-[480px] flex-col p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-mint/[0.12] px-3 py-1 text-sm font-semibold text-mint">{service.price}</p>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-mint/25 bg-mint/10 text-mint transition group-hover:border-mint/50 group-hover:bg-mint/15">
                  {(() => {
                    const Icon = serviceIcons[index];
                    return <Icon className="h-5 w-5" strokeWidth={2} />;
                  })()}
                </div>
              </div>
              <p className="text-sm leading-6 text-white/[0.62]">{service.description}</p>
              <div className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contacts" className="btn btn-secondary mt-auto justify-center pt-3">Обсудить</a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
