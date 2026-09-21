import { MaskedHeading, Reveal } from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";

export function CTASection({
  title = ["Pronto para transformar", "a sua presença digital?"],
  subtitle = "Conte-nos o problema. Respondemos com uma proposta clara, prazos definidos e um plano que faz sentido para o seu negócio.",
}: {
  title?: string[];
  subtitle?: string;
}) {
  return (
    <section className="noise relative overflow-hidden border-t border-border py-28">
      <div
        aria-hidden
        className="watermark absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[26vw] whitespace-nowrap"
      >
        WEXA
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <MaskedHeading
          as="h2"
          lines={title}
          className="font-display text-[clamp(2rem,5.5vw,4rem)] leading-[1] font-extrabold tracking-tight"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WexaButton to="/contacto" className="px-10 py-5">
              Começar agora
            </WexaButton>
            <WexaButton to="/precos" variant="glass" withArrow={false}>
              Ver pacotes
            </WexaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
