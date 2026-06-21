import { ArrowRight } from "lucide-react";
import { contacts } from "../data/siteData";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contacts" className="section pb-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[8px] border border-white/[0.12] bg-panel-gradient p-6 shadow-violet backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-mint/[0.18] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 translate-y-1/2 rounded-full bg-violet/[0.18] blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Хотите сайт или CRM без лишней возни?</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/[0.68] sm:text-lg">
                Напишите мне в любой соцсети: @g0_faq. Скиньте нишу, ссылку на соцсети или пример того, что нравится. Я предложу структуру и покажу, как это может выглядеть.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={contacts.telegram} className="btn btn-primary justify-center">
                Написать @g0_faq
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="grid grid-cols-3 gap-3">
                <a href={contacts.vk} className="social-link">
                  VK
                </a>
                <a href={contacts.instagram} className="social-link">
                  Instagram
                </a>
                <a href={contacts.other} className="social-link">
                  Other
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
