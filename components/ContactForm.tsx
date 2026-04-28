"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputCls =
  "w-full bg-transparent border-b border-[#F5F1E9]/15 focus:border-[#C8A96A] outline-none py-4 text-[#F5F1E9] placeholder:text-[#F5F1E9]/35 transition-colors text-sm tracking-wide";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {!sent ? (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-8"
        >
          <div>
            <div className="eyebrow mb-3">How may we help?</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E9]">
              Send a note.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input className={inputCls} placeholder="Name" required />
            <input className={inputCls} placeholder="Email" type="email" required />
          </div>
          <input className={inputCls} placeholder="Phone (optional)" />
          <select className={`${inputCls} appearance-none cursor-pointer`} defaultValue="">
            <option value="" disabled className="bg-[#0F0F0F]">Reason for writing</option>
            <option className="bg-[#0F0F0F]">Personal Order</option>
            <option className="bg-[#0F0F0F]">Corporate Gifting</option>
            <option className="bg-[#0F0F0F]">Wholesale Enquiry</option>
            <option className="bg-[#0F0F0F]">Press</option>
          </select>
          <textarea
            className={`${inputCls} resize-none`}
            placeholder="Your message"
            rows={4}
            required
          />

          <button type="submit" className="btn-gold w-full sm:w-auto mt-4">
            Send Note
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-10 text-center"
        >
          <div className="gold-divider mx-auto mb-6">Thank You</div>
          <h3 className="font-serif text-3xl text-[#F5F1E9]">
            Your note is on its way.
          </h3>
          <p className="mt-4 text-[#F5F1E9]/60 max-w-md mx-auto">
            We&apos;ll write back within a working day, often sooner. In the
            meantime — put the kettle on.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
