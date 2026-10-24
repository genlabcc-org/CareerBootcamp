import React, { useState } from 'react';
import './posterModal.css';

/**
 * Event Poster Modal Component
 */
export default function PosterModal({ isOpen, onClose, onOpenRegister }) {
  const [selectedTaglineIdx, setSelectedTaglineIdx] = useState(0);

  const taglines = [
    'Talent is there. Direction is missing. Let\'s fix that.',
    'One day. One shift. Your career, back on track.',
    'Stop applying blindly. Start preparing smartly.',
  ];

  if (!isOpen) return null;

  return (
    <div
      className="poster-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="poster-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="poster-close-btn"
          aria-label="Close poster view"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Poster Top Bar */}
        <div className="poster-top-bar">
          <div className="poster-brand">GENLAB LAUNCHPAD</div>
          <div className="poster-badge">OCT 31, 2026 // FREE</div>
        </div>

        {/* Big Catchy Headline */}
        <h2 className="poster-main-head">
          NOT GETTING HIRED?
          <br />
          LET'S FIND OUT WHY.
        </h2>

        <p className="poster-subtitle">
          A FREE 1-Day Career Reset Program for Job Seekers & Final-Year Students
        </p>

        {/* Bullets box */}
        <div className="poster-bullets-box">
          <div className="poster-bullets-title">IN JUST ONE DAY, YOU'LL LEARN:</div>
          <ul className="poster-bullet-list">
            <li className="poster-bullet-item">
              <span className="poster-bullet-check">✔</span>
              <span>Why you're not getting shortlisted by recruiters</span>
            </li>
            <li className="poster-bullet-item">
              <span className="poster-bullet-check">✔</span>
              <span>The industry skill gap, completely decoded</span>
            </li>
            <li className="poster-bullet-item">
              <span className="poster-bullet-check">✔</span>
              <span>How to crack tech interviews with true confidence</span>
            </li>
            <li className="poster-bullet-item">
              <span className="poster-bullet-check">✔</span>
              <span>Unvarnished career clarity, finally</span>
            </li>
            <li className="poster-bullet-item">
              <span className="poster-bullet-check">✔</span>
              <span>How to build a portfolio that commands attention</span>
            </li>
          </ul>

          <div className="poster-mantra-highlight">
            PLUS: THE JOB INTERVIEW MANTRA 🔑
          </div>
        </div>

        {/* Event Details Strip */}
        <div className="poster-strip">
          <span>📅 31st Oct, Saturday</span>
          <span>⏰ 10:00 AM</span>
          <span>📍 GenLab Office</span>
          <span>💸 100% FREE ENTRY</span>
        </div>

        {/* Switchable Taglines */}
        <div
          className="poster-tagline-box"
          onClick={() =>
            setSelectedTaglineIdx((prev) => (prev + 1) % taglines.length)
          }
          title="Click to toggle tagline option"
          style={{ cursor: 'pointer' }}
        >
          "{taglines[selectedTaglineIdx]}"
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: '#777',
              marginTop: '4px',
              textTransform: 'none',
            }}
          >
            (Click to cycle tagline options: {selectedTaglineIdx + 1}/3)
          </div>
        </div>

        {/* Poster Footer Actions */}
        <div className="poster-footer">
          <button
            type="button"
            className="poster-print-btn"
            onClick={() => window.print()}
          >
            🖨️ Print / Save PDF
          </button>

          <button
            type="button"
            className="poster-cta-btn"
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
          >
            ⚡ Reserve Seat Now
          </button>
        </div>
      </div>
    </div>
  );
}
