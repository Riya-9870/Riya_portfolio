function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(57,255,20,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(57,255,20,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Circle 1 */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>

      {/* Glow Circle 2 */}
      <div className="absolute w-80 h-80 bg-green-400/20 rounded-full blur-[150px] bottom-10 right-10 animate-pulse"></div>

    </div>
  );
}

export default Background;
