import type { BasicsTopic } from "@/content/basics-types";

export const wochentageMonate: BasicsTopic = {
  id: "wochentage-monate",
  title: "Hari, Bulan & Musim",
  level: "A1",
  order: 4,
  icon: "📅",
  intro:
    "Nama **hari (Wochentage)**, **bulan (Monate)**, dan **musim (Jahreszeiten)** dipakai untuk membuat janji, menyebut tanggal, dan bercerita. Semua kata ini berjenis maskulin (*der*).",
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
  ],
};
