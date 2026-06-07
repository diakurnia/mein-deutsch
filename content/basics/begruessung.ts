import type { BasicsTopic } from "@/content/basics-types";

export const begruessung: BasicsTopic = {
  id: "begruessung",
  title: "Begrüßung & Vorstellung",
  level: "A1",
  order: 7,
  icon: "👋",
  intro:
    "Frasa **salam (Begrüßung)** dan **perkenalan (Vorstellung)** adalah hal pertama yang dipakai saat bertemu orang. Perhatikan perbedaan sapaan informal (**Tschüss**) dan formal (**Auf Wiedersehen**).",
  groups: [
    {
      caption: "Salam & frasa penting",
      items: [
        { de: "Hallo", translation: "Halo" },
        { de: "Guten Morgen", translation: "Selamat pagi" },
        { de: "Guten Tag", translation: "Selamat siang" },
        { de: "Guten Abend", translation: "Selamat malam (sapaan)" },
        { de: "Gute Nacht", translation: "Selamat tidur" },
        { de: "Tschüss", translation: "Sampai jumpa (informal)" },
        { de: "Auf Wiedersehen", translation: "Sampai jumpa (formal)" },
        { de: "Wie geht's?", translation: "Apa kabar?" },
        { de: "Danke", translation: "Terima kasih" },
        { de: "Bitte", translation: "Sama-sama / silakan" },
        { de: "Entschuldigung", translation: "Maaf / permisi" },
      ],
    },
    {
      caption: "Perkenalan diri",
      items: [
        { de: "Ich heiße Anna.", translation: "Nama saya Anna." },
        { de: "Wie heißt du?", translation: "Siapa namamu?" },
        { de: "Ich komme aus Indonesien.", translation: "Saya berasal dari Indonesia." },
        { de: "Woher kommst du?", translation: "Kamu berasal dari mana?" },
        { de: "Freut mich.", translation: "Senang berkenalan." },
        { de: "Ich bin zwanzig Jahre alt.", translation: "Saya berumur dua puluh tahun." },
      ],
    },
  ],
  exercises: [
    {
      question: "Sapaan perpisahan yang formal adalah…",
      options: ["Tschüss", "Auf Wiedersehen", "Hallo"],
      answer: "Auf Wiedersehen",
    },
    {
      question: "'Wie geht's?' artinya…",
      options: ["Siapa namamu?", "Apa kabar?", "Dari mana kamu?"],
      answer: "Apa kabar?",
    },
    {
      question: "Untuk menyebut nama sendiri, gunakan…",
      options: ["Ich heiße…", "Ich komme…", "Ich bin … alt"],
      answer: "Ich heiße…",
    },
  ],
};
