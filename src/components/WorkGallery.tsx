import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { works } from "../data/siteData";
import { CaseModal } from "./CaseModal";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { WorkMockup } from "./WorkMockup";

export function WorkGallery() {
  const [selected, setSelected] = useState<(typeof works)[number] | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const scrollRail = useCallback((direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="works" className="section section-orbit section-tint-violet">
      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <SectionHeader
            eyebrow="Работы"
            title="Демо-кейсы, которые можно открыть и потыкать"
            text="Не просто картинки. Каждый кейс открывается как интерактивный прототип: формы, табы, статусы, сценарии, карточки и заглушки будущей логики."
          />
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/60 sm:inline-flex">
              <MousePointer2 className="h-4 w-4 text-mint" />
              листается в бок
            </span>
            <button className="icon-button" type="button" onClick={() => scrollRail("left")} aria-label="Прокрутить кейсы влево">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="icon-button" type="button" onClick={() => scrollRail("right")} aria-label="Прокрутить кейсы вправо">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div ref={railRef} className="horizontal-rail">
        {works.map((work) => (
          <Reveal key={work.title} className="min-w-[86vw] snap-start sm:min-w-[430px] lg:min-w-[470px]">
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
              <div className="flex min-h-[230px] flex-col p-4 sm:p-5">
                <h3 className="font-display text-2xl font-semibold text-white">{work.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.68]">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-mint">Открыть демо-прототип <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <CaseModal item={selected} onClose={closeModal} />
    </section>
  );
}
