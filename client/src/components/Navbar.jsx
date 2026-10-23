export default function Navbar({ activeTab, onTabChange }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-logo" aria-hidden="true">MC</div>
        <div className="brand-text">
          <span className="brand-title">Mentor Connect</span>
          <span className="brand-subtitle">ADYPU Capstone Mentorship</span>
        </div>
      </div>

      <nav className="header-nav" aria-label="Main Navigation">
        <button
          type="button"
          className={`nav-link ${activeTab === 'discover' ? 'active' : ''}`}
          onClick={() => onTabChange('discover')}
          aria-current={activeTab === 'discover' ? 'page' : undefined}
        >
          Discover Mentors
        </button>
        <button
          type="button"
          className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onTabChange('about')}
          aria-current={activeTab === 'about' ? 'page' : undefined}
        >
          Project Overview
        </button>
      </nav>

      <div className="header-status">
        <span className="status-badge">Milestone 3A • Discovery UI</span>
      </div>
    </header>
  );
}
