import type { GrammarTopic } from "@/content/types";

export const praeteritumSeinHaben: GrammarTopic = {
  id: "praeteritum-sein-haben",
  title: "Präteritum: 'sein' dan 'haben'",
  level: "A1",
  order: 27,
  icon: "🕰️",
  explanation:
    "**Präteritum** adalah salah satu bentuk waktu lampau dalam bahasa Jerman yang digunakan untuk menyatakan fakta, kondisi, atau kepemilikan di masa lalu. Meskipun bentuk *Perfekt* lebih umum dalam percakapan sehari-hari, khusus untuk kata kerja **sein** dan **haben**, bentuk **Präteritum** jauh lebih lazim digunakan.\n\n" +
    "Dalam bentuk lampau, **sein** berubah menjadi **war** (dulu adalah/berada) dan **haben** berubah menjadi **hatte** (dulu mempunyai). Ciri khas utamanya: bentuk untuk **ich** dan **er/sie/es** selalu **identik** dan tidak memiliki akhiran tambahan.\n\n" +
    "Penggunaan **Präteritum** sangat penting saat menceritakan masa kecil, pengalaman liburan, atau kondisi di waktu yang telah lewat. Misalnya, membandingkan kondisi saat ini (*Ich bin verheiratet*) dengan kondisi masa lalu (*Ich war ledig*), atau menyatakan ketersediaan waktu kemarin (*Ich hatte keine Zeit*).",
  notes:
    "Dalam percakapan lisan, orang hampir selalu menggunakan *war* dan *hatte* — bukan bentuk Perfekt-nya. Ini pengecualian penting dari aturan umum bahwa Perfekt dipakai dalam percakapan.",
  tables: [
    {
      caption: "Konjugasi sein dan haben (Präteritum)",
      headers: ["Subjek", "sein → war", "haben → hatte"],
      rows: [
        ["ich ⚡", "war", "hatte"],
        ["du", "warst", "hattest"],
        ["er / sie / es ⚡", "war", "hatte"],
        ["wir", "waren", "hatten"],
        ["ihr", "wart", "hattet"],
        ["sie / Sie", "waren", "hatten"],
      ],
    },
  ],
  examples: [
    { de: "Ich war gestern krank und war zu Hause.", id: "Saya kemarin sakit dan berada di rumah." },
    { de: "Wir hatten gestern einen neuen Lehrer.", id: "Kami kemarin mempunyai guru baru." },
    { de: "Hattest du am Montag viel Spaß?", id: "Apakah kamu merasa sangat senang di hari Senin?" },
    { de: "Früher hatte ich keine Kinder und viel Zeit.", id: "Dulu saya tidak punya anak dan punya banyak waktu." },
  ],
  exercises: [
    {
      question: "Wo ___ du denn gestern? - Ich war im Kino.",
      options: ["war", "warst", "waren"],
      answer: "warst",
    },
    {
      question: "Wir ___ gestern kein Glück. Es hat nur geregnet.",
      options: ["hatte", "hatten", "hattet"],
      answer: "hatten",
    },
    {
      question: "Frau Müller ___ gestern ein wichtiges Meeting.",
      options: ["war", "hattest", "hatte"],
      answer: "hatte",
    },
    {
      question: "Früher ___ ich klein und schüchtern. (sein, ich)",
      options: ["war", "warst", "waren"],
      answer: "war",
    },
    {
      question: "___ ihr gestern viel Spaß? (haben, ihr)",
      options: ["Hattet", "Hatten", "Hattest"],
      answer: "Hattet",
    },
  ],
};
