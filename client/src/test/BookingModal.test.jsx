import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingModal from '../components/BookingModal.jsx';

const mockMentor = {
  id: 'mentor-1',
  name: 'Aarav Sharma',
  category: 'Software Engineering'
};

describe('Booking Modal', () => {
  it('renders modal with mentor details and demo alert disclaimer', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    expect(screen.getByRole('heading', { name: /Request a Demo Session/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Aarav Sharma/i)).toBeInTheDocument();
    expect(screen.getByText(/Milestone 3C-B Simulation/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Demo Request/i })).toBeInTheDocument();
  });

  it('validates required fields upon submitting an empty form', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    const submitBtn = screen.getByRole('button', { name: /Submit Demo Request/i });
    fireEvent.click(submitBtn);

    // Verify accessible field-level error messages
    expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Session date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please select a demo time slot/i)).toBeInTheDocument();
    expect(screen.getByText(/Session objective\/topic is required/i)).toBeInTheDocument();
  });

  it('rejects invalid email formats', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    const emailInput = screen.getByLabelText(/University Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Demo Request/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('enforces character count limits on topic and notes', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    const topicInput = screen.getByLabelText(/Session Objective \/ Topic/i);
    const notesTextarea = screen.getByLabelText(/Additional Notes/i);

    // Inputs have maxLength attributes matching requirements
    expect(topicInput).toHaveAttribute('maxLength', '150');
    expect(notesTextarea).toHaveAttribute('maxLength', '500');

    // Counters update on typing
    fireEvent.change(topicInput, { target: { value: 'Hello' } });
    expect(screen.getByText('5/150')).toBeInTheDocument();

    fireEvent.change(notesTextarea, { target: { value: 'Important notes' } });
    expect(screen.getByText('15/500')).toBeInTheDocument();
  });

  it('calls onClose when clicking the close button or cancel button', () => {
    const handleClose = vi.fn();
    render(<BookingModal mentor={mockMentor} onClose={handleClose} />);

    const closeBtn = screen.getByRole('button', { name: /Close booking modal/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    const cancelBtn = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(cancelBtn);
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it('calls onClose when pressing the Escape key', () => {
    const handleClose = vi.fn();
    render(<BookingModal mentor={mockMentor} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('successfully transitions to success outcome for standard demo slot', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'Abhay Kumar' } });
    fireEvent.change(screen.getByLabelText(/University Email Address/i), { target: { value: 'abhay@adypu.edu.in' } });
    fireEvent.change(screen.getByLabelText(/Session Date/i), { target: { value: '2026-11-01' } });
    fireEvent.change(screen.getByLabelText(/Demo Time Slot/i), { target: { value: 'slot-1' } });
    fireEvent.change(screen.getByLabelText(/Session Objective \/ Topic/i), { target: { value: 'Architecture Review' } });

    fireEvent.click(screen.getByRole('button', { name: /Submit Demo Request/i }));

    expect(screen.getByRole('heading', { name: /Demo Request Submitted/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Abhay Kumar/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Return to Mentor Profile/i })).toBeInTheDocument();
  });

  it('transitions to simulated conflict outcome when selecting designated conflict slot', () => {
    render(<BookingModal mentor={mockMentor} onClose={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'Abhay Kumar' } });
    fireEvent.change(screen.getByLabelText(/University Email Address/i), { target: { value: 'abhay@adypu.edu.in' } });
    fireEvent.change(screen.getByLabelText(/Session Date/i), { target: { value: '2026-11-01' } });
    // slot-4 is the conflict simulation slot
    fireEvent.change(screen.getByLabelText(/Demo Time Slot/i), { target: { value: 'slot-4' } });
    fireEvent.change(screen.getByLabelText(/Session Objective \/ Topic/i), { target: { value: 'Architecture Review' } });

    fireEvent.click(screen.getByRole('button', { name: /Submit Demo Request/i }));

    expect(screen.getByRole('heading', { name: /Demo Slot Unavailable/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Choose Another Time Slot/i })).toBeInTheDocument();
  });
});
