// components/ExperienceCard.jsx
export default function ExperienceCard({ company, role, duration, description, link, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start gap-4">
      
      {/* Logo with clickable link */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-200">
          <img
            src={image}
            alt={company}
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* Text content */}
      <div>
        <h4 className="text-lg font-bold">{company}</h4>
        <p className="text-sm text-gray-600 mb-1">{role}</p> {/* Added role */}
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}