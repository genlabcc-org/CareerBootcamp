import React from 'react';
import './agenda.css';

/**
 * Section 3: What You'll Get (Your Day at a Glance)
 */
export default function Agenda() {
  const sessions = [
    {
      num: '01',
      title: 'THE SKILL GAP REALITY CHECK',
      takeaway: 'Gain immediate clarity on what modern tech companies and recruiters expect vs. what your college degree currently prepared you with.',
    },
    {
      num: '02',
      title: "WHY YOU'RE NOT GETTING HIRED",
      takeaway: 'The top hidden, unspoken reasons candidates get rejected by automated filters and hiring managers—and exactly how to fix every single one.',
    },
    {
      num: '03',
      title: 'CAREER CLARITY SESSION',
      takeaway: 'Stop guessing your path. Accurately identify the high-demand tech role that aligns with your innate strengths, problem-solving style, and interests.',
    },
    {
      num: '04',
      title: 'PORTFOLIO THAT GETS NOTICED',
      takeaway: 'How to architect and showcase a proof-of-work portfolio that makes busy recruiters stop scrolling, even if you currently have zero corporate experience.',
    },
    {
      num: '05',
      title: 'CRACK THE INTERVIEW: THE MANTRA',
      takeaway: 'Proven answer frameworks, psychological mindset shifts, and battle-tested techniques to handle difficult, tricky interview questions with poise.',
    },
    {
      num: '06',
      title: 'YOUR NEXT-30-DAYS ACTION PLAN',
      takeaway: 'A personalized day-by-day roadmap so you leave GenLab highly motivated with unambiguous next steps rather than vague inspiration.',
    },
  ];

  const perks = [
    {
      
      text: 'Practical tips you can apply to your resume and portfolio the very same evening.',
    },
    {
     
      text: 'A collaborative room packed with driven job seekers and students on the exact same mission.',
    },
    {
      
      text: 'Direct 1-on-1 access to industry mentors and unvarnished engineering leadership insights.',
    },
  ];

  return (
    <section className="agenda-section" id="agenda" aria-label="What You'll Get">
      <div className="agenda-container">
        <span className="agenda-tag">03. FULL SYLLABUS & TIMELINE</span>

        <h2 className="agenda-headline">YOUR DAY AT A GLANCE.</h2>

        <p className="agenda-subtext">
          No vague motivational speeches. Every single module delivers tangible,
          actionable assets you take home.
        </p>

        {/* Schedule Table */}
        <div className="agenda-table-wrap">
          <div className="agenda-table-header">
            <div>#</div>
            <div>SESSION MODULE</div>
            <div>WHAT YOU'LL WALK AWAY WITH</div>
          </div>

          {sessions.map((item) => (
            <div key={item.num} className="agenda-row">
              <div className="agenda-index">{item.num}</div>
              <div className="agenda-session-title">{item.title}</div>
              <div className="agenda-takeaway">{item.takeaway}</div>
            </div>
          ))}
        </div>

        {/* Plus Perks Bar */}
        <div className="agenda-perks-wrap">
          <span className="agenda-perks-title">PLUS SPECIAL PROGRAM PERKS</span>
          <div className="agenda-perks-grid">
            {perks.map((perk, idx) => (
              <div key={idx} className="agenda-perk-item">
                <span className="agenda-perk-icon" aria-hidden="true">
                  {perk.icon || '✦'}
                </span>
                <span className="agenda-perk-text">{perk.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
