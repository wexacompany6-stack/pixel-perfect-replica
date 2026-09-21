import { useEffect } from "react";

/** Lenis smooth scroll — browser only, respeita prefers-reduced-motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroy: (() => void) | undefined;
    let frame = 0;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      destroy = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    })();

    return () => destroy?.();
  }, []);

  return null;
}
