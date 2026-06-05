import type { GrammarTopic } from "@/content/types";

export const trennbareVerben: GrammarTopic = {
  id: "trennbare-verben",
  title: "Trennbare Verben",
  level: "A1",
  order: 6,
  icon: "✂️",
  explanation:
    "**Trennbare Verben** adalah kelompok kata kerja dalam bahasa Jerman yang memiliki **prefiks** (awalan) yang dapat terpisah dari kata kerja dasarnya saat digunakan dalam sebuah kalimat. Ciri khas dari kata kerja ini adalah penekanan nada saat diucapkan selalu jatuh pada prefiksnya. Beberapa awalan yang sangat umum antara lain **an-, auf-, aus-, ein-, mit-,** dan **zu-**.\n\n" +
    "Dalam struktur kalimat pernyataan, kata kerja dasar dikonjugasikan sesuai subjek dan menempati **Posisi 2**, sementara prefiksnya dipindahkan ke **akhir kalimat**. Struktur ini menciptakan **Satzklammer** (bingkai kalimat), di mana elemen kalimat lainnya berada di antara kata kerja yang dikonjugasikan dan prefiks tersebut.\n\n" +
    "Aturan pemisahan ini berubah jika kalimat menggunakan **Modalverben**. Jika terdapat kata kerja bantu seperti *müssen* atau *können*, maka Trennbare Verben **tidak dipisah** dan diletakkan di akhir kalimat dalam bentuk **Infinitiv**. Memahami letak prefiks sangat penting karena arti kata kerja bisa berubah total tergantung awalannya.",
  notes:
    "Prefiks harus selalu berada di posisi paling akhir dalam kalimat sederhana. Contoh: *Ich kaufe heute im Supermarkt **ein**.*",
  tables: [
    {
      caption: "Struktur Kalimat Trennbare Verben",
      headers: ["Subjek", "Posisi 2 (Verb)", "Tengah", "Akhir (Prefiks/Infinitiv)"],
      rows: [
        ["Ich", "kaufe", "im Supermarkt", "ein. ← prefiks"],
        ["Wir", "räumen", "die Wohnung", "auf. ← prefiks"],
        ["Ich", "muss", "morgen", "einkaufen. ← infinitiv"],
        ["Wir", "wollen", "die Wohnung", "aufräumen. ← infinitiv"],
      ],
    },
    {
      caption: "Prefiks Umum & Contoh Kata Kerja",
      headers: ["Prefiks", "Kata Kerja", "Arti"],
      rows: [
        ["an-", "anrufen", "menelepon"],
        ["auf-", "aufstehen", "bangun / berdiri"],
        ["aus-", "ausgehen", "pergi keluar"],
        ["ein-", "einkaufen", "berbelanja"],
        ["mit-", "mitkommen", "ikut serta"],
        ["zu-", "zumachen", "menutup"],
      ],
    },
  ],
  examples: [
    { de: "Wann fängt die Party an?", id: "Kapan pestanya dimulai?" },
    { de: "Ich rufe dich morgen an.", id: "Saya akan meneleponmu besok." },
    { de: "Um wie viel Uhr stehst du auf?", id: "Jam berapa kamu bangun?" },
    { de: "Kannst du bitte das Fenster zumachen?", id: "Bisakah kamu tolong menutup jendelanya?" },
  ],
  exercises: [
    {
      question: "Ich ___ jeden Morgen um 6 Uhr ___.",
      options: ["stehe / auf", "steht / auf", "auf / stehe"],
      answer: "stehe / auf",
    },
    {
      question: "___ du morgen ___? (mitkommen)",
      options: ["Kommst / mit", "Komm / mit", "Mit / kommst"],
      answer: "Kommst / mit",
    },
    {
      question: "Wir müssen heute noch ___.",
      options: ["einkaufen", "kaufen ein", "kaufe ein"],
      answer: "einkaufen",
    },
  ],
};
