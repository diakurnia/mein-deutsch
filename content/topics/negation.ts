import type { GrammarTopic } from "@/content/types";

export const negation: GrammarTopic = {
  id: "negation",
  title: "Negation",
  level: "A1",
  order: 14,
  icon: "🚫",
  explanation:
    "**Negation** digunakan untuk menyangkal suatu informasi dalam sebuah kalimat. Dalam bahasa Jerman, terdapat dua kata utama: **nicht** dan **kein**. Penggunaannya bergantung pada elemen apa yang ingin disangkal.\n\n" +
    "Kata **kein** berfungsi sebagai artikel negasi yang digunakan khusus untuk meniadakan **kata benda** (Nomen). Ia menggantikan posisi artikel tidak tentu (*ein/eine*) atau digunakan untuk kata benda tanpa artikel. Sebaliknya, **nicht** digunakan untuk meniadakan elemen lain: **kata kerja**, **kata sifat**, keterangan, atau seluruh isi kalimat.\n\n" +
    "Penempatan **nicht** biasanya di akhir kalimat sederhana, atau tepat sebelum elemen yang ingin disangkal. Sedangkan **kein** selalu diletakkan di depan kata benda yang ditiadakan, dan bentuknya berubah mengikuti gender serta jumlah kata benda tersebut.",
  notes:
    "**kein** hanya untuk kata benda tanpa artikel atau berartikel tidak tentu. Untuk menyangkal kata benda berartikel pasti (*der/die/das*) atau kata ganti milik, gunakan **nicht** — contoh: *Das ist nicht mein Handy*.",
  tables: [
    {
      caption: "Perbedaan nicht dan kein",
      headers: ["Kata Negasi", "Digunakan untuk", "Contoh"],
      rows: [
        ["kein", "Kata benda (tanpa artikel / artikel tidak tentu)", "Ich habe kein Geld."],
        ["nicht", "Kata kerja, kata sifat, atau seluruh kalimat", "Ich rauche nicht. / Das ist nicht teuer."],
      ],
    },
    {
      caption: "Deklinasi 'kein' (Nominativ)",
      headers: ["Maskulin (der)", "Netral (das)", "Feminin (die)", "Plural (die)"],
      rows: [
        ["kein", "kein", "keine", "keine"],
      ],
    },
  ],
  examples: [
    { de: "Ich esse kein Fleisch.", id: "Saya tidak makan daging." },
    { de: "Das ist kein Apfel. Das ist eine Birne.", id: "Ini bukan apel. Ini adalah buah pir." },
    { de: "Er wohnt nicht in Berlin, er wohnt in Hamburg.", id: "Dia tidak tinggal di Berlin, dia tinggal di Hamburg." },
    { de: "Ich bin heute nicht müde.", id: "Saya tidak lelah hari ini." },
  ],
  exercises: [
    {
      question: "Ich habe ___ Zeit. Ich muss arbeiten.",
      options: ["nicht", "kein", "keine"],
      answer: "keine",
    },
    {
      question: "Das Wetter ist heute ___ schön.",
      options: ["nicht", "kein", "keine"],
      answer: "nicht",
    },
    {
      question: "Haben Sie Kinder? - Nein, ich habe ___ Kinder.",
      options: ["nicht", "kein", "keine"],
      answer: "keine",
    },
    {
      question: "Das ist ___ Apfel, das ist eine Birne. (maskulin)",
      options: ["kein", "keine", "nicht"],
      answer: "kein",
    },
    {
      question: "Er wohnt ___ in Berlin.",
      options: ["nicht", "kein", "keine"],
      answer: "nicht",
    },
  ],
};
