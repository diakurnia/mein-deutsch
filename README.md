# 🇩🇪 Mein-Deutsch

Website belajar bahasa Jerman A1 — penjelasan terstruktur, audio pengucapan, mini-latihan, dan tracking kemajuan.

**Live:** [mein-deutsch123.vercel.app](https://mein-deutsch123.vercel.app)

---

## Fitur

- **Grundlagen** — 7 topik fondasi (Alphabet, Aussprache, Zahlen, Uhrzeit, Farben, dll) dengan kartu item + tombol audio 🔊 per item
- **Grammatik** — 29 topik grammar A1 lengkap sesuai kurikulum Goethe-Zertifikat A1
- Setiap topik: penjelasan, tabel, contoh kalimat + audio, mini-kuis pilihan ganda
- Tracking progress per topik & per pilar
- Dashboard: hero adaptif, aktivitas 7 hari, Wort des Tages, streak

---

## Stack

| Layer | Teknologi |
|---|---|
| Frontend | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Auth & DB | Supabase (Auth + Postgres) |
| Audio | Web Speech API (de-DE, browser-native) |
| Deploy | Vercel |
| Test | Vitest + React Testing Library |

---

## Struktur Konten

```
content/
├── types.ts              # GrammarTopic type
├── topics.ts             # registry Grammar (getAllTopics, getTopic)
├── topics/               # 29 file topik Grammar
├── basics-types.ts       # BasicsTopic, BasicsGroup, BasicsItem types
├── basics.ts             # registry Grundlagen (getAllBasics, getBasic)
├── basics/               # 7 file topik Grundlagen
└── wordOfDay.ts          # data Wort des Tages
```

**Tambah topik Grammar baru:** buat file di `content/topics/`, import & daftarkan di `content/topics.ts`.

**Tambah topik Grundlagen baru:** buat file di `content/basics/`, import & daftarkan di `content/basics.ts`.

---

## Setup Lokal

```bash
# 1. Install dependencies
npm install

# 2. Salin env contoh dan isi dengan kredensial Supabase
cp .env.local.example .env.local

# 3. Jalankan SQL schema di Supabase dashboard
# File: supabase/schema.sql

# 4. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

---

## Perintah

```bash
npm run dev       # dev server
npm test          # jalankan semua tes
npm run build     # build produksi
```

---

## Docs

- `CLAUDE.md` — konvensi proyek & panduan pengembangan
- `docs/PRD.md` — Product Requirements Document
- `docs/superpowers/specs/` — dokumen desain
- `docs/superpowers/plans/` — rencana implementasi
