# Desain: Pilar "Grundlagen" (Materi Dasar)

**Tanggal:** 2026-06-07
**Status:** Disetujui (siap masuk tahap rencana implementasi)
**Proyek:** Mein-Deutsch — website belajar grammar Jerman A1

## 1. Ringkasan & Tujuan

Menambahkan **pilar ke-5 bernama "Grundlagen"** sebagai titik "Mulai di sini" untuk pemula A1. Pilar ini berisi materi fondasi/sistem (terbatas, seperti referensi) yang dibutuhkan sebelum masuk Grammar maupun Vocabulary.

Keputusan kunci hasil brainstorming:

- Pilar **baru** (bukan mengisi pilar Vocabulary yang sudah direncanakan).
- Fokus **fondasi/sistem saja** — kosakata tematik (keluarga, makanan, profesi, hobi, tubuh, pakaian, dll) tetap direncanakan untuk pilar Vocabulary nanti, **bukan** di sini.
- Bentuk materi = **kartu item dengan audio per item** (bukan tabel aturan seperti Grammar).
- Tiap topik diakhiri **mini-kuis** sehingga ikut terhitung di progress & streak dashboard.

## 2. Cakupan: 7 Topik

Urutan topik (`order`):

| # | id | Judul | Isi |
|---|----|----|----|
| 1 | `alphabet` | Alphabet | A–Z + ä ö ü ß, nama huruf, contoh kata |
| 2 | `aussprache` | Aussprache (Pelafalan & Ejaan) | bunyi gabungan khas: ch, sch, ei/ie, ä ö ü, ß, w=/v/, z=/ts/, v=/f/ |
| 3 | `zahlen` | Angka (die Zahlen) | 0–20, puluhan, pola (einundzwanzig), 100/1000 |
| 4 | `wochentage-monate` | Hari, Bulan & Musim | 7 hari, 12 bulan, 4 musim |
| 5 | `uhrzeit` | Waktu / Jam (die Uhrzeit) | format jam + frasa "Wie spät ist es?" |
| 6 | `farben` | Warna (die Farben) | warna umum + arti |
| 7 | `begruessung` | Salam & Perkenalan | frasa sapaan + "Ich heiße…", kapan dipakai |

Setiap topik berisi **3–4 soal pilihan ganda**.

## 3. Model Data

File baru `content/basics-types.ts`:

```ts
import type { GrammarExercise } from "@/content/types";

export type BasicsItem = {
  de: string;     // teks Jerman — yang dibacakan SpeakButton
  id: string;     // arti Indonesia
  hint?: string;  // cara baca / contoh, mis. "/ah/" atau "Apfel"
};

export type BasicsGroup = {
  caption: string;        // judul kelompok, mis. "Angka 0–12"
  items: BasicsItem[];
};

export type BasicsTopic = {
  id: string;
  title: string;
  level: string;          // "A1"
  order: number;
  icon: string;           // emoji
  intro: string;          // penjelasan singkat (markdown, dirender via RichText)
  groups: BasicsGroup[];  // daftar item dikelompokkan (1 grup pun valid)
  exercises: GrammarExercise[]; // pakai ulang tipe kuis yang sudah ada
};
```

Perbedaan dari `GrammarTopic`: intinya **daftar item** (bukan tabel aturan), pengelompokan via `groups`, dan field `hint` untuk cara baca. Tipe `GrammarExercise` dipakai ulang untuk kuis.

## 4. Routing & Halaman

Meniru struktur Grammar yang sudah ada:

- `app/grundlagen/layout.tsx` — pakai ulang `AppSidebar`; cek login (redirect `/login` jika belum).
- `app/grundlagen/[topic]/page.tsx` — server component: cek login, ambil progress user, render intro + `BasicsGrid` + `MiniExercise` + `MarkCompleteButton` + `TopicSidebar`.
- `app/grundlagen/page.tsx` — redirect ke topik pertama (`/grundlagen/alphabet`), mengikuti pola `/grammar` saat ini.

## 5. Komponen

**Baru:**

- `components/BasicsGrid.tsx` — render `groups` menjadi kartu item; tiap kartu menampilkan `de`, `id`, `hint` opsional, dan `<SpeakButton text={item.de} />`.

**Pakai ulang tanpa perubahan:**

- `SpeakButton` (audio de-DE via Web Speech API)
- `MiniExercise` (kuis pilihan ganda, menerima `GrammarExercise[]`)
- `MarkCompleteButton` (tandai selesai → tulis ke `user_progress`)
- `RichText` (render intro markdown)
- `TopicSidebar` (daftar topik + status)
- `ProgressBar`

## 6. Registry Konten

- `content/basics/*.ts` — 7 file topik (satu file = satu topik, sesuai konvensi project: tambah topik = tambah file).
- `content/basics.ts` — `getAllBasics()` (urut by `order`) dan `getBasic(id)`, meniru `content/topics.ts`.

## 7. Integrasi Navigasi & Dashboard

- `lib/sections.ts` — tambah entri `grundlagen` dengan `available: true`, ditaruh **paling atas** (sebelum Grammar) karena perannya "Mulai di sini".
- `components/AppSidebar.tsx` — tambah item nav **Grundlagen** → `/grundlagen/${firstBasicsId}`; tambah prop baru `firstBasicsId`. Update `isActive` untuk path `/grundlagen/`.
- `app/dashboard/layout.tsx` & `app/grammar/layout.tsx` — kirim `firstBasicsId` (dari `getAllBasics()[0]?.id`) ke `AppSidebar`.
- `app/dashboard/page.tsx` — Grundlagen muncul di daftar "Materi Belajar" dengan progress bar sendiri; statistik total topik dihitung gabungan grammar + grundlagen.

## 8. Progress & Kuis

- Pakai ulang tabel Supabase `user_progress` (kolom `topic_id` bertipe string). Id topik Grundlagen (`alphabet`, `aussprache`, dst) tidak bentrok dengan id grammar.
- Kuis memakai `MiniExercise`; tombol "Tandai Selesai" memasukkan topik ke progress & streak otomatis.

## 9. Testing (Vitest + RTL)

- `content/basics.ts`: `getAllBasics()` terurut by `order`; `getBasic(id)` mengembalikan topik yang benar dan `undefined` untuk id tak dikenal.
- Integritas konten: untuk setiap topik, tiap `exercise.answer` harus salah satu dari `exercise.options`.
- `BasicsGrid`: merender jumlah item yang benar dan menampilkan tombol audio per item.

## 10. Di Luar Cakupan (YAGNI)

- Pilar Vocabulary dan kosakata tematik (keluarga, makanan, profesi, hobi, tubuh, pakaian, belanja, cuaca).
- Spaced-repetition.
- File audio rekaman (cukup Web Speech API yang sudah dipakai).
- Gambar/ilustrasi per item dan color-swatch otomatis untuk topik Warna.
```
