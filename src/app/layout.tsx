import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradeep Maurya — Full Stack Developer & Software Engineer",
  description:
    "Interactive 3D Portfolio of Pradeep Maurya — Full Stack Developer specializing in Next.js, TypeScript, .NET Web API, PostgreSQL, and real-time systems.",
  keywords: [
    "Pradeep Maurya",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    ".NET Web API",
    "PostgreSQL",
    "Tailwind CSS",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Pradeep Maurya" }],
  openGraph: {
    title: "Pradeep Maurya — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, .NET Web API, PostgreSQL, and scalable distributed architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page-bg text-text-primary antialiased selection:bg-pastel-lavender selection:text-accent-purple overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}
