/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  optimizeFonts: false,
  transpilePackages: ["lucide-react", "three"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
