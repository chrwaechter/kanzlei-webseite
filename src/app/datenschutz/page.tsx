import Link from "next/link";
import NavbarOutside from "@/components/layout/NavbarOutside";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutzerklärung | Kanzlei Wächter München",
  description: "Datenschutzerklärung der Rechtsanwaltskanzlei Christian Wächter in München.",
};

export default function Datenschutz() {
  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: 100 }}>
    <NavbarOutside/>
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
          fontWeight: 600, color: "var(--color-text)", marginBottom: 12,
        }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: 48, fontWeight: 300 }}>
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          <Section title="1. Verantwortlicher">
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p style={{ marginTop: 8 }}>
              Christian Wächter<br />
              Rechtsanwalt<br />
              Hermann-Lingg-Straße 10<br />
              80336 München<br />
              <br />
              Telefon: +49 (89) 5151 87 65<br />
              E-Mail: mail@ra-waechter.de
            </p>
          </Section>

          <Divider />

          <Section title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach
              Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
              vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist
              und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </Section>

          <Divider />

          <Section title="3. Hosting & Infrastruktur">
            <p style={{ fontWeight: 500, color: "var(--color-text)", marginBottom: 8 }}>Vercel Inc.</p>
            <p>
              Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA. Vercel ist Empfänger Ihrer personenbezogenen Daten und
              als Auftragsverarbeiter für uns tätig. Beim Aufruf unserer Website werden automatisch
              folgende Daten in sogenannten Server-Log-Dateien gespeichert:
            </p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
              Betrieb der Website). Vercel hat Compliance-Maßnahmen für internationale
              Datenübermittlungen umgesetzt. Weitere Informationen finden Sie in der{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                Datenschutzerklärung von Vercel
              </a>.
            </p>

            <p style={{ fontWeight: 500, color: "var(--color-text)", marginTop: 20, marginBottom: 8 }}>
              IONOS SE (Domain)
            </p>
            <p>
              Die Domain dieser Website ist registriert bei der IONOS SE, Elgendorfer Str. 57,
              56410 Montabaur. Bei der Domain-Registrierung werden Name, Adresse und
              Kontaktdaten des Domain-Inhabers gespeichert. Weitere Informationen finden Sie in der{" "}
              <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                Datenschutzerklärung von IONOS
              </a>.
            </p>
          </Section>

          <Divider />

          <Section title="4. Kontaktformular & E-Mail-Versand">
            <p style={{ fontWeight: 500, color: "var(--color-text)", marginBottom: 8 }}>Resend</p>
            <p>
              Für den Versand von Nachrichten über unser Kontaktformular nutzen wir den Dienst
              Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA).
              Wenn Sie das Kontaktformular ausfüllen und absenden, werden die von Ihnen eingegebenen
              Daten (Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) an Resend übermittelt
              und von dort an uns weitergeleitet.
            </p>
            <p style={{ marginTop: 8 }}>
              Resend verarbeitet diese Daten ausschließlich zur Zustellung der E-Mail und speichert
              sie nicht dauerhaft über den für die Zustellung notwendigen Zeitraum hinaus.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an zuverlässiger Kommunikation).
            </p>
            <p style={{ marginTop: 8 }}>
              Weitere Informationen finden Sie in der{" "}
              <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                Datenschutzerklärung von Resend
              </a>.
            </p>
            <p style={{ marginTop: 12 }}>
              Die über das Kontaktformular übermittelten Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
              die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen - insbesondere
              handels- und steuerrechtliche Aufbewahrungsfristen - bleiben unberührt.
            </p>
          </Section>

          <Divider />

          <Section title="5. GitHub (Quellcode-Verwaltung)">
            <p>
              Der Quellcode dieser Website wird auf GitHub (GitHub Inc., 88 Colin P. Kelly Jr. Street,
              San Francisco, CA 94107, USA) verwaltet. GitHub hat keinen Zugriff auf die
              Produktionsdaten oder die Daten der Websitebesucher. Weitere Informationen finden Sie
              in der{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                Datenschutzerklärung von GitHub
              </a>.
            </p>
          </Section>

          <Divider />

          <Section title="6. Cookies">
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Cookies zu Werbezwecken.
              Es werden ausschließlich technisch notwendige Cookies gesetzt, die für den Betrieb
              der Website erforderlich sind (z. B. Session-Cookies). Diese Cookies werden nach
              dem Ende der Browser-Sitzung gelöscht. Eine Einwilligung ist hierfür gemäß
              § 25 Abs. 2 TTDSG nicht erforderlich.
            </p>
          </Section>

          <Divider />

          <Section title="7. Ihre Rechte">
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Auskunft</strong> - Art. 15 DSGVO: Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen.</li>
              <li><strong>Berichtigung</strong> - Art. 16 DSGVO: Sie können die Berichtigung unrichtiger Daten verlangen.</li>
              <li><strong>Löschung</strong> - Art. 17 DSGVO: Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Einschränkung</strong> - Art. 18 DSGVO: Sie können die Einschränkung der Verarbeitung verlangen.</li>
              <li><strong>Datenübertragbarkeit</strong> - Art. 20 DSGVO: Sie können Ihre Daten in einem gängigen Format herausverlangen.</li>
              <li><strong>Widerspruch</strong> - Art. 21 DSGVO: Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: mail@ra-waechter.de
            </p>
          </Section>

          <Divider />

          <Section title="8. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
              steht Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu.
              Die zuständige Aufsichtsbehörde für Bayern ist:
            </p>
            <p style={{ marginTop: 8 }}>
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                www.lda.bayern.de
              </a>
            </p>
          </Section>

          <Divider />

          <Section title="9. Aktualität und Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
              {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
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