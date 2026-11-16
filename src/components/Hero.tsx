"use client";

import { ArrowRight, Download, Terminal, Cloud, Github, Linkedin, Mail } from "lucide-react";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Hero Details (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:pr-4">
          {/* Hello Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-lavender border border-accent-purple/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-accent-purple uppercase">
              HELLO, I&apos;M PRADEEP
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-text-primary tracking-tight leading-[1.12]">
            Architecting Scalable Systems &amp;{" "}
            <span className="bg-gradient-to-r from-accent-purple via-[#6366F1] to-accent-sky-dark bg-clip-text text-transparent">
              High-Performance Web Apps.
            </span>
          </h1>

          {/* Body */}
          <p className="font-body text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
            Full Stack Developer specializing in high-performance modern web apps,
            scalable backend architectures, and immersive interactive 3D web
            experiences. Experienced in Next.js, TypeScript, .NET Web API, and
            PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="magnetic-btn group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-purple hover:bg-accent-purple-dark text-white font-headline text-sm font-semibold shadow-purple-glow hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-text-primary border border-border-subtle font-headline text-sm font-semibold shadow-subtle-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-accent-purple group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Metrics & Social Pill Row */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border-subtle/80 w-full mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pastel-lavender flex items-center justify-center text-accent-purple shadow-sm">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-base text-text-primary">
                  5.4k+ Commits
                </span>
                <span className="font-mono text-[11px] font-semibold text-text-secondary uppercase">
                  GitHub Activity
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-border-subtle hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center text-accent-sky-dark shadow-sm">
                <Cloud className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-base text-text-primary">
                  15+ Deployed
                </span>
                <span className="font-mono text-[11px] font-semibold text-text-secondary uppercase">
                  Production Systems
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-border-subtle hidden md:block" />

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Pradeep2532"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-lg bg-white border border-border-subtle hover:border-accent-purple flex items-center justify-center text-text-secondary hover:text-accent-purple shadow-sm transition-all hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/pradeep-maurya25"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-border-subtle hover:border-accent-purple flex items-center justify-center text-text-secondary hover:text-accent-purple shadow-sm transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:pradeepmaurya0525@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-lg bg-white border border-border-subtle hover:border-accent-purple flex items-center justify-center text-text-secondary hover:text-accent-purple shadow-sm transition-all hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Hero Details (5 Cols) - 3D Interactive Canvas */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          {/* Soft Pastel Backdrop Aura */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-pastel-lavender via-pastel-blue to-pastel-peach rounded-3xl blur-2xl opacity-75 -z-10 animate-blob-2" />

          {/* Interactive 3D Frame */}
          <div className="tilt-card shimmer-card relative w-full rounded-2xl bg-white/90 backdrop-blur-xl border border-border-subtle shadow-elevated-card p-3 overflow-hidden">
            <Hero3D />

            {/* Floating Glass Chip 1 (Top Left) */}
            <div className="bob-slow absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md border border-border-subtle px-3.5 py-2 rounded-xl shadow-glass-float flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-sky shadow-[0_0_8px_#38BDF8]" />
              <span className="font-mono text-xs font-semibold text-text-primary tracking-wide">
                Next.js 15 + TypeScript
              </span>
            </div>

            {/* Floating Glass Chip 2 (Bottom Right) */}
            <div className="bob-delayed absolute bottom-6 right-6 z-10 bg-white/95 backdrop-blur-md border border-border-subtle px-4 py-2 rounded-xl shadow-glass-float flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-purple animate-pulse shadow-[0_0_8px_#7C3AED]" />
              <div className="flex flex-col text-left">
                <span className="font-mono text-[11px] font-bold text-text-primary">
                  .NET Web API + PostgreSQL
                </span>
                <span className="font-mono text-[10px] text-accent-purple font-semibold">
                  MQTT &amp; WebSocket
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="w-full flex justify-center mt-12">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 group text-text-secondary hover:text-accent-purple transition-colors"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary font-semibold group-hover:text-accent-purple">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-border-subtle bg-white flex items-start justify-center p-1 shadow-sm group-hover:border-accent-purple transition-colors">
            <div className="w-1.5 h-2 rounded-full bg-accent-purple animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
