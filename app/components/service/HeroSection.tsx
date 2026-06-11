"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function HeroSection({
  title,
  description,
  image,
}: HeroSectionProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.10]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 80]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative w-full h-screen overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
        <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12">

                {/* Heading */}
                <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                    font-black
                    uppercase
                    text-white

                    whitespace-normal
                    break-normal

                    leading-[0.9]
                    tracking-[-0.03em]

                    text-center sm:text-left

                    text-[2.6rem]
                    sm:text-[4rem]
                    md:text-[5.2rem]
                    lg:text-[6.5rem]
                    xl:text-[8rem]

                    max-w-full
                "
                style={{
                    fontFamily: "var(--font-pixel)",
                    textShadow: "0 0 30px rgba(255,255,255,0.12)",
                }}
                >
                {title}
                </motion.h1>

                {/* Description */}
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="
                    mt-4 sm:mt-6

                    text-zinc-300

                    text-center sm:text-left

                    text-sm
                    sm:text-lg
                    md:text-xl

                    leading-relaxed

                    max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl
                "
                style={{
                    fontFamily: "var(--font-pixel)",
                    // textShadow: "0 0 30px rgba(255,255,255,0.12)",
                }}
                >
                {description}
                </motion.p>

            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}