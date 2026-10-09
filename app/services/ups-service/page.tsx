import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BookingForm from "@/app/components/BookingForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Inverter & UPS Repair Service | Manju Electronic",
  description:
    "Reliable UPS repair, inverter PCB servicing, battery replacement and maintenance for home power backup systems.",
};

export default function UPSServicePage() {
  const commonIssues = [
    {
      title: "UPS Not Charging Battery",
      desc: "Inverter board charging circuit failure, blown fuse, or transformer voltage faults diagnosed and repaired.",
      icon: "⚡",
    },
    {
      title: "Continuous Beeping / Trip Alarm",
      desc: "Overload warnings, short-circuit protection tripping, or faulty relay switches causing continuous beep sounds.",
      icon: "🚨",
    },
    {
      title: "Low Battery Backup Time",
      desc: "Battery capacity degradation or acid level issues. We test battery gravity, health, and recommend replacement.",
      icon: "🔋",
    },
    {
      title: "No Output Power on Mains Cut",
      desc: "Automatic changeover relay failure preventing the inverter from switching to battery power during power cuts.",
      icon: "🔌",
    },
    {
      title: "Inverter Mainboard / PCB Repair",
      desc: "MOSFET replacement, microcontroller programming, and PCB circuit repair for sine wave inverters.",
      icon: "🛠️",
    },
    {
      title: "New UPS & Battery Setup",
      desc: "Correct cabling, terminal cleaning, anti-corrosion spray application, and safety setup for home UPS.",
      icon: "🏡",
    },
  ];

  const brands = [
    "Luminous", "Microtek", "Exide", "Su-Kam", "V-Guard",
    "APC", "Schneider", "Amaron", "Luminous Sine Wave", "Genus"
  ];

  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-strip">
          <div className="container">
            <Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span>UPS & Inverter Service</span>
          </div>
        </div>

        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <span className="eyebrow">UNINTERRUPTED POWER BACKUP</span>
              <h1>Home Inverter & UPS Service</h1>
              <p>
                Don't let power outages disrupt your home or office. We repair home inverters, sine-wave UPS systems, replace aging batteries, and fix PCB circuit faults.
              </p>

              <div className="service-highlights">
                <div className="highlight-pill">
                  <span className="check">✓</span> Battery Backup & Gravity Test
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Sine Wave PCB Repair
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Doorstep Power Inspection
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Book UPS Check ↗
                </a>
                <a
                  className="btn btn-whatsapp"
                  href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20need%20UPS/Inverter%20Service"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            <div className="service-hero-card">
              <div className="card-badge">POWER PROTECTION</div>
              <div className="visual-tv-card">
                <span className="tv-icon">⚡</span>
                <h3>Complete Inverter Care</h3>
                <ul>
                  <li>• PCB & MOSFET Replacement</li>
                  <li>• Battery Health Diagnostics</li>
                  <li>• Changeover Relay Repair</li>
                  <li>• Safe Wire Cabling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">INVERTER & BATTERY</span>
              <h2>Common UPS Problems We <span>Fix.</span></h2>
              <p>Professional troubleshooting for home inverters and commercial UPS backup systems.</p>
            </div>

            <div className="issues-grid">
              {commonIssues.map((issue) => (
                <div className="issue-card" key={issue.title}>
                  <div className="issue-icon">{issue.icon}</div>
                  <h3>{issue.title}</h3>
                  <p>{issue.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">UPS BRANDS</span>
              <h2>Inverter Brands We <span>Support.</span></h2>
              <p>Service for all leading UPS and tubular battery brands.</p>
            </div>
            <div className="brand-list">
              {brands.map((brand) => (
                <div className="brand-item" key={brand}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="booking-section" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy">
              <span className="eyebrow">BOOK SERVICE</span>
              <h2>Restore your power <span>backup now.</span></h2>
              <p>
                Connect with our technician on WhatsApp to get your inverter inspected and repaired quickly.
              </p>

              <div className="contact-line">
                <span className="contact-symbol">📞</span>
                <div>
                  <small>Call Direct</small>
                  <a href="tel:+919894766097">+91 98947 66097</a>
                </div>
              </div>

              <div className="contact-line">
                <span className="contact-symbol">💬</span>
                <div>
                  <small>WhatsApp Direct Support</small>
                  <a href="https://wa.me/919894766097" target="_blank" rel="noreferrer">
                    Chat on WhatsApp (+91 98947 66097)
                  </a>
                </div>
              </div>
            </div>

            <BookingForm initialService="UPS Service" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
