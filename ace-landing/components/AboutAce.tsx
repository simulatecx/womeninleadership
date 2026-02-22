import { AceLogoIcon } from "./AceLogoIcon";

const values = [
  { label: "Connect", desc: "Find your people. Build lasting relationships across the CX community." },
  { label: "Collaborate", desc: "Work on real challenges together. Shared knowledge, shared solutions." },
  { label: "Learn", desc: "Grow through events, certifications, and peer exchange." },
  { label: "Elevate", desc: "Rise to a higher standard — for yourself and the profession." },
];

const stats = [
  { value: "150+", label: "Members", color: "#00A6A6", bg: "rgba(0,166,166,0.08)", border: "rgba(0,166,166,0.2)" },
  { value: "4", label: "Pillars", color: "#FFB84D", bg: "rgba(255,184,77,0.08)", border: "rgba(255,184,77,0.2)" },
  { value: "Canada", label: "Based", color: "#fff", bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.08)" },
  { value: "Free", label: "To Join", color: "#fff", bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.08)" },
];

export function AboutAce() {
  return (
    <section
      id="about-ace"
      style={{
        background: "#0A1A2F",
        padding: "96px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,166,166,0.10) 0%, transparent 65%)",
          top: -200,
          right: -150,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#00A6A6", marginBottom: 12 }}>
            About ACE
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 40px)", color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
            The professional home for CX excellence in Canada.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: 620, marginBottom: 32 }}>
            ACE — the Association for CX Excellence — is built for everyone who believes customer experience is the defining competitive advantage of our time. We exist to bring the profession together, raise the standard, and build the next generation of CX leaders.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
            {values.map((v) => (
              <div
                key={v.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 14, color: "#00A6A6", marginBottom: 4 }}>
                  {v.label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>

          <div id="join-ace" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href="https://acepro.org"
              className="btn btn-teal"
              aria-label="Join the ACE community for free"
            >
              Join ACE — It&apos;s Free
            </a>
            <a
              href="https://acepro.org"
              className="btn btn-outline-dark"
              aria-label="Learn more about ACE"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right — Logo panel */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: "56px 64px",
              display: "flex", flexDirection: "column", alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 72, color: "#fff", letterSpacing: 2, lineHeight: 1 }}>
                ACE
              </span>
              <AceLogoIcon size={68} style={{ marginLeft: 8, top: 2 }} />
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "2.2px", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", lineHeight: 1 }}>
                Association for CX Excellence
              </div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "1.15px", textTransform: "uppercase", color: "#FFB84D", marginTop: 5, lineHeight: 1 }}>
                Connect · Collaborate · Learn · Elevate
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: s.color }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 600, marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
