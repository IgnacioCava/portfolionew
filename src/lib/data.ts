export const navbarTabs = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Henry",
    description:
      "- I graduated after 4 months of studying and delivering projects.\n - I immediately found a job as a front-end developer.",
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Remotebase",
    description:
      "- Designed and developed a Web3-based social media site with real-time media streaming.\n - Remodelled the frontend, reducing rendering times and increasing communication quality by migrating from class to functional components and integrating React Hooks.\n - Wrote automated frontend tests with Jest and Testing Library.",
    date: "2021 - 2023",
  },
  {
    title: "Freelance Developer",
    location: "Rey de barba",
    description:
      "- Built a mobile app for a client's barber shop.\n - Developed using React Native and MongoDB.",
    date: "2023",
  },
  {
    title: "Fullstack Developer",
    location: "IKATECH SOLUTIONS",
    description:
      "- Worked in multiple SaaS projects involving microservices and  microfrontends.\n - Developed using React, APIs with Django & GraphQL, DBs with PostgreSQL & MongoDB and performed direct DB adminsitration with SQL.",
    date: "2023 - 2024",
  },
];

export const frontendSkills = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Styled Components",
  "Vanilla Extract",
  "Sass",
] as const;

export const backendSkills = [
  "Node.js",
  "Express.js",
  "Django",
  "GraphQL",
  "Apollo",
  "Sequelize",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Redis",
] as const;

export const platforms = ["Linux", "Docker", "Nginx", "Git", "Figma"] as const;

export const projects = [
  {
    title: "Discord Clone (W.I.P)",
    description:
      "A fully-fledged discord clone, with all the features from the original app.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Vanilla Extract",
      "Zustand",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Docker",
      "Redis",
      "Nginx",
      "AWS",
    ],
    links: {
      github: "https://github.com/IgnacioCava/discord",
      deploy: "",
    },
  },
  {
    title: "Messenger",
    description: "A real time chat application with group chat support.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL WebSocket",
      "Apollo",
      "Express.js",
      "Prisma",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/IgnacioCava/messenger-client",
      deploy: "https://messenger-client-sigma.vercel.app/",
    },
  },
  {
    title: "Weather Report",
    description:
      "A weather app where users can fetch and visualize data in graphs and maps.",
    stack: ["React", "Next.js", "TypeScript", "Redux", "Styled Components"],
    links: {
      github: "https://github.com/IgnacioCava/weather-app",
      deploy: "https://weather-app-ignaciocavas-projects.vercel.app/weather",
    },
  },
  {
    title: "Trello Clone",
    description:
      "A kanban board app where users can organize tasks with their team.",
    stack: ["React", "Styled Components", "Express.js", "MongoDB"],
    links: {
      github: "https://github.com/IgnacioCava/trelloclone2",
      deploy: "https://trelloclone2-client.vercel.app/",
    },
  },
];
