import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/CTASection";
import { MaskedHeading, Reveal } from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";
import { servicos } from "@/data/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Websites, Design e Marketing Digital | WEXA" },
      {
        name: "description",
        content:
          "Desenvolvimento de websites, landing pages e lojas online, identidade visual completa e gestão de redes sociais.",
      },
      { property: "og:title", content: "Serviços da WEXA — Web, Design e Marketing" },
      {
        property: "og:description",
        content:
          "Desenvolvimento de websites, landing pages e lojas online, identidade visual completa e gestão de redes sociais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

const imagens = [serviceWeb, serviceDesign, serviceMarketing];

function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        image={aboutHero}
        lines={["Tudo o que a sua marca", "precisa para existir", "no digital"]}
        subtitle="Três frentes complementares, uma só direcção: fazer o seu negócio ser encontrado, reconhecido e escolhido."
      />

      <div className="mx-auto max-w-7xl space-y-28 px-6 py-24">
        {servicos.map((servico, i) => {
          const invertido = i % 2 === 1;
          return (
            <section
              key={servico.nome}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                servico.destaque ? "lg:gap-16" : ""
              }`}
            >
              <Reveal className={invertido ? "lg:order-2" : ""}>
                <div className="glass glass-gradient-border overflow-hidden !rounded-3xl p-2">
                  <img
                    src={imagens[i]}
                    alt={`${servico.nome} — ${servico.resumo}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-4/3 w-full rounded-2xl object-cover"
                  />
                </div>
              </Reveal>

              <div className={invertido ? "lg:order-1" : ""}>
                <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-lime uppercase">
                  {servico.numero} · {servico.nome}
                </span>
                <MaskedHeading
                  as="h2"
                  lines={[servico.tituloPagina]}
                  className="mt-4 font-display text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.05] font-extrabold tracking-tight uppercase"
                />
                <Reveal delay={0.12}>
                  {servico.textoLongo.map((paragrafo) => (
                    <p
                      key={paragrafo}
                      className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
                    >
                      {paragrafo}
                    </p>
                  ))}

                  <GlassCard
                    highlight={servico.destaque}
                    spotlight={false}
                    className="mt-8 p-6"
                  >
                    <p className="font-display text-xs font-bold tracking-[0.2em] uppercase">
                      {servico.itensTitulo}
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {servico.itens.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-lime" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  {servico.inclui && (
                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {servico.inclui}
                    </p>
                  )}

                  <div className="mt-8">
                    <WexaButton
                      to="/precos"
                      variant={servico.destaque ? "lime" : "glass"}
                    >
                      {servico.ctaLabel}
                    </WexaButton>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        title={["Não sabe por", "onde começar?"]}
        subtitle="Conte-nos sobre o seu negócio e indicamos o caminho mais directo para os seus objectivos."
      />
    </>
  );
}
