import React from 'react';

interface FinalCTAProps {
  onBeginConversation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBeginConversation }) => {
  return (
    <section
      id="reach-us"
      className="relative w-full bg-[#0D0D0D] text-white py-36 sm:py-52 px-6 sm:px-12 overflow-hidden select-none"
    >
      {/* Subtle Atmospheric Night Mountain Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-luminosity overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
          alt="Atmospheric nocturnal horizon"
          className="w-full h-full object-cover object-center filter blur-xs"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      {/* Dramatic Typography & Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <span
          id="final-cta-label"
          className="text-xs font-mono uppercase tracking-[0.3em] text-[#8E8E8E] mb-6"
        >
          [ INITIATION ]
        </span>

        <h2
          id="final-cta-heading"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.98] text-white"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          Have something{' '}
          <span className="italic text-[#8E8E8E]">worth building?</span>
        </h2>

        <p
          id="final-cta-supporting-text"
          className="text-lg sm:text-2xl text-[#8E8E8E] font-light max-w-2xl mt-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          Let’s create something that deserves to exist.
        </p>

        {/* CTA Button */}
        <div className="mt-14 sm:mt-16">
          <button
            id="final-cta-button"
            type="button"
            onClick={onBeginConversation}
            className="group rounded-full px-12 sm:px-16 py-5 text-sm sm:text-base bg-white text-black font-medium tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span className="flex items-center space-x-3">
              <span>Begin a Conversation</span>
              <span className="font-mono text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>

        {/* Quiet Footnote */}
        <p className="text-xs font-mono text-[#8E8E8E]/60 mt-12 tracking-wider">
          ESTABLISHED TO SERVE REVERENCE, LONGEVITY, AND CLARITY
        </p>
      </div>
    </section>
  );
};
