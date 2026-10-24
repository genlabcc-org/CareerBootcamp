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

const PILLARS = [
  {
    num: 'PILLAR 01 //',
    title: 'LACK OF DIRECTION',
    desc: 'Sending 100 blind applications to random job listings with generic resumes. No targeted industry positioning, no clear specialty.',
  },
  {
    num: 'PILLAR 02 //',
    title: 'OUTDATED SKILLS',
    desc: "Textbook theory from 5 years ago won't cut it in today's AI-first market. Recruiters look for live proof-of-work, production workflows, and modern tool mastery.",
  },
  {
    num: 'PILLAR 03 //',
    title: 'INTERVIEW HESITATION',
    desc: 'Freezing, rambling, or underselling your worth when asked simple behavioral or technical questions. Confidence is a learnable pattern.',
  },
];

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

          <p className="gap-explanation-text">
            The gap between what college teaches and what companies actually
            look for is real, and almost nobody explains it to you. Most people
            are rejected not for lack of talent, but for{' '}
            <strong>lack of direction</strong>, the <strong>right skills</strong>,
            and <strong>interview confidence</strong>.
          </p>
        </div>

        {/* 3 Pillars of The Gap */}
        <div className="gap-comparison-grid">
          {PILLARS.map((p, i) => (
            <div
              className="gap-card reveal"
              data-reveal
              style={{ '--i': i }}
              key={p.num}
            >
              <div className="gap-card-number">{p.num}</div>
              <h3 className="gap-card-title">{p.title}</h3>
              <p className="gap-card-desc">{p.desc}</p>
            </div>
          ))}
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