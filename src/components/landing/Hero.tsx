import { motion } from "framer-motion";
import heroImg from "@/assets/pt_jorgegomes_14050223_000050966.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Saúde sustentável · Longevidade
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              O teu peso ideal sem dietas extremas ou culpas. Com acompanhamento real.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              Recupera a tua energia, mobilidade e autoestima com o lado humano do fitness. Um plano de treino feito à medida da tua vida, e não o contrário.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:bg-[var(--soft-orange-hover)]"
              >
                Quero recuperar a minha Saúde
              </a>
              <a
                href="#abordagem"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Saber mais
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <img
                src={heroImg}
                alt="Pessoa a praticar exercício suave ao ar livre"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] sm:block">
              <p className="text-sm font-medium text-muted-foreground">Mais de</p>
              <p className="text-2xl font-bold text-foreground">+200 alunos</p>
              <p className="text-sm text-secondary-foreground">a viver melhor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}