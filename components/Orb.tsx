export default function Orb() {
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
