import NavbarOutside from "@/components/layout/NavbarOutside";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Impressum | Kanzlei Wächter München",
  description: "Impressum der Rechtsanwaltskanzlei Christian Wächter in München.",
};

export default function Impressum() {
  return (
    
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: 100 }}>
      <NavbarOutside />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 32px 100px" }}>

        {/* Back link */}
        <Link
          href="/"
          style={{
            fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--color-muted)", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 48,
            transition: "color 0.2s",
          }}
        >
          ← Zurück zur Startseite
        </Link>

        {/* Heading */}
        <div style={{
          fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--color-accent)", fontWeight: 600, marginBottom: 16,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
          Rechtliches
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600, color: "var(--color-text)", marginBottom: 48,
        }}>
          Impressum
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          <Section title="Angaben gemäß § 5 TMG">
            <p>Christian Wächter</p>
            <p>Rechtsanwalt</p>
            <p>Hermann-Lingg-Straße 10</p>
            <p>80336 München</p>
          </Section>

          <Divider />

          <Section title="Kontakt">
            <p>Telefon: +49 (89) 5151 87 65</p>
            <p>Telefax: +49 (89) 5151 87 66</p>
            <p>E-Mail: mail@ra-waechter.de</p>
          </Section>

          <Divider />

          <Section title="Berufsbezeichnung & Zulassung">
            <p>Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)</p>
            <p style={{ marginTop: 8 }}>Zuständige Rechtsanwaltskammer:</p>
            <p>Rechtsanwaltskammer München</p>
            <p>Tal 33, 80331 München</p>
            <p>
              <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                www.rak-muenchen.de
              </a>
            </p>
          </Section>

          <Divider />

          <Section title="Berufsrechtliche Regelungen">
            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
              <li>Fachanwaltsordnung (FAO)</li>
              <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              Die Regelungen sind einsehbar unter:{" "}
              <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                www.brak.de
              </a>
            </p>
          </Section>

          <Divider />

          <Section title="Umsatzsteuer-ID">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
            <p style={{ marginTop: 4 }}>DE [bitte eintragen]</p>
          </Section>

          <Divider />

          <Section title="Berufshaftpflichtversicherung">
            <p>Name und Sitz der Gesellschaft:</p>
            <p>[Versicherungsgesellschaft bitte eintragen]</p>
            <p style={{ marginTop: 8 }}>Geltungsraum der Versicherung: Deutschland</p>
          </Section>

          <Divider />

          <Section title="Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p style={{ marginTop: 8 }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          <Divider />

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </Section>

          <Divider />

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </Section>

          <Divider />

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </Section>

        </div>
      </div>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.15rem", fontWeight: 600,
        color: "var(--color-text)", marginBottom: 12,
      }}>
        {title}
      </h2>
      <div style={{
        fontSize: "0.9rem", color: "var(--color-muted)",
        lineHeight: 1.75, fontWeight: 300,
        display: "flex", flexDirection: "column", gap: 2,
      }}>
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />;
}