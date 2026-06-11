"use client";

import { motion } from "framer-motion";
import PixelCard from "@/app/components/PixelCard";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
}

interface PixelProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function PixelProjectCard({
  project,
  onClick,
}: PixelProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="w-full"
    >
      <div onClick={onClick} className="cursor-pointer active:scale-95 transition">
        <PixelCard
          variant="yellow"
          className="group relative h-[420px] w-full overflow-hidden rounded-[28px]"
        >
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-700 sm:hover:scale-110 active:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-yellow-400/30 bg-black/50 px-3 py-1 text-xs tracking-widest text-yellow-400 backdrop-blur-md">
              PROJECT
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h3
              className="mb-3 text-2xl text-white"
              style={{
                fontFamily: "var(--font-pixel)",
              }}
            >
              {project.title}
            </h3>

            <p className="line-clamp-2 text-sm text-zinc-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-black/40 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Indicator */}
          <motion.div
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400 bg-black/60 text-yellow-400"
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            "
          </motion.div>
        </PixelCard>
      </div>
    </motion.div>
  );
}