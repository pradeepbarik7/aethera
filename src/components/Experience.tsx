import React, { useState } from 'react';
import { ExperienceItem } from '../types';

const EXPERIENCES: ExperienceItem[] = [
  {
    number: '01',
    title: 'FOCUS',
    tagline: 'A place to disappear from the noise.',
    description:
      'Immersive digital environments tuned to eradicate peripheral distraction. Ambient states, zero intrusive badges, and adaptive interfaces that dissolve into the periphery as deep concentration takes command.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    ambientNote: 'ALTITUDE 2,840M · STILL AIR · ZERO LATENCY',
  },
  {
    number: '02',
    title: 'CREATE',
    tagline: 'Tools and spaces designed for uninterrupted thought.',
    description:
      'Expressive canvas architectures where ideas flow without friction. Built with tactile typography, instant responsiveness, and an unwavering commitment to creative agency over algorithmic nudge loops.',
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop',
    ambientNote: 'MONOLITHIC ORDER · RAW SILENCE · NATURAL GRAIN',
  },
  {
    number: '03',
    title: 'REFLECT',
    tagline: 'Ideas worth keeping deserve somewhere to live.',
    description:
      'An archival sanctuary for your most treasured reflections, working drafts, and foundational questions. Resilient, private, and decoupled from the viral hype cycles of the public web.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    ambientNote: 'SPECULAR WATER · UNBROKEN REPOSE · CLARITY',
  },
  {
    number: '04',
    title: 'CONNECT',
    tagline: 'Meaningful conversations over endless scrolling.',
    description:
      'Asynchronous dialogues rooted in substance, patience, and mutual intellectual curiosity. No follower counts, no performative validation—only kindred minds exchanging profound thoughts.',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop',
    ambientNote: 'HORIZON EXPANSION · SHARED SOLITUDE · INTENTION',
  },
];

interface ExperienceProps {
  onSelectExperience?: (exp: ExperienceItem) => void;
}

export const Experience: React.FC<ExperienceProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const current = EXPERIENCES[activeTab];

  return (
    <section
      id="experience"
      className="relative w-full bg-white text-black py-32 sm:py-44 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-black/10 gap-6">
          <div>
            <span
              id="experience-label"
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F6F6F]"
            >
              THE AETHERA EXPERIENCE
            </span>
            <h2
              id="experience-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#000000] mt-4"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Four environments for the <span className="italic text-[#6F6F6F]">mind.</span>
            </h2>
          </div>

          <div className="text-sm font-mono text-[#6F6F6F]">
            [ 0{activeTab + 1} / 04 ]
          </div>
        </div>

        {/* Experience Selector Tabs (Minimalist Luxury Tabs) */}
        <div className="flex flex-wrap gap-2 sm:gap-4 pt-8 pb-14 border-b border-black/5">
          {EXPERIENCES.map((exp, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={exp.number}
                id={`experience-tab-${exp.number}`}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-3 px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wider uppercase font-mono transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-[#6F6F6F] hover:text-black hover:bg-black/5'
                }`}
              >
                <span>{exp.number}</span>
                <span>—</span>
                <span className="font-sans font-medium">{exp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Editorial Display (Large Visual Area + Art Directed Composition) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#6F6F6F] mb-3">
              EXPERIENCE {current.number}
            </span>

            <h3
              className="text-3xl sm:text-5xl font-normal text-[#000000] leading-[1.08] tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              {current.tagline}
            </h3>

            <p className="text-base sm:text-lg text-[#6F6F6F] font-light leading-relaxed mt-6">
              {current.description}
            </p>

            <div className="pt-8 mt-8 border-t border-black/5 flex flex-col space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#6F6F6F] uppercase">
                ATMOSPHERE
              </span>
              <span className="text-xs font-mono text-[#000000]/80">
                {current.ambientNote}
              </span>
            </div>

            {/* Micro Navigation */}
            <div className="mt-10 flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : EXPERIENCES.length - 1))}
                aria-label="Previous experience"
                className="text-xs font-mono text-[#6F6F6F] hover:text-black transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>←</span>
                <span>PREVIOUS</span>
              </button>
              <span className="text-xs font-mono text-black/20">/</span>
              <button
                type="button"
                onClick={() => setActiveTab((prev) => (prev < EXPERIENCES.length - 1 ? prev + 1 : 0))}
                aria-label="Next experience"
                className="text-xs font-mono text-[#6F6F6F] hover:text-black transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>NEXT</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Large Visual Area (Dreamlike Landscape) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              id="experience-visual-canvas"
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-sm bg-[#1A1A1A] group shadow-sm"
            >
              <img
                key={current.image}
                src={current.image}
                alt={`${current.title} — ${current.tagline}`}
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-all duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Subtle Overlay Note */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90 z-10 pointer-events-none">
                <span className="text-xs font-mono tracking-widest uppercase">
                  {current.title} // {current.number}
                </span>
                <span className="text-[11px] font-mono tracking-wider opacity-80 hidden sm:inline">
                  AETHERA ATMOSPHERES
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* All 4 At-A-Glance Micro Grid */}
        <div className="mt-24 pt-12 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.number}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer group transition-opacity duration-300 ${
                activeTab === idx ? 'opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <span className="text-xs font-mono text-[#6F6F6F]">
                {exp.number} —
              </span>
              <h4
                className="text-xl font-normal text-[#000000] mt-1 group-hover:underline decoration-1 underline-offset-4"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                {exp.title}
              </h4>
              <p className="text-xs text-[#6F6F6F] mt-2 line-clamp-2 leading-relaxed">
                {exp.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
