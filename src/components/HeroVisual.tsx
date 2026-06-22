import { motion } from "framer-motion";
import { ArrowUpRight, Bot, CheckCircle2, LayoutDashboard, MessageCircle, Sparkles } from "lucide-react";

const floatingCards = [
  { label: "Новая заявка", value: "+1 клиент", icon: MessageCircle, className: "left-0 top-6" },
  { label: "CRM", value: "12 сделок", icon: LayoutDashboard, className: "right-0 top-16" },
  { label: "Landing", value: "конверсия", icon: ArrowUpRight, className: "left-5 bottom-12" },
  { label: "Telegram bot", value: "уведомил", icon: Bot, className: "right-8 bottom-3" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[430px] w-full max-w-[560px]">
      <div className="absolute inset-8 rounded-[8px] bg-mint/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-12 w-[86%] -translate-x-1/2 overflow-hidden rounded-[8px] border border-white/[0.12] bg-panel-gradient p-4 shadow-violet backdrop-blur-2xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F7C948]" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/[0.55]">g0_faq workspace</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[8px] border border-white/10 bg-black/25 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/[0.45]">Лиды за неделю</p>
                <p className="mt-1 font-display text-3xl font-semibold text-white">37</p>
              </div>
              <span className="rounded-full bg-mint/[0.15] px-3 py-1 text-xs font-semibold text-mint">+28%</span>
            </div>
            <div className="flex h-28 items-end gap-2">
              {[44, 58, 42, 76, 64, 88, 72].map((height, index) => (
                <motion.span
                  key={height}
                  initial={{ height: 12 }}
                  animate={{ height }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.06 }}
                  className="flex-1 rounded-t-[6px] bg-gradient-to-t from-violet/75 to-mint"
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {["Заявка с сайта", "Бот отправил уведомление", "Оплата отмечена"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.1 }}
                className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] p-3"
              >
                <CheckCircle2 className="h-4 w-4 text-mint" />
                <span className="text-sm text-white/[0.74]">{item}</span>
              </motion.div>
            ))}
            <div className="rounded-[8px] border border-violet/25 bg-violet/10 p-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4 text-violet" />
                automation plan
              </div>
              <p className="mt-2 text-xs leading-5 text-white/[0.54]">site → bot → CRM → owner</p>
            </div>
          </div>
        </div>
      </motion.div>
      {floatingCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -9, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.55 + index * 0.1 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 },
            }}
            className={`absolute ${card.className} rounded-[8px] border border-white/[0.12] bg-[#10131c]/90 px-4 py-3 shadow-glow backdrop-blur-xl`}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-[8px] border border-mint/30 bg-mint/10">
                <Icon className="h-4 w-4 text-mint" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{card.label}</p>
                <p className="text-xs text-white/50">{card.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
