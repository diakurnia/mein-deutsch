import type { GrammarTopic } from "@/content/types";

export const verbenSeinHaben: GrammarTopic = {
  id: "verben-sein-haben-besonder-verben",
  title: "Verben 'sein', 'haben', dan Kata Kerja Khusus",
  level: "A1",
  order: 4,
  icon: "🌟",
  explanation:
    "Kata kerja **sein** (to be) dan **haben** (to have) adalah pondasi paling dasar dalam bahasa Jerman. Keduanya merupakan kata kerja tidak beraturan yang konjugasinya harus dihafalkan karena sering digunakan sebagai kata kerja utama maupun kata kerja bantu di level yang lebih tinggi. **Sein** digunakan untuk menyatakan identitas, profesi, atau kondisi, sedangkan **haben** menyatakan kepemilikan atau hubungan.\n\n" +
    "Selain itu, terdapat beberapa kata kerja khusus yang penting di level A1: **möchten** (ingin) digunakan untuk menyatakan keinginan secara sopan; **mögen** (suka) menyatakan kesukaan terhadap sesuatu secara umum; **wissen** (tahu) digunakan untuk pengetahuan berupa fakta atau informasi; dan **tun** (melakukan) sering dikaitkan dengan aktivitas atau kondisi kesehatan seperti *weh tun* (sakit).\n\n" +
    "Kata-kata kerja ini memiliki pola perubahan vokal yang unik, terutama pada subjek tunggal (ich, du, er/sie/es). Sebagai contoh, *wissen* berubah drastis dari bentuk dasar menjadi *ich weiß* dan *du weißt*. Memahami perbedaan antara **möchten** dan **mögen** sangat penting untuk berkomunikasi dengan tepat dalam situasi sosial seperti di restoran atau saat membicarakan hobi.",
  notes:
    "Bentuk konjugasi untuk subjek **wir** dan **sie/Sie** biasanya identik dengan bentuk Infinitiv (kata dasar), kecuali untuk kata kerja **sein** yang berubah menjadi *sind*.",
  tables: [
    {
      caption: "Konjugasi sein dan haben",
      headers: ["Subjek", "sein", "haben"],
      rows: [
        ["ich", "bin", "habe"],
        ["du", "bist", "hast"],
        ["er/sie/es", "ist", "hat"],
        ["wir", "sind", "haben"],
        ["ihr", "seid", "habt"],
        ["sie/Sie", "sind", "haben"],
      ],
    },
    {
      caption: "Konjugasi Kata Kerja Khusus",
      headers: ["Subjek", "möchten", "mögen", "wissen", "tun"],
      rows: [
        ["ich", "möchte", "mag", "weiß", "tue"],
        ["du", "möchtest", "magst", "weißt", "tust"],
        ["er/sie/es", "möchte", "mag", "weiß", "tut"],
        ["wir", "möchten", "mögen", "wissen", "tun"],
        ["ihr", "möchtet", "mögt", "wisst", "tut"],
        ["sie/Sie", "möchten", "mögen", "wissen", "tun"],
      ],
    },
  ],
  examples: [
    { de: "Ich bin Lehrerin von Beruf.", id: "Pekerjaan saya adalah seorang guru." },
    { de: "Wir haben zwei Kinder.", id: "Kami mempunyai dua orang anak." },
    { de: "Ich möchte einen Kaffee trinken, bitte.", id: "Saya ingin minum kopi, tolong." },
    { de: "Weißt du, wie spät es ist?", id: "Apakah kamu tahu jam berapa sekarang?" },
  ],
  exercises: [
    {
      question: "___ du ein Handy?",
      options: ["Bist", "Hast", "Ist"],
      answer: "Hast",
    },
    {
      question: "Ich ___ Italien. Ich ___ Urlaub machen.",
      options: ["mag / möchte", "bin / habe", "weiß / möchte"],
      answer: "mag / möchte",
    },
    {
      question: "Guten Tag, wie ___ Ihr Name?",
      options: ["ist", "bin", "bist"],
      answer: "ist",
    },
    {
      question: "Wir ___ aus Indonesien und ___ zwei Kinder.",
      options: ["sind / haben", "seid / habt", "sind / habt"],
      answer: "sind / haben",
    },
    {
      question: "___ du, wie spät es ist?",
      options: ["Weißt", "Weiß", "Wisst"],
      answer: "Weißt",
    },
  ],
};
