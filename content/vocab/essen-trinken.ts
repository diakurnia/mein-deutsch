import type { VocabTopic } from '@/content/vocab-types';

export const essenTrinken: VocabTopic = {
  id: 'essen-trinken',
  order: 2,
  title: 'Essen & Trinken',
  icon: '🍽️',
  available: true,
  intro: 'Pelajari kosakata seputar makanan dan minuman dalam bahasa Jerman. Perhatikan artikel setiap kata benda — das, die, atau der — dan hafalkan bersama bentuk pluralnya.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Brot',    artikel: 'das', plural: 'die Brote',   translation: 'roti' },
    { wortart: 'Nomen', de: 'Wasser',  artikel: 'das', plural: null,          translation: 'air' },
    { wortart: 'Nomen', de: 'Milch',   artikel: 'die', plural: null,          translation: 'susu' },
    { wortart: 'Nomen', de: 'Apfel',   artikel: 'der', plural: 'die Äpfel',   translation: 'apel' },
    { wortart: 'Nomen', de: 'Ei',      artikel: 'das', plural: 'die Eier',    translation: 'telur' },
    { wortart: 'Nomen', de: 'Kaffee',  artikel: 'der', plural: 'die Kaffees', translation: 'kopi' },
    { wortart: 'Nomen', de: 'Suppe',   artikel: 'die', plural: 'die Suppen',  translation: 'sup' },
    { wortart: 'Nomen', de: 'Butter',  artikel: 'die', plural: null,          translation: 'mentega' },
    { wortart: 'Nomen', de: 'Käse',    artikel: 'der', plural: null,          translation: 'keju' },
    { wortart: 'Nomen', de: 'Fleisch', artikel: 'das', plural: null,          translation: 'daging' },
    { wortart: 'Nomen', de: 'Gemüse',  artikel: 'das', plural: null,          translation: 'sayuran' },
    { wortart: 'Nomen', de: 'Tee',     artikel: 'der', plural: 'die Tees',    translation: 'teh' },
    // Verb (4)
    { wortart: 'Verb', de: 'essen',   translation: 'makan',     ich: 'esse',   erSie: 'isst',  irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'trinken', translation: 'minum',     ich: 'trinke', erSie: 'trinkt', irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kochen',  translation: 'memasak',   ich: 'koche',  erSie: 'kocht',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kaufen',  translation: 'membeli',   ich: 'kaufe',  erSie: 'kauft',  irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'lecker', translation: 'enak, lezat', example: 'Das Essen ist lecker.' },
    { wortart: 'Adjektiv', de: 'frisch', translation: 'segar',        example: 'Das Brot ist frisch.' },
  ],

  examples: [
    { de: 'Ich esse **das Brot** mit **der Butter**.', id: 'Saya makan roti dengan mentega.' },
    { de: '**Die Suppe** ist sehr lecker.',            id: 'Supnya sangat enak.' },
    { de: 'Er trinkt **Kaffee** jeden Morgen.',        id: 'Dia minum kopi setiap pagi.' },
    { de: 'Wir kochen **das Gemüse** zusammen.',       id: 'Kami memasak sayuran bersama.' },
  ],

  exercises: [
    {
      question: '___ Ei ist frisch. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '___ Suppe ist heiß. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "der Apfel"?',
      options: ['die Apfels', 'die Äpfel', 'die Apfeln'],
      answer: 'die Äpfel',
    },
    {
      question: 'Apa arti kata "lecker"?',
      options: ['mahal', 'cepat', 'enak'],
      answer: 'enak',
    },
  ],
};
