"use client";
import { motion } from "framer-motion";
import Steam from "./Steam";

export default function TeaCup({
  side = "left",
  className = "",
  delay = 0,
}: {
  side?: "left" | "right";
  className?: string;
  delay?: number;
}) {
  const flip = side === "right";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={`relative ${className}`}
    >
      {/* Steam */}
      <Steam
        className="absolute left-1/2 -translate-x-1/2 -top-56 mix-blend-screen opacity-70"
        width={170}
        height={240}
        intensity={0.7}
      />

      {/* Cup SVG (side view, with handle + saucer) */}
      <div className="float" style={{ animationDelay: `${delay}s` }}>
        <svg
          viewBox="0 0 200 170"
          className="w-40 md:w-52 drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
          style={{ transform: flip ? "scaleX(-1)" : undefined }}
          aria-hidden
        >
          <defs>
            {/* Cup body — porcelain with subtle gold */}
            <linearGradient id={`cup-body-${side}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5F1E9" />
              <stop offset="55%" stopColor="#E8DDC4" />
              <stop offset="100%" stopColor="#A88848" />
            </linearGradient>
            {/* Tea liquid — deep amber */}
            <radialGradient id={`tea-${side}`} cx="0.5" cy="0.4" r="0.7">
              <stop offset="0%" stopColor="#7A4A1F" />
              <stop offset="60%" stopColor="#4A2A10" />
              <stop offset="100%" stopColor="#2A1808" />
            </radialGradient>
            {/* Saucer */}
            <linearGradient id={`saucer-${side}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8DDC4" />
              <stop offset="100%" stopColor="#8A6B38" />
            </linearGradient>
            {/* Inner shadow on tea */}
            <radialGradient id={`tea-shine-${side}`} cx="0.35" cy="0.3" r="0.4">
              <stop offset="0%" stopColor="rgba(255,220,170,0.25)" />
              <stop offset="100%" stopColor="rgba(255,220,170,0)" />
            </radialGradient>
          </defs>

          {/* Saucer */}
          <ellipse cx="100" cy="148" rx="78" ry="12" fill={`url(#saucer-${side})`} opacity="0.95" />
          <ellipse cx="100" cy="146" rx="62" ry="6" fill="#3A2A1A" opacity="0.5" />

          {/* Handle */}
          <path
            d="M 148 78 C 178 78, 178 118, 148 118"
            stroke={`url(#cup-body-${side})`}
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 148 82 C 172 82, 172 114, 148 114"
            stroke="#0F0F0F"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
          />

          {/* Cup body */}
          <path
            d="M 42 70
               C 42 70, 50 138, 100 140
               C 150 138, 158 70, 158 70 Z"
            fill={`url(#cup-body-${side})`}
            stroke="#A88848"
            strokeWidth="0.8"
          />

          {/* Cup rim shadow */}
          <ellipse cx="100" cy="70" rx="58" ry="9" fill="#3A2A1A" opacity="0.35" />

          {/* Tea liquid */}
          <ellipse cx="100" cy="70" rx="56" ry="8" fill={`url(#tea-${side})`} />
          <ellipse cx="100" cy="69" rx="56" ry="8" fill={`url(#tea-shine-${side})`} />

          {/* Gold rim */}
          <ellipse
            cx="100"
            cy="70"
            rx="58"
            ry="9"
            fill="none"
            stroke="#C8A96A"
            strokeWidth="1.2"
            opacity="0.85"
          />
        </svg>
      </div>
    </motion.div>
  );
}
