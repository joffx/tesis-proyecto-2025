/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["nyc3.digitaloceanspaces.com"],
  },
};

export default nextConfig;
