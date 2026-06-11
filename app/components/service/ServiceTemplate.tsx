"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ProjectModal from "./ProjectModal";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
}

interface ServiceTemplateProps {
  title: string;
  description: string;
  image: string;
  projects: Project[];
}

export default function ServiceTemplate({
  title,
  description,
  image,
  projects,
}: ServiceTemplateProps) {
  const pathname = usePathname();

  // ✅ ADD THIS (THIS FIXES EVERYTHING)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

   const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 🔥 delay ensures layout + images settle
    const t = setTimeout(() => {
      setReady(true);
    }, 100);

    return () => clearTimeout(t);
  }, [pathname]);

  if (!ready) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <HeroSection
        title={title}
        description={description}
        image={image}
      />

      {/* ✅ PASS HANDLER DOWN */}
      <ProjectsSection
        projects={projects}
        onSelectProject={setSelectedProject}
      />

      {/* ✅ ADD MODAL HERE */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </main>
  );
} 