"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTags = [
    { label: "All", count: 316 },
    { label: "quick response", count: 12 },
    { label: "sony led tv", count: 2 },
    { label: "display replacement", count: 3 },
    { label: "skilled technician", count: 7 },
  ];

  const reviews = [
    {
      id: "krish",
      name: "Krish Krishna",
      stats: "7 reviews · 2 photos",
      rating: 5,
      time: "3 months ago",
      text: "Had an issue with display and Manjunath sir fixed it promptly in the same day. Happy with the service.",
      tag: "display replacement",
      photos: ["/images/tv_review_photo1.jpg", "/images/tv_review_photo2.jpg"],
    },
    {
      id: "madhan",
      name: "Madhankumar Annamalai",
      stats: "7 reviews · 1 photo",
      rating: 5,
      time: "2 months ago",
      text: "Excellent doorstep TV repair service in Hosur. Manjunath sir diagnosed our Sony LED TV display problem and fixed it on the same day. Very transparent pricing and polite behavior.",
      tag: "sony led tv",
      photos: ["/images/modern_smart_tv_hero.jpg"],
    },
    {
      id: "rajesh",
      name: "R. Rajesh Kumar",
      stats: "12 reviews · 3 photos",
      rating: 5,
      time: "1 month ago",
      text: "Quick response for RO water purifier filter change and smart TV backlight repair. Highly recommended skilled technician in Hosur.",
      tag: "quick response",
      photos: [],
    },
    {
      id: "suresh",
      name: "Suresh Babu",
      stats: "4 reviews",
      rating: 5,
      time: "4 months ago",
      text: "Manjunath sir is a very skilled technician. My 55-inch LG Smart TV had no picture but sound was working. He replaced the backlight LEDs cleanly at very reasonable cost.",
      tag: "skilled technician",
      photos: [],
    },
  ];

  const filteredReviews = activeFilter === "All"
    ? reviews
    : reviews.filter((r) => r.tag === activeFilter || activeFilter === "All");

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        {/* Google Business Header Header Box */}
        <div className="google-business-card">
          <div className="google-header-main">
            <div className="google-title-group">
              <span className="google-logo-badge">G</span>
              <div>
                <h2>MANJU ELECTRONICS (4K.LEDTV SERVICE)</h2>
                <p className="google-address">
                  📍 Basthi, Hosur, Tamil Nadu 635109, India
                </p>
              </div>
            </div>

            <a
              className="btn btn-review-google"
              href="https://wa.me/919894766097?text=Hi%20Manju%20Electronic,%20I%20want%20to%20leave%20a%205-star%20review"
              target="_blank"
              rel="noreferrer"
            >
              Write a review ✏️
            </a>
          </div>

          <div className="google-score-row">
            <div className="google-score-big">
              <strong>5.0</strong>
              <div className="stars-gold">⭐⭐⭐⭐⭐</div>
              <span className="review-count">316 Google reviews</span>
            </div>

            <div className="filter-tags-row">
              {filterTags.map((tag) => (
                <button
                  key={tag.label}
                  className={`filter-chip ${activeFilter === tag.label ? "active" : ""}`}
                  onClick={() => setActiveFilter(tag.label)}
                >
                  {tag.label} {tag.count && <small>{tag.count}</small>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid List */}
        <div className="reviews-list-grid">
          {filteredReviews.map((rev) => (
            <article className="review-card-item" key={rev.id}>
              <div className="review-author-row">
                <div className="author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="author-meta">
                  <h4>{rev.name}</h4>
                  <small>{rev.stats}</small>
                </div>
              </div>

              <div className="review-rating-line">
                <span className="stars-gold">⭐⭐⭐⭐⭐</span>
                <span className="review-time">{rev.time}</span>
              </div>

              <p className="review-text">"{rev.text}"</p>

              {rev.photos.length > 0 && (
                <div className="review-photos-grid">
                  {rev.photos.map((imgSrc, pIdx) => (
                    <div className="review-photo-wrapper" key={pIdx}>
                      <Image
                        src={imgSrc}
                        alt={`Customer review photo by ${rev.name}`}
                        width={260}
                        height={180}
                        className="review-photo-img"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
