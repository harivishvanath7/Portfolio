
const About = () => {
  return (
    <section id="about" className="bg-brand-light text-brand-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src="" alt="Hari Vishvanath S" className="w-64 h-64 object-cover rounded-full shadow-lg"/>
          </div>
          <div className="space-y-4 text-lg">
              <p>
                I am a passionate software developer interested in building modern
                web applications and learning new technologies.
              </p>

              <p>
                I enjoy working with frontend and backend technologies and
                constantly improving my problem solving skills.
              </p>

              <p>
                My goal is to build impactful digital products and grow as a
                full‑stack developer.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
