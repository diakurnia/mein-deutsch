# Desain Teknis — Pilar Wortschatz

**Tanggal:** 2026-06-07
**Status:** Disetujui
**Dokumen terkait:** [PRD](../../PRD.md), [Desain MVP](2026-06-05-mein-deutsch-design.md), [Desain Grundlagen](2026-06-07-grundlagen-pillar-design.md)

---

## 1. Ringkasan

Pilar **Wortschatz** adalah pilar ketiga di Mein-Deutsch, berfokus pada hafalan kosakata bahasa Jerman A1. Tujuan: pengguna dapat menghafal kata, artikelnya (der/die/das), pelafalan, bentuk plural, konjugasi dasar (untuk Verb), dan memahami konteks penggunaan melalui contoh kalimat.

**Scope awal:** 3 tema pertama — Familie, Essen & Trinken, Wohnen — masing-masing 15–20 kata.

---

## 2. Arsitektur Konten

### Struktur file

```
content/
  vocab-types.ts          # Tipe TypeScript untuk pilar Wortschatz
  vocab.ts                # Registry: getAllVocab(), getVocab(id)
  vocab/
    familie.ts
    essen-trinken.ts
    wohnen.ts
```

### Tipe Data

```typescript
// content/vocab-types.ts

export type NomenItem = {
  wortart: 'Nomen';
  de: string;           // kata tanpa artikel, e.g. "Brot"
  artikel: 'der' | 'die' | 'das';
  plural: string | null; // e.g. "die Brote", null jika tidak ada plural
  translation: string;  // arti dalam bahasa Indonesia
  speakText?: string;   // override teks TTS jika perlu
};

export type VerbItem = {
  wortart: 'Verb';
  de: string;           // infinitiv, e.g. "essen"
  translation: string;
  ich: string;          // e.g. "esse"
  erSie: string;        // e.g. "isst"
  irregular: boolean;   // true = tampilkan ⚡
  trennbar: boolean;    // true = tampilkan badge trennbar
  speakText?: string;
};

export type AdjektivItem = {
  wortart: 'Adjektiv';
  de: string;           // e.g. "lecker"
  translation: string;
  example: string;      // kalimat contoh singkat, e.g. "Das Essen ist lecker."
  speakText?: string;
};

export type VocabItem = NomenItem | VerbItem | AdjektivItem;

export type VocabExercise = {
  question: string;
  options: string[];
  answer: string;
};

export type VocabTopic = {
  id: string;           // slug URL, e.g. "familie"
  order: number;        // urutan di sidebar
  title: string;        // judul Jerman, e.g. "Familie"
  icon: string;         // emoji
  intro: string;        // penjelasan singkat bahasa Indonesia
  items: VocabItem[];   // 15–20 kata, campuran Nomen/Verb/ADJ
  examples: VocabExample[]; // kalimat contoh dengan highlight kata kunci
  exercises: VocabExercise[];
};

export type VocabExample = {
  de: string;           // kalimat Jerman, gunakan **kata** untuk mark highlight
                        // e.g. "Ich esse **das Brot** mit **der Butter**."
  id: string;           // terjemahan Indonesia
};
// Komponen render VocabExample akan parse **...** dan warnai sesuai artikel
// yang terdeteksi (der/die/das) di dalam tanda **.
```

### Distribusi kata per tema

| Wortart | Jumlah | Keterangan |
|---|---|---|
| Nomen | 12 | Mendominasi karena punya artikel + plural |
| Verb | 4–5 | Termasuk 1–2 Verb irregular / trennbar |
| ADJ | 2–3 | Kata sifat paling umum dalam tema |
| **Total** | **15–20** | Per tema |

---

## 3. Tampilan Kartu (VocabCard)

Kartu bersifat **adaptif** — konten bawah kartu menyesuaikan `wortart`.

### Sistem warna artikel

| Artikel | Warna border | Badge background | Teks badge |
|---|---|---|---|
| `der` | `#60a5fa` (biru) | `#eff6ff` | `#2563eb` |
| `die` | `#f472b6` (pink) | `#fdf2f8` | `#db2777` |
| `das` | `#fbbf24` (kuning) | `#fffbeb` | `#d97706` |

### Label Wortart (pojok kanan atas)

| Wortart | Label | Warna |
|---|---|---|
| Nomen | `NOMEN` | hijau (`#16a34a` / bg `#f0fdf4`) |
| Verb | `VERB` | amber (`#d97706` / bg `#fef3c7`) |
| Adjektiv | `ADJ` | ungu (`#7c3aed` / bg `#f5f3ff`) |

### Konten per jenis kartu

**Nomen:**
```
[NOMEN]         ← pojok kanan atas
[der/die/das]   ← badge warna
Wort            ← kata besar
arti            ← kecil abu-abu
[🔊]
————————————
Pl.  die Brote  ← teks kecil, atau "—" jika tidak ada
```

**Verb:**
```
[VERB]          ← pojok kanan atas
[trennbar]      ← badge amber, hanya jika trennbar
Wort            ← kata besar
arti            ← kecil abu-abu
[🔊]
————————————
ich esse | er isst ⚡  ← ⚡ hanya jika irregular
```

**ADJ:**
```
[ADJ]           ← pojok kanan atas
Wort            ← kata besar
arti            ← kecil abu-abu
[🔊]
————————————
"Das Essen ist lecker."  ← kalimat contoh singkat, italic
```

---

## 4. Halaman Topik (`/wortschatz/[topic]`)

Struktur halaman mengikuti pola Grundlagen:

```
← Dashboard          [← Sebelumnya] [Berikutnya →]

🍽️ Essen & Trinken

┌─────────────────────────────────────┐
│ 📋 KOSAKATA                          │
│ Legend: der=biru · die=pink · das=kuning │
│ [Grid 3 kolom kartu adaptif]        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 💬 CONTOH KALIMAT                    │
│ Kalimat dengan kata kunci berwarna  │
│ sesuai artikel (otomatis highlight) │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ✏️ MINI-LATIHAN                      │
│ Pilihan ganda: artikel & plural     │
└─────────────────────────────────────┘

[✓ Tandai Selesai]
[Topik berikutnya: 🏠 Wohnen →]
```

### Routing

| Path | Keterangan |
|---|---|
| `/wortschatz` | Redirect ke topik pertama |
| `/wortschatz/[topic]` | Halaman topik |

---

## 5. Komponen Baru

| Komponen | Lokasi | Fungsi |
|---|---|---|
| `VocabGrid` | `components/VocabGrid.tsx` | Grid 3 kolom kartu adaptif |
| `VocabCard` | `components/VocabCard.tsx` | Satu kartu — render berbeda per wortart |

`VocabGrid` menerima `items: VocabItem[]` dan merender `VocabCard` per item.
`VocabCard` switch berdasarkan `item.wortart` untuk menentukan konten bawah kartu.

Komponen lama yang dipakai ulang: `SpeakButton`, `MiniExercise`, `MarkCompleteButton`, `TopicSidebar`.

---

## 6. Perubahan yang Diperlukan

### `lib/sections.ts`
Aktifkan Wortschatz:
```ts
{ id: "vocabulary", label: "Wortschatz", icon: "📚", href: "/wortschatz", available: true }
```

### `components/AppSidebar.tsx`
Tambah `firstVocabId` prop, isi href ke `/wortschatz/${firstVocabId}`.

### `app/wortschatz/`
Buat struktur folder:
```
app/wortschatz/
  page.tsx        # redirect ke topik pertama
  layout.tsx      # AppSidebar + children
  [topic]/
    page.tsx      # halaman topik
```

### `user_progress`
Tidak ada perubahan skema — `topic_id` Wortschatz menggunakan slug unik (e.g. `vocab-familie`) yang tidak bentrok dengan Grammar dan Grundlagen.

---

## 7. Mini-Latihan

Dua tipe soal per tema:

1. **Pilihan artikel** — `"___ Apfel ist frisch." → der / die / das`
2. **Pilihan plural** — `"Apa plural dari das Ei?" → die Eis / die Eier / die Eie`
3. **Pilihan arti** — `"Apa arti lecker?" → enak / mahal / cepat`

Minimum 4 soal per topik, menggunakan komponen `MiniExercise` yang sudah ada.

---

## 8. File Test

| File | Yang diuji |
|---|---|
| `tests/vocab.test.ts` | Registry: urutan, answer-in-options, getVocab |
| `tests/vocabGrid.test.tsx` | VocabGrid: render Nomen/Verb/ADJ card |

---

## 9. Konvensi Tambah Tema

Menambah tema Wortschatz baru = buat file `content/vocab/<id>.ts`, import dan daftarkan di `content/vocab.ts`. Tidak perlu ubah komponen atau halaman.
