export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-15%] h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-70 blur-3xl animate-drift-slow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E63946, #1D3557 40%, #0A0A0F 70%)",
        }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[480px] w-[480px] rounded-full opacity-60 blur-3xl animate-drift-medium"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #2A9D8F, #264653 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute left-[0%] top-[45%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl animate-drift-fast"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #F4A261, #E76F51 45%, transparent 75%)",
        }}
      />
    </div>
  );
}
