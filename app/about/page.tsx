'use client';
import { motion } from "framer-motion";
import BentoGrid from "../components/BentoGrid";
import { useState } from "react";
import Navbar from "../components/Navbar";
import InfiniteMenu from "../components/InfiniteMenu";
import PixelCard from "../components/PixelCard";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import TeamPopup from "../components/TeamPopup";

const items = [
  { image: "/pixelit_logo.png", link: "#", title: "", description: "" },
  { image: "/pixelit_logo.png", link: "#", title: "", description: "" },
  { image: "/pixelit_logo.png", link: "#", title: "", description: "" },
  { image: "/pixelit_logo.png", link: "#", title: "", description: "" },
];

type Member = {
  name: string;
  role: string;
  skill: string;
  image: string;
  description: string;
};

export default function AboutPage() {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

  const topRow: Member[] = [
    {
      name: "Akash Verma",
      role: "Founder & CEO",
      skill: "Software Developer",
      image: "/akash.png",
      description:
        "Visionary behind PixelIt, focused on building scalable tech solutions, modern web platforms and leading innovation-driven teams.",
    },
    {
      name: "Harsh Ranjan",
      role: "Co-Founder",
      skill: "Robotics Engineer",
      image: "/harsh.png",
      description:
        "Robotics enthusiast working on automation, embedded systems and intelligent hardware-software integration.",
    },
    {
      name: "Kunal Singh Marwaha",
      role: "Co-Founder",
      skill: "Developer",
      image: "/kunal.png",
      description:
        "Dedicated team member at PixelIt, bringing fresh perspectives and technical expertise to every project.",
    },
  ];

  const bottomRow: Member[] = [
    {
      name: "Madhu Mishra",
      role: "Co-Founder",
      skill: "Graphic Designer",
      image: "/madhu.png",
      description:
        "Creative mind shaping PixelIt's visual identity through branding, UI/UX design and digital storytelling.",
    },
    {
      name: "Rimisha Kumari",
      role: "Co-Founder",
      skill: "Software Developer",
      image: "/rimisha.png",
      description:
        "Software developer contributing to full-stack development, system design and scalable applications.",
    },
  ];

  const MemberCard = ({ member, index }: { member: Member; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <PixelCard>
        <div className="relative h-96 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 border-2 border-zinc-700 rounded-2xl overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="absolute w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          <div className="absolute bottom-0 w-full p-5">
            <h3 className="text-lg tracking-widest text-yellow-400">{member.name}</h3>
            <p className="text-sm text-zinc-300">{member.role}</p>
            <p className="text-xs text-zinc-400">{member.skill}</p>
            <button
              onClick={() => setActiveMember(member)}
              className="mt-4 inline-block border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              SEE MORE
            </button>
          </div>
        </div>
      </PixelCard>
    </motion.div>
  );

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "var(--font-pixel)" }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 space-y-32">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:pr-10">
            <span className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400">
              ABOUT US
            </span>
            <h1 className="text-5xl tracking-widest mb-8">
              WE ARE <span className="text-blue-500">PIXELIT</span>
            </h1>
            <p className="text-zinc-400 max-w-xl leading-relaxed tracking-wide text-base">
              We believe in building things; pixel by pixel, hence the name{" "}
              <span className="text-[#facc18]">Pixel It</span>.
              <br /><br />
              We're on a mission to revolutionize the world, one pixel at a time.
              <br /><br />
              From web design and graphic branding to robotics, automation, seminars,
              and webinars, we focus on creating and delivering services that truly matter.
              <br /><br />
              Whatever your vision is, Pixel It has you covered.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-zinc-800 bg-zinc-950 p-6 rounded-xl flex justify-center">
              <img
                src="/pixelit_logo.png"
                alt="PixelIt Logo"
                className="h-10 object-contain opacity-90"
              />
            </div>
            <div className="border-2 border-zinc-800 bg-zinc-950 p-6 rounded-xl overflow-hidden">
              <motion.img
                src="/team.jpeg"
                alt="PixelIt Team"
                className="w-full max-w-sm mx-auto rounded-lg opacity-90"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-4xl tracking-widest text-center">
            WHAT WE <span className="text-yellow-400">DO</span>
          </h2>
          <div className="relative h-150 border-2 border-zinc-800 bg-zinc-950 rounded-xl overflow-hidden">
            <InfiniteMenu items={items} scale={1} />
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-4xl tracking-widest text-center">
            OUR <span className="text-blue-500">TEAM</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {topRow.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
            {bottomRow.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index + 3} />
            ))}
          </div>
        </section>

        <section className="py-24">
          <h2 className="text-4xl tracking-widest text-center mb-12">
            WHAT WE <span className="text-yellow-400">DO</span>
          </h2>
          <BentoGrid />
        </section>

        <FAQ />
        <Footer />
      </div>

      <TeamPopup member={activeMember} onClose={() => setActiveMember(null)} />
    </div>
  );
}