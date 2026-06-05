# Mein-Deutsch — Instruksi Project

Website belajar grammar Jerman A1. Stack: Next.js (App Router, TS) + Tailwind + Supabase.

## Konvensi
- Materi grammar = data terstruktur di `content/topics/`. Tambah topik = tambah file data, jangan ubah komponen.
- Pisahkan render materi dari cek login: halaman materi harus bisa dirender tanpa login (siap SEO). Login hanya membungkus fitur progress.
- Warna utama: toska muda (`#2dd4bf`), aksen `#5eead4`, teks aksen `#0f766e`.
- TDD untuk logika (loader, progress, latihan). Commit kecil & sering.
- Jangan taruh secret di kode — pakai `.env.local` (lihat `.env.local.example`).

## Perintah
- `npm run dev` — jalankan dev server
- `npm run test` — jalankan test
- `npm run build` — build produksi
