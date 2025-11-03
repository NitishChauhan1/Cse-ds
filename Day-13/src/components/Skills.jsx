import React from "react";

const skills = [
  "React",
  "Spring Boot",
  "Java",
  "DSA",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "Docker",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
