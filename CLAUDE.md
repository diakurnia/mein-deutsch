# Mein-Deutsch — Instruksi Project

Website belajar bahasa Jerman A1 untuk multi-user kecil.
**Stack:** Next.js 16 (App Router, TS) + Tailwind v4 + Supabase (Auth + Postgres) + Vercel.
**Branch kerja aktif:** `master` (feat/grundlagen sudah di-merge).

---

## Arsitektur Konten

Proyek punya **tiga pilar belajar aktif**:

### 1. Pilar Grammar (`/grammar`)
- 29 topik, file data di `content/topics/*.ts`
- Tipe: `GrammarTopic` dari `content/types.ts`
- Registry: `content/topics.ts` → `getAllTopics()`, `getTopic(id)`
- Halaman: `app/grammar/[topic]/page.tsx`
- Urutan topik 1–29 sudah disesuaikan dengan kurikulum Goethe A1

### 2. Pilar Grundlagen (`/grundlagen`)
- 7 topik fondasi, file data di `content/basics/*.ts`
- Tipe: `BasicsTopic`, `BasicsGroup`, `BasicsItem` dari `content/basics-types.ts`
  - `BasicsItem`: `de` (teks Jerman), `translation` (Indonesia), `hint?` (catatan), `speakText?` (teks TTS jika beda dari `de`)
- Registry: `content/basics.ts` → `getAllBasics()`, `getBasic(id)`
- Halaman: `app/grundlagen/[topic]/page.tsx`
- Komponen utama: `BasicsGrid` — render kartu item + `SpeakButton` per item

### Topik Grundlagen saat ini
| Order | ID | Judul Jerman |
|---|---|---|
| 1 | alphabet | Alphabet |
| 2 | aussprache | Aussprache |
| 3 | zahlen | Zahlen |
| 4 | wochentage-monate | Wochentage, Monate & Jahreszeiten |
| 5 | uhrzeit | Uhrzeit |
| 6 | farben | Farben |
| 7 | begruessung | Begrüßung & Vorstellung |

### 3. Pilar Wortschatz (`/wortschatz`)
- 10 tema, file data di `content/vocab/*.ts`
- Tipe: `VocabTopic`, `VocabItem` (union: `NomenItem | VerbItem | AdjektivItem`) dari `content/vocab-types.ts`
  - `NomenItem`: `de`, `artikel` (der/die/das), `plural` (string|null), `translation`, `speakText?`
  - `VerbItem`: `de`, `translation`, `ich`, `erSie`, `irregular` (boolean), `trennbar` (boolean), `speakText?`
  - `AdjektivItem`: `de`, `translation`, `example` (kalimat contoh), `speakText?`
- Registry: `content/vocab.ts` → `getAllVocab()` (semua+terkunci), `getAvailableVocab()`, `getVocab(id)`
- Halaman: `app/wortschatz/[topic]/page.tsx`
- Komponen utama: `VocabGrid` + `VocabCard` (adaptif per wortart)
- Warna artikel: der=biru (`#60a5fa`), die=pink (`#f472b6`), das=amber (`#fbbf24`)
- Badge wortart: NOMEN (hijau), VERB (amber), ADJ (ungu)

### Topik Wortschatz saat ini
| Order | ID | Status |
|---|---|---|
| 1 | familie | ✅ Aktif (18 kata) |
| 2 | essen-trinken | ✅ Aktif (18 kata) |
| 3 | wohnen | ✅ Aktif (18 kata) |
| 4 | beruf-arbeit | ✅ Aktif (18 kata) |
| 5 | freizeit-hobbys | ✅ Aktif (18 kata) |
| 6 | koerper-gesundheit | ✅ Aktif (18 kata) |
| 7 | kleidung | ✅ Aktif (18 kata) |
| 8 | stadt-verkehr | ✅ Aktif (18 kata) |
| 9 | einkaufen | ✅ Aktif (18 kata) |
| 10 | schule-lernen | ✅ Aktif (18 kata) |

---

## Konvensi Wajib

- **Tambah topik Grammar** = buat file di `content/topics/`, import & daftarkan di `content/topics.ts`.
- **Tambah topik Grundlagen** = buat file di `content/basics/`, import & daftarkan di `content/basics.ts`.
- **Aktifkan tema Wortschatz** = isi data di file placeholder `content/vocab/<id>.ts` (ubah `available: false` → `true`, isi `items`, `examples`, `exercises`).
- **Grammar:** setiap topik punya `explanation`, `notes`, `tables`, `examples`, `exercises`.
- **Grundlagen:** setiap topik punya `intro`, `groups[]` (berisi `items[]`), `exercises[]`. Item gunakan field `translation` (bukan `id`).
- **`speakText`** di `BasicsItem` — isi jika teks TTS berbeda dari `de` (contoh: huruf kapital Alphabet gunakan nama bunyi seperti "ah", "beh").
- Pisahkan render materi dari cek login — halaman materi harus bisa dirender tanpa login (siap SEO).
- Warna utama: `#2dd4bf` (teal-brand), `#5eead4` (teal-soft), `#0f766e` (teal-deep), `#f0fdfa` (teal-bg).
- TDD untuk logika (loader, progress, latihan). Commit kecil & sering.
- Jangan taruh secret di kode — pakai `.env.local`.

---

## Komponen Penting

| Komponen | Lokasi | Fungsi |
|---|---|---|
| `AppSidebar` | `components/AppSidebar.tsx` | Navigasi utama — props: `firstTopicId`, `firstBasicsId`, `firstVocabId`, `userInitial`, `userName` |
| `TopicSidebar` | `components/TopicSidebar.tsx` | Sidebar daftar topik dalam satu pilar — props: `basePath`, `sectionLabel`; support `locked?: boolean` pada item |
| `VocabGrid` | `components/VocabGrid.tsx` | Grid kartu kosakata untuk pilar Wortschatz — menerima `VocabItem[]` |
| `VocabCard` | `components/VocabCard.tsx` | Kartu kosakata adaptif: Nomen (artikel+plural), Verb (konjugasi+⚡), ADJ (contoh kalimat) |
| `BasicsGrid` | `components/BasicsGrid.tsx` | Grid kartu item untuk pilar Grundlagen |
| `SpeakButton` | `components/SpeakButton.tsx` | Tombol audio TTS bahasa Jerman (de-DE) |
| `MiniExercise` | `components/MiniExercise.tsx` | Kuis pilihan ganda, menerima `GrammarExercise[]` |
| `MarkCompleteButton` | `components/MarkCompleteButton.tsx` | Tandai topik selesai → tulis ke `user_progress` |
| `RichText` | `components/RichText.tsx` | Render markdown ringan (**bold**, *italic*, paragraf) |
| `ActivityChart` | `components/ActivityChart.tsx` | Bar chart aktivitas 7 hari |
| `TargetHarian` | `components/TargetHarian.tsx` | Tagesziel di dashboard |
| `WortDesTages` | `components/WortDesTages.tsx` | Wort des Tages dari `content/wordOfDay.ts` |
| `TantanganMingguIni` | `components/TantanganMingguIni.tsx` | Tantangan streak mingguan |

---

## Fungsi Progress (`lib/progress.ts`)

- `summarizeFor(rows, ids[])` — progress untuk sekumpulan id topik (gunakan ini untuk kode baru)
- `summarize(rows, total)` — progress berdasarkan jumlah total (legacy)
- `statusFor(rows, topicId)` — status satu topik: `"belum" | "dipelajari" | "selesai"`
- `weeklyActivity(rows)` — aktivitas 7 hari terakhir
- `calcStreak(rows)` — streak hari berturut-turut
- `completedTodayCount(rows)` — topik selesai hari ini

---

## Navigasi & Bahasa UI

- `lib/sections.ts` — satu sumber kebenaran pilar di dashboard (label, icon, href)
- **Label navigasi**: bahasa Jerman (Übersicht, Grundlagen, Grammatik, Wortschatz, Hören, Übungen & Quiz)
- **Judul topik** Grammar & Grundlagen: bahasa Jerman
- **Konten penjelasan & label UI umum**: bahasa Indonesia

---

## Routing

| Path | Keterangan |
|---|---|
| `/` | Homepage publik |
| `/login` | Login / register |
| `/dashboard` | Dashboard utama (perlu login) |
| `/grundlagen` | Redirect ke topik Grundlagen pertama |
| `/grundlagen/[id]` | Halaman topik Grundlagen |
| `/grammar` | Redirect ke `/dashboard` |
| `/grammar/[id]` | Halaman topik Grammar |
| `/wortschatz` | Redirect ke topik Wortschatz pertama yang tersedia |
| `/wortschatz/[id]` | Halaman topik Wortschatz |
| `/auth/signout` | Route sign out |

---

## Database Supabase

Tabel: `user_progress`
- `user_id` (uuid), `topic_id` (text), `status` (`"belum"|"dipelajari"|"selesai"`), `completed_at`, `updated_at`
- `topic_id` dari pilar Grammar, Grundlagen, dan Wortschatz tidak bentrok (slug unik tiap pilar)
- Wortschatz menggunakan slug langsung, e.g. `familie`, `essen-trinken`

---

## Perintah

```bash
npm run dev                           # dev server (port default 3000)
npm run dev -- --port 3001            # dev server port 3001
npm test                              # semua tes (Vitest)
npm test -- tests/basics.test.ts      # tes spesifik
npm run build                         # build produksi
```

---

## File Test

| File | Yang diuji |
|---|---|
| `tests/content.test.ts` | Registry Grammar: urutan, answer-in-options, getTopic |
| `tests/basics.test.ts` | Registry Grundlagen: urutan, answer-in-options, groups |
| `tests/basicsGrid.test.tsx` | BasicsGrid: render item & tombol audio |
| `tests/miniExercise.test.tsx` | MiniExercise: jawaban benar/salah |
| `tests/progress.test.ts` | summarize, summarizeFor, streak, weeklyActivity |
| `tests/vocab.test.ts` | Registry Wortschatz: urutan, available, answer-in-options |
| `tests/vocabGrid.test.tsx` | VocabGrid: render Nomen/Verb/ADJ, badge, plural, konjugasi |

---

## Docs & Specs

- `docs/PRD.md` — Product Requirements Document
- `docs/superpowers/specs/2026-06-05-mein-deutsch-design.md` — desain teknis MVP
- `docs/superpowers/specs/2026-06-07-grundlagen-pillar-design.md` — desain pilar Grundlagen
- `docs/superpowers/plans/2026-06-05-mein-deutsch-mvp.md` — rencana implementasi MVP
- `docs/superpowers/plans/2026-06-07-grundlagen-pillar.md` — rencana implementasi Grundlagen
- `docs/superpowers/specs/2026-06-07-wortschatz-pillar-design.md` — desain teknis pilar Wortschatz
- `docs/superpowers/plans/2026-06-07-wortschatz-pillar.md` — rencana implementasi Wortschatz (sudah selesai)

---

## Status Pilar

| Pilar | Status | Catatan |
|---|---|---|
| Grundlagen | ✅ Selesai | 7 topik |
| Grammatik | ✅ Selesai | 29 topik |
| Wortschatz | ✅ Selesai | 10 tema × 18 kata = 180 kata |
| Hören | 🔒 Belum dibangun | — |
| Übungen & Quiz | 🔒 Belum dibangun | — |
