import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenConversation: () => void;
  activeSection: string;
}

const MENU_ITEMS = [
  { label: 'Home', href: '#hero', sectionId: 'hero' },
  { label: 'Studio', href: '#studio', sectionId: 'studio' },
  { label: 'About', href: '#philosophy', sectionId: 'philosophy' },
  { label: 'Journal', href: '#journal', sectionId: 'journal' },
  { label: 'Reach Us', href: '#reach-us', sectionId: 'reach-us' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConversation, activeSection }) => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only reveal the persistent sticky navigation after scrolling PAST the hero section
      const heroThreshold = window.innerHeight * 0.75;
      setShowStickyNav(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (sectionId === 'reach-us') {
      onOpenConversation();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="floating-sticky-header"
      aria-hidden={!showStickyNav}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        showStickyNav
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-white/90 backdrop-blur-md py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-b border-black/[0.04]'
          : 'opacity-0 -translate-y-full pointer-events-none py-4'
      }`}
    >
      <nav
        id="floating-navigation"
        aria-label="Floating Navigation"
        className="flex items-center justify-between px-8 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <a
          id="floating-nav-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="text-3xl tracking-tight text-[#000000] select-none hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          Aethera<sup className="text-sm font-sans align-super font-normal">®</sup>
        </a>

        {/* Desktop Menu Items */}
        <div
          id="floating-nav-links-container"
          className="hidden md:flex items-center space-x-9"
        >
          {MENU_ITEMS.map((item) => {
            const isHome = item.label === 'Home';
            const isActive = activeSection === item.sectionId;
            const isBlack = isHome || isActive;

            return (
              <a
                key={item.label}
                id={`floating-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
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
            id="floating-nav-cta-button"
            type="button"
            onClick={onOpenConversation}
            className="rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-xs font-normal"
          >
            Begin Journey
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="floating-mobile-menu-toggle"
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

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="floating-mobile-navigation-drawer"
          className="md:hidden bg-white/95 backdrop-blur-md px-8 py-6 space-y-4 transition-all animate-fade-rise border-b border-black/5"
        >
          {MENU_ITEMS.map((item) => (
            <a
              key={item.label}
              id={`floating-mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
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
              id="floating-mobile-cta-button"
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConversation();
              }}
              className="w-full text-center rounded-full py-3 text-sm bg-[#000000] text-white hover:opacity-90 transition-opacity"
            >
              Begin Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
