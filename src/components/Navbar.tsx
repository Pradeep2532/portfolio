"use client";

import { useState } from "react";
import { Download, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border-subtle transition-all duration-300">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-3 group magnetic-btn"
        >
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
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 border border-border-subtle shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full font-headline text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-pastel-lavender/50 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-emerald-800 uppercase">
              Available for Roles
            </span>
          </div>

          <a
            href="#contact"
            className="magnetic-btn hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-purple hover:bg-accent-purple-dark text-white font-headline text-sm font-semibold shadow-purple-glow hover:shadow-lg transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-10 h-10 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-text-primary hover:text-accent-purple shadow-sm transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border-subtle px-6 py-6 transition-all duration-200 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-text-primary font-headline text-base font-semibold hover:bg-pastel-lavender/50 hover:text-accent-purple transition-all"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-accent-purple" />
              </a>
            ))}
            <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-border-subtle w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-800">
                  Available for Hire (Immediate)
                </span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent-purple text-white font-headline text-sm font-semibold shadow-purple-glow"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
