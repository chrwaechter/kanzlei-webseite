"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-text)",
        color: "rgba(255,255,255,0.45)",
        padding: "36px 32px",
        borderTop: "3px solid var(--color-accent)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8rem",
          letterSpacing: "0.06em",
        }}
      >
        <div>© {new Date().getFullYear()} Rechtsanwalt Christian Wächter · München</div>

        <div style={{ display: "flex", gap: 24 }}>
          <a
            href="/impressum"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            Datenschutz
          </a>
          {/*
          <a
            href="/agb"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            AGB
          </a>
          */}
        </div>
      </div>
    </footer>
  );
}