import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-300 mb-8">
          I’m open to collaboration, internships, and exciting fullstack
          opportunities.
        </p>
        <a
          href="mailto:cnitish44@gmail.com"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
