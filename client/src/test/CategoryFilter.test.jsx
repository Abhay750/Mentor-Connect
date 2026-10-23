import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App.jsx';

describe('Category Filtering', () => {
  it('filters mentors by selected domain category pill', () => {
    const { container } = render(<App />);

    // Click UI/UX Design category pill
    const designPill = screen.getByRole('button', { name: 'UI/UX Design' });
    fireEvent.click(designPill);

    // Only Ananya Verma should be displayed
    expect(screen.getByRole('heading', { name: 'Ananya Verma', level: 3 })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Aarav Sharma', level: 3 })).not.toBeInTheDocument();
    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 1 of 8 mentors');
  });

  it('restores all mentors when clicking the All category pill', () => {
    const { container } = render(<App />);

    // Select Cloud & DevOps
    const cloudPill = screen.getByRole('button', { name: 'Cloud & DevOps' });
    fireEvent.click(cloudPill);
    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 2 of 8 mentors');

    // Click 'All'
    const allPill = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allPill);

    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 8 of 8 mentors');
  });

  it('combines category filtering with keyword search concurrently', () => {
    const { container } = render(<App />);

    // Filter by Software Engineering (Aarav Sharma and Vikram Joshi)
    const sePill = screen.getByRole('button', { name: 'Software Engineering' });
    fireEvent.click(sePill);
    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 2 of 8 mentors');

    // Now search for 'React'
    const searchInput = screen.getByLabelText(/Search Mentors/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    // Only Aarav Sharma specializes in React within Software Engineering
    expect(screen.getByRole('heading', { name: 'Aarav Sharma', level: 3 })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Vikram Joshi', level: 3 })).not.toBeInTheDocument();
    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 1 of 8 mentors');
  });

  it('resets both search and category filter via Clear all filters button', () => {
    const { container } = render(<App />);

    const cloudPill = screen.getByRole('button', { name: 'Cloud & DevOps' });
    fireEvent.click(cloudPill);

    const searchInput = screen.getByLabelText(/Search Mentors/i);
    fireEvent.change(searchInput, { target: { value: 'AWS' } });

    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 1 of 8 mentors');

    const clearAllBtn = screen.getByRole('button', { name: /Clear all filters/i });
    fireEvent.click(clearAllBtn);

    expect(searchInput.value).toBe('');
    expect(container.querySelector('.results-count')).toHaveTextContent('Showing 8 of 8 mentors');
  });
});
