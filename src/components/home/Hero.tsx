import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Layers, LineChart, Sparkles, LifeBuoy } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-studio.jpg";
import { GlassCard } from "@/components/GlassCard";
import { MaskedHeading } from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: Layers, texto: ["Sites que convertem,", "não só que existem"] },
  { icon: Sparkles, texto: ["Identidade visual que faz", "a marca ser lembrada"] },
  { icon: LineChart, texto: ["Marketing com relatórios", "reais, não promessas"] },
  { icon: LifeBuoy, texto: ["Suporte contínuo", "após o lançamento"] },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12]);

  return (
    <section
      ref={ref}
      className="noise relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <motion.img
        src={heroImage}
        alt="Equipa criativa da WEXA a trabalhar em projectos digitais num estúdio escuro"
        width={1920}
        height={1280}
        style={{ y, scale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="hero-overlay absolute inset-0" />
      <div aria-hidden className="hero-overlay-bottom absolute inset-0" />

      <div
        aria-hidden
        className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] whitespace-nowrap"
      >
        WEXA
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-10">
        <motion.span
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="glass inline-flex !rounded-full px-4 py-2 font-sans text-[10px] font-semibold tracking-[0.28em] text-muted-foreground uppercase"
        >
          Digital Agency · Moçambique
        </motion.span>

        <MaskedHeading
          as="h1"
          delay={0.15}
          lines={[
            "Transformamos",
            "negócios em",
            <>
              experiências <span className="text-lime">digitais</span>
            </>,
          ]}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.92] font-extrabold tracking-tight uppercase"
        />

        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Criamos websites, identidades visuais e estratégias de marketing que fazem a
          sua marca ser encontrada, reconhecida e escolhida.
        </motion.p>

        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <WexaButton to="/contacto" className="px-9 py-5">
            Começar agora
          </WexaButton>
          <WexaButton to="/portfolio" variant="glass" withArrow={false}>
            Ver projetos
          </WexaButton>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.texto[0]}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 + i * 0.1, ease: EASE }}
            >
              <GlassCard className="h-full p-5">
                <stat.icon className="size-5 text-lime" />
                <p className="mt-4 font-display text-sm leading-snug font-bold tracking-tight">
                  {stat.texto[0]}
                  <br />
                  {stat.texto[1]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-28 hidden flex-col items-center gap-3 lg:flex">
        <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="relative block h-14 w-px bg-border">
          <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-lime motion-safe:animate-[var(--animate-scroll-dot)]" />
        </span>
      </div>
    </section>
  );
}
