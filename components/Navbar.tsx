"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collection" },
  { href: "/about", label: "Heritage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-[#C8A96A]/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[#C8A96A]/40 flex items-center justify-center group-hover:border-[#C8A96A] transition-colors">
            <span className="font-serif text-[#C8A96A] text-sm">M</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-[15px] tracking-[0.25em] text-[#F5F1E9] uppercase">
              Mt. Mann
            </div>
            <div className="font-serif text-[10px] tracking-[0.5em] text-[#C8A96A]/80 uppercase mt-1">
              Chai
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-[0.25em] uppercase text-[#F5F1E9]/75 hover:text-[#C8A96A] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C8A96A] group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/products" className="btn-gold !py-3 !px-6 !text-[11px]">
            Shop
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#F5F1E9] transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F1E9] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F1E9] transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-[#C8A96A]/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] tracking-[0.25em] uppercase text-[#F5F1E9]/80 hover:text-[#C8A96A] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/products" className="btn-gold mt-2 w-full" onClick={() => setOpen(false)}>
                Shop Collection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
