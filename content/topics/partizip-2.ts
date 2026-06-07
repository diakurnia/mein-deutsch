import type { GrammarTopic } from "@/content/types";

export const partizip2: GrammarTopic = {
  id: "partizip-2",
  title: "Partizip II",
  level: "A1",
  order: 29,
  icon: "🏗️",
  explanation:
    "**Partizip II** adalah bentuk kata kerja non-finit yang digunakan bersama kata kerja bantu (*haben* atau *sein*) untuk membentuk masa lampau **Perfekt**. Dalam struktur kalimat, **Partizip II** selalu menempati posisi paling akhir. Pembentukan bentuk ini bervariasi tergantung apakah kata kerja tersebut beraturan, tidak beraturan, atau memiliki prefiks tertentu.\n\n" +
    "Kata kerja beraturan (**schwache Verben**) dibentuk dengan pola **ge- … -(e)t**, seperti *machen* → *gemacht*. Kata kerja tidak beraturan (**starke Verben**) umumnya mengikuti pola **ge- … -en** dan sering mengalami perubahan vokal, contohnya *sehen* → *gesehen* atau *gehen* → *gegangen*.\n\n" +
    "Ada pengecualian penting: kata kerja berakhiran **-ieren** (seperti *studieren*) dan kata kerja dengan **prefiks tidak terpisah** (seperti *be-, ver-, er-*) tidak menggunakan awalan **ge-** dalam Partizip II-nya. Memahami kategori ini penting agar kalimat masa lampau terbentuk dengan benar.",
  notes:
    "Untuk **Trennbare Verben** (kata kerja terpisah), sisipan **-ge-** diletakkan di antara awalan dan kata kerjanya — contoh: *einkaufen* → *eingekauft*.",
  tables: [
    {
      caption: "Pola Pembentukan Partizip II",
      headers: ["Jenis Kata Kerja", "Pola", "Contoh"],
      rows: [
        ["Beraturan", "ge- + dasar + -(e)t", "machen → gemacht"],
        ["Tidak Beraturan", "ge- + dasar + -en", "fahren → gefahren"],
        ["Akhiran -ieren", "dasar + -t (tanpa ge-)", "studieren → studiert"],
        ["Trennbar (terpisah)", "awalan + ge- + dasar + t/en", "einkaufen → eingekauft"],
        ["Tidak Terpisah", "dasar + t/en (tanpa ge-)", "besuchen → besucht"],
      ],
    },
  ],
  examples: [
    { de: "Ich habe gestern Pizza gegessen.", id: "Saya sudah makan pizza kemarin." },
    { de: "Er hat die Wohnung aufgeräumt.", id: "Dia sudah merapikan apartemennya." },
    { de: "Habt ihr am Wochenende gearbeitet?", id: "Apakah kalian sudah bekerja di akhir pekan?" },
    { de: "Ich habe in Berlin studiert.", id: "Saya sudah kuliah di Berlin." },
  ],
  exercises: [
    {
      question: "Was hast du am Sonntag ___? (machen)",
      options: ["gemacht", "gemachen", "macht"],
      answer: "gemacht",
    },
    {
      question: "Ich habe meine Mutter ___ (anrufen).",
      options: ["angeruft", "angerufen", "gerufen"],
      answer: "angerufen",
    },
    {
      question: "Herr Müller hat uns gestern ___ (besuchen).",
      options: ["gebesucht", "besuchen", "besucht"],
      answer: "besucht",
    },
  ],
};
