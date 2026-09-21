import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "lime" | "glass";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-display text-xs font-bold tracking-[0.18em] uppercase transition-[transform,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-primary-foreground px-8 py-4 hover:text-primary-foreground",
  glass: "glass !rounded-full px-8 py-4 text-foreground hover:border-lime/40",
};

function Inner({
  children,
  variant,
  withArrow,
}: {
  children: ReactNode;
  variant: Variant;
  withArrow: boolean;
}) {
  return (
    <>
      {variant === "glass" && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-lime/15 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
      )}
      {variant === "lime" && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
      )}
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight className="relative z-10 size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
      )}
    </>
  );
}

/** Efeito magnético subtil: o botão inclina-se na direcção do cursor. */
function useMagnetic() {
  const ref = useRef<HTMLSpanElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const handlers = {
    onMouseMove: (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setT({
        x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 10,
        y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 8,
      });
    },
    onMouseLeave: () => setT({ x: 0, y: 0 }),
  };

  return {
    ref,
    handlers,
    style: { transform: `translate3d(${t.x}px, ${t.y}px, 0)` },
  };
}

type Props = {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  magnetic?: boolean;
} & ({ to: string } | { href: string } | { onClick?: () => void; type?: "submit" });

export function WexaButton({
  children,
  variant = "lime",
  withArrow = variant === "lime",
  className,
  magnetic = true,
  ...rest
}: Props) {
  const mag = useMagnetic();
  const wrapperProps = magnetic
    ? { ref: mag.ref, style: mag.style, ...mag.handlers }
    : {};
  const classes = cn(base, variants[variant], className);
  const inner = (
    <Inner variant={variant} withArrow={withArrow}>
      {children}
    </Inner>
  );

  let node: ReactNode;
  if ("to" in rest && rest.to) {
    node = (
      <Link to={rest.to} className={classes}>
        {inner}
      </Link>
    );
  } else if ("href" in rest && rest.href) {
    node = (
      <a
        href={rest.href}
        target="_blank"
        rel="noreferrer noopener"
        className={classes}
      >
        {inner}
      </a>
    );
  } else {
    const { onClick, type } = rest as { onClick?: () => void; type?: "submit" };
    node = (
      <button onClick={onClick} type={type ?? "button"} className={classes}>
        {inner}
      </button>
    );
  }

  return (
    <span
      className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      {...wrapperProps}
    >
      {node}
    </span>
  );
}
