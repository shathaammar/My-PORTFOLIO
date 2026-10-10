export const AmbientBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full text-primary/10"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      >
        <defs>
          <pattern
            id="ambient-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ambient-grid)" />
      </svg>

      <div className="ambient-blob absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="ambient-blob ambient-blob-delay absolute top-1/3 -right-40 hidden md:block h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
};
