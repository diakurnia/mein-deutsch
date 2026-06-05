# Mein-Deutsch — Desain MVP (Pilar Grammar)

**Tanggal:** 2026-06-05
**Status:** Disepakati, siap masuk tahap perencanaan implementasi

---

## 1. Tujuan & Konteks

Website untuk belajar **grammar bahasa Jerman level A1**, ditujukan untuk pemilik (sedang belajar A1) dan sekelompok kecil teman/komunitas (multi-user kecil, non-komersial).

Visi jangka panjang mencakup 4 pilar:
1. **Struktur bahasa / grammar** ← *MVP ini*
2. Vocabulary + artikel (der/die/das)
3. Listening / pengucapan
4. Kuis/review + tracking progress

MVP ini **fokus penuh pada Pilar 1 (Grammar)**, dengan elemen ringan dari pilar lain (pengucapan audio sederhana, mini-latihan, tracking progress dasar) sebagai fondasi yang bisa dikembangkan.

### Sumber materi
Materi grammar **diekstrak dari ebook referensi** milik pengguna, diolah menjadi **data terstruktur** (bukan salin-tempel halaman). Catatan hak cipta: ebook dipakai sebagai sumber untuk menyusun materi belajar sendiri, bukan didistribusikan utuh.

---

## 2. Arsitektur & Teknologi

```
Browser (Next.js / React)
        │
        ▼
Supabase (cloud)
  • Auth (login user)
  • Database Postgres (materi + progress)
```

| Lapisan | Pilihan | Alasan |
|---------|---------|--------|
| Framework | Next.js (App Router) | Standar industri, banyak referensi |
| Bahasa | TypeScript | Aman dari typo, bagus untuk belajar |
| Styling | Tailwind CSS | Cepat membuat tampilan rapi |
| Database + Auth | Supabase | Login + simpan data, gratis di awal |
| Hosting | Vercel (gratis) | Deploy mudah, cocok dengan Next.js |
| Audio pengucapan | Web Speech API (TTS browser) | Gratis, tanpa simpan file, bisa kata & kalimat |

### Prinsip desain
- Materi grammar disimpan sebagai **data terstruktur, terpisah dari kode tampilan**. Menambah topik = menambah data, bukan mengubah kode.
- Audio dibuat *on-the-fly* dari teks Jerman → **tidak perlu menyimpan file audio**.

### Struktur folder (awal)
```
mein-deutsch/
├── app/
│   ├── page.tsx          # beranda
│   ├── login/            # halaman login
│   ├── grammar/          # daftar topik (dashboard)
│   └── grammar/[topik]/  # detail satu topik
├── components/           # komponen UI
├── lib/                  # koneksi supabase, helper
├── content/              # materi grammar hasil ekstrak ebook
└── CLAUDE.md             # instruksi project
```

---

## 3. Model Data

### Materi grammar
Pertimbangan: materi (`grammar_*`) bisa disimpan sebagai **file data di `content/`** (mudah diedit & dikelola via git) untuk MVP, sementara `user_progress` wajib di database Supabase. Keputusan final ditentukan saat perencanaan implementasi.

**`grammar_topics`** — satu baris = satu topik
| Kolom | Tipe | Contoh |
|-------|------|--------|
| `id` | text | `artikel-nominativ` |
| `title` | text | "Artikel & Nominativ" |
| `level` | text | "A1" |
| `order` | number | 1 |
| `explanation` | text (markdown) | Penjelasan aturan (A) |
| `notes` | text | Catatan penting / pengecualian (D) |

**`grammar_tables`** — tabel/visual (B), bisa banyak per topik
| Kolom | Contoh |
|-------|--------|
| `topic_id` | `artikel-nominativ` |
| `caption` | "Deklinasi Nominativ" |
| `data` | struktur tabel (baris & kolom) |

**`grammar_examples`** — contoh kalimat (C)
| Kolom | Contoh |
|-------|--------|
| `topic_id` | `artikel-nominativ` |
| `de` | "Der Tisch ist groß." |
| `arti` | "Meja itu besar." |

**`grammar_exercises`** — mini-latihan (E)
| Kolom | Contoh |
|-------|--------|
| `topic_id` | `artikel-nominativ` |
| `question` | "___ Tisch ist groß." |
| `answer` | "der" |
| `options` | ["der","die","das"] |

### Progress
**`user_progress`**
| Kolom | Contoh |
|-------|--------|
| `user_id` | dari Supabase Auth |
| `topic_id` | `artikel-nominativ` |
| `status` | "belum" / "dipelajari" / "selesai" |
| `completed_at` | tanggal |

---

## 4. Halaman & Alur Belajar (UX)

Empat halaman untuk MVP:

1. **`/` Beranda** — judul + tombol "Masuk / Mulai Belajar".
2. **`/login`** — email + password via Supabase Auth → arahkan ke dashboard.
3. **`/grammar` Dashboard** — daftar topik sebagai kartu (judul, level, badge status), header ringkasan progress (X/Y selesai + progress bar).
4. **`/grammar/[topik]` Detail topik** — urut: Penjelasan → Tabel → Contoh kalimat (+ tombol 🔊) → Catatan penting → Mini-latihan (pilih jawaban, langsung tahu benar/salah) → tombol "Tandai Selesai".

### Status progress (per topik)
`⚪ Belum → 🔵 Dipelajari → ✅ Selesai`

### Tampilan progress (MVP)
Hanya di **Dashboard**: ringkasan X/Y + progress bar, dan badge status di tiap kartu. **Tanpa** halaman statistik terpisah dan **tanpa** streak (ditunda).

### Alur pengguna
```
Buka web → Login → Dashboard → Pilih topik
→ Baca materi + dengar pengucapan → Mini-latihan
→ Tandai selesai → Kembali ke Dashboard (progress bertambah)
```

### Gaya visual (disepakati)
- **Arah desain:** Playful & ramah (ala Duolingo) — kartu membulat, ikon, maskot 🦉, progress bar menonjol.
- **Warna utama:** Toska muda / mint (sekitar `#2dd4bf`, aksen `#5eead4`, teks gelap `#0f766e`). Latar terang, lembut di mata.
- **Penjelasan panjang:** ringkas dulu + tautan **"Baca selengkapnya"** untuk memperluas (Opsi B). Teks panjang dipecah jadi paragraf pendek, poin, istilah disorot, dan kotak sorotan untuk peringatan.
- **Styling diimplementasikan dengan Tailwind CSS.**

---

## 5. Error Handling & Testing (garis besar)

- **Auth gagal / belum login:** halaman grammar mengarahkan ke `/login`; pesan error login yang jelas.
- **Web Speech API tidak didukung browser:** tombol 🔊 dinonaktifkan dengan tooltip penjelasan (fallback graceful).
- **Data topik tidak ditemukan:** tampilkan state "topik tidak ditemukan" yang rapi.
- **Update progress gagal (jaringan):** beri notifikasi & biarkan pengguna mencoba lagi.
- **Testing:** uji alur inti — login, tampil materi, mini-latihan benar/salah, tandai selesai memperbarui progress. Detail strategi testing ditentukan di tahap perencanaan.

---

## 6. Lingkup (Scope)

### Termasuk MVP
- 4 halaman di atas, multi-user via Supabase Auth.
- Materi grammar terstruktur (A–E) dari ekstraksi ebook.
- Pengucapan via Web Speech API.
- Mini-latihan ringan per topik.
- Tracking progress dasar di Dashboard.
- **Target awal mini:** 1 topik grammar A1 lengkap & berfungsi, lalu tambah topik.

### Sengaja DITUNDA (bukan MVP)
- Sistem kuis penuh dengan skor & riwayat.
- Halaman statistik terpisah (`/progress`).
- Streak hari berturut-turut.
- Pilar 2–4 (vocabulary, listening mendalam, review system).
- Audio kualitas native (Forvo / Cloud TTS) — upgrade dari Web Speech API tanpa bongkar struktur.

---

## 6b. Catatan kesiapan SEO (untuk go-public nanti)

MVP menempatkan materi di balik login (cukup untuk kelompok kecil). Bila nanti ingin dipublikasikan & efektif SEO, perubahannya **inkremental, bukan rombak besar**, karena pilihan teknis sudah mendukung:
- **Next.js** mendukung SSR/SSG, Metadata API, dan sitemap — fondasi SEO yang kuat.
- **Materi sebagai data terstruktur** mudah dirender jadi halaman publik yang bisa di-index + structured data (schema.org).

**Prinsip desain yang dipegang sejak MVP supaya transisi mulus:** pisahkan *render materi* dari *cek login*. Halaman materi dibuat agar *bisa* dirender tanpa login (server-side); login hanya membungkus fitur personal (progress, tandai selesai). Saat go-public: buka akses baca materi tanpa login, tambah metadata/sitemap/structured data, dan pasang domain custom.

## 7. Langkah berikutnya
1. Buat rencana implementasi detail (skill writing-plans).
2. Setup project Next.js + Tailwind + Supabase.
3. Ekstrak 1 topik grammar A1 dari ebook sebagai data uji.
4. Bangun halaman & alur sesuai desain ini.
