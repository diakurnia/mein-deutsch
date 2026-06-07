import type { GrammarTopic } from "@/content/types";

export const konjunktionen: GrammarTopic = {
  id: "konjunktionen",
  title: "Konjunktionen: und, oder, aber, denn, sondern",
  level: "A1",
  order: 25,
  icon: "🔗",
  explanation:
    "**Konjunktionen koordinierend** (kata penghubung koordinat) menghubungkan dua kalimat atau dua unsur kalimat yang setara kedudukannya. Hal terpenting: konjunktionen koordinat **tidak mengubah urutan kata** di kalimat kedua.\n\n" +
    "**und** (dan) — menggabungkan dua informasi:\n" +
    "*Ich lerne Deutsch und ich lese viel.* (Saya belajar bahasa Jerman dan saya banyak membaca.)\n\n" +
    "**oder** (atau) — memberikan pilihan:\n" +
    "*Trinkst du Tee oder Kaffee?* (Kamu minum teh atau kopi?)\n\n" +
    "**aber** (tapi / tetapi) — kontras atau bertentangan:\n" +
    "*Das Hotel ist schön, aber teuer.* (Hotelnya indah, tapi mahal.)\n\n" +
    "**denn** (karena) — memberikan alasan. Berbeda dengan *weil*, kalimat setelah *denn* tetap memakai urutan kata normal (kata kerja di posisi 2):\n" +
    "*Ich lerne Deutsch, denn ich will in Deutschland arbeiten.* (Saya belajar bahasa Jerman karena saya ingin bekerja di Jerman.)\n\n" +
    "**sondern** (melainkan/tetapi justru) — digunakan setelah negasi (*nicht / kein*) untuk memperbaiki informasi:\n" +
    "*Das ist kein Hund, sondern eine Katze.* (Itu bukan anjing, melainkan kucing.)",
  notes:
    "Perbedaan **aber** vs **sondern**: *aber* dipakai untuk kontras biasa; *sondern* dipakai khusus setelah negasi untuk 'meluruskan' informasi yang salah. *Das Zimmer ist nicht groß, **sondern** klein.* (Kamarnya tidak besar, melainkan kecil.) — bukan *aber*. Untuk ujian Goethe A1 bagian *Schreiben*, kamu akan sering butuh *und*, *aber*, dan *denn* untuk menulis kalimat yang lebih panjang.",
  tables: [
    {
      caption: "Konjunktionen koordinat — ringkasan",
      headers: ["Konjunktion", "Arti", "Fungsi", "Contoh"],
      rows: [
        ["und", "dan", "menambahkan", "Ich trinke Kaffee und esse ein Brötchen."],
        ["oder", "atau", "pilihan", "Möchtest du Tee oder Kaffee?"],
        ["aber", "tapi", "kontras", "Er ist müde, aber er arbeitet weiter."],
        ["denn", "karena", "alasan (urutan kata normal)", "Ich bleibe zu Hause, denn ich bin krank."],
        ["sondern", "melainkan", "koreksi setelah negasi", "Er ist kein Lehrer, sondern Arzt."],
      ],
    },
    {
      caption: "Urutan kata: konjunktionen koordinat vs. weil",
      headers: ["Pola", "Contoh", "Catatan"],
      rows: [
        ["..., denn + [Subjek + Verb + ...]", "Ich lerne, denn die Prüfung ist morgen.", "kata kerja tetap di posisi 2"],
        ["..., weil + [Subjek + ... + Verb]", "Ich lerne, weil die Prüfung morgen ist.", "kata kerja ke AKHIR kalimat"],
      ],
    },
  ],
  examples: [
    { de: "Ich lerne Deutsch und Spanisch.", id: "Saya belajar bahasa Jerman dan Spanyol." },
    { de: "Fährst du mit dem Bus oder mit dem Zug?", id: "Kamu naik bus atau kereta?" },
    { de: "Das Essen ist lecker, aber nicht billig.", id: "Makanannya enak, tapi tidak murah." },
    { de: "Ich gehe früh schlafen, denn morgen muss ich früh aufstehen.", id: "Saya tidur lebih awal karena besok harus bangun pagi." },
    { de: "Das ist kein Fehler, sondern ein Zufall.", id: "Itu bukan kesalahan, melainkan kebetulan." },
  ],
  exercises: [
    {
      question: "'Das Wetter ist schön, ___ kalt.' (tapi)",
      options: ["denn", "oder", "aber"],
      answer: "aber",
    },
    {
      question: "'Ich bleibe zu Hause, ___ ich bin müde.' (karena — urutan kata normal)",
      options: ["weil", "denn", "sondern"],
      answer: "denn",
    },
    {
      question: "'Das ist kein Hund, ___ eine Katze.' (melainkan — koreksi)",
      options: ["aber", "oder", "sondern"],
      answer: "sondern",
    },
  ],
};
