/**
 * Centralized Developer Profile Configuration
 * Single Source of Truth for Sampatakumar V
 * Consumed by Navigation, Hero, About, Case Studies, Contact, and Footer.
 */

export const profile = {
  // Identity
  name: "Sampatakumar V",
  firstName: "Sampatakumar",
  lastName: "V",
  username: "sampatakumar",
  initials: "SV",
  title: "Full-Stack Developer & Software Engineer",
  headline: "Building digital experiences, intelligent applications, and software that solves real problems.",
  alternativeHeadline: "Developer by curiosity. Builder by passion.",
  
  // Background & Education
  education: {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "Rajiv Gandhi Institute Of Technology (RGIT)",
    location: "Bengaluru, Karnataka, India",
    status: "Final Year Student",
    focus: "Full-Stack Development, System Architecture, Distributed Systems & AI Applications"
  },

  // Location & Coordinates
  location: {
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    display: "Bengaluru, India",
    coordinates: "12.9716° N, 77.5946° E",
    timezone: "IST (UTC+5:30)"
  },

  // Availability HUD
  availability: {
    status: "Available for Full-Time Engineering Roles & Student Collaborations",
    badge: "Open for Opportunities",
    indicatorColor: "#10B981" // emerald active
  },

  // Verified Contact Points
  contact: {
    email: "sampatakumarsv@gmail.com",
    emailMailto: "mailto:sampatakumarsv@gmail.com",
    phone: "+91 9380395607",
    phoneTel: "tel:+919380395607",
    whatsapp: "https://wa.me/919380395607",
    whatsappDisplay: "+91 9380395607",
    preferredMethod: "Email or WhatsApp"
  },

  // Social & Professional Profiles
  socials: {
    github: {
      label: "GitHub",
      url: "https://github.com/sampatakumar",
      username: "@sampatakumar",
      display: "github.com/sampatakumar"
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sampatakumar-sv",
      username: "sampatakumar-sv",
      display: "linkedin.com/in/sampatakumar-sv"
    },
    whatsapp: {
      label: "WhatsApp",
      url: "https://wa.me/919380395607",
      display: "+91 9380395607"
    }
  },

  // Portfolio & Resume Assets
  links: {
    website: "https://sampatakumar.github.io/",
    services: "https://sampatakumar.github.io/services",
    agencyName: "SV Digital Solutions",
    resume: "/Sampatakumar.pdf",
    researchPaper: "/SSH_IRE_Journals.pdf"
  },

  // Authentic Imagery Assets (in /public and remote CDN)
  assets: {
    profilePhoto: "https://avatars.githubusercontent.com/u/148532254?v=4",
    avatar: "https://avatars.githubusercontent.com/u/148532254?v=4",
    localProfilePhoto: "/profile.png",
    localAvatar: "/avatar.png",
    githubAvatar: "https://avatars.githubusercontent.com/u/148532254?v=4",
    handleIcon: "/handleicon.png",
    resume: "/Sampatakumar.pdf"
  },

  // Peer-Reviewed Publication
  publication: {
    title: "Smart Skill Hub: Autonomous Skill Intelligence, Career Acceleration & Adaptive Learning Systems",
    journal: "IRE Journals (International Research and Engineering Journals)",
    issn: "2456-8880",
    role: "Principal Author & Lead System Architect",
    paperUrl: "/SSH_IRE_Journals.pdf",
    topics: ["Autonomous Skill Taxonomy", "Dockerized Sandboxed Code Execution", "ATS Optimization", "Low-Latency LLM Pipelines"]
  },

  // Authentic Biography
  bio: [
    "I'm a Computer Science Engineering student based in Bengaluru, India, focused on full-stack web engineering, software architecture, and intelligent systems.",
    "Rather than treating engineering as theoretical exercises, I build real-world, complete applications—from designing responsive, accessible interfaces to architecting modular Node.js REST APIs, database schemas, and AI pipelines.",
    "My flagship capstone project, Smart Skill Hub, combines developer intelligence, automated Docker code execution, and ATS resume tailoring, and was published as a peer-reviewed research paper in IRE Journals (ISSN: 2456-8880)."
  ]
};

export default profile;

