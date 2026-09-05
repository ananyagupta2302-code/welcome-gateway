import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { OceanLogo } from "./OceanLogo";
import oceanBg from "@/assets/ocean-bg.jpg";

const NAV_ITEMS = ["Dashboard", "Analytics", "Map", "About Us"];

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ocean-deep font-sans text-foreground">
      <img
        src={oceanBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/40 to-ocean-deep/80" />

      <header className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link to="/" aria-label="OceanEmbed home" className="min-w-0">
          <OceanLogo />
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-muted-foreground sm:gap-7">
          <Link
            to="/"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          {NAV_ITEMS.map((item) => (
            <span key={item} className="hidden cursor-default md:inline">
              {item}
            </span>
          ))}
          <Link
            to="/signup"
            className="rounded-lg bg-gradient-to-r from-ocean-glow to-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pt-14">
        {children}
      </main>
    </div>
  );
}
