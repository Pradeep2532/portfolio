"use client";

import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "ems",
      title: "Employee Management System (EMS)",
      category: "Enterprise SaaS Application",
      year: "2025",
      badge: "ENTERPRISE_CRUD_ACTIVE",
      badgeColor: "text-accent-purple",
      badgeBorder: "border-accent-purple/20",
      description:
        "Full-stack web application designed to manage company employee records with complete CRUD capabilities. Features a responsive component-based UI, dynamic routing, and RESTful API endpoints coupled to MongoDB schemas.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      image: "/images/ems.png",
      demoUrl: "https://github.com/Pradeep2532",
      githubUrl: "https://github.com/Pradeep2532",
      reverse: false,
    },
    {
      id: "wonderlust",
      title: "Wonderlust — Travel & Stay Platform",
      category: "Full-Stack Accommodation Platform",
      year: "2024",
      badge: "RENTAL_ECOSYSTEM_V2.0",
      badgeColor: "text-accent-sky-dark",
      badgeBorder: "border-accent-sky-dark/20",
      description:
        "Airbnb-inspired web application featuring server-side rendering, property exploration, multi-criteria filtering, user authentication, review systems, and complete CRUD workflows for listings and reviews stored in MongoDB.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "RESTful API"],
      image: "/images/wonderlust.png",
      demoUrl: "https://github.com/Pradeep2532",
      githubUrl: "https://github.com/Pradeep2532",
      reverse: true,
    },
    {
      id: "hrms",
      title: "HRMS Enterprise Portal (Atri Systems)",
      category: "Production Corporate Application",
      year: "2026",
      badge: "PRODUCTION_DEPLOYED // 70+ USERS",
      badgeColor: "text-accent-purple",
      badgeBorder: "border-accent-purple/20",
      description:
        "High-velocity HRMS portal built with Next.js App Router and Tailwind CSS for 70+ staff. Engineered 8–10 production modules: dashboard, attendance tracking, leave requests & policy, payroll, payslip downloads, and employee profiles with Microsoft SSO and JWT authentication.",
      technologies: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        ".NET Web API",
        "Microsoft SSO",
        "JWT Auth",
        "Zod",
        "Axios",
      ],
      image: "/images/hrms.png",
      demoUrl: "https://github.com/Pradeep2532",
      githubUrl: "https://github.com/Pradeep2532",
      reverse: false,
    },
    {
      id: "iot",
      title: "IoT Device Control & Monitoring Platform",
      category: "Real-Time Telemetry & Streaming",
      year: "2026",
      badge: "MQTT_STREAMING // LIVE_WEBSOCKET",
      badgeColor: "text-emerald-600",
      badgeBorder: "border-emerald-500/20",
      description:
        "Real-time IoT device control and telemetrics engine. Subscribes to live device sensor updates via MQTT (Mosquitto) broker, persisting records in PostgreSQL, and streaming live status updates to interactive React dashboards using WebSocket.",
      technologies: [
        ".NET Web API (C#)",
        "React.js",
        "PostgreSQL",
        "MQTT (Mosquitto)",
        "WebSocket",
        "Docker",
        "Public UUIDs",
      ],
      image: "/images/stitch-preview.png",
      demoUrl: "https://github.com/Pradeep2532",
      githubUrl: "https://github.com/Pradeep2532",
      reverse: true,
    },
  ];

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Indicator */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-purple uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-lavender/70 border border-accent-purple/20 transition-all duration-300">
          // 03 FEATURED WORK
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-2xl">
          Selected Production Applications
        </h2>
        <span className="font-body text-sm text-text-secondary">
          Engineered for real-world reliability &amp; fluid user experience
        </span>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="tilt-card shimmer-card relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-border-subtle shadow-subtle-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group hover:shadow-xl hover:border-accent-purple/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Visual Media Column */}
            <div
              className={`lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle bg-slate-50 relative aspect-[16/10] shadow-sm z-10 ${
                proj.reverse ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className={`px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border ${proj.badgeBorder} font-mono text-xs font-bold ${proj.badgeColor} shadow-sm`}>
                  {proj.badge}
                </span>
              </div>
            </div>

            {/* Info Details Column */}
            <div
              className={`lg:col-span-5 flex flex-col gap-5 z-10 ${
                proj.reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs font-bold ${proj.badgeColor} uppercase tracking-wider`}>
                  {proj.category}
                </span>
                <span className="text-border-subtle">•</span>
                <span className="font-mono text-xs font-semibold text-text-secondary">
                  {proj.year}
                </span>
              </div>

              <h3 className="font-headline text-2xl lg:text-3xl font-extrabold text-text-primary tracking-tight group-hover:text-accent-purple transition-colors">
                {proj.title}
              </h3>

              <p className="font-body text-sm lg:text-base text-text-secondary leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-page-bg border border-border-subtle text-text-primary font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3">
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-purple hover:bg-accent-purple-dark text-white font-headline text-sm font-semibold shadow-purple-glow hover:shadow-md transition-all"
                >
                  <span>Explore Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-page-bg hover:bg-white text-text-primary border border-border-subtle font-headline text-sm font-semibold transition-all shadow-sm"
                >
                  <Code2 className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
