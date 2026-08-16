export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-80 blur-3xl animate-blob-a"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E63946, #1D3557 40%, #0A0A0F 70%)",
        }}
      />
      <div
        className="absolute right-[-10%] top-[5%] h-[500px] w-[500px] rounded-full opacity-70 blur-3xl animate-blob-b"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #2A9D8F, #264653 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute left-[0%] top-[40%] h-[540px] w-[540px] rounded-full opacity-70 blur-3xl animate-blob-c"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #F4A261, #E76F51 45%, transparent 75%)",
        }}
      />
    </div>
  );
}