'use client';
import { motion } from "framer-motion";
import Methodology from "../components/Home/Methodology";
import Navbar from "../components/Navbar";
import PixelCard from "../components/PixelCard";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

type Member = {
  name: string;
  role: string;
  skill: string;
  image: string;
  linkedin?: string;
  github?: string;
};

export default function AboutPage() {
  const topRow: Member[] = [
    { 
      name: "Akash Verma",
      role: "Founder",
      skill: "Software Developer",
      image: "/akash.png",
      linkedin: "https://www.linkedin.com/in/akash-verma-94191b331/",
      github: "https://github.com/akashverma712",
    },
    {
      name: "Harsh Ranjan",
      role: "Co-Founder",
      skill: "Robotics Engineer",
      image: "/harsh.png",
      linkedin: "https://www.linkedin.com/in/harsh-ranjan-7704a0340/",
    },
    {
      name: "Kunal Singh Marwaha",
      role: "Co-Founder",
      skill: "Software Developer",
      image: "/kunal.png",
      linkedin: "https://www.linkedin.com/in/kunal-singh-marwaha/",
      github: "https://github.com/kunalsinghmarwaha",
    },
  ];

  const bottomRow: Member[] = [
    {
      name: "Madhu Mishra",
      role: "Co-Founder",
      skill: "Graphic Designer",
      image: "/madhu.png",
      linkedin: "https://www.linkedin.com/in/madhu-mishra-971644335/",
    },
    {
      name: "Rimisha Kumari",
      role: "Co-Founder",
      skill: "Software Developer",
      image: "/rimisha.png",
      linkedin: "https://www.linkedin.com/in/rimisha-kumari-67a2ba334/",
      github: "https://github.com/rimisha-kumari",
    },
  ];

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  const MemberCard = ({ member, index }: { member: Member; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <PixelCard>
        <div className="p-3">
          <div className="relative rounded-2xl overflow-hidden group" style={{ height: "340px" }}>
            <div className="absolute inset-0 border-2 border-zinc-700 rounded-2xl overflow-hidden" style={{ zIndex: 2 }}>
              <img
                src={member.image}
                alt={member.name}
                className="absolute w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" style={{ zIndex: 3 }} />
            <div className="absolute bottom-0 w-full p-4" style={{ zIndex: 4 }}>
              <h3 className="text-sm tracking-widest text-yellow-400">{member.name}</h3>
              <p className="text-xs text-zinc-300">{member.role}</p>
              <p className="text-xs text-zinc-400">{member.skill}</p>
              <div className="mt-3 flex gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-blue-500 px-3 py-1 text-xs tracking-widest text-blue-400 hover:bg-blue-500 hover:text-white transition"
                  >
                    <LinkedInIcon />
                    <span>IN</span>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 hover:bg-zinc-600 hover:text-white transition"
                  >
                    <GitHubIcon />
                    <span>GH</span>
                  </a>
                )}
              </div>
            </div>
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

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-0 space-y-32">

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
                src="/pixelit_wordmark.png"
                alt="PixelIt Logo"
                className="h-10 object-contain opacity-90"
              />
            </div>
            <div className="border-2 border-zinc-800 bg-zinc-950 p-6 rounded-xl overflow-hidden">
              <motion.img
                src="/logo2.png"
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

        <Methodology />

        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
