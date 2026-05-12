import { Heart, Leaf, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Leaf,
    title: "Treino Adaptado",
    text: "Planos pensados ao seu ritmo, ao seu corpo e à sua rotina. Sem comparações, sem extremos.",
  },
  {
    icon: Heart,
    title: "Foco na Saúde",
    text: "Mais energia, melhor postura e longevidade. A balança é apenas um detalhe do caminho.",
  },
  {
    icon: Sparkles,
    title: "Resultados Reais",
    text: "Mudanças sustentáveis que ficam consigo, com hábitos que se mantêm para toda a vida.",
  },
];

export function Approach() {
  return (
    <section id="abordagem" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Uma abordagem diferente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Treinar não tem de ser punição. É um ato de cuidado consigo mesmo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <item.icon className="h-7 w-7 text-accent-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}