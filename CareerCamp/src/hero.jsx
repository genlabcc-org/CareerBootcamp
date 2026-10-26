import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

/**
 * GenLab Official Website Logo
 */
export function WebsiteLogo({ size = 32 }) {
  return (
    <img
      src="/logo-white-background.svg"
      alt="GenLab Logo"
      className="daemon-logo-img"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
}

export const DaemonLogo = WebsiteLogo;

/**
 * Hero Component for GenLab Launchpad
 */
export default function Hero({ onOpenRegister, onOpenPoster }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHeadlineIdx, setActiveHeadlineIdx] = useState(0);
  const [howModalOpen, setHowModalOpen] = useState(false);
  const modalRef = useRef(null);

  const headlineOptions = [
    {
      line1: "YOU'RE NOT UNEMPLOYABLE.",
      line2: "YOU'RE JUST UNDERPREPARED.",
      line3: "WE CAN FIX THAT IN ONE DAY.",
    },
    {
      line1: "APPLIED TO 50 JOBS.",
      line2: "HEARD BACK FROM 2.",
      line3: "LET'S TALK ABOUT WHY.",
    },
    {
      line1: "DEGREE IN HAND.",
      line2: "JOB STILL NOT.",
      line3: "LET'S CHANGE THAT.",
    },
  ];

  // Close menu on Esc
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (howModalOpen) setHowModalOpen(false);
        else setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [howModalOpen]);

  // Click outside to dismiss menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isMenuOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !e.target.closest('.daemon-menu-btn')
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const currentHeadline = headlineOptions[activeHeadlineIdx];

  const handleNavClick = (anchorId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="daemon-page" id="hero">
      {/* 1. Atmospheric Background Layers */}
      <div className="daemon-bg-layer" aria-hidden="true" />
      <div className="daemon-vignette-layer" aria-hidden="true" />
      <div className="daemon-grain-layer" aria-hidden="true" />



      {/* 3. Hero Foreground Content */}
      <div className="daemon-content-wrapper">
        {/* Header */}
        <header className="daemon-header">
          <a
            href="#hero"
            className="daemon-brand"
            aria-label="GenLab LaunchPad"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <DaemonLogo size={36} />
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            className="daemon-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="daemon-menu-line" />
            <span className="daemon-menu-line" />
            <span className="daemon-menu-line" />
          </button>
        </header>

        {/* Launchpad Hero Section Matching Reference Poster */}
        <section className="launchpad-hero-section" aria-label="GenLab Launchpad Introduction">
          {/* Left Column: Typography & CTAs */}
          <div className="launchpad-left-col">
            <h1 className="launchpad-main-title">Launchpad</h1>

            <div className="launchpad-left-body">
              <h2 className="launchpad-program-tagline">
                A <span className="highlight-lime">FREE</span> 1-DAY CAREER
                <br />
                RESET PROGRAM
              </h2>

              {/* Event Details Strip */}
              <div className="launchpad-details-strip">
                <div className="launchpad-detail-col">
                  <svg
                    className="launchpad-detail-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div className="launchpad-detail-info">
                    <strong>31st Oct</strong>
                    <span>Saturday</span>
                  </div>
                </div>

                <div className="launchpad-detail-divider" />

                <div className="launchpad-detail-col">
                  <svg
                    className="launchpad-detail-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="launchpad-detail-info">
                    <strong>GenLab</strong>
                    <span>Office</span>
                  </div>
                </div>

                <div className="launchpad-detail-divider" />

                <div className="launchpad-detail-col">
                  <svg
                    className="launchpad-detail-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div className="launchpad-detail-info">
                    <strong>10:30 AM</strong>
                  </div>
                </div>

                <div className="launchpad-detail-divider" />

                <div className="launchpad-detail-col">
                  <svg
                    className="launchpad-detail-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>
                  <div className="launchpad-detail-info">
                    <strong>Free</strong>
                    <span>Entry</span>
                  </div>
                </div>
              </div>

              <div className="launchpad-cta-wrapper">
                <button
                  type="button"
                  className="launchpad-register-btn"
                  onClick={onOpenRegister}
                >
                  Register Now!
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Statue Graphic */}
          <div
            className="launchpad-right-col"
            onClick={onOpenPoster}
            style={{ cursor: 'pointer' }}
            title="Click to view full poster"
          >
            <img
              src="/images/statue.png"
              alt="GenLab Launchpad - Job Offer Letter"
              className="launchpad-statue-img"
            />
          </div>
        </section>
      </div>

      {/* Mobile Floating Register CTA: Displayed only on mobile at bottom of screen */}
      <div className="launchpad-mobile-floating-cta">
        <button
          type="button"
          className="launchpad-mobile-floating-btn"
          onClick={onOpenRegister}
          aria-label="Register Now for Launchpad"
        >
          <span>Register Now!</span>
          <span className="launchpad-floating-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      {/* 4. Floating Navigation Drawer */}
      {isMenuOpen && (
        <div
          ref={modalRef}
          className="daemon-nav-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="daemon-nav-header">
            <div className="daemon-nav-header-left">
              <DaemonLogo size={28} />
            </div>
            <button
              type="button"
              className="daemon-nav-close-btn"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="daemon-nav-links">
            <li>
              <a
                href="#gap"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('gap');
                }}
              >
                01 // THE GAP
              </a>
            </li>
            <li>
              <a
                href="#why-join"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('why-join');
                }}
              >
                02 // WHY JOIN
              </a>
            </li>
            <li>
              <a
                href="#agenda"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('agenda');
                }}
              >
                03 // WHAT YOU'LL GET
              </a>
            </li>
            <li>
              <a
                href="#target-audience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('target-audience');
                }}
              >
                04 // WHO IT'S FOR
              </a>
            </li>
            <li>
              <a
                href="#transformation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('transformation');
                }}
              >
                05 // TRANSFORMATION
              </a>
            </li>
            <li>
              <a
                href="#event-details"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('event-details');
                }}
              >
                06 // EVENT DETAILS & REGISTER
              </a>
            </li>
            <li style={{ marginTop: '6px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '6px' }}>
              <a
                href="#poster"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  onOpenPoster();
                }}
                style={{ color: '#d4ff32', fontWeight: 600 }}
              >
                OPEN EVENT POSTER
              </a>
            </li>
          </ul>

          <div className="daemon-nav-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="daemon-social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="daemon-social-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.009-.375-.009-.575-.009-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 3.009 1.3 3.009.867 3.559.813.55-.053 1.781-.727 2.031-1.43.25-.703.25-1.306.175-1.43-.075-.125-.275-.2-.575-.35zm-5.452 7.618h-.005a10.024 10.024 0 0 1-5.114-1.396l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.007 10.007 0 0 1-1.536-5.29c0-5.524 4.494-10.017 10.023-10.017 2.677 0 5.193 1.043 7.086 2.937a9.96 9.96 0 0 1 2.932 7.08c0 5.524-4.494 10.017-10.025 10.017zm8.508-18.525C18.27 1.218 15.27 0 12.02 0 5.438 0 .08 5.358.077 11.942a11.9 11.9 0 0 0 1.83 6.324L0 24l5.88-1.543a11.895 11.895 0 0 0 6.136 1.696h.005c6.582 0 11.94-5.358 11.943-11.943 0-3.19-1.242-6.19-3.486-8.435z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="daemon-social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>
      )}

      {/* 5. "How It Works" Informational Modal */}
      {howModalOpen && (
        <div
          className="daemon-nav-backdrop"
          onClick={() => setHowModalOpen(false)}
        >
          <div
            className="daemon-nav-modal"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '480px',
              padding: '0',
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="daemon-nav-header">
              <div className="daemon-nav-header-left">
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  ONE-DAY CAREER RESET
                </span>
              </div>
              <button
                type="button"
                className="daemon-nav-close-btn"
                onClick={() => setHowModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '24px', fontSize: '14px', lineHeight: '1.6', color: '#222' }}>
              <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '24px', marginBottom: '8px' }}>
                INTENSIVE SESSIONS
              </h3>
              <p style={{ marginBottom: '14px' }}>
                Launchpad is an intensive, high-signal single-day bootcamp. You
                walk in confused with an ignored resume, and walk out with
                clarity, a tailored 30-day action plan, and direct interview
                techniques.
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  backgroundColor: 'rgba(0,0,0,0.06)',
                  padding: '12px',
                  borderLeft: '3px solid #111',
                }}
              >
                <div>10:00 AM — REALITY CHECK & HIDDEN REASONS</div>
                <div style={{ marginTop: '6px' }}>01:00 PM — PORTFOLIO & INTERVIEW MANTRA</div>
                <div style={{ marginTop: '6px' }}>04:00 PM — 30-DAY PERSONAL ACTION PLAN</div>
              </div>
              <button
                type="button"
                className="hero-primary-btn"
                style={{ marginTop: '18px', width: '100%' }}
                onClick={() => {
                  setHowModalOpen(false);
                  onOpenRegister();
                }}
              >
                Reserve Your Free Seat Now →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
