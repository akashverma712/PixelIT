import ServiceTemplate from "@/app/components/service/ServiceTemplate";
import { iotProjects } from "../../data/iotProjects";

export default function IoTPage() {
  return (
    <ServiceTemplate
      title="AUTOMATION & IOT"
      description="Building smart systems, connected devices, and intelligent automation workflows."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475"
      projects={iotProjects}
    />
  );
}