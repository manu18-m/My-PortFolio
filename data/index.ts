import type { Project, Skill, Experience, Achievement, Certification, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "she-shield",
    title: "SHE SHIELD",
    tagline: "Smart Women Safety Wearable",
    description:
      "An IoT-powered smart safety necklace that sends emergency alerts through single-tap and double-tap trigger mechanisms — bridging hardware and software to protect lives.",
    problem:
      "Women in unsafe situations often cannot make a phone call or text for help. Existing safety apps require multiple steps and screen interaction — precious seconds that may not be available in an emergency.",
    solution:
      "A wearable necklace with embedded IoT hardware that detects tap gestures. Single-tap sends an alert with live GPS location; double-tap escalates to emergency services. A companion web dashboard lets trusted contacts monitor alerts in real time.",
    features: [
      "Single-tap and double-tap trigger mechanisms for tiered emergency alerts",
      "Real-time GPS location sharing with registered contacts",
      "Connected web interface for emergency contact management",
      "Alert monitoring dashboard with history and status",
      "Compact, wearable form factor designed for everyday use",
      "Offline-capable alert triggering via SMS fallback",
    ],
    technologies: ["IoT", "Embedded Systems", "JavaScript", "HTML", "CSS", "Firebase", "REST APIs", "GPS Integration"],
    impact: [
      "Selected among Best Projects at Visista 2K25 out of 100+ college teams",
      "Demonstrated at multiple college technical exhibitions",
      "Addresses real personal safety gaps for women in urban environments",
    ],
    githubUrl: "https://github.com/manu18-m/SheShield-2.0.git",
    liveUrl: "https://she-shield1.netlify.app/",
    gradient: "from-rose-500/20 via-pink-500/10 to-purple-500/5",
    accent: "#f43f5e",
    category: "IoT / Full Stack",
  },
  {
    id: "pure-city",
    title: "PURE CITY",
    tagline: "Health & Wellness Web Platform",
    description:
      "A responsive health and wellness platform with interactive tracking tools, health monitoring dashboards, and digital wellness management features for modern users.",
    problem:
      "Most wellness apps feel clinical and overwhelming. People abandon them within days. There was a need for a lightweight, accessible, and visually engaging platform that encourages consistent healthy habits without friction.",
    solution:
      "Pure City delivers a clean, intuitive web experience focused on wellness tracking and health monitoring. Built with semantic HTML, modern CSS layouts, and vanilla JavaScript — making it fast, accessible, and deployable anywhere.",
    features: [
      "Wellness tracking dashboard with daily habit logging",
      "Health monitoring tools with progress visualization",
      "Responsive design optimized for mobile and desktop",
      "Interactive UI components for engagement and accessibility",
      "Digital wellness management tools with reminders",
      "Clean, calming visual design to reduce cognitive load",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Animations API", "LocalStorage"],
    impact: [
      "Fully responsive across all device sizes",
      "Demonstrates strong frontend fundamentals and UI/UX thinking",
      "Live deployment available for public access",
    ],
    githubUrl: "https://github.com/manu18-m/PureCity.git",
    liveUrl: "https://pure-city-tau.vercel.app/",
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/5",
    accent: "#22d3ee",
    category: "Web Development",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "C / C++", level: 65 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 78 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend & DB",
    icon: "Server",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "MySQL", level: 70 },
      { name: "SQLite", level: 65 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: "Cpu",
    items: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
      { name: "OOP", level: 85 },
      { name: "Operating Systems", level: 70 },
      { name: "Networking", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel / Netlify", level: 85 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Junior Manager — International Relations",
    organization: "AIESEC in Hyderabad",
    period: "Feb 2025 – Jan 2026",
    type: "work",
    description: [
      "Managed International Relations (IR) activities by coordinating with global teams across 126 countries",
      "Assisted in cross-cultural communication initiatives connecting students to global opportunities",
      "Developed leadership, communication, and professional networking skills through international youth programs",
      "Facilitated exchange programs and contributed to AIESEC's mission of developing global youth leadership",
    ],
    skills: ["International Relations", "Cross-cultural Communication", "Leadership", "Team Coordination", "Networking"],
  },
  {
    role: "Class Representative",
    organization: "Malla Reddy College of Engineering",
    period: "2024 – Present",
    type: "leadership",
    description: [
      "Represented and coordinated communication between faculty and 60+ students for academic activities",
      "Organized class-level events, semester planning, and academic scheduling",
      "Developed problem-solving and conflict-resolution skills through active class management",
      "Served as the primary point of contact for institutional announcements and student feedback",
    ],
    skills: ["Communication", "Problem Solving", "Organization", "Team Management", "Student Advocacy"],
  },
  {
    role: "Student Coordinator",
    organization: "Visista 2K25 & 2K26 — Technical Events",
    period: "2025 – 2026",
    type: "leadership",
    description: [
      "Coordinated Paper Presentation and Tech Escape Room events at college technical festival Visista",
      "Managed event logistics, participant registration, judging coordination, and scheduling",
      "Led a team to ensure smooth execution of technical competitions across two consecutive years",
    ],
    skills: ["Event Management", "Coordination", "Public Speaking", "Planning", "Technical Events"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Best Project — Visista 2K25",
    description: "SHE SHIELD was selected among the Best Projects at Visista 2K25, competing against 100+ teams at the college level.",
    icon: "Trophy",
    accent: "#f59e0b",
  },
  {
    title: "Runner-Up — Paper Presentation",
    description: "Secured Runner-Up position in Paper Presentation at Visista 2K25, competing against top technical teams.",
    icon: "Medal",
    accent: "#7c6af7",
  },
  {
    title: "4 Hackathons Participated",
    description: "Competed in 4 hackathons including IITH Hackathon, focusing on innovation, problem-solving, and collaborative development.",
    icon: "Zap",
    accent: "#22d3ee",
  },
  {
    title: "CGPA 8.62 / 10",
    description: "Maintaining a strong academic record of 8.62 CGPA in B.Tech Computer Science Engineering at Malla Reddy College.",
    icon: "GraduationCap",
    accent: "#10b981",
  },
];

export const certifications: Certification[] = [
  {
    title: "Job Application Essentials",
    issuer: "IBM SkillsBuild",
    topics: ["Professional Development", "Career Readiness"],
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    topics: ["Agile", "Project Planning", "Team Management"],
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    topics: ["Machine Learning", "AI Fundamentals", "Neural Networks"],
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    topics: ["AWS", "Cloud Architecture", "Deployment"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    topics: ["Network Security", "Threat Analysis", "Security Protocols"],
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Infosys Springboard",
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

export const personalInfo = {
  name: "Koona Manoj Kumar",
  shortName: "Manoj",
  title: "Frontend Developer & CS Student",
  tagline: "Building digital experiences that matter",
  bio: "I'm a Computer Science Engineering student at Malla Reddy College, Hyderabad — passionate about crafting visually rich frontend experiences and building full-stack products that solve real problems. From IoT safety wearables to health platforms, I ship work that combines clean code with purposeful design. When I'm not pushing commits, I'm leading teams at AIESEC, coordinating tech events, or creating cinematic edits on manuxedits18.",
  location: "Hyderabad, India",
  email: "kooonamanoj18@gmail.com",
  phone: "+91 79816 77284",
  github: "https://github.com/manu18-m",
  linkedin: "https://www.linkedin.com/in/koonmanoj18",
  instagram: "https://www.instagram.com/manuxedits18",
  education: {
    degree: "B.Tech — Computer Science Engineering",
    college: "Malla Reddy College of Engineering",
    period: "Expected 2027",
    cgpa: "8.62 / 10",
  },
};
