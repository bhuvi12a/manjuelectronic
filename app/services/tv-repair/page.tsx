import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BookingForm from "@/app/components/BookingForm";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED & Smart TV Repair Service by Manjunath Sir | Manju Electronic",
  description:
    "Expert doorstep LED, Smart, OLED TV repair service by Manjunath sir in Hosur. Display fixes, motherboard repair, backlight replacement for Sony, Samsung, LG and all major brands.",
};

export default function TVRepairPage() {
  const commonIssues = [
    {
      title: "No Display / Black Screen",
      desc: "Sound is working but display is dark or blank. Usually solved with backlight LED or inverter board repair.",
      icon: "📺",
    },
    {
      title: "Lines on Display",
      desc: "Horizontal or vertical color lines appearing on screen due to T-Con board or panel driver ribbon issues.",
      icon: "⚡",
    },
    {
      title: "Power Supply Failure",
      desc: "TV not turning on at all, standby light blinking, or turning off automatically after a few minutes.",
      icon: "🔌",
    },
    {
      title: "Sound & Audio Problems",
      desc: "Distorted audio, no volume output, speaker crackling, or headphone jack connectivity issues.",
      icon: "🔊",
    },
    {
      title: "Smart TV OS & Port Issues",
      desc: "HDMI port malfunction, Wi-Fi connectivity errors, reboot loop, or mainboard firmware troubleshooting.",
      icon: "🌐",
    },
    {
      title: "Physical Damage Inspection",
      desc: "Evaluation of outer glass, power cord replacement, external tuner box, and wall mount bracket setup.",
      icon: "🛠️",
    },
  ];

  const brands = [
    "SONY", "SAMSUNG", "LG", "Haier", "VU", "Panasonic",
    "TCL", "Xiaomi", "Redmi", "Thomson", "BPL", "Micromax",
    "OnePlus", "Realme", "Hisense", "Intex"
  ];

  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-strip">
          <div className="container">
            <Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span>TV Repair & Service</span>
          </div>
        </div>

        {/* Service Hero */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <span className="eyebrow">PREMIUM TV REPAIR SPECIALIST</span>
              <h1>LED & Smart TV Repair Service</h1>
              <p>
                Is your TV screen dark, flickering, or not turning on? Manjunath sir provides fast, reliable, and affordable doorstep TV repair in Hosur for all major brands.
              </p>

              <div className="service-highlights">
                <div className="highlight-pill">
                  <span className="check">✓</span> 100% Genuine Spare Parts
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> Same-Day Doorstep Inspection
                </div>
                <div className="highlight-pill">
                  <span className="check">✓</span> 5.0 Star Google Rated Specialist
                </div>
              </div>

              {/* TV Brand Chips in Hero */}
              <div className="hero-brands-section" style={{ marginBottom: "2rem" }}>
                <div className="hero-brands-title">BRANDS SERVICED:</div>
                <div className="hero-brand-chips">
                  {brands.slice(0, 10).map((brand) => (
                    <span className="brand-chip" key={brand}>
                      <span className="brand-chip-icon">📺</span> {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Book TV Inspection ↗
                </a>
                <a className="btn btn-whatsapp" href="https://wa.me/919894766097?text=Hi%20Manjunath%20sir,%20I%20need%20TV%20Repair" target="_blank" rel="noreferrer">
                  💬 WhatsApp Manjunath Sir
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="technician-image-wrapper">
                <Image
                  src="/images/manjunath_technician.jpg"
                  alt="Manjunath Sir repairing LED TV"
                  width={480}
                  height={480}
                  className="technician-photo"
                  priority
                />
                <div className="technician-badge-overlay">
                  <strong>MANJUNATH SIR</strong>
                  <small>TV Service Specialist</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">PROBLEMS WE SOLVE</span>
              <h2>Common TV Faults We <span>Repair Daily.</span></h2>
              <p>Our experienced technicians diagnose and fix all major TV screen and hardware faults.</p>
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
              <span className="eyebrow">BRANDS SERVICED</span>
              <h2>TV Brands We <span>Support.</span></h2>
              <p>We service all popular Indian and global television manufacturers.</p>
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
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Book your TV <span>repair today.</span></h2>
              <p>
                Send your service request now. Manjunath sir will review your TV problem and arrange a prompt visit or phone guidance.
              </p>

              <div className="contact-line">
                <span className="contact-symbol">📞</span>
                <div>
                  <small>Call for Urgent Enquiries</small>
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

            <BookingForm initialService="TV Repair" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
