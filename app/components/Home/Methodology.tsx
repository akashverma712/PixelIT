'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    icon: '🚀',
    title: 'Bringing Ideas to Life',
    description:
      'Many promising ideas never progress beyond the planning phase. We transform concepts into practical, scalable, and impactful solutions.',
  },
  {
    icon: '🌐',
    title: 'Strengthening Digital Presence',
    description:
      'We create modern websites and digital experiences that help organizations build visibility, engagement, and trust.',
  },
  {
    icon: '⚙️',
    title: 'Simplifying Complex Processes',
    description:
      'Through automation and intelligent workflows, we eliminate repetitive tasks and improve operational efficiency.',
  },
  {
    icon: '🤖',
    title: 'Making Technology Accessible',
    description:
      'AI, IoT, and automation should be practical and easy to adopt. We build solutions designed for real-world implementation.',
  },
  {
    icon: '🎓',
    title: 'Learning Through Application',
    description:
      'We bridge the gap between learning and doing through workshops, projects, and innovation-driven experiences.',
  },
  {
    icon: '📈',
    title: 'Designing for Growth',
    description:
      'We create future-ready solutions that evolve with changing needs and support sustainable growth.',
  },
];

export default function Methodology() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            BUILT TO SOLVE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            REAL <span className="text-blue-500">PROBLEMS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-zinc-400 leading-relaxed text-lg"
          >
            Technology becomes meaningful only when it addresses real
            challenges. At PixelIT, we identify problems that limit growth,
            creativity, and efficiency and transform them into opportunities
            through purposeful innovation.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group relative overflow-hidden
                border border-zinc-800
                bg-zinc-950/80
                rounded-2xl
                p-8
                transition-all duration-300
                hover:border-yellow-400/40
              "
            >

              {/* Top Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="text-4xl mb-6">
                {problem.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl mb-4 tracking-wide text-white group-hover:text-yellow-400 transition-colors"
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed">
                {problem.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}