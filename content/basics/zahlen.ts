import type { BasicsTopic } from "@/content/basics-types";

export const zahlen: BasicsTopic = {
  id: "zahlen",
  title: "Zahlen",
  level: "A1",
  order: 3,
  icon: "🔢",
  intro:
    "**Die Zahlen** (angka) wajib dikuasai untuk menyebut umur, harga, nomor telepon, dan waktu.\n\n" +
    "Pola penting yang perlu diingat:\n\n" +
    "**13–19:** tambahkan *-zehn* di belakang (mis. *drei* → *dreizehn*). Pengecualian: *sechzehn* (bukan *sechszehn*) dan *siebzehn* (bukan *siebenzehn*).\n\n" +
    "**21–99:** **satuan + und + puluhan** — dibalik dari bahasa Indonesia! *einundzwanzig* = satu-dan-dua-puluh = 21. Pola ini berlaku untuk semua puluhan.\n\n" +
    "**Ratusan:** *hundert* (100), *zweihundert* (200), *dreihundert* (300), dst. Angka di belakang ratusan langsung disambung: *zweihundertfünfzig* = 250.\n\n" +
    "**Ribuan:** *tausend* (1.000), *zweitausend* (2.000), dst. Satu juta = *eine Million*.",
  groups: [
    {
      caption: "0 – 12",
      items: [
        { de: "null", translation: "0" },
        { de: "eins", translation: "1" },
        { de: "zwei", translation: "2" },
        { de: "drei", translation: "3" },
        { de: "vier", translation: "4" },
        { de: "fünf", translation: "5" },
        { de: "sechs", translation: "6" },
        { de: "sieben", translation: "7" },
        { de: "acht", translation: "8" },
        { de: "neun", translation: "9" },
        { de: "zehn", translation: "10" },
        { de: "elf", translation: "11" },
        { de: "zwölf", translation: "12" },
      ],
    },
    {
      caption: "13 – 20",
      items: [
        { de: "dreizehn", translation: "13" },
        { de: "vierzehn", translation: "14" },
        { de: "fünfzehn", translation: "15" },
        { de: "sechzehn", translation: "16", hint: "⚠ bukan sechszehn" },
        { de: "siebzehn", translation: "17", hint: "⚠ bukan siebenzehn" },
        { de: "achtzehn", translation: "18" },
        { de: "neunzehn", translation: "19" },
        { de: "zwanzig", translation: "20" },
      ],
    },
    {
      caption: "Puluhan (30 – 90)",
      items: [
        { de: "dreißig", translation: "30", hint: "⚠ bukan dreizehn!" },
        { de: "vierzig", translation: "40" },
        { de: "fünfzig", translation: "50" },
        { de: "sechzig", translation: "60" },
        { de: "siebzig", translation: "70" },
        { de: "achtzig", translation: "80" },
        { de: "neunzig", translation: "90" },
      ],
    },
    {
      caption: "Pola 21–99 (satuan + und + puluhan)",
      items: [
        { de: "einundzwanzig", translation: "21", hint: "ein + und + zwanzig" },
        { de: "zweiunddreißig", translation: "32", hint: "zwei + und + dreißig" },
        { de: "dreiundvierzig", translation: "43", hint: "drei + und + vierzig" },
        { de: "vierundsiebzig", translation: "74", hint: "vier + und + siebzig" },
        { de: "neunundneunzig", translation: "99", hint: "neun + und + neunzig" },
      ],
    },
    {
      caption: "Ratusan (100 – 900)",
      items: [
        { de: "hundert", translation: "100" },
        { de: "zweihundert", translation: "200" },
        { de: "dreihundert", translation: "300" },
        { de: "vierhundert", translation: "400" },
        { de: "fünfhundert", translation: "500" },
        { de: "zweihundertfünfzig", translation: "250", hint: "200 + 50 langsung disambung" },
        { de: "dreihundertdreiundzwanzig", translation: "323", hint: "300 + 23" },
      ],
    },
    {
      caption: "Ribuan & besar",
      items: [
        { de: "tausend", translation: "1.000" },
        { de: "zweitausend", translation: "2.000" },
        { de: "zehntausend", translation: "10.000" },
        { de: "hunderttausend", translation: "100.000" },
        { de: "eine Million", translation: "1.000.000" },
        { de: "zweitausendfünfhundert", translation: "2.500", hint: "2.000 + 500" },
      ],
    },
  ],
  exercises: [
    {
      question: "Angka 'zwölf' artinya…",
      options: ["2", "12", "20"],
      answer: "12",
    },
    {
      question: "Bahasa Jerman untuk 21 adalah…",
      options: ["zwanzigeins", "einundzwanzig", "zwanzigundein"],
      answer: "einundzwanzig",
    },
    {
      question: "Angka 'dreißig' adalah…",
      options: ["13", "30", "33"],
      answer: "30",
    },
    {
      question: "'zweihundert' artinya…",
      options: ["20", "200", "2.000"],
      answer: "200",
    },
    {
      question: "Bahasa Jerman untuk 74 adalah…",
      options: ["siebenundsiebzig", "vierundsiebzig", "siebzehnundvierzig"],
      answer: "vierundsiebzig",
    },
  ],
};
