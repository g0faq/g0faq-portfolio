import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts, navigation } from "../data/siteData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = ["top", ...navigation.map((item) => item.href.slice(1))];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.6] });
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-ink/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3 focus-ring"><span className="logo-mark">g0</span><span className="font-display text-lg font-semibold text-white">g0_faq</span></a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className={`nav-link ${active === item.href ? "nav-link-active" : ""}`}>{item.label}</a>)}
        </nav>
        <a href={contacts.telegram} className="btn btn-secondary hidden lg:inline-flex">Написать</a>
        <button type="button" onClick={() => setIsOpen((value) => !value)} className="icon-button lg:hidden" aria-label={isOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={isOpen}>{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {isOpen ? <div className="border-t border-white/[0.08] bg-ink/95 px-5 py-5 backdrop-blur-2xl lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col gap-2">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/80">{item.label}</a>)}<a href={contacts.telegram} className="btn btn-primary mt-2 justify-center" onClick={() => setIsOpen(false)}>Написать</a></nav></div> : null}
    </header>
  );
}
