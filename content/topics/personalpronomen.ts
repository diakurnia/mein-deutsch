import type { GrammarTopic } from "@/content/types";

export const personalpronomen: GrammarTopic = {
  id: "personalpronomen",
  title: "Personalpronomen",
  level: "A1",
  order: 1,
  icon: "👤",
  explanation:
    "**Personalpronomen** atau kata ganti orang digunakan untuk menggantikan subjek (orang atau benda) dalam sebuah kalimat agar tidak terjadi pengulangan kata benda yang sama secara terus-menerus. Dalam bahasa Jerman, kata ganti ini mencakup orang pertama (pembicara), orang kedua (lawan bicara), dan orang ketiga (orang atau benda yang dibicarakan).\n\n" +
    "Salah satu ciri khas bahasa Jerman adalah perbedaan antara sapaan **informal** dan **formal**. Kata ganti **du** digunakan saat berbicara dengan teman, anggota keluarga, atau anak-anak. Sebaliknya, kata ganti **Sie** digunakan untuk berbicara dengan orang dewasa yang belum dikenal, rekan bisnis, atau dalam situasi resmi untuk menunjukkan rasa hormat.\n\n" +
    "Selain untuk orang, **Personalpronomen** juga berfungsi untuk menggantikan kata benda (objek). Penggunaannya mengikuti gender dari kata benda tersebut: **er** menggantikan kata benda maskulin (*der*), **sie** menggantikan kata benda feminin (*die*), dan **es** menggantikan kata benda netral (*das*).",
  notes:
    "Kata ganti formal **Sie** (Anda) selalu ditulis dengan huruf kapital di mana pun posisinya dalam kalimat. Selain itu, **ihr** digunakan untuk menyapa lebih dari satu orang yang Anda kenal secara akrab (kamu sekalian).",
  tables: [
    {
      caption: "Tabel Personalpronomen (Nominativ)",
      headers: ["Orang", "Singular (Tunggal)", "Plural (Jamak)"],
      rows: [
        ["1. Person", "ich (saya)", "wir (kami/kita)"],
        ["2. Person", "du (kamu) / Sie (Anda)", "ihr (kalian) / Sie (Anda sekalian)"],
        ["3. Person", "er (dia - m), sie (dia - f), es (dia - n)", "sie (mereka)"],
      ],
    },
  ],
  examples: [
    { de: "Ich komme aus Jakarta.", id: "Saya berasal dari Jakarta." },
    { de: "Wie heißen Sie, Frau Müller?", id: "Siapa nama Anda, Ibu Müller?" },
    { de: "Das ist ein Tisch. Er ist modern.", id: "Ini adalah sebuah meja. Ia (meja itu) modern." },
    { de: "Marc und Dominic, wo wohnt ihr?", id: "Marc dan Dominic, di mana kalian tinggal?" },
  ],
  exercises: [
    {
      question: "Hallo Anna, woher kommst ___?",
      options: ["ich", "du", "Sie"],
      answer: "du",
    },
    {
      question: "Das ist Herr Gupta. ___ kommt aus Indien.",
      options: ["Er", "Sie", "Es"],
      answer: "Er",
    },
    {
      question: "Guten Tag, Herr Berger. Wie heißen ___?",
      options: ["du", "ihr", "Sie"],
      answer: "Sie",
    },
    {
      question: "Lisa und Tom, woher kommt ___?",
      options: ["ihr", "wir", "sie"],
      answer: "ihr",
    },
    {
      question: "Das ist die Lampe. ___ ist modern.",
      options: ["Er", "Sie", "Es"],
      answer: "Sie",
    },
  ],
};
