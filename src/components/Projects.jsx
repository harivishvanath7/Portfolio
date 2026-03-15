import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-brand-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card */}
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
