import type { GrammarTopic } from "@/content/types";

export const artikelKasusTabelle: GrammarTopic = {
  id: "artikel-kasus-tabelle",
  title: "Artikel dalam Semua Kasus (Tabel Lengkap)",
  level: "A1",
  order: 18,
  icon: "📊",
  explanation:
    "Setelah mempelajari Nominativ, Akkusativ, dan Dativ secara terpisah, sekarang kita lihat **tabel lengkap perubahan artikel** dalam ketiga kasus tersebut dalam satu pandangan.\n\n" +
    "Memahami tabel ini secara keseluruhan sangat penting karena ujian Goethe A1 sering menguji kemampuan memilih artikel yang tepat sesuai kasus dan gender.\n\n" +
    "**Pola perubahan yang paling penting diingat:**\n\n" +
    "1. **Maskulin Akkusativ** adalah satu-satunya perubahan di bestimmter artikel: *der* → *den*, *ein* → *einen*.\n\n" +
    "2. **Dativ** mengubah *semua* artikel: maskulin & netral pakai *dem/einem*, feminin pakai *der/einer*, jamak pakai *den* (+ nomen jamak tambah *-n* jika belum berakhiran *-n* atau *-s*).\n\n" +
    "3. Feminin dan Netral **tidak berubah antara Nominativ dan Akkusativ** — hanya maskulin yang berubah di Akkusativ.",
  notes:
    "Singkatan untuk menghafal Dativ: **dem-der-dem-den** (mask-fem-neut-plural) untuk bestimmter artikel, **einem-einer-einem** untuk unbestimmter artikel. Di ujian Goethe A1, perhatikan kata kerja dan preposisi yang menentukan kasus: *haben/kaufen/sehen* → Akkusativ; *mit/von/zu/bei/aus/nach/seit* → selalu Dativ.",
  tables: [
    {
      caption: "Bestimmter Artikel (der/die/das) — semua kasus",
      headers: ["Kasus", "Maskulin", "Feminin", "Netral", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den ⚠️", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "den (+n)"],
      ],
    },
    {
      caption: "Unbestimmter Artikel (ein/eine/ein) — semua kasus",
      headers: ["Kasus", "Maskulin", "Feminin", "Netral"],
      rows: [
        ["Nominativ", "ein", "eine", "ein"],
        ["Akkusativ", "einen ⚠️", "eine", "ein"],
        ["Dativ", "einem", "einer", "einem"],
      ],
    },
    {
      caption: "Negativartikel (kein/keine) — semua kasus",
      headers: ["Kasus", "Maskulin", "Feminin", "Netral", "Plural"],
      rows: [
        ["Nominativ", "kein", "keine", "kein", "keine"],
        ["Akkusativ", "keinen ⚠️", "keine", "kein", "keine"],
        ["Dativ", "keinem", "keiner", "keinem", "keinen (+n)"],
      ],
    },
  ],
  examples: [
    { de: "Das ist der Mann. Ich sehe den Mann.", id: "Itu seorang pria. Saya melihat pria itu. (Nom → Akk maskulin)" },
    { de: "Das ist eine Frau. Ich helfe einer Frau.", id: "Itu seorang wanita. Saya membantu seorang wanita. (Nom → Dat feminin)" },
    { de: "Das ist ein Kind. Ich gebe dem Kind ein Buch.", id: "Itu seorang anak. Saya memberi anak itu sebuah buku. (Dat netral)" },
    { de: "Ich habe keinen Bruder.", id: "Saya tidak punya saudara laki-laki. (Akk maskulin → keinen)" },
  ],
  exercises: [
    {
      question: "Maskulin Akkusativ dari 'der' adalah…",
      options: ["der", "dem", "den"],
      answer: "den",
    },
    {
      question: "'Ich helfe ___ Frau.' (Dativ feminin bestimmter Artikel)",
      options: ["die", "der", "dem"],
      answer: "der",
    },
    {
      question: "'Ich kaufe ___ Hund.' (Akkusativ maskulin unbestimmter Artikel)",
      options: ["ein", "einen", "einem"],
      answer: "einen",
    },
    {
      question: "Dativ maskulin & netral dari bestimmter Artikel adalah…",
      options: ["den", "dem", "der"],
      answer: "dem",
    },
    {
      question: "'Ich sehe ___ Mann.' (Akkusativ maskulin bestimmter Artikel)",
      options: ["der", "den", "dem"],
      answer: "den",
    },
  ],
};
