"use client";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="relative py-28 md:py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#082A20]/40 to-[#0F0F0F]" />
      <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full bg-[#0B3D2E]/40 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C8A96A]/15">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#082A20] to-[#0F0F0F]" />
            <img
              src="/images/gold-pack.jpg"
              alt="Heritage tea"
              className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="gold-line mb-4" />
              <p className="font-serif italic text-[#F5F1E9] text-xl leading-snug">
                &ldquo;A leaf, picked at dawn, becomes the quiet ceremony of an evening.&rdquo;
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass-soft rounded-2xl px-6 py-4 hidden md:block">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96A]">Since</div>
            <div className="font-serif text-[#F5F1E9] text-2xl mt-1">2024</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 lg:pl-10"
        >
          <div className="gold-divider mb-8">Our Heritage</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E9] leading-[1.1] tracking-[-0.02em]">
            Born of the <span className="italic gold-text">mountains</span>,
            shaped by patience.
          </h2>
          <p className="mt-8 text-[#F5F1E9]/65 text-lg leading-relaxed font-light max-w-xl">
            From the misted slopes of the Eastern Himalayas, our leaves are hand-selected
            at sunrise — when the air is cool and the flavour at its most intricate. Each
            blend is then composed by master tasters who treat tea as an artform, not a commodity.
          </p>
          <p className="mt-6 text-[#F5F1E9]/65 text-lg leading-relaxed font-light max-w-xl">
            Mt. Mann Chai is our quiet rebellion against the ordinary cup —
            an invitation to slow down, to taste deeply, to honour the ritual.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { num: "1,200m", label: "Avg. Altitude" },
              { num: "100%", label: "Single Origin" },
              { num: "48hr", label: "From Leaf to Pack" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl text-[#C8A96A]">{s.num}</div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-[#F5F1E9]/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
