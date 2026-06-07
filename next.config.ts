import type { NextConfig } from "next";

const securityHeaders = [
  // Cegah halaman dimuat di dalam iframe (anti-clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Cegah browser menebak tipe file (anti-MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer: hanya kirim origin, bukan path lengkap
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Matikan fitur browser yang tidak dipakai
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Paksa HTTPS selama 1 tahun
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy — izinkan audio Web Speech API & Supabase
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js butuh unsafe-eval di dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
      "media-src 'self' blob:", // Web Speech API
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
