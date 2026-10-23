/**
 * Local demonstration fixture dataset for Milestone 3A & 3B.
 *
 * IMPORTANT:
 * These records are strictly demonstration/mock profiles for evaluating the
 * Mentor Discovery and Mentor Profile Details UI.
 * They are not real registered mentors, and availability strings are placeholders
 * that are NOT live or bookable.
 */

export const MOCK_CATEGORIES = [
  'All',
  'Software Engineering',
  'Data Science & AI',
  'UI/UX Design',
  'Cloud & DevOps',
  'Product & Strategy'
];

export const MOCK_MENTORS = [
  {
    id: 'mentor-1',
    name: 'Aarav Sharma',
    title: 'Senior Frontend Engineer @ Fintech Labs',
    category: 'Software Engineering',
    expertise: ['React', 'TypeScript', 'Web Performance', 'Next.js'],
    bio: 'ADYPU alumnus with 6+ years in frontend architecture and micro-frontends. Passionate about helping students crack technical interviews and build production-grade web applications.',
    sampleAvailability: 'Tuesdays & Thursdays, 4:00 PM – 6:00 PM IST',
    avatarInitials: 'AS',
    education: 'B.Tech in Computer Engineering (ADYPU Alum)',
    experience: '6+ years in industry',
    mentoringTopics: ['Frontend Architecture', 'Technical Interview Prep', 'React Best Practices', 'Portfolio Reviews']
  },
  {
    id: 'mentor-2',
    name: 'Dr. Priya Kulkarni',
    title: 'Assistant Professor & AI Researcher',
    category: 'Data Science & AI',
    expertise: ['Machine Learning', 'Python', 'NLP', 'Computer Vision'],
    bio: 'Academic researcher guiding students in machine learning projects, research paper publications, and graduate school applications in computer science.',
    sampleAvailability: 'Mondays & Wednesdays, 2:00 PM – 4:00 PM IST',
    avatarInitials: 'PK',
    education: 'Ph.D. in Artificial Intelligence',
    experience: '8+ years in academia & research',
    mentoringTopics: ['ML Capstone Guidance', 'Research Paper Writing', 'Dataset Preparation', 'Grad School Advice']
  },
  {
    id: 'mentor-3',
    name: 'Rohan Deshmukh',
    title: 'Staff Cloud Solutions Architect',
    category: 'Cloud & DevOps',
    expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    bio: 'Cloud evangelist helping students understand modern infrastructure, containerization, and distributed systems architecture from first principles.',
    sampleAvailability: 'Saturdays, 10:00 AM – 1:00 PM IST',
    avatarInitials: 'RD',
    education: 'M.Tech in Cloud Computing',
    experience: '9+ years in cloud infrastructure',
    mentoringTopics: ['Cloud Architecture', 'Container Orchestration', 'Microservices Design', 'Cost Optimization']
  },
  {
    id: 'mentor-4',
    name: 'Ananya Verma',
    title: 'Lead Product Designer @ Creative Studio',
    category: 'UI/UX Design',
    expertise: ['Figma', 'User Research', 'Design Systems', 'Accessibility'],
    bio: 'Dedicated to teaching human-centered design, portfolio building, and design-to-development handoffs. Passionate about web accessibility (a11y).',
    sampleAvailability: 'Fridays, 3:00 PM – 5:30 PM IST',
    avatarInitials: 'AV',
    education: 'B.Des in Interaction Design',
    experience: '5+ years in product design',
    mentoringTopics: ['Design Systems', 'UX Case Studies', 'Web Accessibility (a11y)', 'Design Crits']
  },
  {
    id: 'mentor-5',
    name: 'Vikram Joshi',
    title: 'Principal Backend Engineer',
    category: 'Software Engineering',
    expertise: ['Node.js', 'Express', 'PostgreSQL', 'System Design'],
    bio: 'Specializing in resilient REST & GraphQL APIs, data modeling, and scaling database workloads. Eager to mentor final-year capstone teams on backend architecture.',
    sampleAvailability: 'Wednesdays, 5:00 PM – 7:00 PM IST',
    avatarInitials: 'VJ',
    education: 'B.E. in Information Technology',
    experience: '10+ years in backend engineering',
    mentoringTopics: ['REST & GraphQL Design', 'Database Indexing & Schema', 'System Design Interviews', 'API Security']
  },
  {
    id: 'mentor-6',
    name: 'Meera Sen',
    title: 'Director of Product Management',
    category: 'Product & Strategy',
    expertise: ['Product Roadmapping', 'Agile/Scrum', 'Go-To-Market', 'User Stories'],
    bio: 'Guiding aspiring product managers and student founders in feature prioritization, user interviews, and capstone presentation storytelling.',
    sampleAvailability: 'Thursdays, 6:00 PM – 8:00 PM IST',
    avatarInitials: 'MS',
    education: 'MBA in Technology Management',
    experience: '7+ years in product leadership',
    mentoringTopics: ['Capstone Pitch Decks', 'Product Roadmapping', 'User Interview Techniques', 'Metrics & KPIs']
  },
  {
    id: 'mentor-7',
    name: 'Tanmay Patil',
    title: 'Data Engineer & Analytics Specialist',
    category: 'Data Science & AI',
    expertise: ['Data Pipelines', 'SQL', 'Apache Spark', 'Python'],
    bio: 'Focuses on end-to-end data pipelines, ETL workflows, and big data fundamentals. Helps students transition from academic coursework to practical data engineering.',
    sampleAvailability: 'Tuesdays, 3:00 PM – 5:00 PM IST',
    avatarInitials: 'TP',
    education: 'B.Tech in Computer Science',
    experience: '4+ years in data engineering',
    mentoringTopics: ['ETL Pipeline Construction', 'SQL Optimization', 'Big Data Essentials', 'Data Modeling']
  },
  {
    id: 'mentor-8',
    name: 'Kavita Nair',
    title: 'DevOps & Site Reliability Engineer',
    category: 'Cloud & DevOps',
    expertise: ['Terraform', 'Linux', 'Monitoring & Grafana', 'GitOps'],
    bio: 'Assisting students in configuring automated build workflows, monitoring infrastructure, and adopting DevOps culture in their team projects.',
    sampleAvailability: 'Sundays, 11:00 AM – 1:00 PM IST',
    avatarInitials: 'KN',
    education: 'B.E. in Computer Technology',
    experience: '5+ years in SRE / DevOps',
    mentoringTopics: ['CI/CD Automation', 'Infrastructure as Code', 'Observability & Metrics', 'Linux Administration']
  }
];
