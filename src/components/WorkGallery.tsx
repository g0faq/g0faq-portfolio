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
      <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <SectionHeader
            eyebrow="Работы"
            title="Кейсы, демки и страницы готовых продуктов"
            text="Можно открыть интерактивную демку или перейти на отдельную страницу продукта, чтобы увидеть сценарий глазами клиента."
          />
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/60 sm:inline-flex">
              <MousePointer2 className="h-4 w-4 text-mint" />
              листается в бок
            </span>
            <button className="rail-button" type="button" onClick={() => scrollRail("left")} aria-label="Прокрутить кейсы влево">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="rail-button rail-button-accent" type="button" onClick={() => scrollRail("right")} aria-label="Прокрутить кейсы вправо">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div ref={railRef} className="horizontal-rail">
        {works.map((work) => (
          <Reveal key={work.title} className="min-w-[78vw] snap-start sm:min-w-[380px] lg:min-w-[410px]">
            <article className="case-card group h-full w-full text-left">
              <div className="relative overflow-hidden rounded-lg">
                <WorkMockup variant={work.variant} />
                <span className="status-badge absolute left-3 top-3">{work.status}</span>
              </div>
              <div className="flex min-h-[185px] flex-col p-4">
                <h3 className="case-title font-display text-xl font-semibold text-white">{work.title}</h3>
                <p className="case-desc mt-2 text-sm leading-6 text-white/[0.68]">{work.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {work.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <a href={`#/product/${work.slug}`} className="case-open case-open-primary">Посмотреть продукт <ArrowRight className="h-4 w-4" /></a>
                  <button type="button" onClick={() => setSelected(work)} className="case-open">Открыть демо</button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <CaseModal item={selected} onClose={closeModal} />
    </section>
  );
}
