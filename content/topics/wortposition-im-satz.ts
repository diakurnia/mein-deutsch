import type { GrammarTopic } from "@/content/types";

export const wortpositionImSatz: GrammarTopic = {
  id: "wortposition-im-satz",
  title: "Wortposition im Satz",
  level: "A1",
  order: 10,
  icon: "🔢",
  explanation:
    "Dalam tata bahasa Jerman, aturan paling krusial adalah posisi kata kerja yang dikonjugasikan. Dalam kalimat pernyataan (**Aussagesatz**) dan kalimat tanya dengan kata tanya (**W-Fragen**), kata kerja harus selalu berada di **Posisi 2**. Meskipun elemen lain dapat berpindah tempat, posisi kedua untuk kata kerja adalah harga mati yang tidak bisa diubah.\n\n" +
    "Bahasa Jerman mengenal istilah **Inversion** (pembalikan posisi). Biasanya subjek berada di Posisi 1. Namun, jika Anda ingin menekankan keterangan waktu atau tempat dengan meletakkannya di **Posisi 1**, maka **subjek** harus pindah ke **Posisi 3** — agar kata kerja tetap konsisten berada di urutan kedua.\n\n" +
    "Berbeda dengan kalimat pernyataan, pada kalimat tanya ya/tidak (**Ja-/Nein-Fragen**) dan kalimat perintah (**Imperativ**), kata kerja justru menempati **Posisi 1**. Memahami fleksibilitas posisi subjek dan kekakuan posisi kata kerja adalah kunci utama membentuk kalimat Jerman yang alami dan benar.",
  notes:
    "Aturan emas: elemen apa pun yang ada di Posisi 1 — baik satu kata maupun satu frasa panjang — kata kerja tetap harus berada di urutan kedua.",
  tables: [
    {
      caption: "Kalimat Pernyataan & Inversi",
      headers: ["Posisi 1", "Posisi 2 (Verb)", "Posisi 3+", ""],
      rows: [
        ["Ich", "wohne", "seit zwei Monaten", "in Deutschland."],
        ["Seit zwei Monaten", "wohne", "ich", "in Deutschland."],
        ["Wir", "essen", "am Abend", "Pizza."],
        ["Am Abend", "essen", "wir", "Pizza."],
      ],
    },
    {
      caption: "Posisi Kata dalam Berbagai Jenis Kalimat",
      headers: ["Jenis Kalimat", "Posisi 1", "Posisi 2", "Contoh"],
      rows: [
        ["W-Frage", "Kata tanya", "Verb", "Wo wohnen Sie?"],
        ["Ja-/Nein-Frage", "Verb", "Subjek", "Spielen Sie Tennis?"],
        ["Imperativ", "Verb", "Objek/Ket.", "Trinken Sie Kaffee!"],
      ],
    },
  ],
  examples: [
    { de: "Morgen gehe ich ins Kino.", id: "Besok saya pergi ke bioskop. (inversi — 'Morgen' di Posisi 1)" },
    { de: "Ich gehe morgen ins Kino.", id: "Saya pergi ke bioskop besok. (urutan normal)" },
    { de: "Was machen Sie in Ihrer Freizeit?", id: "Apa yang Anda lakukan di waktu senggang?" },
    { de: "Hier dürfen Sie nicht parken.", id: "Di sini Anda tidak boleh parkir." },
  ],
  exercises: [
    {
      question: "Heute ___ Maria nach Berlin.",
      options: ["fährst", "fährt", "fahren"],
      answer: "fährt",
    },
    {
      question: "Am Samstag ___ wir ins Theater.",
      options: ["gehen", "geht", "gehst"],
      answer: "gehen",
    },
    {
      question: "___ du am Montag Zeit?",
      options: ["Hast", "Hast du", "Du hast"],
      answer: "Hast",
    },
  ],
};
