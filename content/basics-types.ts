import type { GrammarExercise } from "@/content/types";

export type BasicsItem = {
  de: string;          // teks Jerman — yang dibacakan SpeakButton
  translation: string; // arti / keterangan Indonesia
  hint?: string;       // cara baca atau catatan singkat
};

export type BasicsGroup = {
  caption: string;     // judul kelompok, mis. "Angka 0–12"
  items: BasicsItem[];
};

export type BasicsTopic = {
  id: string;          // slug, mis. "alphabet"
  title: string;
  level: string;       // mis. "A1"
  order: number;
  icon: string;        // emoji
  intro: string;       // penjelasan singkat (markdown via RichText)
  groups: BasicsGroup[];
  exercises: GrammarExercise[];
};
