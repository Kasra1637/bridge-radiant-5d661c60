import { AnimatedSection } from './AnimatedSection';

// AI-detected ranked emotions with intensity tiers (Plutchik-inspired)
const aiEmotions = [
  { label: 'Apprehensive', family: 'Fear',     intensity: 0.78, tier: 'Strong',   color: '#8E6BFF' },
  { label: 'Hopeful',      family: 'Trust',    intensity: 0.62, tier: 'Moderate', color: '#10B981' },
  { label: 'Wistful',      family: 'Sadness',  intensity: 0.41, tier: 'Mild',     color: '#3B82F6' },
  { label: 'Anticipation', family: 'Joy',      intensity: 0.34, tier: 'Mild',     color: '#F59E0B' },
];

// User refinement — preserved alongside AI baseline
const userRefinement = {
  label: 'Tender + Uncertain',
  note: 'It felt more tender than fearful. Hope is real but quiet.',
};

const proofCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'AI emotional baseline',
    desc: 'Each entry is read for emotional patterns, intensity, and overlapping feelings — generating a starting point, never a verdict.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M6 12h12M9 18h6" />
      </svg>
    ),
    title: 'Multiple ranked emotions',
    desc: 'Instead of one label, Vocolens surfaces several co-existing emotions with intensity tiers inspired by Plutchik’s wheel.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0-8-8" /><path d="M12 12l4 2" /><path d="m9 18 3 3 3-3" />
      </svg>
    ),
    title: 'Reflect and refine',
    desc: 'Adjust what doesn’t feel true. Your refinement is preserved beside the AI reading — both layers stay visible.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 18 0" /><path d="M3 12a9 9 0 0 0 18 0" /><path d="M12 3v18" />
      </svg>
    ),
    title: 'Patterns that evolve with you',
    desc: 'Your refinements teach the system over time, so emotional insights grow more personal — without overriding your perspective.',
  },
];

export function EmotionDetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <AnimatedSection animation="fade-in-up" className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
          </svg>
          Hybrid Emotion Intelligence
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
          Feelings aren’t one word. Neither is our AI.
        </h2>
        <p className="text-text-secondary leading-relaxed text-lg mb-8">
          Vocolens detects the layered emotions in every entry — then hands the pen back to you. Refine the reading, keep what rings true, and watch your real emotional patterns take shape.
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
              "It didn’t try to flatten what I was feeling into one word. I saw the layers — the hope underneath the worry — and I could nudge the reading until it felt like mine."
            </p>
            <p className="text-xs font-semibold text-text-muted">Beta user · early reflection sessions</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Hybrid workflow visualization */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-clay border border-primary/8">

          {/* Card header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1">Hybrid emotional reading</p>
              <h3 className="text-xl font-bold text-text-primary">Layered, ranked, and yours to refine</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70 inline-block" /> AI baseline
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Your reflection
              </span>
            </div>
          </div>

          {/* Three-column hybrid flow */}
          <div className="grid lg:grid-cols-12 gap-5">

            {/* 1. Transcription source */}
            <div className="lg:col-span-4 rounded-2xl p-5 bg-gradient-to-br from-primary/5 via-white to-white border border-primary/10 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">1</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70">Voice transcription</p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed italic">
                "I keep circling back to the same thought. There’s this quiet hope underneath everything, but I can’t tell if I’m bracing or actually breathing again."
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[11px] text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Analyzing emotional layers…
              </div>
            </div>

            {/* 2. AI baseline — multiple ranked emotions with intensity */}
            <div className="lg:col-span-5 rounded-2xl p-5 bg-white border border-primary/15 shadow-clay-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">2</span>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70">AI emotional baseline</p>
                </div>
                <span className="text-[10px] font-semibold text-text-muted bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                  Plutchik-inspired tiers
                </span>
              </div>

              <div className="space-y-3">
                {aiEmotions.map((e, i) => (
                  <div key={e.label} className="flex items-center gap-3">
                    <span className="text-[10px] w-5 font-bold text-text-muted">#{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-sm font-semibold text-text-primary">
                          {e.label}
                          <span className="ml-1.5 text-[10px] font-medium text-text-muted">· {e.family}</span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: e.color }}>
                          {e.tier}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${e.intensity * 100}%`,
                            background: `linear-gradient(90deg, ${e.color}55, ${e.color})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] text-text-muted">
                <svg className="w-3.5 h-3.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                </svg>
                Blended emotions · ambivalence preserved
              </div>
            </div>

            {/* 3. User reflection layer */}
            <div className="lg:col-span-3 rounded-2xl p-5 bg-gradient-to-br from-amber-50/60 via-white to-white border border-amber-200/40 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-600 text-[10px] font-bold flex items-center justify-center">3</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600/90">Your reflection</p>
              </div>

              <div className="rounded-xl bg-white border border-amber-200/50 p-3 mb-3 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 mb-1">Refined to</p>
                <p className="text-sm font-semibold text-text-primary leading-snug">
                  <span className="text-amber-500">★</span> {userRefinement.label}
                </p>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed italic">
                "{userRefinement.note}"
              </p>

              <div className="mt-auto pt-4 text-[11px] text-text-muted leading-relaxed">
                Both layers preserved — AI reading and your reflection live side by side.
              </div>
            </div>
          </div>

          {/* Footer strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100">
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              <span className="text-amber-400 text-sm leading-none">★</span>
              <span>Your refinement is never overridden — it teaches the model gently over time.</span>
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/10">
                AI baseline
              </div>
              <span className="text-text-muted text-xs">+</span>
              <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-100">
                Your reflection
              </div>
              <span className="text-text-muted text-xs">=</span>
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Hybrid interpretation
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
