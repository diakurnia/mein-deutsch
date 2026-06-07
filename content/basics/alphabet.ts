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
        { de: "A", id: "contoh: Apfel (apel)", hint: "ah" },
        { de: "B", id: "contoh: Buch (buku)", hint: "beh" },
        { de: "C", id: "contoh: Computer", hint: "tseh" },
        { de: "D", id: "contoh: Deutsch", hint: "deh" },
        { de: "E", id: "contoh: Esel (keledai)", hint: "eh" },
        { de: "F", id: "contoh: Fisch (ikan)", hint: "eff" },
        { de: "G", id: "contoh: Garten (taman)", hint: "geh" },
        { de: "H", id: "contoh: Haus (rumah)", hint: "hah" },
        { de: "I", id: "contoh: Igel (landak)", hint: "ih" },
        { de: "J", id: "contoh: Jahr (tahun)", hint: "yot" },
        { de: "K", id: "contoh: Katze (kucing)", hint: "kah" },
        { de: "L", id: "contoh: Lampe (lampu)", hint: "ell" },
        { de: "M", id: "contoh: Mann (pria)", hint: "emm" },
      ],
    },
    {
      caption: "N – Z",
      items: [
        { de: "N", id: "contoh: Nacht (malam)", hint: "enn" },
        { de: "O", id: "contoh: Obst (buah)", hint: "oh" },
        { de: "P", id: "contoh: Papier (kertas)", hint: "peh" },
        { de: "Q", id: "contoh: Quelle (mata air)", hint: "kuh" },
        { de: "R", id: "contoh: Rose (mawar)", hint: "err" },
        { de: "S", id: "contoh: Sonne (matahari)", hint: "ess" },
        { de: "T", id: "contoh: Tisch (meja)", hint: "teh" },
        { de: "U", id: "contoh: Uhr (jam)", hint: "uh" },
        { de: "V", id: "contoh: Vogel (burung)", hint: "fau" },
        { de: "W", id: "contoh: Wasser (air)", hint: "veh" },
        { de: "X", id: "contoh: Xylofon", hint: "iks" },
        { de: "Y", id: "contoh: Yoga", hint: "ypsilon" },
        { de: "Z", id: "contoh: Zeit (waktu)", hint: "tsett" },
      ],
    },
    {
      caption: "Umlaut & ß",
      items: [
        { de: "Ä", id: "contoh: Äpfel (apel-apel)", hint: "ä (a-umlaut)" },
        { de: "Ö", id: "contoh: Öl (minyak)", hint: "ö (o-umlaut)" },
        { de: "Ü", id: "contoh: Übung (latihan)", hint: "ü (u-umlaut)" },
        { de: "ß", id: "contoh: Straße (jalan)", hint: "eszett / s tajam" },
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
