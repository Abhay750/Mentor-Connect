# Mentor Connect

**Institution:** ADYPU (Ajeenkya DY Patil University)  
**Project Type:** College Capstone Project  
**Repository:** [https://github.com/Abhay750/Mentor-Connect.git](https://github.com/Abhay750/Mentor-Connect.git)  
**Status:** Milestone 1 — Initial Documentation & Planning (Architecture & Scaffolding Phase)

---

## 1. Project Overview

### Problem Statement
Undergraduate students frequently face challenges finding timely, personalized academic and career mentorship. Traditional mentorship channels—such as ad-hoc email outreach, informal networking events, or disparate messaging boards—lack structured scheduling, reliable tracking, and contextual matching. As a result, students miss critical guidance opportunities, while prospective mentors lack a centralized platform to manage availability and connect efficiently.

### Objectives
- **Centralize Mentorship:** Establish a unified web portal bridging students and mentors across disciplines.
- **Streamline Scheduling:** Provide transparent, real-time availability viewing and friction-free appointment bookings.
- **Facilitate Collaboration:** Integrate direct communication via text chat and virtual video meetings.
- **Track Progress:** Equip students and mentors with dashboards to manage sessions, agendas, and follow-ups.

---

## 2. Proposed Features

*Note: All features are currently in the planning stage. No application code has been implemented yet.*

- **Mentor Discovery:** Search, filter, and discover mentors by domain expertise, industry, skills, and availability.
- **Mentor Profiles:** Detailed mentor profiles highlighting bio, professional background, expertise areas, and session offerings.
- **Availability Management:** Mentor-defined time slots and calendar configuration for flexible scheduling.
- **Appointment Booking:** Intuitive workflow for students to reserve slots, define meeting goals, and receive booking confirmations.
- **Student Dashboard:** Personalized student console to view upcoming sessions, booking history, and mentorship milestones.
- **Chat & Video Meetings:** Integrated communication channels for pre-session inquiries, active video mentoring calls, and follow-up discussions.

---

## 3. Feature Status Table

| Feature | Scope / Description | Proposed Owner(s) | Status |
| :--- | :--- | :--- | :--- |
| **Mentor Discovery** | Search and filter mentors by department, skills, and topics | Abhay Kumar | **Planned** |
| **Mentor Profiles** | Public profile pages, credentials, and mentorship focus areas | Jiya Srivastava / Abhay Kumar | **Planned** |
| **Availability Management** | Time slot calendar, recurring availability, and booking rules | Sneha Viradiya | **Planned** |
| **Appointment Booking** | Booking flow, slot locking, confirmation, and scheduling logic | Abhay Kumar / Sneha Viradiya | **Planned** |
| **Student Dashboard** | Central student portal for bookings, past sessions, and activity | Jiya Srivastava | **Planned** |
| **Chat & Messaging** | Text chat for session preparation and follow-ups | Team | **Planned** |
| **Video Meetings** | Virtual meeting integration for one-on-one sessions | Jiya Srivastava / Team | **Planned** |
| **Authentication & Profiles** | User registration, role-based access (Student / Mentor) | Sneha Viradiya | **Planned** |

---

## 4. Proposed Technology Stack

- **Frontend:** [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Styling & UI:** Modern Vanilla CSS / Component Styling
- **Database & Data Layer:** Relational/Document Database (to be finalized during Milestone 2)
- **Version Control:** Git & GitHub

---

## 5. Team Members & Proposed Ownership

> **Notice:** The team assignments below represent proposed responsibilities and are subject to review and final confirmation by the project team.

| Member | Proposed Ownership & Responsibilities *(To Be Confirmed)* |
| :--- | :--- |
| **Abhay Kumar** | Frontend architecture, booking UI, frontend/backend integration, and final system integration |
| **Sneha Viradiya** | Backend APIs, scheduling logic, data validation, database schemas, and service stability |
| **Jiya Srivastava** | UI/UX design, student dashboard interface, meeting experience, and accessibility (a11y) standards |

---

## 6. Development Roadmap

- [x] **Milestone 1 — Initial Setup & Documentation *(Current)***
  - Repository initialization and branch structure setup
  - Project documentation (`README.md`) and repository hygiene (`.gitignore`)
  - Team alignment and responsibility proposal
- [ ] **Milestone 2 — System Architecture & Scaffolding**
  - Database schema definition and backend skeleton setup
  - Vite + React frontend scaffolding and base design system
  - Environment configuration and API contracts
- [ ] **Milestone 3 — Core Feature Implementation**
  - Mentor profiles, availability management, and booking engine
  - Student dashboard and session management
  - RESTful API endpoints and data validation
- [ ] **Milestone 4 — Communication & Meeting Experience**
  - Chat implementation and video meeting integration
  - Notifications and session reminders
- [ ] **Milestone 5 — Testing, Accessibility & Deployment**
  - End-to-end user flow testing and accessibility audit
  - Production build optimization and cloud deployment
  - Final capstone submission and demonstration

---

## 7. Installation & Setup

> **Pending:** Application code has not yet been scaffolding. Installation, dependency management, and local run instructions will be published once the base application directories and package manifests are committed in Milestone 2.

```bash
# PENDING MILESTONE 2: Codebase scaffolding and setup instructions will be detailed here.
# Planned commands:
# npm install
# npm run dev
```

---

## 8. Contribution Guidelines & Git Workflow

To maintain a clean and reliable codebase, all team members will adhere to standard collaborative Git practices:

### Branching Strategy
- **`main`**: Production-ready, stable codebase. Direct commits to `main` are restricted.
- **Feature Branches**: All work must occur on dedicated feature branches named with the following convention:
  - `feature/<feature-name>` (e.g., `feature/mentor-discovery-ui`)
  - `api/<endpoint-or-service>` (e.g., `api/booking-routes`)
  - `fix/<issue-name>` (e.g., `fix/validation-error`)

### Workflow Steps
1. **Pull Latest Changes:** Always update your local `main` branch before branching:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/<descriptive-name>
   ```
3. **Commit Messages:** Write clear, concise, and conventional commit messages:
   - `docs: update milestone 1 documentation`
   - `feat: add mentor availability selector`
   - `fix: resolve date parsing in booking model`
4. **Pull Requests (PR):**
   - Push your branch to GitHub: `git push origin feature/<descriptive-name>`
   - Open a Pull Request against `main`.
   - Provide a clear summary of changes and request at least one peer review before merging.
