import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px 0px -60px 0px" } as const;

/** Bloco que entra com fade + slide quando aparece no ecrã. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEW);
  const reduced = useReducedMotion();
  const show = inView || reduced;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : y }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Contentor com stagger para os filhos (usar com RevealItem). */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string | undefined;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEW);
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView || reduced ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Título grande: cada linha entra de baixo para cima a partir de uma máscara. */
export function MaskedHeading({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h1",
}: {
  lines: ReactNode[];
  className?: string | undefined;
  lineClassName?: string | undefined;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, VIEW);
  const reduced = useReducedMotion();
  const show = inView || reduced;

  return (
    <Tag className={className} ref={ref}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={false}
            animate={{ y: show ? "0%" : "110%", opacity: show ? 1 : 0 }}
            transition={{ duration: 0.85, delay: delay + i * 0.1, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
