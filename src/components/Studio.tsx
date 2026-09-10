import React, { useState } from 'react';

const DISCIPLINES = [
  {
    number: '01',
    title: 'DIGITAL EXPERIENCES',
    concept: 'Spatial simplicity & tactile interfaces',
    narrative:
      'We architect calm operating environments, focus workspaces, and quiet digital chambers engineered to preserve cognitive momentum without visual clutter.',
    capabilities: ['Calm UI Systems', 'Generative Writing Chambers', 'Fluid Micro-Interactions'],
    ambientImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'CREATIVE TECHNOLOGY',
    concept: 'Invisible engines & organic computing',
    narrative:
      'Where custom shaders, real-time spatial acoustics, and offline-first local architectures converge into software that breathes with human rhythm.',
    capabilities: ['Ambient Audio Engines', 'Low-Latency Interaction', 'Offline-First Resilience'],
    ambientImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'VISUAL WORLDS',
    concept: 'Cinematic atmosphere & contemplative art',
    narrative:
      'Crafting hyper-refined visual landscapes, subtle 3D lighting studies, and editorial directions that ground digital instruments in natural stillness.',
    capabilities: ['Atmospheric Direction', 'Procedural Horizons', 'Editorial Scenography'],
    ambientImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const Studio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section
      id="studio"
      className="relative w-full bg-[#FAF9F6] text-black py-32 sm:py-44 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 border-b border-black/10">
          <div className="lg:col-span-8">
            <span
              id="studio-label"
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F6F6F]"
            >
              AETHERA STUDIO
            </span>
            <h2
              id="studio-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#000000] mt-4"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Where ideas become <span className="italic text-[#6F6F6F]">tangible.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-end">
            <p
              id="studio-description"
              className="text-base sm:text-lg text-[#6F6F6F] font-light leading-relaxed"
            >
              Aethera Studio is where technology, design and imagination meet.
            </p>
          </div>
        </div>

        {/* Editorial List Layout (No Generic Cards) */}
        <div className="mt-16 space-y-0">
          {DISCIPLINES.map((item, index) => {
            const isSelected = activeCategory === index;

            return (
              <div
                key={item.number}
                id={`studio-discipline-${item.number}`}
                onMouseEnter={() => setActiveCategory(index)}
                onClick={() => setActiveCategory(index)}
                className="group border-b border-black/10 py-12 sm:py-16 transition-all duration-500 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
                  {/* Number & Massive Title */}
                  <div className="lg:col-span-7 flex items-baseline space-x-6 sm:space-x-8">
                    <span className="text-xs font-mono text-[#6F6F6F] tracking-widest">
                      {item.number}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight transition-all duration-300 ${
                        isSelected
                          ? 'text-[#000000] translate-x-2'
                          : 'text-[#6F6F6F] group-hover:text-[#000000]'
                      }`}
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Concept & Capabilities */}
                  <div className="lg:col-span-5 flex flex-col pl-10 sm:pl-14 lg:pl-0">
                    <span className="text-xs uppercase tracking-[0.2em] font-mono text-black font-medium mb-3">
                      {item.concept}
                    </span>
                    <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed font-light mb-6">
                      {item.narrative}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F6F] px-2.5 py-1 bg-black/5 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ambient Image Preview on Active Selection */}
                {isSelected && (
                  <div className="mt-8 pt-4 overflow-hidden animate-fade-rise">
                    <div className="relative w-full h-48 sm:h-64 rounded-xs overflow-hidden">
                      <img
                        src={item.ambientImage}
                        alt={item.title}
                        className="w-full h-full object-cover object-center filter brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 text-white text-xs font-mono tracking-widest">
                        STUDIO ARTIFACT // {item.number}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
