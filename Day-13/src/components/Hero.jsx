
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-36 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          <p className="text-sm uppercase tracking-wider text-emerald-400">
            Fullstack Developer
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Nitish Chauhan
            <span className="block text-2xl md:text-3xl font-medium text-slate-300">
              React · Spring Boot · DSA (200+)
            </span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-xl">
            I build fast, scalable web apps using React and Spring Boot. I’ve
            solved 200+ DSA problems and maintain a CodeChef rating of{" "}
            <span className="font-semibold">1300</span>.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-full border border-emerald-500 bg-linear-to-r from-emerald-600/60 to-emerald-500/30 shadow-lg"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-full border border-slate-700"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-4 items-center text-xl">
            <a aria-label="github" href="#">
              <FaGithub />
            </a>
            <a aria-label="linkedin" href="#">
              <FaLinkedin />
            </a>
            <a aria-label="email" href="#contact">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative hidden md:block"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/6 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
            <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-indigo-600/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-emerald-300">
                  Featured
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Project Spotlight
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-xs">
                  A fullstack task manager built with React, Spring Boot, JWT
                  auth, and Postgres.
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="flex-1 text-xs text-slate-400">
                React · Spring Boot · Docker
              </div>
              <div className="text-xs text-slate-400">⭐ 120</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
