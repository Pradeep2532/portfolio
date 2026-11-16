"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  vz: number;
  z: number;
  baseRadius: number;
  color: { r: number; g: number; b: number };
  life: number;
  maxLife: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
}

export default function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const particles: Particle[] = [];
    const colors = [
      { r: 124, g: 58, b: 237 }, // Primary Purple #7C3AED
      { r: 56, g: 189, b: 248 }, // Sky Blue #38BDF8
      { r: 196, g: 181, b: 253 }, // Soft Lavender #C4B5FD
      { r: 254, g: 215, b: 170 }, // Soft Peach #FED7AA
      { r: 168, g: 85, b: 247 }, // Violet
    ];

    let lastX: number | null = null;
    let lastY: number | null = null;

    const createParticle = (
      x: number,
      y: number,
      speedMult = 1,
      isBurst = false
    ) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed =
        (isBurst
          ? Math.random() * 4.5 + 1.5
          : Math.random() * 1.8 + 0.4) * speedMult;

      const zDepth = Math.random() * 1.2 + 0.4;
      const maxLife = isBurst
        ? Math.floor(Math.random() * 35 + 40)
        : Math.floor(Math.random() * 45 + 35);

      particles.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isBurst ? Math.random() * 1.2 : 0.4),
        vz: (Math.random() - 0.5) * 0.04,
        z: zDepth,
        baseRadius: Math.random() * 3.2 + 1.6,
        color: color,
        life: 0,
        maxLife: maxLife,
        alpha: Math.random() * 0.45 + 0.55,
        twinkleSpeed: Math.random() * 0.15 + 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    };

    const emitTrail = (x: number, y: number, distance: number) => {
      const count = Math.min(Math.floor(distance / 7) + 1, 6);
      for (let i = 0; i < count; i++) {
        createParticle(x, y, 0.9);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (lastX !== null && lastY !== null) {
        const dx = currentX - lastX;
        const dy = currentY - lastY;
        const dist = Math.hypot(dx, dy);
        if (dist > 3) {
          emitTrail(currentX, currentY, dist);
        }
      } else {
        emitTrail(currentX, currentY, 10);
      }

      lastX = currentX;
      lastY = currentY;
    };

    const handlePointerDown = (e: PointerEvent) => {
      for (let i = 0; i < 22; i++) {
        createParticle(e.clientX, e.clientY, 1.25, true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        emitTrail(touch.clientX, touch.clientY, 12);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    let animationId: number;

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        p.z += p.vz;
        if (p.z < 0.2) p.z = 0.2;

        p.vx *= 0.94;
        p.vy *= 0.94;
        p.vy -= 0.025; // upward drift

        const progress = p.life / p.maxLife;
        let currentOpacity = p.alpha;
        if (progress < 0.15) {
          currentOpacity = (progress / 0.15) * p.alpha;
        } else {
          currentOpacity = (1 - (progress - 0.15) / 0.85) * p.alpha;
        }

        const perspectiveRadius = Math.max(
          0.4,
          p.baseRadius * p.z * (1 - progress * 0.45)
        );
        const twinkle =
          Math.sin(p.life * p.twinkleSpeed + p.phase) * 0.2 + 0.8;
        const finalAlpha = Math.max(0, Math.min(1, currentOpacity * twinkle));

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, perspectiveRadius, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(
          p.x - perspectiveRadius * 0.3,
          p.y - perspectiveRadius * 0.3,
          0,
          p.x,
          p.y,
          perspectiveRadius * 2.2
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${finalAlpha * 0.9})`);
        grad.addColorStop(
          0.35,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${finalAlpha})`
        );
        grad.addColorStop(
          0.75,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${
            finalAlpha * 0.35
          })`
        );
        grad.addColorStop(
          1,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`
        );

        ctx.fillStyle = grad;
        ctx.shadowBlur = perspectiveRadius * 4;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${
          finalAlpha * 0.8
        })`;
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(renderLoop);
    };

    animationId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="cursor-particle-trail" ref={canvasRef} />;
}
