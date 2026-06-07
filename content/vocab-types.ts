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

export type VocabExample = {
  de: string;   // gunakan **kata** untuk highlight, e.g. "Ich esse **das Brot**."
                // Komponen render akan parse **...** dan warnai sesuai artikel
                // yang terdeteksi (der/die/das) di dalam tanda **.
  id: string;   // terjemahan bahasa Indonesia dari kalimat de
};

export type VocabTopic = {
  id: string;           // slug URL, e.g. "familie"
  order: number;        // urutan di sidebar
  title: string;        // judul Jerman, e.g. "Familie"
  icon: string;         // emoji
  available: boolean;   // false = placeholder terkunci
  intro: string;        // penjelasan singkat bahasa Indonesia
  items: VocabItem[];   // 15–20 kata, campuran Nomen/Verb/ADJ
  examples: VocabExample[]; // kalimat contoh dengan highlight kata kunci
  exercises: VocabExercise[];
};
