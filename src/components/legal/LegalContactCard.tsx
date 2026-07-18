import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function LegalContactCard({ copy }: { copy: string }) {
  return (
    <Reveal>
      <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 text-center lg:p-10">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
          <Mail size={18} strokeWidth={1.75} aria-hidden />
        </span>
        <p className="mx-auto mt-5 max-w-sm text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]/90">
          {copy}
        </p>
        <div className="mt-6">
          <Button href="mailto:info@kweli.solutions" variant="secondary">
            info@kweli.solutions
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
