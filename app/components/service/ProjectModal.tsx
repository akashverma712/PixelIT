"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!project) return;

    requestAnimationFrame(() => {
      scrollRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    });

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollRef.current);
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* OUTER CENTER WRAPPER (ONLY CENTERS MODAL) */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center"
          >
            {/* INNER MODAL (YOUR ORIGINAL DESIGN UNCHANGED) */}
            <motion.div
              className="w-[92%] max-w-4xl overflow-hidden rounded-3xl border border-yellow-400/30 bg-[#0a0a0a] shadow-[0_0_60px_rgba(255,215,0,0.15)]"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">
                <h2
                  className="text-2xl text-yellow-400 md:text-3xl"
                  style={{
                    fontFamily: "var(--font-pixel)",
                  }}
                >
                  {project.title}
                </h2>

                <button
                  onClick={onClose}
                  className="text-3xl text-zinc-400 transition hover:text-white"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="grid gap-8 p-8 md:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl border border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-white">
                      Project Overview
                    </h3>

                    <p className="leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-8">
                      <h4 className="mb-4 text-sm tracking-widest text-yellow-400">
                        TECHNOLOGIES
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      View Project
                    </a>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-yellow-400"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}