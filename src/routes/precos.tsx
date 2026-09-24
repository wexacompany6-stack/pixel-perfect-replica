import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";
import { pacotes, type PacoteTab } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Pacotes e Preços — WEXA | Sites a partir de 14.900 MT" },
      {
        name: "description",
        content:
          "Preços claros e adaptados ao mercado moçambicano para websites, identidade visual e gestão de redes sociais.",
      },
      { property: "og:title", content: "Pacotes e Preços — WEXA" },
      {
        property: "og:description",
        content:
          "Preços claros e adaptados ao mercado moçambicano para websites, identidade visual e gestão de redes sociais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Precos,
});

const tabs: { id: PacoteTab; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
];

function Precos() {
  const [tab, setTab] = useState<PacoteTab>("web");
  const grupo = pacotes[tab];

  return (
    <>
      <PageHero
        eyebrow="Pacotes · WEXA"
        image={aboutHero}
        lines={["Preços claros,", "sem surpresas"]}
        subtitle="Escolha o ponto de partida. Qualquer pacote pode ser ajustado ao que o seu negócio precisa."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass inline-flex !rounded-full p-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative rounded-full px-6 py-2.5 font-display text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-500",
                tab === t.id ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-lime"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-14 font-display text-[clamp(1.8rem,4.4vw,3rem)] leading-none font-extrabold tracking-tight uppercase">
              {grupo.titulo}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{grupo.nota}</p>

            <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
              {grupo.planos.map((plano) => (
                <GlassCard
                  key={plano.nome}
                  highlight={plano.destaque}
                  className={cn("flex h-full flex-col p-8", plano.destaque && "lg:-mt-6")}
                >
                  {plano.destaque && (
                    <span className="mb-6 inline-flex w-fit rounded-full bg-lime px-4 py-1.5 font-display text-[10px] font-bold tracking-[0.2em] text-primary-foreground uppercase">
                      Mais escolhido
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold tracking-tight uppercase">
                    {plano.nome}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {plano.subtitulo}
                  </p>
                  <p className="mt-8 font-display text-3xl leading-none font-extrabold tracking-tight text-lime">
                    {plano.preco}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {plano.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-lime" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <WexaButton
                      to="/contacto"
                      variant={plano.destaque ? "lime" : "glass"}
                      className="w-full"
                    >
                      Pedir proposta
                    </WexaButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            <span className="text-foreground">Pagamento:</span> sinal de 50% no início do
            projecto e 50% na entrega. Pagamentos via M-Pesa, e-Mola ou transferência
            bancária.
          </p>
        </Reveal>
      </section>

      <CTASection
        title={["Não sabe qual", "pacote escolher?"]}
        subtitle="Diga-nos o objectivo do negócio e recomendamos o caminho mais directo."
      />
    </>
  );
}
