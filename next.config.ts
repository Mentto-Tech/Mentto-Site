import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'mentto.com.br',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/redirecionamento/termo-de-uso-e-politica-de-privacidade',
        destination: '/termos-de-uso-e-politicas-de-privacidade',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
