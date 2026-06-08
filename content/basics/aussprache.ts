import type { BasicsTopic } from "@/content/basics-types";

export const aussprache: BasicsTopic = {
  id: "aussprache",
  title: "Aussprache",
  level: "A1",
  order: 2,
  icon: "🗣️",
  intro:
    "**Aussprache** (pelafalan) adalah kunci agar bahasa Jermanmu mudah dimengerti. Beberapa gabungan huruf dan huruf tertentu dibaca berbeda dari bahasa Indonesia. Dengarkan tiap contoh dengan tombol 🔊.",
  groups: [
    {
      caption: "Bunyi gabungan",
      items: [
        { de: "Schule", translation: "sekolah", hint: "sch dibaca /sy/" },
        { de: "ich", translation: "saya", hint: "ch (setelah e/i) lembut /ç/" },
        { de: "Buch", translation: "buku", hint: "ch (setelah a/o/u) serak /x/" },
        { de: "mein", translation: "milikku", hint: "ei dibaca /ai/" },
        { de: "Liebe", translation: "cinta", hint: "ie dibaca /i:/ panjang" },
        { de: "neun", translation: "sembilan", hint: "eu dibaca /oi/" },
        { de: "Haus", translation: "rumah", hint: "au dibaca /au/" },
        { de: "sprechen", translation: "berbicara", hint: "sp- di awal /syp/" },
        { de: "Stadt", translation: "kota", hint: "st- di awal /syt/" },
      ],
    },
    {
      caption: "Huruf khusus",
      items: [
        { de: "Wasser", translation: "air", hint: "w dibaca /v/" },
        { de: "Vater", translation: "ayah", hint: "v dibaca /f/" },
        { de: "Zeit", translation: "waktu", hint: "z dibaca /ts/" },
        { de: "Straße", translation: "jalan", hint: "ß dibaca /s/ tajam" },
        { de: "ja", translation: "ya", hint: "j dibaca /y/" },
        { de: "schön", translation: "indah", hint: "ö antara o dan e" },
        { de: "über", translation: "di atas", hint: "ü antara u dan i" },
      ],
    },
  ],
  exercises: [
    {
      question: "Kata 'Wasser' diawali bunyi…",
      options: ["/v/", "/w/", "/f/"],
      answer: "/v/",
    },
    {
      question: "Huruf 'z' pada 'Zeit' dibaca…",
      options: ["/z/", "/ts/", "/s/"],
      answer: "/ts/",
    },
    {
      question: "Gabungan 'ei' pada 'mein' dibaca…",
      options: ["/ai/", "/ei/", "/i/"],
      answer: "/ai/",
    },
    {
      question: "Gabungan 'sch' pada 'Schule' dibaca…",
      options: ["/sy/", "/sk/", "/c/"],
      answer: "/sy/",
    },
    {
      question: "Huruf 'v' pada 'Vater' dibaca…",
      options: ["/f/", "/v/", "/w/"],
      answer: "/f/",
    },
  ],
};
