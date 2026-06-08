import type { GrammarTopic } from "@/content/types";

export const verbenMitVokalwechsel: GrammarTopic = {
  id: "verben-mit-vokalwechsel",
  title: "Verben mit Vokalwechsel",
  level: "A1",
  order: 5,
  icon: "🔄",
  explanation:
    "**Verben mit Vokalwechsel** adalah kelompok kata kerja yang mengalami perubahan huruf vokal pada kata dasarnya saat dikonjugasikan. Perubahan ini sangat spesifik karena hanya terjadi pada subjek orang kedua tunggal (**du**) dan orang ketiga tunggal (**er, sie, es**). Untuk subjek lainnya seperti *ich, wir, ihr,* dan *sie/Sie*, vokal kata kerja tetap mengikuti bentuk dasar (Infinitiv).\n\n" +
    "Terdapat tiga pola perubahan vokal yang paling umum di level A1: perubahan **e → i** (contoh: *essen* menjadi *du isst*), **e → ie** (contoh: *lesen* menjadi *du liest*), dan **a → ä** (contoh: *fahren* menjadi *du fährst*). Perubahan ini harus dihafalkan karena tidak semua kata kerja dengan huruf 'e' atau 'a' mengalami perubahan vokal — seperti *gehen* yang tetap menjadi *du gehst*.\n\n" +
    "Beberapa kata kerja penting yang masuk kategori ini antara lain **helfen** (membantu), **sprechen** (berbicara), **sehen** (melihat), dan **schlafen** (tidur). Memahami perubahan ini penting agar tidak terjadi kesalahan dalam pembentukan kalimat dasar, terutama saat menanyakan hobi atau aktivitas sehari-hari.",
  notes:
    "Perubahan vokal **tidak** terjadi pada bentuk jamak *ihr*. Contoh: meskipun *er isst* berubah, bentuk untuk kalian tetap *ihr esst*.",
  tables: [
    {
      caption: "Pola Perubahan Vokal (Präsens)",
      headers: ["Subjek", "e → i (essen)", "e → ie (lesen)", "a → ä (fahren)"],
      rows: [
        ["ich", "esse", "lese", "fahre"],
        ["du ⚡", "isst", "liest", "fährst"],
        ["er/sie/es ⚡", "isst", "liest", "fährt"],
        ["wir", "essen", "lesen", "fahren"],
        ["ihr", "esst", "lest", "fahrt"],
        ["sie/Sie", "essen", "lesen", "fahren"],
      ],
    },
  ],
  examples: [
    { de: "Ich esse wenig, aber du isst viel!", id: "Saya makan sedikit, tapi kamu makan banyak!" },
    { de: "Fährst du mit dem Auto oder mit dem Bus?", id: "Apakah kamu pergi dengan mobil atau dengan bus?" },
    { de: "Lara liest am Abend die Zeitung.", id: "Lara membaca koran di malam hari." },
    { de: "Er hilft seiner Mutter in der Küche.", id: "Dia membantu ibunya di dapur." },
  ],
  exercises: [
    {
      question: "Was ___ du gern? - Ich lese gern Romane.",
      options: ["lese", "liest", "lesen"],
      answer: "liest",
    },
    {
      question: "Der Zug ___ um 10 Uhr ab.",
      options: ["fahre", "fahrt", "fährt"],
      answer: "fährt",
    },
    {
      question: "___ du mir bitte bei den Hausaufgaben?",
      options: ["Hilfst", "Helfst", "Helft"],
      answer: "Hilfst",
    },
    {
      question: "Anna ___ gern Pizza zum Abendessen. (essen)",
      options: ["isst", "esst", "esse"],
      answer: "isst",
    },
    {
      question: "Manakah yang BENAR untuk bentuk 'ihr'?",
      options: ["ihr esst", "ihr isst", "ihr essts"],
      answer: "ihr esst",
    },
  ],
};
