import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, tags, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-black/40 border border-white/10 rounded-2xl"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="mt-5 inline-block text-emerald-400 text-sm font-medium hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
