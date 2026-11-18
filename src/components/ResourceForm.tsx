import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../lib/site";
import { resources } from "../lib/resources";
import "./ContactForm.css";

type Status = "idle" | "submitting" | "success" | "error";

const ALL = "Tutte e due";

export function ResourceForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [attivita, setAttivita] = useState("");
  const [risorsa, setRisorsa] = useState<string>(ALL);
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const chosen =
    risorsa === ALL ? resources : resources.filter((r) => r.title === risorsa);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!nome.trim() || !/^\S+@\S+\.\S+$/.test(email.trim()) || !privacy) {
      setStatus("error");
      return;
    }
    const botField =
      new FormData(e.currentTarget).get("bot-field")?.toString() ?? "";
    const payload = new URLSearchParams({
      "form-name": "risorse",
      nome: nome.trim(),
      email: email.trim(),
      attivita: attivita.trim(),
      risorsa,
      "bot-field": botField,
    }).toString();
    setStatus("submitting");
    try {
      let response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      });
      if (response.status === 404 || response.status === 405) {
        response = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        });
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
    } catch (error) {
      console.error("Resource form submission error:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form resource-done" aria-live="polite">
        <h2>Ecco le tue risorse, {nome.trim()}.</h2>
        <p>
          Te le ho mandate anche per email, così le ritrovi quando ti servono.
        </p>
        <div className="resource-downloads">
          {chosen.map((r) => (
            <a key={r.slug} href={r.file} className="btn btn-primary" download>
              Scarica “{r.title}” <span aria-hidden="true">↓</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      name="risorse"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
    >
      <input type="hidden" name="form-name" value="risorse" />
      <div className="contact-bot-field" aria-hidden="true">
        <label htmlFor="risorse-bot-field">
          Non compilare questo campo
          <input
            id="risorse-bot-field"
            name="bot-field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="r-nome">Il tuo nome</label>
          <input
            id="r-nome"
            name="nome"
            autoComplete="given-name"
            required
            maxLength={120}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="r-email">Email</label>
          <input
            id="r-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="r-attivita">Attività (facoltativo)</label>
          <input
            id="r-attivita"
            name="attivita"
            maxLength={160}
            placeholder="es. Bar Centrale, Agropoli"
            value={attivita}
            onChange={(e) => setAttivita(e.target.value)}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="r-risorsa">Cosa vuoi ricevere</label>
          <select
            id="r-risorsa"
            name="risorsa"
            value={risorsa}
            onChange={(e) => setRisorsa(e.target.value)}
          >
            <option>{ALL}</option>
            {resources.map((r) => (
              <option key={r.slug}>{r.title}</option>
            ))}
          </select>
        </div>
      </div>
      <label className="contact-consent" htmlFor="r-privacy">
        <input
          id="r-privacy"
          name="privacy"
          type="checkbox"
          required
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
        />
        Accetto di ricevere le risorse via email e, ogni tanto, qualche
        consiglio pratico. Puoi chiedermi di smettere quando vuoi.
      </label>
      <button
        type="submit"
        className="btn btn-primary contact-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Invio in corso…" : "Scarica gratis"}{" "}
        <span aria-hidden="true">↓</span>
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "error" && (
          <p className="contact-message is-error">
            Controlla nome, email e consenso e riprova, oppure scrivimi a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
