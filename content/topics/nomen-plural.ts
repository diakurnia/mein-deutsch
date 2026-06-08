import type { GrammarTopic } from "@/content/types";

export const nomenPlural: GrammarTopic = {
  id: "nomen-plural",
  title: "Nomen: Plural",
  level: "A1",
  order: 9,
  icon: "📚",
  explanation:
    "Dalam bahasa Jerman, pembentukan kata benda jamak (**Plural**) tidak memiliki satu aturan tunggal yang berlaku untuk semua kata. Setiap kata benda memiliki bentuk jamak spesifik yang perlu dihafalkan bersama bentuk tunggalnya karena perubahannya bisa sangat bervariasi.\n\n" +
    "Ciri utama bentuk jamak adalah penggunaan artikel **die** untuk semua gender kata benda, baik maskulin (*der*), feminin (*die*), maupun netral (*das*). Secara umum terdapat lima pola akhiran utama: **-n/-en**, **-e**, **-er**, **-s**, atau **tanpa akhiran** sama sekali.\n\n" +
    "Selain penambahan akhiran, banyak kata benda yang mengalami perubahan vokal dasar **a, o, u** menjadi **ä, ö, ü** (**Umlaut**) saat berubah ke bentuk jamak. Contohnya, *der Apfel* (apel) menjadi *die Äpfel* dalam bentuk jamak tanpa tambahan akhiran.",
  notes:
    "Beberapa kata benda tidak memiliki bentuk jamak (seperti *das Wasser*), atau justru hanya ada dalam bentuk jamak (seperti *die Eltern* — orang tua, *die Ferien* — liburan).",
  tables: [
    {
      caption: "Akhiran Umum Pembentukan Plural",
      headers: ["Akhiran", "Singular", "Plural"],
      rows: [
        ["-(e)n", "die Tasche / die Frau", "die Taschen / die Frauen"],
        ["-e (+ Umlaut)", "der Tisch / die Hand", "die Tische / die Hände"],
        ["-er (+ Umlaut)", "das Kind / das Buch", "die Kinder / die Bücher"],
        ["-s", "das Handy / das Auto", "die Handys / die Autos"],
        ["Tanpa akhiran", "der Lehrer / der Computer", "die Lehrer / die Computer"],
      ],
    },
  ],
  examples: [
    { de: "Das sind die Männer und die Frauen.", id: "Itu adalah laki-laki dan perempuan (jamak)." },
    { de: "Ich habe zwei Handys.", id: "Saya punya dua ponsel." },
    { de: "Hier liegen viele Bücher.", id: "Di sini terletak banyak buku." },
    { de: "Die Kinder spielen im Park.", id: "Anak-anak itu bermain di taman." },
  ],
  exercises: [
    {
      question: "Das ist ein Buch. Hier liegen viele ___.",
      options: ["Bücher", "Buchen", "Buchs"],
      answer: "Bücher",
    },
    {
      question: "Haben Sie Kinder? - Ja, ich habe zwei ___.",
      options: ["Sohn", "Söhne", "Sohns"],
      answer: "Söhne",
    },
    {
      question: "Wie viel kosten die ___?",
      options: ["Apfel", "Äpfel", "Apfeln"],
      answer: "Äpfel",
    },
    {
      question: "Bentuk jamak dari 'die Frau' adalah…",
      options: ["die Frauen", "die Fraue", "die Fräue"],
      answer: "die Frauen",
    },
    {
      question: "Artikel untuk SEMUA kata benda jamak adalah…",
      options: ["die", "der", "das"],
      answer: "die",
    },
  ],
};
