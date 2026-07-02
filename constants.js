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
  "https://drive.google.com/file/d/1hulHLD3ePtAu7NTXpItH7-yHQ6NhMK9g/view?usp=sharing";


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
  { name: "Home", href: "/" },
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
    description: "AI-powered automated grading and feedback system for teachers and students 🤖",
    gradient: ["#6366F1", "#8B5CF6"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "python"],
    // New fields
    slug: "gradevise",
    featured: true,
    status: "completed",
    image: "/projects/gradevise copy.png",
    overview:
      "GradeVise is an AI-powered automated grading system built to reduce the manual workload for educators and provide students with personalized, AI-driven feedback on assignments. Through features like classroom creation, answer key uploads, and automated evaluation, the app saves teachers time while giving students instant reports, progress-tracking visuals, and tailored learning resources.",
    achievements: [
      "Automates assignment evaluation and delivers personalized feedback through AI",
      "Provides instant performance reports, progress-tracking visuals, and tailored learning resources for students",
      "Reduces manual workload for teachers by providing AI-driven automated grading",
      "Supports United Nations SDGs of Quality Education, Reduced Inequalities, and Innovation",
    ],
    timeline: [
      { date: "Jan 2025", label: "Project Inception", description: "Research phase — explored NLP models for automated grading" },
      { date: "Feb 2025", label: "MVP Development", description: "Built core Flutter app with Firebase auth and Python grading API" },
      { date: "Mar 2025", label: "ML Integration", description: "Integrated ML scoring pipeline and fine-tuned accuracy" },
      { date: "Apr 2025", label: "Launch", description: "Deployed and tested with pilot group of educators" },
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Python", "Machine Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/AbhishekRDJ/GoogleSolution-Project",
  },
  {
    name: "Smart Trip Planner",
    imageKey: "itineraryai",
    description: "AI-powered trip planner generating personalized day-wise itineraries ✈️",
    gradient: ["#0EA5E9", "#06B6D4"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "dart"],
    slug: "itineraryai",
    featured: true,
    status: "completed",
    image: "/projects/itinaryAi.png",
    overview:
      "Smart Trip Planner is an AI-powered travel application that generates personalized itineraries using Google Gemini. Built with Flutter and Clean Architecture, it features Hive database for local caching, Firebase integration, voice-to-text input, and real-time connectivity status monitoring with retry mechanisms.",
    achievements: [
      "AI-Powered Trip Planning: Generate personalized itineraries using Google Gemini",
      "Offline Support & Local Caching: High-performance Hive database caching with connectivity monitoring",
      "Speech Input: Voice-to-text capability for natural, hands-free trip planning",
      "Clean Architecture: Predictable state handling using BLoC, dependency injection, and error handling",
    ],
    timeline: [
      { date: "Dec 2024", label: "Concept & Design", description: "Designed UI/UX flows for itinerary generation and trip management" },
      { date: "Jan 2025", label: "Core Development", description: "Built Flutter app with Firebase backend and AI integration" },
      { date: "Feb 2025", label: "AI Optimization", description: "Refined itinerary generation with budget and preference algorithms" },
    ],
    techStack: ["Flutter", "Dart", "BLoC Pattern", "Google Gemini via google_generative_ai", "Firebase Auth", "Cloud Firestore", "Hive Database", "GetIt", "Material 3", "Connectivity Plus", "Speech-to-Text"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605/smart_trip_planner_flutter",
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
    image: "/projects/fitnessgeni.png",
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
    description: "Digital scorer for local cricket matches with immersive audio and real-time cloud stats 🏏",
    gradient: ["#F59E0B", "#D97706"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "firebase", "dart"],
    slug: "cricket-scorer",
    featured: false,
    status: "completed",
    image: "/projects/cricketapp.png",
    overview:
      "Cricket Scorer is the ultimate digital scorer for your local cricket matches. It tracks runs, wickets, extras, and overs with real-time cloud stats synced to Firebase Firestore. The app features immersive, low-latency audio effects (like IPL-style trumpets for boundaries and wickets), live cap leaderboards (Orange/Purple), and a digital coin toss.",
    achievements: [
      "Real-time Scoring & Cloud Sync: Ball-by-ball tracking with instant sync to Firebase Firestore",
      "Immersive Audio Effects: Low-latency boundary and wicket sounds using audioplayers",
      "Leaderboards & Stats: Auto-generated Orange Cap (Most Runs) and Purple Cap (Most Wickets) tracking",
      "Digital Toss & Secure Auth: User auth via Firebase and Google Sign-In with an integrated digital coin toss",
    ],
    timeline: [
      { date: "Oct 2024", label: "Design", description: "Designed scoring interface and analytics dashboard" },
      { date: "Nov 2024", label: "Development", description: "Built Flutter app with Firebase real-time database" },
    ],
    techStack: ["Flutter", "Dart", "Provider", "Firebase (Auth, Firestore)", "AudioPlayers", "Lottie"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605/cricket_scorer",
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
    description: "Productivity ecosystem with interactive GitHub-style contribution heatmaps 📊",
    gradient: ["#3B82F6", "#2563EB"],
    url: "https://dailyflow-e702.onrender.com",
    tech: ["react", "nodejs", "mongodb", "tailwindcss"],
    slug: "dailyflow",
    featured: false,
    status: "live",
    image: "/projects/dailflow.png",
    overview:
      "DailyFlow is a productivity ecosystem that gamifies your daily progress. Built on the MERN stack, it features a beautiful, interactive GitHub-style Contribution Graph to visualize activity intensity. It tracks coding streaks, habits, and tasks, offering visual analytics, secure JWT authentication, and a responsive glassmorphism UI.",
    achievements: [
      "Visual Analytics & Heatmaps: Track completion rates, weekly trends, and consistency via an interactive GitHub-style Contribution Graph",
      "Secure Authentication: Enterprise-grade user auth with JWT and bcrypt password hashing",
      "Modern Glassmorphism UI: Clean, responsive design featuring glassmorphism animations powered by Tailwind CSS",
      "MERN Stack & Deployment: Robust full-stack application built with React/Vite, Node.js, Express, and MongoDB, deployed on Render",
    ],
    timeline: [
      { date: "Jun 2024", label: "Planning", description: "Designed task analytics and contribution graph system" },
      { date: "Jul 2024", label: "Development", description: "Built full-stack app with React, Node.js, and MongoDB" },
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://dailyflow-e702.onrender.com",
    githubUrl: "https://github.com/Aditya290605/DailyFlow",
  },
  {
    name: "CollabBoard",
    imageKey: "collabboard",
    description: "Real-time collaborative whiteboard with infinite canvas and live cursors 🎨",
    gradient: ["#8B31FF", "#06B6D4"],
    url: "https://collab-board-blush.vercel.app/",
    tech: ["nextjs", "typescript", "tailwindcss", "supabase"],
    slug: "collabboard",
    featured: true,
    status: "live",
    image: "/projects/collabboard.png",
    overview:
      "CollabBoard is a production-ready real-time collaborative whiteboard web app. Mutate a shared infinite canvas concurrently with live cursors, user presence, and deterministic colors. Built with Next.js App Router, TypeScript, and Tailwind CSS, it integrates Liveblocks, Fabric.js v6, Supabase, and NextAuth v5.",
    achievements: [
      "Real-time Sync & Presence: Low-latency sync via Liveblocks rooms with live cursor overlays and client connection badges",
      "11 Canvas Drawing Tools: Drawing, sticky notes, arrows, custom images, shapes, and eraser with keyboard shortcuts",
      "Power Workflows: Undo/redo history, dot-grid background toggle, board renaming/sharing, and PDF/PNG/SVG export",
      "Robust Auth & Storage: Supabase database integration with OAuth sign-in via Google and GitHub using NextAuth v5",
    ],
    timeline: [
      { date: "Planning", label: "Collaboration Model", description: "Designed a room-based whiteboard architecture using Liveblocks storage for canvas objects and presence for live user state" },
      { date: "Canvas", label: "Drawing Experience", description: "Built the Fabric.js canvas editor with tool options for color, stroke width, opacity, and font size" },
      { date: "Product", label: "Dashboard & Sharing", description: "Added OAuth login, board management, share links, export flows, and theme persistence" },
      { date: "Launch", label: "Production Ready", description: "Prepared a Vercel-ready Next.js app with Supabase database setup and environment-driven integrations" },
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Liveblocks", "Fabric.js v6", "Supabase", "NextAuth v5", "Zustand", "Framer Motion"],
    liveUrl: "https://collab-board-blush.vercel.app/",
    githubUrl: "https://github.com/Aditya290605/CollabBoard",
  },
  {
    name: "Neo-Route",
    imageKey: "neo-route",
    description: "Eco-friendly route optimizer with real-time traffic, weather & vehicle emissions tracking 🚚",
    gradient: ["#22C55E", "#16A34A"],
    url: "https://github.com/Aditya290605",
    tech: ["flutter", "python", "dart"],
    slug: "neo-route",
    featured: false,
    status: "completed",
    image: "/projects/neoroute.png",
    overview:
      "Neo-Route is a dynamic route optimization and emission reduction system that optimizes vehicle routes using real-time traffic, weather, and air quality APIs. Built with a Flask Python backend and Flutter/Dart frontend, it connects TomTom, Google Maps, AQICN, and OSRM to calculate carbon footprints, recommend fuel-efficient paths, and display route incidents.",
    achievements: [
      "Dynamic Route Optimization: Calculates fuel-efficient paths using TomTom, Google Maps, and OSRM APIs",
      "Emissions Estimation: Calculates carbon emissions for routes based on vehicle details to promote sustainability",
      "Real-time Data Integration: Connects AQICN API for air quality and meteorology alerts along the path",
      "Interactive Visualizations: Visualizes route incidents, traffic details, and history in a beautiful Flutter UI",
    ],
    timeline: [
      { date: "Apr 2024", label: "Concept", description: "Researched green routing algorithms and traffic API integrations" },
      { date: "May 2024", label: "Development", description: "Built Flutter app with Python routing backend" },
    ],
    techStack: ["Flutter", "Dart", "Python", "Flask", "TomTom API", "Google Maps API", "AQICN API", "OSRM"],
    liveUrl: null,
    githubUrl: "https://github.com/Aditya290605/Neo-Route",
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
    institution: "Government College of Engineering, Aurangabad",
    degree: "B.Tech. Computer Science Engineering",
    dateRange: "Expected June 2026",
    location: "Aurangabad, Maharashtra",
    description:
      "Focused on computer science fundamentals, scalable application development, software engineering, and mobile-first product building.",
  },
  {
    institution: "MIT Polytechnic, Aurangabad",
    degree: "Diploma in Computer Science Engineering",
    dateRange: "2023",
    location: "Aurangabad, Maharashtra",
    description:
      "Graduated 2nd Rank in MSBTE with a strong foundation in programming, databases, and practical software development.",
  },
];

export const ABOUT = {
  headline:
    "Flutter Developer building scalable mobile apps with clean architecture, smooth UI, and production-minded engineering.",
  bio: [
    "I'm Aditya Magar, a Flutter Developer from Aurangabad, Maharashtra with 1+ year of experience building cross-platform mobile applications using Dart and Flutter.",
    "My strongest work sits around BLoC state management, Clean Architecture, REST API integration, responsive UI implementation, debugging, testing, and Git-based collaborative workflows.",
    "I enjoy turning product requirements into scalable app modules, integrating third-party services, and polishing UI details until the experience feels fast, clear, and reliable.",
  ],
  email: "magaraditya2911@gmail.com",
  phone: "9604715698",
  location: "Aurangabad, Maharashtra",
  stats: [
    { label: "Projects Shipped", value: 12, suffix: "+" },
    { label: "Professional Internships", value: 3, suffix: "" },
    { label: "Play Store Downloads", value: 500, suffix: "+" },
    { label: "Hackathon AIR", value: 6, suffix: "" },
  ],
  focusAreas: [
    "Flutter and Dart app development",
    "BLoC, Riverpod, Provider state management",
    "Clean Architecture and modular design patterns",
    "REST APIs, JWT authentication, caching, and error handling",
    "Firebase, Supabase, MongoDB, and real-time data sync",
    "Unit testing, widget testing, debugging, and CI/CD workflows",
  ],
  experienceHighlights: [
    {
      role: "Flutter Intern",
      company: "Spinacho",
      duration: "3 Months",
      points: [
        "Developed 15+ cross-platform UI screens with pixel-perfect implementation from design mockups.",
        "Implemented BLoC state management and Clean Architecture for modular, maintainable code.",
        "Integrated RESTful APIs with structured data parsing, caching, and error handling.",
        "Debugged performance issues across Android devices and improved UI responsiveness.",
      ],
    },
    {
      role: "Flutter Developer Intern",
      company: "RevoltroneX",
      duration: "5 Months",
      points: [
        "Built scalable Flutter modules using Clean Architecture and BLoC.",
        "Integrated third-party services and REST APIs with efficient data handling strategies.",
        "Collaborated through Git branching, pull requests, and code reviews.",
        "Assisted in CI/CD build workflows and automated deployment pipelines.",
      ],
    },
  ],
  technicalGroups: [
    { label: "Languages", items: ["Dart", "JavaScript", "TypeScript", "Python", "Java"] },
    { label: "Frontend", items: ["Flutter", "React", "TailwindCSS", "Responsive UI Design"] },
    { label: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { label: "Databases & Cloud", items: ["MongoDB", "Firebase Auth", "Firestore", "Supabase"] },
    { label: "Architecture", items: ["Clean Architecture", "Feature-first modules", "Modular Design Patterns"] },
    { label: "Tools & DevOps", items: ["Git", "GitHub", "Vite", "Figma", "Bitrise exposure", "CI/CD Pipelines"] },
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
    issuer: "IIT Madras Hackathon",
    title: "AIR 6 out of 2000+ teams",
    year: "2025",
    credentialUrl: "#",
  },
  {
    issuer: "GECA Hackathon",
    title: "Top 5 Finalist",
    year: "2025",
    credentialUrl: "#",
  },
  {
    issuer: "Google Play Store",
    title: "500+ downloads achieved",
    year: "2025",
    credentialUrl: "#",
  },
];

export const GTAG = "";
