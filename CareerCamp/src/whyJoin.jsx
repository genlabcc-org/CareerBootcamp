import React from 'react';
import './whyJoin.css';

/**
 * Section 2: Why Should You Join?
 */
export default function WhyJoin() {
  const reasons = [
    {
      num: '01',
      title: 'BECAUSE YOU DESERVE HONEST ANSWERS',
      desc: 'Nobody tells you the real, unfiltered reasons your resume gets passed over by ATS scanners and hiring managers. We will.',
      highlight: false,
    },
    {
      num: '02',
      title: 'BECAUSE THE INDUSTRY HAS CHANGED',
      desc: 'Your preparation should evolve with the market. Learn what employers actually look for today, not what syllabus textbooks claimed five years ago.',
      highlight: true,
    },
    {
      num: '03',
      title: 'BECAUSE CONFIDENCE CAN BE LEARNED',
      desc: 'Interviews feel intimidating until you understand the underlying pattern. We deconstruct and hand you the proven pattern.',
      highlight: false,
    },
    {
      num: '04',
      title: "BECAUSE YOU SHOULDN'T BE ALONE",
      desc: 'Stop burning out in isolation in the apply-and-wait cycle. Come in confused, collaborate with ambitious peers, and leave with a clear plan.',
      highlight: false,
    },
    {
      num: '05',
      title: 'BECAUSE IT COSTS YOU NOTHING BUT A SATURDAY',
      desc: 'Zero ticket fees. Zero hidden upsells or sales pitches. Pure signal, direct mentorship, and immediate value.',
      highlight: true,
    },
  ];

  return (
    <section className="why-section" id="why-join" aria-label="Why Should You Join">
      <div className="why-container">
        <span className="why-tag">02. VALUE PROPOSITION</span>

        <h2 className="why-headline">WHY SHOULD YOU JOIN?</h2>

        <p className="why-subtext">
          Five simple reasons why spending one single Saturday at GenLab will pay
          dividends across your entire career.
        </p>

        <div className="why-reasons-grid">
          {reasons.map((item) => (
            <article
              key={item.num}
              className={`why-card ${item.highlight ? 'highlight' : ''}`}
            >
              <div>
                <div className="why-card-header">
                  <span className="why-card-badge">REASON {item.num}</span>
                  {/* <span className="why-card-icon" aria-hidden="true">✔</span> */}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
