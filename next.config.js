/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  
  // ✅ Modern Next.js 15 Image Optimization
  images: {
    // Note: 'domains' is deprecated in favor of 'remotePatterns' for better security
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "bqzlcpajeawshaidgnta.storage.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "truemarkglobalss.com",
      },
      // ✅ Added support for local development images
      {
        protocol: "http",
        hostname: "localhost",
      }
    ],
  },

  // ✅ ISO Standard: Security Headers
  // This protects your LMS from common attacks like Clickjacking and XSS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // ✅ SVG Handling
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // ✅ Suppress minor hydration warnings during Redux/LMS state sync
  devIndicators: {
    appIsrStatus: false,
  },
};

module.exports = nextConfig;