"use client";

export default function LocationMap() {
  const directionsUrl =
    "https://www.google.com/maps/dir//MANJU+ELECTRONICS+(4K.LEDTV+SERVICE),+Basthi,+Hosur,+Tamil+Nadu+635109/@12.7409134,77.8252918,4398m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae7194d192855f:0xa29cb460e95228a!2m2!1d77.8378731!2d12.7450633";

  return (
    <section className="location-section" id="location">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">📍 OUR LOCATION & SERVICE AREA</span>
          <h2>Visit Our Workshop or <span>Request Doorstep Visit.</span></h2>
          <p>
            Conveniently located in Basthi, Hosur. We provide home visit service across Hosur and surrounding areas.
          </p>
        </div>

        <div className="location-grid">
          {/* Map Info Card */}
          <div className="location-info-card">
            <div className="loc-badge">MANJU ELECTRONICS</div>
            <h3>MANJU ELECTRONICS (4K.LEDTV SERVICE)</h3>

            <div className="loc-detail-item">
              <span className="loc-icon">📍</span>
              <div>
                <strong>Shop Address</strong>
                <p>Basthi, Hosur, Tamil Nadu 635109, India</p>
              </div>
            </div>

            <div className="loc-detail-item">
              <span className="loc-icon">📞</span>
              <div>
                <strong>Contact Numbers</strong>
                <p>
                  <a href="tel:+919894766097">+91 98947 66097</a> •{" "}
                  <a href="tel:+917448777557">+91 74487 77557</a>
                </p>
              </div>
            </div>

            <div className="loc-detail-item">
              <span className="loc-icon">⏰</span>
              <div>
                <strong>Working Hours</strong>
                <p>Monday – Sunday: 8:00 AM – 9:00 PM (Open 7 Days)</p>
              </div>
            </div>

            <div className="loc-detail-item">
              <span className="loc-icon">🚗</span>
              <div>
                <strong>Doorstep Service Areas</strong>
                <p>Hosur Town, Basthi, Bagalur Road, TVS Nagar, SIPCOT & Nearby</p>
              </div>
            </div>

            <div className="loc-actions">
              <a
                className="btn btn-cinematic-glow"
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                🗺️ Get Directions on Google Maps ↗
              </a>
              <a
                className="btn btn-whatsapp"
                href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20need%20location%20and%20service"
                target="_blank"
                rel="noreferrer"
              >
                💬 Send Location on WhatsApp
              </a>
            </div>
          </div>

          {/* Embedded Interactive Map */}
          <div className="map-frame-wrapper">
            <iframe
              title="Manju Electronics Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15569.574676451636!2d77.8252918!3d12.7409134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7194d192855f%3A0xa29cb460e95228a!2sMANJU%20ELECTRONICS%20(4K.LEDTV%20SERVICE)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
