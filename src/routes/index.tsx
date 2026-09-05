import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHero } from "@/components/auth/AuthHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OceanEmbed — AI Powered Subsurface Ocean Temperature Reconstruction" },
      {
        name: "description",
        content:
          "OceanEmbed uses advanced AI models to reconstruct subsurface ocean temperatures, delivering accurate, real-time insights for a healthier planet.",
      },
      { property: "og:title", content: "OceanEmbed — Understanding Oceans, Powered by AI" },
      {
        property: "og:description",
        content:
          "Advanced AI models reconstructing subsurface ocean temperatures for real-time, high-precision ocean insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AuthLayout>
      <AuthHero />
      <div className="flex w-full max-w-md flex-col gap-4 justify-self-center rounded-2xl border border-border bg-ocean-panel p-8 shadow-2xl shadow-black/50 backdrop-blur-xl lg:justify-self-end">
        <h2 className="text-center text-2xl font-bold">Get Started</h2>
        <p className="text-center text-sm text-muted-foreground">
          Log in or create an account to explore ocean temperature insights.
        </p>
        <Link
          to="/login"
          className="mt-2 rounded-lg bg-gradient-to-r from-ocean-glow to-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-lg border border-input bg-ocean-deep/60 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-ocean-glow"
        >
          Create an Account
        </Link>
      </div>
    </AuthLayout>
  );
}
