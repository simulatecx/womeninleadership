const agendaItems = [
  {
    time: "8:30 AM",
    title: "Registration & Welcome Coffee",
    desc: "Arrive, connect, and settle in. Name tags, light refreshments, and time to meet fellow CX professionals.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
  {
    time: "9:00 AM",
    title: "Opening Keynote",
    desc: "Setting the stage — what does leadership look like in the CX profession today, and where is it headed?",
    tag: "Keynote",
    tagClass: "tag-keynote",
  },
  {
    time: "9:45 AM",
    title: "Women in Leadership Panel",
    desc: "A candid conversation with senior leaders on navigating the path forward — the real wins, the hard lessons, and what still needs to change.",
    tag: "Panel Discussion",
    tagClass: "tag-panel",
  },
  {
    time: "11:00 AM",
    title: "Networking Break",
    desc: "Connect with peers, speakers, and fellow ACE community members.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
  {
    time: "11:30 AM",
    title: "Giving Back — Charity Drive",
    desc: "Learn about our three supported charities: Red Door Family Shelter, Room to Read, and Indspire. Your attendance makes a difference.",
    tag: "Community",
    tagClass: "tag-keynote",
  },
  {
    time: "12:00 PM",
    title: "Closing Remarks & Mingle",
    desc: "Final words from the ACE board, followed by open networking until 1:00 PM.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
];

const tagStyles: Record<string, React.CSSProperties> = {
  "tag-panel": {
    background: "rgba(0,166,166,0.1)",
    color: "#00A6A6",
  },
  "tag-networking": {
    background: "rgba(255,184,77,0.15)",
    color: "#c47a00",
  },
  "tag-keynote": {
    background: "rgba(10,26,47,0.08)",
    color: "#0A1A2F",
  },
};

export function Agenda() {
  return (
    <section id="agenda" style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="agenda-grid"
        >
          <div>
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
              The Day
            </p>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                color: "#0A1A2F",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              A morning built for
              <br />
              real conversations.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#4A5A6A",
                lineHeight: 1.75,
                maxWidth: 620,
              }}
            >
              From thought-provoking keynotes to honest panel conversations,
              every moment is designed to spark something that lasts beyond the
              room.
            </p>
          </div>

          {/* Timeline */}
          <div
            style={{
              borderLeft: "2px solid #E4EAF0",
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {agendaItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  padding: `0 0 ${i < agendaItems.length - 1 ? "36px" : "0"} 36px`,
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -7,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#00A6A6",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #00A6A6",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#00A6A6",
                    paddingTop: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#0A1A2F",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#4A5A6A",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      padding: "3px 10px",
                      borderRadius: 20,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      ...tagStyles[item.tagClass],
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .agenda-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
