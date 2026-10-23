export default function EmptyState({ searchQuery, selectedCategory, onReset }) {
  return (
    <div className="empty-state-card" role="status" aria-live="polite">
      <div className="empty-icon" aria-hidden="true">🔍</div>
      <h3 className="empty-title">No matching mentors found</h3>
      <p className="empty-description">
        We couldn&apos;t find any mentors matching{' '}
        {searchQuery ? <strong className="query-highlight">&ldquo;{searchQuery}&rdquo;</strong> : ''}
        {searchQuery && selectedCategory !== 'All' ? ' in ' : ''}
        {selectedCategory !== 'All' ? <strong>&ldquo;{selectedCategory}&rdquo;</strong> : ''}.
      </p>
      <p className="empty-suggestion">
        Try checking your spelling, using broader search terms, or resetting your filters.
      </p>
      <button
        type="button"
        className="reset-filters-btn"
        onClick={onReset}
      >
        Reset Search &amp; Filters
      </button>
    </div>
  );
}
