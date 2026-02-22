"use client";
import { useState } from "react";
import { AceLogoIcon } from "./AceLogoIcon";

const NAV_LINKS = [
  { href: "#agenda", label: "Agenda" },
  { href: "#about-ace", label: "About ACE" },
  { href: "#charities", label: "Giving Back" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
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
        {/* Logo */}
        <a
          href="#"
          aria-label="ACE — Association for CX Excellence"
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

        {/* Desktop nav */}
        <div
          className="nav-links-desktop"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="https://acepro.org"
            className="btn btn-sm btn-teal"
            aria-label="Register for the event"
          >
            Register Now
          </a>
          <a
            href="https://acepro.org"
            className="btn btn-sm btn-outline-dark"
            aria-label="Join the ACE community"
          >
            Join ACE
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            // X icon
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="nav-mobile-menu" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="nav-mobile-actions">
            <a
              href="https://acepro.org"
              className="btn btn-teal"
              style={{ justifyContent: "center" }}
              aria-label="Register for the event"
              onClick={() => setMobileOpen(false)}
            >
              Register Now
            </a>
            <a
              href="https://acepro.org"
              className="btn btn-outline-dark"
              style={{ justifyContent: "center" }}
              aria-label="Join the ACE community"
              onClick={() => setMobileOpen(false)}
            >
              Join ACE
            </a>
          </div>
        </div>
      )}
    </>
  );
}
