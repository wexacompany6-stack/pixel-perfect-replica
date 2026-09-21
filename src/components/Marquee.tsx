const WORDS = ["WEB", "DESIGN", "MARKETING", "ESTRATÉGIA"];

export function Marquee({ tilt = true }: { tilt?: boolean }) {
  const items = Array.from({ length: 6 }).flatMap(() => WORDS);

  return (
    <div
      className="relative w-[112%] -translate-x-[6%] overflow-hidden bg-lime py-3"
      style={tilt ? { transform: "translateX(-6%) rotate(-2deg)" } : undefined}
      aria-hidden
    >
      <div className="flex w-max animate-[var(--animate-marquee)]">
        {[0, 1].map((dup) => (
          <div className="flex shrink-0" key={dup}>
            {items.map((word, i) => (
              <span
                key={`${dup}-${i}`}
                className="font-display text-sm font-extrabold tracking-[0.3em] whitespace-nowrap text-primary-foreground uppercase"
              >
                <span className="px-6">{word}</span>
                <span className="opacity-40">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
