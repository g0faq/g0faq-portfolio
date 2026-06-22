import { contacts, navigation } from "../data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.8] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">g0_faq</p>
          <p className="mt-2 text-sm text-white/[0.52]">Лендинги, CRM, Telegram-боты и автоматизации</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/[0.55]">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 text-sm text-white/[0.55]">
          <a href={contacts.telegram} className="transition hover:text-mint">
            Telegram: @g0_faq
          </a>
          <span>VK: @g0_faq</span>
          <a href={contacts.github} className="transition hover:text-mint" target="_blank" rel="noreferrer">
            GitHub: g0faq
          </a>
        </div>
      </div>
    </footer>
  );
}
