import Link from "next/link";
import { ArrowLeft, Home, Sparkles, Terminal, Compass } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import ParticleCursor from "@/components/ParticleCursor";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex flex-col justify-between relative overflow-hidden selection:bg-pastel-lavender selection:text-accent-purple">
      {/* Background Ambience */}
      <AmbientBackground />
      <ParticleCursor />

      {/* Top Bar Monogram */}
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-pastel-lavender border border-accent-purple/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent-purple shadow-sm">
            <span className="font-headline font-bold text-accent-purple text-base tracking-tight">
              PM<span className="text-accent-sky text-lg leading-none">.</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-text-primary font-bold text-base tracking-tight group-hover:text-accent-purple transition-colors">
              Pradeep Maurya
            </span>
            <span className="font-mono text-[10px] tracking-widest text-accent-purple font-semibold uppercase">
              Full Stack Developer
            </span>
          </div>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-subtle shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-text-secondary uppercase">
            Route Unreachable
          </span>
        </div>
      </header>

      {/* Main 404 Centerpiece */}
      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-lavender border border-accent-purple/30 shadow-sm mb-6">
          <Terminal className="w-3.5 h-3.5 text-accent-purple" />
          <span className="font-mono text-xs font-bold tracking-wider text-accent-purple uppercase">
            STATUS 404 // ROUTE_NOT_FOUND
          </span>
        </div>

        {/* 404 Big Display Number */}
        <div className="relative mb-6 select-none">
          <span className="font-headline text-8xl sm:text-9xl lg:text-[160px] font-black tracking-tighter bg-gradient-to-b from-text-primary via-[#4338CA] to-accent-purple bg-clip-text text-transparent leading-none">
            404
          </span>
          <div className="bob-slow absolute -top-4 -right-6 sm:-right-10 bg-white/95 backdrop-blur-md border border-border-subtle px-3.5 py-1.5 rounded-xl shadow-glass-float flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-sky-dark" />
            <span className="font-mono text-xs font-semibold text-text-primary">
              Null Pointer
            </span>
          </div>
        </div>

        {/* Headline & Narrative */}
        <h1 className="font-headline text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-4 max-w-xl">
          Coordinates Out of Scope
        </h1>
        <p className="font-body text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed mb-8">
          The requested endpoint does not exist in this architecture or has been decommissioned. Let&apos;s redirect you back to active telemetry.
        </p>

        {/* Diagnostics Terminal Card */}
        <div className="tilt-card w-full max-w-md p-5 rounded-2xl bg-white border border-border-subtle shadow-subtle-card text-left mb-8 font-mono text-xs text-text-secondary space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle text-[11px] font-bold text-text-primary">
            <span>PACKET DIAGNOSTICS</span>
            <span className="text-accent-purple">HTTP // 404</span>
          </div>
          <div className="flex justify-between">
            <span>STATUS:</span>
            <span className="text-rose-500 font-semibold">ROUTE_NOT_FOUND</span>
          </div>
          <div className="flex justify-between">
            <span>ORIGIN:</span>
            <span className="text-text-primary font-medium">pradeepmaurya.dev</span>
          </div>
          <div className="flex justify-between">
            <span>SUGGESTION:</span>
            <span className="text-accent-sky-dark font-medium">Return to portfolio home</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-purple hover:bg-accent-purple-dark text-white font-headline text-sm font-semibold shadow-purple-glow hover:shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/#projects"
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary border border-border-subtle font-headline text-sm font-semibold shadow-subtle-card transition-all"
          >
            <Compass className="w-4 h-4 text-accent-purple" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </main>

      {/* Bottom Minimal Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-text-secondary relative z-10 border-t border-border-subtle/50">
        <span>© {new Date().getFullYear()} Pradeep Maurya</span>
        <span className="text-accent-purple font-semibold">SYSTEMS NORMAL // 200 OK</span>
      </footer>
    </div>
  );
}
