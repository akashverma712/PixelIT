'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
        <motion.path
          d="M24 8 L24 16"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.path
          d="M18 12 L24 8 L30 12"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.path
          d="M16 20 Q24 14 32 20 L34 32 Q24 38 14 32 Z"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.circle
          cx="24" cy="26" r="4"
          stroke="#facc15" strokeWidth="1.5" fill="none"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.8 }}
        />
      </svg>
    ),
    title: 'Bringing Ideas to Life',
    description:
      'Many promising ideas never progress beyond the planning phase. We transform concepts into practical, scalable, and impactful solutions.',
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <motion.rect
          x="6" y="10" width="36" height="24" rx="3"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }}
        />
        <motion.path
          d="M16 34 L14 40 M32 34 L34 40"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5 }}
        />
        <motion.path
          d="M10 40 L38 40"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.path
          d="M14 18 L20 22 L26 16 L34 24"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.circle cx="34" cy="24" r="2" fill="#facc15"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
        />
      </svg>
    ),
    title: 'Strengthening Digital Presence',
    description:
      'We create modern websites and digital experiences that help organizations build visibility, engagement, and trust.',
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <motion.circle
          cx="24" cy="24" r="8"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.path
          d="M24 8 L24 12 M24 36 L24 40 M8 24 L12 24 M36 24 L40 24"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.path
          d="M13 13 L16 16 M32 32 L35 35 M13 35 L16 32 M32 16 L35 13"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M20 24 L23 27 L28 21"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.9 }}
        />
      </svg>
    ),
    title: 'Simplifying Complex Processes',
    description:
      'Through automation and intelligent workflows, we eliminate repetitive tasks and improve operational efficiency.',
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <motion.rect
          x="8" y="14" width="20" height="26" rx="2"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.path
          d="M14 20 L22 20 M14 25 L22 25 M14 30 L19 30"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.circle
          cx="34" cy="18" r="8"
          stroke="#facc15" strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
        />
        <motion.path
          d="M30 18 L33 21 L38 15"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.9 }}
        />
      </svg>
    ),
    title: 'Making Technology Accessible',
    description:
      'AI, IoT, and automation should be practical and easy to adopt. We build solutions designed for real-world implementation.',
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <motion.path
          d="M8 38 L8 20 L18 14 L28 20 L28 38"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }}
        />
        <motion.path
          d="M28 38 L28 24 L38 18 L38 38"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d="M6 38 L42 38"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M18 38 L18 28 L28 28 L28 38"
          stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
        />
      </svg>
    ),
    title: 'Learning Through Application',
    description:
      'We bridge the gap between learning and doing through workshops, projects, and innovation-driven experiences.',
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <motion.path
          d="M10 36 L10 28 M18 36 L18 22 M26 36 L26 16 M34 36 L34 10"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }}
        />
        <motion.path
          d="M10 28 L18 22 L26 16 L34 10"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.path
          d="M28 10 L34 10 L34 16"
          stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.path
          d="M6 38 L42 38"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
        />
      </svg>
    ),
    title: 'Designing for Growth',
    description:
      'We create future-ready solutions that evolve with changing needs and support sustainable growth.',
  },
];

export default function Methodology() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,204,21,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-5 border border-yellow-400/60 px-5 py-1.5 text-[10px] tracking-[0.3em] text-yellow-400 uppercase"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            Built to Solve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl tracking-widest mb-7 leading-tight"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            REAL{' '}
            <span className="text-blue-500">PROBLEMS</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px w-24 mx-auto mb-8 bg-gradient-to-r from-yellow-400 to-blue-500 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-zinc-400 leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-pixel)' }}

          >
            Technology becomes meaningful only when it addresses real challenges.
            At PixelIT, we identify problems that limit growth, creativity, and
            efficiency — and transform them into opportunities through purposeful
            innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden border border-zinc-800/80 bg-zinc-950 p-8 transition-colors duration-300 hover:border-zinc-700"
              style={{ borderRadius: '4px' }}
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-500 transition-all duration-500 group-hover:w-full" />

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/[0.03] rounded-full blur-2xl translate-x-8 translate-y-8 group-hover:bg-yellow-400/[0.05] transition-colors duration-500" />

              <div className="relative mb-7 text-zinc-500 group-hover:text-yellow-400 transition-colors duration-300">
                {problem.svg}
              </div>

              <div className="relative">
                <h3
                  className="text-base mb-3 tracking-wider text-zinc-200 group-hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  {problem.title}
                </h3>

                <div className="h-px w-8 mb-4 bg-zinc-700 group-hover:bg-yellow-400/50 transition-colors duration-300" />

                <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors duration-200"             style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  {problem.description}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-yellow-400">
                  <path d="M3 13 L13 3 M13 3 H7 M13 3 V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}