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
        { de: "null", translation: "0" },
        { de: "eins", translation: "1" },
        { de: "zwei", translation: "2" },
        { de: "drei", translation: "3" },
        { de: "vier", translation: "4" },
        { de: "fünf", translation: "5" },
        { de: "sechs", translation: "6" },
        { de: "sieben", translation: "7" },
        { de: "acht", translation: "8" },
        { de: "neun", translation: "9" },
        { de: "zehn", translation: "10" },
        { de: "elf", translation: "11" },
        { de: "zwölf", translation: "12" },
      ],
    },
    {
      caption: "13 – 20",
      items: [
        { de: "dreizehn", translation: "13" },
        { de: "vierzehn", translation: "14" },
        { de: "fünfzehn", translation: "15" },
        { de: "sechzehn", translation: "16" },
        { de: "siebzehn", translation: "17" },
        { de: "achtzehn", translation: "18" },
        { de: "neunzehn", translation: "19" },
        { de: "zwanzig", translation: "20" },
      ],
    },
    {
      caption: "Puluhan & besar",
      items: [
        { de: "einundzwanzig", translation: "21", hint: "pola: satuan + und + puluhan" },
        { de: "dreißig", translation: "30" },
        { de: "vierzig", translation: "40" },
        { de: "fünfzig", translation: "50" },
        { de: "hundert", translation: "100" },
        { de: "tausend", translation: "1000" },
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
