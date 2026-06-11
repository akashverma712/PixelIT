'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
const competencies = [
  {
    title: 'GRAPHIC DESIGNING',
    emoji: '🎨',
    image: '/gfx.png',
     link: '/projects/graphic-design',
    description:
      'We craft visually compelling designs that communicate ideas, strengthen brand identity, and create memorable user experiences. From branding assets to digital creatives, we design with purpose and impact.',
  },
  {
    title: 'WEB DEVELOPMENT',
    emoji: '🌐',
    image: '/webd.png',
     link: '/projects/graphic-design',
    description:
      'We build modern, responsive, and scalable digital platforms tailored to user needs. Our focus is on creating seamless web experiences that combine functionality, performance, and innovation.',
  },
  {
    title: 'IoT & ROBOTICS',
    emoji: '🤖',
    image: '/robo.png',
     link: '/projects/graphic-design',
    description:
      'We develop intelligent systems that bridge the gap between the physical and digital worlds. Through IoT and robotics, we create smart solutions that enhance automation, efficiency, and connectivity.',
  },
  {
    title: 'AI & AUTOMATION',
    emoji: '🧠',
    image: '/ai.png',
     link: '/projects/graphic-design',
    description:
      'We leverage the power of artificial intelligence to simplify processes, optimize operations, and enable smarter decision-making. Our solutions are designed to improve productivity and drive innovation.',
  },
  {
  title: 'WORKSHOPS & INNOVATION BOOTCAMPS',
  emoji: '🚀',
  image: '/bootcamp.png', 
  link: '/contact', 
  description:
    'We foster innovation through hands-on workshops, immersive bootcamps, and collaborative learning experiences. By bridging the gap between theory and practice, we empower students, professionals, and aspiring innovators with practical skills, industry insights, and the confidence to build impactful solutions.',
},
];

export default function Competencies() {
  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <span
            className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            OUR EXPERTISE
          </span>

          <h2
            className="text-5xl tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            CORE <span className="text-blue-500">COMPETENCIES</span>
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 leading-relaxed text-lg">
            At PixelIT, we combine creativity, intelligence,
            and emerging technologies to build impactful solutions
            across diverse domains.
          </p>

        </div>

        {/* Competencies */}
        <div className="space-y-32">

          {competencies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              className={`
                grid lg:grid-cols-2 gap-14 items-center
                ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}
              `}
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className={`
                  overflow-hidden 
                  ${index % 2 !== 0 ? 'lg:col-start-2' : ''}
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-contain grayscale hover:grayscale-0 transition duration-700"
                />
              </motion.div>

              {/* CONTENT */}
              <div
                className={`
                  space-y-6
                  ${index % 2 !== 0 ? 'lg:col-start-1' : ''}
                `}
              >

                <div className="text-5xl">
                  {item.emoji}
                </div>

                <h3
                  className="text-4xl tracking-widest"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {item.description}
                </p>

              <div className="space-y-6">

  <div className="h-[2px] w-24 bg-gradient-to-r from-yellow-400 to-blue-500" />
<Link href={item.link || "/contact"}>
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(250,204,21,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        px-6 py-3
        border border-yellow-400
        text-yellow-400
        tracking-[0.25em]
        text-sm
        hover:bg-yellow-400
        hover:text-black
        transition-all duration-300
      "
      style={{
        fontFamily: "var(--font-pixel)",
      }}
    >
      VIEW PROJECTS →
    </motion.button>
  </Link>

</div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}