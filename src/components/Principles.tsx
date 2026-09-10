import React, { useState } from 'react';

const PRINCIPLES = [
  {
    number: '01',
    lead: 'Depth',
    tail: 'over speed',
    elaboration: 'Fast answers satisfy the clock; deep inquiries transform the mind. We reject artificial urgency.',
  },
  {
    number: '02',
    lead: 'Creation',
    tail: 'over consumption',
    elaboration: 'Passivity dulls the spirit. We design environments that evoke output rather than infinite intake.',
  },
  {
    number: '03',
    lead: 'Presence',
    tail: 'over distraction',
    elaboration: 'Your uninterrupted focus is your most sacred asset. We treat it with reverent non-encroachment.',
  },
  {
    number: '04',
    lead: 'Meaning',
    tail: 'over metrics',
    elaboration: 'Quantified engagement is an impoverished proxy for resonance. We craft for significance, not retention.',
  },
  {
    number: '05',
    lead: 'People',
    tail: 'over algorithms',
    elaboration: 'Technology should serve human intention, not covertly manipulate human vulnerability.',
  },
];

export const Principles: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="principles"
      className="relative w-full bg-[#FAF9F6] text-black py-36 sm:py-48 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="pb-16 sm:pb-24 border-b border-black/10">
          <span
            id="principles-label"
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F6F6F]"
          >
            AETHERA PRINCIPLES
          </span>
          <h2
            id="principles-heading"
            className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#000000] mt-6"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            We believe in...
          </h2>
        </div>

        {/* The 5 Principles in Large Typography with Generous Whitespace */}
        <div className="divide-y divide-black/10">
          {PRINCIPLES.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.number}
                id={`principle-${item.number}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-12 sm:py-20 group transition-all duration-500 cursor-default"
              >
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
                  {/* Left: Number + Principle Headline */}
                  <div className="flex items-baseline space-x-6 sm:space-x-12">
                    <span className="text-xs sm:text-sm font-mono text-[#6F6F6F] tracking-widest">
                      {item.number} —
                    </span>
                    <h3
                      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#000000] transition-transform duration-300 group-hover:translate-x-3"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      <span>{item.lead}</span>{' '}
                      <span className="italic text-[#6F6F6F] font-light">
                        {item.tail}
                      </span>
                    </h3>
                  </div>

                  {/* Right: Thoughtful Elaboration */}
                  <div className="lg:max-w-md pl-12 sm:pl-18 lg:pl-0">
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 font-light ${
                        isHovered ? 'text-black' : 'text-[#6F6F6F]'
                      }`}
                    >
                      {item.elaboration}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
