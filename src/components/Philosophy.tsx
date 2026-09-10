import React, { useState } from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'LESS NOISE.',
    descriptor: 'Subtracting the non-essential',
    reflection: 'Reclaiming mental sovereignty by shedding synthetic urgencies, phantom pings, and superficial metrics.',
  },
  {
    number: '02',
    title: 'DEEPER WORK.',
    descriptor: 'Protecting continuous thought',
    reflection: 'Honoring sustained cognitive immersion where profound discoveries, masterpieces, and enduring insights are born.',
  },
  {
    number: '03',
    title: 'MEANINGFUL CREATION.',
    descriptor: 'Craft that outlasts the moment',
    reflection: 'Rejecting disposable ephemera in favor of timeless artifacts built with intentionality, restraint, and reverence.',
  },
  {
    number: '04',
    title: 'A LIFE WITH INTENTION.',
    descriptor: 'Presence as the ultimate luxury',
    reflection: 'Architecting tools that recede gracefully, leaving you present with your ideas, your environment, and those you love.',
  },
];

export const Philosophy: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="philosophy"
      className="relative w-full bg-white text-black py-32 sm:py-44 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Eyebrow & Coordinates */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-black/5 text-[#6F6F6F]">
          <span
            id="philosophy-label"
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-mono font-medium text-[#6F6F6F]"
          >
            THE AETHERA PHILOSOPHY
          </span>
          <span className="text-xs font-mono text-[#6F6F6F]/60 mt-2 sm:mt-0">
            [ ARCHITECTURE OF INTENTIONALITY ]
          </span>
        </div>

        {/* Large Heading & Supporting Copy */}
        <div className="pt-16 pb-24 sm:pb-36 max-w-5xl">
          <h2
            id="philosophy-heading"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-[#000000]"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            A <span className="italic text-[#6F6F6F]">quieter</span> way to exist.
          </h2>

          <div className="mt-10 sm:mt-14 max-w-2xl">
            <p
              id="philosophy-supporting-copy"
              className="text-xl sm:text-2xl md:text-3xl text-[#6F6F6F] font-light leading-relaxed whitespace-pre-line"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              In a world designed to demand your attention,{'\n'}
              <span className="text-[#000000] font-normal">Aethera exists to give it back.</span>
            </p>
          </div>
        </div>

        {/* Four Typographic Tenets (Generous Whitespace, No Basic Cards) */}
        <div id="philosophy-pillars" className="space-y-0">
          {PILLARS.map((pillar, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={pillar.number}
                id={`philosophy-pillar-${pillar.number}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-t border-black/10 py-10 sm:py-14 transition-colors duration-500 cursor-default"
              >
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
                  {/* Number & Primary Heading */}
                  <div className="flex items-baseline space-x-6 sm:space-x-10">
                    <span className="text-xs sm:text-sm font-mono text-[#6F6F6F] tracking-wider">
                      {pillar.number}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight transition-transform duration-500 ${
                        isHovered ? 'translate-x-3 text-[#000000]' : 'text-[#000000]'
                      }`}
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Reflection & Descriptor */}
                  <div className="lg:max-w-md xl:max-w-lg pl-10 sm:pl-16 lg:pl-0">
                    <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#6F6F6F] mb-2">
                      {pillar.descriptor}
                    </p>
                    <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed font-light">
                      {pillar.reflection}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  );
};
