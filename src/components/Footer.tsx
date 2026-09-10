import React from 'react';

interface FooterProps {
  onOpenConversation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConversation }) => {
  const handleScrollTo = (id: string) => {
    if (id === 'reach-us') {
      onOpenConversation();
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#0D0D0D] text-white pt-20 pb-16 px-6 sm:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[300px]">
        {/* Top Grid: Wordmark & Quote vs Navigation & Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Wordmark & Quote */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                className="text-4xl tracking-tight text-white select-none inline-block hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Aethera<sup className="text-sm font-sans align-super font-normal">®</sup>
              </a>
              <p
                className="text-2xl sm:text-3xl text-[#8E8E8E] font-light mt-6 leading-snug whitespace-pre-line max-w-sm"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                "Beyond silence,{'\n'}we build the eternal."
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8E8E8E] mb-2">
              NAVIGATION
            </span>
            {[
              { name: 'Home', target: 'hero' },
              { name: 'Studio', target: 'studio' },
              { name: 'About', target: 'philosophy' },
              { name: 'Journal', target: 'journal' },
              { name: 'Reach Us', target: 'reach-us' },
            ].map((link) => (
              <button
                key={link.name}
                id={`footer-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => handleScrollTo(link.target)}
                className="text-left text-sm text-[#8E8E8E] hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social / Direct Contacts */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8E8E8E] mb-2">
              PRESENCE
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8E8E8E] hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8E8E8E] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={onOpenConversation}
              className="text-left text-sm text-[#8E8E8E] hover:text-white transition-colors cursor-pointer"
            >
              Email
            </button>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8E8E8E]/60 gap-4">
          <span>© 2026 Aethera. All rights reserved.</span>
          <span>SILENT ARCHITECTURES · CONTEMPORARY ART DIRECTION</span>
        </div>
      </div>
    </footer>
  );
};
