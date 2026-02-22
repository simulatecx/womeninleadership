import { AceLogoIcon } from "./AceLogoIcon";

export function Footer() {
  return (
    <footer
      style={{
        background: "#0A1A2F",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: "#fff",
              letterSpacing: "1.5px",
            }}
          >
            ACE
          </span>
          <AceLogoIcon size={19} style={{ marginLeft: 4, top: 1 }} />
        </div>

        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2025 Association for CX Excellence. All rights reserved.
        </span>

        <a
          href="https://acepro.org"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#00A6A6",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          acepro.org
        </a>
      </div>
    </footer>
  );
}
