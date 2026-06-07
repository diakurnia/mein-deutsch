import type { VocabTopic } from '@/content/vocab-types';

export const wohnen: VocabTopic = {
  id: 'wohnen',
  order: 3,
  title: 'Wohnen',
  icon: '🏠',
  available: true,
  intro: 'Pelajari kosakata seputar tempat tinggal dan rumah dalam bahasa Jerman. Perhatikan artikel setiap kata benda dan hafalkan bersama bentuk pluralnya.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Wohnung',    artikel: 'die', plural: 'die Wohnungen',  translation: 'apartemen' },
    { wortart: 'Nomen', de: 'Haus',       artikel: 'das', plural: 'die Häuser',     translation: 'rumah' },
    { wortart: 'Nomen', de: 'Zimmer',     artikel: 'das', plural: 'die Zimmer',     translation: 'kamar, ruangan' },
    { wortart: 'Nomen', de: 'Küche',      artikel: 'die', plural: 'die Küchen',     translation: 'dapur' },
    { wortart: 'Nomen', de: 'Badezimmer', artikel: 'das', plural: 'die Badezimmer', translation: 'kamar mandi' },
    { wortart: 'Nomen', de: 'Schlüssel',  artikel: 'der', plural: 'die Schlüssel',  translation: 'kunci' },
    { wortart: 'Nomen', de: 'Bett',       artikel: 'das', plural: 'die Betten',     translation: 'tempat tidur' },
    { wortart: 'Nomen', de: 'Tisch',      artikel: 'der', plural: 'die Tische',     translation: 'meja' },
    { wortart: 'Nomen', de: 'Stuhl',      artikel: 'der', plural: 'die Stühle',     translation: 'kursi' },
    { wortart: 'Nomen', de: 'Tür',        artikel: 'die', plural: 'die Türen',      translation: 'pintu' },
    { wortart: 'Nomen', de: 'Fenster',    artikel: 'das', plural: 'die Fenster',    translation: 'jendela' },
    { wortart: 'Nomen', de: 'Miete',      artikel: 'die', plural: 'die Mieten',     translation: 'uang sewa' },
    // Verb (4)
    { wortart: 'Verb', de: 'wohnen',   translation: 'tinggal',       ich: 'wohne',    erSie: 'wohnt',    irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'mieten',   translation: 'menyewa',       ich: 'miete',    erSie: 'mietet',   irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kaufen',   translation: 'membeli',       ich: 'kaufe',    erSie: 'kauft',    irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'umziehen', translation: 'pindah rumah',  ich: 'ziehe...um', erSie: 'zieht...um', irregular: false, trennbar: true },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'groß',      translation: 'besar',          example: 'Das Zimmer ist groß.' },
    { wortart: 'Adjektiv', de: 'gemütlich', translation: 'nyaman, cozy',   example: 'Die Wohnung ist gemütlich.' },
  ],

  examples: [
    { de: 'Ich wohne in **einer Wohnung** in Berlin.',  id: 'Saya tinggal di sebuah apartemen di Berlin.' },
    { de: '**Das Zimmer** ist sehr groß.',               id: 'Kamarnya sangat besar.' },
    { de: '**Die Küche** ist modern und schön.',         id: 'Dapurnya modern dan indah.' },
    { de: 'Wo ist **der Schlüssel**?',                   id: 'Di mana kuncinya?' },
  ],

  exercises: [
    {
      question: '___ Haus ist groß. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '___ Küche ist modern. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Zimmer"?',
      options: ['die Zimmern', 'die Zimmer', 'die Zimmers'],
      answer: 'die Zimmer',
    },
    {
      question: 'Apa arti kata "gemütlich"?',
      options: ['mahal', 'kecil', 'nyaman'],
      answer: 'nyaman',
    },
  ],
};
