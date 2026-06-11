'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import Navbar from "../components/Navbar";
import ReflectiveCard from "../components/ReflectiveCard";
import Footer from "../components/Footer";

type ToastType = { message: string; status: 'success' | 'error' } | null;

export default function ContactPage() {
  const [showJoin, setShowJoin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastType>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.body.style.overflow = showJoin ? "hidden" : "auto";
  }, [showJoin]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleServicesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const selectedServices = formData.getAll('services').join(', ');

    const templateParams = {
      user_name: formData.get('name'),
      user_email: formData.get('email'),
      user_budget: formData.get('budget'),
      user_services: selectedServices || 'None selected',
      user_query: formData.get('query'),
    };

    emailjs.send(
      'service_w5525mm',
      'template_jpdielo',
      templateParams,
      'xCLYUGuk1kn_GBq62'
    )
    .then(() => {
      setToast({ message: 'YOUR INQUIRY HAS BEEN SENT SUCCESSFULLY.', status: 'success' });
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Submission Error:', error);
      setToast({ message: 'FAILED TO SEND. PLEASE TRY AGAIN.', status: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "var(--font-pixel)" }}
    >
      <Navbar />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-6 py-4 border-2 bg-black"
            style={{
              borderColor: toast.status === 'success' ? '#facc15' : '#ef4444',
              minWidth: '320px',
              maxWidth: '90vw',
            }}
          >
            <span
              className="text-lg"
              style={{ color: toast.status === 'success' ? '#facc15' : '#ef4444' }}
            >
              {toast.status === 'success' ? '✦' : '✕'}
            </span>
            <p
              className="text-xs tracking-widest flex-1"
              style={{ color: toast.status === 'success' ? '#facc15' : '#ef4444' }}
            >
              {toast.message}
            </p>
            <button
              onClick={() => setToast(null)}
              className="text-zinc-500 hover:text-white text-sm ml-2"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="inline-block mb-6 border border-yellow-400 px-4 py-1 text-xs tracking-widest text-yellow-400">
              CONTACT US
            </span>

            <h1 className="text-5xl tracking-widest mb-6">
              WANT OUR <span className="text-blue-500">SERVICES?</span>
            </h1>

            <p className="text-zinc-400 mb-12 max-w-md leading-relaxed tracking-wide">
              From scalable systems and graphics to automation, webinars and seminars —
              we craft solutions that actually work.
            </p>

            <form
              ref={formRef}
              onSubmit={handleServicesSubmit}
              className="bg-zinc-950 border-2 border-zinc-800 p-8 space-y-8"
            >
              {["NAME", "EMAIL", "BUDGET"].map((label) => (
                <div key={label}>
                  <label className="block text-xs mb-2 tracking-widest text-zinc-400">
                    {label}
                  </label>
                  <input
                    required={label !== "BUDGET"}
                    name={label.toLowerCase()}
                    type={label === "EMAIL" ? "email" : "text"}
                    className="w-full bg-black border-2 border-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-400"
                    placeholder={`ENTER ${label}`}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs mb-3 tracking-widest text-zinc-400">
                  REQUIRED SERVICES
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {[
                    "Website Development",
                    "Graphics Design",
                    "Video Editing",
                    "Automation",
                    "Webinar / Seminar",
                    "Others"
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-3 text-zinc-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="accent-yellow-400 scale-110"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs mb-2 tracking-widest text-zinc-400">
                  QUERY CORNER
                </label>
                <textarea
                  name="query"
                  rows={4}
                  placeholder="DROP YOUR QUERY HERE..."
                  className="w-full bg-black border-2 border-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border-2 border-yellow-400 text-yellow-400 py-4 tracking-widest hover:bg-yellow-400 hover:text-black transition disabled:opacity-50 uppercase"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="border-2 border-zinc-800 bg-zinc-900 flex justify-center p-10">
              <img
                src="/pixelit_logo.png"
                alt="PixelIt"
                className="max-w-xs w-full object-contain"
              />
            </div>

            <div className="border-2 border-zinc-800 p-5 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-green-500 text-green-500">
                📞
              </div>
              <div>
                <p className="tracking-widest text-sm">PHONE</p>
                <p className="text-xs text-zinc-400">+91 74796 76602; +91 74800 52919</p>
              </div>
            </div>

            <div className="border-2 border-zinc-800 p-5 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-blue-500 text-blue-500">
                ✉️
              </div>
              <div>
                <p className="tracking-widest text-sm">EMAIL</p>
                <p className="text-xs text-zinc-400">connect@pixelit.co.in</p>
              </div>
            </div>

            <button
              onClick={() => setShowJoin(true)}
              className="w-full border-2 border-yellow-400 py-5 tracking-widest text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              JOIN US →
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showJoin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl bg-zinc-950 border-2 border-zinc-800 p-5 md:p-8"
              >
                <button
                  onClick={() => setShowJoin(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg z-10"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl tracking-widest">
                      JOIN <span className="text-yellow-400">PIXELIT</span>
                    </h2>

                    <p className="text-zinc-400 text-xs tracking-widest leading-relaxed">
                      WE WILL BE STARTING THE JOINING PROCESS SOON. TILL THEN KEEP{" "}
                      <span className="text-blue-500">PIXELIZING</span>.
                    </p>

                    {[
                      "FULL NAME",
                      "EMAIL",
                      "ROLE APPLYING FOR",
                      "SKILLS / TECH STACK",
                      "PORTFOLIO / GITHUB / LINKEDIN"
                    ].map((field) => (
                      <input
                        key={field}
                        placeholder={field}
                        disabled
                        className="w-full bg-zinc-900 border-2 border-zinc-700 px-4 py-3 text-zinc-400 placeholder-zinc-500 outline-none cursor-not-allowed opacity-60"
                      />
                    ))}

                    <textarea
                      rows={2}
                      placeholder="WHY DO YOU WANT TO JOIN PIXELIT?"
                      disabled
                      className="w-full bg-zinc-900 border-2 border-zinc-700 px-4 py-3 text-zinc-400 placeholder-zinc-500 outline-none resize-none cursor-not-allowed opacity-60"
                    />

                    <button
                      disabled
                      className="w-full border-2 border-zinc-700 py-3 text-zinc-500 tracking-widest cursor-not-allowed opacity-60"
                    >
                      SUBMIT →
                    </button>
                  </div>

                  <div className="hidden lg:flex justify-center">
                    <ReflectiveCard />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}