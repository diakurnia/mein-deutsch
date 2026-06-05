import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mein-Deutsch — Belajar Grammar Jerman A1",
  description:
    "Belajar struktur bahasa Jerman A1: penjelasan, tabel, contoh kalimat dengan pengucapan, dan mini-latihan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
