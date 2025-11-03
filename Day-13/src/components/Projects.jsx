import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
{
title: "Nitish Online Bookstore",
desc: "A fullstack bookstore app built using React, Spring Boot, and PostgreSQL with payment integration.",
tags: ["React", "Spring Boot", "PostgreSQL"],
link: "#",
},
{
title: "Portfolio Website",
desc: "My personal portfolio built with React and TailwindCSS to showcase my skills and projects.",
tags: ["React", "Tailwind", "Framer Motion"],
link: "#",
},
{
title: "YouTube Playlist Downloader Bot",
desc: "A Telegram bot to download entire YouTube playlists in different formats and quality options.",
tags: ["Python", "Telegram API", "AsyncIO"],
link: "#",
},
];

const Projects = () => {
return (
<section id="projects" className="py-20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-10">Projects</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((p, i) => (
<ProjectCard key={i} {...p} />
))}
</div>
</div>
</section>
);
};

export default Projects;



