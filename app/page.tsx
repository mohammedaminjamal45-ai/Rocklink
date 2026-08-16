import Blobs from "@/components/Blobs";
import PhoneDemo from "@/components/PhoneDemo";

const COMMERCE = [
  { title: "In-page checkout", body: "Buyers pay without ever leaving your page - the demo on the right is real." },
  { title: "Inventory and orders", body: "What's sold, what's low, what's pending - one dashboard." },
  { title: "Every product type", body: "Digital, physical, bookings, subscriptions - together." },
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

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="text-lg font-bold tracking-tight">rocklink</span>
        <div className="hidden gap-8 text-sm text-white/70 sm:flex">
          <a href="#platform" className="transition hover:text-white">platform</a>
          <a href="#commerce" className="transition hover:text-white">commerce</a>
          <a href="#pricing" className="transition hover:text-white">pricing</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90">Get started</a>
      </nav>

      <section className="relative z-10 grid gap-16 px-8 pt-16 sm:px-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
            one link.
            <br />
            everything you sell.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/60">
            ROCKLINK turns your bio link into a real storefront - products, content, and every platform you post on, in one place.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#waitlist" className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90">Claim your link</a>
            <a href="#platform" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white">See how it works</a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-widest text-white/30">Try it - tap a product on the right</p>
        </div>
        <PhoneDemo />
      </section>

      <section className="relative z-10 mt-24 border-y border-white/10 px-8 py-6 sm:px-16">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Works with</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
          {PLATFORMS.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 px-8 py-28 sm:px-16">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/40">What is ROCKLINK?</p>
        <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          One link that holds your store, your content,
          <span className="text-white/40"> your socials, and your products.</span>
        </h2>
      </section>

      <section id="platform" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">What is a link-in-bio?</p>
        <p className="max-w-xl text-lg text-white/70">
          Some social platforms only let you add one clickable link to your profile - so you are forced to choose between your shop, your latest video, or your newest project. A link-in-bio page removes that choice: one link leads to everything you want people to find.
        </p>
      </section>

      <section id="commerce" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Built to sell</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold sm:text-5xl">A real storefront, not just a list of links.</h2>
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

      <section className="relative z-10 px-8 py-28 sm:px-16">
        <p className="max-w-3xl text-3xl font-medium leading-snug text-white/80 sm:text-5xl">
          Update one page instead of five profiles. Your followers click one link and find everything you make.
        </p>
      </section>

      <section id="pricing" className="relative z-10 px-8 pb-28 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Pricing</p>
        <h2 className="mb-12 max-w-2xl text-3xl font-bold sm:text-5xl">Simple pricing. Pick your plan.</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className={plan.highlighted ? "relative rounded-2xl p-8 backdrop-blur-sm transition border border-white/30 bg-white/[0.08] hover:border-white/50" : "relative rounded-2xl p-8 backdrop-blur-sm transition border border-white/10 bg-white/5 hover:border-white/20"}>
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">Most popular</span>
              )}
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/50">{plan.name}</h3>
              <p className="mt-4 text-5xl font-bold">{plan.price}<span className="text-lg font-normal text-white/40">/mo</span></p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-white/60">{f}</li>
                ))}
              </ul>
              <a href="#waitlist" className={plan.highlighted ? "mt-8 block rounded-full py-3 text-center text-sm font-medium transition bg-white text-black hover:scale-105 hover:bg-white/90" : "mt-8 block rounded-full py-3 text-center text-sm font-medium transition border border-white/20 text-white/80 hover:border-white/40 hover:text-white"}>Get started</a>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="relative z-10 px-8 pb-24 sm:px-16">
        <h2 className="mb-4 text-4xl font-bold sm:text-6xl">Claim your link</h2>
        <p className="mb-8 text-white/60">rocklink.co/yourname</p>
        <form className="flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="you@email.com" className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none" />
          <button type="submit" className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90">Get early access</button>
        </form>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-8 py-8 sm:px-16">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-sm font-bold tracking-tight">rocklink</span>
          <span className="text-xs text-white/40">(c) 2026 ROCKLINK. Built for creators.</span>
        </div>
      </footer>
    </main>
  );
}