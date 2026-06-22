import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { contacts, works } from "../data/siteData";
import { WorkMockup } from "./WorkMockup";

type CaseItem = (typeof works)[number];

type CaseModalProps = {
  item: CaseItem | null;
  onClose: () => void;
};

export function CaseModal({ item, onClose }: CaseModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!item) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="my-auto w-full max-w-5xl overflow-hidden rounded-xl border border-white/15 bg-[#0b0e14]/95 shadow-[0_40px_120px_rgba(0,0,0,0.65)] outline-none"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
              <span className="status-badge">{item.status}</span>
              <button onClick={onClose} className="icon-button" aria-label="Закрыть кейс">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <h2 id="case-modal-title" className="font-display text-3xl font-semibold text-white sm:text-4xl">{item.title}</h2>
                <p className="mt-5 text-base leading-7 text-white/70">{item.task}</p>
                <div className="mt-7">
                  <p className="eyebrow">Что внутри</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {item.inside.map((line) => (
                      <div key={line} className="flex gap-2.5 text-sm text-white/[0.72]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="mini-panel"><p className="eyebrow">Кому подходит</p><p className="mt-3 text-sm leading-6 text-white/[0.65]">{item.audience}</p></div>
                  <div className="mini-panel"><p className="eyebrow">Что развить дальше</p><p className="mt-3 text-sm leading-6 text-white/[0.65]">{item.growth}</p></div>
                </div>
                <a href={contacts.telegram} className="btn btn-primary mt-7 justify-center">
                  Написать по похожему проекту <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="self-start rounded-xl border border-violet/20 bg-violet/[0.06] p-3">
                <WorkMockup variant={item.variant} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
