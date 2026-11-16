import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "Jul 2026 — Oct 2026",
      periodColor: "bg-pastel-lavender text-accent-purple",
      title: "Software Engineer",
      company: "Atri Systems Pvt. Ltd.",
      location: "Gandhinagar, India (On-site)",
      bullets: [
        "Developed 8–10 production pages of an HRMS web application used by ~70 employees using Next.js (App Router), TypeScript, and Tailwind CSS (dashboard, attendance, leave, leave policy, payroll, payslip download, on-duty, and profile).",
        "Implemented role-based access (RBAC): HR controls employee lifecycle and organization-wide attendance, while staff access personal metrics and download payslips.",
        "Integrated Microsoft SSO and JWT authentication (access and refresh tokens) with a .NET Web API via Axios; built custom 404/500 error pages and handled API notifications.",
        "Enforced rigorous schema validation with Zod, applied SOLID design principles, and tested endpoints using Postman & Swagger.",
        "Took full end-to-end ownership of software features and onboarded new interns.",
      ],
      skills: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", ".NET Web API", "Microsoft SSO", "JWT", "Zod", "Axios"],
      activePing: true,
      dotColor: "border-accent-purple",
    },
    {
      period: "Jan 2026 — Jun 2026",
      periodColor: "bg-pastel-blue text-accent-sky-dark",
      title: "Software Intern",
      company: "Atri Systems Pvt. Ltd.",
      location: "Gandhinagar, India (On-site)",
      bullets: [
        "Implemented web frontend and .NET Web API (C#) backend with PostgreSQL for an IoT device control and monitoring platform.",
        "Engineered MQTT (Mosquitto) broker subscription pipeline and streamed real-time device telemetry live to dashboards using WebSocket.",
        "Applied .NET Web API, FastAPI, React.js and PostgreSQL on production workflows including query optimization, normalization, pagination and DB functions.",
        "Secured APIs exposing public UUIDs instead of internal database IDs, with JWT, role-based access, and CORS.",
        "Collaborated with cross-functional backend, frontend, QA and DevOps teams with Git/GitHub, Docker, code reviews, and PR rebase workflows.",
      ],
      skills: [".NET Web API", "PostgreSQL", "React.js", "FastAPI", "MQTT (Mosquitto)", "WebSocket", "Docker", "Git"],
      activePing: false,
      dotColor: "border-accent-sky-dark",
    },
    {
      period: "Jul 2025",
      periodColor: "bg-page-bg text-text-secondary border border-border-subtle",
      title: "MERN Stack Intern",
      company: "CreArt Solutions Pvt. Ltd.",
      location: "Ahmedabad, India",
      bullets: [
        "Completed a 15-day intensive internship on MERN stack development under direct mentorship of a Senior Project Manager.",
        "Engineered full-stack features with MongoDB, Express.js, React, and Node.js.",
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      activePing: false,
      dotColor: "border-slate-300",
    },
  ];

  const education = [
    {
      period: "08/2022 — 06/2026",
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "Government Engineering College, Modasa",
      score: "CGPA 7.27",
      location: "Modasa, India",
    },
    {
      period: "06/2020 — 08/2021",
      degree: "Higher Secondary (12th)",
      institution: "Rashtrabharti School",
      score: "74.92%",
      location: "Ahmedabad, India",
    },
    {
      period: "06/2019 — 05/2020",
      degree: "Secondary School (10th)",
      institution: "Adarsh Vidyalaya",
      score: "70.74%",
      location: "Ahmedabad, India",
    },
  ];

  return (
    <section id="experience" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Indicator */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-sky-dark uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-blue/60 border border-accent-sky-dark/20 transition-all duration-300">
          // 04 JOURNEY &amp; EXPERIENCE
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-2xl">
          Growth, Impact &amp; Engineering Track Record
        </h2>
        <span className="font-mono text-xs font-bold text-accent-purple">
          CHRONOLOGY // ATRI SYSTEMS &amp; ACADEMICS
        </span>
      </div>

      {/* Main Experience Container */}
      <div className="tilt-card shimmer-card p-6 sm:p-8 lg:p-12 rounded-3xl bg-white border border-border-subtle shadow-subtle-card">
        <div className="flex items-center gap-2 mb-8 text-accent-purple font-headline font-bold text-lg">
          <Briefcase className="w-5 h-5" />
          <span>Professional Engineering Experience</span>
        </div>

        <div className="relative pl-6 sm:pl-8 md:pl-12 flex flex-col gap-12">
          {/* Subtle Glowing Track Line */}
          <div className="absolute left-2 sm:left-3 md:left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent-purple via-accent-sky to-border-subtle" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col gap-3 group">
              {/* Dot */}
              <div
                className={`absolute -left-[23px] sm:-left-[27px] md:-left-[37px] top-1.5 w-5 h-5 rounded-full bg-white border-2 ${exp.dotColor} flex items-center justify-center shadow-sm`}
              >
                {exp.activePing ? (
                  <div className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                )}
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase ${exp.periodColor}`}>
                  {exp.period}
                </span>
                <h3 className="font-headline text-xl lg:text-2xl font-bold text-text-primary">
                  {exp.title}
                </h3>
                <span className="text-text-secondary font-medium text-sm">
                  @ {exp.company} • {exp.location}
                </span>
              </div>

              <ul className="list-disc pl-5 font-body text-sm lg:text-base text-text-secondary max-w-3xl leading-relaxed space-y-1.5 pt-1">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-page-bg border border-border-subtle text-text-primary font-medium hover:border-accent-purple transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <div className="flex items-center gap-2 mb-8 text-accent-sky-dark font-headline font-bold text-lg">
            <GraduationCap className="w-5 h-5" />
            <span>Academic Background</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-page-bg border border-border-subtle flex flex-col justify-between gap-4 hover:border-accent-sky/50 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-accent-sky-dark">
                    {edu.period}
                  </span>
                  <h4 className="font-headline font-bold text-text-primary text-base mt-1">
                    {edu.degree}
                  </h4>
                  <p className="font-body text-xs text-text-secondary mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
                  <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {edu.score}
                  </span>
                  <span className="font-body text-xs text-text-secondary">
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
