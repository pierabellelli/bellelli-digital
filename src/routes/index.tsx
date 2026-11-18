import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CtaBand,
  Layout,
  Packages,
  PageHero,
  WeekSteps,
} from "../components/Blocks";
import { PostRows } from "../components/BlogParts";
import { sortedPosts } from "../content/posts";
import { WHATSAPP_URL } from "../lib/site";
import { useSeo } from "../lib/useSeo";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  useSeo(
    "Bellelli Digital — Sito, Google e AI per attività locali in 7 giorni",
    "Sito, scheda Google e AI per bar, negozi, artigiani e studi: online in 7 giorni a prezzo fisso. Piera Bellelli, Capaccio Paestum.",
    "/",
  );
  return (
    <Layout>
      <PageHero
        big
        eyebrow="Per bar, negozi, artigiani e studi · Capaccio Paestum"
        title={
          <>
            Online in 7 giorni. <em>Prezzo fisso.</em>
          </>
        }
        intro="Sito, scheda Google e AI per rispondere ai clienti. Faccio tutto io, a te serve circa un’ora."
      >
        <Link to="/attivita-digitale" className="btn btn-dark">
          Scopri Attività Digitale
        </Link>
        <a href={WHATSAPP_URL} className="btn btn-secondary" rel="noopener">
          Scrivimi su WhatsApp
        </a>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <WeekSteps />
        </div>
      </section>

      <section className="section band-soft">
        <div className="container">
          <h2 className="band-title">Tre pacchetti, nessuna sorpresa.</h2>
          <Packages />
          <div className="section-action">
            <Link to="/attivita-digitale" className="text-link">
              Cosa include ogni pacchetto <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Chi sono</p>
            <h2 className="split-title">Piera Bellelli.</h2>
            <div
              className="photo-slot"
              role="img"
              aria-label="Spazio per il ritratto di Piera"
            >
              Spazio per il tuo ritratto
            </div>
          </div>
          <div className="split-body split-body-offset">
            <p className="big">
              Da anni aiuto aziende software internazionali a far usare bene la
              tecnologia ai loro clienti.
            </p>
            <p>
              Vivo a Capaccio, insegno Pilates e appena posso vado a cavallo.
              Con Bellelli Digital porto lo stesso metodo alle attività della
              mia zona: spiegare, semplificare, restare disponibile anche dopo.
            </p>
            <Link to="/chi-sono" className="text-link">
              La mia storia <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-bottom">
        <div className="container">
          <div className="rows-head">
            <h2>Blog</h2>
            <Link to="/blog" className="text-link">
              Tutti gli articoli <span aria-hidden="true">→</span>
            </Link>
          </div>
          <PostRows items={sortedPosts().slice(0, 3)} />
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
