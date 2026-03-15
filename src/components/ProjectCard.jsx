const ProjectCard = ({ image, title, description, tech, github, link }) => {
  return (
    <div className="bg-brand-light rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 space-y-3 flex flex-col grow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
                <span key={index} className="bg-brand-cream text-brand-dark px-3 py-1 rounded-full text-xs font-medium">{item}</span>
            ))}
        </div>
        <div className="flex gap-4 pt-2 mt-auto">
            <a href={github} target="_blank" className="px-4 py-2 text-sm bg-brand-dark text-white rounded-lg hover:opacity-90 transition cursor-pointer">Github</a>
            <a href={link} target="_blank" className="px-4 py-2 text-sm border border-brand-dark rounded-lg hover:bg-brand-dark hover:text-white transition cursor-pointer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
