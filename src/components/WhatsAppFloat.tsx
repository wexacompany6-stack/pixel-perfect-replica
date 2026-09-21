import { MessageCircle } from "lucide-react";
import { contacto } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={contacto.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-lime text-primary-foreground shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 motion-safe:animate-[var(--animate-pulse-lime)] sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
