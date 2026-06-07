# Wortschatz Pillar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bangun pilar Wortschatz dengan 1 tema aktif (Familie) dan 9 tema terkunci sebagai placeholder, lengkap dengan kartu adaptif per Wortart, warna artikel, plural/konjugasi, dan integrasi penuh ke sidebar navigasi website.

**Architecture:** Konten disimpan di `content/vocab/` per tema. Registry `content/vocab.ts` mengekspos `getAllVocab()` (semua tema termasuk terkunci) dan `getVocab(id)`. Komponen `VocabCard` adaptif per `wortart`, dirender dalam `VocabGrid`. `TopicSidebar` diperluas dengan support item terkunci (🔒, non-link).

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind v4, Supabase Auth, Vitest + React Testing Library

---

## File Map

### Baru dibuat
| File | Tanggung jawab |
|---|---|
| `content/vocab-types.ts` | Semua tipe TypeScript pilar Wortschatz |
| `content/vocab.ts` | Registry: `getAllVocab()`, `getVocab(id)` |
| `content/vocab/familie.ts` | Tema 1 — data lengkap 18 kata |
| `content/vocab/essen-trinken.ts` | Tema 2 — placeholder terkunci |
| `content/vocab/wohnen.ts` | Tema 3 — placeholder terkunci |
| `content/vocab/beruf-arbeit.ts` | Tema 4 — placeholder terkunci |
| `content/vocab/freizeit-hobbys.ts` | Tema 5 — placeholder terkunci |
| `content/vocab/koerper-gesundheit.ts` | Tema 6 — placeholder terkunci |
| `content/vocab/kleidung.ts` | Tema 7 — placeholder terkunci |
| `content/vocab/stadt-verkehr.ts` | Tema 8 — placeholder terkunci |
| `content/vocab/einkaufen.ts` | Tema 9 — placeholder terkunci |
| `content/vocab/schule-lernen.ts` | Tema 10 — placeholder terkunci |
| `components/VocabCard.tsx` | Satu kartu adaptif (Nomen/Verb/ADJ) |
| `components/VocabGrid.tsx` | Grid 3-kolom dari VocabCard |
| `app/wortschatz/page.tsx` | Redirect ke tema pertama yang tersedia |
| `app/wortschatz/layout.tsx` | AppSidebar + children wrapper |
| `app/wortschatz/[topic]/page.tsx` | Halaman detail tema |
| `tests/vocab.test.ts` | Test registry |
| `tests/vocabGrid.test.tsx` | Test VocabGrid render |

### Dimodifikasi
| File | Perubahan |
|---|---|
| `lib/sections.ts` | Set `available: true`, `href: "/wortschatz"` untuk Wortschatz |
| `components/TopicSidebar.tsx` | Tambah `locked?: boolean` ke `SidebarItem`, render 🔒 non-link |
| `components/AppSidebar.tsx` | Tambah `firstVocabId` prop, isi href Wortschatz |

---

## Task 1: Tipe Data

**Files:**
- Create: `content/vocab-types.ts`

- [ ] **Step 1: Buat file tipe**

```typescript
// content/vocab-types.ts

export type NomenItem = {
  wortart: 'Nomen';
  de: string;
  artikel: 'der' | 'die' | 'das';
  plural: string | null;
  translation: string;
  speakText?: string;
};

export type VerbItem = {
  wortart: 'Verb';
  de: string;
  translation: string;
  ich: string;
  erSie: string;
  irregular: boolean;
  trennbar: boolean;
  speakText?: string;
};

export type AdjektivItem = {
  wortart: 'Adjektiv';
  de: string;
  translation: string;
  example: string;
  speakText?: string;
};

export type VocabItem = NomenItem | VerbItem | AdjektivItem;

export type VocabExercise = {
  question: string;
  options: string[];
  answer: string;
};

export type VocabExample = {
  de: string;   // gunakan **kata** untuk highlight, e.g. "Ich esse **das Brot**."
  id: string;
};

export type VocabTopic = {
  id: string;
  order: number;
  title: string;
  icon: string;
  available: boolean;
  intro: string;
  items: VocabItem[];
  examples: VocabExample[];
  exercises: VocabExercise[];
};
```

- [ ] **Step 2: Commit**

```bash
git add content/vocab-types.ts
git commit -m "feat(wortschatz): tambah tipe data VocabTopic"
```

---

## Task 2: Konten Familie (tema aktif)

**Files:**
- Create: `content/vocab/familie.ts`

- [ ] **Step 1: Buat file konten Familie**

```typescript
// content/vocab/familie.ts
import type { VocabTopic } from '@/content/vocab-types';

export const familie: VocabTopic = {
  id: 'familie',
  order: 1,
  title: 'Familie',
  icon: '👨‍👩‍👧',
  available: true,
  intro: 'Pelajari kosakata seputar keluarga dalam bahasa Jerman. Perhatikan artikel (der/die/das) dan bentuk pluralnya — keduanya harus dihafal bersama kata bendanya.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Mutter',      artikel: 'die', plural: 'die Mütter',      translation: 'ibu' },
    { wortart: 'Nomen', de: 'Vater',       artikel: 'der', plural: 'die Väter',       translation: 'ayah' },
    { wortart: 'Nomen', de: 'Kind',        artikel: 'das', plural: 'die Kinder',      translation: 'anak' },
    { wortart: 'Nomen', de: 'Schwester',   artikel: 'die', plural: 'die Schwestern',  translation: 'saudara perempuan' },
    { wortart: 'Nomen', de: 'Bruder',      artikel: 'der', plural: 'die Brüder',      translation: 'saudara laki-laki' },
    { wortart: 'Nomen', de: 'Großmutter',  artikel: 'die', plural: 'die Großmütter', translation: 'nenek', speakText: 'Großmutter' },
    { wortart: 'Nomen', de: 'Großvater',   artikel: 'der', plural: 'die Großväter',  translation: 'kakek', speakText: 'Großvater' },
    { wortart: 'Nomen', de: 'Familie',     artikel: 'die', plural: 'die Familien',   translation: 'keluarga' },
    { wortart: 'Nomen', de: 'Mann',        artikel: 'der', plural: 'die Männer',     translation: 'suami / pria' },
    { wortart: 'Nomen', de: 'Frau',        artikel: 'die', plural: 'die Frauen',     translation: 'istri / wanita' },
    { wortart: 'Nomen', de: 'Baby',        artikel: 'das', plural: 'die Babys',      translation: 'bayi' },
    { wortart: 'Nomen', de: 'Sohn',        artikel: 'der', plural: 'die Söhne',      translation: 'anak laki-laki' },
    // Verb (4)
    { wortart: 'Verb', de: 'heißen',  translation: 'bernama',      ich: 'heiße',  erSie: 'heißt',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'haben',   translation: 'memiliki',     ich: 'habe',   erSie: 'hat',    irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'wohnen',  translation: 'tinggal',      ich: 'wohne',  erSie: 'wohnt',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kommen',  translation: 'berasal dari / datang', ich: 'komme', erSie: 'kommt', irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'groß',  translation: 'besar / tinggi', example: 'Die Familie ist groß.' },
    { wortart: 'Adjektiv', de: 'klein', translation: 'kecil',          example: 'Das Kind ist klein.' },
  ],

  examples: [
    { de: '**Die Mutter** kocht das Essen.', id: 'Ibu memasak makanan.' },
    { de: '**Der Vater** kommt aus Berlin.', id: 'Ayah berasal dari Berlin.' },
    { de: '**Das Kind** ist klein.', id: 'Anak itu kecil.' },
    { de: 'Ich habe eine große **Familie**.', id: 'Saya punya keluarga yang besar.' },
  ],

  exercises: [
    {
      question: '„___ Kind spielt im Garten." — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '„___ Frau heißt Maria." — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari „die Mutter"?',
      options: ['die Mutter', 'die Mütter', 'die Muttern'],
      answer: 'die Mütter',
    },
    {
      question: 'Apa arti kata kerja „wohnen"?',
      options: ['bekerja', 'tinggal', 'makan'],
      answer: 'tinggal',
    },
  ],
};
```

- [ ] **Step 2: Commit**

```bash
git add content/vocab/familie.ts
git commit -m "feat(wortschatz): tambah konten tema Familie"
```

---

## Task 3: Placeholder 9 Tema Terkunci

**Files:**
- Create: `content/vocab/essen-trinken.ts`, `content/vocab/wohnen.ts`, `content/vocab/beruf-arbeit.ts`, `content/vocab/freizeit-hobbys.ts`, `content/vocab/koerper-gesundheit.ts`, `content/vocab/kleidung.ts`, `content/vocab/stadt-verkehr.ts`, `content/vocab/einkaufen.ts`, `content/vocab/schule-lernen.ts`

- [ ] **Step 1: Buat `content/vocab/essen-trinken.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const essenTrinken: VocabTopic = {
  id: 'essen-trinken',
  order: 2,
  title: 'Essen & Trinken',
  icon: '🍽️',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 2: Buat `content/vocab/wohnen.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const wohnen: VocabTopic = {
  id: 'wohnen',
  order: 3,
  title: 'Wohnen',
  icon: '🏠',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 3: Buat `content/vocab/beruf-arbeit.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const berufArbeit: VocabTopic = {
  id: 'beruf-arbeit',
  order: 4,
  title: 'Beruf & Arbeit',
  icon: '💼',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 4: Buat `content/vocab/freizeit-hobbys.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const freizeitHobbys: VocabTopic = {
  id: 'freizeit-hobbys',
  order: 5,
  title: 'Freizeit & Hobbys',
  icon: '🎨',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 5: Buat `content/vocab/koerper-gesundheit.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const koerperGesundheit: VocabTopic = {
  id: 'koerper-gesundheit',
  order: 6,
  title: 'Körper & Gesundheit',
  icon: '🏥',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 6: Buat `content/vocab/kleidung.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const kleidung: VocabTopic = {
  id: 'kleidung',
  order: 7,
  title: 'Kleidung',
  icon: '👕',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 7: Buat `content/vocab/stadt-verkehr.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const stadtVerkehr: VocabTopic = {
  id: 'stadt-verkehr',
  order: 8,
  title: 'Stadt & Verkehr',
  icon: '🚌',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 8: Buat `content/vocab/einkaufen.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const einkaufen: VocabTopic = {
  id: 'einkaufen',
  order: 9,
  title: 'Einkaufen',
  icon: '🛒',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 9: Buat `content/vocab/schule-lernen.ts`**

```typescript
import type { VocabTopic } from '@/content/vocab-types';

export const schuleLernen: VocabTopic = {
  id: 'schule-lernen',
  order: 10,
  title: 'Schule & Lernen',
  icon: '📚',
  available: false,
  intro: '',
  items: [],
  examples: [],
  exercises: [],
};
```

- [ ] **Step 10: Commit**

```bash
git add content/vocab/
git commit -m "feat(wortschatz): tambah 9 placeholder tema terkunci"
```

---

## Task 4: Registry

**Files:**
- Create: `content/vocab.ts`

- [ ] **Step 1: Buat registry**

```typescript
// content/vocab.ts
import type { VocabTopic } from '@/content/vocab-types';
import { familie } from '@/content/vocab/familie';
import { essenTrinken } from '@/content/vocab/essen-trinken';
import { wohnen } from '@/content/vocab/wohnen';
import { berufArbeit } from '@/content/vocab/beruf-arbeit';
import { freizeitHobbys } from '@/content/vocab/freizeit-hobbys';
import { koerperGesundheit } from '@/content/vocab/koerper-gesundheit';
import { kleidung } from '@/content/vocab/kleidung';
import { stadtVerkehr } from '@/content/vocab/stadt-verkehr';
import { einkaufen } from '@/content/vocab/einkaufen';
import { schuleLernen } from '@/content/vocab/schule-lernen';

const VOCAB: VocabTopic[] = [
  familie,
  essenTrinken,
  wohnen,
  berufArbeit,
  freizeitHobbys,
  koerperGesundheit,
  kleidung,
  stadtVerkehr,
  einkaufen,
  schuleLernen,
];

/** Semua tema terurut — termasuk yang terkunci (untuk sidebar). */
export function getAllVocab(): VocabTopic[] {
  return [...VOCAB].sort((a, b) => a.order - b.order);
}

/** Hanya tema yang tersedia. */
export function getAvailableVocab(): VocabTopic[] {
  return getAllVocab().filter((t) => t.available);
}

/** Ambil satu tema berdasarkan id. Kembalikan undefined jika tidak ada atau terkunci. */
export function getVocab(id: string): VocabTopic | undefined {
  return VOCAB.find((t) => t.id === id && t.available);
}
```

- [ ] **Step 2: Commit**

```bash
git add content/vocab.ts
git commit -m "feat(wortschatz): tambah registry getAllVocab, getVocab"
```

---

## Task 5: Test Registry

**Files:**
- Create: `tests/vocab.test.ts`

- [ ] **Step 1: Tulis test yang gagal**

```typescript
// tests/vocab.test.ts
import { describe, it, expect } from 'vitest';
import { getAllVocab, getAvailableVocab, getVocab } from '@/content/vocab';

describe('getAllVocab', () => {
  it('mengembalikan 10 tema terurut berdasarkan order', () => {
    const all = getAllVocab();
    expect(all).toHaveLength(10);
    for (let i = 0; i < all.length - 1; i++) {
      expect(all[i].order).toBeLessThan(all[i + 1].order);
    }
  });

  it('tema pertama adalah familie', () => {
    expect(getAllVocab()[0].id).toBe('familie');
  });
});

describe('getAvailableVocab', () => {
  it('hanya mengembalikan tema yang available', () => {
    const available = getAvailableVocab();
    expect(available.length).toBeGreaterThan(0);
    available.forEach((t) => expect(t.available).toBe(true));
  });

  it('familie tersedia, essen-trinken tidak', () => {
    const ids = getAvailableVocab().map((t) => t.id);
    expect(ids).toContain('familie');
    expect(ids).not.toContain('essen-trinken');
  });
});

describe('getVocab', () => {
  it('mengembalikan topic yang tersedia', () => {
    const t = getVocab('familie');
    expect(t).toBeDefined();
    expect(t!.id).toBe('familie');
  });

  it('mengembalikan undefined untuk tema terkunci', () => {
    expect(getVocab('essen-trinken')).toBeUndefined();
  });

  it('mengembalikan undefined untuk id tidak ada', () => {
    expect(getVocab('tidak-ada')).toBeUndefined();
  });

  it('setiap jawaban latihan ada di pilihan', () => {
    const topic = getVocab('familie')!;
    topic.exercises.forEach((ex) => {
      expect(ex.options).toContain(ex.answer);
    });
  });

  it('tema familie memiliki 18 item', () => {
    const topic = getVocab('familie')!;
    expect(topic.items).toHaveLength(18);
  });

  it('tema familie memiliki item Nomen, Verb, dan Adjektiv', () => {
    const topic = getVocab('familie')!;
    const wortarten = topic.items.map((i) => i.wortart);
    expect(wortarten).toContain('Nomen');
    expect(wortarten).toContain('Verb');
    expect(wortarten).toContain('Adjektiv');
  });
});
```

- [ ] **Step 2: Jalankan — pastikan gagal**

```bash
npm test -- tests/vocab.test.ts
```

Expected: FAIL — `Cannot find module '@/content/vocab'`

- [ ] **Step 3: Jalankan ulang setelah Task 4 selesai — pastikan lulus**

```bash
npm test -- tests/vocab.test.ts
```

Expected: PASS semua 8 test

- [ ] **Step 4: Commit**

```bash
git add tests/vocab.test.ts
git commit -m "test(wortschatz): tambah test registry vocab"
```

---

## Task 6: Komponen VocabCard

**Files:**
- Create: `components/VocabCard.tsx`

- [ ] **Step 1: Buat VocabCard**

```tsx
// components/VocabCard.tsx
import type { VocabItem } from '@/content/vocab-types';
import { SpeakButton } from '@/components/SpeakButton';

const ARTIKEL_STYLE: Record<'der' | 'die' | 'das', { border: string; badge: string; text: string }> = {
  der: { border: 'border-blue-400',  badge: 'bg-blue-50 text-blue-700',   text: 'text-blue-700' },
  die: { border: 'border-pink-400',  badge: 'bg-pink-50 text-pink-700',   text: 'text-pink-700' },
  das: { border: 'border-amber-400', badge: 'bg-amber-50 text-amber-700', text: 'text-amber-700' },
};

const WORTART_STYLE: Record<string, string> = {
  Nomen:    'bg-green-50 text-green-700',
  Verb:     'bg-amber-50 text-amber-700',
  Adjektiv: 'bg-violet-50 text-violet-700',
};

const WORTART_LABEL: Record<string, string> = {
  Nomen:    'NOMEN',
  Verb:     'VERB',
  Adjektiv: 'ADJ',
};

export function VocabCard({ item }: { item: VocabItem }) {
  const borderClass =
    item.wortart === 'Nomen'
      ? ARTIKEL_STYLE[item.artikel].border
      : item.wortart === 'Verb'
      ? 'border-amber-400'
      : 'border-violet-300';

  return (
    <div className={`relative rounded-xl border-2 bg-white p-3 text-center ${borderClass}`}>
      {/* Wortart badge pojok kanan atas */}
      <span
        className={`absolute right-2 top-2 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${WORTART_STYLE[item.wortart]}`}
      >
        {WORTART_LABEL[item.wortart]}
      </span>

      {/* Konten atas */}
      {item.wortart === 'Nomen' && (
        <span
          className={`mb-1 inline-block rounded px-2 py-0.5 text-[10px] font-extrabold ${ARTIKEL_STYLE[item.artikel].badge}`}
        >
          {item.artikel}
        </span>
      )}

      {item.wortart === 'Verb' && item.trennbar && (
        <span className="mb-1 inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
          trennbar
        </span>
      )}

      <p className="mt-1 text-sm font-black text-slate-900">{item.de}</p>
      <p className="mb-2 text-[11px] text-slate-500">{item.translation}</p>

      <SpeakButton text={item.speakText ?? item.de} lang="de-DE" />

      {/* Konten bawah — adaptif per wortart */}
      <div className="mt-2 border-t border-dashed border-slate-100 pt-2">
        {item.wortart === 'Nomen' && (
          <div className="flex items-center justify-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wide text-slate-300">Pl.</span>
            {item.plural ? (
              <span className="text-[10px] font-bold text-slate-400">{item.plural}</span>
            ) : (
              <span className="text-[10px] italic text-slate-300">—</span>
            )}
          </div>
        )}

        {item.wortart === 'Verb' && (
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <div>
              <span className="font-bold text-amber-600">ich </span>
              <span className="text-slate-500">{item.ich}</span>
            </div>
            <div>
              <span className="font-bold text-amber-600">er </span>
              <span className={item.irregular ? 'font-bold text-amber-600' : 'text-slate-500'}>
                {item.erSie}{item.irregular ? ' ⚡' : ''}
              </span>
            </div>
          </div>
        )}

        {item.wortart === 'Adjektiv' && (
          <p className="text-[10px] italic text-slate-400">„{item.example}"</p>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/VocabCard.tsx
git commit -m "feat(wortschatz): tambah komponen VocabCard adaptif"
```

---

## Task 7: Komponen VocabGrid

**Files:**
- Create: `components/VocabGrid.tsx`

- [ ] **Step 1: Buat VocabGrid**

```tsx
// components/VocabGrid.tsx
import type { VocabItem } from '@/content/vocab-types';
import { VocabCard } from '@/components/VocabCard';

export function VocabGrid({ items }: { items: VocabItem[] }) {
  return (
    <div>
      {/* Legend artikel */}
      <div className="mb-3 flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-400" />der
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-pink-400" />die
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />das
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <VocabCard key={item.de} item={item} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/VocabGrid.tsx
git commit -m "feat(wortschatz): tambah komponen VocabGrid"
```

---

## Task 8: Test VocabGrid

**Files:**
- Create: `tests/vocabGrid.test.tsx`

- [ ] **Step 1: Tulis test**

```tsx
// tests/vocabGrid.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VocabGrid } from '@/components/VocabGrid';
import type { VocabItem } from '@/content/vocab-types';

const ITEMS: VocabItem[] = [
  { wortart: 'Nomen', de: 'Mutter', artikel: 'die', plural: 'die Mütter', translation: 'ibu' },
  { wortart: 'Verb',  de: 'haben',  translation: 'memiliki', ich: 'habe', erSie: 'hat', irregular: true, trennbar: false },
  { wortart: 'Adjektiv', de: 'groß', translation: 'besar', example: 'Die Familie ist groß.' },
];

describe('VocabGrid', () => {
  it('merender semua item', () => {
    render(<VocabGrid items={ITEMS} />);
    expect(screen.getByText('Mutter')).toBeDefined();
    expect(screen.getByText('haben')).toBeDefined();
    expect(screen.getByText('groß')).toBeDefined();
  });

  it('merender badge NOMEN untuk Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    expect(screen.getByText('NOMEN')).toBeDefined();
  });

  it('merender badge VERB untuk Verb', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText('VERB')).toBeDefined();
  });

  it('merender badge ADJ untuk Adjektiv', () => {
    render(<VocabGrid items={[ITEMS[2]]} />);
    expect(screen.getByText('ADJ')).toBeDefined();
  });

  it('merender artikel badge die pada Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    expect(screen.getByText('die')).toBeDefined();
  });

  it('merender plural Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    expect(screen.getByText('die Mütter')).toBeDefined();
  });

  it('merender konjugasi ich untuk Verb', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText('habe')).toBeDefined();
  });

  it('merender simbol irregular ⚡ untuk Verb irregular', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText(/⚡/)).toBeDefined();
  });

  it('merender contoh kalimat ADJ', () => {
    render(<VocabGrid items={[ITEMS[2]]} />);
    expect(screen.getByText('„Die Familie ist groß."')).toBeDefined();
  });

  it('merender tombol 🔊 untuk setiap item', () => {
    render(<VocabGrid items={ITEMS} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(ITEMS.length);
  });
});
```

- [ ] **Step 2: Jalankan — pastikan lulus**

```bash
npm test -- tests/vocabGrid.test.tsx
```

Expected: PASS semua 9 test

- [ ] **Step 3: Commit**

```bash
git add tests/vocabGrid.test.tsx
git commit -m "test(wortschatz): tambah test VocabGrid"
```

---

## Task 9: TopicSidebar — Support Item Terkunci

**Files:**
- Modify: `components/TopicSidebar.tsx`

- [ ] **Step 1: Tambah `locked` ke SidebarItem dan render 🔒**

Pada `components/TopicSidebar.tsx`, ubah tipe `SidebarItem` dan blok render item:

```typescript
// Ubah tipe (baris 7-12)
export type SidebarItem = {
  id: string;
  title: string;
  order: number;
  status: ProgressStatus;
  locked?: boolean;   // ← tambah ini
};
```

```tsx
// Ubah blok items.map (dalam <nav>) — ganti seluruh blok map:
{items.map((it) => {
  const isActive = it.id === activeId;

  if (it.locked) {
    return (
      <span
        key={it.id}
        className="flex cursor-default items-center gap-2 border-l-[3px] border-transparent px-3 py-2 text-xs text-slate-300"
      >
        <span className="w-4 shrink-0 text-[10px] text-slate-300">{it.order}</span>
        <span className="flex-1 leading-tight">{it.title}</span>
        <span className="shrink-0 text-[11px]">🔒</span>
      </span>
    );
  }

  return (
    <Link
      key={it.id}
      href={`${basePath}/${it.id}`}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-2 border-l-[3px] px-3 py-2 text-xs transition ${
        isActive
          ? "border-teal-brand bg-teal-bg font-bold text-teal-deep"
          : "border-transparent text-slate-600 hover:bg-teal-bg"
      }`}
    >
      <span className="w-4 shrink-0 text-[10px] text-slate-400">{it.order}</span>
      <span className="flex-1 leading-tight">{it.title}</span>
      <span className="shrink-0 text-[11px]">{BADGE[it.status]}</span>
    </Link>
  );
})}
```

- [ ] **Step 2: Jalankan semua test — pastikan tidak ada yang rusak**

```bash
npm test
```

Expected: PASS semua test yang ada sebelumnya

- [ ] **Step 3: Commit**

```bash
git add components/TopicSidebar.tsx
git commit -m "feat(wortschatz): TopicSidebar support item terkunci dengan 🔒"
```

---

## Task 10: AppSidebar — Tambah firstVocabId

**Files:**
- Modify: `components/AppSidebar.tsx`

- [ ] **Step 1: Tambah prop `firstVocabId` dan aktifkan link Wortschatz**

Pada `components/AppSidebar.tsx`:

```typescript
// Ubah signature fungsi (baris 14-21):
export function AppSidebar({
  firstTopicId,
  firstBasicsId,
  firstVocabId,   // ← tambah
  userInitial,
  userName,
}: {
  firstTopicId: string;
  firstBasicsId: string;
  firstVocabId: string;  // ← tambah
  userInitial: string;
  userName: string;
})
```

```typescript
// Ubah item vocabulary di array NAV (baris ~31):
{ id: "vocabulary", label: "Wortschatz", icon: "📚", href: `/wortschatz/${firstVocabId}`, available: true },
```

```typescript
// Tambah case isActive untuk vocabulary (dalam fungsi isActive):
if (id === "vocabulary") return pathname.startsWith("/wortschatz/");
```

- [ ] **Step 2: Commit**

```bash
git add components/AppSidebar.tsx
git commit -m "feat(wortschatz): AppSidebar tambah firstVocabId untuk link Wortschatz"
```

---

## Task 11: Sections.ts — Aktifkan Wortschatz

**Files:**
- Modify: `lib/sections.ts`

- [ ] **Step 1: Set available dan href**

Pada `lib/sections.ts`, ubah baris vocabulary:

```typescript
{ id: "vocabulary", label: "Wortschatz", icon: "📚", href: "/wortschatz", available: true },
```

- [ ] **Step 2: Commit**

```bash
git add lib/sections.ts
git commit -m "feat(wortschatz): aktifkan menu Wortschatz di sections"
```

---

## Task 12: Halaman App Wortschatz

**Files:**
- Create: `app/wortschatz/page.tsx`
- Create: `app/wortschatz/layout.tsx`
- Create: `app/wortschatz/[topic]/page.tsx`

- [ ] **Step 1: Buat `app/wortschatz/page.tsx` (redirect)**

```typescript
// app/wortschatz/page.tsx
import { redirect } from "next/navigation";
import { getAvailableVocab } from "@/content/vocab";

export default function WortschatzIndex() {
  const first = getAvailableVocab()[0];
  redirect(first ? `/wortschatz/${first.id}` : "/dashboard");
}
```

- [ ] **Step 2: Buat `app/wortschatz/layout.tsx`**

```tsx
// app/wortschatz/layout.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
import { getAvailableVocab } from "@/content/vocab";
import { AppSidebar } from "@/components/AppSidebar";

export default async function WortschatzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const firstTopicId = getAllTopics()[0]?.id ?? "";
  const firstBasicsId = getAllBasics()[0]?.id ?? "";
  const firstVocabId = getAvailableVocab()[0]?.id ?? "";
  const email = user.email ?? "user";
  const userName = email.split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="lg:flex">
      <AppSidebar
        firstTopicId={firstTopicId}
        firstBasicsId={firstBasicsId}
        firstVocabId={firstVocabId}
        userInitial={userInitial}
        userName={userName}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
```

- [ ] **Step 3: Buat `app/wortschatz/[topic]/page.tsx`**

```tsx
// app/wortschatz/[topic]/page.tsx
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllVocab, getAvailableVocab, getVocab } from "@/content/vocab";
import { statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";
import { TopicSidebar, type SidebarItem } from "@/components/TopicSidebar";
import { VocabGrid } from "@/components/VocabGrid";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";
import { RichText } from "@/components/RichText";

export function generateStaticParams() {
  return getAvailableVocab().map((t) => ({ topic: t.id }));
}

export default async function VocabTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getVocab(topicId);
  if (!topic) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("user_progress")
    .select("topic_id, status")
    .eq("user_id", user.id);
  const rows = (data ?? []) as ProgressRow[];

  const allTopics = getAllVocab();
  const availableTopics = getAvailableVocab();
  const summary = summarizeFor(rows, availableTopics.map((t) => t.id));
  const done = statusFor(rows, topic.id) === "selesai";

  const sidebarItems: SidebarItem[] = allTopics.map((t) => ({
    id: t.id,
    title: `${t.icon} ${t.title}`,
    order: t.order,
    status: statusFor(rows, t.id),
    locked: !t.available,
  }));

  const idx = availableTopics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? availableTopics[idx - 1] : null;
  const next = idx < availableTopics.length - 1 ? availableTopics[idx + 1] : null;

  return (
    <div className="min-h-screen">
      <div className="flex">
        <TopicSidebar
          items={sidebarItems}
          activeId={topic.id}
          completed={summary.completed}
          total={summary.total}
          basePath="/wortschatz"
          sectionLabel="Wortschatz A1"
        />

        <main className="mx-auto w-full max-w-xl px-5 py-6">
          <div className="mb-3 flex items-center justify-between">
            <Link href="/dashboard" className="text-sm font-semibold text-teal-deep">
              ← Dashboard
            </Link>
            <div className="flex gap-1.5">
              {prev ? (
                <Link href={`/wortschatz/${prev.id}`} className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95">
                  ← Sebelumnya
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">← Sebelumnya</span>
              )}
              {next ? (
                <Link href={`/wortschatz/${next.id}`} className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95">
                  Berikutnya →
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">Berikutnya →</span>
              )}
            </div>
          </div>

          <h1 className="mb-4 text-xl font-extrabold text-slate-900">
            {topic.icon} {topic.title}
          </h1>

          <Section label="📖 Penjelasan">
            <RichText text={topic.intro} />
          </Section>

          <Section label="📋 Kosakata">
            <VocabGrid items={topic.items} />
          </Section>

          {topic.examples.length > 0 && (
            <Section label="💬 Contoh Kalimat">
              <div className="flex flex-col gap-2">
                {topic.examples.map((ex, i) => (
                  <ExampleSentence key={i} de={ex.de} id={ex.id} />
                ))}
              </div>
            </Section>
          )}

          <Section label="✏️ Mini-Latihan">
            <MiniExercise exercises={topic.exercises} />
          </Section>

          <MarkCompleteButton topicId={topic.id} done={done} />

          {next && (
            <Link
              href={`/wortschatz/${next.id}`}
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

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-3 rounded-2xl border border-teal-soft bg-white p-4">
      <span className="text-[11px] font-bold uppercase tracking-wide text-teal-deep">{label}</span>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/** Parse **kata** → highlight berwarna sesuai artikel yang terdeteksi */
function ExampleSentence({ de, id }: { de: string; id: string }) {
  const parts = de.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="rounded-lg border-l-[3px] border-teal-brand bg-slate-50 px-3 py-2">
      <p className="text-sm italic text-slate-700">
        „{parts.map((part, i) => {
          if (!part.startsWith('**')) return <span key={i}>{part}</span>;
          const word = part.slice(2, -2);
          const colorClass = word.startsWith('der ') || word.startsWith('Der ')
            ? 'text-blue-600 font-bold not-italic'
            : word.startsWith('die ') || word.startsWith('Die ')
            ? 'text-pink-600 font-bold not-italic'
            : word.startsWith('das ') || word.startsWith('Das ')
            ? 'text-amber-600 font-bold not-italic'
            : 'text-teal-deep font-bold not-italic';
          return <span key={i} className={colorClass}>{word}</span>;
        })}"
      </p>
      <p className="mt-0.5 text-xs text-slate-400">{id}</p>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/wortschatz/
git commit -m "feat(wortschatz): tambah halaman layout, redirect, dan detail tema"
```

---

## Task 13: Update Layout yang Sudah Ada

Layout `app/grammar/layout.tsx` dan `app/grundlagen/layout.tsx` juga merender `AppSidebar`, sehingga perlu tambah prop `firstVocabId`.

**Files:**
- Modify: `app/grammar/layout.tsx`
- Modify: `app/grundlagen/layout.tsx`
- Modify: `app/dashboard/layout.tsx`

- [ ] **Step 1: Update `app/grammar/layout.tsx`**

Tambah import `getAvailableVocab` dan prop `firstVocabId`:

```tsx
// Tambah import (setelah import getAllBasics):
import { getAvailableVocab } from "@/content/vocab";

// Tambah di dalam fungsi, setelah firstBasicsId:
const firstVocabId = getAvailableVocab()[0]?.id ?? "";

// Tambah prop ke AppSidebar:
<AppSidebar
  firstTopicId={firstTopicId}
  firstBasicsId={firstBasicsId}
  firstVocabId={firstVocabId}   // ← tambah
  userInitial={userInitial}
  userName={userName}
/>
```

- [ ] **Step 2: Update `app/grundlagen/layout.tsx`** (perubahan identik dengan grammar)

```tsx
import { getAvailableVocab } from "@/content/vocab";
// ... dalam fungsi:
const firstVocabId = getAvailableVocab()[0]?.id ?? "";
// ... di AppSidebar:
firstVocabId={firstVocabId}
```

- [ ] **Step 3: Update `app/dashboard/layout.tsx`** (perubahan identik)

```tsx
import { getAvailableVocab } from "@/content/vocab";
// ... dalam fungsi:
const firstVocabId = getAvailableVocab()[0]?.id ?? "";
// ... di AppSidebar:
firstVocabId={firstVocabId}
```

- [ ] **Step 4: Jalankan build untuk cek tidak ada TypeScript error**

```bash
npm run build
```

Expected: build sukses tanpa error

- [ ] **Step 5: Commit**

```bash
git add app/grammar/layout.tsx app/grundlagen/layout.tsx app/dashboard/layout.tsx
git commit -m "feat(wortschatz): update layout yang ada agar sertakan firstVocabId"
```

---

## Task 14: Verifikasi Akhir

- [ ] **Step 1: Jalankan semua test**

```bash
npm test
```

Expected: PASS semua test (vocab.test.ts, vocabGrid.test.tsx, dan test lama)

- [ ] **Step 2: Jalankan dev server dan verifikasi manual**

```bash
npm run dev
```

Cek:
- [ ] `/wortschatz` redirect ke `/wortschatz/familie`
- [ ] Sidebar kiri menampilkan 10 tema, 9 dengan 🔒
- [ ] Grid kartu Familie tampil dengan warna artikel yang benar
- [ ] Badge NOMEN/VERB/ADJ muncul di tiap kartu
- [ ] Plural tampil di bawah kartu Nomen
- [ ] Konjugasi ich/er tampil di kartu Verb, ⚡ untuk haben
- [ ] Contoh kalimat tampil dengan highlight berwarna
- [ ] Mini-latihan berfungsi
- [ ] Tombol 🔊 berfungsi
- [ ] Tombol Tandai Selesai berfungsi
- [ ] Menu Wortschatz di AppSidebar aktif dan bisa diklik

- [ ] **Step 3: Commit akhir jika ada perbaikan kecil**

```bash
git add -p
git commit -m "fix(wortschatz): perbaikan hasil verifikasi manual"
```
