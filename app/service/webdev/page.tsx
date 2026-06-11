import ServiceTemplate from "@/app/components/service/ServiceTemplate";

import { webdevProjects } from "@/app/data/webdevProjects";

export default function WebDevPage() {
  return (
    <ServiceTemplate
      title="WEB DEVELOPMENT"
      description="Crafting high-performance digital experiences and scalable web applications."
      image="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
      projects={webdevProjects}
    />
  );
}