'use client';

import { motion, Variants } from 'framer-motion';
import Link from "next/link";

type CompetencyType = {
  title: string;
  image: string;
  link: string;
  description: string;
};

const competencies: CompetencyType[] = [
  {
    title: 'GRAPHIC DESIGNING',
    image: '/gfx.png',
    link: '/projects/graphic-design',
    description:
      'We craft visually compelling designs that communicate ideas, strengthen brand identity, and create memorable user experiences. From branding assets to digital creatives, we design with purpose and impact.',
  },
  {
    title: 'WEB DEVELOPMENT',
    image: '/webd.png',
    link: '/projects/graphic-design', // Update this route path when ready
    description:
      'We build modern, responsive, and scalable digital platforms tailored to user needs. Our focus is on creating seamless web experiences that combine functionality, performance, and innovation.',
  },
  {
    title: 'IoT & ROBOTICS',
    image: '/robo.png',
    link: '/projects/graphic-design', // Update this route path when ready
    description:
      'We develop intelligent systems that bridge the gap between the physical and digital worlds. Through IoT and robotics, we create smart solutions that enhance automation, efficiency, and connectivity.',
  },
  {
    title: 'AI & AUTOMATION',
    image: '/ai.png',
    link: '/projects/graphic-design', // Update this route path when ready
    description:
      'We leverage the power of artificial intelligence to simplify processes, optimize operations, and enable smarter decision-making. Our solutions are designed to improve productivity and drive innovation.',
  },
  {
    title: 'WORKSHOPS & INNOVATION BOOTCAMPS',
    image: '/bootcamp.png', 
    link: '/contact', 
    description:
      'We foster innovation through hands-on workshops, immersive bootcamps, and collaborative learning experiences. By bridging the gap between theory and practice, we empower students, professionals, and aspiring innovators with practical skills, industry insights, and the confidence to build impactful solutions.',
  },
];

const cardVariants: Variants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? -60 : 60,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Competencies() {
  return (
    <section className="bg-black text-white py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-32">
          <span
            className="inline-block mb-6 border border-yellow-400/40 px-6 py-1.5 text-xs tracking-[0.35em] text-yellow-400 uppercase"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            Our Expertise
          </span>
          
          <h2
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            CORE <span className="text-blue-500">COMPETENCIES</span>
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            At PixelIT, we combine creativity, intelligence,
            and emerging technologies to build impactful solutions
            across diverse domains.
          </p>
        </div>

        {/* Competencies List */}
        <div className="space-y-36">
          {competencies.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                custom={isEven}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center layout-gpu"
              >

                {/* IMAGE CONTAINER */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`relative w-full aspect-[4/3] max-h-[360px] flex items-center justify-center rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 overflow-hidden backdrop-blur-sm group
                    ${!isEven ? 'lg:order-2' : ''}
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out select-none"
                  />
                </motion.div>

                {/* CONTENT CONTAINER */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  
                  {/* Cyber Indicator Counter instead of Emojis */}
                  <div 
                    className="text-sm font-mono tracking-widest text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    // 0{index + 1}
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-wider text-white"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-xl">
                    {item.description}
                  </p>

                  <div className="pt-4 space-y-6">
                    <div className="h-[2px] w-20 bg-gradient-to-r from-yellow-400 via-blue-500 to-transparent" />
                    
                    <Link href={item.link || "/contact"} className="inline-block">
                      <motion.button
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 0 25px rgba(250,204,21,0.25)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border border-yellow-400/80 text-yellow-400 tracking-[0.25em] text-xs hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium"
                        style={{ fontFamily: "var(--font-pixel)" }}
                      >
                        VIEW PROJECTS →
                      </motion.button>
                    </Link>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}