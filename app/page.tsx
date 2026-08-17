const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X", "Spotify", "Threads"];

const FEATURES = [
  { title: "Share everything", body: "Your content, your links, your socials - all in one place." },
  { title: "Sell what you make", body: "Digital products, merch, bookings - listed right on your page." },
  { title: "Track what works", body: "See clicks, views, and what your audience actually engages with." },
];

const PLANS = [
  { name: "Starter", price: "6", features: ["1 storefront link", "Up to 10 products", "Basic analytics"] },
  { name: "Pro", price: "15", features: ["Unlimited products", "Full analytics", "Priority support"], highlighted: true },
  { name: "Premium", price: "30", features: ["Everything in Pro", "AI product suggestions", "Custom domain"] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <nav className="flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="font-display text-lg font-extrabold">ROCKLINK</span>
        <div className="hidden gap-8 text-sm font-medium text-white sm:flex">
          <a href="#platform">Platform</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-extrabold text-[var(--dark)]">Get started for free</a>
      </nav>

      <section className="px-8 pt-10 pb-20 sm:px-16">
        <h1 className="font-display max-w-2xl text-5xl font-extrabold leading-[1.02] text-[var(--accent)] sm:text-7xl">A link in bio built for you.</h1>
        <p className="mt-6 max-w-lg text-lg text-white">One link to share everything you create, curate, and sell - across every platform you post on.</p>
        <a href="#waitlist" className="mt-8 inline-block rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-extrabold text-[var(--dark)]">Get started for free</a>
      </section>

      <section className="border-t border-white/20 px-8 py-6 sm:px-16">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium text-[var(--muted)]">
          <span className="text-white">Works with</span>
          {PLATFORMS.map((p) => (<span key={p}>{p}</span>))}
        </div>
      </section>

      <section id="platform" className="px-8 py-20 sm:px-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--accent)]">What is ROCKLINK</p>
        <h2 className="font-display max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">One link that holds everything you want to share with your audience.</h2>
        <p className="mt-6 max-w-xl text-base text-[var(--muted)]">Some platforms only let you add one clickable link to your profile - so you are forced to choose between your shop, your latest video, or your newest project. ROCKLINK removes that choice.</p>
      </section>

      <section id="features" className="px-8 pb-20 sm:px-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--accent)]">What you get</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[var(--dark)] p-6">
              <h3 className="font-display mb-2 text-lg font-bold text-[var(--accent)]">{f.title}</h3>
              <p className="text-sm text-[var(--muted)]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-20 sm:px-16">
        <p className="font-display max-w-2xl text-2xl font-bold leading-snug text-white sm:text-4xl">Update one page instead of five profiles. Your followers click one link and find everything you make.</p>
      </section>

      <section id="pricing" className="px-8 pb-20 sm:px-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--accent)]">Pricing</p>
        <h2 className="font-display mb-10 max-w-xl text-3xl font-extrabold sm:text-5xl">Simple pricing. Pick your plan.</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className={plan.highlighted ? "rounded-2xl bg-[var(--dark)] p-8 ring-2 ring-[var(--accent)]" : "rounded-2xl bg-[var(--dark)] p-8"}>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">{plan.name}</p>
              <p className="font-display mt-4 text-5xl font-extrabold text-white">${plan.price}<span className="text-lg font-medium text-[var(--muted)]">/mo</span></p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (<li key={f} className="text-sm text-[var(--muted)]">{f}</li>))}
              </ul>
              <a href="#waitlist" className="mt-8 block rounded-full bg-[var(--accent)] py-3 text-center text-sm font-extrabold text-[var(--dark)]">Get started</a>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="px-8 pb-24 sm:px-16">
        <h2 className="font-display mb-4 text-4xl font-extrabold sm:text-6xl">Jumpstart your corner of the internet.</h2>
        <p className="mb-8 text-white">rocklink.co/yourname</p>
        <form className="flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="you@email.com" className="w-full rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none" />
          <button type="submit" className="whitespace-nowrap rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-extrabold text-[var(--dark)]">Claim your link</button>
        </form>
      </section>

      <footer className="border-t border-white/20 bg-[var(--dark)] px-8 py-10 sm:px-16">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-[var(--muted)] sm:flex-row">
          <span className="font-display font-extrabold text-white">ROCKLINK</span>
          <span>2026. Built for creators.</span>
        </div>
      </footer>
    </main>
  );
}
