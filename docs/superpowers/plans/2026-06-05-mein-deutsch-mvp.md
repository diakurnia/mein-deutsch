# Mein-Deutsch MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun MVP website belajar grammar Jerman A1 (Pilar Grammar) dengan login multi-user, materi terstruktur, pengucapan audio, mini-latihan, dan tracking progress — dengan satu topik A1 lengkap sebagai target awal.

**Architecture:** Next.js (App Router) merender materi grammar yang disimpan sebagai data terstruktur di folder `content/`. Supabase menangani autentikasi dan menyimpan progress per pengguna. Render materi dipisah dari cek login (materi bisa dirender server-side tanpa login → siap SEO nanti); login hanya membungkus fitur progress. Pengucapan via Web Speech API browser (tanpa file audio).

**Tech Stack:** Next.js 15 (App Router, TypeScript), Tailwind CSS, Supabase (Auth + Postgres), Vitest + React Testing Library, Vercel (hosting).

---

## File Structure

```
mein-deutsch/
├── app/
│   ├── layout.tsx              # root layout + font + global styles
│   ├── page.tsx                # beranda / landing
│   ├── globals.css             # Tailwind + tema toska
│   ├── login/page.tsx          # halaman login
│   ├── grammar/page.tsx        # dashboard (daftar topik + progress)
│   └── grammar/[topic]/page.tsx# detail topik
├── components/
│   ├── TopicCard.tsx           # kartu topik di dashboard
│   ├── ProgressBar.tsx         # progress bar ringkasan
│   ├── SpeakButton.tsx         # tombol 🔊 (Web Speech API)
│   ├── Collapsible.tsx         # "Baca selengkapnya"
│   ├── MiniExercise.tsx        # mini-latihan interaktif
│   └── MarkCompleteButton.tsx  # tombol tandai selesai
├── content/
│   ├── types.ts                # tipe TypeScript untuk materi
│   ├── topics.ts               # loader + indeks topik
│   └── topics/
│       └── artikel-nominativ.ts# 1 topik A1 contoh (data)
├── lib/
│   ├── supabase/client.ts      # Supabase browser client
│   ├── supabase/server.ts      # Supabase server client
│   └── progress.ts             # helper baca/tulis progress
├── tests/
│   ├── content.test.ts         # uji loader & integritas data topik
│   ├── progress.test.ts        # uji logika ringkasan progress
│   └── miniExercise.test.tsx   # uji komponen mini-latihan
├── supabase/
│   └── schema.sql              # DDL tabel user_progress + RLS
├── .env.local.example          # contoh env var
├── CLAUDE.md                   # instruksi project
└── package.json
```

---

## Task 0: Scaffold proyek Next.js + Tailwind + testing

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `vitest.config.ts`, `tests/setup.ts`, `.gitignore`, `CLAUDE.md`

- [ ] **Step 1: Scaffold Next.js app di folder project**

Run (dari dalam folder project `mein-deutsch`):
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --no-turbopack --use-npm --yes
```
Expected: proyek Next.js + Tailwind terbentuk. Bila ditanya overwrite file (mis. `.gitignore`, `docs`), pilih agar **tidak menghapus** `docs/` dan `.superpowers/` — jika perlu, scaffold di folder kosong sementara lalu pindahkan. Pastikan `docs/` & `.git` tetap utuh.

- [ ] **Step 2: Pasang dependency testing & supabase**

Run:
```bash
npm install @supabase/supabase-js @supabase/ssr
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```
Expected: terpasang tanpa error.

- [ ] **Step 3: Konfigurasi Vitest**

Create `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

Create `tests/setup.ts`:
```ts
import "@testing-library/jest-dom";
```

- [ ] **Step 4: Tambah script test ke package.json**

Modify `package.json` — tambahkan ke bagian `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Verifikasi build & test dasar jalan**

Run:
```bash
npm run build && npm run test
```
Expected: build sukses; test melaporkan "no test files found" (belum ada test) — tidak error.

- [ ] **Step 6: Tulis CLAUDE.md project**

Create `CLAUDE.md`:
```markdown
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
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js + Tailwind + Vitest"
```

---

## Task 1: Tipe data materi & topik contoh

**Files:**
- Create: `content/types.ts`, `content/topics/artikel-nominativ.ts`, `content/topics.ts`
- Test: `tests/content.test.ts`

- [ ] **Step 1: Definisikan tipe materi**

Create `content/types.ts`:
```ts
export type GrammarTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type GrammarExample = {
  de: string;   // kalimat Jerman
  id: string;   // terjemahan Indonesia
};

export type GrammarExercise = {
  question: string;     // gunakan "___" sebagai tempat jawaban
  options: string[];
  answer: string;       // harus salah satu dari options
};

export type GrammarTopic = {
  id: string;           // slug, mis. "artikel-nominativ"
  title: string;
  level: string;        // mis. "A1"
  order: number;
  icon: string;         // emoji untuk kartu
  explanation: string;  // markdown sederhana (paragraf dipisah \n\n)
  notes: string;
  tables: GrammarTable[];
  examples: GrammarExample[];
  exercises: GrammarExercise[];
};
```

- [ ] **Step 2: Tulis test integritas data (failing dulu)**

Create `tests/content.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { getAllTopics, getTopic } from "@/content/topics";

describe("content topics", () => {
  it("mengembalikan minimal satu topik berurutan", () => {
    const topics = getAllTopics();
    expect(topics.length).toBeGreaterThan(0);
    const orders = topics.map((t) => t.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("setiap jawaban latihan ada di dalam options", () => {
    for (const t of getAllTopics()) {
      for (const ex of t.exercises) {
        expect(ex.options).toContain(ex.answer);
      }
    }
  });

  it("getTopic mengembalikan topik sesuai id, atau undefined", () => {
    expect(getTopic("artikel-nominativ")?.id).toBe("artikel-nominativ");
    expect(getTopic("tidak-ada")).toBeUndefined();
  });
});
```

- [ ] **Step 3: Run test — pastikan gagal**

Run: `npm run test -- tests/content.test.ts`
Expected: FAIL — modul `@/content/topics` belum ada.

- [ ] **Step 4: Buat data topik contoh**

Create `content/topics/artikel-nominativ.ts`:
```ts
import type { GrammarTopic } from "@/content/types";

export const artikelNominativ: GrammarTopic = {
  id: "artikel-nominativ",
  title: "Artikel & Nominativ",
  level: "A1",
  order: 1,
  icon: "📘",
  explanation:
    "Dalam bahasa Jerman, setiap kata benda memiliki jenis kelamin gramatikal (gender) yang menentukan artikelnya: **der** untuk maskulin, **die** untuk feminin, dan **das** untuk netral.\n\n" +
    "Gender ini tidak selalu logis dan sering tidak berkaitan dengan jenis kelamin asli benda. Karena itu, hafalkan artikel bersama katanya sejak awal.\n\n" +
    "Pada kasus Nominativ — ketika kata benda menjadi subjek kalimat (pelaku) — artikel tetap dalam bentuk dasarnya. Untuk kata benda jamak, artikelnya selalu **die**.",
  notes:
    "Pola umum: akhiran -ung/-heit/-keit biasanya die; -chen/-lein biasanya das; nama hari/bulan/musim biasanya der. Ini pola, bukan hukum mutlak — selalu cek artikel saat belajar kata baru.",
  tables: [
    {
      caption: "Artikel pada kasus Nominativ",
      headers: ["Maskulin", "Feminin", "Netral", "Jamak"],
      rows: [["der", "die", "das", "die"]],
    },
  ],
  examples: [
    { de: "Der Tisch ist groß.", id: "Meja itu besar." },
    { de: "Die Lampe ist neu.", id: "Lampu itu baru." },
    { de: "Das Kind spielt.", id: "Anak itu bermain." },
  ],
  exercises: [
    { question: "___ Tisch ist groß.", options: ["der", "die", "das"], answer: "der" },
    { question: "___ Lampe ist neu.", options: ["der", "die", "das"], answer: "die" },
    { question: "___ Kind spielt.", options: ["der", "die", "das"], answer: "das" },
  ],
};
```

- [ ] **Step 5: Buat loader topik**

Create `content/topics.ts`:
```ts
import type { GrammarTopic } from "@/content/types";
import { artikelNominativ } from "@/content/topics/artikel-nominativ";

const TOPICS: GrammarTopic[] = [artikelNominativ];

export function getAllTopics(): GrammarTopic[] {
  return [...TOPICS].sort((a, b) => a.order - b.order);
}

export function getTopic(id: string): GrammarTopic | undefined {
  return TOPICS.find((t) => t.id === id);
}
```

- [ ] **Step 6: Run test — pastikan lulus**

Run: `npm run test -- tests/content.test.ts`
Expected: PASS (3 test).

- [ ] **Step 7: Commit**

```bash
git add content tests/content.test.ts
git commit -m "feat: tipe materi grammar + topik contoh artikel-nominativ"
```

---

## Task 2: Skema database & client Supabase

**Files:**
- Create: `supabase/schema.sql`, `lib/supabase/client.ts`, `lib/supabase/server.ts`, `.env.local.example`

- [ ] **Step 1: Tulis skema tabel progress + RLS**

Create `supabase/schema.sql`:
```sql
-- Tabel progress per pengguna per topik
create table if not exists public.user_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  topic_id text not null,
  status text not null default 'dipelajari' check (status in ('belum','dipelajari','selesai')),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, topic_id)
);

alter table public.user_progress enable row level security;

-- Tiap pengguna hanya boleh akses barisnya sendiri
create policy "own progress - select" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "own progress - insert" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "own progress - update" on public.user_progress
  for update using (auth.uid() = user_id);
```

- [ ] **Step 2: Catatan setup manual (jalankan di Supabase)**

Run (manual, satu kali): buat project di https://supabase.com → buka SQL Editor → tempel isi `supabase/schema.sql` → Run. Lalu salin Project URL & anon key ke `.env.local`.
Expected: tabel `user_progress` muncul di Table Editor dengan RLS aktif.

- [ ] **Step 3: Buat contoh env**

Create `.env.local.example`:
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
```

- [ ] **Step 4: Buat browser client**

Create `lib/supabase/client.ts`:
```ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

- [ ] **Step 5: Buat server client**

Create `lib/supabase/server.ts`:
```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // dipanggil dari Server Component — abaikan, middleware yang refresh
          }
        },
      },
    }
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add supabase lib/supabase .env.local.example
git commit -m "feat: skema user_progress + Supabase client"
```

---

## Task 3: Helper progress (logika ringkasan)

**Files:**
- Create: `lib/progress.ts`
- Test: `tests/progress.test.ts`

- [ ] **Step 1: Tulis test ringkasan progress (failing dulu)**

Create `tests/progress.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { summarize, statusFor, type ProgressRow } from "@/lib/progress";

const rows: ProgressRow[] = [
  { topic_id: "a", status: "selesai" },
  { topic_id: "b", status: "dipelajari" },
];

describe("progress helpers", () => {
  it("menghitung jumlah selesai dari total", () => {
    const s = summarize(rows, 5);
    expect(s.completed).toBe(1);
    expect(s.total).toBe(5);
    expect(s.percent).toBe(20);
  });

  it("statusFor mengembalikan status topik atau 'belum'", () => {
    expect(statusFor(rows, "a")).toBe("selesai");
    expect(statusFor(rows, "z")).toBe("belum");
  });
});
```

- [ ] **Step 2: Run test — pastikan gagal**

Run: `npm run test -- tests/progress.test.ts`
Expected: FAIL — modul `@/lib/progress` belum ada.

- [ ] **Step 3: Implementasi helper**

Create `lib/progress.ts`:
```ts
export type ProgressStatus = "belum" | "dipelajari" | "selesai";

export type ProgressRow = {
  topic_id: string;
  status: ProgressStatus;
};

export function statusFor(rows: ProgressRow[], topicId: string): ProgressStatus {
  return rows.find((r) => r.topic_id === topicId)?.status ?? "belum";
}

export function summarize(rows: ProgressRow[], total: number) {
  const completed = rows.filter((r) => r.status === "selesai").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
```

- [ ] **Step 4: Run test — pastikan lulus**

Run: `npm run test -- tests/progress.test.ts`
Expected: PASS (2 test).

- [ ] **Step 5: Commit**

```bash
git add lib/progress.ts tests/progress.test.ts
git commit -m "feat: helper ringkasan & status progress"
```

---

## Task 4: Tema toska & layout dasar

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

- [ ] **Step 1: Tambah variabel tema toska ke globals.css**

Modify `app/globals.css` — tambahkan di bawah baris `@import "tailwindcss";` yang sudah ada:
```css
@theme {
  --color-teal-brand: #2dd4bf;
  --color-teal-accent: #5eead4;
  --color-teal-deep: #0f766e;
  --color-teal-soft: #ccfbf1;
  --color-teal-bg: #f7fffd;
}

body {
  background-color: var(--color-teal-bg);
  color: #0f172a;
}
```

- [ ] **Step 2: Set layout root + bahasa**

Modify `app/layout.tsx` — ganti isi menjadi:
```tsx
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
```

- [ ] **Step 3: Buat beranda sederhana**

Modify `app/page.tsx` — ganti isi menjadi:
```tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="text-6xl">🦉</div>
      <h1 className="text-3xl font-extrabold text-teal-deep">Mein-Deutsch</h1>
      <p className="text-slate-600">
        Belajar grammar bahasa Jerman A1 dengan penjelasan terstruktur,
        pengucapan, dan mini-latihan.
      </p>
      <Link
        href="/grammar"
        className="rounded-xl bg-teal-brand px-6 py-3 font-bold text-teal-deep shadow-md transition hover:brightness-105"
      >
        Mulai Belajar →
      </Link>
    </main>
  );
}
```

- [ ] **Step 4: Verifikasi tampilan**

Run: `npm run dev` lalu buka http://localhost:3000
Expected: beranda toska dengan maskot 🦉 dan tombol "Mulai Belajar". Hentikan dev server (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx app/page.tsx
git commit -m "feat: tema toska + beranda"
```

---

## Task 5: Komponen UI — SpeakButton, Collapsible, MiniExercise

**Files:**
- Create: `components/SpeakButton.tsx`, `components/Collapsible.tsx`, `components/MiniExercise.tsx`
- Test: `tests/miniExercise.test.tsx`

- [ ] **Step 1: Buat SpeakButton (Web Speech API + fallback)**

Create `components/SpeakButton.tsx`:
```tsx
"use client";

import { useState, useEffect } from "react";

export function SpeakButton({ text }: { text: string }) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  function speak() {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <button
      type="button"
      onClick={speak}
      disabled={!supported}
      title={supported ? "Dengar pengucapan" : "Browser tidak mendukung audio"}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-soft text-teal-deep transition hover:brightness-95 disabled:opacity-40"
    >
      🔊
    </button>
  );
}
```

- [ ] **Step 2: Buat Collapsible ("Baca selengkapnya")**

Create `components/Collapsible.tsx`:
```tsx
"use client";

import { useState } from "react";

export function Collapsible({
  preview,
  full,
}: {
  preview: string;
  full: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className="whitespace-pre-line leading-relaxed text-slate-700">
        {open ? full : preview}
      </p>
      {full !== preview && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2 text-sm font-semibold text-teal-deep"
        >
          {open ? "▴ Tutup" : "▾ Baca selengkapnya"}
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Tulis test MiniExercise (failing dulu)**

Create `tests/miniExercise.test.tsx`:
```tsx
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MiniExercise } from "@/components/MiniExercise";

const exercises = [
  { question: "___ Tisch ist groß.", options: ["der", "die", "das"], answer: "der" },
];

describe("MiniExercise", () => {
  it("menampilkan benar saat jawaban tepat", () => {
    render(<MiniExercise exercises={exercises} />);
    fireEvent.click(screen.getByRole("button", { name: "der" }));
    expect(screen.getByText(/Benar/i)).toBeInTheDocument();
  });

  it("menampilkan salah saat jawaban keliru", () => {
    render(<MiniExercise exercises={exercises} />);
    fireEvent.click(screen.getByRole("button", { name: "die" }));
    expect(screen.getByText(/Coba lagi/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Run test — pastikan gagal**

Run: `npm run test -- tests/miniExercise.test.tsx`
Expected: FAIL — komponen belum ada.

- [ ] **Step 5: Implementasi MiniExercise**

Create `components/MiniExercise.tsx`:
```tsx
"use client";

import { useState } from "react";
import type { GrammarExercise } from "@/content/types";

function ExerciseItem({ ex }: { ex: GrammarExercise }) {
  const [picked, setPicked] = useState<string | null>(null);
  const correct = picked === ex.answer;
  return (
    <div className="mb-4">
      <p className="mb-2 text-slate-800">{ex.question}</p>
      <div className="flex flex-wrap gap-2">
        {ex.options.map((opt) => {
          const isPicked = picked === opt;
          const cls = isPicked
            ? opt === ex.answer
              ? "bg-teal-brand text-teal-deep border-teal-brand"
              : "bg-red-100 text-red-700 border-red-300"
            : "border-teal-accent text-teal-deep";
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setPicked(opt)}
              className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className={`mt-2 text-sm font-semibold ${correct ? "text-teal-deep" : "text-red-600"}`}>
          {correct ? "✓ Benar!" : "✗ Coba lagi"}
        </p>
      )}
    </div>
  );
}

export function MiniExercise({ exercises }: { exercises: GrammarExercise[] }) {
  return (
    <div>
      {exercises.map((ex, i) => (
        <ExerciseItem key={i} ex={ex} />
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Run test — pastikan lulus**

Run: `npm run test -- tests/miniExercise.test.tsx`
Expected: PASS (2 test).

- [ ] **Step 7: Commit**

```bash
git add components/SpeakButton.tsx components/Collapsible.tsx components/MiniExercise.tsx tests/miniExercise.test.tsx
git commit -m "feat: komponen SpeakButton, Collapsible, MiniExercise"
```

---

## Task 6: Halaman login

**Files:**
- Create: `app/login/page.tsx`, `app/auth/signout/route.ts`

- [ ] **Step 1: Buat halaman login (email+password, sign up & sign in)**

Create `app/login/page.tsx`:
```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handle(mode: "in" | "up") {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const fn =
      mode === "in"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });
    const { error } = await fn;
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/grammar");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6">
      <h1 className="text-2xl font-extrabold text-teal-deep">Masuk</h1>
      <input
        className="rounded-lg border border-teal-accent px-3 py-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="rounded-lg border border-teal-accent px-3 py-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        onClick={() => handle("in")}
        disabled={loading}
        className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep disabled:opacity-50"
      >
        Masuk
      </button>
      <button
        onClick={() => handle("up")}
        disabled={loading}
        className="text-sm font-semibold text-teal-deep"
      >
        Belum punya akun? Daftar
      </button>
    </main>
  );
}
```

- [ ] **Step 2: Buat route sign out**

Create `app/auth/signout/route.ts`:
```ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/", request.url), { status: 303 });
}
```

- [ ] **Step 3: Verifikasi build**

Run: `npm run build`
Expected: build sukses tanpa error tipe.

- [ ] **Step 4: Commit**

```bash
git add app/login app/auth
git commit -m "feat: halaman login + signout"
```

---

## Task 7: Dashboard (daftar topik + progress)

**Files:**
- Create: `components/ProgressBar.tsx`, `components/TopicCard.tsx`, `app/grammar/page.tsx`

- [ ] **Step 1: Buat ProgressBar**

Create `components/ProgressBar.tsx`:
```tsx
export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-white/55">
      <div
        className="h-full rounded-full bg-white"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Buat TopicCard**

Create `components/TopicCard.tsx`:
```tsx
import Link from "next/link";
import type { GrammarTopic } from "@/content/types";
import type { ProgressStatus } from "@/lib/progress";

const BADGE: Record<ProgressStatus, { text: string; cls: string }> = {
  belum: { text: "⚪ Belum", cls: "bg-slate-100 text-slate-500" },
  dipelajari: { text: "🔵 Dipelajari", cls: "bg-sky-100 text-sky-700" },
  selesai: { text: "✓ Selesai", cls: "bg-teal-soft text-teal-deep" },
};

export function TopicCard({
  topic,
  status,
}: {
  topic: GrammarTopic;
  status: ProgressStatus;
}) {
  const badge = BADGE[status];
  return (
    <Link
      href={`/grammar/${topic.id}`}
      className="block rounded-2xl border border-teal-soft bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${badge.cls}`}>
        {badge.text}
      </span>
      <div className="mt-2 text-2xl">{topic.icon}</div>
      <h3 className="mt-1 font-bold text-slate-900">{topic.title}</h3>
      <p className="text-xs text-slate-400">
        {topic.level} · Topik {topic.order}
      </p>
    </Link>
  );
}
```

- [ ] **Step 3: Buat halaman dashboard (server component, ambil progress)**

Create `app/grammar/page.tsx`:
```tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { statusFor, summarize, type ProgressRow } from "@/lib/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { TopicCard } from "@/components/TopicCard";

export default async function GrammarPage() {
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

  const topics = getAllTopics();
  const s = summarize(rows, topics.length);

  return (
    <main className="mx-auto max-w-2xl px-5 py-8">
      <section className="rounded-2xl bg-gradient-to-br from-teal-accent to-teal-brand p-5 text-teal-deep shadow">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-extrabold">Hallo! 👋</h1>
          <form action="/auth/signout" method="post">
            <button className="text-xs font-semibold underline">Keluar</button>
          </form>
        </div>
        <div className="mt-3">
          <ProgressBar percent={s.percent} />
          <p className="mt-1.5 text-xs font-medium">
            {s.completed}/{s.total} topik selesai
          </p>
        </div>
      </section>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {topics.map((t) => (
          <TopicCard key={t.id} topic={t} status={statusFor(rows, t.id)} />
        ))}
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Verifikasi build**

Run: `npm run build`
Expected: build sukses.

- [ ] **Step 5: Commit**

```bash
git add components/ProgressBar.tsx components/TopicCard.tsx app/grammar/page.tsx
git commit -m "feat: dashboard daftar topik + ringkasan progress"
```

---

## Task 8: Halaman detail topik + tandai selesai

**Files:**
- Create: `components/MarkCompleteButton.tsx`, `app/grammar/[topic]/page.tsx`

- [ ] **Step 1: Buat MarkCompleteButton (client, tulis ke Supabase)**

Create `components/MarkCompleteButton.tsx`:
```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function MarkCompleteButton({
  topicId,
  done,
}: {
  topicId: string;
  done: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function mark() {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    const { error } = await supabase.from("user_progress").upsert({
      user_id: user.id,
      topic_id: topicId,
      status: "selesai",
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    setLoading(false);
    if (error) {
      setError("Gagal menyimpan, coba lagi.");
      return;
    }
    router.push("/grammar");
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={mark}
        disabled={loading || done}
        className="w-full rounded-xl bg-teal-brand px-4 py-3 font-extrabold text-teal-deep shadow-md transition hover:brightness-105 disabled:opacity-50"
      >
        {done ? "✓ Sudah Selesai" : "Tandai sebagai Selesai ✓"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Buat halaman detail topik**

Create `app/grammar/[topic]/page.tsx`:
```tsx
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getTopic, getAllTopics } from "@/content/topics";
import { statusFor, type ProgressRow } from "@/lib/progress";
import { SpeakButton } from "@/components/SpeakButton";
import { Collapsible } from "@/components/Collapsible";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";

export function generateStaticParams() {
  return getAllTopics().map((t) => ({ topic: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("user_progress")
    .select("topic_id, status")
    .eq("user_id", user.id)
    .eq("topic_id", topic.id);
  const done = statusFor((data ?? []) as ProgressRow[], topic.id) === "selesai";

  const firstPara = topic.explanation.split("\n\n")[0];

  return (
    <main className="mx-auto max-w-xl px-5 py-6">
      <Link href="/grammar" className="text-sm font-semibold text-teal-deep">
        ← Kembali
      </Link>
      <h1 className="mb-4 mt-2 text-xl font-extrabold text-slate-900">
        {topic.icon} {topic.title}
      </h1>

      <Section label="📖 Penjelasan">
        <Collapsible preview={firstPara} full={topic.explanation} />
      </Section>

      {topic.tables.map((tbl, i) => (
        <Section key={i} label={`📊 ${tbl.caption}`}>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {tbl.headers.map((h) => (
                  <th key={h} className="rounded bg-teal-soft p-1.5 text-teal-deep">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbl.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-slate-100 p-1.5 text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      ))}

      <Section label="💬 Contoh Kalimat">
        {topic.examples.map((ex, i) => (
          <div key={i} className="mt-1 flex items-center justify-between">
            <div className="text-sm">
              <b className="text-slate-900">{ex.de}</b>
              <span className="block text-xs text-slate-400">{ex.id}</span>
            </div>
            <SpeakButton text={ex.de} />
          </div>
        ))}
      </Section>

      <Section label="📌 Catatan Penting">
        <p className="leading-relaxed text-slate-700">{topic.notes}</p>
      </Section>

      <Section label="✏️ Mini-Latihan">
        <MiniExercise exercises={topic.exercises} />
      </Section>

      <MarkCompleteButton topicId={topic.id} done={done} />
    </main>
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

- [ ] **Step 3: Verifikasi build**

Run: `npm run build`
Expected: build sukses.

- [ ] **Step 4: Commit**

```bash
git add components/MarkCompleteButton.tsx "app/grammar/[topic]/page.tsx"
git commit -m "feat: halaman detail topik + tandai selesai"
```

---

## Task 9: Uji alur end-to-end secara manual

**Files:** (tidak ada perubahan kode; verifikasi)

- [ ] **Step 1: Siapkan env & jalankan**

Run: salin `.env.local.example` → `.env.local`, isi URL & anon key Supabase. Lalu `npm run dev`.
Expected: app jalan di http://localhost:3000.

- [ ] **Step 2: Uji alur lengkap**

Lakukan manual di browser:
1. Buka `/` → klik "Mulai Belajar" → diarahkan ke `/login` (karena belum login).
2. Daftar akun baru → masuk ke `/grammar`.
3. Dashboard tampil: 1 kartu topik, progress 0/1.
4. Klik kartu → halaman detail: penjelasan + "Baca selengkapnya", tabel, contoh kalimat + 🔊 (klik → terdengar suara Jerman), catatan, mini-latihan (klik jawaban benar/salah → umpan balik).
5. Klik "Tandai Selesai" → kembali ke dashboard, progress jadi 1/1, badge "✓ Selesai".
6. Klik "Keluar" → kembali ke beranda.

Expected: semua langkah berfungsi sesuai deskripsi.

- [ ] **Step 3: Jalankan seluruh test + build final**

Run: `npm run test && npm run build`
Expected: semua test PASS, build sukses.

- [ ] **Step 4: Commit (jika ada perbaikan)**

```bash
git add -A
git commit -m "test: verifikasi alur MVP end-to-end" --allow-empty
```

---

## Task 10: Deploy ke Vercel

**Files:** (konfigurasi hosting)

- [ ] **Step 1: Push ke GitHub**

Run: buat repo GitHub baru, lalu:
```bash
git remote add origin <URL-REPO>
git push -u origin main
```
Expected: kode ada di GitHub.

- [ ] **Step 2: Hubungkan ke Vercel**

Run (manual): di https://vercel.com → Import Project → pilih repo → tambah Environment Variables `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Deploy.
Expected: dapat URL produksi (mis. `mein-deutsch.vercel.app`).

- [ ] **Step 3: Tambah URL situs ke Supabase Auth**

Run (manual): Supabase → Authentication → URL Configuration → tambahkan URL Vercel ke Site URL & Redirect URLs.
Expected: login berfungsi di produksi.

- [ ] **Step 4: Uji produksi**

Run (manual): buka URL Vercel → ulangi alur Task 9 Step 2.
Expected: alur penuh berfungsi di produksi.

---

## Catatan untuk tahap berikutnya (di luar plan ini)
- **Menambah topik:** buat file baru di `content/topics/`, daftarkan di `content/topics.ts`. Tidak perlu ubah komponen.
- **Status "dipelajari":** saat ini hanya "belum" → "selesai". Bila ingin auto-tandai "dipelajari" saat topik dibuka, tambahkan upsert status di halaman detail.
- **Ekstraksi ebook:** isi `content/topics/` dengan topik A1 lain dari ebook referensi.
- **SEO go-public:** buka akses baca materi tanpa login (pisahkan guard), tambah sitemap & structured data — lihat catatan di spec.
```
