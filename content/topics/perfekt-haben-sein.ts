import type { GrammarTopic } from "@/content/types";

export const perfektHabenSein: GrammarTopic = {
  id: "perfekt-haben-sein",
  title: "Perfekt dengan 'haben' dan 'sein'",
  level: "A1",
  order: 28,
  icon: "⏳",
  explanation:
    "**Perfekt** adalah bentuk waktu lampau yang paling sering digunakan dalam percakapan sehari-hari untuk menceritakan kejadian yang sudah selesai dilakukan. Strukturnya terdiri dari dua bagian tetap (**Satzklammer**): kata kerja bantu (**Hilfsverb**) yang dikonjugasikan di Posisi 2 dan kata kerja utama dalam bentuk **Partizip II** di akhir kalimat.\n\n" +
    "Kebanyakan kata kerja menggunakan kata bantu **haben**. Namun, terdapat kelompok kata kerja yang menggunakan **sein**, yaitu kata kerja yang menunjukkan perpindahan tempat (dari A ke B) atau perubahan kondisi. Selain itu, kata kerja seperti *bleiben* (tinggal) dan *passieren* (terjadi) juga wajib menggunakan **sein** meskipun tidak ada perpindahan.\n\n" +
    "Cara membentuk **Partizip II** untuk kata kerja beraturan: tambahkan awalan **ge-** dan akhiran **-t** pada kata dasar — contoh: *machen* → *gemacht*, *kaufen* → *gekauft*. Untuk kata kerja tidak beraturan, bentuk Partizip II-nya harus dihafalkan.",
  notes:
    "Dalam kalimat Perfekt, hanya kata bantu (*haben/sein*) yang berubah mengikuti subjek — sedangkan **Partizip II** di akhir kalimat bentuknya selalu tetap.",
  tables: [
    {
      caption: "Struktur Kalimat Perfekt",
      headers: ["Subjek", "Posisi 2 (Hilfsverb)", "Tengah", "Akhir (Partizip II)"],
      rows: [
        ["Ich", "habe", "zehn Stunden", "gearbeitet."],
        ["Julian", "ist", "nach Hamburg", "gefahren."],
        ["Wir", "haben", "Pizza", "gegessen."],
        ["Sie", "sind", "pünktlich", "gekommen."],
      ],
    },
    {
      caption: "Pilihan Kata Bantu (haben atau sein?)",
      headers: ["Kategori", "Kata Bantu", "Contoh Kata Kerja"],
      rows: [
        ["Kebanyakan kata kerja", "haben", "arbeiten, essen, trinken, machen, kaufen"],
        ["Pergerakan (A → B)", "sein", "gehen, fahren, kommen, fliegen, reisen"],
        ["Perubahan kondisi", "sein", "aufstehen, einschlafen, aufwachen"],
        ["Pengecualian", "sein", "bleiben, passieren"],
      ],
    },
  ],
  examples: [
    { de: "Was hast du gestern gemacht?", id: "Apa yang sudah kamu lakukan kemarin?" },
    { de: "Ich habe ein Brot gegessen.", id: "Saya sudah makan roti." },
    { de: "Er ist gestern nach Berlin gefahren.", id: "Dia kemarin sudah pergi ke Berlin." },
    { de: "Wir sind zu Hause geblieben.", id: "Kami sudah tinggal di rumah." },
  ],
  exercises: [
    {
      question: "Ich ___ gestern viel Deutsch gelernt.",
      options: ["bin", "habe", "hat"],
      answer: "habe",
    },
    {
      question: "Wann ___ Julian nach Hause gekommen?",
      options: ["ist", "hat", "sind"],
      answer: "ist",
    },
    {
      question: "Wir ___ am Wochenende Pizza gegessen.",
      options: ["sind", "haben", "hatten"],
      answer: "haben",
    },
  ],
};
