import React from 'react';
import { JournalArticle } from '../types';

export const ARTICLES: JournalArticle[] = [
  {
    id: 'the-art-of-doing-nothing',
    number: '01',
    title: 'The Art of Doing Nothing',
    category: 'ESSAY · ATTENTION',
    date: 'OCTOBER 14, 2025',
    readTime: '6 MIN READ',
    excerpt:
      'In a culture that equates continuous movement with moral virtue, deliberate idleness becomes an act of radical quiet defiance.',
    paragraphs: [
      'We have inherited a peculiar superstition: that unmetered time is squandered time. Every idle commute is colonized by podcasts; every pause at a traffic signal invites a reflexive thumb swipe toward illuminated glass.',
      'Yet the mind is not an engine with linear output curves. It resembles far more closely an orchard. Growth occurs during dormancy, in the stillness of winter beneath the snow, where roots slowly untangle without spectator or metrics.',
      'When we surrender the impulse to perpetually produce, something curious happens: true thought re-emerges. We begin to notice the cadence of rain against stone, the subtle inconsistencies in our convictions, the quiet problems that only present themselves when noise recedes.',
      'Aethera is built upon this fundamental conviction: that doing nothing is often the precondition for creating the eternal.',
    ],
  },
  {
    id: 'why-everything-feels-so-loud',
    number: '02',
    title: 'Why Everything Feels So Loud',
    category: 'CRITIQUE · CULTURE',
    date: 'NOVEMBER 02, 2025',
    readTime: '8 MIN READ',
    excerpt:
      'The modern internet did not become cacophonous by accident. It was sculpted by business models that commodify your nervous system.',
    paragraphs: [
      'To understand why contemporary software feels so exhausting, one must examine the substrate upon which it is funded. When a platform’s business model depends on ad auctions measured in fractions of seconds, calmness becomes a structural defect.',
      'Red notification badges, variable reward loops, auto-playing video panes, and manufactured moral outrage are not design oversights; they are precision-engineered cognitive fishing nets.',
      'The antidote is not simply digital detox camps or turning one’s screen monochrome for an afternoon. The antidote is structural: constructing digital architecture that has zero economic incentive to steal your peace.',
      'We must demand tools that welcome us in, provide clarity, and release us back to physical reality unburdened and restored.',
    ],
  },
  {
    id: 'designing-for-attention',
    number: '03',
    title: 'Designing for Attention',
    category: 'SYSTEMS · CRAFT',
    date: 'DECEMBER 18, 2025',
    readTime: '5 MIN READ',
    excerpt:
      'How to build software that respects human cognitive boundaries: tactile physics, intentional friction, and natural silence.',
    paragraphs: [
      'In traditional architecture, the Japanese concept of *Ma* refers to the negative space between structural elements. It is not empty void; it is the silence that allows the temple to breathe.',
      'Software design has almost entirely forgotten *Ma*. Every pixel is treated as real estate to be settled; every scroll event is tracked; every interaction triggers a fanfare of micro-animations demanding applause.',
      'When we design for attention at Aethera, we begin with subtraction. We ask what can be removed until only the purest essence of the user’s intent remains.',
      'The result is software that feels like natural timber or polished river stone: quiet, tactile, respectful of your human limits, and permanently enduring.',
    ],
  },
];

interface JournalProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const Journal: React.FC<JournalProps> = ({ onSelectArticle }) => {
  return (
    <section
      id="journal"
      className="relative w-full bg-white text-black py-32 sm:py-44 px-6 sm:px-12 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-black/10 gap-6">
          <div>
            <span
              id="journal-label"
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F6F6F]"
            >
              AETHERA JOURNAL
            </span>
            <h2
              id="journal-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#000000] mt-4"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Thoughts worth <span className="italic text-[#6F6F6F]">keeping.</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-[#6F6F6F]">
            [ AN INDEPENDENT PUBLICATION ]
          </span>
        </div>

        {/* 3 Articles Editorial Layout */}
        <div className="mt-12 divide-y divide-black/10">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`article-${article.id}`}
              onClick={() => onSelectArticle(article)}
              className="py-12 sm:py-16 group cursor-pointer transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
                {/* Meta: Number, Date, Category */}
                <div className="lg:col-span-4 flex flex-col space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-mono text-[#6F6F6F]">
                    <span>ARTICLE {article.number}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-black/80">
                    {article.category}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#000000] group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed font-light mt-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read CTA */}
                <div className="lg:col-span-2 flex lg:justify-end items-center">
                  <span className="inline-flex items-center space-x-2 text-sm font-medium text-black group-hover:underline underline-offset-8 transition-all">
                    <span>Read</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 font-mono">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
