'use client';

import { useRef } from "react";
import Link from "next/link";

const CHARS = "█▓▒░<>/\\|01";

export default function Navbar() {
  const scramble = (
    element: HTMLSpanElement,
    originalText: string
  ) => {
    let iteration = 0;
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
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
      <div className="w-full px-10 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl cursor-pointer select-none transition-transform hover:scale-[1.03]"
        >
          <img
            src="/pixelit_logo.png"
            alt="Pixelit Logo"
            className="h-5 w-auto"
          />
        </Link>

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
                onMouseEnter={() => {
                  if (ref.current) scramble(ref.current, item.label);
                }}
              >
                <Link href={item.href}>
                  <span
                    ref={ref}
                    className="inline-block transition-colors duration-200 group-hover:text-yellow-400"
                  >
                    {item.label}
                  </span>
                </Link>

                <span className="absolute left-0 -bottom-2 w-full h-0.75 bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />

                <span className="absolute -bottom-3 left-0 w-full h-px bg-yellow-400/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
