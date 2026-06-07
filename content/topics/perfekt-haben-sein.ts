import type { GrammarTopic } from "@/content/types";

export const perfektHabenSein: GrammarTopic = {
  id: "perfekt-haben-sein",
  title: "Perfekt dengan 'haben' dan 'sein'",
  level: "A1",
  order: 28,
  icon: "⏳",
  explanation:
    "**Perfekt** adalah bentuk waktu lampau yang paling sering digunakan dalam percakapan sehari-hari untuk menceritakan kejadian yang sudah selesai dilakukan. Strukturnya terdiri dari dua bagian tetap (**Satzklammer**): kata kerja bantu (**Hilfsverb**) yang dikonjugasikan di Posisi 2 dan kata kerja utama dalam bentuk **Partizip II** di akhir kalimat.\n\n" +
    "Kebanyakan kata kerja menggunakan kata bantu **haben**. Namun, terdapat kelompok kata kerja yang menggunakan **sein**, yaitu kata kerja yang menunjukkan perpindahan tempat (dari A ke B) atau perubahan kondisi. Selain itu, kata kerja seperti *bleiben* (tinggal) dan *passieren* (terjadi) juga wajib menggunakan **sein** meskipun tidak ada perpindahan.\n\n" +
    "Cara membentuk **Partizip II** untuk kata kerja beraturan: tambahkan awalan **ge-** dan akhiran **-t** pada kata dasar — contoh: *machen* → *gemacht*, *kaufen* → *gekauft*. Untuk kata kerja tidak beraturan, bentuk Partizip II-nya harus dihafalkan.",
  notes:
    "Dalam kalimat Perfekt, hanya kata bantu (*haben/sein*) yang berubah mengikuti subjek — sedangkan **Partizip II** di akhir kalimat bentuknya selalu tetap.",
  tables: [
    {
      caption: "Struktur Kalimat Perfekt",
      headers: ["Subjek", "Posisi 2 (Hilfsverb)", "Tengah", "Akhir (Partizip II)"],
      rows: [
        ["Ich", "habe", "zehn Stunden", "gearbeitet."],
        ["Julian", "ist", "nach Hamburg", "gefahren."],
        ["Wir", "haben", "Pizza", "gegessen."],
        ["Sie", "sind", "pünktlich", "gekommen."],
      ],
    },
    {
      caption: "Kata kerja dengan SEIN (pergerakan & perubahan kondisi)",
      headers: ["Kata kerja", "Partizip II", "Arti", "Contoh"],
      rows: [
        ["gehen", "gegangen", "pergi (jalan kaki)", "Ich bin in die Schule gegangen."],
        ["fahren", "gefahren", "pergi (kendaraan)", "Er ist nach München gefahren."],
        ["kommen", "gekommen", "datang", "Sie ist um 8 Uhr gekommen."],
        ["fliegen", "geflogen", "terbang", "Wir sind nach Berlin geflogen."],
        ["laufen", "gelaufen", "berlari / berjalan", "Er ist 5 km gelaufen."],
        ["reisen", "gereist", "bepergian", "Sie ist viel gereist."],
        ["ankommen", "angekommen", "tiba", "Wann bist du angekommen?"],
        ["abfahren", "abgefahren", "berangkat", "Der Zug ist um 9 Uhr abgefahren."],
        ["aufstehen", "aufgestanden", "bangun tidur", "Ich bin früh aufgestanden."],
        ["einschlafen", "eingeschlafen", "tertidur", "Das Baby ist eingeschlafen."],
        ["aufwachen", "aufgewacht", "terbangun", "Ich bin um 7 Uhr aufgewacht."],
        ["werden", "geworden", "menjadi", "Er ist Arzt geworden."],
        ["bleiben", "geblieben", "tinggal (tetap)", "Wir sind zu Hause geblieben."],
        ["passieren", "passiert", "terjadi", "Was ist passiert?"],
        ["sterben", "gestorben", "meninggal", "Er ist gestorben."],
      ],
    },
    {
      caption: "Kata kerja umum dengan HABEN",
      headers: ["Kata kerja", "Partizip II", "Contoh"],
      rows: [
        ["machen", "gemacht", "Ich habe Hausaufgaben gemacht."],
        ["arbeiten", "gearbeitet", "Sie hat lange gearbeitet."],
        ["kaufen", "gekauft", "Wir haben Brot gekauft."],
        ["essen", "gegessen", "Er hat Pizza gegessen."],
        ["trinken", "getrunken", "Ich habe Kaffee getrunken."],
        ["sehen", "gesehen", "Hast du den Film gesehen?"],
        ["sprechen", "gesprochen", "Sie hat Deutsch gesprochen."],
        ["schreiben", "geschrieben", "Er hat eine E-Mail geschrieben."],
        ["lesen", "gelesen", "Ich habe das Buch gelesen."],
        ["anrufen", "angerufen", "Er hat mich angerufen."],
      ],
    },
  ],
  examples: [
    { de: "Was hast du gestern gemacht?", id: "Apa yang sudah kamu lakukan kemarin?" },
    { de: "Ich habe ein Brot gegessen.", id: "Saya sudah makan roti. (essen → gegessen, haben)" },
    { de: "Er ist gestern nach Berlin gefahren.", id: "Dia kemarin sudah pergi ke Berlin. (fahren → gefahren, sein)" },
    { de: "Wir sind zu Hause geblieben.", id: "Kami sudah tinggal di rumah. (bleiben → geblieben, sein)" },
    { de: "Ich bin um 7 Uhr aufgestanden.", id: "Saya bangun pukul 7. (aufstehen → aufgestanden, sein)" },
    { de: "Hast du den Film gesehen?", id: "Apakah kamu sudah nonton filmnya? (sehen → gesehen, haben)" },
    { de: "Wann bist du angekommen?", id: "Kapan kamu tiba? (ankommen → angekommen, sein)" },
  ],
  exercises: [
    {
      question: "Ich ___ gestern viel Deutsch gelernt.",
      options: ["bin", "habe", "hat"],
      answer: "habe",
    },
    {
      question: "Wann ___ Julian nach Hause gekommen?",
      options: ["ist", "hat", "sind"],
      answer: "ist",
    },
    {
      question: "Wir ___ am Wochenende Pizza gegessen.",
      options: ["sind", "haben", "hatten"],
      answer: "haben",
    },
    {
      question: "Ich ___ heute früh aufgestanden. (aufstehen = perubahan kondisi)",
      options: ["habe", "bin", "hat"],
      answer: "bin",
    },
    {
      question: "Partizip II dari 'fahren' adalah…",
      options: ["gefahrt", "gefahren", "fuhr"],
      answer: "gefahren",
    },
    {
      question: "'bleiben' memakai kata bantu…",
      options: ["haben", "sein", "tergantung konteks"],
      answer: "sein",
    },
  ],
};
