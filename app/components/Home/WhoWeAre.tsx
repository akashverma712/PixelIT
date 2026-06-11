'use client';

import { motion, Variants } from 'framer-motion';

const journey = ["IDEATE", "INNOVATE", "BUILD", "EMPOWER"];

// Explicitly typing variants prevents TypeScript from complaining
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier curve (Ultra smooth, error-proof)
    },
  },
};

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative bg-black text-white px-6 overflow-hidden"
    >
      {/* Background glow preserved */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">
        
        {/* LEFT SIDE - CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start"
        >
          {/* Mission Badge */}
          <motion.span
            variants={textVariants}
            className="inline-block mb-6 border border-yellow-400/40 px-6 py-1.5 text-xs tracking-[0.35em] text-yellow-400 uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            Our Mission
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            WHAT WE <span className="text-blue-500">DO</span>
          </motion.h2>

          {/* Core Paragraph */}
          <motion.p
            variants={textVariants}
            className="text-zinc-400 leading-relaxed text-base sm:text-lg max-w-xl"
          >
            Our mission is to bridge the gap between ideas and execution
            by delivering innovative, high-quality technology solutions
            that create real-world impact. We empower individuals,
            startups, and organizations through collaborative learning,
            creative thinking, and future-ready technologies.
          </motion.p>

          {/* Impact Statement */}
          <motion.div variants={textVariants} className="mt-10 sm:mt-12">
            <p
              className="text-xl sm:text-2xl tracking-[0.20em] text-blue-400 font-bold leading-snug"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              WE DON'T JUST BUILD TECHNOLOGY.
              <br />
              <span className="text-yellow-400">WE BUILD IMPACT.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - PIXEL REVEAL IMAGE */}
        <div className="relative flex justify-center items-center w-full">
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center overflow-hidden">
            
            {/* Actual Image */}
            <img
              src="/robo2.png"
              alt="About PixelIT"
              className="w-full h-full object-contain select-none"
            />

            {/* Robust Pixel Overlay */}
            <div 
              className="absolute inset-0 grid pointer-events-none"
              style={{ 
                gridTemplateColumns: 'repeat(20, minmax(0, 1fr))',
                gridTemplateRows: 'repeat(20, minmax(0, 1fr))' 
              }}
            >
              {Array.from({ length: 400 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-black"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.random() * 1.5,
                    ease: "easeOut" // Strings work flawlessly inside inline transitions here
                  }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}