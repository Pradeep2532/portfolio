import { Award, Cloud, Trophy } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Google Cloud Study Jams 2023",
      issuer: "Google Developer Student Clubs, GEC Modasa",
      date: "Aug 2023",
      icon: Cloud,
      color: "text-accent-sky-dark bg-pastel-blue",
      description:
        "Hands-on architectural and cloud infrastructure training covering Google Cloud Platform primitives, cloud compute, IAM permissions, and bucket storage pipelines.",
    },
    {
      title: "Certificate of Appreciation — TIC-TECH-TOE '25",
      issuer: "IEEE Student Branch DA-IICT",
      date: "Apr 2025",
      icon: Trophy,
      color: "text-accent-purple bg-pastel-lavender",
      description:
        "Recognized for competitive software development, technical problem-solving, and algorithmic precision at IEEE DA-IICT flagship technical symposium.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="section-badge font-mono text-xs font-bold text-accent-purple uppercase tracking-widest px-3 py-1 rounded-full bg-pastel-lavender/70 border border-accent-purple/20 transition-all duration-300">
          // 05 CERTIFICATES &amp; HONORS
        </span>
        <div className="h-px bg-border-subtle flex-1 max-w-xs" />
      </div>

      <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight max-w-2xl mb-8">
        Credentials &amp; Recognitions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <div
              key={idx}
              className="tilt-card shimmer-card p-6 sm:p-8 rounded-3xl bg-white border border-border-subtle shadow-subtle-card hover:shadow-elevated-card transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${cert.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-text-secondary uppercase">
                    {cert.date}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-text-primary mt-0.5">
                    {cert.title}
                  </h3>
                  <p className="font-body text-xs font-medium text-accent-purple mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
