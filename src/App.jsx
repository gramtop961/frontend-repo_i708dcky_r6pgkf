import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';
import BookEvents from './components/BookEvents';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-stone-900">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-stone-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-500 shadow-inner" />
            <span className="font-display text-lg font-semibold tracking-wide text-stone-800">Rasphera</span>
          </a>
          <nav className="hidden gap-6 text-sm text-stone-700 sm:flex">
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#shop" className="hover:text-stone-900">Shop</a>
            <a href="#book" className="hover:text-stone-900">Book Events</a>
            <a href="#contact" className="hover:text-stone-900">Contact</a>
          </nav>
          <a href="#shop" className="rounded-full bg-amber-800 px-4 py-2 text-sm text-white shadow hover:bg-amber-700">Shop</a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <div className="pt-6">
          <Hero />
        </div>

        <About />
        <Shop />
        <BookEvents />

        {/* Gallery - lightweight animated grid */}
        <section id="gallery" className="mx-auto mt-20 max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-800 sm:text-4xl">Gallery</h2>
            <p className="mt-2 text-stone-700">Moments from events and behind-the-scenes craftsmanship.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-200 to-stone-100 shadow-inner"
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_60%_40%,rgba(0,0,0,0.05),transparent_60%)]" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact / Collaborate */}
        <section id="contact" className="mx-auto mt-20 max-w-7xl rounded-3xl bg-gradient-to-b from-[#faf7f3] to-[#efe7dd] p-8 sm:p-12 shadow-inner">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-stone-800">Contact & Collaborate</h3>
              <p className="mt-2 text-stone-700">Have a project, event, or partnership in mind? Let’s create playful experiences that bring people together.</p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="Your name" />
                  <input type="email" className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="Email" />
                </div>
                <input className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="Subject" />
                <textarea rows="4" className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="Tell us more" />
                <button className="rounded-full bg-amber-800 px-6 py-3 text-white shadow transition hover:bg-amber-700">Send Inquiry</button>
              </form>
              <div className="mt-6 flex gap-4 text-stone-600">
                <a href="#" className="hover:text-stone-900">Instagram</a>
                <a href="#" className="hover:text-stone-900">LinkedIn</a>
                <a href="#" className="hover:text-stone-900">YouTube</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow">
              <iframe
                title="Rasphera Location"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31534.458260205605!2d77.577!3d12.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE1LjYiTiA3N8KwMzQnMzcuNiJF!5e0!3m2!1sen!2sin!4v1710000000000"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-stone-200/60 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-stone-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Rasphera. Crafted with care.</p>
          <div className="flex items-center gap-3">
            <a href="#about" className="hover:text-stone-800">About</a>
            <a href="#shop" className="hover:text-stone-800">Shop</a>
            <a href="#book" className="hover:text-stone-800">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
