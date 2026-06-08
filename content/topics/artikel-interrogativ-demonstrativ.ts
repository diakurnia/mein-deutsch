import type { GrammarTopic } from "@/content/types";

export const artikelInterrogativDemonstrativ: GrammarTopic = {
  id: "artikel-interrogativ-demonstratif",
  title: "Artikel: Interogatif dan Demonstratif (welcher? - dieser!)",
  level: "A1",
  order: 21,
  icon: "👉",
  explanation:
    "**Artikel Interogatif** (*welcher*) digunakan untuk menanyakan pilihan spesifik dari sekelompok benda atau orang — artinya \"yang mana?\". Sebagai pasangannya, **Artikel Demonstratif** (*dieser*) digunakan untuk menunjuk benda atau orang tertentu — artinya \"ini\" atau \"yang ini\".\n\n" +
    "Kedua artikel ini mendampingi kata benda, sehingga akhirannya harus disesuaikan dengan **gender** dan **kasus** kata benda tersebut. Aturan akhirannya mengikuti pola **artikel pasti** (*der/die/das*) — mudah diingat! Contoh: kata benda maskulin (*der*) → kata tanyanya *welch**er*** dan kata tunjuknya *dies**er***.\n\n" +
    "Perubahan paling mencolok terjadi pada kasus **Akkusativ** untuk gender maskulin, di mana akhiran berubah menjadi **-en** (*welchen/diesen*), serupa dengan perubahan *der* → *den*. Untuk gender feminin, netral, dan jamak, akhirannya cenderung tetap sama dengan bentuk Nominativ.",
  notes:
    "Akhiran artikel ini selalu mencerminkan 'sinyal' dari artikel pasti kata bendanya. Contoh: *Welch**es** Buch?* (karena das Buch), *Welch**e** Tasche?* (karena die Tasche).",
  tables: [
    {
      caption: "Deklinasi welcher? dan dieser!",
      headers: ["Kasus", "Maskulin (der)", "Netral (das)", "Feminin (die)", "Plural (die)"],
      rows: [
        ["Nominativ", "welcher / dieser", "welches / dieses", "welche / diese", "welche / diese"],
        ["Akkusativ ⚡", "welchen / diesen", "welches / dieses", "welche / diese", "welche / diese"],
        ["Dativ", "welchem / diesem", "welchem / diesem", "welcher / dieser", "welchen / diesen"],
      ],
    },
  ],
  examples: [
    { de: "Welcher Rock gefällt dir? - Dieser hier.", id: "Rok yang mana yang kamu suka? - Yang ini." },
    { de: "Welches Hemd findest du schön? - Dieses.", id: "Kemeja yang mana yang menurutmu bagus? - Yang ini." },
    { de: "Welchen Apfelsaft möchten Sie? - Diesen da, bitte.", id: "Jus apel yang mana yang Anda inginkan? - Yang itu, tolong." },
    { de: "Mit welchem Zug fährst du? - Mit diesem.", id: "Dengan kereta yang mana kamu pergi? - Dengan yang ini." },
  ],
  exercises: [
    {
      question: "___ Mantel kaufst du? - Ich kaufe diesen. (der Mantel — Akkusativ)",
      options: ["Welcher", "Welchen", "Welches"],
      answer: "Welchen",
    },
    {
      question: "Welches Buch liest du? - Ich lese ___.",
      options: ["dieser", "dieses", "diese"],
      answer: "dieses",
    },
    {
      question: "___ Tasche ist teuer? - Diese hier. (die Tasche — Nominativ)",
      options: ["Welcher", "Welches", "Welche"],
      answer: "Welche",
    },
    {
      question: "___ Hemd findest du schön? (das Hemd — Nominativ)",
      options: ["Welches", "Welcher", "Welchen"],
      answer: "Welches",
    },
    {
      question: "Akhiran 'welcher/dieser' mengikuti pola artikel…",
      options: ["pasti (der/die/das)", "tidak tentu (ein/eine)", "negasi (kein)"],
      answer: "pasti (der/die/das)",
    },
  ],
};
