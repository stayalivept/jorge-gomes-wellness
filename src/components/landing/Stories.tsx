import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import s1 from "@/assets/pt_jorgegomes_14050223_000049472.jpg";
import s2 from "@/assets/pt_jorgegomes_14050223_000130115.jpg";
import s3 from "@/assets/pt_jorgegomes_14050223_000153965.jpg";

const stories = [
  { img: s1, name: "Manuel", caption: "Menos 9Kg. O Manuel recuperou a energia, a postura e o gosto natural por caminhar todos os dias." },
  { img: s2, name: "João", caption: "Menos 14Kg em 6 meses! Perdeu peso de forma totalmente sustentável e ganhou uma nova mobilidade e confiança no corpo." },
  { img: s3, name: "Marta", caption: "Menos 10Kg em 6 meses. A Marta aprendeu finalmente a treinar sem culpa e a gerir a comida com mais leveza mental." },
];

export function Stories() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % stories.length);
  const prev = () => setI((p) => (p - 1 + stories.length) % stories.length);
  const current = stories[i];

  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Histórias reais, vidas transformadas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Saúde, postura e confiança que se vêem — e se sentem.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.img}
                    src={current.img}
                    alt={`Antes e depois — ${current.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:bg-muted"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {stories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Ir para ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        idx === i ? "w-8 bg-primary" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Seguinte"
                  className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:bg-muted"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground">
                  História de {current.name}
                </p>
                <p className="mt-4 text-2xl font-medium leading-relaxed text-foreground">
                  “{current.caption}”
                </p>
                <p className="mt-6 text-muted-foreground">
                  Foco em ganhos de saúde, postura e confiança — não apenas no que mostra a balança.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}