import { useEffect, useState } from "react";

/** Cursor circular no desktop; desligado em ecrãs táteis e reduced-motion. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, input, textarea, select, [role=tab]")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        left: pos.x,
        top: pos.y,
        width: active ? 44 : 14,
        height: active ? 44 : 14,
        transform: "translate(-50%, -50%)",
        backgroundColor: active ? "rgba(198,255,0,0.18)" : "rgba(198,255,0,0.9)",
        borderColor: active ? "rgba(198,255,0,0.6)" : "transparent",
      }}
    />
  );
}
