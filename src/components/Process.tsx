import { motion } from "framer-motion";
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
            <motion.article whileHover={{ y: -6 }} className="card relative h-full overflow-hidden p-5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet/[0.16] blur-2xl" />
              <p className="font-display text-5xl font-semibold text-white/10">0{index + 1}</p>
              <p className="mt-6 text-lg font-semibold leading-7 text-white">{step}</p>
              <motion.div
                animate={{ width: ["22%", "78%", "38%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className="mt-7 h-1 rounded-full bg-premium-gradient"
              />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
