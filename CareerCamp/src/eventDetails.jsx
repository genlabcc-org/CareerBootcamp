import React from 'react';
import './eventDetails.css';

/**
 * Section 6 & 7: Event Details & Final Call to Action
 */
export default function EventDetails({ onOpenRegister, onOpenPoster }) {
  return (
    <section className="details-section" id="event-details" aria-label="Event Details and Registration">
      <div className="details-container">
        <span className="details-tag">// 06. VENUE, TIMING & ACCESS</span>

        <h2 className="details-headline">EVENT DETAILS & RESERVATION</h2>

        <div className="details-grid">
          {/* Left: Event Specs */}
          <div className="details-specs-card">
            <div>
              <div className="details-specs-list">
                <div className="details-spec-item">
                  <span className="details-spec-label"> DATE</span>
                  <div className="details-spec-val">
                    Saturday, 31st October
                  </div>
                </div>

                <div className="details-spec-item">
                  <span className="details-spec-label"> TIME</span>
                  <div className="details-spec-val">
                    10:00 AM Onwards (Full Day Reset)
                  </div>
                </div>

                <div className="details-spec-item">
                  <span className="details-spec-label"> VENUE</span>
                  <div className="details-spec-val">
                    GenLab Tech Campus, Innovation Hub
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      [View Map ↗]
                    </a>
                  </div>
                </div>

                <div className="details-spec-item">
                  <span className="details-spec-label"> ADMISSION</span>
                  <div className="details-spec-val" style={{ color: '#4ade80' }}>
                    100% Free (No Tuition or Upsell)
                  </div>
                </div>

                <div className="details-spec-item">
                  <span className="details-spec-label"> CAPACITY</span>
                  <div className="details-spec-val">
                    Limited Seats (First-come, first-served)
                  </div>
                </div>
              </div>

              {/* Added perks pills */}
              <div className="details-perks-row">
                <span className="details-perk-pill">✔ FREE RESUME REVIEW</span>
                <span className="details-perk-pill">✔ CERTIFICATE OF ATTENDANCE</span>
                <span className="details-perk-pill">✔ MENTOR ACCESS</span>
              </div>
            </div>
          </div>

          {/* Right: Final Call to Action */}
          <div className="details-cta-card">
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888', letterSpacing: '0.15em' }}>
                // FINAL STEP
              </span>
              <h3 className="details-cta-title">
                YOUR CAREER WON'T WAIT.
              </h3>
              <p className="details-cta-desc">
                Your career doesn't need to stay stuck in automated rejection
                emails either. Give us one focused Saturday, and we'll help you
                take the first real, confident step.
              </p>
            </div>

            <div className="details-btn-wrap">
              <button
                type="button"
                className="details-action-btn"
                onClick={onOpenRegister}
              >
                <span>Yes, Save My Free Seat</span>
                <span aria-hidden="true">→</span>
              </button>
              <span className="details-cta-note">
                100% Free • Confirmation emailed immediately
              </span>

              <button
                type="button"
                className="details-poster-trigger"
                onClick={onOpenPoster}
              >
                <span>📄 View / Print Official Event Poster</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="details-footer-tagline">
          <span>GENLAB LAUNCHPAD // WHERE CAREERS TAKE OFF.</span>
          <span>© 2026 GENLAB FOUNDATION. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </section>
  );
}
