'use client';
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Member = {
  name: string;
  role: string;
  skill: string;
  image: string;
  description: string;
};

interface TeamPopupProps {
  member: Member | null;
  onClose: () => void;
}

export default function TeamPopup({ member, onClose }: TeamPopupProps) {
  useEffect(() => {
    if (!member) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(0,0,0,0.85)",
          }}
          onClick={onClose}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.9, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-zinc-800 overflow-hidden"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400/60" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400/60" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400/60" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:border-yellow-400 hover:text-yellow-400 transition-all text-xs"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative h-72 sm:h-auto sm:min-h-[380px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#0a0a0a]" />
                <div className="absolute bottom-4 left-4 sm:hidden">
                  <p className="text-[10px] tracking-[0.2em] text-yellow-400/70 mb-1">
                    {member.role.toUpperCase()}
                  </p>
                  <h2 className="text-xl tracking-widest text-white">
                    {member.name.toUpperCase()}
                  </h2>
                </div>
              </div>

              <div
                className="p-7 sm:p-8 flex flex-col justify-between gap-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.018) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              >
                <div>
                  <div className="hidden sm:block mb-6">
                    <span className="text-[10px] tracking-[0.25em] text-yellow-400/60 block mb-2">
                      TEAM MEMBER
                    </span>
                    <h2 className="text-2xl tracking-widest text-white leading-tight">
                      {member.name.toUpperCase()}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] tracking-widest border border-blue-500/40 text-blue-400 bg-blue-500/5 px-3 py-1">
                      {member.role.toUpperCase()}
                    </span>
                    <span className="text-[10px] tracking-widest border border-zinc-700 text-zinc-400 px-3 py-1">
                      {member.skill.toUpperCase()}
                    </span>
                  </div>

                  <div className="border-t border-zinc-800 pt-5">
                    <p className="text-[10px] tracking-[0.2em] text-zinc-600 mb-3">ABOUT</p>
                    <p className="text-xs text-zinc-400 leading-relaxed tracking-wide">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex gap-2">
                    {["GITHUB", "LINKEDIN", "TWITTER"].map((social) => (
                      <button
                        key={social}
                        className="flex-1 border border-zinc-800 py-2 text-[9px] tracking-widest text-zinc-600 hover:border-zinc-600 hover:text-zinc-300 transition-all"
                      >
                        {social}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full border border-yellow-400/60 py-3 text-[10px] tracking-widest text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-200"
                  >
                    CLOSE ✕
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}