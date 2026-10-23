import { useState, useMemo } from 'react';
import './App.css';
import { MOCK_MENTORS, MOCK_CATEGORIES } from './data/mockMentors.js';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import MentorCard from './components/MentorCard.jsx';
import EmptyState from './components/EmptyState.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter mentors based on search query and selected category
  const filteredMentors = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    return MOCK_MENTORS.filter((mentor) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || mentor.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search query match
      if (!trimmed) return true;

      const nameMatch = mentor.name.toLowerCase().includes(trimmed);
      const titleMatch = mentor.title.toLowerCase().includes(trimmed);
      const bioMatch = mentor.bio.toLowerCase().includes(trimmed);
      const expertiseMatch = mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(trimmed)
      );

      return nameMatch || titleMatch || bioMatch || expertiseMatch;
    });
  }, [searchQuery, selectedCategory]);

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'All';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="app-container">
      {/* Header and Navigation */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        {activeTab === 'discover' ? (
          <section className="discovery-section" aria-labelledby="discovery-heading">
            {/* Header intro */}
            <div className="discovery-hero">
              <span className="discovery-badge">Mentor Discovery</span>
              <h1 id="discovery-heading" className="discovery-title">
                Find Academic &amp; Industry Mentors
              </h1>
              <p className="discovery-subtitle">
                Explore guidance across engineering, design, AI, and career development.
                Search by name or technical expertise to find the right mentor for your capstone project.
              </p>
            </div>

            {/* Search and Filters Control Panel */}
            <div className="discovery-controls">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClearSearch={() => setSearchQuery('')}
              />

              <CategoryFilter
                categories={MOCK_CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Results count & status bar */}
            <div className="results-status-bar" aria-live="polite">
              <span className="results-count">
                Showing <strong>{filteredMentors.length}</strong> of{' '}
                {MOCK_MENTORS.length} mentors
                {selectedCategory !== 'All' && (
                  <span className="active-filter-badge">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="active-filter-badge">
                    Query: &ldquo;{searchQuery.trim()}&rdquo;
                  </span>
                )}
              </span>

              {isFiltered && (
                <button
                  type="button"
                  className="clear-all-filters-btn"
                  onClick={handleResetFilters}
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Mentor Cards Grid or Empty State */}
            {filteredMentors.length > 0 ? (
              <div
                className="mentors-grid"
                role="region"
                aria-label="Mentor search results"
              >
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            ) : (
              <EmptyState
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onReset={handleResetFilters}
              />
            )}

            {/* Demonstration Notice */}
            <aside className="demo-disclaimer" aria-label="Demo Disclaimer">
              <span className="disclaimer-icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>Demonstration Fixtures:</strong> Mentors and availability displayed
                above are sample records for Milestone 3A frontend testing. Live mentor
                onboarding and database-backed scheduling will be connected in future milestones.
              </p>
            </aside>
          </section>
        ) : (
          /* Preserved Project Overview from Milestone 2A */
          <section className="overview-section" aria-labelledby="overview-heading">
            <div className="hero-section">
              <div className="hero-badge">About Mentor Connect</div>
              <h1 id="overview-heading" className="hero-title">
                Empowering Students Through Meaningful Mentorship
              </h1>
              <p className="hero-subtitle">
                A centralized platform bridging ADYPU students with experienced mentors.
                Discover academic guidance, career insights, and scheduled 1-on-1 mentorship.
              </p>
            </div>

            <div className="pillars-section">
              <h2 className="section-title">Platform Architecture &amp; Roadmap</h2>
              <div className="pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-icon">🎯</div>
                  <h3>Mentor Discovery</h3>
                  <p>Filter mentors by department, skills, and topics.</p>
                  <span className="pillar-tag in-progress">Milestone 3A • Frontend Active</span>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">📅</div>
                  <h3>Appointment Booking</h3>
                  <p>View real-time availability calendars and schedule structured sessions.</p>
                  <span className="pillar-tag">Planned • Milestone 3B</span>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">💬</div>
                  <h3>Collaborative Meetings</h3>
                  <p>Engage via direct messaging and integrated virtual video calls.</p>
                  <span className="pillar-tag">Planned • Milestone 4</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 Mentor Connect — ADYPU Capstone Mentorship Platform</p>
      </footer>
    </div>
  );
}

export default App;
