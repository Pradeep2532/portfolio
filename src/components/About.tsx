"use client";

import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Zap, Database, Terminal, Clock, Activity } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  isDecimal?: boolean;
}

function AnimatedCounter({ target, suffix = "+", isDecimal = false }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          const duration = 1600;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;

            setVal(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setVal(target);
            }
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isDecimal, hasStarted]);

  return (
    <span ref={ref} className="flex items-baseline">
      <span>{isDecimal ? val.toFixed(1) : val}</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Indicator */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-purple uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-lavender/70 border border-accent-purple/20 transition-all duration-300">
          // 01 ABOUT ME
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-3xl mb-12">
        Engineering software with craftsmanship, scale, and intent.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Bio & Principles */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="font-body text-base lg:text-lg text-text-primary leading-relaxed">
            I am a Full Stack Developer with hands-on experience architecting role-based enterprise web applications using <strong className="text-accent-purple font-semibold">Next.js (App Router)</strong>, <strong className="text-accent-purple font-semibold">TypeScript</strong>, <strong className="text-accent-purple font-semibold">.NET Web API</strong>, and <strong className="text-accent-purple font-semibold">PostgreSQL</strong>.
          </p>

          <p className="font-body text-base text-text-secondary leading-relaxed">
            During my time at Atri Systems, I engineered 8–10 production pages of an HRMS application serving 70+ employees, integrated Microsoft SSO and JWT authentication, and developed both frontend and backend for an IoT device monitoring platform streaming live telemetry over MQTT (Mosquitto) and WebSocket. I believe in writing modular, type-safe code guided by SOLID principles.
          </p>

          {/* Core Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="tilt-card shimmer-card p-5 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex items-start gap-3 hover:border-accent-purple/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-pastel-lavender flex items-center justify-center text-accent-purple flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-text-primary text-sm">
                  Zero Compromise Core
                </h4>
                <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">
                  Strict TypeScript schemas with Zod, SOLID principles, public UUIDs, and automated API tests.
                </p>
              </div>
            </div>

            <div className="tilt-card shimmer-card p-5 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex items-start gap-3 hover:border-accent-sky/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-pastel-blue flex items-center justify-center text-accent-sky-dark flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-text-primary text-sm">
                  Real-Time Concurrency
                </h4>
                <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">
                  MQTT Mosquitto message brokers, WebSocket streams, and optimized PostgreSQL queries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 4 Bento Stat Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {/* Bento 1 */}
          <div className="tilt-card shimmer-card p-6 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between h-44 hover:shadow-elevated-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-pastel-lavender flex items-center justify-center text-accent-purple">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="font-headline text-3xl font-extrabold text-accent-purple">
                <AnimatedCounter target={10} suffix="+" />
              </span>
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">
                HRMS Pages Built
              </p>
            </div>
          </div>

          {/* Bento 2 */}
          <div className="tilt-card shimmer-card p-6 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between h-44 hover:shadow-elevated-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center text-accent-sky-dark">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-headline text-3xl font-extrabold text-accent-sky-dark">
                <AnimatedCounter target={70} suffix="+" />
              </span>
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">
                Active HRMS Users
              </p>
            </div>
          </div>

          {/* Bento 3 */}
          <div className="tilt-card shimmer-card p-6 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between h-44 hover:shadow-elevated-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-pastel-peach flex items-center justify-center text-[#EA580C]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-headline text-3xl font-extrabold text-text-primary">
                <AnimatedCounter target={4} suffix="+" />
              </span>
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">
                Years CS Education
              </p>
            </div>
          </div>

          {/* Bento 4 */}
          <div className="tilt-card shimmer-card p-6 rounded-2xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between h-44 hover:shadow-elevated-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-pastel-mint flex items-center justify-center text-emerald-600">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="font-headline text-3xl font-extrabold text-emerald-600">
                <AnimatedCounter target={99.9} suffix="%" isDecimal={true} />
              </span>
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">
                Reliability &amp; Focus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
