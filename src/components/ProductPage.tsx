import { ArrowLeft, ArrowRight, Bell, CalendarDays, Check, Database, ExternalLink, LayoutDashboard, MessageCircle, Send, Settings, Sparkles, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { contacts, works } from "../data/siteData";

type Product = (typeof works)[number];

type ProductPageProps = {
  product: Product;
};

type ProductSpec = {
  eyebrow: string;
  title: string;
  lead: string;
  primary: string;
  secondary: string;
  metrics: string[];
  tabs: string[];
  steps: string[];
  rows: string[];
};

export function ProductPage({ product }: ProductPageProps) {
  const spec = useMemo(() => getProductSpec(product), [product]);
  const [tab, setTab] = useState(spec.tabs[0]);
  const [selected, setSelected] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-product text-white">
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#090d0f]/[0.86] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <a href="/#works" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Назад к портфолио
          </a>
          <a href={contacts.telegram} className="btn btn-primary min-h-10 px-4 py-2">
            Обсудить похожий продукт <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="product-section pt-10 sm:pt-14">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="product-kicker">{spec.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">{spec.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{spec.lead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setSent(true)} className="btn btn-primary">
                  {sent ? "Заявка в интерфейсе" : spec.primary} <Send className="h-4 w-4" />
                </button>
                <a href={contacts.telegram} className="btn btn-secondary">
                  {spec.secondary} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {spec.metrics.map((metric) => (
                  <div key={metric} className="product-stat">{metric}</div>
                ))}
              </div>
            </div>

            <div className="product-device">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                </div>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/45">product.g0_faq</span>
              </div>
              <div className="grid gap-4 p-4 lg:grid-cols-[0.7fr_1.3fr]">
                <aside className="space-y-2">
                  {spec.tabs.map((item, index) => (
                    <button key={item} onClick={() => { setTab(item); setSelected(index); }} className={`product-tab ${tab === item ? "product-tab-active" : ""}`}>
                      {index === 0 ? <LayoutDashboard className="h-4 w-4" /> : index === 1 ? <UserRound className="h-4 w-4" /> : index === 2 ? <Bell className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
                      {item}
                    </button>
                  ))}
                </aside>
                <ProductSurface product={product} spec={spec} selected={selected} sent={sent} />
              </div>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="product-panel">
              <p className="product-kicker">Как выглядит продукт</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Не картинка в портфолио, а сценарий, который можно показать клиенту.</h2>
              <p className="mt-4 text-base leading-7 text-white/64">Страница продукта показывает, как будет работать система: где клиент оставляет заявку, где владелец видит статусы, какие данные сохраняются и что можно расширить дальше.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {spec.steps.map((step, index) => (
                <button key={step} onClick={() => setSelected(index % spec.tabs.length)} className="product-step">
                  <span>0{index + 1}</span>
                  <b>{step}</b>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section pb-14">
          <div className="product-panel product-final">
            <div>
              <p className="product-kicker">Следующий шаг</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">Такой продукт можно адаптировать под вашу нишу.</h2>
            </div>
            <a href={contacts.telegram} className="btn btn-primary">Написать @g0_faq <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProductSurface({ product, spec, selected, sent }: { product: Product; spec: ProductSpec; selected: number; sent: boolean }) {
  return (
    <div className="product-screen">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-white/45">{product.tags.join(" / ")}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">{spec.tabs[selected] ?? spec.tabs[0]}</h3>
        </div>
        <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1.5 text-xs font-semibold text-mint">{sent ? "новая заявка" : "online"}</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {spec.metrics.map((metric, index) => (
          <div key={metric} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3">
            <p className="text-xs text-white/40">{["заявки", "клиенты", "статус"][index] ?? "метрика"}</p>
            <p className="mt-2 font-display text-xl font-semibold text-white">{metric}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3">
        {spec.rows.map((row, index) => (
          <div key={row} className={`product-row ${index === selected ? "product-row-active" : ""}`}>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-mint">
              {index % 3 === 0 ? <CalendarDays className="h-4 w-4" /> : index % 3 === 1 ? <Database className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            </div>
            <div>
              <b className="block text-sm text-white">{row}</b>
              <span className="text-xs text-white/45">Кликабельный блок готового продукта</span>
            </div>
            <Check className="ml-auto h-4 w-4 text-mint" />
          </div>
        ))}
      </div>
    </div>
  );
}

function getProductSpec(product: Product): ProductSpec {
  const base: Record<Product["variant"], ProductSpec> = {
    crm: {
      eyebrow: "Готовый продукт / образование",
      title: "CRM для репетитора: ученики, занятия, оплаты и домашки",
      lead: "Рабочий кабинет для специалиста или мини-школы: расписание, карточки учеников, статусы оплат и быстрые напоминания.",
      primary: "Добавить ученика",
      secondary: "Запросить адаптацию",
      metrics: ["24 ученика", "8 занятий", "3 долга"],
      tabs: ["Дашборд", "Ученики", "Оплаты", "Настройки"],
      steps: ["Клиент оставляет заявку", "Ученик попадает в CRM", "Уроки и оплаты видны в одном месте", "Напоминания уходят автоматически"],
      rows: ["Аня Смирнова / английский B1", "Оплата за июнь отмечена", "Домашнее задание прикреплено", "Напоминание за 2 часа"],
    },
    beauty: {
      eyebrow: "Готовый продукт / beauty",
      title: "Лендинг и CRM для салона, мастера или студии красоты",
      lead: "Снаружи — аккуратная страница услуг и записи. Внутри — клиентская база, визиты, статусы и повторные касания.",
      primary: "Записать клиента",
      secondary: "Собрать под салон",
      metrics: ["37 лидов", "12 визитов", "5 повторов"],
      tabs: ["Лендинг", "Запись", "Клиенты", "Повторы"],
      steps: ["Клиент выбирает услугу", "Оставляет контакт и удобное время", "Мастер получает уведомление", "CRM напоминает о повторном визите"],
      rows: ["Маникюр / 19:30", "Новый клиент из Telegram", "Повторная запись через 21 день", "Статус: подтверждено"],
    },
    brand: {
      eyebrow: "Готовый продукт / experts",
      title: "Страница специалиста и CRM для консультаций",
      lead: "Личная упаковка без лишней суеты: направления работы, запись на консультацию, анкета, календарь и учёт оплат.",
      primary: "Записать на консультацию",
      secondary: "Адаптировать под эксперта",
      metrics: ["9 заявок", "6 сессий", "2 анкеты"],
      tabs: ["Страница", "Запись", "Клиенты", "Материалы"],
      steps: ["Человек понимает специализацию", "Заполняет короткую анкету", "Сессия попадает в расписание", "После встречи сохраняются материалы"],
      rows: ["Первичная консультация", "Анкета перед сессией", "Оплата отмечена", "Материалы отправлены клиенту"],
    },
    bot: {
      eyebrow: "Готовый продукт / Telegram",
      title: "Telegram-бот для заявок, меню и уведомлений",
      lead: "Клиент выбирает сценарий в Telegram, оставляет контакт, а владелец сразу получает понятное уведомление.",
      primary: "Протестировать сценарий",
      secondary: "Собрать бота",
      metrics: ["4 сценария", "18 заявок", "1 минута"],
      tabs: ["Меню", "Заявки", "Уведомления", "Интеграции"],
      steps: ["Бот показывает меню", "Собирает данные", "Отправляет уведомление владельцу", "Передаёт заявку в таблицу или CRM"],
      rows: ["Кнопка: услуги", "Контакт получен", "Уведомление владельцу", "Запись в таблицу"],
    },
    automation: {
      eyebrow: "Готовый продукт / automation",
      title: "Автоматизация заявок, статусов, таблиц и AI-сводок",
      lead: "Система связывает форму, Telegram, таблицу, CRM и AI-помощника, чтобы повторяющиеся действия не делались руками.",
      primary: "Запустить сценарий",
      secondary: "Разобрать процесс",
      metrics: ["6 шагов", "3 канала", "74 score"],
      tabs: ["Процесс", "Заявки", "AI-сводка", "Логи"],
      steps: ["Заявка приходит из формы", "Данные проверяются", "Статус обновляется", "Владелец получает сводку"],
      rows: ["Заявка проверена", "Не хватает бюджета", "Создана задача", "AI-сводка готова"],
    },
    service: {
      eyebrow: "Готовый продукт / services",
      title: "Лендинг для сервисного бизнеса, который ведёт к заявке",
      lead: "Страница объясняет услугу, показывает доверие, снимает базовые вопросы и ведёт человека к контакту.",
      primary: "Оставить заявку",
      secondary: "Собрать лендинг",
      metrics: ["1 оффер", "5 блоков", "2 CTA"],
      tabs: ["Оффер", "Услуги", "Отзывы", "Заявка"],
      steps: ["Человек понимает предложение", "Смотрит услуги и кейсы", "Видит доверие", "Оставляет заявку"],
      rows: ["Оффер на первом экране", "Блок услуг", "Отзывы и доверие", "Форма заявки"],
    },
    storage: {
      eyebrow: "Готовый продукт / cabinet",
      title: "Кабинет клиента: баланс, доступы, статусы и история",
      lead: "Мини-приложение для продукта, где важны доступы, оплаты, история операций и понятный клиентский интерфейс.",
      primary: "Открыть доступ",
      secondary: "Собрать кабинет",
      metrics: ["1 840 ₽", "12 операций", "online"],
      tabs: ["Кабинет", "Баланс", "Доступы", "История"],
      steps: ["Клиент видит статус", "Управляет доступом", "Продлевает услугу", "Получает уведомления"],
      rows: ["Доступ открыт", "Баланс активен", "История операций", "Продление на 1 час"],
    },
  };

  return base[product.variant];
}
