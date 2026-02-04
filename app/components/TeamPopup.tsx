'use client';

import { Github, Linkedin, Twitter, Trophy, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Member {
  image: string;
  name: string;
  role: string;
  skill: string;
  description: string;
  achievements?: string[];
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamPopup({ member, onClose }: { member: Member | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-950 border-2 border-yellow-400 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(250,204,24,0.1)]"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400 z-10" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400 z-10" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400 z-10" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 z-10" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all p-1 border border-yellow-400/30"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-[40%] h-80 md:h-auto border-b md:border-b-0 md:border-r border-zinc-800 relative bg-zinc-900">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 flex gap-3">
                {member.socials?.github && (
                  <a href={member.socials.github} target="_blank" className="p-2 bg-black/60 border border-zinc-700 text-white hover:border-yellow-400 hover:text-yellow-400 transition-all">
                    <Github size={18} />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" className="p-2 bg-black/60 border border-zinc-700 text-white hover:border-blue-500 hover:text-blue-500 transition-all">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} target="_blank" className="p-2 bg-black/60 border border-zinc-700 text-white hover:border-sky-400 hover:text-sky-400 transition-all">
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="w-full md:w-[60%] p-8 md:p-10 space-y-8 flex flex-col justify-start overflow-y-auto max-h-[80vh]">
              
              <div className="space-y-1">
                <span className="text-blue-500 text-[10px] tracking-[0.4em] font-bold uppercase">{member.skill}</span>
                <h3 className="text-4xl tracking-tighter text-yellow-400 font-black uppercase">
                  {member.name}
                </h3>
                <p className="text-zinc-500 text-sm tracking-widest uppercase border-l-2 border-yellow-400 pl-3">
                  {member.role}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                  <Trophy size={12} className="text-yellow-400" /> Achievements
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {member.achievements?.map((ach, idx) => (
                    <div key={idx} className="text-[11px] text-zinc-400 border border-zinc-800 p-2 bg-zinc-900/30">
                      {ach}
                    </div>
                  )) || <div className="text-[11px] text-zinc-600">No data records found.</div>}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">About Unit</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {member.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                <span className="text-[8px] text-zinc-600 tracking-[0.3em] font-mono">STATUS: ACTIVE</span>
                <span className="text-[8px] text-zinc-700 tracking-[0.2em] font-mono uppercase">Data_Stream_v1.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}