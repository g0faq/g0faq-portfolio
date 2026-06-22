import { processSteps } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section className="section">
      <Reveal>
        <SectionHeader eyebrow="Как работаем" title="Короткий путь от идеи до опубликованного решения" />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05}>
            <article className="card relative flex min-h-[260px] h-full flex-col overflow-hidden p-5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet/[0.16] blur-2xl" />
              <p className="font-display text-5xl font-semibold text-white/10">0{index + 1}</p>
              <p className="mt-6 text-lg font-semibold leading-7 text-white">{step}</p>
              <div className="mt-auto h-1 w-full rounded-full bg-premium-gradient" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
