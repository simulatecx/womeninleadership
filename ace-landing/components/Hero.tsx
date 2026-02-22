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
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00A6A6",
                display: "inline-block",
              }}
            />
            ACE Presents · Half-Day Event · April 10, 2025
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
            Conversations that elevate the profession.
            <br />A community that raises the standard.
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
            {[
              {
                icon: (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#00A6A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                ),
                label: "Thursday, April 10, 2025",
              },
              {
                icon: (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#00A6A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                    />
                  </svg>
                ),
                label: "Toronto, Ontario",
              },
              {
                icon: (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#00A6A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                  </svg>
                ),
                label: "150 Attendees",
              },
              {
                icon: (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#00A6A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z"
                    />
                  </svg>
                ),
                label: "In-Person & Virtual",
              },
            ].map((chip, i) => (
              <div
                key={i}
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
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                padding: "0 32px",
                borderRadius: 10,
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
                background: "#FFB84D",
                color: "#0A1A2F",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f0a83a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#FFB84D")
              }
            >
              Register for the Event
            </a>
            <a
              href="#about-ace"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                padding: "0 32px",
                borderRadius: 10,
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Learn About ACE
            </a>
          </div>
        </div>

        {/* Registration card */}
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
          <div
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 24,
              lineHeight: 1.5,
            }}
          >
            Space is limited to 150 attendees. Your ticket includes a charitable
            donation on your behalf.
          </div>

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
              47
            </span>
          </div>

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
            {["Red Door Family Shelter", "Room to Read", "Indspire"].map(
              (charity) => (
                <div
                  key={charity}
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
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#00A6A6",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {charity}
                </div>
              )
            )}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "0 0 20px",
            }}
          />

          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 48,
              borderRadius: 10,
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textDecoration: "none",
              background: "#00A6A6",
              color: "#fff",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#009090")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#00A6A6")
            }
          >
            Register Now →
          </a>

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
              AWS
            </span>
          </div>
        </div>
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
