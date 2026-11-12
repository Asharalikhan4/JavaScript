/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  experimental: {
    // Allows importing content outside apps/web/src
    externalDir: true,
  },
};

export default nextConfig;
