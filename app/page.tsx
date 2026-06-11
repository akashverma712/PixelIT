'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PixelSnow from "./components/PixelSnow";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/Home/WhoWeAre";
import Competencies from "./components/Home/services";
import WhyPixelIT from "./components/Home/WhyPixelIT";

import ContactPage from "./contact/page";

function PixelatedText({
  text,
  delay = 0.5,
  columns = 24,
  rows = 6,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  columns?: number;
  rows?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`relative inline-block ${className}`} style={style}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05, delay: delay + 0.25 }}
      >
        {text}
      </motion.span>

      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: delay + Math.random() * 1.6,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
 



  const scrollToContent = () => {
    document.getElementById("who-we-are")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
       

          <>
            <Navbar />

            <PixelSnow
              color="#ffffff"
              flakeSize={0.01}
              minFlakeSize={1.25}
              pixelResolution={200}
              speed={1.25}
              density={0.3}
              direction={125}
              brightness={1}
              depthFade={8}
              farPlane={20}
              gamma={0.4545}
              variant="square"
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-center pt-24">
              <div className="w-full flex justify-center leading-none select-none">
                <PixelatedText
                  text="PIXEL"
                  delay={0.6}
                  columns={28}
                  rows={8}
                  className="mr-6"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    WebkitTextStroke: "4px black",
                    letterSpacing: "0.45em",
                    fontSize: "clamp(3rem, 15vw, 18rem)",
                    color: "#facc15",
                  }}
                />
                <PixelatedText
                  text="IT"
                  delay={1}
                  columns={14}
                  rows={8}
                  style={{
                    fontFamily: "var(--font-pixel)",
                    WebkitTextStroke: "4px black",
                    letterSpacing: "0.45em",
                    fontSize: "clamp(3rem, 15vw, 18rem)",
                    color: "#3b82f6",
                  }}
                />
              </div>

              <div className="w-full flex justify-center mt-10">
                <PixelatedText
                  text="EVERY PIXEL MATTERS"
                  delay={2.2}
                  columns={48}
                  rows={4}
                  style={{
                    fontFamily: "var(--font-pixel)",
                    letterSpacing: "0.6em",
                    fontSize: "clamp(1rem, 3vw, 3rem)",
                    color: "#ffffff",
                  }}
                />
              </div>
            </div>

            <motion.div
              onClick={scrollToContent}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            >
              <div
                className="mb-3 text-[10px] tracking-widest text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                CLICK TO SCROLL
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className="w-4 h-4 rotate-45 border-b-4 border-r-4 border-white"
                  style={{ boxShadow: "0 0 10px rgba(255,255,255,0.4)" }}
                />
              </motion.div>
            </motion.div>
          </>
        
      </div>

        <>
          <WhoWeAre />
          <Competencies />
          <WhyPixelIT />
          <ContactPage />
        </>
     
    </>
  );
}