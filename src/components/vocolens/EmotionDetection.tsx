import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const scatterPoints = [
  { id: 1,  label: 'Anxious',      x: 28, y: 72, color: '#EF4444', size: 8,  starred: false, week: 'This week' },
  { id: 2,  label: 'Excited',      x: 78, y: 80, color: '#F59E0B', size: 10, starred: false, week: 'This week' },
  { id: 3,  label: 'Sad',          x: 22, y: 30, color: '#3B82F6', size: 7,  starred: true,  week: 'Last week' },
  { id: 4,  label: 'Content',      x: 72, y: 42, color: '#10B981', size: 9,  starred: false, week: 'This week' },
  { id: 5,  label: 'Overwhelmed',  x: 35, y: 85, color: '#EF4444', size: 7,  starred: true,  week: 'Last week' },
  { id: 6,  label: 'Calm',         x: 68, y: 22, color: '#06B6D4', size: 8,  starred: false, week: 'This week' },
  { id: 7,  label: 'Hopeful',      x: 80, y: 60, color: '#8E6BFF', size: 9,  starred: false, week: 'This week' },
  { id: 8,  label: 'Frustrated',   x: 18, y: 65, color: '#F97316', size: 7,  starred: false, week: 'Last week' },
  { id: 9,  label: 'Grateful',     x: 85, y: 50, color: '#10B981', size: 11, starred: false, week: 'This week' },
  { id: 10, label: 'Drained',      x: 30, y: 18, color: '#6B7280', size: 7,  starred: true,  week: 'Last week' },
  { id: 11, label: 'Curious',      x: 70, y: 70, color: '#8E6BFF', size: 8,  starred: false, week: 'This week' },
  { id: 12, label: 'Tense',        x: 40, y: 78, color: '#EF4444', size: 7,  starred: false, week: 'Last week' },
];

const proofCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'No forced word-finding',
    desc: 'Place a dot. Move it. The map asks nothing more — no dropdown, no "pick the closest word." Your position is the answer.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "You're always right about yourself",
    desc: 'When the AI guesses wrong, your star correction wins — and trains the model forward. Your override is never overridden.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    title: 'Patterns without journals',
    desc: 'Your 30-day map reveals where you actually live emotionally — not where you thought you were last Tuesday.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Built on validated science',
    desc: 'The circumplex model was designed to describe emotion without requiring introspection fluency — which is exactly why it works here.',
  },
];

export function EmotionDetection() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
          </svg>
          Emotional Landscape
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
          Finally understand your emotions — without having to explain them to yourself first.
        </h2>
        <p className="text-text-secondary leading-relaxed text-lg mb-8">
          No forced labels. No "pick one word." Place a dot on a map, feel where tension lives in your body, and let AI learn your patterns — then correct it when it's wrong.
        </p>

        {/* Pull quote */}
        <div className="bg-white rounded-2xl px-6 py-5 shadow-clay-sm border border-primary/8 text-left flex gap-4 items-start">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div>
            <p className="text-text-secondary text-sm leading-relaxed mb-2">
              "I have ADHD and alexithymia — I genuinely couldn't tell you what I was feeling most days. I moved the dot myself and the app named it for me. First time in 32 years I felt accurately described."
            </p>
            <p className="text-xs font-semibold text-text-muted">Beta user · ADHD & alexithymia</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Full-width scatter plot */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8">

          {/* Card header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1">30-day emotional landscape</p>
              <h3 className="text-xl font-bold text-text-primary">Where you live on the map</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/50 inline-block" /> This week
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" /> Last week
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 text-sm leading-none">★</span> Your correction
              </span>
            </div>
          </div>

          {/* Scatter plot — responsive container */}
          <div className="w-full" style={{ aspectRatio: '16/7', minHeight: 240 }}>
            <svg
              viewBox="0 0 160 70"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible' }}
            >
              {/* Quadrant fills */}
              <rect x="8" y="4" width="72" height="31" fill="rgba(239,68,68,0.04)" rx="2" />
              <rect x="80" y="4" width="72" height="31" fill="rgba(245,158,11,0.04)" rx="2" />
              <rect x="8" y="35" width="72" height="29" fill="rgba(107,114,128,0.04)" rx="2" />
              <rect x="80" y="35" width="72" height="29" fill="rgba(16,185,129,0.04)" rx="2" />

              {/* Border */}
              <rect x="8" y="4" width="144" height="60" fill="none" stroke="#E5E7EB" strokeWidth="0.4" rx="2" />

              {/* Axes */}
              <line x1="80" y1="4" x2="80" y2="64" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="8" y1="34" x2="152" y2="34" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Quadrant labels */}
              <text x="20" y="11" fontSize="3" fill="#EF4444" opacity="0.65" fontWeight="600">Unpleasant + Activated</text>
              <text x="92" y="11" fontSize="3" fill="#F59E0B" opacity="0.65" fontWeight="600">Pleasant + Activated</text>
              <text x="20" y="61" fontSize="3" fill="#6B7280" opacity="0.65" fontWeight="600">Unpleasant + Calm</text>
              <text x="92" y="61" fontSize="3" fill="#10B981" opacity="0.65" fontWeight="600">Pleasant + Calm</text>

              {/* Dominant zone ring */}
              <ellipse cx="116" cy="42" rx="18" ry="13" fill="rgba(16,185,129,0.07)" stroke="rgba(16,185,129,0.25)" strokeWidth="0.6" strokeDasharray="2,1.5" />
              <text x="116" y="58.5" fontSize="2.4" fill="#10B981" opacity="0.8" textAnchor="middle" fontWeight="600">dominant zone</text>

              {/* Data points — mapped from 0-100 range to plot area 8..152 x 4..64 */}
              {scatterPoints.map((pt) => {
                const px = 8 + (pt.x / 100) * 144;
                const py = 4 + ((100 - pt.y) / 100) * 60;
                const r = pt.size * 0.38;
                const isHovered = hoveredPoint === pt.id;
                const isCurrent = pt.week === 'This week';

                return (
                  <g
                    key={pt.id}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredPoint(pt.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    {isHovered && (
                      <circle cx={px} cy={py} r={r + 2.5} fill={pt.color} opacity="0.12" />
                    )}
                    <circle
                      cx={px}
                      cy={py}
                      r={r}
                      fill={isCurrent ? pt.color : '#D1D5DB'}
                      opacity={isCurrent ? (isHovered ? 1 : 0.82) : 0.5}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    {pt.starred && (
                      <text x={px + r + 0.6} y={py - r + 0.5} fontSize="3.2" fill="#F59E0B">★</text>
                    )}
                    {isHovered && (
                      <>
                        <rect
                          x={px > 130 ? px - 18 : px + r + 1.5}
                          y={py - 4}
                          width="16"
                          height="5.5"
                          rx="1.5"
                          fill="white"
                          stroke="#E5E7EB"
                          strokeWidth="0.4"
                        />
                        <text
                          x={px > 130 ? px - 10 : px + r + 9.5}
                          y={py - 0.6}
                          fontSize="2.6"
                          fill="#2D2449"
                          textAnchor="middle"
                          fontWeight="600"
                        >
                          {pt.label}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}

              {/* Axis labels */}
              <text x="80" y="69.5" fontSize="2.6" fill="#9CA3AF" textAnchor="middle">← Unpleasant · Valence · Pleasant →</text>
              <text x="3.5" y="34" fontSize="2.6" fill="#9CA3AF" textAnchor="middle" transform="rotate(-90, 3.5, 34)">← Calm · Arousal · Activated →</text>
            </svg>
          </div>

          {/* Footer strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-5 border-t border-gray-100">
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              <span className="text-amber-400 text-sm leading-none">★</span>
              <span>= your correction · <span className="font-medium text-text-secondary">3 starred corrections moved entries to Pleasant+Calm</span></span>
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Dominant zone: Pleasant + Calm
              </div>
              <div className="flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/10">
                AI confidence +12% on similar entries
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Proof cards */}
      <AnimatedSection animation="fade-in-up" delay={0.15}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-5 shadow-clay-sm border border-primary/8 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <h4 className="text-sm font-bold text-text-primary mb-1.5">{card.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </section>
  );
}
