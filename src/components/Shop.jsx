import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Balance Arc', price: 2499, colorFrom: '#8b5e34', colorTo: '#b08968' },
  { id: 2, name: 'Forest Stack', price: 1999, colorFrom: '#6b705c', colorTo: '#a5a58d' },
  { id: 3, name: 'Harmony Grid', price: 2299, colorFrom: '#7f5539', colorTo: '#b07d62' },
  { id: 4, name: 'River Stones', price: 1799, colorFrom: '#386641', colorTo: '#6a994e' }
];

function formatINR(num) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);
}

export default function Shop() {
  return (
    <section id="shop" className="mx-auto mt-20 max-w-7xl px-2 sm:px-0">
      <div className="mb-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold text-stone-800 sm:text-4xl"
        >
          Handcrafted Wooden Games
        </motion.h2>
        <p className="mt-2 text-stone-700">Smooth finishes, comforting textures, and playful interactions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * idx, duration: 0.5 }}
            className="group perspective"
          >
            <div
              className="relative h-56 w-full transform rounded-2xl bg-gradient-to-br p-3 shadow-md transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-6"
              style={{ backgroundImage: `linear-gradient(135deg, ${p.colorFrom}, ${p.colorTo})` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white drop-shadow">{p.name}</h3>
                  <p className="text-white/90">{formatINR(p.price)}</p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-amber-900 shadow transition hover:bg-white">
                  <ShoppingCart size={16} />
                  Add to cart
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-stone-600">Spin the card • 3D-style preview</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
