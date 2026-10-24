import React from 'react';
import './problem.css';

/**
 * Section 1: We Know How This Feels (The Gap)
 */
export default function Problem({ onOpenRegister }) {
  return (
    <section className="gap-section" id="gap" aria-label="We Know How This Feels">
      <div className="gap-container">
        <span className="gap-tag">// 01. THE HARSH REALITY</span>

        <h2 className="gap-main-headline">
          WE KNOW HOW THIS FEELS.
        </h2>

        <div className="gap-narrative-card">
          <p className="gap-lead-text">
            You've studied hard. You've sent resumes. You've waited for calls
            that never came. And somewhere along the way, you started wondering,{' '}
            <em>"Is it me?"</em>
          </p>

          <div className="gap-emphasis-banner">IT'S NOT YOU. IT'S THE GAP.</div>

          <p className="gap-explanation-text">
            The gap between what college teaches and what companies actually
            look for is real, and almost nobody explains it to you. Most people
            are rejected not for lack of talent, but for <strong>lack of direction</strong>,
            the <strong>right skills</strong>, and <strong>interview confidence</strong>.
          </p>
        </div>

        {/* 3 Pillars of The Gap */}
        <div className="gap-comparison-grid">
          <div className="gap-card">
            <div className="gap-card-number">PILLAR 01 //</div>
            <h3 className="gap-card-title">LACK OF DIRECTION</h3>
            <p className="gap-card-desc">
              Sending 100 blind applications to random job listings with generic
              resumes. No targeted industry positioning, no clear specialty.
            </p>
          </div>

          <div className="gap-card">
            <div className="gap-card-number">PILLAR 02 //</div>
            <h3 className="gap-card-title">OUTDATED SKILLS</h3>
            <p className="gap-card-desc">
              Textbook theory from 5 years ago won't cut it in today's AI-first
              market. Recruiters look for live proof-of-work, production workflows,
              and modern tool mastery.
            </p>
          </div>

          <div className="gap-card">
            <div className="gap-card-number">PILLAR 03 //</div>
            <h3 className="gap-card-title">INTERVIEW HESITATION</h3>
            <p className="gap-card-desc">
              Freezing, rambling, or underselling your worth when asked simple
              behavioral or technical questions. Confidence is a learnable pattern.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="gap-bottom-badge">
          <span className="gap-badge-text">
            Launchpad was built to close this gap — in just one focused Saturday.
          </span>
          <button
            type="button"
            className="gap-badge-btn"
            onClick={onOpenRegister}
          >
            Claim Your Spot →
          </button>
        </div>
      </div>
    </section>
  );
}
