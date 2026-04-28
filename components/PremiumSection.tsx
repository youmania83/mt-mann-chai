"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PremiumSection({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
  id,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative py-28 md:py-36 px-6 lg:px-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <div
            className={`max-w-3xl mb-16 md:mb-24 ${
              align === "center" ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="gold-divider mb-8"
              >
                {eyebrow}
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="font-serif text-[#F5F1E9] text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em]"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-[#F5F1E9]/55 text-base md:text-lg leading-relaxed font-light"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
