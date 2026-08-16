export default function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-[var(--line)]">
        <div className="animate-scan h-full w-24 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      </div>
    </div>
  );
}