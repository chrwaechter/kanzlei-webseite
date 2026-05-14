"use client";

import { useState, useEffect } from "react";
import {
  Phone, Mail, MapPin, Scale, Home as HomeIcon, Heart, Gavel, ChevronDown, Menu, X, ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VatertagPopup from "@/components/ui/VatertagPopup";
import GoogleMaps from "@/components/ui/GoogleMapsEinbettung";
import ContactForm from "@/components/ui/ContactForm";



const PRACTICE_AREAS = [
  {
    icon: Scale,
    title: "Erbrecht",
    description:
      "Kompetente Beratung und Vertretung in allen erbrechtlichen Angelegenheiten - von der Testamentsgestaltung bis zur Erbauseinandersetzung.",
  },
  {
    icon: Heart,
    title: "Ehe- & Familienrecht",
    description:
      "Einfühlsame und sachkundige Begleitung in Trennung, Scheidung, Unterhalt und allen familienrechtlichen Fragen.",
  },
  {
    icon: HomeIcon,
    title: "Immobilienrecht",
    description:
      "Rechtssichere Abwicklung von Immobilienverkäufen sowie umfassende Beratung bei immobilienrechtlichen Streitigkeiten.",
  },
  {
    icon: Gavel,
    title: "Zwangsversteigerungsrecht",
    description:
      "Spezialisierte Vertretung und Beratung im Bereich Zwangsversteigerungen - sowohl für Bieter als auch für Betroffene.",
  },
];

export default function LandingPage() {
  //const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // ← hier rein

  useEffect(() => {                                 // ← hier rein
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <VatertagPopup />
      {/* ── NAVIGATION ── */}
      <Navbar />
      {/* ── HERO ── */}
      <section
        id="kanzlei"
        style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center",
          padding: "120px 32px 80px",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Hintergrundbild + Overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url('/images/kanzlei-waechter-hero-2.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(244,243,240,0.92) 0%, rgba(244,243,240,0.75) 50%, rgba(244,243,240,0.6) 100%)",
        }} />
        {/* Background geometric accent */}
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 420, height: 420,
          border: "1px solid var(--color-border)", borderRadius: "50%", opacity: 0.5,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "0%", width: 280, height: 280,
          border: "1px solid var(--color-border)", borderRadius: "50%", opacity: 0.4,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-3%", width: 320, height: 320,
          border: "1px solid var(--color-border)", borderRadius: "50%", opacity: 0.35,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="animate-fade-up" style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--color-accent)", fontWeight: 600, marginBottom: 20,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
            Rechtsanwaltskanzlei München
            <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
          </div>

          <h1 className="animate-fade-up-d1" style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700, letterSpacing: "-0.01em",
            color: "var(--color-text)", marginBottom: 8, lineHeight: 1.05,
          }}>
            Christian
          </h1>
          <h1 className="animate-fade-up-d1" style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 400, fontStyle: "italic",
            color: "var(--color-accent)", marginBottom: 32, lineHeight: 1.05,
          }}>
            Wächter
          </h1>

          <p className="animate-fade-up-d2" style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "var(--color-muted)", lineHeight: 1.75,
            maxWidth: 580, margin: "0 auto 44px", fontWeight: 300,
          }}>
            Erfahrene Rechtsberatung und kompetente Vertretung in München.
            Ihr Anwalt für Erbrecht, Familienrecht, Immobilien und Zwangsversteigerungen.
          </p>

          <div className="animate-fade-up-d3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#kontakt"
              style={{
                background: "var(--color-text)", color: "#fff",
                padding: "14px 32px", fontSize: 12, letterSpacing: "0.16em",
                textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-text)")}
            >
              Kontakt aufnehmen <ArrowRight size={14} />
            </a>
            <a
              href="#rechtsgebiete"
              style={{
                border: "1px solid var(--color-border)", color: "var(--color-text)",
                padding: "14px 32px", fontSize: 12, letterSpacing: "0.16em",
                textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text)";
              }}
            >
              Rechtsgebiete
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#rechtsgebiete" style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          color: "var(--color-muted)", display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6, textDecoration: "none",
          fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
          animation: "fadeIn 1.2s 0.8s ease forwards", opacity: 0,
        }}>
          <ChevronDown size={18} strokeWidth={1.5} />
        </a>
      </section>

      {/* ── DIVIDER STAT BAND ── */}
      <div style={{
        background: "var(--color-text)", color: "#fff",
        padding: "40px 32px",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32, textAlign: "center",
        }}>
          {[
            { value: "20+", label: "Jahre Erfahrung" },
            { value: "4", label: "Rechtsgebiete" },
            { value: "München", label: "Ihr lokaler Anwalt" },
            { value: "AT", label: "Österreich-Kenntnisse" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", color: "var(--color-accent)", marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RECHTSGEBIETE ── */}
      <section id="rechtsgebiete" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--color-accent)", fontWeight: 600, marginBottom: 16,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            }}>
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
              Expertise
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--color-text)", marginBottom: 16 }}>
              Rechtsgebiete
            </h2>
            <p style={{ color: "var(--color-muted)", maxWidth: 520, margin: "0 auto", fontSize: "0.95rem", fontWeight: 300 }}>
              Jahrelange Spezialisierung in ausgewählten Bereichen ermöglicht tiefe Kenntnis und verlässliche Beratung.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 2,
          }}>
            {PRACTICE_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  style={{
                    background: "var(--color-surface)",
                    padding: "44px 36px",
                    borderLeft: i === 0 ? "none" : "1px solid var(--color-border)",
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#f9f8f5";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "var(--color-surface)";
                  }}
                >
                  <div style={{
                    width: 44, height: 44, marginBottom: 24,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--color-accent)", color: "var(--color-accent)",
                  }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 14, color: "var(--color-text)" }}>
                    {area.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.7, fontWeight: 300 }}>
                    {area.description}
                  </p>
                  {/*
                  <div style={{
                    marginTop: 28, display: "flex", alignItems: "center", gap: 8,
                    fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--color-accent)", fontWeight: 600,
                  }}>
                    Mehr erfahren <ArrowRight size={12} />
                  </div>
                  */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ÜBER DEN ANWALT ── */}
      <section id="anwalt" style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "100px 32px",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 80,
          alignItems: "center",
        }}>
          {/* Left: decorative block */}
          <div style={{
            position: "relative",
            marginBottom: isMobile ? 80 : 0, // Platz für die floating card
          }}>
            <div style={{
              width: "100%", paddingBottom: "110%",
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                justifyContent: "flex-end", padding: 40,
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? "6rem" : "10rem",
                  fontWeight: 700, lineHeight: 1,
                  color: "var(--color-border)", letterSpacing: "-0.04em",
                  position: "absolute", top: 20, right: 24, userSelect: "none",
                }}>
                  CW
                </div>
                <div style={{
                  position: "relative", zIndex: 1,
                  borderLeft: "3px solid var(--color-accent)",
                  paddingLeft: 20,
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 600, color: "var(--color-text)" }}>
                    Christian Wächter
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted)", marginTop: 4 }}>
                    Rechtsanwalt
                  </div>
                </div>
              </div>
            </div>

            {/* Floating address card */}
            <div style={{
              position: "absolute",
              bottom: isMobile ? -92 : -24,
              right: isMobile ? 0 : -24,
              background: "var(--color-text)", color: "#fff",
              padding: "20px 28px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                Kanzleianschrift
              </div>
              <div style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                Hermann-Lingg-Straße 10<br />
                80336 München
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div>
            <div style={{
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--color-accent)", fontWeight: 600, marginBottom: 16,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
              Ihr Anwalt
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "var(--color-text)", marginBottom: 24 }}>
              Persönlich.<br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Kompetent.</span>
            </h2>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.8, marginBottom: 20, fontWeight: 300, fontSize: "0.95rem" }}>
              Rechtsanwalt Christian Wächter ist in München zugelassen und berät seine Mandanten persönlich und engagiert in den Bereichen Erbrecht, Familienrecht, Immobilienrecht und Zwangsversteigerungsrecht.
            </p>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.8, marginBottom: 36, fontWeight: 300, fontSize: "0.95rem" }}>
              Mit fundierter Kenntnis des österreichischen Rechts sowie langjähriger Praxiserfahrung bietet die Kanzlei Wächter verlässliche und individuelle Beratung - auch bei grenzüberschreitenden Sachverhalten.
            </p>

            {/* Language badges */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 12 }}>
                Sprachkenntnisse
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Deutsch", "Englisch","Spanisch", "Österreichisches Recht"].map((lang) => (
                  <span key={lang} style={{
                    border: "1px solid var(--color-border)", padding: "5px 14px",
                    fontSize: 12, color: "var(--color-text)", letterSpacing: "0.06em",
                  }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#kontakt"
              style={{
                background: "var(--color-accent)", color: "#fff",
                padding: "14px 32px", fontSize: 12, letterSpacing: "0.16em",
                textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
            >
              Jetzt Termin anfragen <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--color-accent)", fontWeight: 600, marginBottom: 16,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            }}>
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
              Kontakt
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--color-text)", marginBottom: 16 }}>
              Sprechen wir
            </h2>
            <p style={{ color: "var(--color-muted)", fontWeight: 300, fontSize: "0.95rem" }}>
              Vereinbaren Sie einen Beratungstermin - wir melden uns zeitnah zurück.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0,
            border: "1px solid var(--color-border)",
          }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {/* Contact info */}
            <div style={{
              background: "var(--color-text)", color: "#fff",
              padding: isMobile ? "36px 24px" : "52px 48px",
              display: "flex", flexDirection: "column", gap: 32,
            }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: 6 }}>
                  Kanzlei Wächter
                </div>
                <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                  Rechtsanwalt
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: MapPin, label: "Hermann-Lingg-Str. 10\n80336 München" },
                  { icon: Phone, label: "+49 (89) 5151 87 65" },
                  { icon: Mail, label: "mail@ra-waechter.de" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={15} strokeWidth={1.5} color="var(--color-accent)" />
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, marginTop: "auto" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
                  Bürozeiten
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 300 }}>
                  Mo - Fr: 09:00 - 18:00 Uhr<br />
                  Termine nach Vereinbarung
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div style={{
              background: "var(--color-surface)",
              padding: isMobile ? "36px 24px" : "52px 48px",
            }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 32, color: "var(--color-text)" }}>
                Nachricht senden
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
        
      </section>
      <section style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 32px" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--color-accent)", fontWeight: 600, marginBottom: 16,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            }}>
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
              Standort
              <span style={{ width: 40, height: 1, background: "currentColor", display: "inline-block" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600, color: "var(--color-text)",
            }}>
              Die Kanzlei
            </h2>
          </div>

          {/* Map */}
          <div style={{
            border: "1px solid var(--color-border)",
            overflow: "hidden",
          }}>
            <GoogleMaps height={450} />
          </div>

        </div>
      </section>
      
      

      <Footer />
    </div>
  );
}
