import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TheNoise } from './components/TheNoise';
import { Experience } from './components/Experience';
import { Studio } from './components/Studio';
import { SelectedWork } from './components/SelectedWork';
import { Principles } from './components/Principles';
import { Journal } from './components/Journal';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConversationModal } from './components/ConversationModal';
import { ArticleModal } from './components/ArticleModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem, JournalArticle } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Monitor current scroll section to update navigation active indicators
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'philosophy', 'studio', 'work', 'principles', 'journal', 'reach-us'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="aethera-experience-root"
      className="relative min-h-screen w-full bg-white text-black font-sans selection:bg-black selection:text-white"
    >
      {/* Persistent Editorial Navigation */}
      <Navbar
        onOpenConversation={() => setIsConversationOpen(true)}
        activeSection={activeSection}
      />

      {/* 1. HERO (Preserved exact visual identity and looping video background) */}
      <Hero
        onBeginJourney={() => setIsConversationOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. PHILOSOPHY */}
      <Philosophy />

      {/* 3. THE NOISE */}
      <TheNoise />

      {/* 4. THE AETHERA EXPERIENCE */}
      <Experience />

      {/* 5. STUDIO */}
      <Studio />

      {/* 6. SELECTED WORK / EXPERIMENTS */}
      <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

      {/* 7. AETHERA PRINCIPLES */}
      <Principles />

      {/* 8. JOURNAL */}
      <Journal onSelectArticle={(article) => setSelectedArticle(article)} />

      {/* 9. FINAL CTA */}
      <FinalCTA onBeginConversation={() => setIsConversationOpen(true)} />

      {/* 10. FOOTER */}
      <Footer onOpenConversation={() => setIsConversationOpen(true)} />

      {/* Modals */}
      <ConversationModal
        isOpen={isConversationOpen}
        onClose={() => setIsConversationOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInitiateConversation={() => setIsConversationOpen(true)}
      />
    </div>
  );
}
