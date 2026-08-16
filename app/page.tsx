import Blobs from "@/components/Blobs";

const STEPS = [
  { number: "01", title: "Claim your link", body: "Pick your name, get your page live in minutes." },
  { number: "02", title: "Add what you sell", body: "Digital products, merch, bookings, or memberships." },
  { number: "03", title: "Share one link", body: "Every platform, every follower, one destination." },
  { number: "04", title: "Get paid", body: "Buyers check out on your page. Payouts land in your account." },
];

const COMMERCE = [
  { title: "In-page checkout", body: "Buyers pay without ever leaving your page." },
  { title: "Inventory and orders", body: "What's sold, what's low, what's pending — one dashboard." },
  { title: "Every product type", body: "Digital, physical, bookings, subscriptions — together." },
  { title: "Direct payouts", body: "Sales go to your account. No separate merchant setup." },
];

const PLANS = [
  { name: "Starter", price: "$6", features: ["1 storefront link", "Up to 10 products", "Basic analytics"] },
  { name: "Pro", price: "$15", features: ["Unlimited products", "In-page checkout", "Full analytics", "Priority support"], highlighted: true },
  { name: "Premium", price: "$30", features: ["Everything in Pro", "AI product suggestions", "Custom domain", "Team accounts"] },
];

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X", "Spotify", "Threads"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0F] text-white">
      <Blobs />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="text-lg font-bold tracking-tight">rocklink</span>
        <div className="hidden gap-8 text-sm text-white/70 sm:flex">
          <a href="#platform" className="transition hover:text-white">platform</a>
          <a href="#commerce" className="transition hover:text-white">commerce</a>
          <a href="#benefits" className="transition hover:text-white">benefits</a>
          <a href="#pricing" className="transition hover:text-white">pricing</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90">
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-8 pt-20 sm:px-16 sm:pt-32">
        <h1 className="text-6xl font-black leading-[0.92] tracking-tight sm:text-9xl">
          one link.
          <br />
          <span className="bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#E63946] bg-clip-text text-transparent">
            everything
          </span>
          <br />
          you sell.
        </h1>
        <p className="mt-8 max-w-md text-lg text-white/60">
          ROCKLINK turns your bio link into a real storefront — products,
          content, and every platform you post on, in one place.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#waitlist" className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90">
            Claim your link
          </a>
          <a href="#platform" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white">
            See how it works
          </a>
        </div>
      </section>

      {/* WORKS WITH — ticker style */}
      <section className="relative z-10 mt-24 overflow-hidden border-y border-white/10 py-6">
        <div className="flex animate-marquee gap-16 whitespace-nowrap text-sm uppercase tracking-widest text-white/40">
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      </section>

      {/* WHAT IS ROCKLINK — big statement */}
      <section id="about" className="relative z-10 px-8 py-28 sm:px-16">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/40">What is ROCKLINK?</p>
        <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          One link that holds your store, your content,
          <span className="text-white/40"> your socials, and your products.</span>
        </h2>
      </section>

      {/* WHAT IS A LINK-IN-BIO */}
      <section id="platform" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">What is a link-in-bio?</p>
        <p className="max-w-xl text-lg text-white/70">
          Some social platforms only let you add one clickable link to
          your profile — so you&apos;re forced to choose between your
          shop, your latest video, or your newest project. A
          link-in-bio page removes that choice: one link leads to
          everything you want people to find.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-8 text-xs uppercase tracking-widest text-white/40">How it works</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.number} className="bg-[#0A0A0F] p-7 transition hover:bg-white/[0.03]">
              <p className="mb-4 font-mono text-2xl text-white/25">{s.number}</p>
              <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
              <p className="text-sm text-white/50">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILT TO SELL — bento layout */}
      <section id="commerce" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Built to sell</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold sm:text-5xl">
          A real storefront, not just a list of links.
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-white/20 sm:col-span-2 sm:row-span-2">
            <h3 className="mb-3 text-2xl font-semibold">{COMMERCE[0].title}</h3>
            <p className="text-white/60">{COMMERCE[0].body}</p>
          </div>
          {COMMERCE.slice(1).map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20">
              <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-white/60">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CREATORS USE IT — big statement break */}
      <section className="relative z-10 px-8 py-28 sm:px-16">
        <p className="max-w-3xl text-3xl font-medium leading-snug text-white/80 sm:text-5xl">
          Update one page instead of five profiles. Your followers click
          one link and find everything you make.
        </p>
      </section>

      {/* PRICING — real 3 tiers */}
      <section id="pricing" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Pricing</p>
        <h2 className="mb-12 max-w-2xl text-3xl font-bold sm:text-5xl">
          Simple pricing. Pick your plan.
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 backdrop-blur-sm transition ${
                plan.highlighted
                  ? "border border-white/30 bg-white/[0.08] hover:border-white/50"
                  : "border border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#F4A261] to-[#E63946] px-3 py-1 text-xs font-medium text-black">
                  Most popular
                </span>
              )}
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/50">
                {plan.name}
              </h3>
              <p className="mt-4 text-5xl font-bold">
                {plan.price}
                <span className="text-lg font-normal text-white/40">/mo</span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-white/60">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-white text-black hover:scale-105 hover:bg-white/90"
                    : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative z-10 px-8 pb-32 sm:px-16">
        <h2 className="mb-4 text-4xl font-bold sm:text-6xl">Claim your link</h2>
        <p className="mb-8 text-white/60">rocklink.co/yourname</p>
        <form className="flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
          <button type="submit" className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90">
            Get early access
          </button>
        </form>
      </section>
    </main>
  );
}