import { MaskedHeading, Reveal } from "@/components/motion-primitives";

export function PageHero({
  eyebrow,
  lines,
  subtitle,
  image,
}: {
  eyebrow: string;
  lines: React.ReactNode[];
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="noise relative flex min-h-[60vh] items-end overflow-hidden pt-32 pb-16">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div aria-hidden className="hero-overlay absolute inset-0" />
      <div aria-hidden className="hero-overlay-bottom absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <span className="glass inline-flex !rounded-full px-4 py-2 font-sans text-[10px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            {eyebrow}
          </span>
        </Reveal>
        <MaskedHeading
          as="h1"
          lines={lines}
          delay={0.1}
          className="mt-6 font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] font-extrabold tracking-tight uppercase"
        />
        {subtitle && (
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
