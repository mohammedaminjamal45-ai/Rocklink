export default function FloatCard(props: { title: string; body: string; delay?: string }) {
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
