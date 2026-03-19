import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaAws,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiLinux,
  SiFastapi,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaJava />, name: "Java" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiFastapi />, name: "REST APIs" }, 
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiLinux />, name: "Linux" },
        { icon: <FaFigma />, name: "Figma" },
      ],
    },
  ];

  return (
    <div className="mt-10 space-y-10">
      {skillGroups.map((group, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold mb-4">{group.title}</h3>

          <div className="flex flex-wrap gap-6">
            {group.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-20"
              >
                <div className="text-3xl text-brand-dark opacity-60 hover:opacity-100 hover:scale-110 transition">
                  {skill.icon}
                </div>
                <span className="text-sm mt-1 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}