import type { GrammarTopic } from "@/content/types";

export const kasusDativ: GrammarTopic = {
  id: "kasus-dativ",
  title: "Kasus Dativ",
  level: "A1",
  order: 17,
  icon: "🎁",
  explanation:
    "**Kasus Dativ** digunakan untuk menunjukkan **objek tidak langsung** dalam sebuah kalimat — yaitu orang yang menerima sesuatu atau menjadi sasaran tidak langsung dari sebuah tindakan. Selain itu, kasus ini wajib digunakan setelah kata kerja tertentu seperti **helfen** (membantu), **danken** (berterima kasih), dan **gefallen** (berkenan/disukai).\n\n" +
    "Dalam **Dativ**, terjadi perubahan artikel untuk semua gender. Artikel maskulin (*der*) dan netral (*das*) sama-sama berubah menjadi **dem**. Artikel feminin (*die*) berubah menjadi **der**, sedangkan bentuk jamak berubah menjadi **den**.\n\n" +
    "Aturan khusus yang perlu diperhatikan: pada bentuk jamak dalam Dativ, hampir semua kata benda mendapat tambahan **-n** di akhir kata, kecuali yang sudah berakhiran *-n* atau *-s* (seperti *Autos*). Banyak preposisi umum seperti **mit**, **nach**, **von**, dan **zu** juga selalu menuntut Dativ.",
  notes:
    "Preposisi + artikel sering melebur: **beim** (bei + dem), **vom** (von + dem), **zum** (zu + dem), **zur** (zu + der). Bentuk gabungan ini sangat umum dalam percakapan.",
  tables: [
    {
      caption: "Perubahan Artikel dalam Kasus Dativ",
      headers: ["Artikel", "Maskulin (der) ⚡", "Netral (das) ⚡", "Feminin (die) ⚡", "Plural ⚡"],
      rows: [
        ["Bestimmt", "dem", "dem", "der", "den (+n)"],
        ["Unbestimmt", "einem", "einem", "einer", "—"],
        ["Negasi (kein)", "keinem", "keinem", "keiner", "keinen (+n)"],
      ],
    },
  ],
  examples: [
    { de: "Ich helfe dem Mann.", id: "Saya membantu laki-laki itu. (der Mann → dem Mann)" },
    { de: "Das Kleid gefällt der Frau.", id: "Gaun itu berkenan bagi wanita tersebut. (die Frau → der Frau)" },
    { de: "Ich fahre mit dem Auto.", id: "Saya pergi dengan mobil. (das Auto → dem Auto)" },
    { de: "Ich danke den Kindern.", id: "Saya berterima kasih kepada anak-anak. (die Kinder → den Kindern)" },
  ],
  exercises: [
    {
      question: "Wie geht es ___ Vater? (der Vater — maskulin)",
      options: ["dem", "den", "der"],
      answer: "dem",
    },
    {
      question: "Ich gratuliere ___ Freundin zum Geburtstag. (die Freundin — feminin)",
      options: ["dem", "der", "den"],
      answer: "der",
    },
    {
      question: "Ich spreche mit ___ Leuten. (die Leute — plural)",
      options: ["der", "dem", "den"],
      answer: "den",
    },
  ],
};
