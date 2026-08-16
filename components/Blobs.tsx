export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blob 1 - Red/Navy */}
      <div
        className="absolute blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at 30% 50%, #ff4444, #0a0a1a)',
          opacity: 0.6,
          top: '-100px',
          left: '-50px',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      {/* Blob 2 - Teal/Dark Teal */}
      <div
        className="absolute blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle at 60% 40%, #00d4ff, #003d44)',
          opacity: 0.6,
          top: '300px',
          right: '-100px',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      {/* Blob 3 - Orange/Coral */}
      <div
        className="absolute blur-3xl"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle at 40% 70%, #ff8844, #cc3344)',
          opacity: 0.6,
          bottom: '0px',
          left: '40%',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
    </div>
  );
}
