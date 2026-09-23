import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Clock, Layers3, MessageSquare, Workflow } from "lucide-react";
import { useRef } from "react";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/Marquee";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";
import { CTASection } from "@/components/CTASection";
import {
  MaskedHeading,
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";
import { numeros, processo, servicos } from "@/data/site";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WEXA — Agência Digital em Moçambique | Web, Design e Marketing" },
      {
        name: "description",
        content:
          "A WEXA cria websites, identidades visuais e estratégias de marketing digital que fazem a sua marca ser encontrada, reconhecida e escolhida.",
      },
      {
        property: "og:title",
        content: "WEXA — Agência Digital em Moçambique",
      },
      {
        property: "og:description",
        content:
          "Websites que convertem, identidade visual memorável e marketing com resultados medidos.",
      },
    ],
  }),
  component: Home,
});

const diferenciais = [
  {
    icon: Layers3,
    titulo: "Tudo num só lugar",
    texto:
      "Web, design e marketing sob o mesmo tecto. Em vez de coordenar três fornecedores diferentes, tem uma equipa que fala a mesma linguagem visual do logótipo ao clique final.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Workflow,
    titulo: "Processos claros",
    texto:
      "Sabe exactamente o que vai receber, quando vai receber e quanto vai custar. Sem letras pequenas, sem surpresas a meio do projecto.",
    span: "",
  },
  {
    icon: Clock,
    titulo: "Prazos cumpridos",
    texto:
      "Cada projecto entra numa agenda de produção com data definida. Cumprir prazos não é diferencial, é obrigação.",
    span: "",
  },
  {
    icon: MessageSquare,
    titulo: "Suporte pós-entrega",
    texto:
      "Todos os pacotes incluem acompanhamento depois do lançamento. E quando precisar de mais, temos planos de manutenção mensal.",
    span: "",
  },
  {
    icon: TrendingUp,
    titulo: "Pensado para crescer",
    texto:
      "Construímos estruturas escaláveis. O site que fazemos hoje acompanha o seu negócio quando ele for maior.",
    span: "",
  },
  {
    icon: MapPin,
    titulo: "Feito para Moçambique",
    texto:
      "Preços, métodos de pagamento e soluções adaptadas à realidade do mercado nacional. Incluindo M-Pesa e e-Mola.",
    span: "lg:col-span-2",
  },
];

function Home() {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <>
      <Hero />

      <div className="relative z-10 -mt-2 py-10">
        <Marquee />
      </div>

      {/* Sobre resumo */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MaskedHeading
            as="h2"
            lines={["Uma agência", "feita para", "resolver problemas"]}
            className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1] font-extrabold tracking-tight uppercase"
          />
          <Reveal delay={0.15} className="lg:pt-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              A WEXA é uma agência digital focada no fortalecimento da presença digital
              de empresas através de websites, landing pages, lojas online, design
              gráfico, identidade visual e marketing digital.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Não fazemos "artes e sites". Estruturamos a forma como o seu negócio é
              encontrado e escolhido no ambiente digital.
            </p>
            <div className="mt-8">
              <WexaButton to="/sobre" variant="glass">
                Conhecer a WEXA
              </WexaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-lime uppercase">
            Serviços
          </span>
        </Reveal>
        <MaskedHeading
          as="h2"
          lines={["Três frentes,", "um só objectivo"]}
          className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
        />

        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3">
          {servicos.map((servico) => (
            <RevealItem
              key={servico.nome}
              className={servico.destaque ? "lg:-mt-6" : ""}
            >
              <GlassCard
                highlight={servico.destaque}
                className="flex h-full flex-col p-8"
              >
                <span className="font-display text-5xl font-extrabold tracking-tight text-lime">
                  {servico.numero}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight uppercase">
                  {servico.nome}
                </h3>
                <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {servico.resumo}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {servico.descricao}
                </p>
                <Link
                  to="/servicos"
                  className="link-underline mt-8 inline-flex w-fit items-center gap-2 font-display text-xs font-bold tracking-[0.18em] uppercase"
                >
                  Ver detalhes <ArrowUpRight className="size-4 text-lime" />
                </Link>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Números */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <RevealGroup className="grid gap-10 border-y border-border py-14 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map((n) => (
            <RevealItem key={n.label}>
              <p className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-extrabold tracking-tight text-lime">
                <Counter value={n.valor} suffix={n.sufixo} />
              </p>
              <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {n.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Porquê a WEXA — bento */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <MaskedHeading
          as="h2"
          lines={["Porquê a WEXA"]}
          className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
        />
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {diferenciais.map((d) => (
            <RevealItem key={d.titulo} className={d.span}>
              <GlassCard className="flex h-full flex-col justify-between p-8">
                <d.icon className="size-6 text-lime" />
                <div className="mt-10">
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {d.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {d.texto}
                  </p>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Processo */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <MaskedHeading
          as="h2"
          lines={["Como trabalhamos"]}
          className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1] font-extrabold tracking-tight uppercase"
        />

        <div ref={processRef} className="relative mt-16">
          <div className="absolute top-3 left-3 h-[calc(100%-1.5rem)] w-px bg-border lg:top-3 lg:left-0 lg:h-px lg:w-full">
            <motion.span
              className="absolute inset-0 origin-top bg-lime lg:origin-left"
              style={{ scaleY: progress, scaleX: progress }}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {processo.map((p, i) => (
              <Reveal key={p.etapa} delay={i * 0.08} className="relative pl-12 lg:pl-0">
                <span className="absolute top-1 left-0 size-6 rounded-full border border-lime/50 bg-background lg:relative lg:mb-8 lg:block" />
                <span className="font-display text-xs font-bold tracking-[0.22em] text-lime">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight uppercase">
                  {p.etapa}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
