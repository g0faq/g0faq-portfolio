import { works } from "../data/siteData";

type WorkVariant = (typeof works)[number]["variant"];

type WorkMockupProps = {
  variant: WorkVariant;
};

export function WorkMockup({ variant }: WorkMockupProps) {
  if (variant === "bot") {
    return (
      <div className="mockup-shell bg-gradient-to-br from-[#0C1820] to-[#14111F]">
        <div className="mx-auto w-[70%] rounded-[8px] border border-mint/20 bg-black/[0.28] p-3">
          <div className="mb-3 h-8 rounded-[8px] bg-mint/[0.18]" />
          <div className="ml-auto mb-2 h-7 w-[72%] rounded-[8px] bg-violet/[0.28]" />
          <div className="mb-2 h-7 w-[66%] rounded-[8px] bg-white/10" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <span className="h-7 rounded-[8px] bg-mint/20" />
            <span className="h-7 rounded-[8px] bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "crm" || variant === "finance") {
    return (
      <div className="mockup-shell bg-gradient-to-br from-[#09130F] via-[#12131B] to-[#20163A]">
        <div className="grid h-full grid-cols-[0.35fr_1fr] gap-3">
          <div className="rounded-[8px] border border-white/10 bg-black/30 p-3">
            <span className="mb-4 block h-6 rounded-[8px] bg-mint/25" />
            <span className="mb-2 block h-3 rounded-full bg-white/[0.14]" />
            <span className="mb-2 block h-3 rounded-full bg-white/10" />
            <span className="block h-3 rounded-full bg-white/[0.8]" />
          </div>
          <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-3">
            <div className="mb-3 grid grid-cols-3 gap-2">
              <span className="h-10 rounded-[8px] bg-mint/[0.18]" />
              <span className="h-10 rounded-[8px] bg-violet/[0.18]" />
              <span className="h-10 rounded-[8px] bg-white/10" />
            </div>
            {[0, 1, 2].map((item) => (
              <div key={item} className="mb-2 grid grid-cols-[1fr_0.45fr_0.3fr] gap-2">
                <span className="h-6 rounded-full bg-white/[0.12]" />
                <span className="h-6 rounded-full bg-white/[0.8]" />
                <span className="h-6 rounded-full bg-mint/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "storage") {
    return (
      <div className="mockup-shell bg-gradient-to-br from-[#0B1018] to-[#172A22]">
        <div className="mx-auto grid h-full max-w-[86%] grid-cols-[0.55fr_1fr] gap-3">
          <div className="rounded-[8px] border border-white/[0.12] bg-black/[0.32] p-3">
            <div className="mx-auto mb-3 h-16 w-10 rounded-[8px] bg-premium-gradient" />
            <span className="mb-2 block h-3 rounded-full bg-white/[0.15]" />
            <span className="block h-3 rounded-full bg-white/[0.8]" />
          </div>
          <div className="space-y-2">
            <div className="h-12 rounded-[8px] border border-mint/20 bg-mint/[0.12]" />
            <div className="grid grid-cols-2 gap-2">
              <span className="h-14 rounded-[8px] bg-white/10" />
              <span className="h-14 rounded-[8px] bg-violet/[0.16]" />
            </div>
            <div className="h-8 rounded-[8px] bg-white/[0.8]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mockup-shell ${variant === "barber" ? "bg-gradient-to-br from-[#1C1512] to-[#10131C]" : "bg-gradient-to-br from-[#10131C] via-[#111827] to-[#191638]"}`}>
      <div className="rounded-[8px] border border-white/[0.12] bg-black/[0.28] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-mint/60" />
          </div>
          <span className="h-3 w-16 rounded-full bg-white/[0.12]" />
        </div>
        <div className="grid grid-cols-[1fr_0.7fr] gap-3">
          <div>
            <span className="mb-2 block h-5 rounded-full bg-white/[0.24]" />
            <span className="mb-2 block h-3 rounded-full bg-white/[0.13]" />
            <span className="mb-4 block h-3 w-[72%] rounded-full bg-white/10" />
            <span className="block h-9 w-28 rounded-[8px] bg-premium-gradient" />
          </div>
          <div className="rounded-[8px] bg-gradient-to-br from-mint/[0.24] to-violet/[0.24]" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <span className="h-10 rounded-[8px] bg-white/[0.8]" />
        <span className="h-10 rounded-[8px] bg-mint/[0.12]" />
        <span className="h-10 rounded-[8px] bg-white/[0.8]" />
      </div>
    </div>
  );
}
