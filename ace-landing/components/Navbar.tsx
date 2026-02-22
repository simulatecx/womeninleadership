"use client";
import { AceLogoIcon } from "./AceLogoIcon";

export function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(10,26,47,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 48px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#"
        style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 26,
            color: "#fff",
            letterSpacing: "1.5px",
            lineHeight: 1,
          }}
        >
          ACE
        </span>
        <AceLogoIcon size={25} />
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {[
          { href: "#agenda", label: "Agenda" },
          { href: "#about-ace", label: "About ACE" },
          { href: "#charities", label: "Giving Back" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.72)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.72)")
            }
          >
            {link.label}
          </a>
        ))}
        <a href="#register" className="btn btn-teal">
          Register Now
        </a>
        <a href="#join-ace" className="btn btn-outline">
          Join ACE
        </a>
      </div>

      <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 0 22px;
          border-radius: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .btn-teal { background: #00A6A6; color: #fff; }
        .btn-teal:hover { background: #009090; }
        .btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4); }
        .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.06); }

        @media (max-width: 900px) {
          nav { padding: 0 20px !important; }
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
