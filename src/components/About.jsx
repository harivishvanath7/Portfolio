import Skills from "./Skills";
import experienceData from "../data/Experience";
import ExperienceCard from "./ExperienceCard";

export default function About() {
  return (
    <section id="about" className="bg-brand-light text-brand-dark py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Me
        </h2>


        {/* Introduction */}
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4">
          I am <strong>a full-stack software developer</strong>, with experience
          building responsive and scalable web applications. I specialize in{" "}
          <strong>React.js, Node.js, and MongoDB</strong>, creating interactive
          UIs, RESTful APIs, and real-time features.
        </p>

        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4">
          I enjoy tackling real-world problems, designing efficient system
          architectures, and continuously improving my coding and
          problem-solving skills.
        </p>

        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10">
          My goal is to build impactful digital products and grow as a
          full-stack engineer, contributing to innovative and mission-critical
          projects.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div>
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm text-gray-600">Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-sm text-gray-600">Technologies</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-sm text-gray-600">People Impacted</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-center mb-6">Tech Stack</h3>
          <div className="flex justify-center">
            <Skills />
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-center mb-8">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-brand-dark text-white rounded-lg hover:opacity-90 transition"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
