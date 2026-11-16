export default function Marquee() {
  const items = [
    { text: "FULL-STACK NEXT.JS", color: "text-accent-purple", dot: "bg-accent-purple" },
    { text: "TYPESCRIPT & C#", color: "text-accent-sky-dark", dot: "bg-accent-sky-dark" },
    { text: "ASP.NET WEB API", color: "text-accent-purple", dot: "bg-accent-purple" },
    { text: "POSTGRESQL & MONGODB", color: "text-emerald-600", dot: "bg-emerald-500" },
    { text: "MQTT & WEBSOCKET REAL-TIME", color: "text-accent-sky-dark", dot: "bg-accent-sky-dark" },
    { text: "TAILWIND CSS & THREE.JS", color: "text-accent-purple", dot: "bg-accent-purple" },
    { text: "MICROSOFT SSO & JWT", color: "text-accent-sky-dark", dot: "bg-accent-sky-dark" },
    { text: "SOLID PRINCIPLES & REST APIS", color: "text-emerald-600", dot: "bg-emerald-500" },
  ];

  return (
    <section className="w-full border-y border-border-subtle bg-white/70 backdrop-blur-md py-4 overflow-hidden select-none my-6">
      <div className="animate-marquee flex items-center gap-8 font-mono text-xs font-bold tracking-widest text-text-secondary uppercase">
        {/* First set */}
        {items.map((item, idx) => (
          <span key={`m1-${idx}`} className="flex items-center gap-8">
            <span className={`flex items-center gap-3 ${item.color}`}>
              <span className={`w-2 h-2 rounded-full ${item.dot}`} />
              {item.text}
            </span>
            <span>•</span>
          </span>
        ))}
        {/* Repeat set for seamless infinite loop */}
        {items.map((item, idx) => (
          <span key={`m2-${idx}`} className="flex items-center gap-8">
            <span className={`flex items-center gap-3 ${item.color}`}>
              <span className={`w-2 h-2 rounded-full ${item.dot}`} />
              {item.text}
            </span>
            <span>•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
