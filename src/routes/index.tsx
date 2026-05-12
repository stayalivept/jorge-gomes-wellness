import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Approach } from "@/components/landing/Approach";
import { Stories } from "@/components/landing/Stories";
import { About } from "@/components/landing/About";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jorge Gomes — Personal Trainer | Saúde e Longevidade" },
      {
        name: "description",
        content:
          "Personal trainer focado em perda de peso saudável, sustentável e longevidade. Treinos adaptados, sem extremos, com empatia e resultados reais.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Approach />
      <Stories />
      <About />
      <Faq />
      <Footer />
    </main>
  );
}
