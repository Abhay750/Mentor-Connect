export default function SearchBar({ searchQuery, onSearchChange, onClearSearch }) {
  return (
    <div className="search-bar-container">
      <label htmlFor="mentor-search" className="search-label">
        Search Mentors
      </label>
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          id="mentor-search"
          type="search"
          className="search-input"
          placeholder="Search by mentor name, expertise, or keywords (e.g. React, AI, Python)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-describedby="search-hint"
        />
        {searchQuery && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={onClearSearch}
            aria-label="Clear search query"
          >
            ✕
          </button>
        )}
      </div>
      <p id="search-hint" className="sr-only">
        Type a name or skill to filter the mentors displayed below in real-time.
      </p>
    </div>
  );
}
