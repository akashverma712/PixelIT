'use client';

import Navbar from '../Navbar';
import PixelSnow from '../PixelSnow';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
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

      {/* Keep your PixelatedText here */}

      {/* CTA Buttons */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-6 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <Link
          href="/service"
          className="border-2 border-yellow-400 px-8 py-4 tracking-[0.2em] text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          EXPLORE SERVICES
        </Link>

        <Link
          href="/contact"
          className="border-2 border-blue-500 px-8 py-4 tracking-[0.2em] text-blue-500 hover:bg-blue-500 hover:text-black transition"
        >
          JOIN PIXELIT
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      {/* Move your existing indicator here */}
    </div>
  );
}