import Blobs from "@/components/Blobs";

const BENEFITS = [
  {
    title: "One link for everything",
    body: "Your store, content, socials, and products — all on one page.",
  },
  {
    title: "Sell products",
    body: "Digital downloads, merchandise, subscriptions, and courses — directly from your link page.",
  },
  {
    title: "Share anywhere",
    body: "One link works across Instagram, TikTok, YouTube, X, Spotify, and Threads.",
  },
  {
    title: "Track what works",
    body: "See clicks, page views, and what your audience engages with.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Claim your link",
    body: "Pick your name, get your page live in minutes.",
  },
  {
    number: "02",
    title: "Add what you sell",
    body: "Digital products, merch, bookings, or memberships — list them on your page.",
  },
  {
    number: "03",
    title: "Share one link",
    body: "Put it in your bio on every platform. Every follower lands in the same place.",
  },
  {
    number: "04",
    title: "Get paid",
    body: "Buyers check out on your page. Payouts land in your account.",
  },
];

const COMMERCE = [
  {
    title: "In-page checkout",
    body: "Buyers pay without leaving your page — no redirect to a separate store.",
  },
  {
    title: "Inventory and orders",
    body: "See what's sold, what's low, and what's pending in one dashboard.",
  },
  {
    title: "Every product type",
    body: "Digital files, physical merch, bookings, and subscriptions — managed together, not split across tools.",
  },
  {
    title: "Direct payouts",
    body: "Sales go to your account. No separate merchant setup required.",
  },
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
          <a href="#platform" className="hover:text-white">platform</a>
          <a href="#commerce" className="hover:text-white">commerce</a>
          <a href="#benefits" className="hover:text-white">benefits</a>
          <a href="#pricing" className="hover:text-white">pricing</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-8 pt-16 sm:px-16 sm:pt-24">
        <h1 className="text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
          one link.
          <br />
          everything
          <br />
          you sell.
        </h1>
        <p className="mt-6 max-w-md text-white/60">
          ROCKLINK turns your bio link into a real storefront — products,
          content, and every platform you post on, in one place.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#waitlist" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            Claim your link
          </a>
          <a href="#platform" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80">
            See how it works
          </a>
        </div>
      </section>

      {/* WORKS WITH */}
      <section className="relative z-10 mt-20 border-y border-white/10 px-8 py-6 sm:px-16">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Works with</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
          {PLATFORMS.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </section>

      {/* WHAT IS ROCKLINK */}
      <section id="about" className="relative z-10 px-8 py-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">What is ROCKLINK?</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          ROCKLINK is a link-in-bio platform.
        </h2>
        <p className="max-w-xl text-lg text-white/70">
          That means it gives you one single link that holds everything
          you want to share with your audience — your store, your
          content, your socials, and your products, all in one place.
        </p>
      </section>

      {/* WHAT IS A LINK-IN-BIO */}
      <section id="platform" className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">What is a link-in-bio?</p>
        <p className="max-w-xl text-lg text-white/70">
          Some social platforms only let you add one clickable link to
          your profile — so you&apos;re forced to choose between your
          shop, your latest video, or your newest project. A
          link-in-bio page removes that choice: you share one link, and
          it leads visitors to everything you want them to find.
        </p>
      </section>

      {/* HOW IT WORKS — new */}
      <section className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">How it works</p>
        <div className="grid gap-6 sm:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.number} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-3 font-mono text-sm text-white/40">{s.number}</p>
              <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
              <p className="text-sm text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILT TO SELL — new, Shopify-style depth */}
      <section id="commerce" className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Built to sell</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold sm:text-4xl">
          A real storefront, not just a list of links.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {COMMERCE.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-white/60">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT ROCKLINK DOES */}
      <section id="benefits" className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">What ROCKLINK does</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-white/60">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CREATORS USE IT */}
      <section className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Why creators use it</p>
        <p className="max-w-xl text-lg text-white/70">
          Instead of updating your profile link every time you post
          something new, you update one page and every platform points to
          it. Your followers click one link and find everything you
          create — no more &quot;link in stories&quot; or &quot;check my
          other accounts.&quot;
        </p>
      </section>

      {/* PRICING — new, real numbers only */}
      <section id="pricing" className="relative z-10 px-8 pb-24 sm:px-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Pricing</p>
        <h2 className="mb-6 max-w-2xl text-3xl font-bold sm:text-4xl">
          Free to use. We only get paid when you do.
        </h2>
        <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>You keep</span>
            <span className="font-mono text-white">97.5%</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-white/60">
            <span>Transaction fee</span>
            <span className="font-mono text-white">2.5%</span>
          </div>
          <p className="mt-4 text-sm text-white/50">
            No subscription. No monthly fee. Nothing else.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative z-10 px-8 pb-24 text-center sm:px-16">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Claim your link</h2>
        <p className="mb-8 text-white/60">rocklink.co/yourname</p>
        <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
          <button type="submit" className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            Get early access
          </button>
        </form>
      </section>
    </main>
  );
}