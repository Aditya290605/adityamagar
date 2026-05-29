export const METADATA = {
  author: "Aditya Magar",
  title: "Aditya Magar | Flutter Developer & Software Engineer",
  description:
    "Aditya Magar — Flutter Developer specializing in scalable, production-ready mobile applications with clean architecture, real-time data systems, and AI integrations.",
  siteUrl: "https://adityamagar.me/",
  twitterHandle: "@AdityaM97708801",
  keywords: [
    "Aditya Magar",
    "Aditya Magar portfolio",
    "Aditya Magar Flutter developer",
    "Flutter Developer",
    "Mobile App Developer",
    "Cross Platform Developer",
    "Software Engineer",
    "Dart developer",
    "Flutter engineer India",
    "Portfolio",
  ].join(", "),
  image: "https://adityamagar.me/preview-v2.png",
  language: "English",
  themeColor: "#000000",
};

export const RESUME_URL =
  "https://drive.google.com/file/d/1L4OQ1YsnwN4hNv8b_5_vqhSYkhqnqG92/view?usp=sharing";

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const NAV_LINKS = [
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const TYPED_STRINGS = [
  "Building scalable mobile apps with Flutter",
  "Crafting clean architecture & real-time systems",
  "Integrating AI into modern mobile experiences",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:magaraditya2911@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aditya-magar-3b3b602b3/",
  },
  {
    name: "github",
    url: "https://github.com/Aditya290605",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/aditya_magar_29/",
  },
  {
    name: "twitter",
    url: "https://x.com/AdityaM97708801",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "dart",
    "javascript",
    "typescript",
    "python",
    "java",
    "firebase",
    "vite",
    "nodejs",
    "figma",
  ],
  librariesAndFrameworks: [
    "flutter",
    "supabase",
    "react",
    "nextjs",
    "tailwindcss",
    "redux",
    "fastapi",
  ],
  databases: ["firebase", "mongodb", "mysql"],
  other: ["git", "github", "vscode", "android-studio"],
};

export const PROJECTS = [
  {
    name: "GradeVise",
    imageKey: "gradevise",
    description: "AI-powered automated grading system reducing evaluation time by 60% 🤖",
    gradient: ["#6366F1", "#8B5CF6"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "python"],
    // New fields
    slug: "gradevise",
    featured: true,
    status: "completed",
    image: "/projects/gradevise.png",
    overview:
      "GradeVise is an AI-powered automated grading system designed to drastically reduce evaluation time for educators. Using machine learning models and Flutter for a seamless mobile experience, it analyzes student submissions and provides instant, consistent grading with detailed feedback.",
    achievements: [
      "Reduced evaluation time by 60% for educators using ML-based auto-grading",
      "Built end-to-end Flutter mobile app with Firebase backend for real-time sync",
      "Implemented Python-based ML pipeline for answer analysis and scoring",
      "Achieved 92% grading accuracy compared to manual evaluation benchmarks",
    ],
    timeline: [
      { date: "Jan 2025", label: "Project Inception", description: "Research phase — explored NLP models for automated grading" },
      { date: "Feb 2025", label: "MVP Development", description: "Built core Flutter app with Firebase auth and Python grading API" },
      { date: "Mar 2025", label: "ML Integration", description: "Integrated ML scoring pipeline and fine-tuned accuracy" },
      { date: "Apr 2025", label: "Launch", description: "Deployed and tested with pilot group of educators" },
    ],
    techStack: ["Flutter", "Firebase", "Python", "Machine Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "ItineraryAI",
    imageKey: "itineraryai",
    description: "Smart AI travel planner generating optimized day-wise itineraries ✈️",
    gradient: ["#0EA5E9", "#06B6D4"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "dart"],
    slug: "itineraryai",
    featured: true,
    status: "completed",
    image: "/projects/itineraryai.png",
    overview:
      "ItineraryAI is a smart travel planning application that leverages AI to generate optimized, day-wise itineraries based on user preferences, budget, and travel dates. Built with Flutter and Firebase, it provides a beautiful, interactive planning experience.",
    achievements: [
      "Generates personalized day-wise travel itineraries using AI recommendations",
      "Supports budget optimization and time-based scheduling algorithms",
      "Real-time Firebase sync for collaborative trip planning",
      "Clean, intuitive UI built with Flutter for cross-platform deployment",
    ],
    timeline: [
      { date: "Dec 2024", label: "Concept & Design", description: "Designed UI/UX flows for itinerary generation and trip management" },
      { date: "Jan 2025", label: "Core Development", description: "Built Flutter app with Firebase backend and AI integration" },
      { date: "Feb 2025", label: "AI Optimization", description: "Refined itinerary generation with budget and preference algorithms" },
    ],
    techStack: ["Flutter", "Firebase", "Dart", "AI/ML"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Fitness Geni",
    imageKey: "fitness-geni",
    description: "AI-powered fitness tracking with adaptive workout plans 💪",
    gradient: ["#10B981", "#059669"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "supabase", "dart"],
    slug: "fitness-geni",
    featured: true,
    status: "completed",
    image: "/projects/fitness-geni.png",
    overview:
      "Fitness Geni is an AI-powered fitness tracking application that creates adaptive workout plans tailored to individual goals and progress. Using Supabase for real-time data and Flutter for a smooth mobile experience, it tracks workouts, analyzes patterns, and adjusts plans dynamically.",
    achievements: [
      "Adaptive AI workout plans that evolve based on user performance data",
      "Real-time progress tracking with Supabase backend",
      "Comprehensive exercise library with form guides and video demonstrations",
      "Built with clean architecture for maintainability and scalability",
    ],
    timeline: [
      { date: "Nov 2024", label: "Planning", description: "Researched fitness APIs and AI-driven workout personalization" },
      { date: "Dec 2024", label: "Development", description: "Built Flutter app with Supabase integration and workout tracking" },
      { date: "Jan 2025", label: "AI Integration", description: "Added adaptive workout plan generation based on user data" },
    ],
    techStack: ["Flutter", "Supabase", "Dart", "AI"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Cricket Scorer",
    imageKey: "cricket-scorer",
    description: "Real-time cricket scoring app with live analytics 📊",
    gradient: ["#F59E0B", "#D97706"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "dart"],
    slug: "cricket-scorer",
    featured: false,
    status: "completed",
    image: "/projects/cricket-scorer.png",
    overview:
      "Cricket Scorer is a real-time cricket scoring application that provides live match analytics, ball-by-ball updates, and comprehensive statistics. Built with Flutter and Firebase for instant data synchronization across devices.",
    achievements: [
      "Real-time ball-by-ball scoring with instant Firebase sync",
      "Live analytics dashboard with batting/bowling statistics",
      "Multi-device support for scorer and viewer roles",
      "Offline-first architecture with automatic sync on reconnection",
    ],
    timeline: [
      { date: "Oct 2024", label: "Design", description: "Designed scoring interface and analytics dashboard" },
      { date: "Nov 2024", label: "Development", description: "Built Flutter app with Firebase real-time database" },
    ],
    techStack: ["Flutter", "Firebase", "Dart"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Pneumonia Prediction",
    imageKey: "pneumonia-prediction",
    description: "AI-powered pneumonia detection from chest X-ray images 🩺",
    gradient: ["#EF4444", "#DC2626"],
    url: "https://pneumonia-prediction-steel.vercel.app/",
    tech: ["flutter", "react", "typescript", "python"],
    slug: "pneumonia-prediction",
    featured: true,
    status: "live",
    image: "/projects/pneumonia-prediction.png",
    overview:
      "Pneumonia Prediction is an AI-powered medical imaging application that detects pneumonia from chest X-ray images using deep learning. The system features a React/TypeScript web interface and a Flutter mobile app, with a Python ML backend for image classification.",
    achievements: [
      "95%+ accuracy in pneumonia detection using CNN-based image classification",
      "Dual-platform deployment — Flutter mobile app and React web interface",
      "Python FastAPI backend serving trained ML models for real-time prediction",
      "Live deployment on Vercel for public access and testing",
    ],
    timeline: [
      { date: "Sep 2024", label: "Research", description: "Studied CNN architectures for medical image classification" },
      { date: "Oct 2024", label: "Model Training", description: "Trained and validated pneumonia detection model on chest X-ray dataset" },
      { date: "Nov 2024", label: "App Development", description: "Built Flutter mobile and React web interfaces" },
      { date: "Dec 2024", label: "Deployment", description: "Deployed web app on Vercel with FastAPI backend" },
    ],
    techStack: ["Flutter", "React", "TypeScript", "Python", "CNN", "FastAPI"],
    liveUrl: "https://pneumonia-prediction-steel.vercel.app/",
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "AI Voice Assistant",
    imageKey: "ai-voice-assistant",
    description: "Flutter AI voice assistant with speech-to-text & image gen 📣",
    gradient: ["#8B5CF6", "#7C3AED"],
    url: "https://ai-voice-assistant-igj9.onrender.com",
    tech: ["flutter", "firebase", "dart"],
    slug: "ai-voice-assistant",
    featured: false,
    status: "live",
    image: "/projects/ai-voice-assistant.png",
    overview:
      "AI Voice Assistant is a Flutter-based voice assistant application featuring speech-to-text, text-to-speech, and AI-powered image generation. It uses Firebase for authentication and data management, with AI APIs for natural language understanding.",
    achievements: [
      "Real-time speech-to-text and text-to-speech with natural voice interactions",
      "AI-powered image generation from voice commands",
      "Firebase authentication and conversation history storage",
      "Deployed live on Render for public access",
    ],
    timeline: [
      { date: "Aug 2024", label: "Concept", description: "Designed voice interaction flows and AI integration architecture" },
      { date: "Sep 2024", label: "Development", description: "Built Flutter app with speech recognition and AI APIs" },
      { date: "Oct 2024", label: "Launch", description: "Deployed on Render with Firebase backend" },
    ],
    techStack: ["Flutter", "Firebase", "Dart", "AI APIs"],
    liveUrl: "https://ai-voice-assistant-igj9.onrender.com",
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Expense Tracker Pro",
    imageKey: "expense-tracker",
    description: "Smart personal finance tracker with AI-driven spending insights 💸",
    gradient: ["#14B8A6", "#0D9488"],
    url: "https://expense-tracker-nu-nine-96.vercel.app/",
    tech: ["react", "typescript", "mongodb", "tailwindcss"],
    slug: "expense-tracker-pro",
    featured: false,
    status: "live",
    image: "/projects/expense-tracker.png",
    overview:
      "Expense Tracker Pro is a smart personal finance tracking application with AI-driven spending insights. Built with React and TypeScript, it features interactive charts, category-based tracking, and intelligent budget recommendations powered by MongoDB.",
    achievements: [
      "AI-driven spending insights and budget recommendations",
      "Interactive charts and visualizations for expense categories",
      "Full CRUD operations with MongoDB backend",
      "Responsive design with Tailwind CSS, deployed on Vercel",
    ],
    timeline: [
      { date: "Jul 2024", label: "Design", description: "Designed finance dashboard UI with chart integrations" },
      { date: "Aug 2024", label: "Development", description: "Built React/TypeScript app with MongoDB and Tailwind CSS" },
    ],
    techStack: ["React", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://expense-tracker-nu-nine-96.vercel.app/",
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "DailyFlow",
    imageKey: "dailyflow",
    description: "Productivity & task analytics with interactive contribution graphs 📊",
    gradient: ["#3B82F6", "#2563EB"],
    url: "https://dailyflow-e702.onrender.com",
    tech: ["react", "nodejs", "mongodb", "tailwindcss"],
    slug: "dailyflow",
    featured: false,
    status: "live",
    image: "/projects/dailyflow.png",
    overview:
      "DailyFlow is a productivity and task analytics platform featuring interactive contribution graphs, task management, and streak tracking. Built with a full MERN stack for robust performance and real-time updates.",
    achievements: [
      "Interactive GitHub-style contribution graphs for task completion tracking",
      "Full MERN stack with real-time task synchronization",
      "Streak tracking and productivity analytics dashboard",
      "Deployed on Render with MongoDB Atlas backend",
    ],
    timeline: [
      { date: "Jun 2024", label: "Planning", description: "Designed task analytics and contribution graph system" },
      { date: "Jul 2024", label: "Development", description: "Built full-stack app with React, Node.js, and MongoDB" },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://dailyflow-e702.onrender.com",
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Perplexity Clone",
    imageKey: "perplexity-clone",
    description: "Full-stack AI search interface using Flutter Web & FastAPI 🔍",
    gradient: ["#1E293B", "#334155"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "python", "dart"],
    slug: "perplexity-clone",
    featured: false,
    status: "completed",
    image: "/projects/perplexity-clone.webp",
    overview:
      "Perplexity Clone is a full-stack AI-powered search interface built with Flutter Web and FastAPI. It replicates the conversational search experience with source citations, follow-up questions, and intelligent answer synthesis.",
    achievements: [
      "AI-powered conversational search with source citations",
      "Flutter Web frontend with responsive, modern UI",
      "FastAPI backend with efficient query processing",
      "Real-time answer synthesis with follow-up question generation",
    ],
    timeline: [
      { date: "May 2024", label: "Research", description: "Studied Perplexity's UX patterns and AI search architecture" },
      { date: "Jun 2024", label: "Development", description: "Built Flutter Web UI and FastAPI search backend" },
    ],
    techStack: ["Flutter", "Python", "Dart", "FastAPI"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "Neo-Route",
    imageKey: "neo-route",
    description: "Eco-friendly route optimizer with live traffic & weather data 🚚",
    gradient: ["#22C55E", "#16A34A"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "python", "dart"],
    slug: "neo-route",
    featured: false,
    status: "completed",
    image: "/projects/neo-route.png",
    overview:
      "Neo-Route is an eco-friendly route optimization application that calculates the most fuel-efficient routes using live traffic and weather data. Built with Flutter and Python, it helps reduce carbon emissions while saving travel time.",
    achievements: [
      "Eco-friendly route optimization reducing estimated fuel consumption by 15%",
      "Integration with live traffic and weather APIs for real-time adjustments",
      "Flutter mobile app with interactive map visualization",
      "Python backend for route calculation algorithms",
    ],
    timeline: [
      { date: "Apr 2024", label: "Concept", description: "Researched green routing algorithms and traffic API integrations" },
      { date: "May 2024", label: "Development", description: "Built Flutter app with Python routing backend" },
    ],
    techStack: ["Flutter", "Python", "Dart", "Maps API"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "SignBridge",
    imageKey: "signbridge",
    description: "Accessibility-focused learning app with real-time sign recognition ✋",
    gradient: ["#F97316", "#EA580C"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "python"],
    slug: "signbridge",
    featured: false,
    status: "completed",
    image: "/projects/signbridge.png",
    overview:
      "SignBridge is an accessibility-focused learning application that teaches sign language through real-time hand gesture recognition. Using Flutter for the mobile interface and Python ML models for gesture detection, it bridges communication gaps for the hearing impaired.",
    achievements: [
      "Real-time sign language recognition using computer vision ML models",
      "Interactive learning modules with progress tracking via Firebase",
      "Flutter mobile app optimized for camera-based gesture detection",
      "Gamified learning experience with achievement badges",
    ],
    timeline: [
      { date: "Mar 2024", label: "Research", description: "Studied hand gesture recognition models and sign language datasets" },
      { date: "Apr 2024", label: "Development", description: "Built Flutter app with Python ML gesture recognition backend" },
    ],
    techStack: ["Flutter", "Firebase", "Python", "Computer Vision"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
  {
    name: "ClipForge",
    imageKey: "clipforge",
    description: "Responsive React application template with Tailwind CSS & Redux ⚛️",
    gradient: ["#6D28D9", "#4C1D95"],
    url: "https://github.com/Aditya290605",
    tech: ["react", "redux", "tailwindcss", "javascript"],
    slug: "clipforge",
    featured: false,
    status: "completed",
    image: "/projects/clipforge.webp",
    overview:
      "ClipForge is a responsive React application template built with Tailwind CSS and Redux for state management. It serves as a production-ready starter for building modern web applications with a clean, modular architecture.",
    achievements: [
      "Production-ready React template with Redux state management",
      "Fully responsive design system built with Tailwind CSS",
      "Modular component architecture for easy customization",
      "Optimized build configuration for fast loading performance",
    ],
    timeline: [
      { date: "Feb 2024", label: "Setup", description: "Configured React project with Tailwind CSS and Redux toolkit" },
      { date: "Mar 2024", label: "Development", description: "Built reusable component library and responsive layouts" },
    ],
    techStack: ["React", "Redux", "Tailwind CSS", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605",
  },
];

export const WORK_CONTENTS = {
  SPINACHO: [
    {
      title: "Spinacho",
      description:
        "Flutter Developer · Internship · Apr 2025 - Jun 2025 · 3 mos · Pune, Maharashtra, India · Remote. First professional internship, working on rider and user mobile applications in a team environment.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/spinacho.png" alt="Spinacho" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Responsibilities",
      description:
        "Implemented pixel-perfect mobile UIs in Flutter by translating Figma designs into functional screens. Built user and rider app interfaces following clean architecture principles. Collaborated with team members on UI/UX workflows and design consistency. Assisted in organizing tasks and coordinating with teammates during development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/spinacho.png" alt="Spinacho" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Learnings & Impact",
      description:
        "Gained foundational experience in professional team workflows and task coordination. Learned how UI/UX decisions are made and how designs move from Figma to production code. Built a strong foundation in clean architecture and maintainable Flutter UI development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/spinacho.png" alt="Spinacho" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
  ],
  REVOLTRONEX: [
    {
      title: "RevoltroneX",
      description:
        "Flutter Developer Intern · Internship · Aug 2025 - Dec 2025 · 5 mos · Mumbai, Maharashtra, India · Remote. Worked on ArvyaX, a production-grade application featured at CES 2026, showcasing the product on a global technology stage.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/revoltronx.png" alt="RevoltroneX" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Responsibilities",
      description:
        "Designed and developed the mobile application from scratch with the team. Built a highly dynamic app architecture using JSON-driven configurations. Implemented JSON serialization and handled complex network responses. Developed and integrated custom APIs for dynamic features. Managed backend data with MongoDB and Cloudflare. Worked on adding features to a live production app without breaking functionality.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/revoltronx.png" alt="RevoltroneX" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Learnings & Impact",
      description:
        "Learned how professional teams collaborate, plan, and execute features at scale. Gained deep understanding of JSON-driven architecture for flexible and scalable apps. Improved skills in full-cycle feature development — from backend APIs to frontend integration. Developed confidence in working on live, evolving products used by real users.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/revoltronx.png" alt="RevoltroneX" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
  ],
  LIBERDAT: [
    {
      title: "Liberdat",
      description:
        "Flutter Developer · Internship · Dec 2025 - Jan 2026 · 2 mos · Amsterdam, North Holland, Netherlands · Remote. Worked on a real-time health analytics mobile app to monitor treatments, symptoms, and health trends.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/liberdat.jpeg" alt="Liberdat" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Responsibilities",
      description:
        "Developed and maintained production-level Flutter & Dart code. Integrated APIs to fetch and display real-time health insights. Improved UX to make complex health data easy to understand. Participated in testing, bug reporting, and performance optimization. Assisted in deploying builds to Google Play Store and Apple App Store.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/liberdat.jpeg" alt="Liberdat" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
    {
      title: "Learnings & Impact",
      description:
        "Learned how real production apps are built, tested, and shipped. Gained experience working with international teams and managing tasks professionally. Understood the full app lifecycle from development to post-release improvements.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/experiece_logo/liberdat.jpeg" alt="Liberdat" className="w-28 h-28 object-contain rounded-xl drop-shadow-lg" />
        </div>
      ),
    },
  ],
};

export const WORK_EXPERIENCE = [
  {
    role: "Flutter Developer",
    company: "Liberdat",
    companyUrl: "https://liberdat.com",
    logo: "/experiece_logo/liberdat.jpeg",
    dateRange: "Dec 2025 — Jan 2026",
    location: "Amsterdam, Netherlands · Remote",
    isCurrent: true,
    bullets: [
      "Developed and maintained production-level Flutter & Dart code for a health analytics platform",
      "Integrated APIs to fetch and display real-time health insights for users",
      "Improved UX to make complex health data easy to understand",
      "Participated in testing, bug reporting, and performance optimization",
      "Assisted in deploying builds to Google Play Store and Apple App Store",
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Play Store", "App Store"],
  },
  {
    role: "Flutter Developer Intern",
    company: "RevoltroneX",
    companyUrl: "https://revoltronx.com",
    logo: "/experiece_logo/revoltronx.png",
    dateRange: "Aug 2025 — Dec 2025",
    location: "Mumbai, India · Remote",
    isCurrent: false,
    bullets: [
      "Designed and developed ArvyaX mobile application from scratch — featured at CES 2026",
      "Built highly dynamic app architecture using JSON-driven configurations",
      "Implemented JSON serialization and handled complex network responses",
      "Developed and integrated custom APIs for dynamic features",
      "Managed backend data with MongoDB and Cloudflare",
    ],
    techStack: ["Flutter", "Dart", "MongoDB", "Cloudflare", "REST APIs"],
  },
  {
    role: "Flutter Developer",
    company: "Spinacho",
    companyUrl: "#",
    logo: "/experiece_logo/spinacho.png",
    dateRange: "Apr 2025 — Jun 2025",
    location: "Pune, India · Remote",
    isCurrent: false,
    bullets: [
      "Implemented pixel-perfect mobile UIs by translating Figma designs into Flutter screens",
      "Built user and rider app interfaces following clean architecture principles",
      "Collaborated with team members on UI/UX workflows and design consistency",
      "Assisted in organizing tasks and coordinating with teammates during development sprints",
    ],
    techStack: ["Flutter", "Dart", "Figma", "Clean Architecture"],
  },
];

export const EDUCATION = [
  {
    institution: "Pune University",
    degree: "Bachelor of Engineering in Computer Science",
    dateRange: "2022 — 2026",
    location: "Pune, Maharashtra, India",
    description:
      "Focused on software engineering, data structures, algorithms, and mobile application development. Active participant in hackathons and coding competitions.",
  },
];

export const ABOUT = {
  bio: [
    "I'm Aditya Magar, a passionate Flutter Developer from Pune, India, specializing in building scalable, production-ready mobile applications. I focus on clean architecture, real-time data systems, and integrating AI into modern mobile experiences.",
    "With hands-on experience across 3 professional internships — including work on a product featured at CES 2026 — I've shipped apps to both the Google Play Store and Apple App Store. I thrive in collaborative, fast-paced environments where I can turn complex requirements into elegant, user-friendly interfaces.",
    "Beyond mobile development, I enjoy exploring web technologies like React and Next.js, experimenting with machine learning models, and contributing to open-source projects. When I'm not coding, you'll find me playing cricket or exploring new travel destinations.",
  ],
  location: "Pune, Maharashtra, India",
  stats: [
    { label: "Projects Shipped", value: 12 },
    { label: "Professional Internships", value: 3 },
    { label: "Apps on Play Store", value: 2 },
    { label: "Technologies Used", value: 15 },
  ],
};

export const BLOG_POSTS = [
  {
    slug: "building-flutter-apps-with-clean-architecture",
    title: "Building Flutter Apps with Clean Architecture",
    date: "March 15, 2025",
    tags: ["Flutter", "Architecture", "Dart"],
    excerpt:
      "How I structure large Flutter projects using Clean Architecture — separating data, domain, and presentation layers for maintainability and testability.",
    content: `## Why Clean Architecture Matters in Flutter

When I first started building Flutter apps, I fell into the common trap of putting everything in one file — API calls, business logic, and UI code all tangled together. It worked for small projects, but as soon as the codebase grew, it became a nightmare to maintain.

Clean Architecture changed everything for me. By separating concerns into distinct layers — **Data**, **Domain**, and **Presentation** — each part of the app becomes independently testable, replaceable, and understandable.

## The Three Layers

### 1. Data Layer
This is where all external interactions happen: API calls, local database queries, and caching logic. I use repository implementations here that fulfill contracts defined in the domain layer.

### 2. Domain Layer
The heart of the application. This contains entities, use cases, and repository interfaces. It has zero dependencies on Flutter or any external packages — pure Dart business logic.

### 3. Presentation Layer
Widgets, BLoCs/Cubits, and UI state management live here. This layer depends on the domain layer through use cases, never directly on the data layer.

## Key Takeaways

After shipping 5 production apps with this architecture, I can confidently say:
- **Testing becomes trivial** — each layer can be unit tested in isolation
- **Onboarding new developers is faster** — the structure is self-documenting
- **Swapping implementations is painless** — change your API provider without touching UI code
- **Feature development is predictable** — every new feature follows the same pattern

The initial setup takes more time, but the long-term maintainability gains are absolutely worth it.`,
  },
  {
    slug: "from-single-page-to-multi-route-portfolio",
    title: "Rebuilding My Portfolio: From SPA to Multi-Route",
    date: "May 10, 2025",
    tags: ["Next.js", "Portfolio", "Web Dev"],
    excerpt:
      "Why I moved from a single-page portfolio to a structured multi-route site, and what I learned about routing, SEO, and perceived performance.",
    content: `## The Problem with Single-Page Portfolios

My original portfolio was a single, long scrolling page. While it looked impressive with all the GSAP animations and Spline 3D elements, it had real problems:

- **SEO was terrible** — search engines saw one page with everything
- **Sharing specific content was impossible** — no unique URLs for projects or blog posts
- **Load time suffered** — everything loaded at once, even content users might never see
- **Navigation was confusing** — users had to scroll through everything to find what they wanted

## The Migration Strategy

Instead of rewriting from scratch, I chose a surgical approach: keep the beautiful home page intact and add new routes around it. Next.js Pages Router made this straightforward:

1. **Home page stays** — all GSAP animations, Spline 3D, and Typed.js effects preserved
2. **New routes added** — /work, /experience, /blog, /about, /contact, /resume
3. **Shared components created** — Navbar, Footer, PageHeader used across all pages
4. **Data centralized** — constants.js remained the single source of truth

## What I Learned

The biggest insight was that **multi-page doesn't mean multi-app**. With Next.js, route transitions are smooth, shared components maintain visual consistency, and each page can be independently optimized for SEO.

Static generation with \`getStaticProps\` means every project page and blog post is pre-rendered at build time — blazing fast loads with perfect SEO scores.`,
  },
  {
    slug: "flutter-state-management-comparison",
    title: "Flutter State Management in 2025: What Actually Works",
    date: "January 20, 2025",
    tags: ["Flutter", "State Management", "Riverpod"],
    excerpt:
      "A practical comparison of Bloc, Riverpod, and Provider after shipping 5 production Flutter apps — with real code and honest opinions.",
    content: `## The State Management Dilemma

Every Flutter developer eventually faces this question: which state management solution should I use? After shipping 5 production apps using different approaches, here's my honest take.

## Provider: The Gateway Drug

Provider was my first state management solution, and it's great for learning. It's simple, well-documented, and officially recommended by the Flutter team. But as apps grow, Provider's limitations become apparent:

- **Boilerplate increases** — ChangeNotifier classes everywhere
- **Dependency injection gets messy** — deeply nested MultiProvider trees
- **Testing requires context** — can't easily test providers in isolation

## Bloc: The Enterprise Choice

Bloc brings structure and predictability. The event-driven architecture makes it easy to trace exactly what's happening in your app. I used it for the ArvyaX app at RevoltroneX, and its strengths showed:

- **Predictable state transitions** — every state change goes through an event
- **Excellent testing** — bloc_test makes it trivial to verify behavior
- **Great DevTools** — time-travel debugging is incredibly useful

The downside? Boilerplate. Even with the Cubit shortcut, you're writing a lot of code for simple features.

## Riverpod: The Modern Winner

Riverpod is what I reach for now in new projects. It fixes Provider's issues while being more flexible than Bloc:

- **Compile-safe** — no more ProviderNotFoundException at runtime
- **No BuildContext needed** — providers work anywhere
- **Code generation** — @riverpod annotation eliminates boilerplate
- **Flexible** — StateNotifier, AsyncNotifier, or simple providers — pick what fits

## My Recommendation

For new Flutter projects in 2025, start with **Riverpod**. Use **Bloc** if your team already knows it or you need strict architectural patterns. Skip Provider for anything beyond tutorials.

The best state management solution is the one your team understands and can maintain. Don't chase trends — chase productivity.`,
  },
  {
    slug: "firebase-vs-supabase-for-flutter",
    title: "Firebase vs Supabase for Flutter Apps: An Honest Comparison",
    date: "February 5, 2025",
    tags: ["Flutter", "Firebase", "Supabase"],
    excerpt:
      "After building production apps with both Firebase and Supabase, here's my detailed comparison covering auth, databases, real-time features, pricing, and developer experience.",
    content: `## The Backend Dilemma

Choosing the right backend-as-a-service (BaaS) can make or break your Flutter project. I've shipped apps using both Firebase and Supabase, and each has distinct strengths.

## Firebase: The Mature Ecosystem

Firebase has been around longer, and it shows. The Flutter integration (FlutterFire) is polished, and the ecosystem is massive:

- **Authentication** — supports 10+ providers out of the box, easy setup
- **Firestore** — NoSQL document database with excellent real-time sync
- **Cloud Functions** — serverless backend logic in JavaScript/TypeScript
- **Crashlytics & Analytics** — production monitoring built in

The downside? Vendor lock-in with Google, NoSQL data modeling can get complex, and costs can spike unpredictably with Firestore reads.

## Supabase: The Open-Source Challenger

Supabase is Postgres-based, open-source, and rapidly improving:

- **PostgreSQL** — full relational database with SQL power
- **Row Level Security** — fine-grained permissions at the database level
- **Real-time** — built on Postgres logical replication
- **Self-hostable** — you own your data, no vendor lock-in

The trade-off? The Flutter SDK is newer, and some features still feel beta compared to Firebase.

## My Recommendation

Use **Firebase** for rapid prototyping, real-time apps, and when you need the full Google ecosystem. Use **Supabase** when you need relational data, SQL queries, or want to avoid vendor lock-in.

For my Fitness Geni app, Supabase was the perfect choice because workout data is inherently relational. For GradeVise, Firebase's real-time capabilities made more sense.`,
  },
  {
    slug: "10-dart-tips-for-cleaner-flutter-code",
    title: "10 Dart Tips for Writing Cleaner Flutter Code",
    date: "December 10, 2024",
    tags: ["Dart", "Flutter", "Tips"],
    excerpt:
      "Small Dart language features that dramatically improve code readability — from cascade notation to pattern matching in Dart 3.",
    content: `## Why Clean Code Matters

Clean code isn't about showing off — it's about your future self (and teammates) being able to understand what you wrote 6 months later. Here are 10 Dart patterns I use daily.

## 1. Cascade Notation (..)

Instead of repeating the object reference, chain operations:

final controller = TextEditingController()
  ..text = 'Hello'
  ..selection = TextSelection.collapsed(offset: 5);

## 2. Collection If and For

Build lists conditionally without separate logic:

final items = [
  'Home',
  if (isLoggedIn) 'Profile',
  for (var page in extraPages) page,
];

## 3. Named Constructors

Make your intent clear with descriptive constructors instead of boolean flags.

## 4. Extension Methods

Add functionality to existing classes without inheritance. Perfect for String formatting, DateTime utilities, etc.

## 5. Sealed Classes (Dart 3)

Pattern matching with sealed classes eliminates runtime errors in state management. The compiler enforces exhaustive handling.

## 6. Records for Multiple Returns

Return multiple values without creating a class: (String name, int age) getUserInfo() => ('Aditya', 22);

## 7. Null-Aware Operators

Master ?., ??, ??=, and ?[] to handle nullability elegantly.

## 8. const Constructors

Use const wherever possible — it improves performance by enabling compile-time constants and widget reuse.

## 9. typedef for Function Types

Name your function signatures for readability: typedef OnUserTap = void Function(User user);

## 10. Enhanced Enums

Add methods, fields, and computed properties to enums for type-safe, self-documenting code.

## Conclusion

These aren't groundbreaking tricks — they're small habits that compound into dramatically cleaner codebases. Start with one or two and build from there.`,
  },
  {
    slug: "responsive-flutter-ui-design-patterns",
    title: "Responsive Flutter UI: Design Patterns That Scale",
    date: "November 15, 2024",
    tags: ["Flutter", "UI/UX", "Responsive"],
    excerpt:
      "How to build Flutter UIs that look great on phones, tablets, and web — using LayoutBuilder, MediaQuery, and adaptive design patterns.",
    content: `## The Responsive Challenge

Flutter's promise is "one codebase, every platform." But that doesn't mean one layout. A phone layout shoved onto a tablet looks terrible. Here's how I handle responsive design.

## MediaQuery vs LayoutBuilder

MediaQuery gives you the full screen dimensions — useful for top-level layout decisions. LayoutBuilder gives you the available space for a specific widget — better for component-level responsiveness.

I use MediaQuery for deciding "phone vs tablet vs desktop" and LayoutBuilder for "how much space does this card have?"

## The Breakpoint System

I define breakpoints as constants and use them consistently:

- Mobile: < 600px
- Tablet: 600px - 1024px
- Desktop: > 1024px

## Adaptive Widgets Pattern

Create wrapper widgets that render different layouts based on screen size. For example, a ProductGrid might show 2 columns on mobile, 3 on tablet, and 4 on desktop.

## Flexible Spacing

Never hardcode margins and padding. Use percentages or responsive scale factors that adapt to screen size. MediaQuery.of(context).size.width * 0.05 gives you 5% screen width padding.

## Text Scaling

Account for system text scaling settings. Test your UI with both 0.8x and 1.5x text scale to ensure nothing breaks.

## Platform-Specific Patterns

Use the platform to decide between Material and Cupertino widgets. Users expect platform-native interactions — a DatePicker should look like iOS on iOS and Material on Android.

## Key Takeaway

Responsive design isn't an afterthought — it's a core architectural decision. Build it into your widget tree from day one, not as a retrofit.`,
  },
  {
    slug: "deploying-flutter-apps-to-production",
    title: "The Complete Guide to Deploying Flutter Apps in 2025",
    date: "October 20, 2024",
    tags: ["Flutter", "DevOps", "Deployment"],
    excerpt:
      "Everything I've learned about shipping Flutter apps to the Play Store, App Store, and web — from signing keys to CI/CD pipelines.",
    content: `## From Code to Users

Building a great app is only half the battle. Getting it into users' hands reliably and repeatedly is where deployment skills matter.

## Android Deployment

### Signing & Keystores
Generate your upload keystore once and guard it with your life. Lose it, and you can never update your app.

### Play Store Console
The review process typically takes 1-3 days for new apps. Common rejection reasons: missing privacy policy, unclear permissions usage, and content policy violations.

### App Bundle vs APK
Always use App Bundles (.aab) — they're smaller, optimized per device, and required by Google since 2021.

## iOS Deployment

### Certificates & Provisioning
Apple's signing process is more complex. You need a Developer Certificate, App ID, and Provisioning Profile. Xcode handles most of this, but understanding the concepts prevents debugging nightmares.

### App Store Connect
Apple's review is stricter and takes 1-7 days. They check for crashes, broken links, placeholder content, and guideline compliance.

### TestFlight
Use TestFlight for beta testing before submission. It's invaluable for catching device-specific issues.

## Flutter Web Deployment

For web apps, I recommend Vercel or Firebase Hosting:
- Build with flutter build web --release
- Deploy the build/web directory
- Configure proper caching headers for .js and .wasm files

## CI/CD with GitHub Actions

Automate your builds and deployments. A basic pipeline: lint → test → build → deploy. Tools like Codemagic and Fastlane simplify the process significantly.

## Lessons Learned

- Always test on real devices before submission
- Keep release notes professional and descriptive
- Monitor crash reports immediately after each release
- Have a rollback plan for critical bugs`,
  },
  {
    slug: "ai-integration-in-flutter-apps",
    title: "Integrating AI into Flutter Apps: A Practical Guide",
    date: "September 8, 2024",
    tags: ["Flutter", "AI", "Machine Learning"],
    excerpt:
      "How I've integrated AI features into Flutter apps — from speech recognition and image generation to predictive models and natural language processing.",
    content: `## AI in Mobile Apps is No Longer Optional

Users expect smart, predictive, personalized experiences. Here's how I've added AI capabilities to Flutter apps without a PhD in machine learning.

## On-Device vs Cloud AI

### On-Device (TensorFlow Lite)
- Fast inference, no network latency
- Works offline
- Limited model size and complexity
- Good for: image classification, pose detection, text recognition

### Cloud APIs (OpenAI, Google AI)
- Powerful models, unlimited complexity
- Requires network connection
- Per-request pricing
- Good for: text generation, complex reasoning, image generation

## Speech-to-Text

For my AI Voice Assistant app, I used the speech_to_text package for real-time transcription. Key learnings:
- Request microphone permissions early and gracefully
- Handle partial vs final transcriptions differently
- Provide visual feedback during listening
- Support multiple languages from day one

## Image Generation

Integrating AI image generation requires a backend proxy. Never expose API keys in your Flutter app. I use a FastAPI backend that:
1. Receives the prompt from the Flutter app
2. Calls the AI API server-side
3. Returns the generated image URL

## Predictive Models

For Pneumonia Prediction, I trained a CNN model in Python, converted it to TFLite, and loaded it directly in the Flutter app. The key challenge was preprocessing — the image must be resized and normalized exactly like the training data.

## Key Principles

- Start with cloud APIs for prototyping, optimize with on-device models later
- Always have fallback behavior when AI features are unavailable
- Be transparent with users about AI-generated content
- Test with diverse inputs — AI models can have surprising blind spots`,
  },
  {
    slug: "optimizing-flutter-performance-guide",
    title: "Optimizing Flutter App Performance: From 60fps to 120fps",
    date: "April 18, 2025",
    tags: ["Flutter", "Performance", "Mobile Dev"],
    excerpt:
      "A complete profiling and optimization checklist for Flutter apps — fixing jank, optimizing build contexts, reducing memory overhead, and achieving buttery-smooth 120fps animations.",
    content: `## The Quest for 120fps
    
Modern mobile devices boast 120Hz displays, making performance expectations higher than ever. If your Flutter app is stuttering or dropping frames, users will feel it immediately. Here is a battle-tested guide to optimizing your Flutter apps.

## 1. Eliminate Unnecessary Rebuilds

The most common source of performance bottlenecks in Flutter is rebuilding widgets that haven't changed.
- **Use const constructors:** This tells Flutter that the widget can be cached and reused.
- **Split large widgets:** Break down monolithic widgets into smaller stateless widgets so that state changes only rebuild the specific nodes that need updates.
- **Optimize list views:** Always use \`ListView.builder\` instead of \`ListView\` for long lists, as it lazily loads widgets that are visible on the screen.

## 2. Leverage RepaintBoundaries

When a widget paints, it can trigger repainting of its sibling widgets. A \`RepaintBoundary\` creates a separate display list for its child, isolating repaints:
- Use it around heavy animations or complex drawings.
- Use it for widgets that update frequently while their surroundings remain static (e.g., custom loaders, progress bars).

## 3. Avoid Expensive Build Operations

Never perform heavy synchronous computations, file I/O, or JSON parsing directly inside a \`build\` method. The build method should be pure and fast (under 16ms for 60fps, under 8ms for 120fps). Offload heavy work to background isolates using \`compute()\` or workpools.

## 4. Optimize Image Assets

Unoptimized images are a massive memory drain:
- Always resize images to the actual display dimensions.
- Use \`cacheWidth\` and \`cacheHeight\` on \`Image.asset\` or \`Image.network\` to decode images at their display size, saving megabytes of RAM.
- Compress images using modern formats like WebP.

## 5. Profile with Flutter DevTools

Don't guess at performance issues — measure them:
- Use the **Performance** tab to analyze frame times and identify CPU/GPU bottlenecks.
- Use the **CPU Profiler** to find slow functions.
- Use the **Memory** tab to detect leaks and inspect the heap.

Following these practices helped me reduce CPU overhead by 40% and reach stable 120fps in the ArvyaX app!`,
  },
  {
    slug: "mastering-git-collaborative-workflow",
    title: "Mastering Git Workflows for Seamless Collaboration",
    date: "May 25, 2025",
    tags: ["Git", "DevOps", "Workflow"],
    excerpt:
      "Advanced Git techniques and strategies to streamline pull requests, manage branch releases, squash commits, and maintain a pristine git history in team environments.",
    content: `## Git Beyond the Basics

Most developers know \`git add\`, \`git commit\`, and \`git push\`. But in a fast-paced team, basic Git isn't enough. A messy git history with hundreds of "fix typo" commits makes code review and debugging a nightmare. Here is how to master Git for professional collaboration.

## 1. Choose the Right Branching Strategy

- **Git Flow:** Best for traditional release cycles with distinct releases.
- **GitHub Flow:** Simple, feature-branch-based workflow that is perfect for continuous deployment.
- **Trunk-Based Development:** Developers merge small, frequent updates to a single branch ("trunk"), minimizing merge conflicts.

## 2. Use Interactive Rebase for Clean History

Before opening a pull request, clean up your commits using \`git rebase -i\`. This lets you:
- **Squash:** Combine multiple minor commits into a single logical commit.
- **Reword:** Edit commit messages for clarity.
- **Fixup:** Merge a commit into its predecessor without changing the message.

Command: \`git rebase -i main\`

## 3. The Power of Cherry-Picking

If you need to apply a specific bugfix commit from a development branch to production without merging the entire branch, use \`git cherry-pick <commit-hash>\`. It cleanly copies that change onto your current branch.

## 4. Resolving Merge Conflicts Safely

When conflicts occur:
1. Don't panic.
2. Rebase your feature branch against the updated target branch (\`git pull --rebase origin main\`).
3. Use a visual merge tool (like VS Code or GitKraken) to resolve conflicts file by file.
4. Run your test suite before completing the rebase (\`git rebase --continue\`).

## 5. Enforce Quality with Git Hooks

Use pre-commit and pre-push hooks to automatically run linter checks, format code, and execute unit tests before any code leaves your local machine. This guarantees that broken code never reaches the shared repository.

Clean commits reflect a structured mind. By mastering these workflows, you make your code reviews faster and your deployments safer!`,
  },
];

export const AWARDS = [
  {
    issuer: "Google",
    title: "Google Solution Challenge — Regional Finalist",
    year: "2024",
    credentialUrl: "#",
  },
  {
    issuer: "CES 2026",
    title: "ArvyaX Product Showcase at CES 2026",
    year: "2026",
    credentialUrl: "#",
  },
];

export const GTAG = "";
