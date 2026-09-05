import { cn } from "@/lib/utils";

export function OceanLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ocean-glow/70">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-5 w-5 text-ocean-glow"
          aria-hidden="true"
        >
          <path d="M2 8c2.5-2 5-2 7.5 0S15 10 17.5 8 21 7 22 8" />
          <path d="M2 13c2.5-2 5-2 7.5 0s5.5 2 8 0 3.5-1 4.5 0" />
          <path d="M2 18c2.5-2 5-2 7.5 0s5.5 2 8 0 3.5-1 4.5 0" />
        </svg>
      </div>
      <div className="leading-tight">
        <p className="text-lg font-bold tracking-wide">
          OCEAN<span className="text-ocean-glow">EMBED</span>
        </p>
        <p className="text-[10px] text-muted-foreground">
          AI Powered Subsurface Ocean Temperature Reconstruction
        </p>
      </div>
    </div>
  );
}
