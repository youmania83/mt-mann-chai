"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  drift: number;
};

export default function Steam({
  className = "",
  width = 220,
  height = 320,
  intensity = 1,
}: {
  className?: string;
  width?: number;
  height?: number;
  intensity?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];

    const spawn = () => {
      const cx = width / 2;
      particles.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: height - 10,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -(0.4 + Math.random() * 0.4),
        life: 0,
        maxLife: 140 + Math.random() * 80,
        size: 14 + Math.random() * 18,
        drift: Math.random() * Math.PI * 2,
      });
    };

    let lastSpawn = 0;
    const targetCount = Math.round(28 * intensity);
    const spawnInterval = 90 / intensity;

    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      if (t - lastSpawn > spawnInterval && particles.length < targetCount) {
        spawn();
        lastSpawn = t;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.drift += 0.02;
        p.x += p.vx + Math.sin(p.drift) * 0.4;
        p.y += p.vy;
        p.vy *= 0.995;
        p.size += 0.18;

        const lifeT = p.life / p.maxLife;
        // ease in then out
        const fade =
          lifeT < 0.2
            ? lifeT / 0.2
            : 1 - (lifeT - 0.2) / 0.8;
        const alpha = Math.max(0, fade) * 0.55;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(245, 241, 233, ${alpha})`);
        grad.addColorStop(0.5, `rgba(245, 241, 233, ${alpha * 0.35})`);
        grad.addColorStop(1, "rgba(245, 241, 233, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -20) particles.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) cancelAnimationFrame(rafRef.current);

    return () => cancelAnimationFrame(rafRef.current);
  }, [width, height, intensity]);

  return (
    <canvas
      ref={ref}
      style={{ width, height }}
      className={`pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
