"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative px-6 lg:px-10 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative max-w-7xl mx-auto rounded-[36px] overflow-hidden border border-[#C8A96A]/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#082A20] to-[#0F0F0F]" />
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#C8A96A]/15 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#0B3D2E]/60 blur-[140px]" />

        <div className="relative px-8 py-20 md:p-24 text-center">
          <div className="gold-divider mx-auto mb-8">An Invitation</div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F5F1E9] leading-[1.05] tracking-[-0.02em] max-w-4xl mx-auto">
            Elevate your everyday cup
            <br />
            <span className="italic gold-text">into a quiet ceremony.</span>
          </h2>
          <p className="mt-8 text-[#F5F1E9]/65 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Small batches. Single origin. Delivered in deep-charcoal tins, sealed for the long pour.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-gold">
              Order The Collection
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Corporate Gifting
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
