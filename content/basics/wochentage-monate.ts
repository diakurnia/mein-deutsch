import type { BasicsTopic } from "@/content/basics-types";

export const wochentageMonate: BasicsTopic = {
  id: "wochentage-monate",
  title: "Wochentage, Monate & Jahreszeiten",
  level: "A1",
  order: 4,
  icon: "📅",
  intro:
    "Nama **hari (Wochentage)**, **bulan (Monate)**, **musim (Jahreszeiten)**, dan **tahun (Jahre)** dipakai sehari-hari untuk membuat janji, menyebut tanggal, dan bercerita.\n\n" +
    "**Aturan penyebutan tahun** berbeda tergantung periodenya:\n\n" +
    "**Tahun 1100–1999:** dibagi dua bagian ratusan. Contoh: *1990* = *neunzehnhundertneunzig* (sembilan-belas + ratus + sembilan-puluh). Pola: [ratusan pertama] + *hundert* + [sisa angka].\n\n" +
    "**Tahun 2000 ke atas:** pakai *zweitausend...* seperti angka biasa. Contoh: *2026* = *zweitausendsechsundzwanzig*.\n\n" +
    "**Dalam kalimat:** untuk menyebut tahun kejadian, cukup sebutkan tahunnya tanpa preposisi (*Er wurde 1990 geboren* = Dia lahir tahun 1990). Kalau ingin lebih formal, gunakan *im Jahr* di depannya (*im Jahr 2026*).",
  groups: [
    {
      caption: "Hari (Wochentage)",
      items: [
        { de: "Montag", translation: "Senin" },
        { de: "Dienstag", translation: "Selasa" },
        { de: "Mittwoch", translation: "Rabu" },
        { de: "Donnerstag", translation: "Kamis" },
        { de: "Freitag", translation: "Jumat" },
        { de: "Samstag", translation: "Sabtu" },
        { de: "Sonntag", translation: "Minggu" },
      ],
    },
    {
      caption: "Bulan (Monate)",
      items: [
        { de: "Januar", translation: "Januari" },
        { de: "Februar", translation: "Februari" },
        { de: "März", translation: "Maret" },
        { de: "April", translation: "April" },
        { de: "Mai", translation: "Mei" },
        { de: "Juni", translation: "Juni" },
        { de: "Juli", translation: "Juli" },
        { de: "August", translation: "Agustus" },
        { de: "September", translation: "September" },
        { de: "Oktober", translation: "Oktober" },
        { de: "November", translation: "November" },
        { de: "Dezember", translation: "Desember" },
      ],
    },
    {
      caption: "Musim (Jahreszeiten)",
      items: [
        { de: "der Frühling", translation: "musim semi" },
        { de: "der Sommer", translation: "musim panas" },
        { de: "der Herbst", translation: "musim gugur" },
        { de: "der Winter", translation: "musim dingin" },
      ],
    },
    {
      caption: "Tahun — 1100 s.d. 1999 (pola: [ratusan] + hundert + [sisa])",
      items: [
        { de: "neunzehnhundert", translation: "1900", hint: "neunzehn (19) + hundert (ratus)" },
        { de: "neunzehnhundertneunzig", translation: "1990", hint: "1900 + neunzig (90)" },
        { de: "neunzehnhundertneunundneunzig", translation: "1999", hint: "1900 + 99" },
        { de: "achtzehnhundertfünfzig", translation: "1850", hint: "achtzehn (18) + hundert + fünfzig (50)" },
        { de: "zwölfhundert", translation: "1200", hint: "zwölf (12) + hundert" },
      ],
    },
    {
      caption: "Tahun — 2000 ke atas (pola: zweitausend + sisa)",
      items: [
        { de: "zweitausend", translation: "2000" },
        { de: "zweitausendeins", translation: "2001", hint: "zweitausend + eins" },
        { de: "zweitausendzehn", translation: "2010", hint: "zweitausend + zehn" },
        { de: "zweitausendzwanzig", translation: "2020", hint: "zweitausend + zwanzig" },
        { de: "zweitausendsechsundzwanzig", translation: "2026", hint: "zweitausend + 26" },
      ],
    },
    {
      caption: "Pemakaian tahun dalam kalimat",
      items: [
        { de: "im Jahr 2026", translation: "pada tahun 2026 (formal)", hint: "im Jahr + tahun" },
        { de: "Er wurde 1990 geboren.", translation: "Dia lahir tahun 1990.", hint: "tanpa 'im Jahr' untuk tahun lahir" },
        { de: "Sie hat 2020 geheiratet.", translation: "Dia menikah tahun 2020.", hint: "tanpa preposisi — langsung sebutkan tahun" },
        { de: "Von 1990 bis 2000", translation: "dari tahun 1990 sampai 2000", hint: "von ... bis ... untuk rentang waktu" },
      ],
    },
  ],
  exercises: [
    {
      question: "'Mittwoch' adalah hari…",
      options: ["Selasa", "Rabu", "Kamis"],
      answer: "Rabu",
    },
    {
      question: "Bulan 'März' artinya…",
      options: ["Mei", "Maret", "Maart"],
      answer: "Maret",
    },
    {
      question: "'der Sommer' adalah musim…",
      options: ["panas", "dingin", "gugur"],
      answer: "panas",
    },
    {
      question: "Tahun 1990 dalam bahasa Jerman adalah…",
      options: ["zweitausendneunzig", "neunzehnhundertneunzig", "neunhundertneunzig"],
      answer: "neunzehnhundertneunzig",
    },
    {
      question: "Tahun 2026 dalam bahasa Jerman adalah…",
      options: ["zweitausendsechsundzwanzig", "zwanzigsechsundzweitausend", "zweitausendundsechsundzwanzig"],
      answer: "zweitausendsechsundzwanzig",
    },
    {
      question: "Cara formal menyebut tahun dalam kalimat adalah…",
      options: ["auf Jahr 2026", "im Jahr 2026", "in Jahr 2026"],
      answer: "im Jahr 2026",
    },
  ],
};
