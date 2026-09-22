import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Cartão de vidro líquido com spotlight verde-lima que segue o cursor.
 */
export function GlassCard({
  children,
  className,
  highlight = false,
  spotlight = true,
}: {
  children: ReactNode;
  className?: string | undefined;
  highlight?: boolean | undefined;
  spotlight?: boolean | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        if (!spotlight || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
      className={cn(
        highlight ? "glass-strong" : "glass",
        "glass-hover glass-gradient-border relative overflow-hidden",
        className,
      )}
    >
      {spotlight && pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(198,255,0,0.14), transparent 65%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
