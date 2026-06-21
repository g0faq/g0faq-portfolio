import { Sparkles } from "lucide-react";
import { benefits } from "../data/siteData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Benefits() {
  return (
    <section className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Почему это удобно"
          title="Быстро, понятно и без раздутого процесса"
          text="Фокус не на бесконечном согласовании, а на быстрой проверке идеи и понятном результате."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={index * 0.05}>
            <article className="card h-full p-5">
              <Sparkles className="mb-5 h-5 w-5 text-mint" />
              <h3 className="font-display text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/[0.58]">{benefit.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
