import { ArrowRight, Bell, ChevronRight, Clock, CreditCard, Lock, MessageCircle, PlugZap, Search, Send, Star, UserRound, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { works } from "../data/siteData";

type CaseItem = (typeof works)[number];
type WorkVariant = CaseItem["variant"];

type CasePrototypeProps = {
  item: CaseItem;
};

export function CasePrototype({ item }: CasePrototypeProps) {
  const [tab, setTab] = useState("Главная");
  const [selected, setSelected] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [sent, setSent] = useState(false);

  const labels = useMemo(() => getLabels(item.variant), [item.variant]);
  const accent = getAccent(item.variant);

  if (item.variant === "bot") {
    return (
      <PrototypeShell item={item} labels={labels} accent={accent} tab={tab} setTab={setTab}>
        <div className="mx-auto flex max-w-[420px] flex-col rounded-2xl border border-white/10 bg-[#101824]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-sky-400/20 text-sky-200"><MessageCircle className="h-5 w-5" /></div>
            <div><p className="font-semibold text-white">g0_sales_bot</p><p className="text-xs text-emerald-200">online</p></div>
          </div>
          <ChatBubble>Здравствуйте. Выберите услугу, чтобы оставить заявку.</ChatBubble>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Лендинг", "CRM", "Бот", "Автоматизация"].map((button, index) => (
              <button key={button} onClick={() => setSelected(index)} className={`prototype-button ${selected === index ? "prototype-button-active" : ""}`}>{button}</button>
            ))}
          </div>
          <ChatBubble side="right">Интересует {["лендинг", "CRM", "бот", "автоматизация"][selected]}</ChatBubble>
          <ChatBubble>Принял. Куда отправить расчёт и демку?</ChatBubble>
          <div className="mt-3 flex gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2">
            <input className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-white/35" placeholder="@username или телефон" />
            <button onClick={() => setSent(true)} className="grid h-10 w-10 place-items-center rounded-lg bg-sky-300 text-slate-950"><Send className="h-4 w-4" /></button>
          </div>
          {sent ? <p className="mt-3 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">Заявка сохранена, владелец получил уведомление.</p> : null}
        </div>
      </PrototypeShell>
    );
  }

  if (item.variant === "crm") {
    return (
      <PrototypeShell item={item} labels={labels} accent={accent} tab={tab} setTab={setTab}>
        <div className="grid gap-4 lg:grid-cols-[0.62fr_1.38fr]">
          <aside className="prototype-panel">
            {["Ученики", "Занятия", "Оплаты", "Домашки"].map((label, index) => (
              <button key={label} onClick={() => setSelected(index)} className={`prototype-nav ${selected === index ? "prototype-nav-active" : ""}`}>
                <UserRound className="h-4 w-4" />{label}
              </button>
            ))}
          </aside>
          <div className="prototype-panel">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div><p className="text-sm text-white/50">Сегодня</p><h4 className="font-display text-2xl font-semibold text-white">{selected === 2 ? "Оплаты и долги" : "Карточки учеников"}</h4></div>
              <button onClick={() => setEnabled(!enabled)} className="btn btn-primary min-h-10 px-4 py-2">Добавить запись</button>
            </div>
            <div className="mt-5 grid gap-3">
              {["Аня Смирнова", "Илья Орлов", "Мария Ким"].map((name, index) => (
                <button key={name} onClick={() => setSelected(index)} className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-mint/35 sm:grid-cols-[1fr_.6fr_.45fr]">
                  <span><b className="block text-white">{name}</b><span className="text-sm text-white/45">Английский / уровень B1</span></span>
                  <span className="text-sm text-white/65">урок: {["16:00", "18:30", "завтра"][index]}</span>
                  <span className={`rounded-full px-3 py-1 text-center text-xs font-semibold ${index === 1 ? "bg-rose-300/15 text-rose-100" : "bg-emerald-300/15 text-emerald-100"}`}>{index === 1 ? "долг" : "оплачено"}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-mint/20 bg-mint/10 p-4 text-sm text-white/75">{enabled ? "Автонапоминание включено: ученик получит сообщение за 2 часа до занятия." : "Запись добавлена в расписание. Можно прикрепить домашнее задание."}</div>
          </div>
        </div>
      </PrototypeShell>
    );
  }

  if (item.variant === "storage") {
    return (
      <PrototypeShell item={item} labels={labels} accent={accent} tab={tab} setTab={setTab}>
        <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
          <div className="prototype-panel">
            <p className="text-sm text-white/50">Бокс A-17</p>
            <h4 className="mt-2 font-display text-5xl font-semibold text-white">04:28</h4>
            <p className="mt-2 text-sm text-white/55">до конца оплаченного времени</p>
            <button onClick={() => setEnabled(!enabled)} className={`mt-6 flex w-full items-center justify-between rounded-2xl border p-4 text-left ${enabled ? "border-emerald-300/35 bg-emerald-300/10" : "border-white/10 bg-white/[0.04]"}`}>
              <span><b className="block text-white">{enabled ? "Доступ открыт" : "Доступ закрыт"}</b><span className="text-sm text-white/50">умный замок</span></span>
              <Lock className="h-5 w-5 text-mint" />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Электричество", "Баланс", "История", "Продлить"].map((label, index) => (
              <button key={label} onClick={() => setSelected(index)} className={`prototype-panel text-left transition ${selected === index ? "border-mint/35 bg-mint/10" : ""}`}>
                <div className="icon-tile">{index === 0 ? <Zap className="h-5 w-5" /> : index === 1 ? <CreditCard className="h-5 w-5" /> : index === 2 ? <Clock className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}</div>
                <h4 className="mt-5 font-display text-xl font-semibold text-white">{label}</h4>
                <p className="mt-2 text-sm text-white/55">{["розетка активна", "1 840 ₽", "12 операций", "+ 1 час"][index]}</p>
              </button>
            ))}
          </div>
        </div>
      </PrototypeShell>
    );
  }

  if (item.variant === "automation") {
    return (
      <PrototypeShell item={item} labels={labels} accent={accent} tab={tab} setTab={setTab}>
        <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
          <div className="prototype-panel">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Search className="h-4 w-4 text-mint" />
              <input className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35" placeholder="Заявка, документ, клиент или задача" />
              <button onClick={() => setEnabled(!enabled)} className="rounded-lg bg-mint px-3 py-2 text-xs font-semibold text-ink">Анализ</button>
            </div>
            <div className="mt-4 grid gap-3">
              {["Контакт найден", "Не хватает бюджета", "Нужно уточнить срок", "Создана задача владельцу"].map((line, index) => (
                <div key={line} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-sm text-white/72">{line}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${index === 1 || index === 2 ? "bg-amber-300/15 text-amber-100" : "bg-emerald-300/15 text-emerald-100"}`}>{index === 1 || index === 2 ? "проверить" : "ок"}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="prototype-panel">
            <p className="eyebrow">automation score</p>
            <div className="mt-4 grid aspect-square place-items-center rounded-full border-[18px] border-mint/25 bg-mint/10">
              <div className="text-center"><p className="font-display text-6xl font-semibold text-white">{enabled ? "74" : "81"}</p><p className="text-sm text-white/50">из 100</p></div>
            </div>
          </div>
        </div>
      </PrototypeShell>
    );
  }

  return (
    <PrototypeShell item={item} labels={labels} accent={accent} tab={tab} setTab={setTab}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
        <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${getHeroGradient(item.variant)} p-5 sm:p-7`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="logo-mark">{item.variant === "brand" ? "P" : item.variant === "service" ? "S" : "BZ"}</div>
            <nav className="flex gap-2 text-xs text-white/65">
              {labels.tabs.map((label) => <button key={label} onClick={() => setTab(label)} className={`rounded-full px-3 py-2 ${tab === label ? "bg-white text-ink" : "bg-white/10"}`}>{label}</button>)}
            </nav>
          </div>
          <div className="mt-10 max-w-2xl">
            <p className="eyebrow">{labels.eyebrow}</p>
            <h4 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">{labels.headline}</h4>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/72">{labels.copy}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => setSent(true)} className="btn btn-primary">{sent ? "Заявка отправлена" : labels.primary}</button>
              <button onClick={() => setSelected((value) => (value + 1) % 3)} className="btn btn-secondary">{labels.secondary}</button>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {labels.cards.map((card, index) => (
            <button key={card} onClick={() => setSelected(index)} className={`prototype-panel min-h-[150px] text-left ${selected === index ? "border-mint/40 bg-mint/10" : ""}`}>
              <Star className="h-5 w-5 text-mint" />
              <p className="mt-5 font-semibold text-white">{card}</p>
              <p className="mt-2 text-sm text-white/50">Кликабельный блок демо</p>
            </button>
          ))}
        </div>
      </div>
    </PrototypeShell>
  );
}

function PrototypeShell({ item, labels, accent, tab, setTab, children }: { item: CaseItem; labels: ReturnType<typeof getLabels>; accent: string; tab: string; setTab: (value: string) => void; children: ReactNode }) {
  return (
    <div className={`prototype-shell ${accent}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
        <div>
          <p className="eyebrow">интерактивная демка</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">{item.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {labels.tabs.map((label) => (
            <button key={label} onClick={() => setTab(label)} className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${tab === label ? "border-mint/50 bg-mint/15 text-mint" : "border-white/10 bg-white/[0.04] text-white/55 hover:text-white"}`}>{label}</button>
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
      <div className="flex flex-wrap items-center gap-3 border-t border-white/10 p-4 text-sm text-white/55 sm:p-5">
        <span className="indicator"><PlugZap className="h-4 w-4 text-mint" />клики работают как прототип</span>
        <span className="indicator"><Bell className="h-4 w-4 text-violet" />интеграции в заглушках</span>
        <span className="indicator"><ChevronRight className="h-4 w-4 text-mint" />можно развить в реальный продукт</span>
      </div>
    </div>
  );
}

function ChatBubble({ children, side = "left" }: { children: ReactNode; side?: "left" | "right" }) {
  return <div className={`mt-3 max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${side === "right" ? "ml-auto bg-violet/25 text-white" : "bg-white/[0.07] text-white/72"}`}>{children}</div>;
}

function getAccent(variant: WorkVariant) {
  const accents: Record<WorkVariant, string> = {
    beauty: "prototype-beauty",
    crm: "prototype-crm",
    bot: "prototype-bot",
    storage: "prototype-storage",
    automation: "prototype-finance",
    brand: "prototype-brand",
    service: "prototype-service",
  };
  return accents[variant];
}

function getHeroGradient(variant: WorkVariant) {
  if (variant === "beauty") return "from-[#402034] via-[#182030] to-[#0a1012]";
  if (variant === "brand") return "from-[#241b46] via-[#17202d] to-[#091015]";
  if (variant === "automation") return "from-[#17343b] via-[#161d2e] to-[#15112a]";
  return "from-[#12342a] via-[#1a2032] to-[#15112a]";
}

function getLabels(variant: WorkVariant) {
  const data: Record<WorkVariant, { tabs: string[]; eyebrow: string; headline: string; copy: string; primary: string; secondary: string; cards: string[] }> = {
    beauty: { tabs: ["Лендинг", "Запись", "CRM"], eyebrow: "beauty system", headline: "Услуги, запись и клиентская база для beauty", copy: "Лендинг приводит клиента к записи, CRM помогает видеть визиты, оплаты и повторные касания.", primary: "Записать клиента", secondary: "Открыть CRM", cards: ["Услуги и прайс", "Клиентская база", "Напоминания"] },
    crm: { tabs: ["Ученики", "Занятия", "Оплаты"], eyebrow: "education crm", headline: "Ученики, занятия и оплаты в одном месте", copy: "Прототип CRM показывает, как заменить хаос таблиц рабочим кабинетом для репетитора или мини-школы.", primary: "Добавить ученика", secondary: "Открыть расписание", cards: ["Учёт учеников", "Статусы оплат", "Домашние задания"] },
    bot: { tabs: ["Меню", "Заявка", "Уведомления"], eyebrow: "telegram scenarios", headline: "Бот принимает заявки, отвечает и пишет владельцу", copy: "Сценарии для записи, FAQ, статусов заказов, заявок, меню услуг и уведомлений.", primary: "Запустить сценарий", secondary: "Меню услуг", cards: ["Кнопки", "Форма", "Уведомление"] },
    storage: { tabs: ["Кабинет", "Баланс", "История"], eyebrow: "client cabinet", headline: "Кабинет, баланс, доступы и история операций", copy: "Мини-приложение для клиента: статусы, действия, уведомления, история и понятный контроль.", primary: "Продлить услугу", secondary: "Открыть доступ", cards: ["Доступ", "Баланс", "История"] },
    automation: { tabs: ["Заявка", "Статусы", "AI"], eyebrow: "automation hub", headline: "Автоматизация разбирает заявку и ставит задачи", copy: "Связка формы, Telegram, таблицы, CRM и AI-сводки для повторяющихся процессов.", primary: "Запустить анализ", secondary: "Открыть сценарий", cards: ["Скоринг", "Статусы", "Уведомления"] },
    brand: { tabs: ["Лендинг", "Запись", "CRM"], eyebrow: "psychology / experts", headline: "Упаковка специалиста плюс учёт консультаций", copy: "Спокойная личная страница, анкета перед записью, календарь сессий, клиенты и оплаты.", primary: "Записать на сессию", secondary: "Открыть анкету", cards: ["Позиционирование", "Календарь", "Клиенты"] },
    service: { tabs: ["Оффер", "Отзывы", "Заявка"], eyebrow: "service business", headline: "Лендинг для заявок без лишней воды", copy: "Оффер, доверие, преимущества и форма заявки под локальный сервис или услугу.", primary: "Оставить заявку", secondary: "Как работаем", cards: ["Оффер", "Отзывы", "Форма"] },
  };
  return data[variant];
}
