import { motion } from "framer-motion";
import { processSteps } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section className="section section-tint-blue">
      <Reveal><SectionHeader eyebrow="Как работаем" title="Короткий путь от идеи до опубликованного решения" /></Reveal>
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-white/10 lg:block"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} className="h-full origin-left bg-premium-gradient" /></div>
        {processSteps.map((step, index) => <Reveal key={step} delay={index * 0.07}><article className="process-card"><p className="font-display text-5xl font-semibold text-white/10">0{index + 1}</p><span className="process-dot" /><p className="mt-8 text-base font-semibold leading-7 text-white">{step}</p><div className="mt-auto h-1 w-full rounded-full bg-premium-gradient" /></article></Reveal>)}
      </div>
    </section>
  );
}
