import { ArrowUp, ExternalLink, Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border-subtle relative mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Left Brand & Vision */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pastel-lavender border border-accent-purple/20 flex items-center justify-center">
                <span className="font-headline font-bold text-accent-purple text-sm">
                  PM<span className="text-accent-sky">.</span>
                </span>
              </div>
              <span className="font-headline text-base font-bold text-text-primary">
                Pradeep Maurya
              </span>
            </div>

            <p className="font-body text-sm text-text-secondary max-w-md leading-relaxed">
              Engineering pristine digital experiences and scalable full-stack web architectures. Blending disciplined frontend systems with distributed cloud backends.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981]" />
              <span className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
                UTC+05:30 (India) • Remote / Hybrid Ready
              </span>
            </div>
          </div>

          {/* Center Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-purple">
              Navigation
            </span>
            <div className="flex flex-col gap-2 font-headline text-sm font-medium">
              <a href="#hero" className="text-text-secondary hover:text-accent-purple transition-colors">
                Home Core
              </a>
              <a href="#about" className="text-text-secondary hover:text-accent-purple transition-colors">
                About Narrative
              </a>
              <a href="#skills" className="text-text-secondary hover:text-accent-purple transition-colors">
                Technical Stack
              </a>
              <a href="#projects" className="text-text-secondary hover:text-accent-purple transition-colors">
                Featured Projects
              </a>
              <a href="#experience" className="text-text-secondary hover:text-accent-purple transition-colors">
                Career Chronology
              </a>
              <a href="#contact" className="text-text-secondary hover:text-accent-purple transition-colors">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-purple">
              Network Nodes
            </span>
            <div className="flex flex-col gap-2 font-headline text-sm font-medium">
              <a
                href="https://github.com/Pradeep2532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-text-secondary hover:text-accent-purple transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/pradeep-maurya25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-text-secondary hover:text-accent-purple transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Network</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="mailto:pradeepmaurya0525@gmail.com"
                className="flex items-center justify-between text-text-secondary hover:text-accent-purple transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Direct Transmission</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-secondary">
            © {new Date().getFullYear()} Pradeep Maurya. Crafted with craftsmanship, scale, and intent.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs font-bold text-accent-purple">
              LATENCY: 12ms
            </span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-text-secondary hover:text-accent-purple transition-colors"
            >
              <span>Ascend</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
