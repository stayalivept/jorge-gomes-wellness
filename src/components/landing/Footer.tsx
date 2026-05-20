import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contacto" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="rounded-[2rem] border border-border p-10 text-center shadow-[var(--shadow-soft)]" style={{ background: "var(--gradient-hero)" }}>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              É o momento de olhares para ti. Estás pronto(a)?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Fala comigo diretamente pelo WhatsApp. Respondo a todas as mensagens pessoalmente.
            </p>
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex animate-pulse items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:animate-none hover:bg-[var(--soft-orange-hover)]"
            >
              <MessageCircle className="h-5 w-5" />
              Começar a Mudança
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-foreground">Jorge Gomes</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Personal Trainer · Saúde sustentável e longevidade.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4" /><span>+351 900 000 000</span></p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /><span>ola@jorgegomes.pt</span></p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /><span>Lisboa · Online</span></p>
          </div>
          <div className="flex items-start md:justify-end">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jorge Gomes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}