import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-[#f6f3ef]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm gradient veil to blend 3D with brand palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-[#f3eadf]/70 to-[#e7dfd5]/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-amber-900 shadow-sm backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
          Eco-crafted • Wellness-first • Play together
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display mx-auto max-w-3xl text-4xl font-semibold text-stone-800 sm:text-5xl md:text-6xl"
        >
          Redefining Play, Reconnecting People.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-base text-stone-700 sm:text-lg"
        >
          Rasphera designs eco-friendly wooden games and curates playful, mindful experiences for corporates, colleges, and communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-800 px-6 py-3 text-white shadow-lg shadow-amber-900/20 transition hover:scale-[1.02] hover:bg-amber-700"
          >
            Shop Games
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-amber-900 shadow-md backdrop-blur transition hover:scale-[1.02] hover:bg-white"
          >
            Book Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
