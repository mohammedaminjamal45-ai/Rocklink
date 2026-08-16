import Orb from "@/components/Orb";
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
