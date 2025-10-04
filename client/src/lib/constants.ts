export const PERSONAL_INFO = {
  name: "Akshat Daruka",
  title: "Product Manager & Software Developer learning Data Science",
  subtitle: "Bridging software, product, and data to build what truly matters.",
  email: "akshatdaruka@gmail.com",
  phone: "(+49) 15510795736",
  location: "Magdeburg, Germany",
  linkedin: "https://linkedin.com/in/akshat-daruka-092aa51ba",
  github: "https://github.com/akshatdaruka",
};

export const EXPERIENCE = [
  {
    id: "product-executive",
    title: "Product Executive",
    company: "TV9",
    duration: "01.2023 – 12.2023",
    achievements: [
      "Improved organic traffic by 150%",
      "Increased retention by 44%",
      "Increased engagement time by 156%",
      "Authored 20+ detailed PRDs",
      "Re-architected site architecture to reduce LCP and TBT by 40%"
    ],
    icon: "tv",
    color: "purple"
  },
  {
    id: "associate-sde",
    title: "Associate Software Engineer",
    company: "Highradius Corporation",
    duration: "06.2021 – 12.2022",
    achievements: [
      "APAAS and Advanced RPA tools used across B2B clients",
      "Constructed REST APIs handling 100K+ daily events",
      "Maintained >90% test coverage",
      "Resolved 30+ bugs per sprint",
      "Maintained 95% on-time delivery rate across 4 consecutive releases"
    ],
    icon: "code",
    color: "accent"
  }
];

export const EDUCATION = [
  {
    id: "masters",
    institution: "OVGU - Otto-von-Guericke University",
    degree: "Master's degree",
    field: "Data Science",
    duration: "Apr 2025 - Apr 2027",
    location: "Magdeburg, Germany",
    grade: "",
    icon: "graduation-cap",
    color: "accent"
  },
  {
    id: "bachelors",
    institution: "KIIT - Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science",
    duration: "Jul 2018 - May 2022",
    location: "Bhubaneswar, India",
    grade: "9.09 CGPA",
    icon: "graduation-cap",
    color: "purple"
  },
  {
    id: "higher-secondary",
    institution: "Delhi Public School - India",
    degree: "AISSCE",
    field: "Science",
    duration: "Apr 2017 - May 2018",
    location: "India",
    grade: "89.2%",
    icon: "book",
    color: "accent"
  },
  {
    id: "secondary",
    institution: "Delhi Public School - India",
    degree: "AISSE",
    field: "",
    duration: "Apr 2015 - May 2016",
    location: "India",
    grade: "93.1%",
    icon: "book",
    color: "purple"
  }
];

export const PROFESSIONAL_PROJECTS = [
  {
    id: "apaas",
    title: "APAAS Framework",
    description: "Application Platform as a Service enabling developers to create web pages with CRUD operations using DSL without writing code.",
    technologies: ["Java", "Spring Boot", "React", "JUnit", "Mockito"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    company: "HighRadius Corporation",
    duration: "Jul 2022 - Nov 2022"
  },
  {
    id: "activity-log-analyzer",
    title: "Activity Log Analyzer",
    description: "Full-stack application for uploading and parsing log files with user-specific keys and structured data visualization.",
    technologies: ["Spring Boot", "MySQL", "React", "REST APIs"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    company: "HighRadius Corporation",
    duration: "Jul 2022 - Aug 2022"
  },
  {
    id: "arpa",
    title: "Advanced RPA Framework",
    description: "Advanced Robotic Process Automation framework using Java agents to access client portals and collect structured data.",
    technologies: ["Java", "Spring MVC", "Selenium", "Ext JS"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    company: "HighRadius Corporation",
    duration: "Jun 2021 - Jul 2022"
  },
  {
    id: "data-scrapper",
    title: "Robust Data Scrapper Utility",
    description: "Java utility for capturing portal data without regex, returning structured JSON responses for parsing within ARPA framework.",
    technologies: ["Java", "JSON", "Web Scraping"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    company: "HighRadius Corporation",
    duration: "Apr 2022 - May 2022"
  },
  {
    id: "generic-parser",
    title: "Generic Parser",
    description: "Full-stack application for parsing files of different formats using layout information with preview functionality.",
    technologies: ["Spring MVC", "Ext JS", "File Processing"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    company: "HighRadius Corporation",
    duration: "Oct 2021 - Dec 2021"
  }
];

export const PERSONAL_PROJECTS = [
  {
    id: "news-application",
    title: "News Application",
    description: "Web application displaying recent news with infinite scroll capability and category-based filtering. Built with React.js and Bootstrap.",
    technologies: ["React.js", "Bootstrap", "News API", "JavaScript"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "https://github.com/akshatdaruka/NewsApplication",
    demo: "#",
    duration: "Jun 2022"
  },
  {
    id: "invoice-management",
    title: "FinTech B2B Invoice Management",
    description: "Full-stack invoice management application with CRUD capabilities and optimized backend for handling bulk data efficiently.",
    technologies: ["React.js", "Spring Framework", "Material UI", "MySQL"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "https://github.com/akshatdaruka/InvoiceManagement_backend",
    demo: "https://github.com/akshatdaruka/InvoiceManagementFrontend",
    duration: "Jan 2021 - Mar 2021"
  },
  {
    id: "stock-candle",
    title: "Stock Market Candle",
    description: "Stock market analysis tool for visualizing candlestick charts and market data trends.",
    technologies: ["JavaScript", "Chart.js", "Financial APIs"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "https://github.com/akshatdaruka/StockCandle",
    demo: "#",
    duration: "2022"
  }
];

export const CERTIFICATIONS = [
  {
    id: "product-led",
    title: "Product-Led Certification",
    issuer: "Pendo.io",
    date: "Apr 2024",
    credentialUrl: "https://www.credly.com/badges/1ed45128-cb39-448d-b5d9-9b7a33391cc7/public_url",
    skills: ["Product Management", "Data Analysis", "Product-led Growth", "Customer Success"],
    icon: "award"
  },
  {
    id: "dsa-cpp",
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Dec 2022",
    credentialId: "UC-ae27e660-a1ac-4262-b6f4-6d4e72b8e916",
    credentialUrl: "https://www.udemy.com/certificate/UC-ae27e660-a1ac-4262-b6f4-6d4e72b8e916/",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "C++", "C Programming"],
    icon: "code"
  },
  {
    id: "python-capstone",
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    issuer: "Coursera",
    date: "Sep 2020",
    credentialId: "9YESAE865YV3",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/9YESAE865YV3",
    skills: ["Python", "Data Processing", "Data Visualization"],
    icon: "database"
  },
  {
    id: "python-web-data",
    title: "Using Python to Access Web Data",
    issuer: "Coursera",
    date: "Aug 2020",
    credentialId: "LGWH66LUHWJY",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/LGWH66LUHWJY",
    skills: ["Python", "Web Scraping", "APIs"],
    icon: "globe"
  },
  {
    id: "python-data-structures",
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "Jul 2020",
    credentialId: "WEJDV49AMJCR",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/WEJDV49AMJCR",
    skills: ["Python", "Data Structures"],
    icon: "code"
  }
];

export const HOBBIES = [
  {
    id: "guitar",
    name: "Playing Guitar",
    description: "Expressing creativity through music and exploring different genres",
    icon: "music",
    color: "accent"
  },
  {
    id: "tennis",
    name: "Playing Lawn Tennis",
    description: "Staying active and competitive on the court",
    icon: "activity",
    color: "purple"
  },
  {
    id: "swimming",
    name: "Swimming",
    description: "Finding peace and fitness in the water",
    icon: "waves",
    color: "accent"
  },
  {
    id: "poetry",
    name: "Poetry",
    description: "Crafting verses and exploring the beauty of language",
    icon: "pen-tool",
    color: "purple"
  },
  {
    id: "astrophysics",
    name: "Astrophysics",
    description: "Fascinated by the mysteries of the cosmos and space exploration",
    icon: "telescope",
    color: "accent"
  }
];

export const SKILLS = [
  {
    category: "Product Management",
    icon: "chart-line",
    color: "accent",
    skills: [
      { name: "Product Roadmapping", level: 95 },
      { name: "Agile, Scrum & Sprint Planning", level: 95 },
      { name: "PRD & BRD Documentation", level: 90 },
      { name: "User Journey Mapping", level: 90 },
      { name: "Prioritization and Stakeholder Communication", level: 90 }
    ]
  },
  {
    category: "Software Development",
    icon: "chart-line",
    color: "purple",
    skills: [
      { name: "MVC Architecture", level: 90 },
      { name: "RESTful API Design", level: 95 },
      { name: "Object-Oriented Programming", level: 95 },
      { name: "Modular Codebase Planning", level: 80 },
      { name: "Backend Systems Integration", level: 80 }
    ]
  },
  {
    category: "Programming Languages",
    icon: "chart-line",
    color: "accent",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 95 },
      { name: "Bash", level: 80 }
    ]
  },
  {
    category: "Analytics",
    icon: "chart-line",
    color: "purple",
    skills: [
      { name: "KPI Tracking & Product Analytics", level: 95 },
      { name: "Advanced Excel", level: 90 },
      { name: "Looker", level: 85 },
      { name: "Google Analytics", level: 90 },
      { name: "Tableau", level: 80 }
    ]
  },
  {
    category: "DevOps & Database Tools",
    icon: "chart-line",
    color: "accent",
    skills: [
      { name: "Git", level: 95 },
      { name: "Jira", level: 95 },
      { name: "Jenkins", level: 85 },
      { name: "MySQL", level: 95 },
      { name: "DBMS", level: 95 }
    ]
  },
  {
    category: "Framework",
    icon: "chart-line",
    color: "purple",
    skills: [
      { name: "Spring", level: 95 },
      { name: "React.js", level: 95 },
      { name: "Hibernate ORM", level: 85 },
      { name: "Pandas", level: 75 },
      { name: "Scikit-learn", level: 75 }
    ]
  },
];
