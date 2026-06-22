import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <Reveal><SectionHeader eyebrow="FAQ" title="Частые вопросы" text="Коротко о сроках, старте, публикации и дальнейшем развитии проекта." /></Reveal>
      <div className="mx-auto grid max-w-4xl gap-3">
        {faq.map(([question, answer], index) => {
          const active = open === index;
          return <Reveal key={question} delay={index * 0.035}><div className={`faq-item ${active ? "faq-item-active" : ""}`}><button className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6" onClick={() => setOpen(active ? null : index)} aria-expanded={active}><span className="font-display text-base font-semibold text-white sm:text-lg">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-mint transition ${active ? "rotate-180" : ""}`} /></button><AnimatePresence initial={false}>{active ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-7 text-white/[0.66] sm:px-6">{answer}</p></motion.div> : null}</AnimatePresence></div></Reveal>;
        })}
      </div>
    </section>
  );
}
