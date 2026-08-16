const fs = require("fs");

function write(filePath, content) {
  const dir = filePath.substring(0, filePath.lastIndexOf("/"));
  if (dir) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log("wrote " + filePath);
}

write("app/globals.css", `@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

:root {
  --bg: #060608;
  --ink: #f5f4f0;
  --muted: #8f8f96;
  --line: #232228;
  --accent: #ff3d5a;
  --accent2: #7c3aff;
}

body {
  background-color: var(--bg);
  color: var(--ink);
  font-family: var(--font-body), sans-serif;
  -webkit-font-smoothing: antialiased;
}

.font-display { font-family: var(--font-display), sans-serif; }
.font-mono { font-family: var(--font-mono), monospace; }

@keyframes float-a {
  0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); }
  33% { transform: translate(4%,6%) scale(1.08) rotate(8deg); }
  66% { transform: translate(-3%,-4%) scale(0.94) rotate(-6deg); }
}
@keyframes float-b {
  0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); }
  50% { transform: translate(-5%,5%) scale(1.1) rotate(-10deg); }
}
.animate-float-a { animation: float-a 12s ease-in-out infinite; }
.animate-float-b { animation: float-b 9s ease-in-out infinite; }

@keyframes text-glow {
  0%, 100% { text-shadow: 0 0 24px rgba(255,61,90,0.35), 0 0 64px rgba(124,58,255,0.18); }
  50% { text-shadow: 0 0 40px rgba(255,61,90,0.6), 0 0 90px rgba(124,58,255,0.35); }
}
.animate-text-glow { animation: text-glow 3.5s ease-in-out infinite; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
}
.animate-marquee { animation: marquee 24s linear infinite; }

@keyframes card-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-card-drift { animation: card-drift 5s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .animate-float-a, .animate-float-b, .animate-text-glow, .animate-marquee, .animate-card-drift {
    animation: none;
  }
}
`);

write("components/Orb.tsx", `export default function Orb() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="animate-float-a absolute right-[-15%] top-[-10%] h-[620px] w-[620px] rounded-full blur-[90px] opacity-80"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #ff3d5a, #7c3aff 45%, transparent 72%)",
        }}
      />
      <div
        className="animate-float-b absolute right-[5%] top-[15%] h-[380px] w-[380px] rounded-full blur-[70px] opacity-60"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #7c3aff, #ff3d5a 50%, transparent 75%)",
        }}
      />
    </div>
  );
}
`);

write("components/FloatCard.tsx", `export default function FloatCard(props: { title: string; body: string; delay?: string }) {
  return (
    <div
      className="animate-card-drift rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
      style={{ animationDelay: props.delay || "0s" }}
    >
      <p className="font-display text-sm font-bold text-[var(--ink)]">{props.title}</p>
      <p className="mt-1 text-xs leading-snug text-[var(--muted)]">{props.body}</p>
    </div>
  );
}
`);

write("app/layout.tsx", `import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ROCKLINK - One link. Everything you sell.",
  description: "Turn your bio link into a real storefront for products, content, and every platform you post on.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={display.variable + " " + body.variable + " " + mono.variable + " font-body"}>
        {children}
      </body>
    </html>
  );
}
`);

write("app/page.tsx", `import Orb from "@/components/Orb";
import FloatCard from "@/components/FloatCard";

const COMMERCE = [
  { title: "In-page checkout", body: "Buyers pay without ever leaving your page." },
  { title: "Inventory and orders", body: "What is sold, what is low, what is pending." },
  { title: "Every product type", body: "Digital, physical, bookings, subscriptions." },
  { title: "Direct payouts", body: "Sales go straight to your account." },
];

const PLANS = [
  { name: "Starter", price: "6", features: ["1 storefront link", "Up to 10 products", "Basic analytics"] },
  { name: "Pro", price: "15", features: ["Unlimited products", "In-page checkout", "Full analytics", "Priority support"], highlighted: true },
  { name: "Premium", price: "30", features: ["Everything in Pro", "AI product suggestions", "Custom domain", "Team accounts"] },
];

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X", "Spotify", "Threads"];

function SectionLabel(props: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
      <span>No.{props.index}</span>
      <span className="h-px w-8 bg-[var(--line)]" />
      <span>{props.label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
      <Orb />

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="font-display text-lg font-bold tracking-tight">ROCKLINK</span>
        <div className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)] sm:flex">
          <a href="#platform" className="transition hover:text-[var(--ink)]">Platform</a>
          <a href="#commerce" className="transition hover:text-[var(--ink)]">Commerce</a>
          <a href="#pricing" className="transition hover:text-[var(--ink)]">Pricing</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white transition hover:scale-105">
          Get started
        </a>
      </nav>

      <section className="relative z-10 grid gap-10 px-8 pt-16 sm:px-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            Link-in-bio, rebuilt as a storefront
          </p>
          <h1 className="animate-text-glow font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-8xl">
            one link.
            <br />
            everything
            <br />
            you sell.
          </h1>
          <p className="mt-8 max-w-md text-lg text-[var(--muted)]">
            ROCKLINK turns your bio link into a real storefront - products, content, and every platform you post on, in one place.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#waitlist" className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition hover:scale-105">
              Claim your link
            </a>
            <a href="#platform" className="rounded-full border border-white/15 px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition hover:border-white/40 hover:text-white">
              How it works
            </a>
          </div>
        </div>

        <div className="relative grid gap-4 py-10 sm:grid-cols-2">
          <FloatCard title="No redirect checkout" body="Buyers pay right on your page." delay="0s" />
          <FloatCard title="Every platform" body="One link works everywhere you post." delay="0.6s" />
          <FloatCard title="Free to start" body="No cost to claim your link." delay="1.2s" />
          <FloatCard title="Built for creators" body="Sell digital, physical, or bookings." delay="1.8s" />
        </div>
      </section>

      <section className="relative z-10 mt-16 overflow-hidden border-y border-white/10 py-6">
        <div className="flex animate-marquee gap-16 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 px-8 py-24 sm:px-16">
        <SectionLabel index="01" label="What is ROCKLINK" />
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
          One link that holds your store, your content, your socials, and your products.
        </h2>
      </section>

      <section id="platform" className="relative z-10 px-8 pb-24 sm:px-16">
        <SectionLabel index="02" label="What is a link-in-bio" />
        <p className="max-w-xl text-lg text-[var(--muted)]">
          Some social platforms only let you add one clickable link to your profile - so you are forced to choose between your shop, your latest video, or your newest project. A link-in-bio page removes that choice: one link leads to everything you want people to find.
        </p>
      </section>

      <section id="commerce" className="relative z-10 px-8 pb-24 sm:px-16">
        <SectionLabel index="03" label="Built to sell" />
        <h2 className="mb-12 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          A real storefront, not just a list of links.
        </h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {COMMERCE.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition hover:border-white/25">
              <h3 className="mb-2 font-display text-base font-bold">{c.title}</h3>
              <p className="text-sm text-[var(--muted)]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-white sm:text-4xl">
          Update one page instead of five profiles. Your followers click one link and find everything you make.
        </p>
      </section>

      <section id="pricing" className="relative z-10 px-8 pb-24 sm:px-16">
        <SectionLabel index="04" label="Pricing" />
        <h2 className="mb-12 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Simple pricing. Pick your plan.
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={plan.highlighted ? "relative rounded-2xl border border-white/25 bg-gradient-to-b from-white/[0.08] to-transparent p-8 backdrop-blur-md" : "relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">{plan.name}</p>
              <p className="mt-4 font-display text-5xl font-bold">
                <span>{"$" + plan.price}</span>
                <span className="font-body text-lg font-normal text-[var(--muted)]">/mo</span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--muted)]">{f}</li>
                ))}
              </ul>
              
                href="#waitlist"
                className={plan.highlighted ? "mt-8 block rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] py-3 text-center font-mono text-xs uppercase tracking-widest text-white transition hover:scale-105" : "mt-8 block rounded-full border border-white/15 py-3 text-center font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition hover:border-white/40 hover:text-white"}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="relative z-10 px-8 pb-24 sm:px-16">
        <h2 className="mb-4 font-display text-4xl font-bold sm:text-6xl">Claim your link</h2>
        <p className="mb-8 font-mono text-sm text-[var(--muted)]">rocklink.co/yourname</p>
        <form className="flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder:text-[var(--muted)] focus:border-white/40 focus:outline-none"
          />
          <button type="submit" className="whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition hover:scale-105">
            Get early access
          </button>
        </form>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-8 py-8 sm:px-16">
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] sm:flex-row">
          <span>ROCKLINK</span>
          <span>2026. Built for creators.</span>
        </div>
      </footer>
    </main>
  );
}
`);

console.log("Done. Delete write.js after this, then run: npm run dev");