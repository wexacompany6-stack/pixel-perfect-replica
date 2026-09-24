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
      "Fortalecer a presença digital de empresas com soluções que geram resultados concretos e mensuráveis.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    texto:
      "Ser a referência em Moçambique quando uma empresa precisa de crescer no ambiente digital.",
  },
  {
    icon: Gem,
    titulo: "Valores",
    texto:
      "Clareza, compromisso com prazos, qualidade sem atalhos e honestidade em cada proposta.",
  },
];

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre · WEXA"
        image={aboutHero}
        lines={["Somos a agência", "que pensa no negócio", "antes do layout"]}
        subtitle="A WEXA nasceu para dar às empresas moçambicanas uma presença digital à altura do que elas realmente oferecem."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MaskedHeading
            as="h2"
            lines={["Quem somos"]}
            className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
          />
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Somos uma agência digital focada em websites, landing pages, lojas online,
              design gráfico, identidade visual e marketing digital. Trabalhamos com
              empresas que querem deixar de improvisar a sua presença online.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cada projecto começa por entender o negócio: o que vende, para quem, e o
              que está a travar o crescimento. Só depois falamos de design e tecnologia.
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
            lines={["Visão de", "crescimento"]}
            className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
          />
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-muted-foreground">
              A WEXA está estruturada para crescer: equipas multidisciplinares por área
              — web, design e marketing — com processos que se repetem sem perder
              qualidade quando o volume aumenta.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Esse modelo permite-nos servir desde pequenos negócios em arranque até
              clientes corporativos e premium, com o mesmo nível de exigência.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
