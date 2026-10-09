"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/">
          <span className="logo-icon">M</span>
          <span>
            MANJU <strong>ELECTRONIC</strong>
            <small>REPAIR • SERVICE • SUPPORT</small>
          </span>
        </Link>

        {/* Center Floating Pill Navigation Bar */}
        <div className="pill-nav-capsule desktop-nav">
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
        </div>

        {/* Right CTA Button */}
        <a className="nav-contact-btn" href="tel:+919894766097">
          Contact Us <span>›</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
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
            Brands Supported
          </Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <a className="btn btn-primary" href="tel:+919894766097">
            ☎ Call 98947 66097
          </a>
        </div>
      )}
    </header>
  );
}
