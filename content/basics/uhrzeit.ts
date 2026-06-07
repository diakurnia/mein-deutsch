import type { BasicsTopic } from "@/content/basics-types";

export const uhrzeit: BasicsTopic = {
  id: "uhrzeit",
  title: "Waktu / Jam",
  level: "A1",
  order: 5,
  icon: "🕐",
  intro:
    "Bahasa Jerman memiliki **dua sistem penyebutan waktu** yang berbeda tujuannya:\n\n" +
    "**Formal (resmi):** Memakai jam 24 jam. Digunakan di stasiun, bandara, siaran TV/radio, dan pengumuman resmi. Format: *[jam] Uhr [menit]*. Contoh: *neun Uhr dreißig* = 09:30, *vierzehn Uhr fünfzehn* = 14:15.\n\n" +
    "**Informal (percakapan):** Memakai jam 12 jam dengan kata **nach** (lewat), **vor** (kurang), **Viertel** (seperempat), dan **halb** (setengah). Digunakan saat berbicara sehari-hari.\n\n" +
    "⚠️ **Aturan paling penting — halb:** *halb* menunjuk setengah menuju jam **berikutnya**, bukan jam yang sedang berjalan! *halb vier* = 03:30 (setengah sebelum jam 4), **bukan** 04:30. Ini kebalikan dari cara pikir bahasa Indonesia!",
  groups: [
    {
      caption: "Pertanyaan & frasa dasar",
      items: [
        { de: "Wie spät ist es?", translation: "Jam berapa sekarang?" },
        { de: "Wie viel Uhr ist es?", translation: "Jam berapa sekarang? (alternatif)" },
        { de: "Es ist drei Uhr.", translation: "🕒 Pukul tiga tepat (03:00)" },
        { de: "Es ist Mittag.", translation: "🕛 Tengah hari (12:00)" },
        { de: "Es ist Mitternacht.", translation: "🕛 Tengah malam (00:00)" },
        { de: "Um wie viel Uhr?", translation: "Pukul berapa? (menanyakan jadwal)" },
      ],
    },
    {
      caption: "⏰ Formal — jam 24 jam (stasiun, bandara, siaran resmi)",
      items: [
        { de: "neun Uhr", translation: "🕘 09:00", hint: "[jam] Uhr — untuk jam tepat" },
        { de: "neun Uhr fünfzehn", translation: "🕘 09:15", hint: "[jam] Uhr [menit]" },
        { de: "neun Uhr dreißig", translation: "🕤 09:30", hint: "[jam] Uhr [menit]" },
        { de: "neun Uhr fünfundvierzig", translation: "🕘 09:45", hint: "[jam] Uhr [menit]" },
        { de: "vierzehn Uhr", translation: "🕑 14:00", hint: "jam 14 = 2 siang (24 jam)" },
        { de: "vierzehn Uhr dreißig", translation: "🕝 14:30", hint: "jam 14:30 = 2 siang lewat 30" },
        { de: "zwanzig Uhr fünfzehn", translation: "🕗 20:15", hint: "jam 20:15 = 8 malam lewat 15" },
      ],
    },
    {
      caption: "💬 Informal — jam tepat & setengah",
      items: [
        { de: "Es ist drei Uhr.", translation: "🕒 03:00 — pukul tiga tepat", hint: "[jam] Uhr untuk jam bulat" },
        { de: "Es ist halb vier.", translation: "🕞 03:30 — setengah empat", hint: "⚠️ halb EMPAT = 03:30 (bukan 04:30!)" },
        { de: "Es ist halb acht.", translation: "🕣 07:30 — setengah delapan", hint: "halb DELAPAN = 07:30" },
        { de: "Es ist halb zwölf.", translation: "🕦 11:30 — setengah dua belas", hint: "halb DUA BELAS = 11:30" },
        { de: "Es ist halb eins.", translation: "🕧 12:30 — setengah satu", hint: "halb SATU = 12:30" },
      ],
    },
    {
      caption: "💬 Informal — seperempat (Viertel)",
      items: [
        { de: "Es ist Viertel nach drei.", translation: "🕒 03:15 — tiga lewat seperempat", hint: "Viertel nach [jam] = lewat 15 menit" },
        { de: "Es ist Viertel vor vier.", translation: "🕓 03:45 — empat kurang seperempat", hint: "Viertel vor [jam] = kurang 15 menit" },
        { de: "Es ist Viertel nach neun.", translation: "🕘 09:15", hint: "Viertel nach = lewat 15 menit" },
        { de: "Es ist Viertel vor zehn.", translation: "🕙 09:45", hint: "Viertel vor = kurang 15 menit" },
      ],
    },
    {
      caption: "💬 Informal — pola lengkap 1 jam (contoh: jam 3)",
      items: [
        { de: "drei Uhr", translation: "🕒 03:00", hint: "jam tepat" },
        { de: "fünf nach drei", translation: "🕒 03:05", hint: "[menit] nach [jam]" },
        { de: "zehn nach drei", translation: "🕒 03:10", hint: "[menit] nach [jam]" },
        { de: "Viertel nach drei", translation: "🕒 03:15", hint: "Viertel nach [jam]" },
        { de: "zwanzig nach drei", translation: "🕒 03:20", hint: "[menit] nach [jam]" },
        { de: "fünf vor halb vier", translation: "🕞 03:25", hint: "5 menit sebelum halb vier (03:30)" },
        { de: "halb vier", translation: "🕞 03:30", hint: "⚠️ setengah menuju jam 4!" },
        { de: "fünf nach halb vier", translation: "🕞 03:35", hint: "5 menit setelah halb vier (03:30)" },
        { de: "zwanzig vor vier", translation: "🕓 03:40", hint: "[menit] vor [jam berikutnya]" },
        { de: "Viertel vor vier", translation: "🕓 03:45", hint: "Viertel vor [jam berikutnya]" },
        { de: "zehn vor vier", translation: "🕓 03:50", hint: "[menit] vor [jam berikutnya]" },
        { de: "fünf vor vier", translation: "🕓 03:55", hint: "[menit] vor [jam berikutnya]" },
      ],
    },
    {
      caption: "📌 Formal vs Informal — perbandingan",
      items: [
        { de: "neun Uhr dreißig", translation: "🕤 Formal → 09:30", hint: "di stasiun / siaran resmi" },
        { de: "halb zehn", translation: "🕤 Informal → 09:30", hint: "dalam percakapan sehari-hari" },
        { de: "vierzehn Uhr fünfzehn", translation: "🕑 Formal → 14:15", hint: "di stasiun / siaran resmi" },
        { de: "Viertel nach zwei", translation: "🕑 Informal → 14:15", hint: "dalam percakapan (jam 2 siang)" },
        { de: "zwanzig Uhr dreißig", translation: "🕗 Formal → 20:30", hint: "di stasiun / siaran resmi" },
        { de: "halb neun", translation: "🕗 Informal → 20:30", hint: "dalam percakapan (jam 8 malam)" },
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
      options: ["04:30", "03:30", "03:15"],
      answer: "03:30",
    },
    {
      question: "Kata 'vor' dalam penyebutan jam berarti…",
      options: ["lewat", "kurang", "tepat"],
      answer: "kurang",
    },
    {
      question: "'Viertel nach drei' artinya pukul…",
      options: ["03:45", "02:15", "03:15"],
      answer: "03:15",
    },
    {
      question: "Penyebutan formal 'neun Uhr dreißig' dipakai di…",
      options: ["percakapan teman", "stasiun/bandara/siaran resmi", "saat bertanya ke orang"],
      answer: "stasiun/bandara/siaran resmi",
    },
    {
      question: "03:25 dalam bahasa Jerman informal adalah…",
      options: ["fünf nach drei", "fünf vor halb vier", "zwanzig nach drei"],
      answer: "fünf vor halb vier",
    },
  ],
};
