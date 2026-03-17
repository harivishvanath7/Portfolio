import portfolio from "../assets/projects/portfolio.png";
import startup from "../assets/projects/startup-valuator.png";

export const projects = [
  {
    image: portfolio,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects.",
    tech: ["React", "TailwindCSS"],
    link: "https://harivishvanath-portfolio.vercel.app/",
    github: "https://github.com/harivishvanath7/Portfolio"
  },
  {
    image: "/project2.png",
    title: "DevConnect",
    description: "A Community Made for and by the Developers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    link: "https://github.com/harivishvanath7/Dev_Connect",
    github: "https://github.com/harivishvanath7/Dev_Connect"
  },
  {
    image: startup,
    title: "AI Startup Valuator",
    description: "A Platform to valuate your Startup, helps in optimizing performances and provides metrics accordingly.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "LLaMA 3", "REST APIs"],
    link: "https://ai-startup-valuator.vercel.app/",
    github: "https://github.com/harivishvanath7/AI_Startup_Valuator"
  },
];

