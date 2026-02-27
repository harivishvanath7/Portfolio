
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/harivishvanath7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cream transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harivishvanaths/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cream transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:harivishvanaths@gmail.com"
            className="hover:text-brand-cream transition"
          >
            Email
          </a>
        </div>
        <p className="text-sm">@ {new Date().getFullYear()} Hari Vishvanath S. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
