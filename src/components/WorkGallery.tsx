import { motion } from "framer-motion";
import { works } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { WorkMockup } from "./WorkMockup";

export function WorkGallery() {
  return (
    <section id="works" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Работы"
          title="Демо-кейсы, которые показывают подход, вкус и структуру"
          text="В галерее не серые placeholders, а разные интерфейсные сцены: лендинги, CRM, боты, приложения и автоматизации."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {works.map((work, index) => (
          <Reveal key={work.title} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className={`group h-full overflow-hidden rounded-[8px] border border-white/10 bg-panel-gradient p-3 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl ${index === 0 || index === 5 ? "xl:col-span-2" : ""}`}
            >
              <WorkMockup variant={work.variant} />
              <div className="p-3">
                <div className="mb-3">
                  <h3 className="font-display text-xl font-semibold text-white">{work.title}</h3>
                </div>
                <p className="text-sm leading-6 text-white/[0.58]">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/[0.58]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
