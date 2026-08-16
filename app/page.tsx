"use client";

import { useState } from "react";

/* ============================================================
   ROCKLINK — Landing page
   Edit the data below to change what shows on the page.
   ============================================================ */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X", "Spotify", "Threads"];

const FEATURES = [
  {
    title: "In-page checkout",
    body: "Buyers pay without ever leaving your page. No redirects, no friction, no lost sales.",
  },
  {
    title: "Inventory & orders",
    body: "What's sold, what's low, what's pending — one clean dashboard, updated in real time.",
  },
  {
    title: "Every product type",
    body: "Digital, physical, bookings, and subscriptions — all living together in one place.",
  },
  {
    title: "Direct payouts",
    body: "Sales land straight in your account. No separate merchant setup, no middlemen.",
  },
  {
    title: "Simple analytics",
    body: "See what your audience clicks and what actually converts into a sale.",
  },
  {
    title: "One link for everything",
    body: "Your store, your content, and your socials — all behind a single link.",
  },
];

const STEPS = [
  { n: "01", title: "Claim your link", body: "Grab rocklink.co/yourname in seconds." },
  { n: "02", title: "Add what you sell", body: "Drop in products, content, and your socials." },
  { n: "03", title: "Share one link", body: "Put it in your bio and start selling." },
];

const PLANS = [
  {
    name: "Starter",
    monthly: 6,
    yearly: 5,
    tagline: "For getting started",
    features: ["1 storefront link", "Up to 10 products", "Basic analytics"],
  },
  {
    name: "Pro",
    monthly: 15,
    yearly: 12,
    tagline: "For serious sellers",
    highlighted: true,
    features: ["Unlimited products", "In-page checkout", "Full analytics", "Priority support"],
  },
  {
    name: "Premium",
    monthly: 30,
    yearly: 24,
    tagline: "For scaling creators",
    features: ["Everything in Pro", "AI product suggestions", "Custom domain", "Team accounts"],
  },
];

const FAQS = [
  {
    q: "How is Rocklink different from a normal link-in-bio?",
    a: "Most link-in-bio tools just point to other pages. Rocklink is a real storefront — your products, checkout, content, and socials all live on one page you control.",
  },
  {
    q: "Do I need a merchant account to get paid?",
    a: "No. Sales go directly to your bank account through our built-in payouts.",
  },
  {
    q: "Can I sell digital products and bookings?",
    a: "Yes. Digital downloads, physical goods, service bookings, and subscriptions are all supported.",
  },
  {
    q: "Can I use my own domain?",
    a: "On the Premium plan you can connect a custom domain.",
  },
  {
    q: "Is there a free trial?",
    a: "Starter is free forever. Pro and Premium come with a 14-day free trial.",
  },
];

/* ============================================================
   ICONS — small inline SVGs (no emoji, no icon library needed)
   ============================================================ */

const icons = {
  checkout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  inventory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  ),
  payout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <div id="top" className="min-h-screen bg-[#F7F6F3] text-[#16161A] antialiased">
      {/* ===== NAV ===== */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F6F3]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#0E7A5B] text-sm text-white">R</span>
            rocklink
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#16161A]/60 transition hover:text-[#16161A]">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#waitlist"
            className="hidden rounded-full bg-[#16161A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0E7A5B] md:block"
          >
            Get started
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-black/5 bg-[#F7F6F3] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-[#16161A]/80">
                  {l.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#16161A] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0E7A5B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0E7A5B]" />
              In-page checkout is live
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              One link.
              <br />
              Everything you sell.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#16161A]/60">
              ROCKLINK turns your bio link into a real storefront — products, content, and every
              platform you post on, in one place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E7A5B] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B624A]"
              >
                Claim your link {icons.arrow}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium transition hover:border-black/40"
              >
                See how it works
              </a>
            </div>
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#16161A]/40">
              Try it — tap a product on the right
            </p>
          </div>

          {/* Phone mockup */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-2xl shadow-black/10">
              <div className="rounded-[2rem] border border-black/5 bg-[#FBFBF9] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-bold">@yourname</span>
                  <span className="rounded-full bg-[#0E7A5B]/10 px-2.5 py-1 text-[10px] font-semibold text-[#0E7A5B]">
                    ● Live store
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { t: "Summer Drop Tee", p: "$28", tag: "Bestseller" },
                    { t: "1:1 Coaching Call", p: "$120", tag: "Booking" },
                    { t: "Creator Course", p: "$49", tag: "Digital" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-3.5"
                    >
                      <div>
                        <p className="text-sm font-medium">{item.t}</p>
                        <p className="text-xs text-[#16161A]/50">{item.p}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] text-[#16161A]/60">
                          {item.tag}
                        </span>
                        <button className="rounded-full bg-[#16161A] px-3 py-1.5 text-[11px] font-semibold text-white">
                          Buy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS ===== */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-[#16161A]/40">
            Works with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-[#16161A]/50">
            {PLATFORMS.map((p) => (
              <span key={p} className="transition hover:text-[#16161A]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IS ROCKLINK ===== */}
      <section className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0E7A5B]">What is Rocklink?</p>
        <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          One link that holds your store, your content,
          <span className="text-[#16161A]/40"> your socials, and your products.</span>
        </h2>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0E7A5B]">Built to sell</p>
          <h2 className="max-w-2xl text-3xl font-bold sm:text-5xl">A real storefront, not just a list of links.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/8 bg-white p-7 transition hover:border-[#0E7A5B]/40 hover:shadow-lg hover:shadow-black/5"
            >
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#0E7A5B]/10 text-[#0E7A5B]">
                {Object.values(icons)[i]}
              </span>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#16161A]/55">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0E7A5B]">How it works</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Live in minutes, not weeks.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <span className="text-5xl font-extrabold text-[#0E7A5B]/15">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#16161A]/55">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-28 pt-28 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0E7A5B]">Pricing</p>
          <h2 className="text-3xl font-bold sm:text-5xl">Simple pricing. Pick your plan.</h2>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                billing === "monthly" ? "bg-[#16161A] text-white" : "text-[#16161A]/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                billing === "yearly" ? "bg-[#16161A] text-white" : "text-[#16161A]/60"
              }`}
            >
              Yearly <span className="text-xs text-[#0E7A5B]">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition ${
                  plan.highlighted
                    ? "border-[#0E7A5B] bg-[#0E7A5B] text-white shadow-xl shadow-[#0E7A5B]/20"
                    : "border-black/10 bg-white hover:border-black/25"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-[#0E7A5B] shadow">
                    Most popular
                  </span>
                )}
                <h3 className="text-sm font-semibold uppercase tracking-widest opacity-70">{plan.name}</h3>
                <p className="mt-1 text-sm opacity-60">{plan.tagline}</p>
                <p className="mt-6 text-5xl font-bold">
                  ${price}
                  <span className="text-lg font-normal opacity-50">/mo</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm opacity-90">
                      <span className="mt-0.5 h-4 w-4 shrink-0">{icons.check}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-[#0E7A5B] hover:bg-white/90"
                      : "border border-black/15 text-[#16161A] hover:border-black/40"
                  }`}
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-3xl px-6 pb-28 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0E7A5B]">FAQ</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <span className={`text-xl text-[#16161A]/50 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#16161A]/55">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WAITLIST ===== */}
      <section id="waitlist" className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="rounded-[2rem] border border-black/10 bg-[#16161A] px-6 py-16 text-center text-white sm:px-16">
          <h2 className="text-4xl font-bold sm:text-6xl">Claim your link</h2>
          <p className="mt-3 text-lg text-white/60">
            rocklink.co/<span className="font-semibold text-white">yourname</span>
          </p>

          {joined ? (
            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-lg font-semibold text-[#4CD3A5]">You're on the list!</p>
              <p className="mt-1 text-sm text-white/60">
                We'll email <span className="font-medium text-white">{email}</span> when your link is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-[#4CD3A5] focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-[#0E7A5B] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B624A]"
              >
                Get early access
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-white/40">Free forever on Starter · No card required · 14-day trial on paid plans</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-[#0E7A5B] text-sm text-white">R</span>
              rocklink
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#16161A]/50">
              <a href="#features" className="transition hover:text-[#16161A]">Features</a>
              <a href="#pricing" className="transition hover:text-[#16161A]">Pricing</a>
              <a href="#faq" className="transition hover:text-[#16161A]">FAQ</a>
              <a href="#waitlist" className="transition hover:text-[#16161A]">Get started</a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-[#16161A]/40">© 2026 Rocklink. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}