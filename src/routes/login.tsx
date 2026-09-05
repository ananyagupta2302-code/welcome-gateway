import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, User } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHero } from "@/components/auth/AuthHero";
import { AuthCard, AuthDivider, GoogleIcon } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — OceanEmbed" },
      {
        name: "description",
        content:
          "Log in to OceanEmbed to explore AI-powered subsurface ocean temperature insights.",
      },
      { property: "og:title", content: "Login — OceanEmbed" },
      {
        property: "og:description",
        content:
          "Log in to OceanEmbed to explore AI-powered subsurface ocean temperature insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthLayout>
      <AuthHero />
      <AuthCard
        title="Welcome Back"
        subtitle="Login to your account and continue exploring ocean insights."
        footer={
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-ocean-glow hover:underline">
              Sign Up
            </Link>
          </p>
        }
      >
        <p className="mb-3 text-sm font-semibold">Login with Gmail</p>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary-foreground py-3 text-sm font-semibold text-ocean-deep transition-opacity hover:opacity-90"
        >
          <GoogleIcon className="h-5 w-5" />
          Continue with Google
        </button>

        <AuthDivider />

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <p className="text-sm font-semibold">Login with Username</p>
          <AuthField
            id="login-username"
            label="Username or Email"
            hideLabel
            icon={User}
            placeholder="Username or Email"
            autoComplete="username"
          />
          <AuthField
            id="login-password"
            label="Password"
            icon={Lock}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-input bg-ocean-deep/60 accent-[#3b82f6]"
              />
              Remember me
            </label>
            <button type="button" className="text-ocean-glow hover:underline">
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-ocean-glow to-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
          >
            Login
          </button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
