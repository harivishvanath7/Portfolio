import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white text-brand-dark min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <p className="text-lg mb-4">Hi !!</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          I'm Hari Vishvanath S
        </h1>
        <p className="text-xl md:text-2xl text-brand-olive">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "Engineer",
              2000,
              "Techie",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 bg-brand-dark text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
