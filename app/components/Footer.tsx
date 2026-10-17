"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="footer-logo-wrap" href="/" aria-label="Manju Electronics Home">
            <div className="footer-logo-emblem">
              <Image
                src="/images/logo.png"
                alt="Manju Electronics Logo"
                width={70}
                height={56}
                className="footer-logo-img"
              />
            </div>
            <div className="footer-logo-info">
              <span>MANJU <strong>ELECTRONICS</strong></span>
              <small>4K LED TV • RO • UPS • DTH SPECIALIST</small>
            </div>
          </Link>
          <p>
            Your trusted local electronics repair specialist in Hosur. Expert doorstep service for
            LED TVs, RO water purifiers, home UPS inverters, and DTH dish connections.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Our Services</h4>
          <Link href="/services/tv-repair">LED & Smart TV Repair</Link>
          <Link href="/services/ro-service">RO Purifier Service</Link>
          <Link href="/services/ups-service">UPS Maintenance</Link>
          <Link href="/services/dth-service">DTH Dish Alignment</Link>
        </div>

        <div className="footer-links-group">
          <h4>Contact & Workshop</h4>
          <a href="tel:+919894766097">📞 +91 98947 66097</a>
          <a href="tel:+917448777557">📞 +91 74487 77557</a>
          <a href="mailto:rmanjunath3024@gmail.com">✉ rmanjunath3024@gmail.com</a>
          <a
            href="https://www.google.com/maps/dir//MANJU+ELECTRONICS+(4K.LEDTV+SERVICE),+Basthi,+Hosur,+Tamil+Nadu+635109/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae7194d192855f:0xa29cb460e95228a?sa=X&ved=1t:57443&ictx=111"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginTop: "0.25rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            📍 Basthi, Hosur (Google Maps ↗)
          </a>
          <span style={{ color: "#64748b", fontSize: "0.78rem" }}>
            Geo: 12.7450633° N, 77.8378731° E
          </span>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {year ?? 2026} Manju Electronic. All rights reserved.</p>
      </div>

      <a
        className="whatsapp-float"
        href="https://wa.me/919894766097"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Manju Electronic on WhatsApp"
      >
        <span className="wa-icon">💬</span> WhatsApp Support
      </a>
    </footer>
  );
}
