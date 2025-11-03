import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Building2 } from 'lucide-react';

export default function BookEvents() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative mx-auto mt-20 max-w-7xl rounded-3xl bg-gradient-to-b from-[#efe7dd] to-[#f7f3ee] p-8 sm:p-12 shadow-inner">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold text-stone-800 sm:text-4xl"
        >
          Book an Event
        </motion.h2>
        <p className="mt-2 text-stone-700">Corporate, college, family or custom play experiences—crafted and facilitated by Rasphera.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-stone-700">Name</label>
                <input required type="text" className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none ring-0 placeholder:text-stone-400 focus:border-amber-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-stone-700">Email</label>
                <input required type="email" className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="you@company.com" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-stone-700">Category</label>
                <select className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400">
                  <option>Corporate</option>
                  <option>College</option>
                  <option>Family</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-stone-700">Date</label>
                <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
                  <CalendarDays size={18} className="text-stone-500" />
                  <input required type="date" className="w-full outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-stone-700">Attendees</label>
                <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
                  <Users size={18} className="text-stone-500" />
                  <input required type="number" min="5" max="500" placeholder="50" className="w-full outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-stone-700">Organization</label>
                <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
                  <Building2 size={18} className="text-stone-500" />
                  <input type="text" placeholder="Company / College" className="w-full outline-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-stone-700">Notes</label>
              <textarea rows="4" className="w-full rounded-xl border border-stone-200 bg-white p-3 shadow-sm outline-none focus:border-amber-400" placeholder="Tell us about your event goals, venue, duration, etc." />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="rounded-full bg-emerald-700 px-6 py-3 text-white shadow-lg shadow-emerald-900/20 transition hover:scale-[1.01] hover:bg-emerald-600">Request Proposal</button>
              <button type="button" className="rounded-full bg-white px-6 py-3 text-amber-900 shadow-md transition hover:bg-amber-50">Proceed to Payment</button>
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-2 text-sm text-emerald-700"
              >
                Thanks! We’ll reach out within 24 hours with details and next steps.
              </motion.p>
            )}
          </form>
        </div>

        <div className="sm:col-span-2">
          <div className="h-full rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-800">What’s included</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-700">
              <li>Facilitators and curated play sessions</li>
              <li>Customizable game mix for your audience</li>
              <li>Mindfulness and wellness breakouts</li>
              <li>Setup, teardown, and on-site coordination</li>
            </ul>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-amber-200/60 to-amber-100 p-4 text-amber-900">
              Secure payments via Razorpay/Stripe supported.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
