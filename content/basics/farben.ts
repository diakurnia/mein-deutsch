import type { BasicsTopic } from "@/content/basics-types";

export const farben: BasicsTopic = {
  id: "farben",
  title: "Farben",
  level: "A1",
  order: 6,
  icon: "🎨",
  intro:
    "**Die Farben** (warna) sering dipakai untuk mendeskripsikan benda dan pakaian. Sebagian besar warna berfungsi sebagai kata sifat.",
  groups: [
    {
      caption: "Warna umum",
      items: [
        { de: "rot", translation: "merah" },
        { de: "blau", translation: "biru" },
        { de: "gelb", translation: "kuning" },
        { de: "grün", translation: "hijau" },
        { de: "schwarz", translation: "hitam" },
        { de: "weiß", translation: "putih" },
        { de: "orange", translation: "oranye" },
        { de: "rosa", translation: "merah muda" },
        { de: "lila", translation: "ungu" },
        { de: "braun", translation: "cokelat" },
        { de: "grau", translation: "abu-abu" },
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
    {
      question: "'blau' artinya…",
      options: ["biru", "cokelat", "abu-abu"],
      answer: "biru",
    },
    {
      question: "Bahasa Jerman untuk 'putih' adalah…",
      options: ["weiß", "schwarz", "gelb"],
      answer: "weiß",
    },
  ],
};
