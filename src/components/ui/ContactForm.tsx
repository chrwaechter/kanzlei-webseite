"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", telefon: "", anliegen: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.anliegen) {
      setStatus("error");
      setErrorMsg("Bitte füllen Sie Name, E-Mail und Anliegen aus.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Ein Fehler ist aufgetreten.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", telefon: "", anliegen: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
    }
  }

  if (status === "success") {
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 16, padding: "60px 0", textAlign: "center",
      }}>
        <CheckCircle size={48} strokeWidth={1.5} color="var(--color-accent)" />
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--color-text)" }}>
          Nachricht gesendet
        </h3>
        <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", fontWeight: 300, maxWidth: 280, lineHeight: 1.7 }}>
          Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 8, background: "none", border: "1px solid var(--color-border)",
            padding: "8px 20px", fontSize: 11, letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
            color: "var(--color-muted)", transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {[
        { label: "Name *", name: "name", type: "text", placeholder: "Ihr vollständiger Name" },
        { label: "E-Mail *", name: "email", type: "email", placeholder: "ihre@email.de" },
        { label: "Telefon", name: "telefon", type: "tel", placeholder: "+49 …" },
      ].map(({ label, name, type, placeholder }) => (
        <div key={name}>
          <label style={{
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--color-muted)", display: "block", marginBottom: 8,
          }}>
            {label}
          </label>
          <input
            type={type}
            name={name}
            value={form[name as keyof typeof form]}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={status === "loading"}
            style={{
              width: "100%", padding: "12px 16px",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg)", color: "var(--color-text)",
              fontSize: "0.9rem", fontFamily: "inherit", outline: "none",
              transition: "border-color 0.2s",
              opacity: status === "loading" ? 0.6 : 1,
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
      ))}

      <div>
        <label style={{
          fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--color-muted)", display: "block", marginBottom: 8,
        }}>
          Anliegen *
        </label>
        <textarea
          name="anliegen"
          rows={4}
          value={form.anliegen}
          onChange={handleChange}
          placeholder="Beschreiben Sie kurz Ihr Anliegen …"
          disabled={status === "loading"}
          style={{
            width: "100%", padding: "12px 16px",
            border: "1px solid var(--color-border)",
            background: "var(--color-bg)", color: "var(--color-text)",
            fontSize: "0.9rem", fontFamily: "inherit", outline: "none",
            resize: "vertical", transition: "border-color 0.2s",
            opacity: status === "loading" ? 0.6 : 1,
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "12px 16px", background: "#fef2f2",
          border: "1px solid #fecaca", fontSize: "0.85rem", color: "#b91c1c",
        }}>
          <AlertCircle size={15} />
          {errorMsg}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        style={{
          background: "var(--color-text)", color: "#fff",
          padding: "14px 32px", fontSize: 12, letterSpacing: "0.16em",
          textTransform: "uppercase", fontWeight: 600, border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          display: "flex", alignItems: "center", gap: 8,
          transition: "background 0.2s", fontFamily: "inherit",
          opacity: status === "loading" ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (status !== "loading") e.currentTarget.style.background = "var(--color-accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-text)";
        }}
      >
        {status === "loading" ? (
          <>
            <Loader size={14} style={{ animation: "spin 1s linear infinite" }} />
            Wird gesendet …
          </>
        ) : (
          <>
            Absenden <ArrowRight size={14} />
          </>
        )}
      </button>

      <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 300 }}>
        * Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
        <a href="/datenschutz" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
          Datenschutzerklärung
        </a>{" "}
        verarbeitet.
      </p>
    </div>
  );
}