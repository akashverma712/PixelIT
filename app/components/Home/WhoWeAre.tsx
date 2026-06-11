'use client';

import { motion } from 'framer-motion';

const journey = [
  "IDEATE",
  "INNOVATE",
  "BUILD",
  "EMPOWER",
];

export default function WhoWeAre() {
  return (
    <section 
    id="who-we-are"
    className="relative bg-black text-white py-32 px-6 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            WHO WE ARE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl mb-8 tracking-widest"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            WE ARE <span className="text-blue-500">PIXELIT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-zinc-400 leading-relaxed text-lg"
          >
            PIXELIT is an innovation-driven technology and creative studio
            that transforms ideas into impactful digital experiences and
            intelligent systems. Through design, development, AI, IoT,
            and automation, we build future-ready solutions that empower
            individuals, startups, and organizations to innovate with confidence.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-yellow-400 via-blue-500 to-transparent my-10"
          />

          {/* Mission */}
        {/* Mission */}
<motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  viewport={{ once: true }}
  className="text-2xl mb-5 tracking-widest text-yellow-400"
  style={{ fontFamily: "var(--font-pixel)" }}
>
  OUR MISSION
</motion.h3>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
  className="text-zinc-400 leading-relaxed text-lg"
>
  Our mission is to bridge the gap between ideas and execution
  by delivering innovative, high-quality technology solutions
  that create real-world impact. We empower individuals,
  startups, and organizations through practical learning,
  creative thinking, and future-ready technologies.
</motion.p>

{/* ADD THIS HERE */}
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  viewport={{ once: true }}
  className="
    mt-12
    text-xl
    tracking-[0.25em]
    text-blue-400
  "
  style={{
    fontFamily: "var(--font-pixel)",
  }}
>
  WE DON'T JUST BUILD TECHNOLOGY.
  <br />
  WE BUILD IMPACT.
</motion.p>

        </div>

        
      {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="relative flex justify-center items-center">

  <div className="relative w-full max-w-xl">

    {/* Actual Image */}
    <img
      src="/robo2.png"
      alt="About PixelIT"
      className="w-full object-contain"
    />

    {/* Pixel Overlay */}
    <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 pointer-events-none">

      {Array.from({ length: 400 }).map((_, i) => (

        <motion.div
          key={i}
          className="bg-black"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            delay: Math.random() * 1.5,
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