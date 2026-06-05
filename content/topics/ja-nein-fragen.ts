import type { GrammarTopic } from "@/content/types";

export const jaNeinFragen: GrammarTopic = {
  id: "ja-nein-fragen-antworten",
  title: "Ja-/Nein-Fragen dan Jawaban",
  level: "A1",
  order: 9,
  icon: "✅",
  explanation:
    "**Ja-/Nein-Fragen** adalah jenis pertanyaan dalam bahasa Jerman yang hanya membutuhkan jawaban 'ya' atau 'tidak'. Berbeda dengan kalimat pernyataan atau W-Fragen, dalam struktur kalimat tanya jenis ini **kata kerja** yang dikonjugasikan selalu menempati **Posisi 1**, sementara **subjek** mengikuti tepat di sebelahnya pada **Posisi 2**.\n\n" +
    "Cara merespons pertanyaan ini bergantung pada bentuk kalimatnya. Untuk pertanyaan positif (tanpa kata negasi), jawab dengan **Ja** untuk mengiyakan atau **Nein** untuk menolak. Namun, bahasa Jerman memiliki aturan unik saat menghadapi pertanyaan negatif yang mengandung kata **nicht** atau **kein**.\n\n" +
    "Kata **doch** digunakan sebagai jawaban positif khusus untuk membantah pertanyaan negatif. Jika seseorang bertanya *'Haben Sie keine Zeit?'* (Apakah Anda tidak punya waktu?) dan Anda sebenarnya memiliki waktu, jawaban yang tepat adalah **Doch** — bukan *Ja*. Sebaliknya, jika Anda memang tidak punya waktu, tetap gunakan **Nein**.",
  notes:
    "Gunakan **doch** hanya untuk menjawab 'ya' pada pertanyaan yang mengandung negasi (*nicht* atau *kein*). Untuk pertanyaan positif biasa, gunakan **ja**.",
  tables: [
    {
      caption: "Struktur Kalimat Ja-/Nein-Fragen",
      headers: ["Posisi 1 (Verb)", "Posisi 2 (Subjek)", "Keterangan", "Jenis"],
      rows: [
        ["Lernen", "Sie", "Deutsch?", "Positif"],
        ["Kommen", "Sie", "heute?", "Positif"],
        ["Haben", "Sie", "keine Zeit?", "Negatif (kein)"],
        ["Kommen", "Sie", "heute nicht?", "Negatif (nicht)"],
      ],
    },
    {
      caption: "Pola Jawaban: Ja, Nein, dan Doch",
      headers: ["Bentuk Pertanyaan", "Jawaban Mengiyakan", "Jawaban Menolak"],
      rows: [
        ["Pertanyaan positif", "Ja", "Nein"],
        ["Pertanyaan negatif", "Doch ← khusus!", "Nein"],
      ],
    },
  ],
  examples: [
    { de: "Trinkst du einen Kaffee? - Ja, gerne.", id: "Apakah kamu mau minum kopi? - Ya, mau." },
    { de: "Ist das dein Handy? - Nein, das ist Julias Handy.", id: "Apakah ini ponselmu? - Bukan, itu ponsel milik Julia." },
    { de: "Sprichst du kein Deutsch? - Doch, ein bisschen.", id: "Apakah kamu tidak bicara bahasa Jerman? - Tentu saja bisa, sedikit." },
    { de: "Kommst du heute nicht zur Party? - Nein, ich habe keine Zeit.", id: "Apakah kamu tidak datang ke pesta hari ini? - Benar, saya tidak punya waktu." },
  ],
  exercises: [
    {
      question: "___ du aus Spanien? - Ja, ich komme aus Madrid.",
      options: ["Kommst", "Kommen", "Kommt"],
      answer: "Kommst",
    },
    {
      question: "Hast du keinen Hunger? - ___, ich möchte eine Pizza essen.",
      options: ["Ja", "Nein", "Doch"],
      answer: "Doch",
    },
    {
      question: "Lernen Sie Deutsch? - ___, ich lerne jetzt seit zwei Monaten.",
      options: ["Ja", "Nein", "Doch"],
      answer: "Ja",
    },
  ],
};
