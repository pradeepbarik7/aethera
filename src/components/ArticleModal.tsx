import React from 'react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="article-modal-card"
        className="relative w-full max-w-3xl my-8 bg-white text-black rounded-xs shadow-2xl border border-black/10 p-8 sm:p-16 overflow-hidden animate-fade-rise"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-black/10 text-xs font-mono text-[#6F6F6F]">
          <span>{article.category}</span>
          <button
            id="close-article-modal"
            type="button"
            onClick={onClose}
            className="hover:text-black transition-colors"
          >
            [ CLOSE ✕ ]
          </button>
        </div>

        {/* Article Meta */}
        <div className="pt-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#6F6F6F] mb-4">
            <span>ARTICLE {article.number}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl font-normal tracking-tight text-black leading-[1.05]"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            {article.title}
          </h2>

          <p
            className="text-xl sm:text-2xl text-[#6F6F6F] font-light mt-6 italic leading-relaxed"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            "{article.excerpt}"
          </p>
        </div>

        {/* Prose Paragraphs */}
        <div className="mt-12 space-y-6 text-base sm:text-lg text-[#1F1F1F] font-light leading-relaxed border-t border-black/10 pt-10">
          {article.paragraphs.map((p, idx) => (
            <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:mr-2">
              {p}
            </p>
          ))}
        </div>

        {/* Bottom Colophon */}
        <div className="mt-14 pt-8 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#6F6F6F]">
          <span>AETHERA ARCHIVES // {article.number}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-black underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Back to Journal
          </button>
        </div>
      </div>
    </div>
  );
};
