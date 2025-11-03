import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            I'm a passionate Fullstack Developer skilled in React and Spring
            Boot. I focus on building fast, scalable web applications with clean
            UI and robust backend systems. I’ve solved over{" "}
            <span className="text-emerald-400 font-semibold">200+</span> DSA
            problems and actively participate in programming contests with a{" "}
            <span className="text-emerald-400 font-semibold">
              CodeChef rating of 1300
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="mt-10 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h4 className="font-semibold">Skills</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>React</li>
              <li>Spring Boot</li>
              <li>Java & DSA</li>
              <li>REST APIs</li>
              <li>SQL / PostgreSQL</li>
              <li>Docker & Git</li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h4 className="font-semibold">Education & Experience</h4>
            <p className="mt-3 text-sm text-slate-300">
              I’m a B.Tech student passionate about solving real-world problems
              with technology. I love contributing to open-source and building
              impactful fullstack projects combining React, Java, and databases.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              CodeChef Rating:{" "}
              <span className="text-emerald-400 font-medium">1300</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
