import { EVENT } from "../lib/content";

const details = [
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
    label: "Date",
    value: EVENT.date,
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
    label: "Time",
    value: EVENT.time,
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
    label: "Location",
    value: EVENT.location,
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    label: "Capacity",
    value: `${EVENT.capacity} Attendees`,
  },
];

export function EventStrip() {
  return (
    <div style={{ background: "#00A6A6", padding: "20px 48px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        {details.map((d) => (
          <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              aria-hidden="true"
              style={{
                width: 36,
                height: 36,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {d.icon}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                {d.label}
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginTop: 1 }}>
                {d.value}
              </div>
            </div>
          </div>
        ))}

        <a
          href="https://acepro.org"
          className="btn btn-navy"
          aria-label="Register for the Women in Leadership event"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
