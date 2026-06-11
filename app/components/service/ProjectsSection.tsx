"use client";

import PixelProjectCard from "./PixelProjectCard";

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({
  projects,
  onSelectProject,
}: ProjectsSectionProps) {
  return (
    <section className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h2
            className="text-4xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            PROJECTS
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
            A showcase of our work, innovations, and technical achievements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <PixelProjectCard
              key={project.title}
              project={project}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}