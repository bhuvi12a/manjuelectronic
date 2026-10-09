import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BookingForm from "@/app/components/BookingForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RO Water Purifier Service & Filter Replacement | Manju Electronic",
  description:
    "Professional RO water purifier repair, membrane replacement, filter changing, and annual maintenance for Kent, Aquaguard, Pureit and all RO brands.",
};

export default function ROServicePage() {
  const commonIssues = [
    {
      title: "Low Water Output / Slow Flow",
      desc: "Sediment or carbon filter clogging reduces water flow. We inspect and replace choked filter candles.",
      icon: "💧",
    },
    {
      title: "Bad Taste or Odor in Water",
      desc: "Taste issues happen when post-carbon filters expire or TDS levels fluctuate. We restore pure, crisp drinking water.",
      icon: "🧪",
    },
    {
      title: "Water Leakage from Unit",
      desc: "Leaking elbow joints, loose pipe connections, or faulty booster pump seals repaired quickly.",
      icon: "🚰",
    },
    {
      title: "Booster Pump Noise / Vibration",
      desc: "Loud humming or vibrating sounds from RO pump fixed with pump head servicing or motor replacement.",
      icon: "⚙️",
    },
    {
      title: "UV Lamp & SMPS Failure",
      desc: "UV disinfection lamp failure, power adapter replacement, and solenoid valve repairs.",
      icon: "💡",
    },
    {
      title: "Full Filter & Membrane Overhaul",
      desc: "Complete replacement of Sediment, Pre-Carbon, RO Membrane, Post-Carbon, and Mineral Cartridge.",
      icon: "🛡️",
    },
  ];

  const brands = [
    "Kent", "Aquaguard", "Pureit", "Livpure", "Havells",
    "Blue Star", "LG", "Eureka Forbes", "Aqua Grand", "Zero B"
  ];

  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-strip">
          <div className="container">
            <Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span>RO Water Purifier Service</span>
          </div>
        </div>

        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <span className="eyebrow">SAFE DRINKING WATER EXPERTS</span>
              <h1>RO Water Purifier Service & Repair</h1>
              <p>
                Ensure clean, healthy drinking water for your family. We offer complete RO filter replacement, membrane changing, leak fixing, and routine maintenance.
              </p>

              <div className="service-highlights">
                <div className="highlight-pill">
                  <span className="check">✓</span> High-Quality Filters & Membranes
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Water TDS Level Testing
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Quick Home Visit
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Book RO Service ↗
                </a>
                <a
                  className="btn btn-whatsapp"
                  href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20need%20RO%20Water%20Purifier%20Service"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            <div className="service-hero-card">
              <div className="card-badge">ESSENTIAL SERVICE</div>
              <div className="visual-tv-card">
                <span className="tv-icon">💧</span>
                <h3>Complete RO Care</h3>
                <ul>
                  <li>• TDS Check & Water Inspection</li>
                  <li>• Sediment & Pre-Carbon Filter</li>
                  <li>• RO Membrane Replacement</li>
                  <li>• Solenoid Valve & Pump Fix</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">WHAT WE FIX</span>
              <h2>RO Purifier Services <span>& Maintenance.</span></h2>
              <p>Keep your water purifier operating at peak purity with our expert servicing.</p>
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
              <span className="eyebrow">RO BRANDS</span>
              <h2>Purifier Brands We <span>Service.</span></h2>
              <p>We service all home and commercial water purifier brands.</p>
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
              <span className="eyebrow">BOOK NOW</span>
              <h2>Schedule your RO <span>filter service.</span></h2>
              <p>
                Tell us your location and purifier brand. We'll arrange a prompt home visit to test water purity and service your purifier.
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

            <BookingForm initialService="RO Service" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
