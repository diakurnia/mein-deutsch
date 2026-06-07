/**
 * Daftar "section" pembelajaran (pilar). Satu sumber kebenaran untuk
 * top navbar dan daftar section di dashboard.
 *
 * Menambah section baru = tambah entri di sini. Set `available: true`
 * dan isi `href` saat section sudah dibangun.
 */

export type Section = {
  id: string;
  label: string;
  icon: string;
  href: string | null; // null = belum tersedia
  available: boolean;
};

export const SECTIONS: Section[] = [
  { id: "grundlagen", label: "Grundlagen", icon: "🧱", href: "/grundlagen", available: true },
  { id: "grammar", label: "Grammatik", icon: "📐", href: "/grammar", available: true },
  { id: "vocabulary", label: "Wortschatz", icon: "📚", href: null, available: false },
  { id: "listening", label: "Hören", icon: "🎧", href: null, available: false },
  { id: "review", label: "Übungen & Quiz", icon: "✅", href: null, available: false },
];
