import type { VocabTopic } from '@/content/vocab-types';

export const schuleLernen: VocabTopic = {
  id: 'schule-lernen',
  order: 10,
  title: 'Schule & Lernen',
  icon: '📚',
  available: true,
  intro: 'Pelajari kosakata seputar sekolah dan belajar dalam bahasa Jerman. Kosakata ini sangat relevan bagi pelajar bahasa Jerman karena berkaitan langsung dengan kegiatan belajar sehari-hari.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Schule',       artikel: 'die', plural: 'die Schulen',       translation: 'sekolah' },
    { wortart: 'Nomen', de: 'Klasse',       artikel: 'die', plural: 'die Klassen',       translation: 'kelas' },
    { wortart: 'Nomen', de: 'Lehrer',       artikel: 'der', plural: 'die Lehrer',        translation: 'guru (laki-laki)' },
    { wortart: 'Nomen', de: 'Lehrerin',     artikel: 'die', plural: 'die Lehrerinnen',   translation: 'guru (perempuan)' },
    { wortart: 'Nomen', de: 'Heft',         artikel: 'das', plural: 'die Hefte',         translation: 'buku tulis' },
    { wortart: 'Nomen', de: 'Stift',        artikel: 'der', plural: 'die Stifte',        translation: 'pulpen, pensil' },
    { wortart: 'Nomen', de: 'Prüfung',      artikel: 'die', plural: 'die Prüfungen',     translation: 'ujian, tes' },
    { wortart: 'Nomen', de: 'Hausaufgabe',  artikel: 'die', plural: 'die Hausaufgaben',  translation: 'pekerjaan rumah, PR' },
    { wortart: 'Nomen', de: 'Kurs',         artikel: 'der', plural: 'die Kurse',         translation: 'kursus, kelas' },
    { wortart: 'Nomen', de: 'Note',         artikel: 'die', plural: 'die Noten',         translation: 'nilai, angka' },
    { wortart: 'Nomen', de: 'Wörterbuch',   artikel: 'das', plural: 'die Wörterbücher',  translation: 'kamus' },
    { wortart: 'Nomen', de: 'Unterricht',   artikel: 'der', plural: null,                translation: 'pelajaran, jam belajar' },
    // Verb (4)
    { wortart: 'Verb', de: 'lernen',    translation: 'belajar, menghafal', ich: 'lerne',    erSie: 'lernt',    irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'studieren', translation: 'kuliah, mempelajari', ich: 'studiere', erSie: 'studiert', irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'schreiben', translation: 'menulis',             ich: 'schreibe', erSie: 'schreibt', irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'lesen',     translation: 'membaca',             ich: 'lese',     erSie: 'liest',    irregular: true,  trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'schwierig', translation: 'sulit, susah', example: 'Die Prüfung ist schwierig.' },
    { wortart: 'Adjektiv', de: 'einfach',   translation: 'mudah, simpel', example: 'Die Hausaufgabe ist einfach.' },
  ],

  examples: [
    { de: 'Ich gehe jeden Tag in **die Schule**.', id: 'Saya pergi ke sekolah setiap hari.' },
    { de: '**Der Kurs** beginnt um 9 Uhr.', id: 'Kursus dimulai pukul 9.' },
    { de: '**Die Prüfung** ist sehr schwierig.', id: 'Ujiannya sangat sulit.' },
    { de: 'Ich mache **meine Hausaufgaben** nach der Schule.', id: 'Saya mengerjakan PR setelah pulang sekolah.' },
  ],

  exercises: [
    {
      question: '___ Schule ist groß. — Pilih artikel yang tepat:',
      options: ['der', 'das', 'die'],
      answer: 'die',
    },
    {
      question: '___ Prüfung ist morgen. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Heft"?',
      options: ['die Heften', 'die Hefter', 'die Hefte'],
      answer: 'die Hefte',
    },
    {
      question: 'Apa arti kata "schwierig"?',
      options: ['mudah', 'menarik', 'sulit'],
      answer: 'sulit',
    },
  ],
};
