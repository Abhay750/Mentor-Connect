import { useState, useEffect, useRef } from 'react';
import { DEMO_TIME_SLOTS } from '../data/mockMentors.js';

// Deterministic helper to get today's date formatted as YYYY-MM-DD
function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function BookingModal({ mentor, onClose }) {
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Form field states
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [selectedSlotId, setSelectedSlotId] = useState('');
  const [sessionTopic, setSessionTopic] = useState('');
  const [notes, setNotes] = useState('');

  // UI / validation states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // null | 'success' | 'conflict'
  const [submittedData, setSubmittedData] = useState(null);

  // Focus trap and Escape key listener
  useEffect(() => {
    // Focus initial interactive element
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, submissionResult]);

  if (!mentor) return null;

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    const todayStr = getTodayDateString();

    const trimmedName = studentName.trim();
    if (!trimmedName) {
      newErrors.studentName = 'Full name is required.';
    } else if (trimmedName.length < 2) {
      newErrors.studentName = 'Full name must be at least 2 characters.';
    }

    const trimmedEmail = studentEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.studentEmail = 'Email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.studentEmail = 'Please enter a valid email address (e.g. student@adypu.edu.in).';
    }

    if (!sessionDate) {
      newErrors.sessionDate = 'Session date is required.';
    } else if (sessionDate < todayStr) {
      newErrors.sessionDate = 'Session date cannot be in the past.';
    }

    if (!selectedSlotId) {
      newErrors.selectedSlotId = 'Please select a demo time slot.';
    }

    const trimmedTopic = sessionTopic.trim();
    if (!trimmedTopic) {
      newErrors.sessionTopic = 'Session objective/topic is required.';
    } else if (trimmedTopic.length > 150) {
      newErrors.sessionTopic = 'Session objective cannot exceed 150 characters.';
    }

    if (notes.length > 500) {
      newErrors.notes = 'Optional notes cannot exceed 500 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const chosenSlot = DEMO_TIME_SLOTS.find((s) => s.id === selectedSlotId);

    const payload = {
      mentorId: mentor.id,
      mentorName: mentor.name,
      studentName: studentName.trim(),
      studentEmail: studentEmail.trim(),
      sessionDate,
      timeSlotLabel: chosenSlot ? chosenSlot.label : selectedSlotId,
      sessionTopic: sessionTopic.trim(),
      notes: notes.trim(),
      timestamp: new Date().toISOString()
    };

    setSubmittedData(payload);

    // Deterministic simulation based on chosen fixture slot
    if (chosenSlot && chosenSlot.isConflictDemo) {
      setSubmissionResult('conflict');
    } else {
      setSubmissionResult('success');
    }

    setIsSubmitting(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Modal Top Header */}
        <div className="modal-header">
          <div>
            <h2 id="booking-modal-title" className="modal-title">
              Request a Demo Session
            </h2>
            <p className="modal-subtitle">
              With <strong>{mentor.name}</strong> • {mentor.category}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close booking modal"
          >
            ✕
          </button>
        </div>

        {/* Demo Disclaimer Notice */}
        <div className="demo-modal-alert" role="note">
          <span className="demo-alert-icon" aria-hidden="true">ℹ️</span>
          <p>
            <strong>Milestone 3C-B Simulation:</strong> This is an interactive demo workflow.
            No network request will be dispatched and no real calendar reservation will be made.
          </p>
        </div>

        {/* Modal Body: Either Form or Simulated Outcome */}
        {submissionResult === 'success' ? (
          /* Success Simulation View */
          <div className="outcome-view success-view" role="status" aria-live="polite">
            <div className="outcome-icon-wrapper success-icon">✓</div>
            <h3 className="outcome-title">Demo Request Submitted</h3>
            <p className="outcome-tagline">
              Simulated demonstration submission recorded locally in UI state. Not a live reservation.
            </p>

            <div className="booking-summary-card">
              <h4 className="summary-title">Summary of Request</h4>
              <dl className="summary-details">
                <div className="summary-row">
                  <dt>Mentor:</dt>
                  <dd>{submittedData.mentorName}</dd>
                </div>
                <div className="summary-row">
                  <dt>Student:</dt>
                  <dd>{submittedData.studentName} ({submittedData.studentEmail})</dd>
                </div>
                <div className="summary-row">
                  <dt>Date &amp; Time:</dt>
                  <dd>{submittedData.sessionDate} at {submittedData.timeSlotLabel}</dd>
                </div>
                <div className="summary-row">
                  <dt>Objective:</dt>
                  <dd>{submittedData.sessionTopic}</dd>
                </div>
                {submittedData.notes && (
                  <div className="summary-row">
                    <dt>Notes:</dt>
                    <dd>{submittedData.notes}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="outcome-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
              >
                Return to Mentor Profile
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setSubmissionResult(null)}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : submissionResult === 'conflict' ? (
          /* Conflict Simulation View */
          <div className="outcome-view conflict-view" role="status" aria-live="polite">
            <div className="outcome-icon-wrapper conflict-icon">⚠️</div>
            <h3 className="outcome-title">Demo Slot Unavailable</h3>
            <p className="outcome-tagline">
              Deterministic Conflict Simulation: The selected time slot is marked as already reserved in this test fixture.
            </p>

            <div className="conflict-details-card">
              <p>
                <strong>Requested Slot:</strong> {submittedData?.timeSlotLabel} on {submittedData?.sessionDate}
              </p>
              <p className="conflict-hint">
                In production, backend conflict detection will return HTTP 409 Conflict when a session overlaps with an existing booking.
              </p>
            </div>

            <div className="outcome-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setSubmissionResult(null)}
              >
                Choose Another Time Slot
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
              >
                Cancel and Close
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Demo Booking Form */
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            {/* Student Name */}
            <div className="form-group">
              <label htmlFor="student-name" className="form-label">
                Your Full Name <span className="required-star">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="student-name"
                type="text"
                className={`form-input ${errors.studentName ? 'input-error' : ''}`}
                placeholder="e.g. Abhay Kumar"
                value={studentName}
                onChange={(e) => {
                  setStudentName(e.target.value);
                  if (errors.studentName) setErrors({ ...errors, studentName: null });
                }}
                aria-invalid={!!errors.studentName}
                aria-describedby={errors.studentName ? 'student-name-error' : undefined}
                required
              />
              {errors.studentName && (
                <p id="student-name-error" className="field-error" role="alert">
                  {errors.studentName}
                </p>
              )}
            </div>

            {/* Student Email */}
            <div className="form-group">
              <label htmlFor="student-email" className="form-label">
                University Email Address <span className="required-star">*</span>
              </label>
              <input
                id="student-email"
                type="email"
                className={`form-input ${errors.studentEmail ? 'input-error' : ''}`}
                placeholder="e.g. abhay@adypu.edu.in"
                value={studentEmail}
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                  if (errors.studentEmail) setErrors({ ...errors, studentEmail: null });
                }}
                aria-invalid={!!errors.studentEmail}
                aria-describedby={errors.studentEmail ? 'student-email-error' : undefined}
                required
              />
              {errors.studentEmail && (
                <p id="student-email-error" className="field-error" role="alert">
                  {errors.studentEmail}
                </p>
              )}
            </div>

            {/* Session Date & Demo Slot Selection (Row) */}
            <div className="form-row">
              <div className="form-group flex-1">
                <label htmlFor="session-date" className="form-label">
                  Session Date <span className="required-star">*</span>
                </label>
                <input
                  id="session-date"
                  type="date"
                  min={getTodayDateString()}
                  className={`form-input ${errors.sessionDate ? 'input-error' : ''}`}
                  value={sessionDate}
                  onChange={(e) => {
                    setSessionDate(e.target.value);
                    if (errors.sessionDate) setErrors({ ...errors, sessionDate: null });
                  }}
                  aria-invalid={!!errors.sessionDate}
                  aria-describedby={errors.sessionDate ? 'session-date-error' : undefined}
                  required
                />
                {errors.sessionDate && (
                  <p id="session-date-error" className="field-error" role="alert">
                    {errors.sessionDate}
                  </p>
                )}
              </div>

              <div className="form-group flex-1">
                <label htmlFor="demo-time-slot" className="form-label">
                  Demo Time Slot <span className="required-star">*</span>
                </label>
                <select
                  id="demo-time-slot"
                  className={`form-select ${errors.selectedSlotId ? 'input-error' : ''}`}
                  value={selectedSlotId}
                  onChange={(e) => {
                    setSelectedSlotId(e.target.value);
                    if (errors.selectedSlotId) setErrors({ ...errors, selectedSlotId: null });
                  }}
                  aria-invalid={!!errors.selectedSlotId}
                  aria-describedby={errors.selectedSlotId ? 'demo-time-slot-error' : 'slot-hint'}
                  required
                >
                  <option value="">-- Select an illustrative slot --</option>
                  {DEMO_TIME_SLOTS.map((slot) => (
                    <option key={slot.id} value={slot.id}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                {errors.selectedSlotId ? (
                  <p id="demo-time-slot-error" className="field-error" role="alert">
                    {errors.selectedSlotId}
                  </p>
                ) : (
                  <p id="slot-hint" className="field-hint">
                    Slot 4 (05:30 PM) is configured to simulate conflict handling.
                  </p>
                )}
              </div>
            </div>

            {/* Session Objective */}
            <div className="form-group">
              <div className="label-with-counter">
                <label htmlFor="session-topic" className="form-label">
                  Session Objective / Topic <span className="required-star">*</span>
                </label>
                <span className="char-counter" aria-live="polite">
                  {sessionTopic.length}/150
                </span>
              </div>
              <input
                id="session-topic"
                type="text"
                maxLength={150}
                className={`form-input ${errors.sessionTopic ? 'input-error' : ''}`}
                placeholder="e.g. Capstone frontend review & API data modeling guidance"
                value={sessionTopic}
                onChange={(e) => {
                  setSessionTopic(e.target.value);
                  if (errors.sessionTopic) setErrors({ ...errors, sessionTopic: null });
                }}
                aria-invalid={!!errors.sessionTopic}
                aria-describedby={errors.sessionTopic ? 'session-topic-error' : undefined}
                required
              />
              {errors.sessionTopic && (
                <p id="session-topic-error" className="field-error" role="alert">
                  {errors.sessionTopic}
                </p>
              )}
            </div>

            {/* Optional Notes */}
            <div className="form-group">
              <div className="label-with-counter">
                <label htmlFor="session-notes" className="form-label">
                  Additional Notes (Optional)
                </label>
                <span className="char-counter" aria-live="polite">
                  {notes.length}/500
                </span>
              </div>
              <textarea
                id="session-notes"
                maxLength={500}
                rows={3}
                className={`form-textarea ${errors.notes ? 'input-error' : ''}`}
                placeholder="Specific questions, repository links, or topics to prioritize..."
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                  if (errors.notes) setErrors({ ...errors, notes: null });
                }}
                aria-invalid={!!errors.notes}
                aria-describedby={errors.notes ? 'session-notes-error' : undefined}
              />
              {errors.notes && (
                <p id="session-notes-error" className="field-error" role="alert">
                  {errors.notes}
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Demo Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
