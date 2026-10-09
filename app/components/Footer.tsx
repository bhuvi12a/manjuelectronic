"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo footer-logo" href="/">
            <span className="logo-icon">M</span>
            <span>
              MANJU <strong>ELECTRONIC</strong>
              <small>REPAIR • SERVICE • SUPPORT</small>
            </span>
          </Link>
          <p>
            Your trusted local electronics repair specialist. Expert service for
            LED TVs, RO water purifiers, home UPS, and DTH dish connections.
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
          <h4>Quick Contact</h4>
          <a href="tel:+919894766097">📞 +91 98947 66097</a>
          <a href="tel:+917448777557">📞 +91 74487 77557</a>
          <a href="mailto:rmanjunath3024@gmail.com">✉ rmanjunath3024@gmail.com</a>
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
