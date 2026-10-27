import React from 'react';
import './transformation.css';

/**
 * Section 5: What Changes After This Day? (Transformation)
 */
export default function Transformation() {
  return (
    <section className="trans-section" id="transformation" aria-label="Transformation: Before vs After">
      <div className="trans-container">
        <span className="trans-tag">04. THE 1-DAY TRANSFORMATION</span>

        <h2 className="trans-headline">WHAT CHANGES AFTER THIS DAY?</h2>

        <div className="trans-comparison-grid">
          {/* Before Column */}
          <div className="trans-col before">
            <div>
              <div className="trans-col-header">
                <span className="trans-col-badge">STATUS • BEFORE</span>
                <span style={{ fontSize: '18px' }} aria-hidden="true"></span>
              </div>

              <h3 className="trans-state-title">THE STUCK CYCLE</h3>

              <div className="trans-state-keywords">
                <span className="trans-keyword-pill">CONFUSED</span>
                <span className="trans-keyword-pill">ANXIOUS</span>
                <span className="trans-keyword-pill">NO DIRECTION</span>
              </div>

              <p className="trans-state-desc">
                Applying everywhere with no strategy. Waiting days for rejection
                emails or complete silence. Doubting your intelligence and
                paralyzed about your post-graduation future.
              </p>
            </div>
          </div>

          {/* After Column */}
          <div className="trans-col after">
            <div>
              <div className="trans-col-header">
                <span className="trans-col-badge">STATUS • AFTER</span>
                <span style={{ fontSize: '18px' }} aria-hidden="true"></span>
              </div>

              <h3 className="trans-state-title">THE PURPOSE CYCLE</h3>

              <div className="trans-state-keywords">
                <span className="trans-keyword-pill">CLEAR</span>
                <span className="trans-keyword-pill">CONFIDENT</span>
                <span className="trans-keyword-pill">PREPARED</span>
              </div>

              <p className="trans-state-desc">
                Applying with purpose and surgical precision. Armed with a
                standout portfolio, interview question frameworks, and an
                unshakable 30-day tactical roadmap to employment.
              </p>
            </div>
          </div>
        </div>

        {/* Famous Quote Banner */}
        <div className="trans-quote-card">
          <blockquote className="trans-quote-text">
            "One day won't solve everything. But it can change the direction of
            everything."
          </blockquote>
          <cite className="trans-quote-author">GENLAB LAUNCHPAD PRINCIPLE</cite>
        </div>
      </div>
    </section>
  );
}
