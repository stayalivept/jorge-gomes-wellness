import { Reveal } from "./Reveal";
import jorge from "@/assets/jorge.jpg";

export function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <img
                src={jorge}
                alt="Jorge Gomes, Personal Trainer"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Sobre o treinador
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Olá, sou o Jorge Gomes.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Há mais de 10 anos que ajudo pessoas comuns a redescobrir o prazer de se moverem e cuidar do seu corpo. Acredito que treinar deve ser um espaço seguro, sem julgamentos e sem extremos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              O meu método valoriza a empatia, a escuta e os resultados sustentáveis. Mais do que estética, procuro saúde, longevidade e qualidade de vida — para que cada aluno se sinta bem hoje e daqui a 30 anos.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "+10", l: "anos a treinar" },
                { n: "+200", l: "alunos" },
                { n: "100%", l: "personalizado" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{s.n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}