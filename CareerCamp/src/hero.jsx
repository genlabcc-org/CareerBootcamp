import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

/**
 * Daemon 3x3 Pixel Diamond Logo
 */
export function DaemonLogo({ size = 20, color = '#111' }) {
  return (
    <div
      className="daemon-logo-icon"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    >
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel dim" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
      <div className="daemon-logo-pixel" style={{ backgroundColor: color }} />
    </div>
  );
}

/**
 * Hero Component - Recreating Daemon Agency
 */
export default function Hero() {
  // Start with menu open as shown in reference screenshot
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('HOME');
  const [howModalOpen, setHowModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Light dismiss: Close menu or modal on Esc key
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

  // Light dismiss: Close menu on outside click
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

  return (
    <div className="daemon-page">
      {/* 1. Atmospheric Background Layers */}
      <div className="daemon-bg-layer" aria-hidden="true" />
      <div className="daemon-vignette-layer" aria-hidden="true" />
      <div className="daemon-grain-layer" aria-hidden="true" />

      {/* 2. Technical Architectural Grid Overlay & Crosshairs */}
      <div className="daemon-grid-layer" aria-hidden="true">
        {/* Vertical alignment grid lines */}
        <div className="grid-line-vertical" style={{ left: '24%' }} />
        <div className="grid-line-vertical" style={{ left: '57%' }} />
        <div className="grid-line-vertical" style={{ left: '75%' }} />

        {/* Horizontal alignment grid lines */}
        <div className="grid-line-horizontal" style={{ top: '15%' }} />
        <div className="grid-line-horizontal" style={{ top: '36%' }} />
        <div className="grid-line-horizontal" style={{ top: '59%' }} />
        <div className="grid-line-horizontal" style={{ top: '81%' }} />

        {/* Precise intersection cross markers */}
        <span className="grid-cross" style={{ left: '24%', top: '15%' }}>+</span>
        <span className="grid-cross" style={{ left: '24%', top: '36%' }}>+</span>
        <span className="grid-cross" style={{ left: '24%', top: '59%' }}>+</span>
        <span className="grid-cross" style={{ left: '24%', top: '81%' }}>+</span>

        <span className="grid-cross" style={{ left: '57%', top: '59%' }}>+</span>
        <span className="grid-cross" style={{ left: '57%', top: '81%' }}>+</span>

        <span className="grid-cross" style={{ left: '75%', top: '36%' }}>+</span>
        <span className="grid-cross" style={{ left: '75%', top: '59%' }}>+</span>
        <span className="grid-cross" style={{ left: '75%', top: '81%' }}>+</span>
      </div>

      {/* 3. Main Hero Foreground Content */}
      <div className="daemon-content-wrapper">
        {/* Header */}
        <header className="daemon-header">
          <a
            href="/"
            className="daemon-brand"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
            }}
          >
            <DaemonLogo size={21} color="#0f0f0f" />
            <span className="daemon-brand-text">
              Genlab LaunchPad<sup>®</sup>
            </span>
          </a>

          {/* Hamburger Menu Toggle Button */}
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

        {/* Hero Headline & Right Sidebar */}
        <section className="daemon-hero" aria-label="Hero Introduction">
          <div className="daemon-hero-title-wrap">
            <h1 className="daemon-hero-headline">
              <span>WE BUILD</span>
              <span>AI SYSTEMS</span>
              <span>FOR BUSINESSES</span>
            </h1>
          </div>

          {/* Right Column Services & "How It Works" Card */}
          <div className="daemon-hero-sidebar">
            <ul className="daemon-services-list">
              <li className="daemon-service-item">Not Unemployable. Just Underprepared.</li>
              <li className="daemon-service-item">50 Applications. 2 Replies. Why?</li>
              <li className="daemon-service-item">Degree Done. Job Pending. Let's Fix That.</li>
              <li className="daemon-service-item">AI Is Here. Are You Ready For It?</li>
            </ul>

            <button
              type="button"
              className="daemon-how-btn"
              onClick={() => setHowModalOpen(true)}
              aria-label="Learn how it works"
            >
              <span className="corner-icon corner-tl" aria-hidden="true">⊘</span>
              <span className="corner-icon corner-tr" aria-hidden="true">⊘</span>
              <span>How It Works</span>
              <span className="corner-icon corner-bl" aria-hidden="true">⊘</span>
              <span className="corner-icon corner-br" aria-hidden="true">⊘</span>
            </button>
          </div>
        </section>

        {/* Footer Mission Statement */}
        <footer className="daemon-footer">
          <p className="daemon-footer-text">
            Build real, production-ready AI systems that automate work, improve
            performance, and deliver measurable business results.
          </p>
        </footer>
      </div>

      {/* 4. Floating Navigation Drawer / Modal */}
      {isMenuOpen && (
        <div
          ref={modalRef}
          className="daemon-nav-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Modal Header */}
          <div className="daemon-nav-header">
            <div className="daemon-nav-header-left">
              <DaemonLogo size={18} color="#111" />
              <span className="daemon-brand-text" style={{ fontSize: '19px' }}>
                Daemon<sup>®</sup>
              </span>
            </div>
            <button
              type="button"
              className="daemon-nav-close-btn"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="daemon-nav-links">
            {['HOME', 'OUR WORKS', 'ARTICLES', 'ABOUT US', 'CAREER', '404'].map(
              (item) => (
                <li key={item} className="daemon-nav-link-item">
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={activeNav === item ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Bottom Social Media Links */}
          <div className="daemon-nav-socials">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="daemon-social-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="daemon-social-btn"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="daemon-social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="daemon-social-btn"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
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
              maxWidth: '460px',
              padding: '0',
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="daemon-nav-header">
              <div className="daemon-nav-header-left">
                <span
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  SYSTEM ARCHITECTURE
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
            <div
              style={{
                padding: '24px',
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#222',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-hero, sans-serif)',
                  fontSize: '26px',
                  marginBottom: '10px',
                  letterSpacing: '0.02em',
                }}
              >
                AUTONOMOUS PIPELINES
              </h3>
              <p style={{ marginBottom: '16px' }}>
                We design and deploy purpose-built artificial intelligence
                agents tightly integrated with your database schemas, internal
                APIs, and operational workflows.
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '12px',
                  backgroundColor: 'rgba(0,0,0,0.06)',
                  padding: '12px',
                  borderLeft: '3px solid #111',
                }}
              >
                <div>01 / AUDIT & IDENTIFY HIGH-LEVERAGE NODES</div>
                <div style={{ marginTop: '6px' }}>
                  02 / AGENT PROTOTYPING & REASONING RUNTIMES
                </div>
                <div style={{ marginTop: '6px' }}>
                  03 / CONTINUOUS EVALUATION & DEPLOYMENT
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
