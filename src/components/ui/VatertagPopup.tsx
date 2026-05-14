"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function VatertagPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setVisible(false)}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(26,25,22,0.6)",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.3s ease forwards",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative", zIndex: 1,
          background: "var(--color-surface)",
          width: "min(480px, 90vw)",
          padding: "52px 44px 44px",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          animation: "fadeUp 0.4s ease forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--color-muted)", padding: 4,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {/* Accent line top */}
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 60, height: 3,
          background: "var(--color-accent)",
        }} />

        <div style={{ fontSize: "3rem", marginBottom: 20 }}>🎉</div>

        <div style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--color-accent)", fontWeight: 600, marginBottom: 14,
        }}>
          Eine Nachricht von Simon
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          fontWeight: 600, color: "var(--color-text)",
          lineHeight: 1.2, marginBottom: 16,
        }}>
          Alles Gute<br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>zum Vatertag!</span>
        </h2>

        <p style={{
          fontSize: "0.9rem", color: "var(--color-muted)",
          lineHeight: 1.7, fontWeight: 300, marginBottom: 32,
        }}>
          In Liebe, Simon ♥️
        </p>

        <button
          onClick={() => setVisible(false)}
          style={{
            background: "var(--color-text)", color: "#fff",
            padding: "12px 32px", fontSize: 11,
            letterSpacing: "0.16em", textTransform: "uppercase",
            fontWeight: 600, border: "none", cursor: "pointer",
            fontFamily: "inherit", transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-text)")}
        >
          Danke, Simon! 🎊
        </button>
      </div>
    </div>
  );
}