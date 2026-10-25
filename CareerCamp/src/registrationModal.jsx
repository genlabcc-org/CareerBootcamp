import React, { useState } from 'react';
import './registrationModal.css';

/**
 * Registration Modal Component
 */
export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roleStatus: 'Final-Year Student',
    college: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setSubmitError('');

    // Generate unique ticket ID
    const randomId = 'GL-2026-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomId);

    const sheetUrl = (import.meta.env.VITE_GOOGLE_SHEETS_URL || '').trim();

    const payload = {
      sheetName: 'VIPS',
      ticketId: randomId,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      roleStatus: formData.roleStatus,
      college: formData.college.trim(),
      timestamp: new Date().toISOString(),
    };

    if (sheetUrl) {
      try {
        // Use text/plain and no-cors to prevent Google Apps Script CORS preflight failures
        await fetch(sheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
        setSubmitted(true);
      } catch (err) {
        console.error('Error submitting to Google Sheet:', err);
        setSubmitError('Note: We generated your ticket, but could not sync to Google Sheet. Check your connection or Webhook URL.');
        // Still allow attendee to receive their ticket
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.warn(
        '[GenLab] Google Sheets Webhook URL is not configured yet.\n' +
        'Please set VITE_GOOGLE_SHEETS_URL in your .env file.\n' +
        'See `google-apps-script.js` in the project root for 1-minute deployment instructions.'
      );
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      roleStatus: 'Final-Year Student',
      college: '',
    });
    onClose();
  };

  return (
    <div
      className="reg-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="reg-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="reg-modal-header">
          <div>
            <span className="reg-modal-tag">// ADMISSION: 100% FREE</span>
            <h2 className="reg-modal-title">RESERVE YOUR SEAT</h2>
          </div>
          <button
            type="button"
            className="reg-modal-close"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="reg-modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="reg-form">
              <div className="reg-field-group">
                <label className="reg-field-label" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  className="reg-field-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="reg-field-group">
                <label className="reg-field-label" htmlFor="email">
                  Email Address (for ticket & venue pin) *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  className="reg-field-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="reg-field-group">
                <label className="reg-field-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 / Mobile Number"
                  className="reg-field-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="reg-field-group">
                <label className="reg-field-label" htmlFor="roleStatus">
                  Your Current Status
                </label>
                <select
                  id="roleStatus"
                  name="roleStatus"
                  className="reg-field-select"
                  value={formData.roleStatus}
                  onChange={handleChange}
                >
                  <option value="Final-Year Student">Final-Year Student</option>
                  <option value="Recent Graduate (Unemployed)">Recent Graduate (Seeking job)</option>
                  <option value="Career Switcher">Career Switcher</option>
                  <option value="Junior Job Seeker">Junior Job Seeker</option>
                </select>
              </div>

              <div className="reg-field-group">
                <label className="reg-field-label" htmlFor="college">
                  College or Current Institution
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="e.g. State University of Technology"
                  className="reg-field-input"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="reg-submit-btn"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
              >
                {isSubmitting ? 'Recording Seat to VIPS List...' : 'Confirm My Free Seat →'}
              </button>
            </form>
          ) : (
            <div className="reg-success-box">
              <div className="reg-success-icon">🎉</div>
              <h3 className="reg-success-title">SEAT CONFIRMED!</h3>
              <p className="reg-success-desc">
                Welcome to GenLab Launchpad, <strong>{formData.name}</strong>.
                We have saved your seat for Saturday, 31st October at 10:00 AM.
              </p>

              <div className="reg-ticket-badge">
                PASSCODE: {ticketId} • STATUS: CONFIRMED
              </div>

              {submitError && (
                <p className="reg-error-note">
                  {submitError}
                </p>
              )}

              <button
                type="button"
                className="reg-submit-btn"
                onClick={handleReset}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
