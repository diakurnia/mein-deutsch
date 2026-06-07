import type { GrammarTopic } from "@/content/types";

export const modalverben: GrammarTopic = {
  id: "modalverben-konjugasi-posisi",
  title: "Modalverben: Konjugasi dan Posisi dalam Kalimat",
  level: "A1",
  order: 6,
  icon: "🧩",
  explanation:
    "**Modalverben** (kata kerja bantu modal) adalah kelompok kata kerja yang mengubah makna dasar dari kata kerja lain dalam sebuah kalimat, seperti menyatakan kemampuan, keharusan, atau keinginan. Di level A1, terdapat enam modal verbs utama: **können** (bisa), **müssen** (harus), **wollen** (ingin/hendak), **dürfen** (boleh), **sollen** (seharusnya), dan **möchten** (ingin/suka).\n\n" +
    "Konjugasi **Modalverben** memiliki pola unik yang berbeda dari kata kerja biasa. Pada subjek tunggal (*ich, du, er/sie/es*), huruf vokal pada kata dasar biasanya berubah. Ciri khas paling penting adalah bentuk untuk **ich** dan **er/sie/es** selalu **identik** dan tidak memiliki akhiran. Pada subjek jamak (*wir, ihr, sie/Sie*), konjugasinya kembali mengikuti pola kata kerja beraturan.\n\n" +
    "Dalam struktur kalimat, **Modalverben** menempati **Posisi 2** sebagai kata kerja yang dikonjugasikan. Kata kerja utama dipindahkan ke **akhir kalimat** dalam bentuk **Infinitiv**, membentuk **Satzklammer**.\n\n" +
    "⚠️ **Perbedaan krusial yang sering salah:** *nicht müssen* ≠ *nicht dürfen*!\n\n" +
    "**nicht müssen** = tidak perlu / tidak harus (tidak ada kewajiban, bebas memilih)\n\n" +
    "**nicht dürfen** = tidak boleh / dilarang (ada larangan aktif)\n\n" +
    "*Du musst nicht kommen.* → Kamu tidak harus datang. (bebas)\n\n" +
    "*Du darfst nicht kommen.* → Kamu tidak boleh datang. (dilarang)",
  notes:
    "Jika konteks pembicaraan sudah jelas, kata kerja utama di akhir kalimat kadang bisa dihilangkan. Contoh: *Ich muss nach Hause* (gehen tersirat). **möchten** adalah bentuk sopan dari *wollen* — dipakai saat memesan makanan/minuman atau meminta sesuatu dengan sopan.",
  tables: [
    {
      caption: "Konjugasi Modalverben (Präsens)",
      headers: ["Subjek", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
      rows: [
        ["ich ⚡", "kann", "muss", "will", "darf", "soll", "möchte"],
        ["du", "kannst", "musst", "willst", "darfst", "sollst", "möchtest"],
        ["er/sie/es ⚡", "kann", "muss", "will", "darf", "soll", "möchte"],
        ["wir", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
        ["ihr", "könnt", "müsst", "wollt", "dürft", "sollt", "möchtet"],
        ["sie/Sie", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
      ],
    },
    {
      caption: "Fungsi tiap Modalverb",
      headers: ["Modal", "Fungsi", "Contoh sehari-hari"],
      rows: [
        ["können", "kemampuan / kemungkinan", "Ich kann Fahrrad fahren. Kannst du mir helfen?"],
        ["müssen", "keharusan / kebutuhan", "Ich muss früh aufstehen. Du musst mehr trinken."],
        ["wollen", "keinginan kuat", "Ich will Arzt werden. Wir wollen ins Kino gehen."],
        ["dürfen", "izin / larangan (+ nicht)", "Darf ich kurz fragen? Hier darf man nicht rauchen."],
        ["sollen", "perintah / harapan orang lain", "Du sollst pünktlich sein. Was soll ich kaufen?"],
        ["möchten", "keinginan sopan", "Ich möchte einen Kaffee bitte. Was möchten Sie?"],
      ],
    },
    {
      caption: "⚠️ nicht müssen vs. nicht dürfen",
      headers: ["Bentuk", "Arti", "Contoh", "Makna"],
      rows: [
        ["nicht müssen", "tidak perlu / tidak wajib", "Du musst nicht kommen.", "Kamu tidak harus datang. (bebas)"],
        ["nicht dürfen", "tidak boleh / dilarang", "Du darfst nicht kommen.", "Kamu tidak boleh datang. (dilarang)"],
      ],
    },
    {
      caption: "Struktur Kalimat dengan Modalverben (Satzklammer)",
      headers: ["Posisi 1", "Posisi 2 (Modal)", "Tengah", "Akhir (Infinitiv)"],
      rows: [
        ["Ich", "muss", "heute", "arbeiten."],
        ["Sabine", "will", "eine Freundin", "treffen."],
        ["Wann", "musst", "du", "arbeiten?"],
        ["Darf", "man", "hier", "rauchen?"],
      ],
    },
  ],
  examples: [
    { de: "Ich kann sehr gut schwimmen.", id: "Saya bisa berenang dengan sangat baik." },
    { de: "Du musst heute nicht arbeiten.", id: "Kamu tidak harus bekerja hari ini. (tidak wajib)" },
    { de: "Hier dürfen Sie nicht rauchen.", id: "Di sini Anda tidak boleh merokok. (dilarang)" },
    { de: "Wir wollen am Wochenende Pizza essen.", id: "Kami ingin makan pizza di akhir pekan." },
    { de: "Was soll ich für das Abendessen einkaufen?", id: "Apa yang seharusnya saya beli untuk makan malam?" },
    { de: "Ich möchte bitte ein Glas Wasser.", id: "Saya minta segelas air, tolong. (sopan)" },
    { de: "Kannst du Deutsch sprechen?", id: "Bisakah kamu berbicara bahasa Jerman?" },
  ],
  exercises: [
    {
      question: "Ich ___ heute leider lange arbeiten.",
      options: ["muss", "müssen", "musst"],
      answer: "muss",
    },
    {
      question: "___ du mir bitte helfen?",
      options: ["Kannst", "Kann", "Können"],
      answer: "Kannst",
    },
    {
      question: "Wir möchten morgen ins Kino ___.",
      options: ["gehen", "geht", "gehst"],
      answer: "gehen",
    },
    {
      question: "'Du ___ nicht kommen.' — artinya kamu DILARANG datang.",
      options: ["musst", "darfst", "sollst"],
      answer: "darfst",
    },
    {
      question: "'Du ___ nicht kommen.' — artinya kamu TIDAK HARUS datang (bebas memilih).",
      options: ["darfst", "willst", "musst"],
      answer: "musst",
    },
    {
      question: "Cara sopan memesan: 'Ich ___ einen Kaffee, bitte.'",
      options: ["will", "möchte", "muss"],
      answer: "möchte",
    },
  ],
};
