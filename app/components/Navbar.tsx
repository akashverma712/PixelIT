'use client';

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CHARS = "█▓▒░<>/\\|01";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const scramble = (element: HTMLSpanElement, originalText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((char, index) =>
          index < iteration
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.innerText = originalText;
      }

      iteration += 1 / 3;
    }, 30);
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/service" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-black/70 backdrop-blur-md border-b border-white/10">
      {/* TOP BAR */}
      <div className="w-full px-10 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="select-none">
          <img src="/pixelit_logo.png" alt="Pixelit Logo" className="h-5" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul
            className="flex gap-14 text-white text-sm tracking-[0.35em]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {navItems.map((item) => {
              const ref = useRef<HTMLSpanElement>(null);

              return (
                <li
                  key={item.label}
                  className="relative cursor-pointer group"
                  onMouseEnter={() =>
                    ref.current && scramble(ref.current, item.label)
                  }
                >
                  <Link href={item.href}>
                    <span
                      ref={ref}
                      className="group-hover:text-yellow-400 transition"
                    >
                      {item.label}
                    </span>
                  </Link>

                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <ul
              className="flex flex-col items-center gap-8 py-8 text-white text-sm tracking-[0.35em]"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-400 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

