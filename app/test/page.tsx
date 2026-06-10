import ProjectsSection from "@/app/components/service/ProjectsSection";

const projects = [
  {
    title: "Pixel Commerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "Enterprise e-commerce platform built using Next.js and MongoDB.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
    ],
    projectLink: "#",
  },

  {
    title: "AI Resume Builder",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "AI-powered resume generation system.",
    technologies: [
      "OpenAI",
      "React",
      "Node.js",
    ],
    projectLink: "#",
  },

  {
    title: "Drone Analytics",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    description:
      "Real-time drone telemetry dashboard.",
    technologies: [
      "Python",
      "IoT",
      "React",
    ],
    projectLink: "#",
  },
];

export default function TestPage() {
  return (
    <ProjectsSection projects={projects} />
  );
}