export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl animate-blob-a"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E63946, #1D3557 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl animate-blob-b"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #2A9D8F, #264653 50%, transparent 75%)",
        }}
      />
    </div>
  );
}