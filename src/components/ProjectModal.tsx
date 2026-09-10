import React from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInitiateConversation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInitiateConversation,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-4xl my-8 bg-white text-black rounded-xs shadow-2xl border border-black/10 overflow-hidden animate-fade-rise"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full bleed image header */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close button on image */}
          <button
            id="close-project-modal"
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-6 right-6 text-xs font-mono tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/80 transition-colors"
          >
            [ CLOSE ✕ ]
          </button>

          {/* Overlay Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/70">
              {project.number} · {project.category} · {project.year}
            </span>
            <h2
              className="text-4xl sm:text-6xl font-normal tracking-tight mt-1 text-white"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-14">
          <p
            className="text-2xl sm:text-3xl text-black font-light leading-relaxed italic"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            "{project.subtitle}"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10 pt-10 border-t border-black/10">
            {/* Left Narrative */}
            <div className="md:col-span-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#6F6F6F] mb-4">
                THE SPECIFICATION & INQUIRY
              </h4>
              <p className="text-base sm:text-lg text-[#1F1F1F] font-light leading-relaxed whitespace-pre-line">
                {project.fullNarrative}
              </p>
            </div>

            {/* Right Meta Column */}
            <div className="md:col-span-4 flex flex-col space-y-6 border-l border-black/10 md:pl-8">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#6F6F6F] uppercase block mb-2">
                  DISCIPLINES INVOLVED
                </span>
                <ul className="space-y-1.5">
                  {project.disciplines.map((d) => (
                    <li key={d} className="text-xs font-mono text-black">
                      • {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#6F6F6F] uppercase block mb-2">
                  STATUS
                </span>
                <span className="text-xs font-mono text-[#6F6F6F]">
                  ACTIVE STUDY & DEPLOYED PROTOCOL
                </span>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInitiateConversation();
                  }}
                  className="w-full text-center rounded-full py-3 text-xs font-mono tracking-wider uppercase bg-black text-white hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Inquire on this work →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
