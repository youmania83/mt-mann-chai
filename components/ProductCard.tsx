"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export type Product = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  notes?: string[];
  price?: string;
};

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-[#C8A96A]/10 bg-gradient-to-b from-[#0B3D2E]/30 to-[#0F0F0F] aspect-[4/5]">
        {/* Glow */}
        <div className="absolute inset-0 bg-[#C8A96A]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Image */}
        <div className="relative z-10 h-full w-full flex items-center justify-center p-10">
          <motion.img
            whileHover={{ scale: 1.06, rotate: -1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            src={product.image}
            alt={product.name}
            className="w-3/4 max-w-[280px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] rounded-2xl"
          />
        </div>

        {/* Top label */}
        <div className="absolute top-6 left-6 z-20 eyebrow text-[10px]">
          {product.tagline}
        </div>

        {/* Hover sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,106,0.15),transparent_60%)]" />
      </div>

      {/* Caption */}
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl text-[#F5F1E9] tracking-tight">
            {product.name}
          </h3>
          <p className="mt-2 text-[#F5F1E9]/55 text-sm leading-relaxed max-w-md">
            {product.description}
          </p>
          {product.notes && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <span
                  key={n}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96A]/80 border border-[#C8A96A]/20 px-3 py-1 rounded-full"
                >
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/products"
          className="shrink-0 mt-1 w-12 h-12 rounded-full border border-[#C8A96A]/30 flex items-center justify-center text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0F0F0F] transition-all duration-500"
          aria-label={`View ${product.name}`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
