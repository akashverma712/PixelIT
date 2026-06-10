'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

type FAQType = {
  question: string;
  answer: string;
};
const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // controls top → bottom delay
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -40, // left → right
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};


const faqs: FAQType[] = [
  {
    question: 'What exactly is PixelIt?',
    answer:
      'Pixelit is a tech-driven solution for the everyday problems many people face. We provide innovative technical and digital products and services designed to simplify challenges and deliver real impact.',
  },
  {
    question: 'Who is PixelIt for?',
    answer:
      'PixelIt is for startups, brands, student communities, and individuals who believe in technology-backed creativity and scalable digital solutions.',
  },
  {
    question: 'What services does PixelIt provide?',
    answer:
      'We offer a wide range of services, from web development and graphic design to robotics, automation, video editing, webinars, and seminars. Whatever you need, we’ve got you covered.',
  },
  {
    question: 'How can I collaborate or join PixelIt?',
    answer:
      'You can collaborate by reaching out through the Join Us section on our Contact page or by connecting with us on our social platforms.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-zinc-950 px-6 sm:px-10 py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 border border-yellow-400/40 px-6 py-1.5 text-xs tracking-[0.35em] text-yellow-400 uppercase"
        >
          FAQ Corner
        </motion.span>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white
        "
         style={{ fontFamily: "var(--font-pixel)" }}>
          QUESTIONS <span className="text-blue-500">ANSWERED</span>
        </h2>

        <p className="mt-6 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to know about PixelIt, our vision, and how we work.
        </p>
      </div>

      {/* FAQ List */}
      <motion.dl
  variants={listVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  className="max-w-6xl mx-auto space-y-6"
>

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            faq={faq}
            isOpen={active === index}
            toggle={() => setActive(active === index ? null : index)}
          />
        ))}
      </motion.dl>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  toggle,
}: {
  faq: FAQType;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
        layout="position"
  variants={itemVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-500
        ${
          isOpen
            ? 'border-yellow-400/60 bg-zinc-900 shadow-[0_0_40px_-12px_rgba(250,204,21,0.35)]'
            : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
        }`}
    >
      {/* Accent bar */}
      <span
        className={`absolute left-0 top-0 h-full w-1 transition-all duration-300
          ${isOpen ? 'bg-yellow-400' : 'bg-transparent'}`}
      />

      <dt>
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between gap-6 px-6 sm:px-10 py-7 text-left"
        >
          <div className="flex items-center gap-6">
            <span
              className={`text-xs font-mono tracking-wider transition-colors
                ${isOpen ? 'text-yellow-400' : 'text-zinc-600'}`}
            >
              0{index + 1}
            </span>

            <h3
              className={`text-base sm:text-xl font-medium transition-colors
                ${isOpen ? 'text-white' : 'text-zinc-300'}`}
            >
              {faq.question}
            </h3>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <Plus
              className={`w-5 h-5 ${
                isOpen ? 'text-yellow-400' : 'text-zinc-500'
              }`}
            />
          </motion.div>
        </button>
      </dt>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.dd
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-10 pb-8 pt-4 border-t border-zinc-800/60">
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-4xl">
                {faq.answer}
              </p>
            </div>
          </motion.dd>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
