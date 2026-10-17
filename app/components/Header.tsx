"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Link className="site-logo" href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Manju Electronics Home">
          <div className="site-logo-emblem">
            <Image
              src="/images/logo.png"
              alt="Manju Electronics Logo"
              width={64}
              height={51}
              className="site-logo-img"
              priority
            />
          </div>
          <div className="site-logo-text">
            <span className="site-brand-name">
              MANJU <strong>ELECTRONICS</strong>
            </span>
            <small className="site-brand-sub">4K LED TV • RO • UPS • DTH</small>
          </div>
        </Link>

        {/* Center Floating Pill Navigation Bar */}
        <nav className="pill-nav-capsule desktop-nav" aria-label="Main Navigation">
          <Link className="pill-item active" href="/">
            Home
          </Link>
          <div className="nav-dropdown">
            <span className="pill-item dropdown-trigger">Services ▾</span>
            <div className="dropdown-menu">
              <Link href="/services/tv-repair" className="nav-dropdown-item">
                <Image src="/images/smart_led_tv.jpg" alt="TV Repair" width={32} height={32} className="nav-thumb-img" />
                <span>TV Repair & Service</span>
              </Link>
              <Link href="/services/ro-service" className="nav-dropdown-item">
                <Image src="/images/ro_machine.jpg" alt="RO Water Purifier" width={32} height={32} className="nav-thumb-img" />
                <span>RO Water Purifier</span>
              </Link>
              <Link href="/services/ups-service" className="nav-dropdown-item">
                <Image src="/images/ups_inverter.jpg" alt="UPS Power Backup" width={32} height={32} className="nav-thumb-img" />
                <span>UPS & Power Backup</span>
              </Link>
              <Link href="/services/dth-service" className="nav-dropdown-item">
                <Image src="/images/dth_dish.jpg" alt="DTH Installation" width={32} height={32} className="nav-thumb-img" />
                <span>DTH Installation</span>
              </Link>
            </div>
          </div>
          <Link className="pill-item" href="/testimonials">
            ⭐ Reviews
          </Link>
          <Link className="pill-item" href="/#brands">
            Brands
          </Link>
          <Link className="pill-item" href="/#location">
            Map
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
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-logo">
              <div className="mobile-drawer-logo-emblem">
                <Image
                  src="/images/logo.png"
                  alt="Manju Electronics Logo"
                  width={48}
                  height={38}
                  className="mobile-drawer-logo-img"
                />
              </div>
              <div>
                <strong>MANJU ELECTRONICS</strong>
                <small>Doorstep Repairs in Hosur</small>
              </div>
            </div>
            <button
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                fontSize: "1.4rem",
                cursor: "pointer",
                color: "#64748b",
                padding: "4px 8px",
              }}
            >
              ✕
            </button>
          </div>
          <div className="mobile-drawer-links">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              🏠 Home
            </Link>
            <div className="mobile-services-group">
              <span className="group-title">OUR SERVICES</span>
              <Link
                href="/services/tv-repair"
                className="mobile-service-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/images/smart_led_tv.jpg" alt="TV Repair" width={32} height={32} className="mobile-thumb-img" />
                <span>TV Repair & Service</span>
              </Link>
              <Link
                href="/services/ro-service"
                className="mobile-service-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/images/ro_machine.jpg" alt="RO Water Purifier" width={32} height={32} className="mobile-thumb-img" />
                <span>RO Water Purifier Service</span>
              </Link>
              <Link
                href="/services/ups-service"
                className="mobile-service-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/images/ups_inverter.jpg" alt="UPS Power Backup" width={32} height={32} className="mobile-thumb-img" />
                <span>UPS & Power Backup</span>
              </Link>
              <Link
                href="/services/dth-service"
                className="mobile-service-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/images/dth_dish.jpg" alt="DTH Installation" width={32} height={32} className="mobile-thumb-img" />
                <span>DTH Installation & Setup</span>
              </Link>
            </div>
            <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)}>
              ⭐ Google Reviews (5.0 ⭐)
            </Link>
            <Link href="/#brands" onClick={() => setMobileMenuOpen(false)}>
              🏷️ Brands Supported
            </Link>
            <Link href="/#location" onClick={() => setMobileMenuOpen(false)}>
              🗺️ Workshop Map & Directions
            </Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              📍 Contact Us
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
