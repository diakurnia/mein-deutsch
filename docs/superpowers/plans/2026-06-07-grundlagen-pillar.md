# Pilar Grundlagen — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan pilar ke-5 "Grundlagen" berisi 7 topik fondasi A1 (alphabet, aussprache, angka, hari/bulan, jam, warna, salam) dengan kartu item + audio per item dan mini-kuis, terintegrasi ke navigasi & progress dashboard.

**Architecture:** Tipe konten baru `BasicsTopic` (daftar item dikelompokkan) terpisah dari `GrammarTopic`. Konten = file per topik di `content/basics/`, didaftarkan di `content/basics.ts`. Halaman meniru struktur `/grammar`, memakai ulang komponen yang sudah ada (`SpeakButton`, `MiniExercise`, `MarkCompleteButton`, `RichText`, `TopicSidebar`) plus satu komponen baru `BasicsGrid`. Progress memakai ulang tabel Supabase `user_progress`.

**Tech Stack:** Next.js 16 (App Router, TS), Tailwind v4, Supabase, Vitest + React Testing Library, Web Speech API.

---

## File Structure

**Buat baru:**
- `content/basics-types.ts` — tipe `BasicsItem`, `BasicsGroup`, `BasicsTopic`
- `content/basics/alphabet.ts` … `content/basics/begruessung.ts` — 7 file topik
- `content/basics.ts` — registry `getAllBasics()`, `getBasic(id)`
- `components/BasicsGrid.tsx` — render kartu item + audio
- `app/grundlagen/layout.tsx` — layout sidebar pilar
- `app/grundlagen/[topic]/page.tsx` — halaman topik
- `app/grundlagen/page.tsx` — redirect ke topik pertama
- `tests/basics.test.ts` — tes registry + integritas konten
- `tests/basicsGrid.test.tsx` — tes komponen

**Modifikasi:**
- `lib/progress.ts` — tambah `summarizeFor()`
- `lib/sections.ts` — tambah entri `grundlagen`
- `components/AppSidebar.tsx` — tambah nav Grundlagen + prop `firstBasicsId`
- `app/dashboard/layout.tsx`, `app/grammar/layout.tsx` — kirim `firstBasicsId`
- `app/dashboard/page.tsx` — Grundlagen di "Materi Belajar" + total gabungan
- `app/grammar/[topic]/page.tsx` — pakai `summarizeFor` agar progress grammar akurat
- `tests/progress.test.ts` — tes `summarizeFor`

---

## Task 1: Tipe konten + registry + topik Alphabet

**Files:**
- Create: `content/basics-types.ts`
- Create: `content/basics/alphabet.ts`
- Create: `content/basics.ts`
- Test: `tests/basics.test.ts`

- [ ] **Step 1: Tulis tes yang gagal**

Create `tests/basics.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { getAllBasics, getBasic } from "@/content/basics";

describe("content basics", () => {
  it("mengembalikan topik fondasi berurutan", () => {
    const topics = getAllBasics();
    expect(topics.length).toBeGreaterThan(0);
    const orders = topics.map((t) => t.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("setiap jawaban latihan ada di dalam options", () => {
    for (const t of getAllBasics()) {
      for (const ex of t.exercises) {
        expect(ex.options).toContain(ex.answer);
      }
    }
  });

  it("setiap topik punya minimal satu grup berisi item", () => {
    for (const t of getAllBasics()) {
      expect(t.groups.length).toBeGreaterThan(0);
      for (const g of t.groups) {
        expect(g.items.length).toBeGreaterThan(0);
      }
    }
  });

  it("getBasic mengembalikan topik sesuai id, atau undefined", () => {
    const first = getAllBasics()[0];
    expect(getBasic(first.id)?.id).toBe(first.id);
    expect(getBasic("tidak-ada")).toBeUndefined();
  });
});
```

- [ ] **Step 2: Jalankan tes, pastikan gagal**

Run: `npm test -- tests/basics.test.ts`
Expected: FAIL — `Cannot find module '@/content/basics'`.

- [ ] **Step 3: Buat tipe konten**

Create `content/basics-types.ts`:

```ts
import type { GrammarExercise } from "@/content/types";

export type BasicsItem = {
  de: string; // teks Jerman — yang dibacakan SpeakButton
  id: string; // arti / keterangan Indonesia
  hint?: string; // cara baca atau catatan singkat
};

export type BasicsGroup = {
  caption: string; // judul kelompok
  items: BasicsItem[];
};

export type BasicsTopic = {
  id: string; // slug
  title: string;
  level: string; // "A1"
  order: number;
  icon: string; // emoji
  intro: string; // penjelasan singkat (markdown via RichText)
  groups: BasicsGroup[];
  exercises: GrammarExercise[];
};
```

- [ ] **Step 4: Buat konten Alphabet**

Create `content/basics/alphabet.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const alphabet: BasicsTopic = {
  id: "alphabet",
  title: "Alphabet",
  level: "A1",
  order: 1,
  icon: "🔤",
  intro:
    "**Das Alphabet** bahasa Jerman memiliki 26 huruf dasar yang sama dengan bahasa Indonesia, ditambah tiga huruf umlaut (**ä**, **ö**, **ü**) dan satu huruf khusus **ß** (*eszett*). Mengenal nama tiap huruf penting untuk mengeja nama dan kata (*buchstabieren*).\n\n" +
    "Klik tombol 🔊 untuk mendengar cara melafalkan setiap huruf.",
  groups: [
    {
      caption: "A – M",
      items: [
        { de: "A", id: "contoh: Apfel (apel)", hint: "ah" },
        { de: "B", id: "contoh: Buch (buku)", hint: "beh" },
        { de: "C", id: "contoh: Computer", hint: "tseh" },
        { de: "D", id: "contoh: Deutsch", hint: "deh" },
        { de: "E", id: "contoh: Esel (keledai)", hint: "eh" },
        { de: "F", id: "contoh: Fisch (ikan)", hint: "eff" },
        { de: "G", id: "contoh: Garten (taman)", hint: "geh" },
        { de: "H", id: "contoh: Haus (rumah)", hint: "hah" },
        { de: "I", id: "contoh: Igel (landak)", hint: "ih" },
        { de: "J", id: "contoh: Jahr (tahun)", hint: "yot" },
        { de: "K", id: "contoh: Katze (kucing)", hint: "kah" },
        { de: "L", id: "contoh: Lampe (lampu)", hint: "ell" },
        { de: "M", id: "contoh: Mann (pria)", hint: "emm" },
      ],
    },
    {
      caption: "N – Z",
      items: [
        { de: "N", id: "contoh: Nacht (malam)", hint: "enn" },
        { de: "O", id: "contoh: Obst (buah)", hint: "oh" },
        { de: "P", id: "contoh: Papier (kertas)", hint: "peh" },
        { de: "Q", id: "contoh: Quelle (mata air)", hint: "kuh" },
        { de: "R", id: "contoh: Rose (mawar)", hint: "err" },
        { de: "S", id: "contoh: Sonne (matahari)", hint: "ess" },
        { de: "T", id: "contoh: Tisch (meja)", hint: "teh" },
        { de: "U", id: "contoh: Uhr (jam)", hint: "uh" },
        { de: "V", id: "contoh: Vogel (burung)", hint: "fau" },
        { de: "W", id: "contoh: Wasser (air)", hint: "veh" },
        { de: "X", id: "contoh: Xylofon", hint: "iks" },
        { de: "Y", id: "contoh: Yoga", hint: "ypsilon" },
        { de: "Z", id: "contoh: Zeit (waktu)", hint: "tsett" },
      ],
    },
    {
      caption: "Umlaut & ß",
      items: [
        { de: "Ä", id: "contoh: Äpfel (apel-apel)", hint: "ä (a-umlaut)" },
        { de: "Ö", id: "contoh: Öl (minyak)", hint: "ö (o-umlaut)" },
        { de: "Ü", id: "contoh: Übung (latihan)", hint: "ü (u-umlaut)" },
        { de: "ß", id: "contoh: Straße (jalan)", hint: "eszett / s tajam" },
      ],
    },
  ],
  exercises: [
    {
      question: "Huruf 'W' dalam bahasa Jerman dieja…",
      options: ["veh", "doppel-u", "weh"],
      answer: "veh",
    },
    {
      question: "Huruf khusus 'ß' disebut…",
      options: ["umlaut", "eszett", "beta"],
      answer: "eszett",
    },
    {
      question: "Manakah yang termasuk huruf umlaut?",
      options: ["ß", "ö", "y"],
      answer: "ö",
    },
  ],
};
```

- [ ] **Step 5: Buat registry**

Create `content/basics.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";
import { alphabet } from "@/content/basics/alphabet";

const BASICS: BasicsTopic[] = [alphabet];

export function getAllBasics(): BasicsTopic[] {
  return [...BASICS].sort((a, b) => a.order - b.order);
}

export function getBasic(id: string): BasicsTopic | undefined {
  return BASICS.find((t) => t.id === id);
}
```

- [ ] **Step 6: Jalankan tes, pastikan lulus**

Run: `npm test -- tests/basics.test.ts`
Expected: PASS (4 tes).

- [ ] **Step 7: Commit**

```bash
git add content/basics-types.ts content/basics/alphabet.ts content/basics.ts tests/basics.test.ts
git commit -m "feat: tipe konten Grundlagen + topik Alphabet + tes"
```

---

## Task 2: Enam topik fondasi sisanya

**Files:**
- Create: `content/basics/aussprache.ts`, `content/basics/zahlen.ts`, `content/basics/wochentage-monate.ts`, `content/basics/uhrzeit.ts`, `content/basics/farben.ts`, `content/basics/begruessung.ts`
- Modify: `content/basics.ts`

- [ ] **Step 1: Buat konten Aussprache**

Create `content/basics/aussprache.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const aussprache: BasicsTopic = {
  id: "aussprache",
  title: "Aussprache",
  level: "A1",
  order: 2,
  icon: "🗣️",
  intro:
    "**Aussprache** (pelafalan) adalah kunci agar bahasa Jermanmu mudah dimengerti. Beberapa gabungan huruf dan huruf tertentu dibaca berbeda dari bahasa Indonesia. Dengarkan tiap contoh dengan tombol 🔊.",
  groups: [
    {
      caption: "Bunyi gabungan",
      items: [
        { de: "Schule", id: "sekolah", hint: "sch dibaca /sy/" },
        { de: "ich", id: "saya", hint: "ch (setelah e/i) lembut /ç/" },
        { de: "Buch", id: "buku", hint: "ch (setelah a/o/u) serak /x/" },
        { de: "mein", id: "milikku", hint: "ei dibaca /ai/" },
        { de: "Liebe", id: "cinta", hint: "ie dibaca /i:/ panjang" },
        { de: "neun", id: "sembilan", hint: "eu dibaca /oi/" },
        { de: "Haus", id: "rumah", hint: "au dibaca /au/" },
        { de: "sprechen", id: "berbicara", hint: "sp- di awal /syp/" },
        { de: "Stadt", id: "kota", hint: "st- di awal /syt/" },
      ],
    },
    {
      caption: "Huruf khusus",
      items: [
        { de: "Wasser", id: "air", hint: "w dibaca /v/" },
        { de: "Vater", id: "ayah", hint: "v dibaca /f/" },
        { de: "Zeit", id: "waktu", hint: "z dibaca /ts/" },
        { de: "Straße", id: "jalan", hint: "ß dibaca /s/ tajam" },
        { de: "ja", id: "ya", hint: "j dibaca /y/" },
        { de: "schön", id: "indah", hint: "ö antara o dan e" },
        { de: "über", id: "di atas", hint: "ü antara u dan i" },
      ],
    },
  ],
  exercises: [
    {
      question: "Kata 'Wasser' diawali bunyi…",
      options: ["/v/", "/w/", "/f/"],
      answer: "/v/",
    },
    {
      question: "Huruf 'z' pada 'Zeit' dibaca…",
      options: ["/z/", "/ts/", "/s/"],
      answer: "/ts/",
    },
    {
      question: "Gabungan 'ei' pada 'mein' dibaca…",
      options: ["/ai/", "/ei/", "/i/"],
      answer: "/ai/",
    },
  ],
};
```

- [ ] **Step 2: Buat konten Angka**

Create `content/basics/zahlen.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const zahlen: BasicsTopic = {
  id: "zahlen",
  title: "Angka",
  level: "A1",
  order: 3,
  icon: "🔢",
  intro:
    "**Die Zahlen** (angka) wajib dikuasai untuk menyebut umur, harga, nomor telepon, dan waktu. Perhatikan pola unik angka 21–99: **satuan + und + puluhan** (mis. *einundzwanzig* = satu-dan-dua-puluh = 21).",
  groups: [
    {
      caption: "0 – 12",
      items: [
        { de: "null", id: "0" },
        { de: "eins", id: "1" },
        { de: "zwei", id: "2" },
        { de: "drei", id: "3" },
        { de: "vier", id: "4" },
        { de: "fünf", id: "5" },
        { de: "sechs", id: "6" },
        { de: "sieben", id: "7" },
        { de: "acht", id: "8" },
        { de: "neun", id: "9" },
        { de: "zehn", id: "10" },
        { de: "elf", id: "11" },
        { de: "zwölf", id: "12" },
      ],
    },
    {
      caption: "13 – 20",
      items: [
        { de: "dreizehn", id: "13" },
        { de: "vierzehn", id: "14" },
        { de: "fünfzehn", id: "15" },
        { de: "sechzehn", id: "16" },
        { de: "siebzehn", id: "17" },
        { de: "achtzehn", id: "18" },
        { de: "neunzehn", id: "19" },
        { de: "zwanzig", id: "20" },
      ],
    },
    {
      caption: "Puluhan & besar",
      items: [
        { de: "einundzwanzig", id: "21", hint: "pola: satuan + und + puluhan" },
        { de: "dreißig", id: "30" },
        { de: "vierzig", id: "40" },
        { de: "fünfzig", id: "50" },
        { de: "hundert", id: "100" },
        { de: "tausend", id: "1000" },
      ],
    },
  ],
  exercises: [
    {
      question: "Angka 'zwölf' artinya…",
      options: ["2", "12", "20"],
      answer: "12",
    },
    {
      question: "Bahasa Jerman untuk 21 adalah…",
      options: ["zwanzigeins", "einundzwanzig", "zwanzigundein"],
      answer: "einundzwanzig",
    },
    {
      question: "Angka 'dreißig' adalah…",
      options: ["13", "30", "33"],
      answer: "30",
    },
  ],
};
```

- [ ] **Step 3: Buat konten Hari, Bulan & Musim**

Create `content/basics/wochentage-monate.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const wochentageMonate: BasicsTopic = {
  id: "wochentage-monate",
  title: "Hari, Bulan & Musim",
  level: "A1",
  order: 4,
  icon: "📅",
  intro:
    "Nama **hari (Wochentage)**, **bulan (Monate)**, dan **musim (Jahreszeiten)** dipakai untuk membuat janji, menyebut tanggal, dan bercerita. Semua kata ini berjenis maskulin (*der*).",
  groups: [
    {
      caption: "Hari (Wochentage)",
      items: [
        { de: "Montag", id: "Senin" },
        { de: "Dienstag", id: "Selasa" },
        { de: "Mittwoch", id: "Rabu" },
        { de: "Donnerstag", id: "Kamis" },
        { de: "Freitag", id: "Jumat" },
        { de: "Samstag", id: "Sabtu" },
        { de: "Sonntag", id: "Minggu" },
      ],
    },
    {
      caption: "Bulan (Monate)",
      items: [
        { de: "Januar", id: "Januari" },
        { de: "Februar", id: "Februari" },
        { de: "März", id: "Maret" },
        { de: "April", id: "April" },
        { de: "Mai", id: "Mei" },
        { de: "Juni", id: "Juni" },
        { de: "Juli", id: "Juli" },
        { de: "August", id: "Agustus" },
        { de: "September", id: "September" },
        { de: "Oktober", id: "Oktober" },
        { de: "November", id: "November" },
        { de: "Dezember", id: "Desember" },
      ],
    },
    {
      caption: "Musim (Jahreszeiten)",
      items: [
        { de: "der Frühling", id: "musim semi" },
        { de: "der Sommer", id: "musim panas" },
        { de: "der Herbst", id: "musim gugur" },
        { de: "der Winter", id: "musim dingin" },
      ],
    },
  ],
  exercises: [
    {
      question: "'Mittwoch' adalah hari…",
      options: ["Selasa", "Rabu", "Kamis"],
      answer: "Rabu",
    },
    {
      question: "Bulan 'März' artinya…",
      options: ["Mei", "Maret", "Maart"],
      answer: "Maret",
    },
    {
      question: "'der Sommer' adalah musim…",
      options: ["panas", "dingin", "gugur"],
      answer: "panas",
    },
  ],
};
```

- [ ] **Step 4: Buat konten Waktu / Jam**

Create `content/basics/uhrzeit.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const uhrzeit: BasicsTopic = {
  id: "uhrzeit",
  title: "Waktu / Jam",
  level: "A1",
  order: 5,
  icon: "🕐",
  intro:
    "Untuk menanyakan waktu, gunakan **\"Wie spät ist es?\"** (Jam berapa sekarang?). Dalam percakapan sehari-hari dipakai bentuk informal dengan **nach** (lewat) dan **vor** (kurang). Ingat: **halb** menunjuk setengah menuju jam *berikutnya* (mis. *halb vier* = 03.30).",
  groups: [
    {
      caption: "Pertanyaan & dasar",
      items: [
        { de: "Wie spät ist es?", id: "Jam berapa sekarang?" },
        { de: "Es ist drei Uhr.", id: "Pukul tiga." },
        { de: "Es ist Mittag.", id: "Tengah hari (12.00)" },
        { de: "Es ist Mitternacht.", id: "Tengah malam (00.00)" },
      ],
    },
    {
      caption: "Jam (informal)",
      items: [
        { de: "Es ist halb vier.", id: "Pukul setengah empat (03.30)", hint: "halb = setengah menuju jam berikutnya" },
        { de: "Es ist Viertel nach drei.", id: "Pukul tiga lewat seperempat (03.15)" },
        { de: "Es ist Viertel vor vier.", id: "Pukul empat kurang seperempat (03.45)" },
        { de: "Es ist zehn nach drei.", id: "Pukul tiga lewat sepuluh (03.10)" },
        { de: "Es ist fünf vor vier.", id: "Pukul empat kurang lima (03.55)" },
      ],
    },
  ],
  exercises: [
    {
      question: "Cara menanyakan jam berapa…",
      options: ["Wie geht's?", "Wie spät ist es?", "Wie heißt du?"],
      answer: "Wie spät ist es?",
    },
    {
      question: "'halb vier' menunjukkan pukul…",
      options: ["04.30", "03.30", "03.15"],
      answer: "03.30",
    },
    {
      question: "Kata 'vor' dalam penyebutan jam berarti…",
      options: ["lewat", "kurang", "tepat"],
      answer: "kurang",
    },
  ],
};
```

- [ ] **Step 5: Buat konten Warna**

Create `content/basics/farben.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const farben: BasicsTopic = {
  id: "farben",
  title: "Warna",
  level: "A1",
  order: 6,
  icon: "🎨",
  intro:
    "**Die Farben** (warna) sering dipakai untuk mendeskripsikan benda dan pakaian. Sebagian besar warna berfungsi sebagai kata sifat.",
  groups: [
    {
      caption: "Warna umum",
      items: [
        { de: "rot", id: "merah" },
        { de: "blau", id: "biru" },
        { de: "gelb", id: "kuning" },
        { de: "grün", id: "hijau" },
        { de: "schwarz", id: "hitam" },
        { de: "weiß", id: "putih" },
        { de: "orange", id: "oranye" },
        { de: "rosa", id: "merah muda" },
        { de: "lila", id: "ungu" },
        { de: "braun", id: "cokelat" },
        { de: "grau", id: "abu-abu" },
      ],
    },
  ],
  exercises: [
    {
      question: "'grün' artinya…",
      options: ["biru", "hijau", "kuning"],
      answer: "hijau",
    },
    {
      question: "Warna 'schwarz' adalah…",
      options: ["putih", "hitam", "abu-abu"],
      answer: "hitam",
    },
    {
      question: "Bahasa Jerman untuk 'merah' adalah…",
      options: ["rot", "rosa", "grau"],
      answer: "rot",
    },
  ],
};
```

- [ ] **Step 6: Buat konten Salam & Perkenalan**

Create `content/basics/begruessung.ts`:

```ts
import type { BasicsTopic } from "@/content/basics-types";

export const begruessung: BasicsTopic = {
  id: "begruessung",
  title: "Salam & Perkenalan",
  level: "A1",
  order: 7,
  icon: "👋",
  intro:
    "Frasa **salam (Begrüßung)** dan **perkenalan (Vorstellung)** adalah hal pertama yang dipakai saat bertemu orang. Perhatikan perbedaan sapaan informal (**Tschüss**) dan formal (**Auf Wiedersehen**).",
  groups: [
    {
      caption: "Salam & frasa penting",
      items: [
        { de: "Hallo", id: "Halo" },
        { de: "Guten Morgen", id: "Selamat pagi" },
        { de: "Guten Tag", id: "Selamat siang" },
        { de: "Guten Abend", id: "Selamat malam (sapaan)" },
        { de: "Gute Nacht", id: "Selamat tidur" },
        { de: "Tschüss", id: "Sampai jumpa (informal)" },
        { de: "Auf Wiedersehen", id: "Sampai jumpa (formal)" },
        { de: "Wie geht's?", id: "Apa kabar?" },
        { de: "Danke", id: "Terima kasih" },
        { de: "Bitte", id: "Sama-sama / silakan" },
        { de: "Entschuldigung", id: "Maaf / permisi" },
      ],
    },
    {
      caption: "Perkenalan diri",
      items: [
        { de: "Ich heiße Anna.", id: "Nama saya Anna." },
        { de: "Wie heißt du?", id: "Siapa namamu?" },
        { de: "Ich komme aus Indonesien.", id: "Saya berasal dari Indonesia." },
        { de: "Woher kommst du?", id: "Kamu berasal dari mana?" },
        { de: "Freut mich.", id: "Senang berkenalan." },
        { de: "Ich bin zwanzig Jahre alt.", id: "Saya berumur dua puluh tahun." },
      ],
    },
  ],
  exercises: [
    {
      question: "Sapaan perpisahan yang formal adalah…",
      options: ["Tschüss", "Auf Wiedersehen", "Hallo"],
      answer: "Auf Wiedersehen",
    },
    {
      question: "'Wie geht's?' artinya…",
      options: ["Siapa namamu?", "Apa kabar?", "Dari mana kamu?"],
      answer: "Apa kabar?",
    },
    {
      question: "Untuk menyebut nama sendiri, gunakan…",
      options: ["Ich heiße…", "Ich komme…", "Ich bin … alt"],
      answer: "Ich heiße…",
    },
  ],
};
```

- [ ] **Step 7: Daftarkan semua topik di registry**

Replace the contents of `content/basics.ts` with:

```ts
import type { BasicsTopic } from "@/content/basics-types";
import { alphabet } from "@/content/basics/alphabet";
import { aussprache } from "@/content/basics/aussprache";
import { zahlen } from "@/content/basics/zahlen";
import { wochentageMonate } from "@/content/basics/wochentage-monate";
import { uhrzeit } from "@/content/basics/uhrzeit";
import { farben } from "@/content/basics/farben";
import { begruessung } from "@/content/basics/begruessung";

const BASICS: BasicsTopic[] = [
  alphabet,
  aussprache,
  zahlen,
  wochentageMonate,
  uhrzeit,
  farben,
  begruessung,
];

export function getAllBasics(): BasicsTopic[] {
  return [...BASICS].sort((a, b) => a.order - b.order);
}

export function getBasic(id: string): BasicsTopic | undefined {
  return BASICS.find((t) => t.id === id);
}
```

- [ ] **Step 8: Jalankan tes, pastikan lulus**

Run: `npm test -- tests/basics.test.ts`
Expected: PASS — sekarang menguji 7 topik.

- [ ] **Step 9: Commit**

```bash
git add content/basics/ content/basics.ts
git commit -m "feat: 6 topik fondasi Grundlagen sisanya (aussprache, zahlen, dst)"
```

---

## Task 3: Komponen BasicsGrid

**Files:**
- Create: `components/BasicsGrid.tsx`
- Test: `tests/basicsGrid.test.tsx`

- [ ] **Step 1: Tulis tes yang gagal**

Create `tests/basicsGrid.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BasicsGrid } from "@/components/BasicsGrid";
import type { BasicsGroup } from "@/content/basics-types";

const groups: BasicsGroup[] = [
  {
    caption: "Contoh",
    items: [
      { de: "Hallo", id: "Halo" },
      { de: "Danke", id: "Terima kasih", hint: "dang-keh" },
    ],
  },
];

describe("BasicsGrid", () => {
  it("menampilkan caption grup dan teks tiap item", () => {
    render(<BasicsGrid groups={groups} />);
    expect(screen.getByText("Contoh")).toBeInTheDocument();
    expect(screen.getByText("Hallo")).toBeInTheDocument();
    expect(screen.getByText("Terima kasih")).toBeInTheDocument();
    expect(screen.getByText("dang-keh")).toBeInTheDocument();
  });

  it("menampilkan satu tombol audio per item", () => {
    render(<BasicsGrid groups={groups} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Jalankan tes, pastikan gagal**

Run: `npm test -- tests/basicsGrid.test.tsx`
Expected: FAIL — `Cannot find module '@/components/BasicsGrid'`.

- [ ] **Step 3: Buat komponen**

Create `components/BasicsGrid.tsx`:

```tsx
import { SpeakButton } from "@/components/SpeakButton";
import type { BasicsGroup } from "@/content/basics-types";

export function BasicsGrid({ groups }: { groups: BasicsGroup[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, gi) => (
        <div key={gi}>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-teal-deep">
            {group.caption}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {group.items.map((item, ii) => (
              <div
                key={ii}
                className="flex items-center justify-between gap-2 rounded-xl border border-teal-soft bg-white p-2.5"
              >
                <div className="min-w-0">
                  <b className="block truncate text-sm text-slate-900">{item.de}</b>
                  <span className="block truncate text-xs text-slate-400">{item.id}</span>
                  {item.hint && (
                    <span className="block truncate text-[10px] text-teal-deep">{item.hint}</span>
                  )}
                </div>
                <SpeakButton text={item.de} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Jalankan tes, pastikan lulus**

Run: `npm test -- tests/basicsGrid.test.tsx`
Expected: PASS (2 tes).

- [ ] **Step 5: Commit**

```bash
git add components/BasicsGrid.tsx tests/basicsGrid.test.tsx
git commit -m "feat: komponen BasicsGrid (kartu item + audio)"
```

---

## Task 4: Routing halaman Grundlagen

**Files:**
- Create: `app/grundlagen/layout.tsx`
- Create: `app/grundlagen/[topic]/page.tsx`
- Create: `app/grundlagen/page.tsx`

Catatan: `app/grundlagen/layout.tsx` memakai `AppSidebar` yang baru menerima prop `firstBasicsId` pada Task 5. Agar Task 4 bisa di-build sendiri, sementara kirim juga `firstBasicsId` di sini; prop tersebut akan ditambahkan ke `AppSidebar` di Task 5. Jalankan build penuh setelah Task 5.

- [ ] **Step 1: Buat layout**

Create `app/grundlagen/layout.tsx`:

```tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
import { AppSidebar } from "@/components/AppSidebar";

export default async function GrundlagenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const firstTopicId = getAllTopics()[0]?.id ?? "";
  const firstBasicsId = getAllBasics()[0]?.id ?? "";
  const email = user.email ?? "user";
  const userName = email.split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="lg:flex">
      <AppSidebar
        firstTopicId={firstTopicId}
        firstBasicsId={firstBasicsId}
        userInitial={userInitial}
        userName={userName}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Buat halaman topik**

Create `app/grundlagen/[topic]/page.tsx`:

```tsx
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getBasic, getAllBasics } from "@/content/basics";
import { statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";
import { TopicSidebar, type SidebarItem } from "@/components/TopicSidebar";
import { RichText } from "@/components/RichText";
import { BasicsGrid } from "@/components/BasicsGrid";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";

export function generateStaticParams() {
  return getAllBasics().map((t) => ({ topic: t.id }));
}

export default async function BasicsTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getBasic(topicId);
  if (!topic) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("user_progress")
    .select("topic_id, status")
    .eq("user_id", user.id);
  const rows = (data ?? []) as ProgressRow[];

  const topics = getAllBasics();
  const summary = summarizeFor(rows, topics.map((t) => t.id));
  const done = statusFor(rows, topic.id) === "selesai";

  const sidebarItems: SidebarItem[] = topics.map((t) => ({
    id: t.id,
    title: t.title,
    order: t.order,
    status: statusFor(rows, t.id),
  }));

  const idx = topics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;

  return (
    <div className="min-h-screen">
      <div className="flex">
        <TopicSidebar
          items={sidebarItems}
          activeId={topic.id}
          completed={summary.completed}
          total={summary.total}
        />

        <main className="mx-auto w-full max-w-xl px-5 py-6">
          <div className="mb-3 flex items-center justify-between">
            <Link href="/dashboard" className="text-sm font-semibold text-teal-deep">
              ← Dashboard
            </Link>
            <div className="flex gap-1.5">
              {prev ? (
                <Link
                  href={`/grundlagen/${prev.id}`}
                  className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95"
                >
                  ← Sebelumnya
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">
                  ← Sebelumnya
                </span>
              )}
              {next ? (
                <Link
                  href={`/grundlagen/${next.id}`}
                  className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95"
                >
                  Berikutnya →
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">
                  Berikutnya →
                </span>
              )}
            </div>
          </div>

          <h1 className="mb-4 text-xl font-extrabold text-slate-900">
            {topic.icon} {topic.title}
          </h1>

          <Section label="📖 Penjelasan">
            <RichText text={topic.intro} />
          </Section>

          <Section label="📋 Daftar">
            <BasicsGrid groups={topic.groups} />
          </Section>

          <Section label="✏️ Mini-Latihan">
            <MiniExercise exercises={topic.exercises} />
          </Section>

          <MarkCompleteButton topicId={topic.id} done={done} />

          {next && (
            <Link
              href={`/grundlagen/${next.id}`}
              className="mt-4 block rounded-xl border border-teal-soft bg-white p-3 text-center text-sm font-semibold text-teal-deep transition hover:bg-teal-bg"
            >
              Topik berikutnya: {next.icon} {next.title} →
            </Link>
          )}
        </main>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-3 rounded-2xl border border-teal-soft bg-white p-4">
      <span className="text-[11px] font-bold uppercase tracking-wide text-teal-deep">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </section>
  );
}
```

- [ ] **Step 3: Buat redirect index**

Create `app/grundlagen/page.tsx`:

```tsx
import { redirect } from "next/navigation";
import { getAllBasics } from "@/content/basics";

export default function GrundlagenIndex() {
  const first = getAllBasics()[0];
  redirect(first ? `/grundlagen/${first.id}` : "/dashboard");
}
```

- [ ] **Step 4: Commit**

```bash
git add app/grundlagen/
git commit -m "feat: routing & halaman topik Grundlagen"
```

---

## Task 5: Integrasi navigasi (sections, sidebar, layout)

**Files:**
- Modify: `lib/sections.ts`
- Modify: `components/AppSidebar.tsx`
- Modify: `app/dashboard/layout.tsx`
- Modify: `app/grammar/layout.tsx`

- [ ] **Step 1: Tambah entri section**

In `lib/sections.ts`, change the `SECTIONS` array so `grundlagen` is the first entry:

```ts
export const SECTIONS: Section[] = [
  { id: "grundlagen", label: "Grundlagen", icon: "🧱", href: "/grundlagen", available: true },
  { id: "grammar", label: "Grammar", icon: "📐", href: "/grammar", available: true },
  { id: "vocabulary", label: "Vocabulary", icon: "📚", href: null, available: false },
  { id: "listening", label: "Listening", icon: "🎧", href: null, available: false },
  { id: "review", label: "Review & Kuis", icon: "✅", href: null, available: false },
];
```

- [ ] **Step 2: Tambah prop & nav di AppSidebar**

In `components/AppSidebar.tsx`, update the component signature to accept `firstBasicsId`:

```tsx
export function AppSidebar({
  firstTopicId,
  firstBasicsId,
  userInitial,
  userName,
}: {
  firstTopicId: string;
  firstBasicsId: string;
  userInitial: string;
  userName: string;
}) {
```

Then replace the `NAV` array with (adds Grundlagen after Dashboard):

```tsx
  const NAV: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: "🏠", href: "/dashboard", available: true },
    { id: "grundlagen", label: "Grundlagen", icon: "🧱", href: `/grundlagen/${firstBasicsId}`, available: true },
    { id: "grammar", label: "Grammar", icon: "📐", href: `/grammar/${firstTopicId}`, available: true },
    { id: "vocabulary", label: "Vocabulary", icon: "📚", href: null, available: false },
    { id: "listening", label: "Listening", icon: "🎧", href: null, available: false },
    { id: "review", label: "Review & Quiz", icon: "✅", href: null, available: false },
  ];
```

Then update `isActive` to add the grundlagen case:

```tsx
  function isActive(id: string): boolean {
    if (id === "dashboard") return pathname === "/dashboard";
    if (id === "grundlagen") return pathname.startsWith("/grundlagen/");
    if (id === "grammar") return pathname.startsWith("/grammar/");
    return false;
  }
```

- [ ] **Step 3: Kirim firstBasicsId dari dashboard layout**

In `app/dashboard/layout.tsx`, add the import and prop. Add near the other content import:

```tsx
import { getAllBasics } from "@/content/basics";
```

After the `firstTopicId` line add:

```tsx
  const firstBasicsId = getAllBasics()[0]?.id ?? "";
```

Update the `<AppSidebar ... />` usage to include the new prop:

```tsx
      <AppSidebar
        firstTopicId={firstTopicId}
        firstBasicsId={firstBasicsId}
        userInitial={userInitial}
        userName={userName}
      />
```

- [ ] **Step 4: Kirim firstBasicsId dari grammar layout**

Apply the exact same three changes from Step 3 to `app/grammar/layout.tsx` (add the `getAllBasics` import, add the `firstBasicsId` const after `firstTopicId`, and add `firstBasicsId={firstBasicsId}` to the `<AppSidebar />` usage).

- [ ] **Step 5: Verifikasi build**

Run: `npm run build`
Expected: Build sukses tanpa error TypeScript (memastikan semua pemanggilan `AppSidebar` sudah mengirim `firstBasicsId`).

- [ ] **Step 6: Commit**

```bash
git add lib/sections.ts components/AppSidebar.tsx app/dashboard/layout.tsx app/grammar/layout.tsx
git commit -m "feat: navigasi Grundlagen di sidebar & sections"
```

---

## Task 6: Progress per-pilar + integrasi dashboard

**Files:**
- Modify: `lib/progress.ts`
- Test: `tests/progress.test.ts`
- Modify: `app/dashboard/page.tsx`
- Modify: `app/grammar/[topic]/page.tsx`

- [ ] **Step 1: Tulis tes untuk summarizeFor**

Append to `tests/progress.test.ts`:

```ts
import { summarizeFor } from "@/lib/progress";

describe("summarizeFor", () => {
  const rows = [
    { topic_id: "a", status: "selesai" as const },
    { topic_id: "b", status: "selesai" as const },
    { topic_id: "x", status: "selesai" as const },
    { topic_id: "c", status: "dipelajari" as const },
  ];

  it("hanya menghitung selesai yang id-nya termasuk dalam daftar", () => {
    const res = summarizeFor(rows, ["a", "b", "c"]);
    expect(res.completed).toBe(2);
    expect(res.total).toBe(3);
    expect(res.percent).toBe(67);
  });

  it("mengembalikan 0 saat daftar id kosong", () => {
    const res = summarizeFor(rows, []);
    expect(res).toEqual({ completed: 0, total: 0, percent: 0 });
  });
});
```

- [ ] **Step 2: Jalankan tes, pastikan gagal**

Run: `npm test -- tests/progress.test.ts`
Expected: FAIL — `summarizeFor is not exported` / not a function.

- [ ] **Step 3: Implementasi summarizeFor**

Append to `lib/progress.ts`:

```ts
/**
 * Seperti summarize(), tapi hanya menghitung topik yang id-nya ada
 * dalam daftar `ids` (untuk progress per-pilar).
 */
export function summarizeFor(rows: ProgressRow[], ids: string[]) {
  const idSet = new Set(ids);
  const completed = rows.filter(
    (r) => r.status === "selesai" && idSet.has(r.topic_id)
  ).length;
  const total = ids.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
```

- [ ] **Step 4: Jalankan tes, pastikan lulus**

Run: `npm test -- tests/progress.test.ts`
Expected: PASS.

- [ ] **Step 5: Pakai summarizeFor di halaman topik grammar**

In `app/grammar/[topic]/page.tsx`, change the import line:

```tsx
import { statusFor, summarize, type ProgressRow } from "@/lib/progress";
```

to:

```tsx
import { statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";
```

and change:

```tsx
  const summary = summarize(rows, topics.length);
```

to:

```tsx
  const summary = summarizeFor(rows, topics.map((t) => t.id));
```

- [ ] **Step 6: Integrasikan Grundlagen ke dashboard**

In `app/dashboard/page.tsx`:

(a) Add imports near the other content/lib imports:

```tsx
import { getAllBasics } from "@/content/basics";
```

and change the progress import to drop `summarize` and add `summarizeFor` (the old `summarize` becomes unused and would fail the Next.js lint step):

```tsx
import {
  statusFor,
  summarizeFor,
  weeklyActivity,
  calcStreak,
  completedTodayCount,
  type ProgressRow,
} from "@/lib/progress";
```

(b) Replace the existing line `const summary = summarize(rows, topics.length);` with the per-pillar block below (this removes the now-unused `summary`; the hero/`continueTopic` lines around it stay as-is):

```tsx
  const basicsTopics = getAllBasics();
  const grammarSummary = summarizeFor(rows, topics.map((t) => t.id));
  const basicsSummary = summarizeFor(rows, basicsTopics.map((t) => t.id));
  const overall = summarizeFor(rows, [
    ...topics.map((t) => t.id),
    ...basicsTopics.map((t) => t.id),
  ]);
  const continueBasics =
    basicsTopics.find((t) => statusFor(rows, t.id) !== "selesai") ??
    basicsTopics[basicsTopics.length - 1];
```

Note: after this, every previous reference to `summary.*` must be replaced — `grammarSummary` in the Materi Belajar grammar card (handled in step (d) via `sectionSummary`) and `overall` in the right-column stat cards (step (e)). Verify no bare `summary` remains in the file.

(c) In the "Materi Belajar" `SECTIONS.map(...)` block, change the `resolvedHref` line:

```tsx
                const resolvedHref =
                  s.id === "grammar" ? `/grammar/${continueTopic.id}` : s.href;
```

to:

```tsx
                const resolvedHref =
                  s.id === "grammar"
                    ? `/grammar/${continueTopic.id}`
                    : s.id === "grundlagen"
                    ? `/grundlagen/${continueBasics.id}`
                    : s.href;
                const sectionSummary =
                  s.id === "grammar"
                    ? grammarSummary
                    : s.id === "grundlagen"
                    ? basicsSummary
                    : null;
```

(d) In the same block, change the conditional that renders the progress bar. Replace:

```tsx
                      {s.id === "grammar" ? (
                        <>
                          <div className="mt-1.5 h-1 max-w-[180px] overflow-hidden rounded-full bg-teal-soft">
                            <div
                              className="h-full rounded-full bg-teal-brand"
                              style={{ width: `${summary.percent}%` }}
                            />
                          </div>
                          <small className="text-[10px] text-slate-400">
                            {summary.completed}/{summary.total} topik selesai
                          </small>
                        </>
                      ) : (
                        <small className="text-[10px] text-slate-400">Segera hadir</small>
                      )}
```

with:

```tsx
                      {sectionSummary ? (
                        <>
                          <div className="mt-1.5 h-1 max-w-[180px] overflow-hidden rounded-full bg-teal-soft">
                            <div
                              className="h-full rounded-full bg-teal-brand"
                              style={{ width: `${sectionSummary.percent}%` }}
                            />
                          </div>
                          <small className="text-[10px] text-slate-400">
                            {sectionSummary.completed}/{sectionSummary.total} topik selesai
                          </small>
                        </>
                      ) : (
                        <small className="text-[10px] text-slate-400">Segera hadir</small>
                      )}
```

(e) In the right-column stat cards, change the three usages so they reflect the combined total. Replace the `StatCard` "Total Topik" value and the "Progress Keseluruhan" block to use `overall` instead of `summary`:

- `<StatCard value={String(summary.completed)} label="Topik Selesai" ... />` → `value={String(overall.completed)}`
- `<StatCard value={String(summary.total)} label="Total Topik" ... />` → `value={String(overall.total)}`
- In the "Progress Keseluruhan" card, replace `{summary.percent}%` → `{overall.percent}%`, `{summary.completed} dari {summary.total}` → `{overall.completed} dari {overall.total}`, and the bar `style={{ width: \`${summary.percent}%\` }}` → `style={{ width: \`${overall.percent}%\` }}`.

Leave the hero "Lanjutkan Belajar" (which uses `continueTopic`/`summary`) unchanged.

- [ ] **Step 7: Verifikasi build & test**

Run: `npm run build && npm test`
Expected: Build sukses; semua tes lulus.

- [ ] **Step 8: Commit**

```bash
git add lib/progress.ts tests/progress.test.ts app/dashboard/page.tsx app/grammar/[topic]/page.tsx
git commit -m "feat: progress per-pilar & integrasi Grundlagen di dashboard"
```

---

## Task 7: Verifikasi akhir manual

**Files:** none (verifikasi)

- [ ] **Step 1: Jalankan seluruh tes**

Run: `npm test`
Expected: Semua file tes lulus (`content`, `basics`, `basicsGrid`, `miniExercise`, `progress`).

- [ ] **Step 2: Build produksi**

Run: `npm run build`
Expected: Sukses; route `/grundlagen` dan `/grundlagen/[topic]` muncul di output build.

- [ ] **Step 3: Jalankan & cek manual**

Run: `npm run dev` lalu buka di browser:
- `/dashboard` → ada kartu "Grundlagen" di "Materi Belajar" dengan progress bar; sidebar punya menu **Grundlagen**; "Total Topik" = 21 + 7 = 28.
- `/grundlagen` → redirect ke `/grundlagen/alphabet`.
- `/grundlagen/alphabet` → tampil kartu huruf, tombol 🔊 berbunyi (lafal Jerman), mini-kuis berfungsi, tombol "Tandai Selesai" mengarahkan ke dashboard dan menambah progress.
- Navigasi prev/next antar 7 topik berjalan.

- [ ] **Step 4: Commit (jika ada perbaikan)**

Jika langkah verifikasi menemukan perbaikan kecil, perbaiki lalu:

```bash
git add -A
git commit -m "fix: perbaikan kecil hasil verifikasi Grundlagen"
```

---

## Self-Review Notes

- **Spec coverage:** 7 topik (§2) → Task 1–2; model data (§3) → Task 1; routing (§4) → Task 4; komponen (§5) → Task 3 + reuse; registry (§6) → Task 1–2; navigasi & dashboard (§7) → Task 5–6; progress & kuis (§8) → reuse `user_progress` + `MiniExercise` (Task 4) + `summarizeFor` (Task 6); testing (§9) → Task 1, 3, 6; YAGNI (§10) dihormati (tanpa Vocabulary/SRS/audio file/ilustrasi).
- **Type consistency:** `BasicsTopic.groups`/`BasicsGroup.items`/`BasicsItem.{de,id,hint}` konsisten dipakai di registry, BasicsGrid, dan halaman topik. `summarizeFor(rows, ids)` dipakai sama di dashboard, halaman grammar, dan halaman grundlagen. Export `wochentageMonate` (camelCase) cocok dengan import di registry.
