import type { GrammarTopic } from "@/content/types";

export const artikelNominativ: GrammarTopic = {
  id: "artikel-nominativ",
  title: "Artikel & Nominativ",
  level: "A1",
  order: 2,
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
    { question: "___ Bücher sind interessant. (jamak)", options: ["der", "die", "das"], answer: "die" },
    { question: "Kata berakhiran -ung (mis. 'Wohnung') biasanya berartikel ___.", options: ["der", "die", "das"], answer: "die" },
  ],
};
