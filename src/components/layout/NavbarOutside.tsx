"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Kanzlei", href: "/" },
  { label: "Rechtsgebiete", href: "/" },
  { label: "Rechtsanwalt", href: "/" },
  { label: "Kontakt", href: "/" },
];

export default function NavbarOutside() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          background: "rgba(244,243,240,0.95)", backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: 68,
        }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "var(--color-text)", letterSpacing: "0.02em" }}>
              Kanzlei <span style={{ color: "var(--color-accent)" }}>Wächter</span>
            </div>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--color-muted)", textTransform: "uppercase", marginTop: 1 }}>
              Rechtsanwalt · München
            </div>
          </a>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--color-muted)", textDecoration: "none",
                    transition: "color 0.2s", fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/"
                style={{
                  background: "var(--color-text)", color: "#fff", padding: "8px 20px",
                  fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                  textDecoration: "none", fontWeight: 600, transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-text)")}
              >
                Anfrage
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--color-text)",
              }}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </nav>

      {/* Backdrop */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 149,
            background: "rgba(26,25,22,0.5)",
            backdropFilter: "blur(2px)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Slide-in Panel von rechts */}
      {isMobile && (
        <div
          style={{
            position: "fixed", top: 0, right: 0, bottom: 0,
            width: "75vw", maxWidth: 320,
            zIndex: 201,
            background: "var(--color-text)",
            padding: "100px 40px 48px",
            display: "flex", flexDirection: "column", gap: 8,
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "-8px 0 32px rgba(0,0,0,0.2)",
          }}
        >
          {/* X Button — mittig zur Navbar-Höhe */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute", top: 0, right: 140,
              height: 68,
              background: "none", border: "none", cursor: "pointer",
              color: "#fff", padding: "0 4px",
              display: "flex", alignItems: "center",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            aria-label="Menü schließen"
          >
            <X size={22} />
          </button>

          {/* Accent line */}
          <div style={{
            width: 40, height: 3, background: "var(--color-accent)", marginBottom: 32,
          }} />

          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)", textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "color 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {l.label}
            </a>
          ))}

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 32,
              background: "var(--color-accent)", color: "#fff",
              padding: "14px 24px", fontSize: 11, letterSpacing: "0.16em",
              textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
              textAlign: "center", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8b6508")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
          >
            Anfrage stellen
          </a>
        </div>
      )}
    </>
  );
}