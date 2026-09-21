import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { WexaButton } from "@/components/ui/wexa-button";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
        <nav
          className={cn(
            "glass mx-auto flex items-center justify-between !rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled
              ? "max-w-6xl px-5 py-2.5 backdrop-blur-3xl"
              : "max-w-7xl px-6 py-4",
          )}
        >
          <Link
            to="/"
            className="font-display text-xl leading-none font-extrabold tracking-tight text-foreground"
            aria-label="WEXA — início"
          >
            WEXA<span className="text-lime">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative block px-4 py-2 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
                  >
                    <span className={active ? "text-foreground" : undefined}>
                      {link.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-lime"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <WexaButton to="/contacto" className="px-6 py-3" withArrow={false}>
                Fale connosco
              </WexaButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-lime/40 hover:text-lime lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-extrabold tracking-tight">
                  WEXA<span className="text-lime">.</span>
                </span>
                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground"
                >
                  <X className="size-5" />
                </motion.button>
              </div>

              <ul className="mt-auto mb-auto space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
                  >
                    <Link
                      to={link.to}
                      className="font-display text-[12vw] leading-[1.05] font-extrabold tracking-tight uppercase sm:text-6xl"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <WexaButton to="/contacto" className="w-full">
                Fale connosco
              </WexaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
