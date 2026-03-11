import { TypeAnimation } from "react-type-animation";
import profile from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white text-brand-dark min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left flex-1 space-y-4">
          <p className="text-lg">Hi !!</p>

          <h1 className="text-4xl md:text-6xl font-bold">
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
            className="inline-block mt-6 bg-brand-dark text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            View Projects
          </a>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Hari Vishvanath"
            className="w-[280px] md:w-[350px] lg:w-[420px] rounded-3xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;