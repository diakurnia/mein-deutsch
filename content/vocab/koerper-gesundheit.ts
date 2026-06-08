import type { VocabTopic } from '@/content/vocab-types';

export const koerperGesundheit: VocabTopic = {
  id: 'koerper-gesundheit',
  order: 6,
  title: 'Körper & Gesundheit',
  icon: '🏥',
  available: true,
  intro: 'Pelajari kosakata seputar tubuh manusia dan kesehatan dalam bahasa Jerman. Kosakata ini penting untuk berkomunikasi dengan dokter atau mendeskripsikan kondisi tubuhmu.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Kopf',        artikel: 'der', plural: 'die Köpfe',        translation: 'kepala' },
    { wortart: 'Nomen', de: 'Hand',        artikel: 'die', plural: 'die Hände',        translation: 'tangan' },
    { wortart: 'Nomen', de: 'Fuß',         artikel: 'der', plural: 'die Füße',         translation: 'kaki' },
    { wortart: 'Nomen', de: 'Auge',        artikel: 'das', plural: 'die Augen',        translation: 'mata' },
    { wortart: 'Nomen', de: 'Nase',        artikel: 'die', plural: 'die Nasen',        translation: 'hidung' },
    { wortart: 'Nomen', de: 'Mund',        artikel: 'der', plural: 'die Münder',       translation: 'mulut' },
    { wortart: 'Nomen', de: 'Ohr',         artikel: 'das', plural: 'die Ohren',        translation: 'telinga' },
    { wortart: 'Nomen', de: 'Bauch',       artikel: 'der', plural: 'die Bäuche',       translation: 'perut' },
    { wortart: 'Nomen', de: 'Arzt',        artikel: 'der', plural: 'die Ärzte',        translation: 'dokter (laki-laki)' },
    { wortart: 'Nomen', de: 'Ärztin',      artikel: 'die', plural: 'die Ärztinnen',    translation: 'dokter (perempuan)' },
    { wortart: 'Nomen', de: 'Medikament',  artikel: 'das', plural: 'die Medikamente',  translation: 'obat' },
    { wortart: 'Nomen', de: 'Gesundheit',  artikel: 'die', plural: null,               translation: 'kesehatan' },
    // Verb (4)
    { wortart: 'Verb', de: 'schlafen',   translation: 'tidur',           ich: 'schlafe',     erSie: 'schläft',    irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'aufstehen',  translation: 'bangun (tidur)',  ich: 'stehe...auf', erSie: 'steht...auf', irregular: false, trennbar: true },
    { wortart: 'Verb', de: 'gehen',      translation: 'pergi, berjalan', ich: 'gehe',        erSie: 'geht',       irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'fühlen',     translation: 'merasa',          ich: 'fühle',       erSie: 'fühlt',      irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'krank',  translation: 'sakit',  example: 'Er ist heute krank.' },
    { wortart: 'Adjektiv', de: 'gesund', translation: 'sehat',  example: 'Sport macht dich gesund.' },
  ],

  examples: [
    { de: '**Der Kopf** tut mir weh.',             id: 'Kepalaku sakit.' },
    { de: 'Ich gehe zum **Arzt**.',                id: 'Saya pergi ke dokter.' },
    { de: 'Sie schläft acht Stunden.',             id: 'Dia tidur delapan jam.' },
    { de: '**Die Gesundheit** ist sehr wichtig.',  id: 'Kesehatan sangat penting.' },
  ],

  exercises: [
    {
      question: '___ Kopf tut weh. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'der',
    },
    {
      question: '___ Ärztin ist nett. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Auge"?',
      options: ['die Auges', 'die Augern', 'die Augen'],
      answer: 'die Augen',
    },
    {
      question: 'Apa arti kata "krank"?',
      options: ['sehat', 'lelah', 'sakit'],
      answer: 'sakit',
    },
    {
      question: 'Lengkapi konjugasi: "Er ___ acht Stunden." (schlafen, er/sie)',
      options: ['schläft', 'schlafe', 'schlafen'],
      answer: 'schläft',
    },
  ],
};
