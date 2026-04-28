"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Awaken",
    body: "Warm the cup. Inhale the dry leaf — earth, malt, and a whisper of orchard.",
  },
  {
    n: "02",
    title: "Steep",
    body: "Let still water at 95°C draw the soul of the leaf for three slow minutes.",
  },
  {
    n: "03",
    title: "Pour",
    body: "Watch the liquor turn copper. Lift. Pause. The first sip should always cost a moment.",
  },
  {
    n: "04",
    title: "Linger",
    body: "Set the cup down between sips. Tea is not a drink to be hurried.",
  },
];

export default function SensoryExperience() {
  return (
    <section className="relative py-28 md:py-40 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#0F0F0F] via-[#0B3D2E]/20 to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="gold-divider mb-8">The Ritual</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E9] leading-[1.1] tracking-[-0.02em]">
            A ritual,
            <br />
            <span className="italic gold-text">not just tea.</span>
          </h2>
          <p className="mt-6 text-[#F5F1E9]/60 text-lg leading-relaxed font-light max-w-xl">
            Four small acts that turn a cup into a quiet ceremony.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 hover:border-[#C8A96A]/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="font-serif text-5xl text-[#C8A96A]/40 group-hover:text-[#C8A96A]/80 transition-colors">
                {s.n}
              </div>
              <div className="gold-line my-6 max-w-[40px]" />
              <h3 className="font-serif text-2xl text-[#F5F1E9]">{s.title}</h3>
              <p className="mt-3 text-[#F5F1E9]/55 text-sm leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
