import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-logo" aria-hidden="true">MC</div>
          <div className="brand-text">
            <span className="brand-title">Mentor Connect</span>
            <span className="brand-subtitle">ADYPU Capstone Project</span>
          </div>
        </div>
        <div className="header-status">
          <span className="status-badge">Milestone 2A • Frontend Initialized</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">Welcome to Mentor Connect</div>
          <h1 className="hero-title">
            Empowering Students Through Meaningful Mentorship
          </h1>
          <p className="hero-subtitle">
            A centralized platform bridging ADYPU students with experienced mentors.
            Discover academic guidance, career insights, and scheduled 1-on-1 mentorship.
          </p>
        </section>

        {/* Feature Introduction Cards */}
        <section className="pillars-section">
          <h2 className="section-title">Platform Pillars</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🎯</div>
              <h3>Mentor Discovery</h3>
              <p>Explore mentors by department, technology stack, and domain focus.</p>
              <span className="pillar-tag">Planned • Milestone 3</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">📅</div>
              <h3>Appointment Booking</h3>
              <p>View real-time availability calendars and schedule structured sessions.</p>
              <span className="pillar-tag">Planned • Milestone 3</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">💬</div>
              <h3>Collaborative Meetings</h3>
              <p>Engage via direct messaging and integrated virtual video calls.</p>
              <span className="pillar-tag">Planned • Milestone 4</span>
            </div>
          </div>
        </section>

        {/* Development Status Banner */}
        <section className="status-callout">
          <div className="status-callout-icon">ℹ️</div>
          <div className="status-callout-content">
            <h4>Initial Setup Phase</h4>
            <p>
              The frontend application scaffold is running on <strong>React + Vite</strong>.
              Mentor profiles, booking workflows, and backend API integrations will be implemented in subsequent milestones.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 Mentor Connect — ADYPU Capstone Project</p>
      </footer>
    </div>
  )
}

export default App
