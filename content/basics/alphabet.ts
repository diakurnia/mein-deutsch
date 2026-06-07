import type { BasicsTopic } from "@/content/basics-types";

export const alphabet: BasicsTopic = {
  id: "alphabet",
  title: "Alphabet",
  level: "A1",
  order: 1,
  icon: "🔤",
  intro:
    "**Das Alphabet** bahasa Jerman memiliki 26 huruf dasar yang sama dengan bahasa Indonesia, ditambah tiga huruf umlaut (**ä**, **ö**, **ü**) dan satu huruf khusus **ß** (*eszett*). Mengenal nama tiap huruf penting untuk mengeja nama dan kata (*buchstabieren*).\n\n" +
    "Klik tombol 🔊 untuk mendengar cara melafalkan setiap huruf.",
  groups: [
    {
      caption: "A – M",
      items: [
        { de: "A", translation: "contoh: Apfel (apel)", hint: "ah" },
        { de: "B", translation: "contoh: Buch (buku)", hint: "beh" },
        { de: "C", translation: "contoh: Computer", hint: "tseh" },
        { de: "D", translation: "contoh: Deutsch", hint: "deh" },
        { de: "E", translation: "contoh: Esel (keledai)", hint: "eh" },
        { de: "F", translation: "contoh: Fisch (ikan)", hint: "eff" },
        { de: "G", translation: "contoh: Garten (taman)", hint: "geh" },
        { de: "H", translation: "contoh: Haus (rumah)", hint: "hah" },
        { de: "I", translation: "contoh: Igel (landak)", hint: "ih" },
        { de: "J", translation: "contoh: Jahr (tahun)", hint: "yot" },
        { de: "K", translation: "contoh: Katze (kucing)", hint: "kah" },
        { de: "L", translation: "contoh: Lampe (lampu)", hint: "ell" },
        { de: "M", translation: "contoh: Mann (pria)", hint: "emm" },
      ],
    },
    {
      caption: "N – Z",
      items: [
        { de: "N", translation: "contoh: Nacht (malam)", hint: "enn" },
        { de: "O", translation: "contoh: Obst (buah)", hint: "oh" },
        { de: "P", translation: "contoh: Papier (kertas)", hint: "peh" },
        { de: "Q", translation: "contoh: Quelle (mata air)", hint: "kuh" },
        { de: "R", translation: "contoh: Rose (mawar)", hint: "err" },
        { de: "S", translation: "contoh: Sonne (matahari)", hint: "ess" },
        { de: "T", translation: "contoh: Tisch (meja)", hint: "teh" },
        { de: "U", translation: "contoh: Uhr (jam)", hint: "uh" },
        { de: "V", translation: "contoh: Vogel (burung)", hint: "fau" },
        { de: "W", translation: "contoh: Wasser (air)", hint: "veh" },
        { de: "X", translation: "contoh: Xylofon", hint: "iks" },
        { de: "Y", translation: "contoh: Yoga", hint: "ypsilon" },
        { de: "Z", translation: "contoh: Zeit (waktu)", hint: "tsett" },
      ],
    },
    {
      caption: "Umlaut & ß",
      items: [
        { de: "Ä", translation: "contoh: Äpfel (apel-apel)", hint: "ä (a-umlaut)" },
        { de: "Ö", translation: "contoh: Öl (minyak)", hint: "ö (o-umlaut)" },
        { de: "Ü", translation: "contoh: Übung (latihan)", hint: "ü (u-umlaut)" },
        { de: "ß", translation: "contoh: Straße (jalan)", hint: "eszett / s tajam" },
      ],
    },
  ],
  exercises: [
    {
      question: "Huruf 'W' dalam bahasa Jerman dieja…",
      options: ["veh", "doppel-u", "weh"],
      answer: "veh",
    },
    {
      question: "Huruf khusus 'ß' disebut…",
      options: ["umlaut", "eszett", "beta"],
      answer: "eszett",
    },
    {
      question: "Manakah yang termasuk huruf umlaut?",
      options: ["ß", "ö", "y"],
      answer: "ö",
    },
  ],
};
