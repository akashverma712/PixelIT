'use client';

import { motion, Variants } from 'framer-motion';

type ReasonType = {
  title: string;
  description: string;
};

const reasons: ReasonType[] = [
  {
    title: 'INNOVATION-FIRST APPROACH',
    description:
      'We embrace emerging technologies and creative thinking to solve problems in ways that are practical, scalable, and future-ready.',
  },
  {
    title: 'COLLABORATIVE PARTNERSHIP',
    description:
      'We believe the best solutions are built together. Our process emphasizes transparency, teamwork, and close collaboration at every stage.',
  },
  {
    title: 'FROM IDEAS TO EXECUTION',
    description:
      'Whether it is a concept on paper or an evolving project, we transform ideas into impactful solutions through strategic planning and flawless execution.',
  },
  {
    title: 'LEARNING THROUGH BUILDING',
    description:
      'We cultivate a culture of continuous learning through workshops, projects, and hands-on experiences that bridge the gap between knowledge and application.',
  },
  {
    title: 'QUALITY & RELIABILITY',
    description:
      'We prioritize excellence in everything we create, ensuring our solutions are robust, user-centric, and built to perform.',
  },
  {
    title: 'IMPACT-DRIVEN VISION',
    description:
      'Our goal extends beyond technology—we strive to create solutions that empower communities, businesses, and individuals to thrive in a rapidly evolving world.',
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WhyPixelIT() {
  return (
    <section className="bg-black text-white py-32 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span
            className="inline-block mb-6 border border-yellow-400/40 px-6 py-1.5 text-xs tracking-[0.35em] text-yellow-400 uppercase"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            Why PixelIT
          </span>

          <h2
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            WHY CHOOSE <span className="text-blue-500">PIXELIT?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            At PixelIT, we go beyond delivering solutions—we build
            experiences that inspire innovation, accelerate growth,
            and create meaningful impact.
          </p>
        </motion.div>

        {/* Sticky Stacked Cards */}
        <div className="relative space-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(234, 179, 8, 0.4)",
                boxShadow: "0 10px 40px -10px rgba(59,130,246,0.15)",
              }}
              className="sticky top-28 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 sm:p-10 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-10">

                {/* Tech Matrix Counter replaces Emoji */}
                <div 
                  className="text-xl sm:text-2xl font-mono tracking-widest text-blue-500 select-none shrink-0 drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  [&nbsp;0{index + 1}&nbsp;]
                </div>

                <div className="space-y-4 flex-1">
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-wider text-white"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    {reason.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-3xl">
                    {reason.description}
                  </p>

                  <div className="pt-2">
                    <div className="h-[2px] w-20 bg-gradient-to-r from-yellow-400 via-blue-500 to-transparent" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}