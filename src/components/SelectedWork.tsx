import React from 'react';
import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'stillness',
    number: 'PROJECT 01',
    title: 'Stillness',
    subtitle: 'A digital space for focused work.',
    year: '2026',
    category: 'DIGITAL ENVIRONMENT',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    description:
      'A sanctuary designed to isolate consciousness from cognitive friction. Zero notifications, dynamic natural sound synthesis, and text canvases that adjust tone based on ambient sunlight.',
    fullNarrative:
      'Stillness was conceived during an era of peak digital exhaustion. Rather than optimizing for clicks or retention metrics, Stillness measures success by how quickly the user forgets the interface exists. Built on custom low-level audio synthesizers and an adaptive typographic layout, it creates an impenetrable haven for long-form writers, researchers, and composers.',
    disciplines: ['Calm Interface Architecture', 'Generative Acoustics', 'Offline Data Sovereignty'],
  },
  {
    id: 'elsewhere',
    number: 'PROJECT 02',
    title: 'Elsewhere',
    subtitle: 'An exploration of digital environments.',
    year: '2025',
    category: 'SPATIAL SIMULATION',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    description:
      'A series of quiet digital rooms sculpted around real-world weather patterns, slow light gradients, and minimalist architectural principles.',
    fullNarrative:
      'Elsewhere investigates how spatial computation and ambient lighting can alter mental states without demanding direct manipulation. By streaming live meteorological data into soft atmospheric shaders, users can experience dawn light from the Scottish Highlands or twilight mist from Kyoto while working from anywhere on earth.',
    disciplines: ['Procedural Lighting', 'Spatial Ambience', 'Minimalist Scenography'],
  },
  {
    id: 'untitled-003',
    number: 'PROJECT 03',
    title: 'Untitled / 003',
    subtitle: 'An experiment in attention and interaction.',
    year: '2026',
    category: 'BEHAVIORAL PROTOTYPE',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    description:
      'An investigation into slowing down software interactions: intentional friction, tactile response times, and contemplative feedback loops.',
    fullNarrative:
      'What happens when software refuses to rush you? Untitled / 003 introduces deliberate delays modeled on human breath. By requiring physical gestures to settle before revealing new information, the experiment tested cognitive retention in over 4,000 participants, showing a 62% reduction in perceived stress during intensive analysis.',
    disciplines: ['Intentional Friction', 'Cognitive Ergonomics', 'Kinetic Typography'],
  },
];

interface SelectedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section
      id="work"
      className="relative w-full bg-white text-black py-32 sm:py-44 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-20 border-b border-black/10 gap-6">
          <div>
            <span
              id="work-label"
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F6F6F]"
            >
              SELECTED WORK & EXPERIMENTS
            </span>
            <h2
              id="work-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#000000] mt-4"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Things we’ve brought into <span className="italic text-[#6F6F6F]">existence.</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-[#6F6F6F]">
            [ 03 ARCHIVED ARTIFACTS ]
          </span>
        </div>

        {/* Project Showcases */}
        <div className="mt-20 space-y-32 sm:space-y-44">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Large Image Showcase (Visually Dominant) */}
                  <div
                    className={`w-full overflow-hidden rounded-xs bg-[#111] shadow-xs relative ${
                      isEven
                        ? 'lg:col-span-7 lg:order-2'
                        : 'lg:col-span-7 lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>

                    {/* Image Meta Bar */}
                    <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-white/80 text-[11px] font-mono tracking-widest pointer-events-none">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`flex flex-col justify-center ${
                      isEven
                        ? 'lg:col-span-5 lg:order-1'
                        : 'lg:col-span-5 lg:order-2'
                    }`}
                  >
                    <span className="text-xs font-mono tracking-[0.25em] text-[#6F6F6F] uppercase mb-3">
                      {project.number}
                    </span>

                    <h3
                      className="text-4xl sm:text-6xl font-normal tracking-tight text-[#000000] group-hover:translate-x-1 transition-transform duration-300"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-xl sm:text-2xl text-[#6F6F6F] font-light mt-2"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      "{project.subtitle}"
                    </p>

                    <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed font-light mt-6">
                      {project.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                      <span className="inline-flex items-center space-x-2 text-sm font-medium text-black group-hover:underline underline-offset-8 transition-all">
                        <span>Explore</span>
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 font-mono">
                          →
                        </span>
                      </span>

                      <span className="text-xs font-mono text-[#6F6F6F]/60 uppercase">
                        [ VIEW DISCOVERY ]
                      </span>
                    </div>
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
