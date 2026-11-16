"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileText,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-time Hire");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "pradeepmaurya0525@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 mb-12">
      {/* Section Indicator */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-purple uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-lavender/70 border border-accent-purple/20 transition-all duration-300">
          // 06 GET IN TOUCH
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      {/* Main Container */}
      <div className="tilt-card shimmer-card p-6 sm:p-8 lg:p-12 rounded-3xl bg-white border border-border-subtle shadow-elevated-card relative overflow-hidden">
        {/* Soft decorative background glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-pastel-lavender/60 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
                Have an Opportunity or Project in Mind?
              </h2>
              <p className="font-body text-base text-text-secondary leading-relaxed">
                Whether you are looking for a dedicated Full Stack Engineer for your team, have an architectural challenge, or want to build something impactful, I am ready to collaborate.
              </p>
            </div>

            {/* Email Transmission Box */}
            <div className="p-5 rounded-2xl bg-page-bg border border-border-subtle flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-accent-purple uppercase tracking-wider">
                Direct Transmission Protocol
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm font-semibold text-text-primary select-all break-all">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="magnetic-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border-subtle hover:border-accent-purple text-accent-purple text-xs font-semibold shadow-sm transition-all flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-page-bg border border-border-subtle flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pastel-lavender flex items-center justify-center text-accent-purple">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase font-bold text-text-secondary">
                    Phone / Call
                  </span>
                  <a
                    href="tel:+919173058600"
                    className="font-mono text-xs font-semibold text-text-primary hover:text-accent-purple"
                  >
                    +91 9173058600
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-page-bg border border-border-subtle flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pastel-blue flex items-center justify-center text-accent-sky-dark">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase font-bold text-text-secondary">
                    Location
                  </span>
                  <span className="font-body text-xs font-semibold text-text-primary">
                    Ahmedabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Connect across networks */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">
                Connect Across Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Pradeep2532"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="magnetic-btn w-12 h-12 rounded-xl bg-page-bg border border-border-subtle flex items-center justify-center text-text-primary hover:text-accent-purple hover:border-accent-purple hover:bg-white transition-all shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/pradeep-maurya25"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="magnetic-btn w-12 h-12 rounded-xl bg-page-bg border border-border-subtle flex items-center justify-center text-text-primary hover:text-accent-purple hover:border-accent-purple hover:bg-white transition-all shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  aria-label="Direct Email"
                  className="magnetic-btn w-12 h-12 rounded-xl bg-page-bg border border-border-subtle flex items-center justify-center text-text-primary hover:text-accent-purple hover:border-accent-purple hover:bg-white transition-all shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium">
                Available for Full-time Roles &amp; High-Impact Work
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Category Selector */}
              <div className="flex flex-col gap-2.5">
                <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Transmission Category
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {["Full-time Hire", "New Project", "Consulting / Audit"].map(
                    (cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedType(cat)}
                        className={`px-4 py-2 rounded-xl font-headline text-xs font-semibold shadow-sm transition-all ${
                          selectedType === cat
                            ? "bg-accent-purple text-white shadow-purple-glow"
                            : "bg-page-bg border border-border-subtle text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider"
                  >
                    Identification (Your Name)
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-page-bg border border-border-subtle text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider"
                  >
                    Return Dispatch (Email)
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-page-bg border border-border-subtle text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-sm transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider"
                >
                  Payload Specs &amp; Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your role opportunity, timeline, tech stack or project requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border border-border-subtle text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn group w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-accent-purple hover:bg-accent-purple-dark text-white font-headline text-sm font-bold shadow-purple-glow hover:shadow-lg transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 font-headline text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Transmission acknowledged! Packet dispatched successfully. I will get back to you shortly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
