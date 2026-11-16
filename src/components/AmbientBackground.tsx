"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      alpha: number;
      color: string;
    }> = [];

    const count = 35;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.8,
        dx: (Math.random() - 0.5) * 0.45,
        dy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.4 + 0.15,
        color: Math.random() > 0.5 ? "124, 58, 237" : "56, 189, 248",
      });
    }

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-[640px] h-[640px] bg-[#EDE9FE]/60 rounded-full blur-[140px] animate-blob-1" />
      <div className="absolute top-[28%] -right-24 w-[560px] h-[560px] bg-[#E0F2FE]/70 rounded-full blur-[150px] animate-blob-2" />
      <div className="absolute top-[60%] -left-32 w-[650px] h-[650px] bg-[#FFE4D6]/45 rounded-full blur-[160px] animate-blob-3" />
      <div className="absolute bottom-10 right-10 w-[580px] h-[580px] bg-[#EDE9FE]/50 rounded-full blur-[140px] animate-blob-1" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
    </div>
  );
}
