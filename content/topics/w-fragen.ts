import type { GrammarTopic } from "@/content/types";

export const wFragen: GrammarTopic = {
  id: "w-fragen",
  title: "W-Fragen",
  level: "A1",
  order: 8,
  icon: "❓",
  explanation:
    "**W-Fragen** adalah jenis kalimat tanya dalam bahasa Jerman yang membutuhkan informasi spesifik sebagai jawabannya, bukan sekadar 'ya' atau 'tidak'. Disebut 'W-Fragen' karena kata tanya yang digunakan hampir selalu diawali huruf 'W', seperti **Wer** (siapa), **Was** (apa), **Wie** (bagaimana), dan **Wo** (di mana).\n\n" +
    "Dalam struktur kalimat, kata tanya (W-Wort) selalu menempati **Posisi 1**. Aturan emas bahasa Jerman tetap berlaku: kata kerja yang dikonjugasikan harus berada di **Posisi 2**, dan subjek diletakkan tepat setelahnya di Posisi 3.\n\n" +
    "Setiap kata tanya memiliki fungsi yang spesifik. **Woher** untuk menanyakan asal (*Herkunft*), **Wo** untuk menanyakan lokasi keberadaan (*Ort*), dan **Wohin** untuk menanyakan arah tujuan (*Ziel*). Memilih kata tanya yang tepat sangat penting agar lawan bicara memberikan informasi yang sesuai.",
  notes:
    "Kata tanya selalu mengawali kalimat (Posisi 1) dan kata kerja harus selalu berada tepat setelahnya (Posisi 2) — aturan ini tidak berubah meski ada kata tanya di depan.",
  tables: [
    {
      caption: "Struktur Kalimat W-Fragen",
      headers: ["Posisi 1 (W-Wort)", "Posisi 2 (Verb)", "Posisi 3 (Subjek)", "Keterangan"],
      rows: [
        ["Wie", "heißen", "Sie?", "—"],
        ["Wer", "ist", "das?", "—"],
        ["Woher", "kommen", "Sie?", "—"],
        ["Was", "machen", "Sie", "beruflich?"],
      ],
    },
    {
      caption: "Kata Tanya Populer (W-Wörter)",
      headers: ["W-Wort", "Arti", "Fungsi"],
      rows: [
        ["Wer", "Siapa", "Menanyakan orang"],
        ["Was", "Apa", "Menanyakan benda / aktivitas"],
        ["Wie", "Bagaimana", "Menanyakan nama / keadaan"],
        ["Wo", "Di mana", "Menanyakan lokasi (diam)"],
        ["Woher", "Dari mana", "Menanyakan asal"],
        ["Wann", "Kapan", "Menanyakan waktu"],
      ],
    },
  ],
  examples: [
    { de: "Wie geht es Ihnen?", id: "Bagaimana kabar Anda?" },
    { de: "Wo wohnst du?", id: "Di mana kamu tinggal?" },
    { de: "Was trinken Sie?", id: "Apa yang Anda minum?" },
    { de: "Woher kommst du?", id: "Dari mana kamu berasal?" },
  ],
  exercises: [
    {
      question: "___ heißen Sie? - Ich heiße Thomas Müller.",
      options: ["Wer", "Was", "Wie"],
      answer: "Wie",
    },
    {
      question: "___ kommen Sie? - Ich komme aus Brasilien.",
      options: ["Wo", "Woher", "Wohin"],
      answer: "Woher",
    },
    {
      question: "___ ist das? - Das ist mein Handy.",
      options: ["Wer", "Wie", "Was"],
      answer: "Was",
    },
  ],
};
