import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BookingForm from "@/app/components/BookingForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTH Dish Alignment & Installation Service | Manju Electronic",
  description:
    "Expert DTH antenna installation, satellite dish signal alignment, cable wiring, and receiver set-top box troubleshooting.",
};

export default function DTHServicePage() {
  const commonIssues = [
    {
      title: "No Signal / Error 301 / Error 302",
      desc: "Dish moved out of satellite alignment due to strong wind or rain. Re-aligned with satellite signal strength meter.",
      icon: "📡",
    },
    {
      title: "New Dish Antenna Installation",
      desc: "Wall mounting bracket installation, satellite azimuth angle tuning, and weather-proof cabling for new connections.",
      icon: "🧱",
    },
    {
      title: "Dish Shift / Relocation",
      desc: "Moving dish antenna from old home/terrace to new location with fresh signal lock.",
      icon: "🚚",
    },
    {
      title: "LNB Replacement & Frequency Fix",
      desc: "Replacing damaged or burnt LNB (Low-Noise Block-downconverter) to restore HD channels.",
      icon: "⚡",
    },
    {
      title: "Coaxial Cable Wiring & Connectors",
      desc: "Replacing worn RG-6 coaxial cables, crimping F-connectors, and multi-room splitter wiring.",
      icon: "🔌",
    },
    {
      title: "Set-Top Box Audio/Video Cables",
      desc: "HDMI port connecting issues, RCA cable setup, remote sensor replacement, and TV tuning.",
      icon: "📺",
    },
  ];

  const providers = [
    "Tata Play (Tata Sky)", "Airtel Digital TV", "Dish TV",
    "Sun Direct", "d2h (Videocon)", "DD Free Dish"
  ];

  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-strip">
          <div className="container">
            <Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span>DTH Dish Service</span>
          </div>
        </div>

        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <span className="eyebrow">CLEAR SIGNAL & FAST SETUP</span>
              <h1>DTH Dish Installation & Alignment</h1>
              <p>
                Get crystal clear HD channel reception. We provide same-day satellite dish signal alignment, LNB replacement, multi-tv wiring, and relocation support.
              </p>

              <div className="service-highlights">
                <div className="highlight-pill">
                  <span className="check">✓</span> Precision Satellite Meter Alignment
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Weather-Resistant Cabling
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Same-Day Home Visit
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Book DTH Alignment ↗
                </a>
                <a
                  className="btn btn-whatsapp"
                  href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20need%20DTH%20Dish%20Service"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            <div className="service-hero-card">
              <div className="card-badge">SIGNAL EXPERTS</div>
              <div className="visual-tv-card">
                <span className="tv-icon">📡</span>
                <h3>DTH Services Covered</h3>
                <ul>
                  <li>• High-Gain Signal Alignment</li>
                  <li>• LNB & Dish Antenna Fitting</li>
                  <li>• Home Relocation Setup</li>
                  <li>• RG-6 Cabling & Connectors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">DTH SOLUTIONS</span>
              <h2>Common DTH Problems We <span>Resolve.</span></h2>
              <p>Quick service for all major satellite television providers.</p>
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

        {/* Providers Section */}
        <section className="brands-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">DTH PROVIDERS</span>
              <h2>DTH Networks We <span>Support.</span></h2>
              <p>We align and install dishes for all major operators.</p>
            </div>
            <div className="brand-list">
              {providers.map((provider) => (
                <div className="brand-item" key={provider}>
                  {provider}
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
              <h2>Get your DTH signal <span>aligned today.</span></h2>
              <p>
                Contact us on WhatsApp with your location and DTH provider. Our technician will come equipped with satellite meters to restore your channels.
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

            <BookingForm initialService="DTH Service" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
