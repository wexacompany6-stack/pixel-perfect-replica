import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/wexa-logo.png";
import { contacto } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="WEXA — Digital Agency"
              width={576}
              height={330}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              WEXA — Digital Agency
              <br />
              Web · Design · Marketing
            </p>
            <p className="mt-4 font-display text-sm font-bold tracking-tight text-lime">
              Transformamos negócios em experiências digitais.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold tracking-[0.22em] uppercase">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "WEXA WEB", to: "/servicos" },
                { label: "WEXA DESIGN", to: "/servicos" },
                { label: "WEXA MARKETING", to: "/servicos" },
                { label: "Pacotes e Preços", to: "/precos" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold tracking-[0.22em] uppercase">
              Contactos
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${contacto.telefone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-lime" />
                  {contacto.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contacto.telefoneAlt.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-lime" />
                  {contacto.telefoneAlt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacto.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-lime" />
                  {contacto.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold tracking-[0.22em] uppercase">
              Redes sociais
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={contacto.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Facebook className="size-4 text-lime" />
                  {contacto.facebook}
                </a>
              </li>
              <li>
                <a
                  href={contacto.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Instagram className="size-4 text-lime" />
                  {contacto.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border py-8">
          <p className="text-center text-xs tracking-wide text-muted-foreground">
            © 2026 WEXA — Digital Agency. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="watermark -mb-[3vw] flex justify-center text-[22vw] whitespace-nowrap"
      >
        WEXA
      </div>
    </footer>
  );
}
