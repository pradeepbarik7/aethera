import React, { useState } from 'react';

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConversationModal: React.FC<ConversationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Digital Experiences',
    vision: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      interest: 'Digital Experiences',
      vision: '',
    });
    onClose();
  };

  return (
    <div
      id="conversation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        id="conversation-modal-card"
        className="relative w-full max-w-2xl bg-[#FAF9F6] text-black rounded-xs shadow-2xl border border-black/10 p-8 sm:p-14 overflow-hidden animate-fade-rise"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-conversation-modal"
          type="button"
          onClick={onClose}
          aria-label="Close conversation modal"
          className="absolute top-6 right-6 text-sm font-mono text-[#6F6F6F] hover:text-black transition-colors"
        >
          [ CLOSE ✕ ]
        </button>

        {!submitted ? (
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#6F6F6F]">
              INITIATE DIALOGUE
            </span>

            <h3
              className="text-3xl sm:text-5xl font-normal text-[#000000] tracking-tight mt-3"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Begin a <span className="italic text-[#6F6F6F]">conversation.</span>
            </h3>

            <p className="text-sm text-[#6F6F6F] font-light mt-3 leading-relaxed">
              Tell us about what you are seeking to build, create, or quiet. We read every word with intention.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6F6F6F] mb-2">
                  Your Name
                </label>
                <input
                  id="dialogue-name"
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-xs text-sm focus:outline-hidden focus:border-black transition-colors placeholder:text-black/25"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6F6F6F] mb-2">
                  Email Address
                </label>
                <input
                  id="dialogue-email"
                  type="email"
                  required
                  placeholder="maya@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-xs text-sm focus:outline-hidden focus:border-black transition-colors placeholder:text-black/25"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6F6F6F] mb-2">
                  Sphere of Collaboration
                </label>
                <select
                  id="dialogue-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-xs text-sm focus:outline-hidden focus:border-black transition-colors text-black"
                >
                  <option value="Digital Experiences">Digital Experiences & Focus Workspaces</option>
                  <option value="Creative Technology">Creative Technology & Ambient Systems</option>
                  <option value="Visual Worlds">Visual Worlds & Editorial Scenography</option>
                  <option value="General Inquiry">General Philosophical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6F6F6F] mb-2">
                  Your Vision or Question
                </label>
                <textarea
                  id="dialogue-vision"
                  rows={4}
                  required
                  placeholder="Share the nature of the inquiry..."
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-xs text-sm focus:outline-hidden focus:border-black transition-colors placeholder:text-black/25 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="dialogue-submit-button"
                  type="submit"
                  className="w-full rounded-full py-4 text-sm font-medium bg-black text-white hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-xs"
                >
                  Send Transmission →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.25em] text-[#6F6F6F] uppercase">
              TRANSMISSION RECEIVED
            </span>

            <h4
              className="text-4xl sm:text-5xl font-normal text-black mt-4"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Peace be with you, {formData.name || 'friend'}.
            </h4>

            <p className="text-base text-[#6F6F6F] font-light max-w-md mt-4 leading-relaxed">
              We have received your words. We hold our responses to the same standard of stillness and care as our work. You will hear from us shortly.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-8 rounded-full px-8 py-3 text-xs font-mono tracking-widest uppercase bg-black text-white hover:opacity-85 transition-opacity cursor-pointer"
            >
              Return to Sanctuary
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
