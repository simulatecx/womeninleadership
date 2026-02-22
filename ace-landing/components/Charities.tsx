import { CHARITIES } from "../lib/content";

// Icons are kept here since they're JSX and component-specific
const charityIcons: Record<string, React.ReactNode> = {
  "Red Door Family Shelter": (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="#00A6A6" strokeWidth="2" strokeLinecap="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Room to Read": (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="#00A6A6" strokeWidth="2" strokeLinecap="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  "Indspire": (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="#00A6A6" strokeWidth="2" strokeLinecap="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export function Charities() {
  return (
    <section
      id="charities"
      style={{ background: "#F5F7FA", padding: "72px 48px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#00A6A6",
            marginBottom: 12,
          }}
        >
          Giving Back
        </p>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 3.5vw, 40px)",
            color: "#0A1A2F",
            lineHeight: 1.15,
            margin: "0 auto 12px",
          }}
        >
          Your attendance makes
          <br />a real difference.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#4A5A6A",
            lineHeight: 1.75,
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          Every ticket sold results in a charitable donation. ACE is proud to
          support three organisations making a meaningful impact in our
          communities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 48,
          }}
          className="charities-grid"
        >
          {CHARITIES.map((c) => (
            <div
              key={c.name}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "36px 28px",
                boxShadow: "0 2px 20px rgba(10,26,47,0.06)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(0,166,166,0.1)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {charityIcons[c.name]}
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 17,
                  color: "#0A1A2F",
                  marginBottom: 8,
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#4A5A6A",
                  lineHeight: 1.65,
                }}
              >
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .charities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
