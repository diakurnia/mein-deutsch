import type { GrammarTopic } from "@/content/types";

export const konjugationPraesens: GrammarTopic = {
  id: "konjugation-praesens",
  title: "Konjugation Präsens",
  level: "A1",
  order: 3,
  icon: "✍️",
  explanation:
    "**Konjugation Präsens** adalah perubahan bentuk kata kerja untuk menyatakan kejadian yang terjadi di masa sekarang. Dalam bahasa Jerman, setiap kata kerja terdiri dari **kata dasar** (Stamm) dan **akhiran** (Endung). Untuk menggunakannya dalam kalimat, akhiran kata kerja harus disesuaikan dengan subjek atau **Personalpronomen** yang digunakan.\n\n" +
    "Secara umum, akhiran untuk kata kerja beraturan (**regelmäßige Verben**) mengikuti pola tetap: **-e** untuk *ich*, **-st** untuk *du*, **-t** untuk *er/sie/es* dan *ihr*, serta **-en** untuk *wir* dan *sie/Sie*. Perlu diingat bahwa bentuk kata kerja untuk *wir* dan *Sie/sie* biasanya selalu sama dengan bentuk dasar (**Infinitiv**) kata kerja tersebut.\n\n" +
    "Terdapat beberapa aturan khusus. Jika kata dasar berakhir dengan **-t** atau **-d** (seperti *arbeiten*), ditambahkan huruf **e** sebelum akhiran *-st* dan *-t* agar lebih mudah diucapkan. Jika kata dasar berakhir dengan **-s, -ß, -x,** atau **-z** (seperti *heißen*), bentuk subjek *du* hanya ditambahkan akhiran **-t** saja, bukan *-st*.",
  notes:
    "Bentuk dasar kata kerja dalam kamus selalu berakhiran **-en** atau **-n** (Infinitiv). Gunakan bentuk ini untuk subjek **wir**, **sie** (mereka), dan **Sie** (Anda formal).",
  tables: [
    {
      caption: "Konjugasi Kata Kerja Beraturan (Präsens)",
      headers: ["Subjek", "kommen (biasa)", "arbeiten (-t/-d)", "heißen (-s/-ß/-z)"],
      rows: [
        ["ich", "komme", "arbeite", "heiße"],
        ["du", "kommst", "arbeitest", "heißt"],
        ["er/sie/es", "kommt", "arbeitet", "heißt"],
        ["wir", "kommen", "arbeiten", "heißen"],
        ["ihr", "kommt", "arbeitet", "heißt"],
        ["sie/Sie", "kommen", "arbeiten", "heißen"],
      ],
    },
  ],
  examples: [
    { de: "Ich wohne in Jakarta.", id: "Saya tinggal di Jakarta." },
    { de: "Woher kommst du?", id: "Dari mana kamu berasal?" },
    { de: "Herr Müller arbeitet bei Siemens.", id: "Pak Müller bekerja di Siemens." },
    { de: "Wie heißen Sie?", id: "Siapa nama Anda?" },
  ],
  exercises: [
    {
      question: "Maria ___ aus Spanien.",
      options: ["komme", "kommst", "kommt"],
      answer: "kommt",
    },
    {
      question: "Was ___ Sie beruflich?",
      options: ["machen", "machst", "macht"],
      answer: "machen",
    },
    {
      question: "Hallo Anna, wo ___ du?",
      options: ["wohnst", "wohne", "wohnt"],
      answer: "wohnst",
    },
  ],
};
