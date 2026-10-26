import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import './registrationModal.css';
import {
  DOMAIN_OPTIONS,
  PASSOUT_YEAR_OPTIONS,
  validateRegistrationForm,
} from './lib/validators';
import { registerParticipant } from './lib/api';
import { downloadTicket } from './lib/ticketGenerator';

/**
 * Registration Modal Component
 * Displays the exact Career Launchpad registration form from PROJECT
 * styled to seamlessly match the website's technical brutalist theme.
 */
export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    collegeName: '',
    department: '',
    domain: '',
    passOutYear: '',
    aiSkills: [],
    consent: false,
  });

  // State for dropdown "Others" custom typing bars
  const [departmentSelect, setDepartmentSelect] = useState('');
  const [customDepartment, setCustomDepartment] = useState('');

  const [domainSelect, setDomainSelect] = useState('');
  const [customDomain, setCustomDomain] = useState('');

  const [passOutYearSelect, setPassOutYearSelect] = useState('');
  const [customPassOutYear, setCustomPassOutYear] = useState('');

  const [customAiSkill, setCustomAiSkill] = useState('');

  const [errors, setErrors] = useState({});
  const [duplicateError, setDuplicateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Success state with confirmed attendee registration record
  const [confirmedData, setConfirmedData] = useState(null);

  const qrCanvasRef = useRef(null);
  const modalScrollRef = useRef(null);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Render QR Code onto preview canvas when registration is confirmed
  useEffect(() => {
    if (confirmedData && qrCanvasRef.current) {
      const qrData =
        confirmedData.ticket_token ||
        confirmedData.ticketToken ||
        confirmedData.registration_id ||
        'CLP-VALID-TOKEN';

      QRCode.toCanvas(qrCanvasRef.current, qrData, {
        width: 180,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      }).catch((err) => {
        console.error('QR Canvas error:', err);
      });
    }
  }, [confirmedData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (duplicateError) {
      setDuplicateError('');
    }
  };

  const handleDepartmentSelectChange = (e) => {
    const val = e.target.value;
    setDepartmentSelect(val);
    if (val === 'Others') {
      setFormData((prev) => ({ ...prev, department: customDepartment }));
    } else {
      setFormData((prev) => ({ ...prev, department: val }));
    }
    if (errors.department) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.department;
        return next;
      });
    }
  };

  const handleCustomDepartmentChange = (e) => {
    const val = e.target.value;
    setCustomDepartment(val);
    setFormData((prev) => ({ ...prev, department: val }));
    if (errors.department) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.department;
        return next;
      });
    }
  };

  const handleDomainSelectChange = (e) => {
    const val = e.target.value;
    setDomainSelect(val);
    if (val === 'Others') {
      setFormData((prev) => ({ ...prev, domain: customDomain }));
    } else {
      setFormData((prev) => ({ ...prev, domain: val }));
    }
    if (errors.domain) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.domain;
        return next;
      });
    }
  };

  const handleCustomDomainChange = (e) => {
    const val = e.target.value;
    setCustomDomain(val);
    setFormData((prev) => ({ ...prev, domain: val }));
    if (errors.domain) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.domain;
        return next;
      });
    }
  };

  const handlePassOutYearSelectChange = (e) => {
    const val = e.target.value;
    setPassOutYearSelect(val);
    if (val === 'Others') {
      setFormData((prev) => ({ ...prev, passOutYear: customPassOutYear }));
    } else {
      setFormData((prev) => ({ ...prev, passOutYear: val }));
    }
    if (errors.passOutYear) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.passOutYear;
        return next;
      });
    }
  };

  const handleCustomPassOutYearChange = (e) => {
    const val = e.target.value;
    setCustomPassOutYear(val);
    setFormData((prev) => ({ ...prev, passOutYear: val }));
    if (errors.passOutYear) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.passOutYear;
        return next;
      });
    }
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      let current = [...prev.aiSkills];
      if (skill === 'No AI Skills Yet') {
        return {
          ...prev,
          aiSkills: current.includes(skill) ? [] : [skill],
        };
      } else {
        current = current.filter((s) => s !== 'No AI Skills Yet');
        if (current.includes(skill)) {
          current = current.filter((s) => s !== skill);
        } else {
          current.push(skill);
        }
        return { ...prev, aiSkills: current };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Resolve final pass out year
    const finalYear =
      passOutYearSelect === 'Others'
        ? customPassOutYear.trim()
        : (passOutYearSelect || formData.passOutYear);

    // Resolve final domain
    const finalDomain =
      domainSelect === 'Others'
        ? customDomain.trim()
        : (domainSelect || formData.domain);

    const submissionPayload = {
      ...formData,
      passOutYear: finalYear,
      department: finalDomain,
      domain: finalDomain,
      aiSkills: [],
    };

    // Validate using the shared validator
    const { isValid, errors: validationErrors } = validateRegistrationForm(submissionPayload);
    if (!isValid) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setDuplicateError('');

    try {
      const createdRegistration = await registerParticipant(submissionPayload);
      setConfirmedData(createdRegistration);
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0;
      }
    } catch (err) {
      console.error('Submission failed:', err);
      if (err.code === 'DUPLICATE_REGISTRATION' || err.message?.includes('already registered')) {
        setDuplicateError(err.message);
      } else {
        setDuplicateError(err.message || 'Failed to submit registration. Please verify your details.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadTicket = async () => {
    if (!confirmedData || isDownloading) return;
    setIsDownloading(true);
    try {
      await downloadTicket(confirmedData);
    } catch (err) {
      console.error('Download ticket error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleResetForm = () => {
    setConfirmedData(null);
    setDuplicateError('');
    setErrors({});
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      collegeName: '',
      department: '',
      domain: '',
      passOutYear: '',
      aiSkills: [],
      consent: false,
    });
    setDepartmentSelect('');
    setCustomDepartment('');
    setDomainSelect('');
    setCustomDomain('');
    setPassOutYearSelect('');
    setCustomPassOutYear('');
    setCustomAiSkill('');
  };

  const handleClose = () => {
    handleResetForm();
    onClose();
  };

  return (
    <div
      className="reg-modal-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="reg-modal-card"
        onClick={(e) => e.stopPropagation()}
        ref={modalScrollRef}
      >
        {/* Modal Header */}
        <div className="reg-modal-header">
          <div>
            <span className="reg-modal-tag">// ADMISSION: 100% FREE • VERIFIED ENTRY PASS</span>
            <h2 className="reg-modal-title">
              {confirmedData ? 'PASS ISSUED' : 'RESERVE YOUR SEAT'}
            </h2>
          </div>
          <button
            type="button"
            className="reg-modal-close"
            aria-label="Close registration dialog"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="reg-modal-body">
          {!confirmedData ? (
            <>
              <p className="reg-modal-subtitle">
                Fill in your details below to secure your seat for <strong>Career Launchpad 2026</strong>.
                You will immediately receive your verified digital QR admission pass.
              </p>

              {duplicateError && (
                <div className="reg-duplicate-alert" role="alert">
                  <strong>Notice:</strong> {duplicateError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="reg-form">
                <div className="reg-form-grid">
                  {/* Full Name */}
                  <div className="reg-field-group">
                    <label htmlFor="field-fullName" className="reg-field-label reg-field-required">
                      Full Name
                    </label>
                    <input
                      id="field-fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Senthil Nathan"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`reg-field-input ${errors.fullName ? 'has-error' : ''}`}
                      disabled={isSubmitting}
                      autoComplete="name"
                    />
                    {errors.fullName && <span className="reg-error-msg">{errors.fullName}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="reg-field-group">
                    <label htmlFor="field-email" className="reg-field-label reg-field-required">
                      Email Address
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      placeholder="e.g. participant@university.edu"
                      value={formData.email}
                      onChange={handleChange}
                      className={`reg-field-input ${errors.email ? 'has-error' : ''}`}
                      disabled={isSubmitting}
                      autoComplete="email"
                    />
                    {errors.email && <span className="reg-error-msg">{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="reg-field-group">
                    <label htmlFor="field-phoneNumber" className="reg-field-label reg-field-required">
                      Phone Number
                    </label>
                    <input
                      id="field-phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`reg-field-input ${errors.phoneNumber ? 'has-error' : ''}`}
                      disabled={isSubmitting}
                      autoComplete="tel"
                    />
                    {errors.phoneNumber && <span className="reg-error-msg">{errors.phoneNumber}</span>}
                  </div>

                  {/* Year of Pass Out (Dropdown with Others option) */}
                  <div className="reg-field-group">
                    <label htmlFor="field-passOutYear" className="reg-field-label reg-field-required">
                      Year of Pass Out
                    </label>
                    <select
                      id="field-passOutYear"
                      name="passOutYear"
                      value={passOutYearSelect}
                      onChange={handlePassOutYearSelectChange}
                      className={`reg-field-select ${errors.passOutYear ? 'has-error' : ''}`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Year...</option>
                      {PASSOUT_YEAR_OPTIONS.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    {/* Typing bar if Others selected */}
                    {passOutYearSelect === 'Others' && (
                      <div className="reg-other-typing-wrapper">
                        <input
                          type="text"
                          className="reg-field-sub-input"
                          placeholder="Type your graduation year (e.g. 2022, 2029)..."
                          value={customPassOutYear}
                          onChange={handleCustomPassOutYearChange}
                          disabled={isSubmitting}
                          autoFocus
                        />
                      </div>
                    )}
                    {errors.passOutYear && <span className="reg-error-msg">{errors.passOutYear}</span>}
                  </div>

                  {/* Domain (Dropdown with Others option) */}
                  <div className="reg-field-group-full">
                    <label htmlFor="field-domain" className="reg-field-label reg-field-required">
                      Domain
                    </label>
                    <select
                      id="field-domain"
                      name="domain"
                      value={domainSelect}
                      onChange={handleDomainSelectChange}
                      className={`reg-field-select ${errors.domain ? 'has-error' : ''}`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Domain...</option>
                      {DOMAIN_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    {/* Typing bar if Others selected */}
                    {domainSelect === 'Others' && (
                      <div className="reg-other-typing-wrapper">
                        <input
                          type="text"
                          className="reg-field-sub-input"
                          placeholder="Type your domain (e.g. Game Development, AR/VR, Embedded)..."
                          value={customDomain}
                          onChange={handleCustomDomainChange}
                          disabled={isSubmitting}
                          autoFocus
                        />
                      </div>
                    )}
                    {errors.domain && <span className="reg-error-msg">{errors.domain}</span>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="reg-field-group-full">
                    <div className="reg-consent-card">
                      <input
                        id="field-consent"
                        name="consent"
                        type="checkbox"
                        className="reg-consent-checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <label htmlFor="field-consent" className="reg-consent-text">
                        I hereby confirm my registration for Career Launchpad and consent to the collection
                        and processing of my details for event attendance management and digital ticketing.
                      </label>
                    </div>
                    {errors.consent && (
                      <span className="reg-error-msg" style={{ marginTop: 6, display: 'block' }}>
                        {errors.consent}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="reg-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="reg-btn-loading">
                      <span className="reg-spinner" />
                      <span>Processing Registration...</span>
                    </span>
                  ) : (
                    <span>Complete Registration →</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Confirmed Ticket Pass Screen */
            <div className="reg-success-view">
              <div className="reg-success-header">
                <div className="reg-success-icon-badge">✓</div>
                <h3 className="reg-success-heading">REGISTRATION CONFIRMED</h3>
                <p className="reg-success-lead">
                  Welcome aboard, <strong>{confirmedData.full_name}</strong>. Your seat has been secured
                  and your official digital entry pass has been issued.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="reg-ticket-card">
                <div className="reg-ticket-top">
                  <div>
                    <span className="reg-ticket-brand">CAREER LAUNCHPAD 2026</span>
                    <span className="reg-ticket-sub">OFFICIAL ADMISSION PASS</span>
                  </div>
                  <div className="reg-ticket-status-pill">CONFIRMED</div>
                </div>

                <div className="reg-ticket-ref-bar">
                  <span className="reg-ticket-ref-title">REGISTRATION ID</span>
                  <span className="reg-ticket-ref-code">{confirmedData.registration_id}</span>
                </div>

                <div className="reg-ticket-grid">
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">ATTENDEE</span>
                    <span className="reg-ticket-val">{confirmedData.full_name}</span>
                  </div>
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">
                      {confirmedData.college_name ? 'COLLEGE / INSTITUTION' : 'PHONE NUMBER'}
                    </span>
                    <span className="reg-ticket-val">
                      {confirmedData.college_name || confirmedData.phone_number || 'N/A'}
                    </span>
                  </div>
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">DOMAIN</span>
                    <span className="reg-ticket-val">{confirmedData.domain || confirmedData.department || 'N/A'}</span>
                  </div>
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">GRADUATION YEAR</span>
                    <span className="reg-ticket-val">{confirmedData.pass_out_year || 'N/A'}</span>
                  </div>
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">EVENT DATE & TIME</span>
                    <span className="reg-ticket-val">Saturday, 31st Oct • 10:00 AM</span>
                  </div>
                  <div className="reg-ticket-item">
                    <span className="reg-ticket-label">VENUE LOCATION</span>
                    <span className="reg-ticket-val">GenLab Office</span>
                  </div>
                </div>

                <div className="reg-ticket-tear-line">
                  <span className="tear-circle tear-left" />
                  <span className="tear-dashed" />
                  <span className="tear-circle tear-right" />
                </div>

                {/* QR Code Section */}
                <div className="reg-ticket-qr-container">
                  <canvas ref={qrCanvasRef} className="reg-ticket-qr-canvas" />
                  <div className="reg-ticket-qr-instructions">
                    <span className="reg-ticket-qr-title">SCAN AT ENTRANCE GATE</span>
                    <span className="reg-ticket-qr-desc">
                      Present this QR pass on your mobile phone or as a downloaded pass at registration desk.
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="reg-success-actions">
                <button
                  type="button"
                  className="reg-btn-download"
                  onClick={handleDownloadTicket}
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Generating Pass Image...' : '⬇ Download Entry Pass (PNG)'}
                </button>
                <div className="reg-success-secondary-row">
                  <button
                    type="button"
                    className="reg-btn-secondary"
                    onClick={handleResetForm}
                  >
                    + Register Another Participant
                  </button>
                  <button
                    type="button"
                    className="reg-btn-secondary done-btn"
                    onClick={handleClose}
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
