import { EVENT, CHARITY_NAMES } from "../lib/content";

export function RegistrationCard() {
  return (
    <div
      className="fade-up delay-5"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        padding: "36px 32px",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "#fff",
          marginBottom: 6,
        }}
      >
        Secure Your Spot
      </div>
      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 24,
          lineHeight: 1.5,
        }}
      >
        Space is limited to {EVENT.capacity} attendees. Your ticket includes a
        charitable donation on your behalf.
      </p>

      {/* Spots remaining */}
      <div
        style={{
          background: "rgba(255,184,77,0.12)",
          border: "1px solid rgba(255,184,77,0.25)",
          borderRadius: 8,
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          Spots Remaining
        </span>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: "#FFB84D",
          }}
        >
          {EVENT.spotsRemaining}
        </span>
      </div>

      {/* Charities */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00A6A6",
          marginBottom: 12,
        }}
      >
        Your Ticket Gives Back To
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {CHARITY_NAMES.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "rgba(255,255,255,0.65)",
              fontWeight: 500,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00A6A6",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {name}
          </div>
        ))}
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          margin: "0 0 20px",
        }}
      />

      <a
        href="https://acepro.org"
        className="btn btn-teal btn-full"
        aria-label="Register for the Women in Leadership event"
      >
        Register Now →
      </a>

      {/* Sponsor */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 16,
          fontSize: 11,
          color: "rgba(255,255,255,0.3)",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          justifyContent: "center",
        }}
      >
        Sponsored by{" "}
        <span
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 6,
            padding: "4px 10px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 13,
            color: "#FF9900",
            letterSpacing: "0.5px",
          }}
        >
          {EVENT.sponsor}
        </span>
      </div>
    </div>
  );
}
