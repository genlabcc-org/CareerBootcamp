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
                href="https://www.instagram.com/genlab.cc/"
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
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="details-social-circle"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.009-.375-.009-.575-.009-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 3.009 1.3 3.009.867 3.559.813.55-.053 1.781-.727 2.031-1.43.25-.703.25-1.306.175-1.43-.075-.125-.275-.2-.575-.35zm-5.452 7.618h-.005a10.024 10.024 0 0 1-5.114-1.396l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.007 10.007 0 0 1-1.536-5.29c0-5.524 4.494-10.017 10.023-10.017 2.677 0 5.193 1.043 7.086 2.937a9.96 9.96 0 0 1 2.932 7.08c0 5.524-4.494 10.017-10.025 10.017zm8.508-18.525C18.27 1.218 15.27 0 12.02 0 5.438 0 .08 5.358.077 11.942a11.9 11.9 0 0 0 1.83 6.324L0 24l5.88-1.543a11.895 11.895 0 0 0 6.136 1.696h.005c6.582 0 11.94-5.358 11.943-11.943 0-3.19-1.242-6.19-3.486-8.435z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/genlabcc"
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
            <span>GENLAB LAUNCHPAD • WHERE CAREERS TAKE OFF.</span>
          </div>
          <div className="details-subfooter-right">
            <span>© 2026 GENLAB FOUNDATION. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
