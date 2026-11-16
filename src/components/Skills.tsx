import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Indicator */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-sky-dark uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-blue/60 border border-accent-sky-dark/20 transition-all duration-300">
          // 02 TECH STACK &amp; EXPERTISE
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-2xl">
          Comprehensive Full-Stack Mastery
        </h2>
        <span className="font-mono text-xs font-semibold text-accent-purple bg-pastel-lavender px-3 py-1.5 rounded-lg border border-accent-purple/20">
          PROD_READY // ENTERPRISE_SCALE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bento 1: Frontend Architecture & UI (7 Cols) */}
        <div className="md:col-span-7 tilt-card shimmer-card p-8 rounded-3xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between hover:shadow-elevated-card transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pastel-lavender flex items-center justify-center text-accent-purple">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-xl font-bold text-text-primary">
                  Frontend Architecture &amp; UI
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-pastel-lavender font-mono text-[11px] font-bold text-accent-purple uppercase">
                Tier 1
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Building responsive, high-performance web applications using modern component-driven architectures, dynamic routing, and strict schema validation.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                Next.js (App Router)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-sky transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky-dark" />
                React.js
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                TypeScript
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                Tailwind CSS
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                Zod Validation
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                HTML5 &amp; CSS3
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                Three.js &amp; WebGL
              </span>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs font-medium text-text-secondary uppercase">
              Application Speed
            </span>
            <span className="font-mono text-xs font-bold text-accent-purple">
              60 FPS • Accessible &amp; Responsive
            </span>
          </div>
        </div>

        {/* Bento 2: Backend & REST APIs (5 Cols) */}
        <div className="md:col-span-5 tilt-card shimmer-card p-8 rounded-3xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between hover:shadow-elevated-card transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center text-accent-sky-dark">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-xl font-bold text-text-primary">
                  Backend &amp; APIs
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-pastel-blue font-mono text-[11px] font-bold text-accent-sky-dark uppercase">
                Services
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Robust backend servers, RESTful API design with SOLID principles, role-based controllers, and public UUID security.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-sky transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky-dark" />
                ASP.NET Web API (C#)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Node.js
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Express.js
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                FastAPI (Python)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                SOLID Principles
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Axios &amp; CORS
              </span>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs font-medium text-text-secondary uppercase">
              API Standards
            </span>
            <span className="font-mono text-xs font-bold text-accent-sky-dark">
              RESTful • Public UUIDs
            </span>
          </div>
        </div>

        {/* Bento 3: Databases & Real-time IoT (5 Cols) */}
        <div className="md:col-span-5 tilt-card shimmer-card p-8 rounded-3xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between hover:shadow-elevated-card transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pastel-lavender flex items-center justify-center text-accent-purple">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-xl font-bold text-text-primary">
                  Databases &amp; Real-Time
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-pastel-lavender font-mono text-[11px] font-bold text-accent-purple uppercase">
                Data / IoT
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Relational schemas, query optimization, database normalization, and live device telemetry streaming.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                PostgreSQL
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                MongoDB
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                MySQL
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-purple transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                MQTT (Mosquitto)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-purple transition-colors">
                WebSocket
              </span>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs font-medium text-text-secondary uppercase">
              Query Optimization
            </span>
            <span className="font-mono text-xs font-bold text-accent-purple">
              Indexed • Normalized • ACID
            </span>
          </div>
        </div>

        {/* Bento 4: Security, DevOps & Tooling (7 Cols) */}
        <div className="md:col-span-7 tilt-card shimmer-card p-8 rounded-3xl bg-white border border-border-subtle shadow-subtle-card flex flex-col justify-between hover:shadow-elevated-card transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center text-accent-sky-dark">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-xl font-bold text-text-primary">
                  Security, DevOps &amp; Tooling
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-pastel-blue font-mono text-[11px] font-bold text-accent-sky-dark uppercase">
                Infra &amp; Auth
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Enterprise single sign-on, JWT token lifecycles (access &amp; refresh), role-based permissions, containerization, and API testing suites.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-sky transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky-dark" />
                Microsoft SSO
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium flex items-center gap-1.5 hover:border-accent-sky transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky-dark" />
                JWT Auth (Access &amp; Refresh)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Role-Based Access (RBAC)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Docker
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Git &amp; GitHub CI/CD
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-page-bg border border-border-subtle text-text-primary font-mono text-xs font-medium hover:border-accent-sky transition-colors">
                Postman &amp; Swagger
              </span>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs font-medium text-text-secondary uppercase">
              Authentication Status
            </span>
            <span className="font-mono text-xs font-bold text-emerald-600">
              OAuth / Microsoft SSO / Enterprise RBAC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
