import type { GrammarTopic } from "@/content/types";

export const personalpronomenAkkusativDativ: GrammarTopic = {
  id: "personalpronomen-akkusativ-dativ",
  title: "Personalpronomen: Akkusativ dan Dativ",
  level: "A1",
  order: 19,
  icon: "👥",
  explanation:
    "Dalam bahasa Jerman, **Personalpronomen** (kata ganti orang) tidak hanya berfungsi sebagai subjek (**Nominativ**), tetapi juga berubah bentuk saat menjadi objek dalam kalimat. Perubahannya bergantung pada apakah kata ganti tersebut berfungsi sebagai objek langsung (**Akkusativ**) atau objek tidak langsung (**Dativ**).\n\n" +
    "Bentuk **Akkusativ** digunakan setelah kata kerja yang menuntut objek langsung, seperti *haben*, *sehen*, atau *fragen*. Contoh: *ich* → **mich**, *er* → **ihn**. Bentuk ini menyatakan siapa atau apa yang menjadi sasaran langsung dari sebuah tindakan.\n\n" +
    "Bentuk **Dativ** digunakan untuk objek tidak langsung atau setelah kata kerja seperti *helfen*, *danken*, dan *gratulieren*. Contoh: *ich* → **mir**, *er* → **ihm**. Beberapa kata ganti memiliki bentuk sama di kedua kasus, seperti *wir* yang selalu menjadi **uns**, namun ada yang berbeda signifikan.",
  notes:
    "Kata ganti formal **Sie** (Anda) tetap **Sie** di Akkusativ, namun berubah menjadi **Ihnen** (dengan huruf kapital) di Dativ. Selalu perhatikan kata kerja atau preposisi yang mendahuluinya untuk menentukan kasus yang tepat.",
  tables: [
    {
      caption: "Perubahan Personalpronomen dalam Berbagai Kasus",
      headers: ["Nominativ", "Akkusativ (obj. langsung)", "Dativ (obj. tak langsung)"],
      rows: [
        ["ich (saya)", "mich", "mir"],
        ["du (kamu)", "dich", "dir"],
        ["er (dia - m)", "ihn", "ihm"],
        ["es (dia - n)", "es", "ihm"],
        ["sie (dia - f)", "sie", "ihr"],
        ["wir (kami)", "uns", "uns"],
        ["ihr (kalian)", "euch", "euch"],
        ["sie (mereka)", "sie", "ihnen"],
        ["Sie (Anda)", "Sie", "Ihnen"],
      ],
    },
  ],
  examples: [
    { de: "Liebst du mich? - Ja, ich liebe dich.", id: "Apakah kamu mencintaiku? - Ya, aku mencintaimu. (Akkusativ)" },
    { de: "Kannst du mir bitte helfen?", id: "Bisakah kamu membantuku? (Dativ)" },
    { de: "Ich rufe ihn morgen an.", id: "Saya akan meneleponnya besok. (Akkusativ)" },
    { de: "Wie geht es Ihnen, Herr Schmidt?", id: "Apa kabar Anda, Pak Schmidt? (Dativ)" },
  ],
  exercises: [
    {
      question: "Hallo Anna, ich habe ___ im Park gesehen. (du — Akkusativ)",
      options: ["dir", "dich", "du"],
      answer: "dich",
    },
    {
      question: "Dankeschön! Du hilfst ___ sehr. (ich — Dativ)",
      options: ["mich", "mir", "mein"],
      answer: "mir",
    },
    {
      question: "Das ist mein Bruder. Ich schenke ___ ein Buch. (er — Dativ)",
      options: ["ihn", "ihm", "er"],
      answer: "ihm",
    },
    {
      question: "Wie geht es ___, Herr Schmidt? (Sie — Dativ)",
      options: ["Ihnen", "Sie", "Ihr"],
      answer: "Ihnen",
    },
    {
      question: "Ist das Buch interessant? - Ja, ich finde ___ gut. (es — Akkusativ)",
      options: ["es", "ihm", "ihn"],
      answer: "es",
    },
  ],
};
