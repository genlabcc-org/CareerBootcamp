import React from 'react';
import './posterModal.css';

/**
 * Event Poster Modal Component
 * Displays the full graphic event poster directly without text outline tab.
 */
export default function PosterModal({ isOpen, onClose, onOpenRegister }) {
  if (!isOpen) return null;

  return (
    <div
      className="poster-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="poster-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="poster-close-btn"
          aria-label="Close poster view"
          onClick={onClose}
        >
          ✕ 
        </button>

        <div className="poster-modal-graphic-wrap">
          <img
            src="/images/PosterBoot.png"
            alt="GenLab Launchpad Event Poster Full"
            className="poster-modal-graphic-img"
          />
        </div>

        {/* Poster Footer Action */}
        <div className="poster-footer">
          <button
            type="button"
            className="poster-cta-btn"
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
