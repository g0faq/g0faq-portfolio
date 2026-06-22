import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, Users } from "lucide-react";
import { useCallback, useState } from "react";
import { works } from "../data/siteData";
import { CaseModal } from "./CaseModal";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { WorkMockup } from "./WorkMockup";

export function WorkGallery() {
  const [selected, setSelected] = useState<(typeof works)[number] | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const featured = works[1];

  return (
    <section id="works" className="section section-orbit">
      <Reveal>
        <SectionHeader
          eyebrow="Работы"
          title="Демо-кейсы под реальные бизнес-задачи"
          text="Часть проектов — демо-концепты. Я собираю их так, как делал бы для реального бизнеса: с оффером, структурой, логикой заявки, адаптивом и понятным сценарием для клиента."
        />
      </Reveal>

      <Reveal>
        <article className="featured-card mb-5 grid overflow-hidden lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <span className="status-badge w-fit">Демо / в разработке</span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-mint">Featured case</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">CRM для репетитора</h3>
            <p className="mt-5 text-base leading-7 text-white/70">Система для учёта учеников, занятий, оплат, домашних заданий и расписания. Проект показывает, как ручной процесс превратить в понятный личный кабинет.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["ученики и карточки клиентов", "расписание занятий", "оплаты и статусы", "домашние задания", "прогресс по темам", "админ / ученик / родитель"].map((item) => (
                <div className="flex gap-2.5 text-sm text-white/[0.72]" key={item}><CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />{item}</div>
              ))}
            </div>
            <button onClick={() => setSelected(featured)} className="btn btn-secondary mt-8 w-fit">Смотреть кейс <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="relative min-h-[420px] border-t border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgba(121,242,192,0.17),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(155,124,255,0.22),transparent_40%)] p-5 lg:border-l lg:border-t-0 sm:p-8">
            <div className="absolute left-4 top-5 z-10 card-float"><Users className="h-4 w-4 text-mint" /><span>18 учеников</span></div>
            <div className="absolute right-4 top-16 z-10 card-float"><CalendarDays className="h-4 w-4 text-violet" /><span>Урок в 16:00</span></div>
            <div className="relative top-16 mx-auto max-w-xl rotate-[1deg] transition duration-500 hover:rotate-0 hover:scale-[1.015]"><WorkMockup variant="crm" /></div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {works.map((work, index) => (
          <Reveal key={work.title} delay={index * 0.055} className={index === 0 || index === 5 ? "xl:col-span-2" : ""}>
            <motion.button
              type="button"
              onClick={() => setSelected(work)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="case-card group h-full w-full text-left"
            >
              <div className="relative overflow-hidden rounded-lg">
                <WorkMockup variant={work.variant} />
                <span className="status-badge absolute left-3 top-3">{work.status}</span>
              </div>
              <div className="flex h-[250px] flex-col p-4">
                <h3 className="font-display text-xl font-semibold text-white">{work.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.64]">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-mint">Смотреть кейс <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <CaseModal item={selected} onClose={closeModal} />
    </section>
  );
}
