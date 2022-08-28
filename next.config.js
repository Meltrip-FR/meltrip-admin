/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  optimizeFonts: false,
  distDir: "build",
  ignoreDuringBuilds: true,
  images: {
    loader: "imgix",
    path: "https://meltrip.fr",
    domains: [
      "https://admin.meltrip.fr",
      "https://www.admin.meltrip.fr",
      "http://localhost:3000",
    ],
  },
};

const securityHeaders = [];
module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
