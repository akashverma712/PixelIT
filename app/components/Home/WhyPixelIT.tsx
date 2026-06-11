'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '💡',
    title: 'INNOVATION-FIRST APPROACH',
    description:
      'We embrace emerging technologies and creative thinking to solve problems in ways that are practical, scalable, and future-ready.',
  },
  {
    icon: '🤝',
    title: 'COLLABORATIVE PARTNERSHIP',
    description:
      'We believe the best solutions are built together. Our process emphasizes transparency, teamwork, and close collaboration at every stage.',
  },
  {
    icon: '🚀',
    title: 'FROM IDEAS TO EXECUTION',
    description:
      'Whether it is a concept on paper or an evolving project, we transform ideas into impactful solutions through strategic planning and flawless execution.',
  },
  {
    icon: '🎓',
    title: 'LEARNING THROUGH BUILDING',
    description:
      'We cultivate a culture of continuous learning through workshops, projects, and hands-on experiences that bridge the gap between knowledge and application.',
  },
  {
    icon: '⚡',
    title: 'QUALITY & RELIABILITY',
    description:
      'We prioritize excellence in everything we create, ensuring our solutions are robust, user-centric, and built to perform.',
  },
  {
    icon: '🌍',
    title: 'IMPACT-DRIVEN VISION',
    description:
      'Our goal extends beyond technology—we strive to create solutions that empower communities, businesses, and individuals to thrive in a rapidly evolving world.',
  },
];

export default function WhyPixelIT() {
  return (
    <section className="bg-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span
            className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            WHY PIXELIT
          </span>

          <h2
            className="text-5xl tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            WHY CHOOSE{' '}
            <span className="text-blue-500">PIXELIT?</span>
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 leading-relaxed text-lg">
            At PixelIT, we go beyond delivering solutions—we build
            experiences that inspire innovation, accelerate growth,
            and create meaningful impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative">

          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
   className="
  sticky top-24
  bg-zinc-950/50
  backdrop-blur-xl
  border border-blue-500/20
  rounded-3xl
  p-10
  mb-10
  shadow-[0_0_40px_rgba(59,130,246,0.08)]
"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">

                <div className="text-6xl">
                  {reason.icon}
                </div>

                <div>
                  <h3
                    className="text-2xl md:text-3xl mb-4 tracking-widest"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    {reason.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {reason.description}
                  </p>

                  <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-yellow-400 to-blue-500" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}