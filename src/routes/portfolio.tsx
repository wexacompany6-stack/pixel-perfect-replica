import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { projectos } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Projectos de Web, Design e Marketing | WEXA" },
      {
        name: "description",
        content:
          "Uma selecção de projectos da WEXA: sites institucionais, lojas online, identidades visuais e gestão de redes sociais.",
      },
      { property: "og:title", content: "Portfólio da WEXA" },
      {
        property: "og:description",
        content: "Projectos de web, design e marketing digital feitos em Moçambique.",
      },
    ],
  }),
  component: Portfolio,
});

/** Trocar aqui as imagens dos projectos (ver também src/data/site.ts). */
const imagens: Record<string, string> = {
  web: serviceWeb,
  design: serviceDesign,
  marketing: serviceMarketing,
};

const filtros = ["Todos", "Web", "Design", "Marketing"] as const;

function Portfolio() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const lista = projectos.filter((p) => filtro === "Todos" || p.categoria === filtro);

  return (
    <>
      <PageHero
        eyebrow="Portfólio · WEXA"
        image={aboutHero}
        lines={["Projectos que", "resolvem problemas"]}
        subtitle="Uma selecção de trabalhos em web, design e marketing para empresas de vários sectores."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-2">
          {filtros.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              className={cn(
                "glass !rounded-full px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-500",
                filtro === f
                  ? "!border-lime/50 text-lime"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {lista.map((p) => (
              <motion.article
                key={p.titulo}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border"
              >
                <img
                  src={imagens[p.imagem]}
                  alt={`${p.titulo} — ${p.tipo}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-4/5 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.24em] text-lime uppercase">
                    {p.categoria}
                  </span>
                  <h2 className="mt-2 font-display text-lg leading-tight font-bold tracking-tight">
                    {p.titulo}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {p.tipo}
                  </p>
                </div>
                <ArrowUpRight className="absolute top-5 right-5 size-5 text-lime opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection
        title={["O próximo projecto", "pode ser o seu"]}
        subtitle="Conte-nos o que precisa e mostramos como abordaríamos o seu caso."
      />
    </>
  );
}
