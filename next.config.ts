import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 * 'unsafe-inline' on script-src is required by the Next.js bootstrap and the
 * JSON-LD blocks; tighten to a nonce if you move to a fully dynamic runtime.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'" + (process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self' data:",
  "connect-src 'self'" + (process.env.NODE_ENV === "development" ? " ws: wss:" : ""),
  "frame-src 'self' https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Previously hostname: "**", which turned /_next/image into an open proxy
    // that would fetch and re-serve any URL on the internet at our expense.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // /contact never existed but was linked from three CTAs and may be
      // linked externally; keep it resolving.
      { source: "/contact", destination: "/clients/contact-us", permanent: true },
      { source: "/contact-us", destination: "/clients/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
