import type { GrammarTopic } from "@/content/types";

export const reflexivverben: GrammarTopic = {
  id: "reflexivverben",
  title: "Reflexivverben",
  level: "A1",
  order: 8,
  icon: "🔄",
  explanation:
    "**Reflexivverben** (kata kerja refleksif) adalah kata kerja yang membutuhkan **Reflexivpronomen** (kata ganti refleksif) karena subjek dan objek kalimatnya merujuk pada orang yang sama. Dalam bahasa Indonesia, konsep ini mirip dengan kata kerja berimbuhan *me-kan diri sendiri*.\n\n" +
    "Contoh: *Ich wasche mich.* (Saya mencuci diri saya.) — subjek dan objek adalah orang yang sama.\n\n" +
    "**Reflexivpronomen** mengikuti kasus Akkusativ dan hampir selalu menggunakan bentuk *sich* untuk orang ketiga tunggal maupun jamak. Posisi Reflexivpronomen dalam kalimat mengikuti aturan posisi objek biasa.\n\n" +
    "Ada dua jenis Reflexivverben:\n\n" +
    "**1. Echt reflexiv** — kata kerja yang *harus* selalu dipakai dengan Reflexivpronomen dan tidak bisa dipakai tanpa. Contoh: *sich freuen* (merasa senang), *sich befinden* (berada).\n\n" +
    "**2. Unecht reflexiv** — kata kerja biasa yang bisa dipakai dengan Reflexivpronomen (objeknya diri sendiri) atau dengan objek lain. Contoh: *sich waschen* (mencuci diri) vs. *das Auto waschen* (mencuci mobil).",
  notes:
    "Reflexivpronomen *sich* dipakai untuk **er, sie, es, sie (jamak), Sie (formal)**. Untuk orang pertama dan kedua, gunakan pronomen Akkusativ biasa: *mich, dich, uns, euch*. Kata kerja refleksif dalam kamus selalu ditulis dengan *sich* di depannya, mis. *sich waschen* — tanda bahwa kata kerja itu refleksif.",
  tables: [
    {
      caption: "Reflexivpronomen (Akkusativ)",
      headers: ["Subjek", "Reflexivpronomen", "Contoh"],
      rows: [
        ["ich", "mich", "Ich wasche mich."],
        ["du", "dich", "Du wäschst dich."],
        ["er / sie / es", "sich", "Er wäscht sich."],
        ["wir", "uns", "Wir waschen uns."],
        ["ihr", "euch", "Ihr wascht euch."],
        ["sie / Sie", "sich", "Sie waschen sich."],
      ],
    },
    {
      caption: "Kata kerja refleksif umum A1",
      headers: ["Kata kerja", "Arti", "Contoh kalimat"],
      rows: [
        ["sich waschen", "mencuci diri", "Ich wasche mich jeden Morgen."],
        ["sich anziehen", "berpakaian", "Er zieht sich schnell an."],
        ["sich ausziehen", "membuka pakaian", "Sie zieht sich aus."],
        ["sich setzen", "duduk (bergerak)", "Bitte setzen Sie sich!"],
        ["sich hinlegen", "berbaring", "Ich lege mich ins Bett."],
        ["sich freuen", "merasa senang", "Ich freue mich auf das Wochenende."],
        ["sich interessieren für", "tertarik pada", "Sie interessiert sich für Musik."],
        ["sich vorstellen", "memperkenalkan diri", "Ich stelle mich vor."],
        ["sich fühlen", "merasa (kondisi)", "Wie fühlen Sie sich heute?"],
        ["sich treffen", "bertemu", "Wir treffen uns um drei Uhr."],
      ],
    },
  ],
  examples: [
    { de: "Ich wasche mich jeden Morgen.", id: "Saya mencuci diri setiap pagi." },
    { de: "Er zieht sich schnell an.", id: "Dia berpakaian dengan cepat." },
    { de: "Wir treffen uns um acht Uhr.", id: "Kami bertemu pukul delapan." },
    { de: "Sie freut sich über das Geschenk.", id: "Dia senang dengan hadiah itu." },
    { de: "Bitte setzen Sie sich!", id: "Silakan duduk!" },
  ],
  exercises: [
    {
      question: "Ich _____ mich für Deutsch interessieren.",
      options: ["interessiere", "interessiert", "interessierst"],
      answer: "interessiere",
    },
    {
      question: "Reflexivpronomen untuk 'er' adalah…",
      options: ["ihn", "sich", "ihm"],
      answer: "sich",
    },
    {
      question: "Terjemahan 'Ich freue mich.' adalah…",
      options: ["Saya memperkenalkan diri.", "Saya senang / merasa gembira.", "Saya merasa lelah."],
      answer: "Saya senang / merasa gembira.",
    },
  ],
};
