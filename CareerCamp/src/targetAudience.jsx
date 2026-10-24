import React from 'react';
import './targetAudience.css';

/**
 * Section 4: This Day Is For You If...
 */
export default function TargetAudience() {
  const criteria = [
    {
      idx: '01',
      text: "You're a final-year college student worried and anxious about what comes after graduation.",
    },
    {
      idx: '02',
      text: "You're an active job seeker feeling stuck in the exhausting, soul-crushing apply-and-wait cycle.",
    },
    {
      idx: '03',
      text: 'You know deep down you are genuinely talented, but feel completely invisible to corporate recruiters.',
    },
    {
      idx: '04',
      text: 'You freeze up, ramble nervously, or struggle to communicate your authentic value in interviews.',
    },
    {
      idx: '05',
      text: "You're completely unsure which modern tech career path genuinely matches your abilities.",
    },
    {
      idx: '06',
      text: 'You desperately want a portfolio that gets noticed, but have no idea what projects to build or where to start.',
    },
  ];

  return (
    <section className="audience-section" id="target-audience" aria-label="Who This Day Is For">
      <div className="audience-container">
        <span className="audience-tag">// 04. TARGET FIT & AUDIENCE</span>

        <h2 className="audience-headline">THIS DAY IS FOR YOU IF...</h2>

        <p className="audience-subtext">
          If any of these scenarios describe your current headspace, GenLab
          Launchpad was engineered specifically for you.
        </p>

        <div className="audience-grid">
          {criteria.map((item) => (
            <article key={item.idx} className="audience-card">
              <div className="audience-card-marker" aria-hidden="true">
                {item.idx}
              </div>
              <p className="audience-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
