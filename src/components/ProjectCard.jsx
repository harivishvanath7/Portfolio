const ProjectCard = ({ image, title, description, tech, github, demo }) => {
  return (
    <div className="bg-brand-light rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 spacce-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        <div>
            {tech.map((item, index) => (
                <span key={index} className="bg-brand-cream text-brand-dark px-3 py-1 rounded-full text-xs font-medium">{item}</span>
            ))}
        </div>
        <div className="flex gap-4 pt-2">
            <a href={github} target="_blank" className="px-4 py-2 text-sm bg-brand-dark text-white rounded-lg hover:opacity-90 transition">Github</a>
            <a href={demo} target="_blank" className="px-4 py-2 text-sm border border-brand-dark rounded-lg hover:bg-brand-dark hover:text-white transition">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
