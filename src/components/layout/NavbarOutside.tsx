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

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(244,243,240,0.95)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 68,
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
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
              href="#kontakt"
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

        {/* Mobile hamburger — only rendered on mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text)" }}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "24px 32px",
          display: "flex", flexDirection: "column", gap: 20,
        }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--color-text)", textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
