"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-icon">M</span>
          <span>
            MANJU <strong>ELECTRONIC</strong>
            <small>REPAIR • SERVICE • SUPPORT</small>
          </span>
        </Link>

        {/* Center Floating Pill Navigation Bar */}
        <nav className="pill-nav-capsule desktop-nav" aria-label="Main Navigation">
          <Link className="pill-item active" href="/">
            Home
          </Link>
          <div className="nav-dropdown">
            <span className="pill-item dropdown-trigger">Services ▾</span>
            <div className="dropdown-menu">
              <Link href="/services/tv-repair">📺 TV Repair & Service</Link>
              <Link href="/services/ro-service">💧 RO Water Purifier</Link>
              <Link href="/services/ups-service">⚡ UPS & Power Backup</Link>
              <Link href="/services/dth-service">📡 DTH Installation</Link>
            </div>
          </div>
          <Link className="pill-item" href="/testimonials">
            ⭐ Reviews
          </Link>
          <Link className="pill-item" href="/#brands">
            Brands
          </Link>
          <Link className="pill-item" href="/#contact">
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <a className="nav-contact-btn" href="tel:+919894766097">
          Contact Us <span>›</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-drawer-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" id="mobile-drawer-menu" role="dialog" aria-modal="true">
          <div className="mobile-drawer-links">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              🏠 Home
            </Link>
            <div className="mobile-services-group">
              <span className="group-title">OUR SERVICES</span>
              <Link
                href="/services/tv-repair"
                onClick={() => setMobileMenuOpen(false)}
              >
                📺 TV Repair & Service
              </Link>
              <Link
                href="/services/ro-service"
                onClick={() => setMobileMenuOpen(false)}
              >
                💧 RO Water Purifier Service
              </Link>
              <Link
                href="/services/ups-service"
                onClick={() => setMobileMenuOpen(false)}
              >
                ⚡ UPS & Power Backup
              </Link>
              <Link
                href="/services/dth-service"
                onClick={() => setMobileMenuOpen(false)}
              >
                📡 DTH Installation & Setup
              </Link>
            </div>
            <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)}>
              ⭐ Google Reviews (5.0 ⭐)
            </Link>
            <Link href="/#brands" onClick={() => setMobileMenuOpen(false)}>
              🏷️ Brands Supported
            </Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              📍 Contact Us & Location
            </Link>
          </div>
          <div className="mobile-drawer-cta">
            <a className="btn btn-primary mobile-cta-btn" href="tel:+919894766097">
              ☎ Call 98947 66097
            </a>
            <a
              className="btn btn-whatsapp mobile-cta-btn"
              href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20need%20electronics%20service"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
