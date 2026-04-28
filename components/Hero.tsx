"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Steam from "./Steam";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden grain bg-[#0F0F0F]"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#082A20] via-[#0F0F0F] to-[#0F0F0F]" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#0B3D2E]/40 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#C8A96A]/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-[#0B3D2E]/30 blur-[160px]" />
      </div>

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0F0F0F_90%)]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="gold-divider mb-10"
        >
          Premium Indian Tea · Est. 2024
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-serif text-center text-[#F5F1E9] text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-[-0.02em] max-w-5xl"
        >
          Crafted for the
          <br />
          <span className="italic gold-text">Finest Moments</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl text-center text-[#F5F1E9]/65 text-base md:text-lg leading-relaxed font-light"
        >
          A heritage of high-altitude leaves, slow-blended into rituals worth pausing for.
          Bold strength meets the quiet luxury of a single, perfect cup.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/products" className="btn-gold">
            Explore Collection
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
          <Link href="/about" className="btn-ghost">
            Our Heritage
          </Link>
        </motion.div>

        {/* Floating product card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-[#C8A96A]/20 blur-[80px]" />
          <div className="relative float">
            {/* Steam rising from the cup */}
            <Steam
              className="absolute left-1/2 -translate-x-1/2 -top-72 md:-top-80 z-0 mix-blend-screen opacity-80"
              width={220}
              height={320}
              intensity={1}
            />
            <img
              src="/images/red-pack.jpg"
              alt="Mt. Mann Chai Premium CTC"
              className="relative z-10 w-56 md:w-64 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] border border-[#C8A96A]/20"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[#C8A96A]/60"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C8A96A]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
