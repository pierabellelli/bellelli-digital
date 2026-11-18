import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHero } from "../components/Blocks";
import { ResourceForm } from "../components/ResourceForm";
import { resources } from "../lib/resources";
import { useSeo } from "../lib/useSeo";

export const Route = createFileRoute("/risorse")({
  component: Risorse,
});

function Risorse() {
  useSeo(
    "Risorse gratuite",
    "Checklist per la scheda Google e 10 prompt AI per rispondere alle recensioni. Gratis, in PDF.",
    "/risorse",
  );
  return (
    <Layout>
      <PageHero
        eyebrow="Risorse gratuite"
        title={
          <>
            Strumenti pronti, <em>gratis.</em>
          </>
        }
        intro="Due guide pratiche per sistemare da solo la tua presenza su Google e usare l’AI con le recensioni. Lascia nome ed email e scaricale subito."
      />
      <section className="section section-top-0">
        <div className="container contact-layout">
          <aside className="contact-side">
            {resources.map((r) => (
              <div key={r.slug}>
                <h2>{r.kind}</h2>
                <p>
                  <strong>{r.title}.</strong> {r.text}
                </p>
              </div>
            ))}
            <div>
              <h2>In arrivo</h2>
              <p>La guida “La tua AI in 10 minuti al giorno”.</p>
            </div>
          </aside>
          <ResourceForm />
        </div>
      </section>
      <CtaBand
        title="Preferisci che lo faccia io?"
        text="In 7 giorni sistemo sito, scheda Google e ti insegno a usare l’AI nella tua attività."
      />
    </Layout>
  );
}
