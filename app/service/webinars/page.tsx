import ServiceTemplate from "@/app/components/service/ServiceTemplate";

import { webinarProjects } from "../../data/webinarProjects";

export default function WebinarsPage() {
  return (
    <ServiceTemplate
      title="WEBINARS & SEMINARS"
      description="Delivering impactful webinars, expert-led seminars, and engaging knowledge-sharing experiences that inspire learning, innovation, and professional growth."
      image="https://images.unsplash.com/photo-1511578314322-379afb476865"
      projects={webinarProjects}
    />
  );
}