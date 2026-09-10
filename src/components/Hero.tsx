import React, { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

const MENU_ITEMS = [
  { label: 'Home', href: '#hero', sectionId: 'hero' },
  { label: 'Studio', href: '#studio', sectionId: 'studio' },
  { label: 'About', href: '#philosophy', sectionId: 'philosophy' },
  { label: 'Journal', href: '#journal', sectionId: 'journal' },
  { label: 'Reach Us', href: '#reach-us', sectionId: 'reach-us' },
];

interface HeroProps {
  onBeginJourney: () => void;
  activeSection: string;
}

export const Hero: React.FC<HeroProps> = ({ onBeginJourney, activeSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const monitorLoop = () => {
      if (video && !video.paused && !video.ended) {
        const currentTime = video.currentTime;
        const duration = video.duration;

        if (duration && duration > 0 && !isNaN(duration)) {
          const fadeDuration = 0.5;
          let calculatedOpacity = 1;

          if (currentTime < fadeDuration) {
            // Fade in over 0.5s at the start (opacity 0 to 1)
            calculatedOpacity = Math.max(0, Math.min(1, currentTime / fadeDuration));
          } else if (currentTime > duration - fadeDuration) {
            // Fade out over 0.5s before the end (opacity 1 to 0)
            calculatedOpacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeDuration));
          } else {
            calculatedOpacity = 1;
          }

          video.style.opacity = calculatedOpacity.toFixed(4);
        }
      }

      animationFrameId = requestAnimationFrame(monitorLoop);
    };

    animationFrameId = requestAnimationFrame(monitorLoop);

    const handleEnded = () => {
      if (!video) return;
      // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
      video.style.opacity = '0';
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {
          // Handled silently if autoplay restricted
        });
      }, 100);
    };

    video.addEventListener('ended', handleEnded);

    video.play().catch(() => {
      // Browser autoplay policy
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (sectionId === 'reach-us') {
      onBeginJourney();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-start bg-white"
    >
      {/* Background video layer (z-0) */}
      <div
        id="video-background-layer"
        className="absolute w-full z-0 overflow-hidden pointer-events-none"
        style={{
          top: '300px',
          inset: 'auto 0 0 0',
          height: 'calc(100% - 300px)',
          minHeight: '520px',
        }}
      >
        <video
          id="cinematic-background-video"
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-75"
          style={{ opacity: 0 }}
        />

        {/* Seamless Soft Gradient Overlay on Video */}
        <div
          id="video-gradient-overlay"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 8%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0.95) 92%, #ffffff 100%)',
          }}
        />
      </div>

      {/* Primary Navigation Bar integrated in normal flow (z-10) - NO hard border line */}
      <header id="hero-main-header" className="relative z-10 w-full">
        <nav
          id="hero-main-navigation"
          aria-label="Main Navigation"
          className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
        >
          {/* Logo */}
          <a
            id="hero-nav-logo"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero', 'hero')}
            className="text-3xl tracking-tight text-[#000000] select-none hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Aethera<sup className="text-sm font-sans align-super font-normal">®</sup>
          </a>

          {/* Desktop Menu Items */}
          <div
            id="hero-nav-links-container"
            className="hidden md:flex items-center space-x-9"
          >
            {MENU_ITEMS.map((item) => {
              const isHome = item.label === 'Home';
              const isActive = activeSection === item.sectionId;
              const isBlack = isHome || isActive;

              return (
                <a
                  key={item.label}
                  id={`hero-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                  className={`text-sm transition-colors duration-200 cursor-pointer ${
                    isBlack
                      ? 'text-[#000000] font-medium'
                      : 'text-[#6F6F6F] hover:text-[#000000]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button
              id="hero-nav-cta-button"
              type="button"
              onClick={onBeginJourney}
              className="rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-xs font-normal"
            >
              Begin Journey
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="hero-mobile-menu-toggle"
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#000000] hover:text-[#6F6F6F] transition-colors focus:outline-hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div
            id="hero-mobile-navigation-drawer"
            className="md:hidden bg-white/95 backdrop-blur-md px-8 py-6 space-y-4 transition-all animate-fade-rise border-b border-black/5"
          >
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                id={`hero-mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className={`block text-base py-1 transition-colors ${
                  activeSection === item.sectionId || item.label === 'Home'
                    ? 'text-[#000000] font-medium'
                    : 'text-[#6F6F6F] hover:text-[#000000]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBeginJourney();
                }}
                className="w-full text-center rounded-full py-3 text-sm bg-[#000000] text-white hover:opacity-90 transition-opacity"
              >
                Begin Journey
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content Section (z-10) with exact intended spacing */}
      <div
        id="hero-content"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        {/* Headline */}
        <h1
          id="hero-headline"
          className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal animate-fade-rise text-[#000000]"
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
          }}
        >
          Beyond{' '}
          <span className="italic text-[#6F6F6F]">silence,</span> we build{' '}
          <span className="italic text-[#6F6F6F]">the eternal.</span>
        </h1>

        {/* Description */}
        <p
          id="hero-description"
          className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay"
        >
          Building platforms for brilliant minds, fearless makers, and thoughtful souls.
          Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        {/* Hero CTA Button */}
        <button
          id="hero-cta-button"
          type="button"
          onClick={onBeginJourney}
          className="rounded-full px-14 py-5 text-base mt-12 bg-[#000000] text-[#FFFFFF] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm animate-fade-rise-delay-2"
        >
          Begin Journey
        </button>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="relative z-10 mx-auto mt-auto pb-10 flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#6F6F6F] font-mono mb-2">
          Scroll to explore
        </span>
        <div className="w-[1px] h-8 bg-black/20 overflow-hidden">
          <div className="w-full h-full bg-black/60 animate-pulse-gentle" />
        </div>
      </div>
    </section>
  );
};
