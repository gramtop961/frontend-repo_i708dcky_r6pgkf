import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Hammer, HeartHandshake } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    text: 'We use FSC-certified wood and non-toxic finishes to protect both people and the planet.'
  },
  {
    icon: Hammer,
    title: 'Handcrafted',
    text: 'Every game is hand-finished by artisans, celebrating warmth, texture, and timeless design.'
  },
  {
    icon: HeartHandshake,
    title: 'Designed for Connection',
    text: 'Our experiences encourage mindful play, teamwork, and renewed social bonds.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto mt-20 max-w-7xl rounded-3xl bg-gradient-to-b from-[#faf7f3] to-[#efe7dd] p-8 sm:p-12 shadow-inner">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold text-stone-800 sm:text-4xl"
        >
          About Rasphera
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-stone-700"
        >
          We blend sustainability, wellness, and playful creativity. From studio to community, our wooden games are crafted to spark joy and presence—away from screens and closer to each other.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {highlights.map((h, idx) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * idx, duration: 0.6 }}
            className="rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur hover:shadow-md"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <h.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-stone-800">{h.title}</h3>
            <p className="mt-2 text-sm text-stone-700">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
