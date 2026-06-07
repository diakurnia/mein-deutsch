import type { GrammarTopic } from "@/content/types";

export const adjektivePraedikativ: GrammarTopic = {
  id: "adjektive-praedikativ",
  title: "Adjektive: Prädikativ und häufige Adjektive",
  level: "A1",
  order: 22,
  icon: "✨",
  explanation:
    "**Adjektive** (kata sifat) dalam bahasa Jerman digunakan dengan dua cara berbeda:\n\n" +
    "**1. Prädikativ (setelah kata kerja sein/werden/bleiben):** Kata sifat diletakkan setelah *sein* (adalah), *werden* (menjadi), atau *bleiben* (tetap) dan **tidak berubah bentuk** — tidak ada akhiran gender. Ini cara yang paling mudah dan paling umum untuk pemula.\n\n" +
    "*Das Haus ist groß.* (Rumah itu besar.) — *groß* tidak berubah meski Haus netral.\n\n" +
    "**2. Attributiv (sebelum kata benda):** Kata sifat diletakkan langsung sebelum kata benda dan **wajib mendapat akhiran** sesuai gender, kasus, dan jenis artikel. Ini dipelajari di tingkat A2.\n\n" +
    "Untuk A1, fokus pada pemakaian **prädikativ** karena tidak memerlukan akhiran dan langsung bisa dipakai dalam percakapan.",
  notes:
    "Saat ujian Goethe A1, kata sifat prädikativ sering muncul dalam kalimat seperti *Das Zimmer ist zu teuer.* atau *Die Stadt ist sehr schön.* Perhatikan pasangan antonim — menguasainya memudahkan kamu menjawab soal perbandingan dan deskripsi.",
  tables: [
    {
      caption: "Pola kalimat prädikativ",
      headers: ["Pola", "Contoh", "Arti"],
      rows: [
        ["Subjek + sein + Adjektiv", "Das Wetter ist schön.", "Cuacanya indah."],
        ["Subjek + sein + sehr + Adjektiv", "Die Stadt ist sehr groß.", "Kotanya sangat besar."],
        ["Subjek + sein + nicht + Adjektiv", "Das Essen ist nicht gut.", "Makanannya tidak enak."],
        ["Subjek + sein + zu + Adjektiv", "Die Wohnung ist zu teuer.", "Apartmennya terlalu mahal."],
      ],
    },
    {
      caption: "Pasangan antonim penting A1",
      headers: ["Positif", "Arti", "Negatif/Lawan", "Arti"],
      rows: [
        ["groß", "besar", "klein", "kecil"],
        ["alt", "tua / lama", "jung / neu", "muda / baru"],
        ["gut", "baik / enak", "schlecht", "buruk / tidak enak"],
        ["schön", "indah / cantik", "hässlich", "buruk rupa"],
        ["teuer", "mahal", "billig / günstig", "murah"],
        ["schwer", "berat / sulit", "leicht", "ringan / mudah"],
        ["lang", "panjang", "kurz", "pendek"],
        ["schnell", "cepat", "langsam", "lambat"],
        ["warm", "hangat", "kalt", "dingin"],
        ["laut", "keras / berisik", "leise", "pelan / tenang"],
        ["voll", "penuh", "leer", "kosong"],
        ["sauber", "bersih", "schmutzig", "kotor"],
        ["richtig", "benar", "falsch", "salah"],
        ["müde", "lelah / ngantuk", "fit / munter", "segar / bersemangat"],
      ],
    },
  ],
  examples: [
    { de: "Die Wohnung ist sehr schön, aber zu teuer.", id: "Apartmennya sangat indah, tapi terlalu mahal." },
    { de: "Das Essen ist gut und nicht zu teuer.", id: "Makanannya enak dan tidak terlalu mahal." },
    { de: "Der Film ist lang und ein bisschen langsam.", id: "Filmnya panjang dan agak lambat." },
    { de: "Das Wetter ist heute kalt und grau.", id: "Cuaca hari ini dingin dan mendung." },
    { de: "Ich bin müde, aber die Aufgabe ist nicht schwer.", id: "Saya lelah, tapi tugasnya tidak sulit." },
  ],
  exercises: [
    {
      question: "Dalam kalimat 'Das Buch ist interessant.', kata 'interessant' berfungsi sebagai…",
      options: ["attributiv (sebelum kata benda)", "prädikativ (setelah sein)", "adverb"],
      answer: "prädikativ (setelah sein)",
    },
    {
      question: "Lawan kata 'teuer' adalah…",
      options: ["schön", "billig", "leicht"],
      answer: "billig",
    },
    {
      question: "'Die Aufgabe ist ___ schwer.' (terlalu sulit)",
      options: ["sehr", "nicht", "zu"],
      answer: "zu",
    },
  ],
};
