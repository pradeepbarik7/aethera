import React, { useState, useEffect, useRef } from 'react';

const NOISE_WORDS = [
  { word: 'notifications', x: '12%', y: '18%', size: 'text-lg sm:text-xl', rotate: '-3deg', delay: 100 },
  { word: 'deadlines', x: '78%', y: '22%', size: 'text-xl sm:text-2xl', rotate: '4deg', delay: 300 },
  { word: 'opinions', x: '18%', y: '72%', size: 'text-base sm:text-xl', rotate: '-2deg', delay: 500 },
  { word: 'comparison', x: '82%', y: '68%', size: 'text-lg sm:text-2xl', rotate: '3deg', delay: 700 },
  { word: 'scrolling', x: '46%', y: '15%', size: 'text-xl sm:text-2xl', rotate: '-1deg', delay: 900 },
  { word: 'distraction', x: '68%', y: '82%', size: 'text-2xl sm:text-3xl', rotate: '2deg', delay: 1100 },
  { word: 'noise', x: '24%', y: '42%', size: 'text-3xl sm:text-4xl', rotate: '-4deg', delay: 1300 },
  { word: 'unread (1,842)', x: '72%', y: '48%', size: 'text-sm font-mono', rotate: '1deg', delay: 1500 },
  { word: 'algorithm', x: '35%', y: '84%', size: 'text-base', rotate: '-2deg', delay: 1700 },
];

export const TheNoise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // noiseLevel: 100 = full noise, 0 = completely dissolved/silent
  const [noiseLevel, setNoiseLevel] = useState<number>(85);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isAutomatingDissolve, setIsAutomatingDissolve] = useState(false);

  // Subtle scroll accumulation and dissolution detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || hasInteracted || isAutomatingDissolve) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress through this section (0 to 1)
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.6), 0), 1);
        
        if (progress < 0.45) {
          // Accumulating phase
          const target = Math.min(100, Math.round(progress * 200));
          setNoiseLevel(target);
        } else {
          // Dissolving phase
          const dissolveProgress = (progress - 0.45) / 0.55;
          const target = Math.max(0, Math.round(90 * (1 - dissolveProgress)));
          setNoiseLevel(target);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasInteracted, isAutomatingDissolve]);

  const handleDissolveClick = () => {
    setHasInteracted(true);
    setIsAutomatingDissolve(true);

    const startLevel = noiseLevel;
    const duration = 1400; // 1.4 seconds smooth ease
    const startTime = performance.now();

    const animateDissolve = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.max(0, Math.round(startLevel * (1 - eased)));

      setNoiseLevel(current);

      if (progress < 1) {
        requestAnimationFrame(animateDissolve);
      } else {
        setIsAutomatingDissolve(false);
      }
    };

    requestAnimationFrame(animateDissolve);
  };

  const handleResetNoise = () => {
    setHasInteracted(true);
    setNoiseLevel(85);
  };

  const isQuiet = noiseLevel < 15;

  return (
    <section
      id="the-noise"
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 py-36 bg-[#FAF9F6] text-black overflow-hidden transition-colors duration-1000 select-none"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: isQuiet
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(250,249,246,0.9) 100%)'
            : 'radial-gradient(circle at 50% 50%, rgba(240,238,233,0.6) 0%, rgba(250,249,246,1) 100%)',
        }}
      />

      {/* Floating Noise Words Canvas Layer */}
      <div
        id="noise-words-canvas"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {NOISE_WORDS.map((item, idx) => {
          // Calculate individual word opacity and blur based on noiseLevel
          const factor = noiseLevel / 100;
          const wordOpacity = Math.max(0, Math.min(0.85, factor * (0.4 + (idx % 4) * 0.15)));
          const blurValue = (1 - factor) * 12;

          return (
            <div
              key={item.word}
              className={`absolute font-sans font-light tracking-wider text-[#1F1F1F] transition-all duration-700 ease-out`}
              style={{
                left: item.x,
                top: item.y,
                transform: `rotate(${item.rotate}) scale(${0.85 + factor * 0.25})`,
                opacity: wordOpacity,
                filter: `blur(${blurValue}px)`,
                pointerEvents: 'none',
              }}
            >
              <span className={`${item.size} select-none`}>{item.word}</span>
            </div>
          );
        })}
      </div>

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Step 1: Active Noise State */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isQuiet ? 'opacity-0 scale-95 pointer-events-none -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F6F6F]">
            [ THE ACCUMULATION ]
          </span>

          <h2
            id="noise-headline"
            className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#000000] mt-6"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            The world is getting louder.
          </h2>

          <p className="text-base sm:text-lg text-[#6F6F6F] max-w-md mx-auto mt-6 font-light leading-relaxed">
            Constant claims on your cognitive reserves leave no room for depth.
          </p>

          {/* Interactive Dissolve Control */}
          <div className="mt-12 flex flex-col items-center space-y-4">
            <button
              id="dissolve-noise-button"
              type="button"
              onClick={handleDissolveClick}
              disabled={isAutomatingDissolve}
              className="group relative rounded-full px-8 py-3.5 text-sm bg-black text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Dissolve the noise</span>
                <span className="text-xs font-mono opacity-60">→</span>
              </span>
            </button>
            <span className="text-xs font-mono text-[#6F6F6F]/60">
              or scroll gently to allow stillness to enter
            </span>
          </div>
        </div>

        {/* Step 2: The Quiet Revelation State */}
        <div
          id="quiet-revelation"
          className={`absolute transition-all duration-1000 ease-out flex flex-col items-center justify-center ${
            isQuiet
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none translate-y-6'
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#6F6F6F]">
            [ THE REVELATION ]
          </span>

          <h3
            id="quiet-headline"
            className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#000000] mt-6 leading-none"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            So we built somewhere <span className="italic text-[#6F6F6F]">quieter.</span>
          </h3>

          <p className="text-base sm:text-xl text-[#6F6F6F] max-w-xl mx-auto mt-8 font-light leading-relaxed">
            A sanctuary where clarity precedes action, and technology steps aside so profound thinking can take root.
          </p>

          <div className="mt-10 flex items-center space-x-6">
            <a
              href="#experience"
              className="text-sm font-normal text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Explore the sanctuary ↓
            </a>
            <button
              type="button"
              onClick={handleResetNoise}
              className="text-xs font-mono text-[#6F6F6F] hover:text-black transition-colors underline underline-offset-4"
            >
              Recall the noise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
