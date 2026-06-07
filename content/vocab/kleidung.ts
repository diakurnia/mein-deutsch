import type { VocabTopic } from '@/content/vocab-types';

export const kleidung: VocabTopic = {
  id: 'kleidung',
  order: 7,
  title: 'Kleidung',
  icon: '👕',
  available: true,
  intro: 'Pelajari kosakata seputar pakaian dalam bahasa Jerman. Kosakata ini berguna saat berbelanja pakaian atau mendeskripsikan penampilan seseorang.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Hemd',    artikel: 'das', plural: 'die Hemden',  translation: 'kemeja' },
    { wortart: 'Nomen', de: 'Hose',    artikel: 'die', plural: 'die Hosen',   translation: 'celana' },
    { wortart: 'Nomen', de: 'Jacke',   artikel: 'die', plural: 'die Jacken',  translation: 'jaket' },
    { wortart: 'Nomen', de: 'Schuh',   artikel: 'der', plural: 'die Schuhe',  translation: 'sepatu' },
    { wortart: 'Nomen', de: 'Kleid',   artikel: 'das', plural: 'die Kleider', translation: 'gaun, dress' },
    { wortart: 'Nomen', de: 'Mütze',   artikel: 'die', plural: 'die Mützen',  translation: 'topi kupluk' },
    { wortart: 'Nomen', de: 'Mantel',  artikel: 'der', plural: 'die Mäntel',  translation: 'mantel, jaket tebal' },
    { wortart: 'Nomen', de: 'T-Shirt', artikel: 'das', plural: 'die T-Shirts', translation: 'kaos', speakText: 'T-Shirt' },
    { wortart: 'Nomen', de: 'Socke',   artikel: 'die', plural: 'die Socken',  translation: 'kaos kaki' },
    { wortart: 'Nomen', de: 'Rock',    artikel: 'der', plural: 'die Röcke',   translation: 'rok' },
    { wortart: 'Nomen', de: 'Farbe',   artikel: 'die', plural: 'die Farben',  translation: 'warna' },
    { wortart: 'Nomen', de: 'Größe',   artikel: 'die', plural: 'die Größen',  translation: 'ukuran' },
    // Verb (4)
    { wortart: 'Verb', de: 'tragen',   translation: 'memakai, membawa', ich: 'trage',    erSie: 'trägt',     irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'kaufen',   translation: 'membeli',          ich: 'kaufe',    erSie: 'kauft',     irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'anziehen', translation: 'mengenakan',       ich: 'ziehe...an', erSie: 'zieht...an', irregular: false, trennbar: true },
    { wortart: 'Verb', de: 'passen',   translation: 'cocok, pas',       ich: 'passe',    erSie: 'passt',     irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'schön',   translation: 'indah, cantik', example: 'Das Kleid ist sehr schön.' },
    { wortart: 'Adjektiv', de: 'bequem',  translation: 'nyaman',        example: 'Die Schuhe sind bequem.' },
  ],

  examples: [
    { de: 'Ich trage heute **eine Jacke**.', id: 'Saya memakai jaket hari ini.' },
    { de: '**Das Hemd** ist zu groß.', id: 'Kemejanya terlalu besar.' },
    { de: '**Die Hose** passt sehr gut.', id: 'Celananya sangat pas.' },
    { de: 'Welche **Größe** haben Sie?', id: 'Anda ukuran berapa?' },
  ],

  exercises: [
    {
      question: '___ Schuh ist neu. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'der',
    },
    {
      question: '___ Jacke ist warm. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Hemd"?',
      options: ['die Hemde', 'die Hemder', 'die Hemden'],
      answer: 'die Hemden',
    },
    {
      question: 'Apa arti kata "bequem"?',
      options: ['mahal', 'ketat', 'nyaman'],
      answer: 'nyaman',
    },
  ],
};
