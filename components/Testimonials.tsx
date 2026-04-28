"use client";
import { motion } from "framer-motion";

const quotes = [
  {
    body: "The most refined Indian tea I have tasted outside of a private estate. The CTC is a revelation.",
    name: "Aanya Kapoor",
    role: "Tea Sommelier, Mumbai",
  },
  {
    body: "We serve Mt. Mann Chai exclusively in our suites. Guests notice. Many ask for the tin.",
    name: "Rohan Mehta",
    role: "GM, Aravali Retreat",
  },
  {
    body: "A quiet luxury. Honest leaves, honest packaging — nothing performative.",
    name: "Iris Lemaire",
    role: "Editor, Slow Living Quarterly",
  },
];

const press = ["Vogue India", "Condé Nast Traveller", "GQ", "Architectural Digest", "Slow Living"];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] to-[#082A20]/30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-8 mx-auto">In Confidence</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1E9] leading-[1.15] tracking-[-0.02em]">
            What our patrons whisper
            <br />
            <span className="italic gold-text">over a slow cup.</span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass rounded-3xl p-10 flex flex-col justify-between"
            >
              <div className="text-[#C8A96A] font-serif text-5xl leading-none mb-4">&ldquo;</div>
              <blockquote className="font-serif text-[#F5F1E9] text-lg leading-snug italic">
                {q.body}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[#C8A96A]/10">
                <div className="text-[#F5F1E9] text-sm">{q.name}</div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-[#C8A96A]/70">
                  {q.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Press marquee */}
        <div className="mt-24 relative">
          <div className="gold-line mb-10" />
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-16 whitespace-nowrap">
              {[...press, ...press, ...press].map((p, i) => (
                <span
                  key={i}
                  className="font-serif text-2xl md:text-3xl text-[#F5F1E9]/30 italic shrink-0"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="gold-line mt-10" />
        </div>
      </div>
    </section>
  );
}
