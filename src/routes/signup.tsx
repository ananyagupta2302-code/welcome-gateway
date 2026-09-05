import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Mail, User } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHero } from "@/components/auth/AuthHero";
import { AuthCard, AuthDivider } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — OceanEmbed" },
      {
        name: "description",
        content:
          "Create your OceanEmbed account and start exploring AI-powered ocean insights.",
      },
      { property: "og:title", content: "Sign Up — OceanEmbed" },
      {
        property: "og:description",
        content:
          "Create your OceanEmbed account and start exploring AI-powered ocean insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <AuthLayout>
      <AuthHero />
      <AuthCard
        title="Create Your Account"
        subtitle="Join OceanEmbed and start exploring the power of AI for ocean insights."
        footer={
          <>
            <AuthDivider />
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-ocean-glow hover:underline">
                Login
              </Link>
            </p>
            <p className="mt-5 text-center text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <span className="text-ocean-glow">Terms of Service</span> and{" "}
              <span className="text-ocean-glow">Privacy Policy</span>.
            </p>
          </>
        }
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <AuthField
            id="signup-email"
            label="Gmail"
            icon={Mail}
            type="email"
            placeholder="Enter your Gmail address"
            autoComplete="email"
          />
          <AuthField
            id="signup-username"
            label="Username"
            icon={User}
            placeholder="Choose a username"
            autoComplete="username"
          />
          <AuthField
            id="signup-password"
            label="Password"
            icon={Lock}
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-ocean-glow to-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
          >
            Sign Up
          </button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
