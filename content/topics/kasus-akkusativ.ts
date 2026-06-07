import type { GrammarTopic } from "@/content/types";

export const kasusAkkusativ: GrammarTopic = {
  id: "kasus-akkusativ",
  title: "Kasus Akkusativ",
  level: "A1",
  order: 16,
  icon: "🎯",
  explanation:
    "**Kasus Akkusativ** digunakan untuk menunjukkan **objek langsung** dalam sebuah kalimat, yaitu orang atau benda yang menerima tindakan dari kata kerja. Dalam struktur kalimat dasar, biasanya ada subjek (**Nominativ**) yang melakukan aktivitas dan objek (**Akkusativ**) yang menjadi sasarannya.\n\n" +
    "Ciri khas terpenting dalam **Akkusativ** adalah perubahan bentuk yang hanya terjadi pada kata benda bergender **maskulin** (*der*). Artikel *der* berubah menjadi **den**, *ein* menjadi **einen**, dan *kein* menjadi **keinen**. Sementara gender lainnya — netral (*das*), feminin (*die*), serta jamak — tidak mengalami perubahan dan tetap identik dengan bentuk Nominativ-nya.\n\n" +
    "Banyak kata kerja sehari-hari menuntut penggunaan **Akkusativ**, antara lain: **haben** (mempunyai), **brauchen** (membutuhkan), **trinken** (minum), **essen** (makan), **suchen** (mencari), dan **bestellen** (memesan).",
  notes:
    "Rumus mudah: hanya **der** yang berubah menjadi **den** di Akkusativ. Gender netral, feminin, dan jamak tetap sama seperti Nominativ.",
  tables: [
    {
      caption: "Perubahan Artikel dalam Kasus Akkusativ",
      headers: ["Artikel", "Maskulin (der) ⚡", "Netral (das)", "Feminin (die)", "Plural (die)"],
      rows: [
        ["Bestimmt", "den ⚡", "das", "die", "die"],
        ["Unbestimmt", "einen ⚡", "ein", "eine", "—"],
        ["Negasi (kein)", "keinen ⚡", "kein", "keine", "keine"],
      ],
    },
  ],
  examples: [
    { de: "Ich habe einen Hund.", id: "Saya mempunyai seekor anjing. (der Hund → einen Hund)" },
    { de: "Er trinkt einen Saft.", id: "Dia meminum jus. (der Saft → einen Saft)" },
    { de: "Wir suchen das Hotel.", id: "Kami mencari hotel tersebut. (das Hotel → tetap das Hotel)" },
    { de: "Hast du einen Kuli?", id: "Apakah kamu punya pulpen? (der Kuli → einen Kuli)" },
  ],
  exercises: [
    {
      question: "Ich brauche ___ Tisch für mein Zimmer. (der Tisch — maskulin)",
      options: ["ein", "einen", "eine"],
      answer: "einen",
    },
    {
      question: "Haben Sie ___ Handy? (das Handy — netral)",
      options: ["ein", "einen", "eine"],
      answer: "ein",
    },
    {
      question: "Ich esse ___ Pizza zum Mittagessen. (die Pizza — feminin)",
      options: ["ein", "einen", "eine"],
      answer: "eine",
    },
  ],
};
