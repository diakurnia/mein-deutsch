import type { BasicsTopic } from "@/content/basics-types";

export const uhrzeit: BasicsTopic = {
  id: "uhrzeit",
  title: "Waktu / Jam",
  level: "A1",
  order: 5,
  icon: "🕐",
  intro:
    "Untuk menanyakan waktu, gunakan **\"Wie spät ist es?\"** (Jam berapa sekarang?). Dalam percakapan sehari-hari dipakai bentuk informal dengan **nach** (lewat) dan **vor** (kurang). Ingat: **halb** menunjuk setengah menuju jam *berikutnya* (mis. *halb vier* = 03.30).",
  groups: [
    {
      caption: "Pertanyaan & dasar",
      items: [
        { de: "Wie spät ist es?", translation: "Jam berapa sekarang?" },
        { de: "Es ist drei Uhr.", translation: "Pukul tiga." },
        { de: "Es ist Mittag.", translation: "Tengah hari (12.00)" },
        { de: "Es ist Mitternacht.", translation: "Tengah malam (00.00)" },
      ],
    },
    {
      caption: "Jam (informal)",
      items: [
        { de: "Es ist halb vier.", translation: "Pukul setengah empat (03.30)", hint: "halb = setengah menuju jam berikutnya" },
        { de: "Es ist Viertel nach drei.", translation: "Pukul tiga lewat seperempat (03.15)" },
        { de: "Es ist Viertel vor vier.", translation: "Pukul empat kurang seperempat (03.45)" },
        { de: "Es ist zehn nach drei.", translation: "Pukul tiga lewat sepuluh (03.10)" },
        { de: "Es ist fünf vor vier.", translation: "Pukul empat kurang lima (03.55)" },
      ],
    },
  ],
  exercises: [
    {
      question: "Cara menanyakan jam berapa…",
      options: ["Wie geht's?", "Wie spät ist es?", "Wie heißt du?"],
      answer: "Wie spät ist es?",
    },
    {
      question: "'halb vier' menunjukkan pukul…",
      options: ["04.30", "03.30", "03.15"],
      answer: "03.30",
    },
    {
      question: "Kata 'vor' dalam penyebutan jam berarti…",
      options: ["lewat", "kurang", "tepat"],
      answer: "kurang",
    },
  ],
};
