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
    {
      caption: "Kata kerja yang selalu memakai Akkusativ (Wen? / Was?)",
      headers: ["Kata kerja", "Arti", "Contoh kalimat"],
      rows: [
        ["haben", "mempunyai", "Ich habe einen Bruder."],
        ["brauchen", "membutuhkan", "Ich brauche einen Arzt."],
        ["kaufen", "membeli", "Er kauft einen Computer."],
        ["suchen", "mencari", "Wir suchen das Hotel."],
        ["sehen", "melihat", "Siehst du den Mann dort?"],
        ["essen", "makan", "Wir essen einen Kuchen."],
        ["trinken", "minum", "Er trinkt einen Saft."],
        ["nehmen", "mengambil", "Ich nehme den Bus."],
        ["besuchen", "mengunjungi", "Sie besucht eine Freundin."],
        ["bestellen", "memesan", "Ich bestelle einen Kaffee."],
        ["finden", "menemukan", "Ich finde den Schlüssel nicht."],
        ["kennen", "mengenal", "Kennst du den Mann?"],
      ],
    },
  ],
  examples: [
    { de: "Ich habe einen Hund.", id: "Saya mempunyai seekor anjing. (der Hund → einen Hund)" },
    { de: "Er trinkt einen Saft.", id: "Dia meminum jus. (der Saft → einen Saft)" },
    { de: "Wir suchen das Hotel.", id: "Kami mencari hotel tersebut. (das Hotel → tetap das Hotel)" },
    { de: "Hast du einen Kuli?", id: "Apakah kamu punya pulpen? (der Kuli → einen Kuli)" },
    { de: "Ich bestelle eine Cola, bitte.", id: "Saya pesan satu cola, tolong. (die Cola → eine Cola)" },
    { de: "Siehst du den Mann da drüben?", id: "Apakah kamu melihat pria di sana? (der Mann → den Mann)" },
    { de: "Ich nehme den Zug um neun Uhr.", id: "Saya naik kereta pukul sembilan." },
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
    {
      question: "Er kauft ___ Computer. (der Computer — maskulin)",
      options: ["ein", "einen", "einem"],
      answer: "einen",
    },
    {
      question: "Siehst du ___ Mann dort? (der Mann — maskulin)",
      options: ["der", "den", "dem"],
      answer: "den",
    },
  ],
};
