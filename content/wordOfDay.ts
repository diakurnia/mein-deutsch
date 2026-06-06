export type Word = {
  wort: string;
  artikel: string; // "der" | "die" | "das" | "" (untuk non-nomina)
  arti: string;
  contoh: string;
  contohArti: string;
};

// Daftar kata A1 bawaan untuk "Wort des Tages".
// Dirotasi berdasarkan tanggal sehingga berganti tiap hari.
const WORDS: Word[] = [
  { wort: "freundlich", artikel: "", arti: "ramah, baik hati", contoh: "Sie ist sehr freundlich.", contohArti: "Dia sangat ramah." },
  { wort: "Haus", artikel: "das", arti: "rumah", contoh: "Das Haus ist groß.", contohArti: "Rumah itu besar." },
  { wort: "Freund", artikel: "der", arti: "teman (laki-laki)", contoh: "Mein Freund kommt heute.", contohArti: "Temanku datang hari ini." },
  { wort: "Stadt", artikel: "die", arti: "kota", contoh: "Berlin ist eine schöne Stadt.", contohArti: "Berlin adalah kota yang indah." },
  { wort: "lernen", artikel: "", arti: "belajar", contoh: "Ich lerne Deutsch.", contohArti: "Saya belajar bahasa Jerman." },
  { wort: "Wasser", artikel: "das", arti: "air", contoh: "Ich trinke Wasser.", contohArti: "Saya minum air." },
  { wort: "Arbeit", artikel: "die", arti: "pekerjaan", contoh: "Die Arbeit ist interessant.", contohArti: "Pekerjaan itu menarik." },
  { wort: "schnell", artikel: "", arti: "cepat", contoh: "Das Auto ist schnell.", contohArti: "Mobil itu cepat." },
  { wort: "Tag", artikel: "der", arti: "hari", contoh: "Schönen Tag noch!", contohArti: "Semoga harimu menyenangkan!" },
  { wort: "essen", artikel: "", arti: "makan", contoh: "Wir essen zusammen.", contohArti: "Kami makan bersama." },
  { wort: "Buch", artikel: "das", arti: "buku", contoh: "Das Buch ist neu.", contohArti: "Buku itu baru." },
  { wort: "wichtig", artikel: "", arti: "penting", contoh: "Das ist sehr wichtig.", contohArti: "Itu sangat penting." },
];

export function getWordOfDay(date = new Date()): Word {
  // Hitung indeks berdasarkan hari ke berapa dalam tahun
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return WORDS[dayOfYear % WORDS.length];
}
