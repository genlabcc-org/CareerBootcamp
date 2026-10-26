import React from 'react';
import './eventDetails.css';

/**
 * Section 6 & 7: Event Details & Footer
 * Minimal dark aesthetic matching the reference layout with all real event content.
 */
export default function EventDetails({ onOpenRegister, onOpenPoster }) {
  return (
    <section className="details-section" id="event-details" aria-label="Event Details and Registration">
      <div className="details-container">
        {/* Top Half: Headline + Socials (Left) & Event Specs Grid (Right) */}
        <div className="details-top-grid">
          {/* Left Column: Heading & Socials */}
          <div className="details-heading-col">
            <h2 className="details-headline">
              Start your career<br />journey with us.
            </h2>

            {/* Circular Social Buttons matching the reference image */}
            <div className="details-socials-row" aria-label="Social Links">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="details-social-circle"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="details-social-circle"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="details-social-circle"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="details-social-circle"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Labeled Event Specifications */}
          <div className="details-meta-grid">
            {/* Block 1: Venue */}
            <div className="details-meta-block">
              <span className="details-meta-label">VENUE / LOCATION</span>
              <div className="details-meta-val">
                GenLab Tech Campus, Innovation Hub
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="details-map-link"
                >
                  [View Map ↗]
                </a>
              </div>
            </div>

            {/* Block 2: Date */}
            <div className="details-meta-block">
              <span className="details-meta-label">DATE</span>
              <div className="details-meta-val">
                Saturday, 31st October
                <span className="details-meta-subval">GenLab Official Office</span>
              </div>
            </div>

            {/* Block 3: Time */}
            <div className="details-meta-block">
              <span className="details-meta-label">TIME</span>
              <div className="details-meta-val">
                10:00 AM Onwards
                <span className="details-meta-subval">Full Day Career Reset</span>
              </div>
            </div>

            {/* Block 4: Admission */}
            <div className="details-meta-block">
              <span className="details-meta-label">ADMISSION</span>
              <div className="details-meta-val">
                <span className="details-lime-accent">100% Free (No Tuition or Upsell)</span>
                <span className="details-meta-subval">Limited Seats (First-come, first-served)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider hairline matching reference image */}
        <div className="details-section-divider" aria-hidden="true" />

        {/* Bottom Half: 3 Columns */}
        <div className="details-footer-columns">
          {/* Column 1: Included Perks */}
          <div className="details-col">
            <span className="details-col-title">INCLUDED PERKS</span>
            <ul className="details-col-list">
              <li>
                <span className="details-perk-text">✔ Free Resume Review</span>
              </li>
              <li>
                <span className="details-perk-text">✔ Certificate of Attendance</span>
              </li>
              <li>
                <span className="details-perk-text">✔ Mentor Access</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Career Reset Mission */}
          <div className="details-col">
            <span className="details-col-title">YOUR CAREER WON'T WAIT</span>
            <p className="details-col-desc">
              Your career doesn't need to stay stuck in automated rejection
              emails either. Give us one focused Saturday, and we'll help you
              take the first real, confident step.
            </p>
          </div>

          {/* Column 3: Reserve Your Seat with Sleek Green Pill Button */}
          <div className="details-col">
            <span className="details-col-title">FINAL STEP</span>
            <button
              type="button"
              className="details-pill-btn"
              onClick={onOpenRegister}
              aria-label="Register Now"
            >
              <span>Register Now</span>
              <span className="details-pill-arrow" aria-hidden="true">↗</span>
            </button>
            <span className="details-pill-note">
              100% Free • Confirmation emailed immediately
            </span>
            {onOpenPoster && (
              <button
                type="button"
                className="details-poster-link-btn"
                onClick={onOpenPoster}
              >
                View / Print Official Event Poster ↗
              </button>
            )}
          </div>
        </div>

        {/* Sub-Footer Bar */}
        <div className="details-subfooter-bar">
          <div className="details-subfooter-left">
            <span>GENLAB LAUNCHPAD // WHERE CAREERS TAKE OFF.</span>
          </div>
          <div className="details-subfooter-right">
            <span>© 2026 GENLAB FOUNDATION. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
