import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import aboutHero from "@/assets/about-hero.jpg";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-primitives";
import { WexaButton } from "@/components/ui/wexa-button";
import { contacto } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — WEXA Digital Agency | Moçambique" },
      {
        name: "description",
        content:
          "Fale connosco sobre o seu projecto digital. Respondemos normalmente no mesmo dia.",
      },
      { property: "og:title", content: "Contacto — WEXA Digital Agency" },
      {
        property: "og:description",
        content:
          "Fale connosco sobre o seu projecto digital. Respondemos normalmente no mesmo dia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

const canais = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    valor: contacto.telefone,
    href: contacto.whatsapp,
  },
  {
    icon: Phone,
    label: "Telefone alternativo",
    valor: contacto.telefoneAlt,
    href: `tel:${contacto.telefoneAlt.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    valor: contacto.email,
    href: `mailto:${contacto.email}`,
  },
  {
    icon: Facebook,
    label: "Facebook",
    valor: contacto.facebook,
    href: contacto.facebookUrl,
  },
  {
    icon: Instagram,
    label: "Instagram",
    valor: contacto.instagram,
    href: contacto.instagramUrl,
  },
];

const campos = [
  { name: "nome", label: "Nome", type: "text" },
  { name: "email", label: "E-mail", type: "email" },
  { name: "telefone", label: "Telefone", type: "tel" },
] as const;

function Field({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder=" "
        className="peer w-full rounded-xl border border-input bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-foreground transition-colors duration-500 outline-none focus:border-lime"
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute top-4 left-4 text-xs tracking-[0.12em] text-muted-foreground uppercase transition-all duration-300 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-lime peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px]"
      >
        {label}
      </label>
    </div>
  );
}

function Contacto() {
  const [enviando, setEnviando] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contacto · WEXA"
        image={aboutHero}
        lines={["Vamos falar", "do seu projecto"]}
        subtitle="Responda a três perguntas simples e voltamos com uma proposta objectiva."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <RevealGroup className="space-y-4" stagger={0.08}>
            {canais.map((c) => (
              <RevealItem key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="block"
                >
                  <GlassCard className="flex items-center gap-4 p-5" spotlight={false}>
                    <span className="flex size-10 items-center justify-center rounded-full border border-lime/30">
                      <c.icon className="size-4 text-lime" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                        {c.label}
                      </span>
                      <span className="mt-1 block font-display text-base font-bold tracking-tight">
                        {c.valor}
                      </span>
                    </span>
                  </GlassCard>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <GlassCard spotlight={false} className="p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold tracking-tight uppercase">
                Enviar mensagem
              </h2>
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnviando(true);
                  const form = e.currentTarget;
                  setTimeout(() => {
                    setEnviando(false);
                    form.reset();
                    toast.success("Mensagem registada", {
                      description:
                        "Para resposta imediata, fale connosco pelo WhatsApp.",
                    });
                  }, 600);
                }}
              >
                {campos.map((c) => (
                  <Field key={c.name} {...c} />
                ))}

                <div className="relative">
                  <select
                    id="servico"
                    name="servico"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-input bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-foreground transition-colors duration-500 outline-none focus:border-lime"
                  >
                    <option value="" disabled>
                      Selecionar…
                    </option>
                    <option value="website">Website</option>
                    <option value="identidade">Identidade Visual</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="outro">Outro</option>
                  </select>
                  <label
                    htmlFor="servico"
                    className="pointer-events-none absolute top-2 left-4 text-[10px] tracking-[0.12em] text-muted-foreground uppercase"
                  >
                    Serviço pretendido
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    placeholder=" "
                    className="peer w-full resize-none rounded-xl border border-input bg-white/[0.04] px-4 pt-6 pb-3 text-sm text-foreground transition-colors duration-500 outline-none focus:border-lime"
                  />
                  <label
                    htmlFor="mensagem"
                    className="pointer-events-none absolute top-4 left-4 text-xs tracking-[0.12em] text-muted-foreground uppercase transition-all duration-300 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-lime peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px]"
                  >
                    Mensagem
                  </label>
                </div>

                <div className="pt-2">
                  <WexaButton type="submit" className="w-full">
                    {enviando ? "A enviar…" : "Enviar mensagem"}
                  </WexaButton>
                </div>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
