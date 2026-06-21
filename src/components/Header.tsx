import { useState } from "react";
import { Menu, X } from "lucide-react";
import { contacts, navigation } from "../data/siteData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-mint/30 bg-mint/10 font-display text-sm font-bold text-mint shadow-glow">
            g0
          </span>
          <span className="font-display text-lg font-semibold text-white">g0_faq</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/[0.62] transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={contacts.telegram} className="btn btn-secondary">
            Написать
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.06] text-white lg:hidden"
          aria-label="Открыть меню"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-white/[0.08] bg-ink/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[8px] border border-white/[0.8] bg-white/[0.035] px-4 py-3 text-sm font-medium text-white/[0.78]"
              >
                {item.label}
              </a>
            ))}
            <a href={contacts.telegram} className="btn btn-primary mt-2 justify-center" onClick={() => setIsOpen(false)}>
              Написать
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
