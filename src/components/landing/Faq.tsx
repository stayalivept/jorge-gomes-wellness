import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Nunca pisei num ginásio, este acompanhamento é para mim?",
    a: "Sim. Tudo é adaptado ao teu ponto de partida. Ensino-te tudo com paciência, passo a passo, sem pressões constantes de performance.",
  },
  {
    q: "E se eu tiver dores ou lesões passadas?",
    a: "Terás um plano totalmente adaptado. Iremos trabalhar o reforço e o alívio das tensões antes mesmo de avançar para exercícios mais intensos.",
  },
  {
    q: "Vou ter de fazer dietas restritivas?",
    a: "Não. O foco está em hábitos sustentáveis, não em dietas radicais. Aprendes a comer melhor, sem culpa nem proibições impossíveis de manter.",
  },
  {
    q: "Os treinos são presenciais ou online?",
    a: "Ofereço ambos os formatos. Falamos primeiro para perceber o que faz mais sentido para a tua rotina e objetivos.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As dúvidas mais comuns de quem está a começar.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/60 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-5 w-5 text-secondary-foreground" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}