export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-container">
      <span id="category-filter-label" className="filter-label">
        Filter by Domain:
      </span>
      <div
        className="category-pills"
        role="group"
        aria-labelledby="category-filter-label"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              className={`category-pill ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectCategory(cat)}
              aria-pressed={isSelected}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
