import type { GrammarTopic } from "@/content/types";

export const possessivartikel: GrammarTopic = {
  id: "possessivartikel",
  title: "Possessivartikel",
  level: "A1",
  order: 20,
  icon: "🏠",
  explanation:
    "**Possessivartikel** atau kata ganti milik digunakan untuk menyatakan kepemilikan atau hubungan antara seseorang dengan benda atau orang lain. Bentuk dasarnya selalu disesuaikan dengan siapa pemiliknya: jika pemiliknya *ich* (saya) → *mein*; jika *du* (kamu) → *dein*, dan seterusnya.\n\n" +
    "Dalam kalimat, **Possessivartikel** mendampingi kata benda dan bentuk akhirnya (deklinasi) harus mengikuti **kasus** (Nominativ, Akkusativ, Dativ), **gender** (maskulin, feminin, netral), serta **jumlah** dari benda yang dimiliki. Pola akhirannya identik dengan pola akhiran pada kata negasi **kein**.\n\n" +
    "Sebagai contoh, jika kata benda maskulin berada dalam kasus Akkusativ, maka *mein* berubah menjadi **meinen** (seperti *einen* atau *keinen*). Memahami perubahan ini penting untuk mendeskripsikan keluarga, barang pribadi, atau hobi dengan benar.",
  notes:
    "Perhatikan kata ganti **euer** (kalian punya). Saat mendapat akhiran, huruf 'e' di tengah biasanya dihilangkan: *euer* + *e* → **eure**, *euer* + *en* → **euren**.",
  tables: [
    {
      caption: "Bentuk Dasar Possessivartikel (Nominativ)",
      headers: ["Personalpronomen", "Mask. / Netral", "Feminin / Plural"],
      rows: [
        ["ich", "mein", "meine"],
        ["du", "dein", "deine"],
        ["er / es", "sein", "seine"],
        ["sie (sg.)", "ihr", "ihre"],
        ["wir", "unser", "unsere"],
        ["ihr", "euer", "eure"],
        ["sie (pl.) / Sie", "ihr / Ihr", "ihre / Ihre"],
      ],
    },
    {
      caption: "Contoh Deklinasi — mein + Vater (maskulin)",
      headers: ["Kasus", "Bentuk", "Contoh Kalimat"],
      rows: [
        ["Nominativ", "mein Vater", "Das ist mein Vater."],
        ["Akkusativ", "meinen Vater", "Ich besuche meinen Vater."],
        ["Dativ", "meinem Vater", "Ich helfe meinem Vater."],
      ],
    },
  ],
  examples: [
    { de: "Ist das Ihr Koffer, Herr Schmidt?", id: "Apakah ini koper Anda, Pak Schmidt?" },
    { de: "Ich suche meine Brille.", id: "Saya sedang mencari kacamata saya." },
    { de: "Wie heißen eure Kinder?", id: "Siapa nama anak-anak kalian?" },
    { de: "Er spielt mit seinem Hund im Garten.", id: "Dia bermain dengan anjingnya di taman." },
  ],
  exercises: [
    {
      question: "Ich brauche ___ Handy. (ich — netral)",
      options: ["mein", "meine", "meinen"],
      answer: "mein",
    },
    {
      question: "Wie geht es ___ Mutter? (du — feminin, Dativ)",
      options: ["dein", "deine", "deiner"],
      answer: "deiner",
    },
    {
      question: "Paul sucht ___ Schlüssel. (er — maskulin, Akkusativ)",
      options: ["sein", "seine", "seinen"],
      answer: "seinen",
    },
    {
      question: "Das ist ___ Brille. (ich — feminin, Nominativ)",
      options: ["meine", "mein", "meinen"],
      answer: "meine",
    },
    {
      question: "Possessivartikel untuk 'sie (tunggal)' adalah…",
      options: ["ihr", "sein", "dein"],
      answer: "ihr",
    },
  ],
};
