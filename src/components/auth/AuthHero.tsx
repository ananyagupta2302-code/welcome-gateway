import type { LucideIcon } from "lucide-react";
import { BarChart3, BrainCircuit, Waves } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Waves, title: "Accurate", text: "High precision temperature data" },
  { icon: BrainCircuit, title: "Intelligent", text: "AI models for better predictions" },
  { icon: BarChart3, title: "Insightful", text: "Real-time insights for better decisions" },
];

export function AuthHero() {
  return (
    <section className="max-w-xl">
      <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Understanding Oceans.
        <br />
        Powered by <span className="text-ocean-glow">AI</span>.
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        OceanEmbed uses advanced AI models to reconstruct subsurface ocean
        temperatures — delivering accurate, real-time insights for a healthier
        planet.
      </p>

      <ul className="mt-10 flex flex-wrap gap-6 sm:gap-8">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ocean-glow/50 bg-ocean-glow/10">
              <Icon className="h-5 w-5 text-ocean-glow" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold">{title}</span>
              <span className="block max-w-[9rem] text-xs leading-snug text-muted-foreground">
                {text}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <blockquote className="mt-10 rounded-xl border border-border bg-ocean-panel p-5 backdrop-blur-md">
        <p className="border-l-2 border-ocean-glow pl-4 text-sm leading-relaxed text-muted-foreground">
          Empowering scientists, researchers, and decision-makers to protect our
          oceans for a sustainable future.
        </p>
      </blockquote>
    </section>
  );
}
