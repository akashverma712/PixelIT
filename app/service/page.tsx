"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const domains = [
  {
    title: "SOFTWARE DEVELOPMENT",
    route: "/service/webdev",
    scramble: "NEXT-GEN SOFTWARE ENGINEERING",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path
          d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Building scalable software solutions with modern architectures, seamless user experiences, and innovative technologies that drive digital transformation and business growth.",
  },
  {
    title: "AUTOMATION & IOT",
    route: "/service/iot",
    scramble: "INTELLIGENT CONNECTIVITY & AUTOMATION",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description:
      "Developing intelligent IoT and automation solutions that connect devices, streamline operations, enable real-time monitoring, and unlock smarter decision-making.",
  },
  {
    title: "GRAPHICS DESIGNING & VIDEO EDITING",  
    route: "/service",
    scramble: "VISUAL STORYTELLING & CREATIVE CONTENT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Crafting visually stunning graphics and compelling video content that captivates audiences, elevates brands, and tells powerful stories through innovative design and editing techniques.",
  },
 {
    title: "WEBINARS & SEMINARS",
    route: "/service",
    scramble: "IMMERSIVE LEARNING & PROFESSIONAL GROWTH",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Delivering engaging webinars, workshops, and seminars that promote learning, innovation, networking, and professional growth through interactive digital experiences.",
  },
];

const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+<>?:{}|";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="scramble-font">{display}</span>;
};

const CarouselComponent = () => {
  const [items, setItems] = useState(domains);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeDomain = items[1];

  const handleNext = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        if (first) newArr.push(first);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  const handlePrev = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const autoSlide = setInterval(handleNext, 9000);
    return () => clearInterval(autoSlide);
  }, [handleNext]);

  return (
    <div className="carousel">
      <div className="list">
        {items.map((d, i) => (
          <div className="item" key={d.title}>
            {/* <img src={d.image} alt={d.title} className="box-bg-img" /> */}
            <div className="box-overlay" />

            <div className="big-icon-container">{d.icon}</div>
            
            <div className="content">
              <div className="title-scramble">
                <ScrambleText key={d.title} text={d.scramble} />
              </div>
              <div className="name">{d.title}</div>
              <div className="description">{d.description}</div>
            </div>

            {/* <div className="box-label">
                <h3>{d.title}</h3>
                <div className="label-line" />
            </div> */}
          </div>
        ))}
      </div>

    
      <div className="arrows">
        <button className="prev" onClick={handlePrev}>
            PREV
        </button>

        <button className="next" onClick={handleNext}>
            NEXT
        </button>

        <button
          className="view"
          onClick={() => {
            window.location.href = activeDomain.route;
          }}
        >
          VIEW
        </button>

      </div>
      <div 
        className="timeRunning" 
        style={{ animation: isAnimating ? "runningTime 9s linear forwards" : "none" }}
      />
    </div>
  );
};

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ background: '#000', height: '100vh' }} />;

  return (
    <main className={`bg-black min-h-screen flex flex-col ${pixelFont.className}`}>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>

      <style jsx global>{`
        body { margin: 0; background: #000; color: white; overflow-x: hidden; }
        
        .bg-grid {
          position: fixed; inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px);
          z-index: -2;
          pointer-events: none;
        }

        .carousel { 
          width: 100vw; 
          height: 100vh; 
          position: relative; 
          overflow: hidden; 
        }

        // .list .item {
        //   position: absolute; 
        //   width: clamp(160px, 20vw, 220px); 
        //   height: clamp(240px, 30vw, 320px);
        //   top: 80%; 
        //   left: 80%; 
        //   transform: translateY(-50%);
        //   border-radius: 12px; overflow: hidden;
        //   transition: 0.8s cubic-bezier(0.6, 0, 0.2, 1);
        //   border: 1px solid rgba(255, 255, 255, 0.15);
        //   background: #0a0a0a;
        //   z-index: 5;
        // }

        /* Essential Fix: Reset display for hidden items */
        .list .item .content, .list .item .box-label, .list .item .big-icon-container {
            display: none;
            opacity: 0;
        }

        /* Active Item (Background) */
        .list .item:nth-child(1) {
          width: 100%; height: 100%; top: 0; left: 0;
          transform: none; border: none; border-radius: 0;
          z-index: 1;
        }

        /* The Item actually being displayed with text */
        .list .item:nth-child(2) {
          width: 100%; height: 100%; top: 0; left: 0;
          transform: none; border: none; border-radius: 0;
          z-index: 2;
          background: transparent;
        }

        .list .item:nth-child(2) .content, 
        .list .item:nth-child(2) .big-icon-container {
          display: block;
          opacity: 1;
        }

        .list .item:nth-child(3) { left: 50%; z-index: 10; }
        .list .item:nth-child(4) { left: calc(50% + clamp(180px, 22vw, 240px)); z-index: 10; }
        .list .item:nth-child(5) { left: calc(50% + clamp(360px, 44vw, 480px)); z-index: 10; }

        .list .item:nth-child(n+3) .box-label {
            display: block;
            opacity: 1;
        }

        .box-bg-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0; transition: 0.6s; 
          filter: grayscale(1) brightness(0.4);
        }
        .item:nth-child(n+3) .box-bg-img { opacity: 1; }
        .item:nth-child(1), .item:nth-child(2) {
            background: transparent;
        }
        .item:nth-child(1) .box-bg-img {
            opacity: 0.3; filter: grayscale(0.2) blur(2px);
            animation: zoomIn 10s infinite alternate;
        }

        @keyframes zoomIn { from { transform: scale(1); } to { transform: scale(1.1); } }

        .content {
          position: absolute; 
          top: 45%; left: 5%;
          transform: translateY(-50%);
          width: 90%;
          max-width: 800px;
          z-index: 100;
        }

        .title-scramble { 
          letter-spacing: clamp(2px, 1vw, 6px); 
          font-size: clamp(10px, 2vw, 18px); 
          margin-bottom: 15px; color: #fff;
        }
        .name { 
          font-size: clamp(50px, 10vw, 120px); 
          font-weight: 900; line-height: 0.9; 
          text-transform: uppercase;
          color: white;
        }
        .description { 
          margin-top: clamp(20px, 4vh, 40px);
          font-size: clamp(17px, 1.7vw, 21px); 
          color: rgba(255, 255, 255, 0.7); 
          line-height: 1.6; max-width: 550px;
          border-left: 2px solid #fff; padding-left: clamp(15px, 2vw, 25px);
        }

        .big-icon-container {
          position: absolute; top: 50%; right: -5%; transform: translateY(-50%);
          width: 50vw; height: 50vw; color: rgba(255, 255, 255, 0.05); 
          pointer-events: none;
        }

        .arrows { 
          position: absolute; bottom: 8%; left: 5%; 
          display: flex; gap: 10px; z-index: 200; 
        }
        .arrows button {
          padding: clamp(8px, 1.5vw, 12px) clamp(15px, 2.5vw, 25px);
          background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3);
          cursor: pointer; font-size: clamp(14px, 1.4vw, 16px); font-weight: 700;
          backdrop-filter: blur(5px); transition: 0.3s;
        }
        .arrows button:hover { background: #fff; color: #000; }

        .timeRunning { position: absolute; top: 0; left: 0; height: 3px; background: #fff; z-index: 1000; }

        @keyframes runningTime { from { width: 0%; } to { width: 100%; } }

        .footer-wrapper { position: relative; z-index: 101; background: black; width: 100%; }

        @media screen and (max-width: 768px) {
          .list .item:nth-child(3) { left: 40%; }
          .list .item:nth-child(4) { left: calc(40% + 170px); }
          .list .item:nth-child(5) { left: calc(40% + 340px); }
          .content { top: 40%; }
        }
      `}</style>

      <div className="bg-grid" />
      
      <section className="relative w-full h-screen">
        <CarouselComponent />
      </section>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </main>
  );
}