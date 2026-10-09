import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import BookingForm from "@/app/components/BookingForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Customer Reviews (5.0 Stars) | Manju Electronic Hosur",
  description:
    "Read 316+ verified Google reviews for Manju Electronic. 5.0 Star customer ratings for TV repair, RO purifier service, UPS maintenance and DTH setup in Hosur.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-strip">
          <div className="container">
            <Link href="/">Home</Link> / <span>Customer Reviews & Testimonials</span>
          </div>
        </div>

        {/* Page Hero */}
        <section className="service-hero" style={{ paddingBottom: "2rem" }}>
          <div className="container">
            <div className="section-heading" style={{ marginBottom: "1rem" }}>
              <span className="eyebrow">⭐ VERIFIED GOOGLE REVIEWS</span>
              <h2>What our customers say <span>about Manju Electronic.</span></h2>
              <p>
                Rated <strong>5.0 Stars</strong> across 316+ customer reviews for TV repair, RO filter service, UPS maintenance & doorstep support in Hosur.
              </p>
            </div>
          </div>
        </section>

        {/* Main Testimonials Section */}
        <Testimonials />

        {/* Booking CTA Section */}
        <section className="booking-section" id="booking">
          <div className="container booking-grid">
            <div className="booking-copy">
              <span className="eyebrow">BOOK YOUR SERVICE</span>
              <h2>Ready to experience <span>5-star service?</span></h2>
              <p>
                Join hundreds of satisfied customers in Hosur. Connect with technician Manjunath sir directly on WhatsApp for same-day repair.
              </p>

              <div className="contact-line">
                <span className="contact-symbol">📞</span>
                <div>
                  <small>Call us directly</small>
                  <a href="tel:+919894766097">+91 98947 66097</a>
                  <a href="tel:+917448777557">+91 74487 77557</a>
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
