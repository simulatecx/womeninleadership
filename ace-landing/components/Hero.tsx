import { EVENT } from "../lib/content";
import { RegistrationCard } from "./RegistrationCard";

const eventDetails = [
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path
          stroke="#00A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
    ),
    label: EVENT.date,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path
          stroke="#00A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        />
      </svg>
    ),
    label: EVENT.locationShort,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path
          stroke="#00A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        />
      </svg>
    ),
    label: `${EVENT.capacity} Attendees`,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path
          stroke="#00A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z"
        />
      </svg>
    ),
    label: EVENT.format,
  },
];

export function Hero() {
  return (
    <section
      id="register"
      style={{
        minHeight: "100vh",
        background: "#0A1A2F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 48px 80px",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,166,166,0.13) 0%, transparent 65%)",
          top: -200,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,184,77,0.08) 0%, transparent 65%)",
          bottom: -100,
          left: 60,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 80,
          alignItems: "center",
        }}
        className="hero-inner"
      >
        {/* Left column */}
        <div>
          <div
            className="fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00A6A6",
              marginBottom: 20,
            }}
          >
            <span
              className="pulse-dot"
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00A6A6",
                display: "inline-block",
              }}
            />
            {EVENT.badge}
          </div>

          <h1
            className="fade-up delay-1"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 5vw, 62px)",
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-0.5px",
              marginBottom: 10,
            }}
          >
            Women in
            <br />
            <span style={{ color: "#FFB84D" }}>Leadership</span>
          </h1>

          <p
            className="fade-up delay-2"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.2vw, 24px)",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 28,
              lineHeight: 1.4,
            }}
          >
            {EVENT.tagline}
            <br />
            {EVENT.taglineSecond}
          </p>

          <div
            className="fade-up delay-3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 36,
            }}
          >
            {eventDetails.map((chip) => (
              <div
                key={chip.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {chip.icon}
                {chip.label}
              </div>
            ))}
          </div>

          <div
            className="fade-up delay-4"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href="https://acepro.org"
              className="btn btn-amber"
              aria-label="Register for the Women in Leadership event"
            >
              Register for the Event
            </a>
            <a href="#about-ace" className="btn btn-outline-dark">
              Learn About ACE
            </a>
          </div>
        </div>

        {/* Registration card */}
        <RegistrationCard />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
