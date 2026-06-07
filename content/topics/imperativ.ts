import type { GrammarTopic } from "@/content/types";

export const imperativ: GrammarTopic = {
  id: "imperativ",
  title: "Imperativ",
  level: "A1",
  order: 13,
  icon: "📢",
  explanation:
    "**Imperativ** adalah bentuk kalimat perintah yang digunakan untuk memberikan instruksi, permintaan, saran, atau larangan kepada orang lain. Dalam bahasa Jerman, bentuk perintah ini sangat dipengaruhi oleh kepada siapa kita berbicara: satu orang secara akrab (**du**), banyak orang secara akrab (**ihr**), atau dalam situasi resmi (**Sie**).\n\n" +
    "Ciri khas utama **Imperativ** adalah posisi kata kerja yang selalu diletakkan di **paling awal** kalimat. Pada bentuk formal (**Sie**), subjek tetap disertakan setelah kata kerja. Pada bentuk informal (**du** dan **ihr**), subjek dihilangkan sepenuhnya. Untuk bentuk *du*, akhiran *-st* juga dibuang sehingga hanya menyisakan kata dasarnya (contoh: *du kommst* → *Komm!*).\n\n" +
    "Beberapa kata kerja mengalami perubahan khusus. Kata kerja dengan perubahan vokal **e → i** tetap mempertahankan perubahan tersebut (contoh: *essen* → *Iss!*, *helfen* → *Hilf!*). Namun kata kerja dengan perubahan **a → ä** tidak menggunakan umlaut dalam bentuk perintah (contoh: *fahren* → *Fahr!*, bukan *Fähr!*). Kata kerja **sein** memiliki bentuk yang sangat berbeda dan harus dihafalkan.",
  notes:
    "Gunakan kata **bitte** untuk membuat perintah terdengar lebih sopan. Partikel **mal** atau **doch** juga sering ditambahkan untuk kesan permintaan yang lebih ramah — contoh: *Komm doch mal vorbei!*",
  tables: [
    {
      caption: "Pembentukan Imperativ",
      headers: ["Infinitiv", "Formell (Sie)", "Informal (du)", "Informal (ihr)"],
      rows: [
        ["kommen", "Kommen Sie!", "Komm!", "Kommt!"],
        ["essen (e→i)", "Essen Sie!", "Iss!", "Esst!"],
        ["fahren (a→ä)", "Fahren Sie!", "Fahr!", "Fahrt!"],
        ["sein (khusus)", "Seien Sie!", "Sei!", "Seid!"],
        ["haben (khusus)", "Haben Sie!", "Hab!", "Habt!"],
      ],
    },
  ],
  examples: [
    { de: "Machen Sie bitte das Fenster zu!", id: "Tolong tutup jendelanya! (formal)" },
    { de: "Hilf mir mal bei den Hausaufgaben!", id: "Bantulah aku mengerjakan PR! (informal du)" },
    { de: "Kinder, seid bitte leise!", id: "Anak-anak, tolong tenang! (informal ihr)" },
    { de: "Bring den Kaffee, bitte!", id: "Tolong bawakan kopinya!" },
  ],
  exercises: [
    {
      question: "Herr Müller, ___ Sie bitte hier!",
      options: ["Kommen", "Komm", "Kommt"],
      answer: "Kommen",
    },
    {
      question: "Dominic, ___ nicht so viel Pizza!",
      options: ["Ess", "Iss", "Esst"],
      answer: "Iss",
    },
    {
      question: "___ doch ein bisschen langsamer!",
      options: ["Fahr", "Fährst", "Fahren"],
      answer: "Fahr",
    },
  ],
};
