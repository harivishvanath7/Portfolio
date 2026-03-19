import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {

  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_iwedpdm",
      "template_652wkv3",
      form.current,
      "6zrIClUOnYkPddkeq"
    )
    .then(
      () => {
        setSuccess(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <section id="contact" className="bg-brand-light py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-dark"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-dark"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-dark"
          />
          <button
            type="submit"
            className="bg-brand-dark text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
        {success && (
            <p className="text-green-600 font-medium pt-4">Message Sent Successfully!!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
