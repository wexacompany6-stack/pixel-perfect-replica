import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Gem } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/CTASection";
import {
  MaskedHeading,
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion-primitives";
import { atributos } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a WEXA — Agência Digital | Moçambique" },
      {
        name: "description",
        content:
          "Conheça a agência que une tecnologia, design e marketing para resolver problemas reais de negócios no ambiente digital.",
      },
      { property: "og:title", content: "Sobre a WEXA — Agência Digital" },
      {
        property: "og:description",
        content:
          "Conheça a agência que une tecnologia, design e marketing para resolver problemas reais de negócios no ambiente digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

const pilares = [
  {
    icon: Compass,
    titulo: "Missão",
    texto:
      "Ajudar negócios a saírem de uma presença digital limitada para uma presença digital profissional, estratégica e preparada para gerar resultados.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    texto:
      "Ser a referência em soluções digitais em Moçambique, acompanhando o crescimento dos nossos clientes e crescendo com eles.",
  },
  {
    icon: Gem,
    titulo: "Valores",
    texto:
      "Compromisso · Transparência · Qualidade · Estratégia · Resultados",
  },
];

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        image={aboutHero}
        lines={["Construímos marcas", "preparadas", "para o digital"]}
        subtitle="Conheça a agência que une tecnologia, design e marketing para resolver problemas reais de negócios."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MaskedHeading
            as="h2"
            lines={["A WEXA em", "poucas palavras"]}
            className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
          />
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-muted-foreground">
              A WEXA nasceu para ajudar empresas e organizações a fortalecerem a sua
              presença no ambiente digital. Trabalhamos com criação de websites, landing
              pages, lojas online, design gráfico, identidade visual, marketing digital e
              gestão de redes sociais.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Somos uma agência jovem, mas construída com estrutura de empresa: processos
              definidos, prazos claros e padrões de qualidade que se mantêm de projecto
              para projecto — seja para um pequeno negócio a começar ou para uma empresa
              já estabelecida.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Acreditamos que presença digital não é ter um site bonito ou publicar de vez
              em quando. É ter um sistema que funciona em conjunto: uma marca
              reconhecível, uma plataforma que converte e uma comunicação constante.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <RevealGroup className="grid gap-5 lg:grid-cols-3">
          {pilares.map((p) => (
            <RevealItem key={p.titulo}>
              <GlassCard className="h-full p-8">
                <p.icon className="size-6 text-lime" />
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight uppercase">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <MaskedHeading
          as="h2"
          lines={[
            <>
              A WEXA une <span className="text-lime">Tecnologia</span> +
            </>,
            <>
              <span className="text-lime">Design</span> +{" "}
              <span className="text-lime">Marketing</span> para resolver
            </>,
            "problemas reais de negócios no digital.",
          ]}
          className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-[1.1] font-extrabold tracking-tight"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-lime uppercase">
            Atributos da marca
          </span>
        </Reveal>
        <RevealGroup className="mt-8 flex flex-wrap gap-3" stagger={0.05}>
          {atributos.map((a) => (
            <RevealItem key={a}>
              <span className="glass glass-hover inline-flex !rounded-full px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.14em] uppercase">
                {a}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MaskedHeading
            as="h2"
            lines={["Construídos para crescer", "— e para fazer crescer"]}
            className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
          />
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-muted-foreground">
              A WEXA foi desenhada com uma estrutura escalável, preparada para grande
              volume de projectos, equipas multidisciplinares e clientes corporativos e
              premium.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Isso significa duas coisas para quem trabalha connosco: primeiro, que temos
              capacidade de acompanhar projectos de diferentes dimensões. Segundo, que
              aquilo que construímos hoje para o seu negócio foi pensado para continuar a
              funcionar quando ele for maior.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={["Vamos conversar", "sobre o seu projecto?"]}
        subtitle="Conte-nos sobre o seu negócio. A primeira conversa não custa nada."
      />
    </>
  );
}
