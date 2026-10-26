import React, { useLayoutEffect, useRef } from 'react';
import './problem.css';

/**
 * Adds `is-visible` to every [data-reveal] element as it scrolls into view.
 * If the user prefers reduced motion (or IntersectionObserver is missing),
 * nothing is hidden and everything just shows normally.
 */
function useScrollReveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return undefined;

    root.classList.add('anim-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

const HEADLINE_WORDS = ['WE', 'KNOW', 'HOW', 'THIS', 'FEELS.'];

/**
 * Section 1: We Know How This Feels (The Gap)
 */
export default function Problem({ onOpenRegister }) {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="gap-section"
      id="gap"
      aria-label="We Know How This Feels"
    >
      {/* Decorative animated background */}
      <div className="gap-bg" aria-hidden="true">
        <span className="gap-orb gap-orb--a" />
        <span className="gap-orb gap-orb--b" />
        <span className="gap-grid" />
      </div>

      <div className="gap-container">
        <span className="gap-tag reveal" data-reveal>
          // 01. THE HARSH REALITY
        </span>

        <h2 className="gap-main-headline" data-reveal aria-label="We know how this feels.">
          {HEADLINE_WORDS.map((word, i) => (
            <span className="gap-word-mask" key={word} aria-hidden="true">
              <span className="gap-word" style={{ '--i': i }}>
                {word}
              </span>
            </span>
          ))}
        </h2>

        <div className="gap-narrative-card reveal" data-reveal>
          <p className="gap-lead-text">
            You've studied hard. You've sent resumes. You've waited for calls
            that never came. And somewhere along the way, you started wondering,{' '}
            <em>"Is it me?"</em>
          </p>

          <div className="gap-emphasis-banner" data-reveal>
            <span>IT'S NOT YOU. IT'S THE GAP.</span>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="gap-bottom-badge reveal" data-reveal>
          <span className="gap-badge-text">
            Launchpad was built to close this gap — in just one focused Saturday.
          </span>
          <button
            type="button"
            className="gap-badge-btn"
            onClick={onOpenRegister}
          >
            Claim Your Spot <span className="gap-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}