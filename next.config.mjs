/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  transpilePackages: ["lucide-react", "three"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
