/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    basePath: "/ots",
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };

export default nextConfig;
