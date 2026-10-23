export default function MentorCard({ mentor }) {
  return (
    <article className="mentor-card" aria-labelledby={`mentor-name-${mentor.id}`}>
      {/* Card Header */}
      <div className="card-top">
        <div className="mentor-avatar" aria-hidden="true">
          {mentor.avatarInitials}
        </div>
        <div className="mentor-meta">
          <h3 id={`mentor-name-${mentor.id}`} className="mentor-name">
            {mentor.name}
          </h3>
          <p className="mentor-role">{mentor.title}</p>
          <span className="mentor-category-badge">{mentor.category}</span>
        </div>
      </div>

      {/* Bio */}
      <p className="mentor-bio">{mentor.bio}</p>

      {/* Expertise Tags */}
      <div className="expertise-container">
        <span className="expertise-label">Core Expertise:</span>
        <div className="expertise-tags" aria-label="Skills and expertise">
          {mentor.expertise.map((skill) => (
            <span key={skill} className="expertise-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Sample Availability Notice */}
      <div className="availability-box">
        <div className="availability-header">
          <span className="calendar-icon" aria-hidden="true">📅</span>
          <span className="availability-title">Sample Availability</span>
          <span className="mock-disclaimer-pill">Demo / Not Bookable</span>
        </div>
        <p className="availability-text">{mentor.sampleAvailability}</p>
      </div>
    </article>
  );
}
