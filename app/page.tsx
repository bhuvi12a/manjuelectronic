import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BookingForm from "@/app/components/BookingForm";
import Testimonials from "@/app/components/Testimonials";
import LocationMap from "@/app/components/LocationMap";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best LED TV Repair Services in Hosur | 4K LED TV Repair Specialist",
  description:
    "Looking for the best LED TV repair services in Hosur? Manju Electronics is your #1 4K LED TV repair specialist by Mr. Manjunath. Same-day doorstep backlight & display panel repair for Sony, Samsung, LG, Mi, OnePlus, Vu, TCL 4K Smart TVs. Call 98947 66097.",
  keywords: [
    "best LED tv repair services in hosur",
    "led tv repair services",
    "4k led tv repair specialist",
    "4k led tv repair spicalist",
    "best LED TV repair in Hosur",
    "4K LED TV repair specialist in Hosur",
    "doorstep LED TV repair services",
    "LED TV repair services near me",
    "LED TV repair services in Hosur",
    "TV repair in Hosur",
    "Sony brand TV repair in Hosur",
    "Samsung TV repair in Hosur",
    "LG TV repair in Hosur",
    "Mi TV repair in Hosur",
    "OnePlus TV repair in Hosur",
    "TCL TV repair in Hosur",
    "Vu TV repair in Hosur",
    "Realme TV repair in Hosur",
    "Panasonic TV repair in Hosur",
    "4K LED TV screen repair Hosur",
    "TV backlight replacement Hosur",
    "RO water purifier repair Hosur",
    "UPS inverter service Hosur"
  ]
};

export default function Home() {
  const heroBrands = [
    "SONY", "SAMSUNG", "LG", "Haier", "VU", "Panasonic",
    "TCL", "Xiaomi", "OnePlus", "Redmi", "BPL", "Micromax"
  ];

  const marqueeBrands = [
    "📺 SONY", "📺 SAMSUNG", "📺 LG", "📺 HAIER", "📺 VU",
    "📺 PANASONIC", "📺 TCL", "📺 XIAOMI", "📺 ONEPLUS", "📺 REDMI",
    "📺 BPL", "📺 MICROMAX", "📺 THOMSON", "📺 REALME"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Fullscreen Cinematic Hero Section */}
        <section className="fullscreen-cinematic-hero" id="home">
          <div className="hero-bg-overlay" />

          <div className="container hero-grid-layout">
            <div className="hero-left-copy">
              <div className="hero-top-tag">
                <span className="live-dot" />
                <span>#1 BEST LED TV REPAIR SERVICES IN HOSUR • 4K LED TV REPAIR SPECIALIST</span>
              </div>

              <h1 className="hero-big-title">
                BEST LED TV REPAIR
                <br />
                <span>SERVICES IN HOSUR</span>
                <small>MANJU ELECTRONICS • 4K LED TV REPAIR SPECIALIST • DOORSTEP SUPPORT</small>
              </h1>

              <p className="hero-subtitle">
                Expert doorstep LED TV repair services for 32" to 70"+ 4K LED, OLED & Smart TVs in Hosur. Specializing in display backlight replacement, T-Con panel repair, and motherboard servicing.
              </p>

              <div className="hero-cta-group">
                <a className="btn btn-cinematic-glow" href="#services">
                  Explore Repair Services <span>➔</span>
                </a>
                <a className="btn btn-whatsapp" href="https://wa.me/919894766097?text=Hi%20Mr%20Manjunath,%20I%20need%2070%20inch%20TV%20repair" target="_blank" rel="noreferrer">
                  💬 WhatsApp Mr. Manjunath
                </a>
              </div>

              {/* Bottom Glass Badges */}
              <div className="hero-bottom-badges">
                <div className="glass-badge">
                  <span className="badge-icon">⭐</span>
                  <span>5.0 Star Google Rated (316+ Reviews)</span>
                </div>
                <div className="glass-badge">
                  <span className="badge-icon">⚡</span>
                  <span>Same Day Doorstep Repair</span>
                </div>
                <div className="glass-badge">
                  <span className="badge-icon">🛠️</span>
                  <span>100% Genuine Spare Parts</span>
                </div>
              </div>
            </div>

            {/* 70 Inch LED TV Hero Showcase Visual */}
            <div className="hero-right-visual">
              <div className="tv-showcase-container">
                <div className="tv-ambient-glow" />
                <Image
                  src="/images/tv_70_inch.png"
                  alt="70 Inch 4K Ultra HD Smart TV Repair Service in Hosur"
                  width={720}
                  height={480}
                  className="hero-70inch-tv-img"
                  priority
                />
                
                {/* Floating Glass Badges on 70 Inch TV */}
                <div className="floating-tv-badge badge-top-right">
                  <span className="badge-sparkle">✨</span>
                  <div>
                    <strong>70" 4K ULTRA HD</strong>
                    <small>All Screen Sizes Supported</small>
                  </div>
                </div>

                <div className="floating-tv-badge badge-bottom-left">
                  <span className="badge-sparkle">📺</span>
                  <div>
                    <strong>Display & Backlight Expert</strong>
                    <small>Sony, Samsung, LG, Mi & All Brands</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <a href="#services" className="scroll-down-indicator" aria-label="Scroll Down">
            <div className="mouse-icon">
              <span className="mouse-dot" />
            </div>
            <span>Scroll Down</span>
          </a>
        </section>

        {/* Infinite Brand Marquee Ticker */}
        <section className="brand-marquee-strip">
          <div className="marquee-track">
            {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
              <div className="marquee-item" key={idx}>
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Quick Trust Bar */}
        <section className="trust-strip">
          <div className="container trust-grid">
            <Link href="/services/tv-repair" className="trust-item">
              <div className="trust-thumb">
                <Image
                  src="/images/smart_led_tv.jpg"
                  alt="LED and Smart TV Repair Hosur"
                  width={60}
                  height={60}
                  className="trust-thumb-img"
                />
              </div>
              <div className="trust-item-text">
                <strong>TV Repair</strong>
                <span>LED & Smart TV Service ↗</span>
              </div>
            </Link>

            <Link href="/services/ro-service" className="trust-item">
              <div className="trust-thumb">
                <Image
                  src="/images/ro_machine.jpg"
                  alt="RO Water Purifier Machine Service Hosur"
                  width={60}
                  height={60}
                  className="trust-thumb-img"
                />
              </div>
              <div className="trust-item-text">
                <strong>RO Purifier</strong>
                <span>Water Purifier Care ↗</span>
              </div>
            </Link>

            <Link href="/services/ups-service" className="trust-item">
              <div className="trust-thumb">
                <Image
                  src="/images/ups_inverter.jpg"
                  alt="Home UPS and Inverter Service Hosur"
                  width={60}
                  height={60}
                  className="trust-thumb-img"
                />
              </div>
              <div className="trust-item-text">
                <strong>UPS Inverter</strong>
                <span>Power Backup Systems ↗</span>
              </div>
            </Link>

            <Link href="/services/dth-service" className="trust-item">
              <div className="trust-thumb">
                <Image
                  src="/images/dth_dish.jpg"
                  alt="DTH Dish Antenna Installation Hosur"
                  width={60}
                  height={60}
                  className="trust-thumb-img"
                />
              </div>
              <div className="trust-item-text">
                <strong>DTH Dish</strong>
                <span>Dish Signal Alignment ↗</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">OUR SPECIALIZED SERVICES</span>
              <h2>One-stop shop for all your <span>appliance repairs.</span></h2>
              <p>Click on any service below to explore full details, spare parts guarantee, and view common problems we solve.</p>
            </div>

            <div className="service-grid">
              {/* TV Repair Card */}
              <article className="service-card">
                <div className="service-card-image-wrap">
                  <Image
                    src="/images/smart_led_tv.jpg"
                    alt="4K OLED & Smart LED TV Repair in Hosur"
                    width={480}
                    height={260}
                    className="service-card-img"
                  />
                  <div className="service-card-overlay-badge">
                    <span>01 / TELEVISION</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <h3>TV Repair & Service</h3>
                  <p>
                    Expert doorstep troubleshooting for 32" to 70"+ 4K LED & Smart TVs. Screen backlight repair, T-Con panel fixes, sound-only issue, and motherboard servicing.
                  </p>
                  <div className="service-card-features">
                    <span>4K Display</span>
                    <span>LED Backlight</span>
                    <span>Motherboard Fix</span>
                  </div>
                  <div className="card-actions">
                    <Link href="/services/tv-repair" className="btn-detail">
                      View TV Details ↗
                    </Link>
                  </div>
                </div>
              </article>

              {/* RO Purifier Card */}
              <article className="service-card">
                <div className="service-card-image-wrap">
                  <Image
                    src="/images/ro_machine.jpg"
                    alt="RO Water Purifier Machine Service in Hosur"
                    width={480}
                    height={260}
                    className="service-card-img"
                  />
                  <div className="service-card-overlay-badge badge-accent">
                    <span>02 / WATER PURIFIER</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <h3>RO Purifier Service</h3>
                  <p>
                    Complete RO filter replacements, authentic RO membranes, water TDS digital testing, booster pump diagnostics, and leak rectification for all brands.
                  </p>
                  <div className="service-card-features">
                    <span>Filter Change</span>
                    <span>RO Membrane</span>
                    <span>TDS Testing</span>
                  </div>
                  <div className="card-actions">
                    <Link href="/services/ro-service" className="btn-detail">
                      View RO Details ↗
                    </Link>
                  </div>
                </div>
              </article>

              {/* UPS Backup Card */}
              <article className="service-card">
                <div className="service-card-image-wrap">
                  <Image
                    src="/images/ups_inverter.jpg"
                    alt="Home UPS and Inverter Service in Hosur"
                    width={480}
                    height={260}
                    className="service-card-img"
                  />
                  <div className="service-card-overlay-badge">
                    <span>03 / POWER BACKUP</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <h3>UPS & Inverter Service</h3>
                  <p>
                    Home inverter troubleshooting, tubular battery health checks, pure sine-wave PCB repairs, auto-cut relay fixing, and continuous beep alarm silencing.
                  </p>
                  <div className="service-card-features">
                    <span>PCB Repair</span>
                    <span>Tubular Battery</span>
                    <span>Beep Fix</span>
                  </div>
                  <div className="card-actions">
                    <Link href="/services/ups-service" className="btn-detail">
                      View UPS Details ↗
                    </Link>
                  </div>
                </div>
              </article>

              {/* DTH Dish Card */}
              <article className="service-card">
                <div className="service-card-image-wrap">
                  <Image
                    src="/images/dth_dish.jpg"
                    alt="DTH Satellite Dish Installation & Signal Alignment in Hosur"
                    width={480}
                    height={260}
                    className="service-card-img"
                  />
                  <div className="service-card-overlay-badge badge-accent">
                    <span>04 / CONNECTIVITY</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <h3>DTH Dish Installation</h3>
                  <p>
                    Satellite dish antenna signal alignment using precision digital meters, heavy-duty LNB fitting, cable wiring, and rooftop relocation services.
                  </p>
                  <div className="service-card-features">
                    <span>Signal Tuning</span>
                    <span>LNB Fitting</span>
                    <span>Tata Play / Airtel</span>
                  </div>
                  <div className="card-actions">
                    <Link href="/services/dth-service" className="btn-detail">
                      View DTH Details ↗
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Technician Spotlight Section featuring Mr. Manjunath Photo */}
        <section className="technician-spotlight-section">
          <div className="container technician-grid">
            <div className="technician-image-wrapper">
              <Image
                src="/images/manjunath_technician.jpg"
                alt="Mr. Manjunath - LED TV Repair Specialist"
                width={500}
                height={500}
                className="technician-photo"
              />
              <div className="technician-badge-overlay">
                <strong>MR. MANJUNATH</strong>
                <small>LED TV Repair Specialist</small>
              </div>
            </div>

            <div className="technician-info">
              <span className="eyebrow">👨‍🔧 MEET YOUR EXPERT</span>
              <h2>Direct Doorstep Service By <span>Mr. Manjunath.</span></h2>
              <p>
                With years of dedicated experience in 4K LED TV display panel repairs, motherboard diagnostics, RO water purifier filter servicing, and home UPS maintenance, Mr. Manjunath personally handles your service requests with complete honesty, speed, and transparency.
              </p>

              <div className="technician-bullets">
                <div className="tech-bullet-item">
                  <span className="bullet-icon">⭐</span>
                  <div>
                    <strong>5.0 Star Google Rated Specialist</strong>
                    <small>Over 316+ happy customers in Hosur & Basthi area</small>
                  </div>
                </div>

                <div className="tech-bullet-item">
                  <span className="bullet-icon">⚡</span>
                  <div>
                    <strong>Same-Day Response & Doorstep Visit</strong>
                    <small>Quick inspection & upfront affordable diagnostic estimate</small>
                  </div>
                </div>

                <div className="tech-bullet-item">
                  <span className="bullet-icon">🛡️</span>
                  <div>
                    <strong>100% Genuine Component Guarantee</strong>
                    <small>Guaranteed backlight LEDs, RO membranes & PCB components</small>
                  </div>
                </div>
              </div>

              <div className="technician-cta-row">
                <a className="btn btn-whatsapp" href="https://wa.me/919894766097?text=Hi%20Mr%20Manjunath,%20I%20need%20electronics%20repair%20service" target="_blank" rel="noreferrer">
                  💬 Chat Directly with Mr. Manjunath
                </a>
                <a className="btn btn-primary" href="tel:+919894766097">
                  📞 Call 98947 66097
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Real Google Reviews Testimonials Section */}
        <Testimonials />

        {/* Brands Section */}
        <section className="brands-section" id="brands">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">BRANDS WE SUPPORT</span>
              <h2>Service for leading <span>electronics brands.</span></h2>
              <p>We work with genuine parts for all major manufacturers.</p>
            </div>
            <div className="brand-list">
              {heroBrands.map((brand) => (
                <div className="brand-item" key={brand}>{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO & Brand TV Service Keywords Section */}
        <section className="seo-keywords-section">
          <div className="container">
            <div className="section-heading seo-heading">
              <span className="eyebrow">📍 HOSUR LOCAL SERVICE COVERAGE</span>
              <h2>Best <span>LED TV Repair Services in Hosur</span></h2>
              <p>
                Fast doorstep service across Hosur town, Basthi, Bagalur Road, TVS Nagar, SIPCOT & surrounding areas by certified 4K LED TV repair specialist Mr. Manjunath.
              </p>
            </div>

            <div className="seo-cards-grid">
              <div className="seo-card highlight-seo">
                <h3>⭐ Best LED TV Repair Services in Hosur</h3>
                <p>
                  Ranked #1 for reliable, doorstep LED TV repair services in Hosur. Same-day inspection for screen dark issues, flickering backlights, motherboard faults, and sound without picture on all major brands.
                </p>
              </div>

              <div className="seo-card highlight-seo">
                <h3>🛠️ 4K LED TV Repair Specialist</h3>
                <p>
                  Specialized technician for 32" to 75"+ 4K Ultra HD, OLED & Smart TV display panel servicing, COF bonding, T-Con board diagnostics, and genuine backlight LED strip replacements.
                </p>
              </div>

              <div className="seo-card">
                <h3>📺 Sony Brand TV Repair in Hosur</h3>
                <p>
                  Specialized repair for Sony Bravia 4K LED, OLED, Android Smart TV display panel backlight replacement, T-Con board fixes, and mainboard repairs in Hosur.
                </p>
              </div>

              <div className="seo-card">
                <h3>📺 Samsung TV Repair in Hosur</h3>
                <p>
                  Expert technician for Samsung Crystal 4K, QLED & Smart TV standby power failure, restart loop issues, and double image panel repairs in Hosur.
                </p>
              </div>

              <div className="seo-card">
                <h3>📺 LG TV Repair in Hosur</h3>
                <p>
                  Professional LG WebOS Smart TV screen backlight strip replacement, audio output fixes, and motherboard replacement in Hosur with genuine parts.
                </p>
              </div>

              <div className="seo-card">
                <h3>📺 Mi & Redmi TV Repair in Hosur</h3>
                <p>
                  Affordable repair for Xiaomi Mi TV 4A, 4X, 5X, PatchWall reboot stuck issues, black screen display fixes, and HDMI port troubleshooting in Hosur.
                </p>
              </div>

              <div className="seo-card">
                <h3>📺 OnePlus, TCL & Vu TV Repair</h3>
                <p>
                  Comprehensive doorstep service for OnePlus TV Y/U/Q series, TCL 4K HDR TVs, Vu Premium 4K TVs, Realme, Panasonic, and Haier models in Hosur.
                </p>
              </div>

              <div className="seo-card highlight-seo">
                <h3>💧 RO, UPS & DTH Services in Hosur</h3>
                <p>
                  Along with TV repair in Hosur, we provide RO water purifier filter changing, inverter battery troubleshooting, and Tata Play/Airtel DTH dish alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <LocationMap />

        {/* Booking Form Section */}
        <section className="booking-section" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy">
              <span className="eyebrow">BOOK A SERVICE</span>
              <h2>Let's get your device <span>working again.</span></h2>
              <p>
                Share your details and the service you need. Your request will open directly in WhatsApp for instant assistance.
              </p>

              <div className="contact-line">
                <span className="contact-symbol">📞</span>
                <div>
                  <small>Call us directly</small>
                  <a href="tel:+919894766097">+91 98947 66097</a>
                  <a href="tel:+917448777557">+91 74487 77557</a>
                </div>
              </div>

              <div className="contact-line">
                <span className="contact-symbol">✉️</span>
                <div>
                  <small>Email enquiries</small>
                  <a href="mailto:rmanjunath3024@gmail.com">
                    rmanjunath3024@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-line">
                <span className="contact-symbol">📍</span>
                <div>
                  <small>Workshop Location & Map</small>
                  <a
                    href="https://www.google.com/maps/dir//MANJU+ELECTRONICS+(4K.LEDTV+SERVICE),+Basthi,+Hosur,+Tamil+Nadu+635109/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae7194d192855f:0xa29cb460e95228a?sa=X&ved=1t:57443&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Basthi, Hosur (Google Maps ↗)
                  </a>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", display: "block", marginTop: "2px" }}>
                    Geo: 12.7450633° N, 77.8378731° E
                  </span>
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
