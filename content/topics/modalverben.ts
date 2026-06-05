import type { GrammarTopic } from "@/content/types";

export const modalverben: GrammarTopic = {
  id: "modalverben-konjugasi-posisi",
  title: "Modalverben: Konjugasi dan Posisi dalam Kalimat",
  level: "A1",
  order: 5,
  icon: "🧩",
  explanation:
    "**Modalverben** (kata kerja bantu modal) adalah kelompok kata kerja yang mengubah makna dasar dari kata kerja lain dalam sebuah kalimat, seperti menyatakan kemampuan, keharusan, atau keinginan. Di level A1, terdapat enam modal verbs utama: **können** (bisa), **müssen** (harus), **wollen** (ingin/hendak), **dürfen** (boleh), **sollen** (seharusnya), dan **möchten** (ingin/suka).\n\n" +
    "Konjugasi **Modalverben** memiliki pola unik yang berbeda dari kata kerja biasa. Pada subjek tunggal (*ich, du, er/sie/es*), huruf vokal pada kata dasar biasanya berubah. Ciri khas paling penting adalah bentuk untuk **ich** dan **er/sie/es** selalu **identik** dan tidak memiliki akhiran (seperti *-e* atau *-t*). Pada subjek jamak (*wir, ihr, sie/Sie*), konjugasinya kembali mengikuti pola kata kerja beraturan.\n\n" +
    "Dalam struktur kalimat, **Modalverben** menempati **Posisi 2** sebagai kata kerja yang dikonjugasikan sesuai subjek. Kata kerja utama yang membawa makna sebenarnya dipindahkan ke **akhir kalimat** dalam bentuk **Infinitiv** (kata dasar). Struktur ini menciptakan apa yang disebut **Satzklammer** (bingkai kalimat), di mana modal verb dan infinitiv mengapit elemen kalimat lainnya.",
  notes:
    "Jika konteks pembicaraan sudah jelas, kata kerja utama di akhir kalimat kadang bisa dihilangkan. Contoh: *Ich muss nach Hause* (gehen tersirat).",
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
    { de: "Hier dürfen Sie nicht parken.", id: "Di sini Anda tidak boleh parkir." },
    { de: "Wir wollen am Wochenende Pizza essen.", id: "Kami ingin makan pizza di akhir pekan." },
    { de: "Was soll ich für das Abendessen einkaufen?", id: "Apa yang seharusnya saya beli untuk makan malam?" },
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
  ],
};
