'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[var(--bg-main)] text-[var(--text-muted)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-4">
          <img
            src="/pixelit_logo.png"
            alt="PixelIt"
            className="w-32 opacity-90"
          />

          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            PixelIt is a tech-driven creative collective focused on building
            impactful solution through design, development,
            automation, innovation and collaboration.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="tracking-widest text-sm text-yellow-400">
            QUICK LINKS
          </h4>

          <ul className="space-y-2 text-sm text-zinc-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/service" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="tracking-widest text-sm text-yellow-400">
            SERVICES
          </h4>

          <ul className="space-y-2 text-sm text-zinc-400">
            <li><Link href="/service/webdev" className="hover:text-white transition">Web Development</Link></li>
            <li><Link href="/service/graphics" className="hover:text-white transition">Graphic Design</Link></li>
            <li><Link href="/service/video" className="hover:text-white transition">Video Editing</Link></li>
            <li><Link href="/service/automation" className="hover:text-white transition">Automation & Robotics</Link></li>
            <li><Link href="/service/webinars" className="hover:text-white transition">Webinars & Seminars</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="tracking-widest text-sm text-yellow-400">
            CONNECT
          </h4>

          <div className="flex gap-5">
            <a href="#" className="text-zinc-400 hover:text-yellow-400 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.214-6.817L4.99 21.75H1.68l7.73-8.84L1.25 2.25h6.826l4.713 6.231L18.244 2.25z" />
              </svg>
            </a>

            <a href="#" className="text-zinc-400 hover:text-yellow-400 transition">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.94 1.26 4 4 0 0 1 7.94-1.26z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a href="#" className="text-zinc-400 hover:text-yellow-400 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96zM3 21.5h4V9h-4v12.5zM9 9h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.75h-4v-6c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.29 1.55-2.29 3.15v6.11H9V9z" />
              </svg>
            </a>
          </div>



          <p className="text-zinc-500 text-xs pt-3">
            © {new Date().getFullYear()} PixelIt. All rights reserved.
          </p>
        </div>
      </div>


      
    </footer>
  );
}
