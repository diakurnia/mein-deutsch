import type { VocabTopic } from '@/content/vocab-types';

export const stadtVerkehr: VocabTopic = {
  id: 'stadt-verkehr',
  order: 8,
  title: 'Stadt & Verkehr',
  icon: '🚌',
  available: true,
  intro: 'Pelajari kosakata seputar kota dan transportasi dalam bahasa Jerman. Kosakata ini sangat berguna saat bepergian atau bertanya arah di kota berbahasa Jerman.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Stadt',       artikel: 'die', plural: 'die Städte',       translation: 'kota' },
    { wortart: 'Nomen', de: 'Bus',         artikel: 'der', plural: 'die Busse',        translation: 'bus' },
    { wortart: 'Nomen', de: 'U-Bahn',      artikel: 'die', plural: 'die U-Bahnen',     translation: 'MRT, metro', speakText: 'U-Bahn' },
    { wortart: 'Nomen', de: 'Bahnhof',     artikel: 'der', plural: 'die Bahnhöfe',     translation: 'stasiun kereta' },
    { wortart: 'Nomen', de: 'Straße',      artikel: 'die', plural: 'die Straßen',      translation: 'jalan' },
    { wortart: 'Nomen', de: 'Auto',        artikel: 'das', plural: 'die Autos',        translation: 'mobil' },
    { wortart: 'Nomen', de: 'Zug',         artikel: 'der', plural: 'die Züge',         translation: 'kereta' },
    { wortart: 'Nomen', de: 'Haltestelle', artikel: 'die', plural: 'die Haltestellen', translation: 'halte bus' },
    { wortart: 'Nomen', de: 'Ticket',      artikel: 'das', plural: 'die Tickets',      translation: 'tiket' },
    { wortart: 'Nomen', de: 'Weg',         artikel: 'der', plural: 'die Wege',         translation: 'jalan, rute' },
    { wortart: 'Nomen', de: 'Ampel',       artikel: 'die', plural: 'die Ampeln',       translation: 'lampu lalu lintas' },
    { wortart: 'Nomen', de: 'Fahrrad',     artikel: 'das', plural: 'die Fahrräder',    translation: 'sepeda' },
    // Verb (4)
    { wortart: 'Verb', de: 'fahren',     translation: 'berkendara, naik',   ich: 'fahre',      erSie: 'fährt',      irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'gehen',      translation: 'berjalan, pergi',    ich: 'gehe',       erSie: 'geht',       irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'einsteigen', translation: 'naik (kendaraan)',   ich: 'steige...ein', erSie: 'steigt...ein', irregular: false, trennbar: true },
    { wortart: 'Verb', de: 'aussteigen', translation: 'turun (kendaraan)',  ich: 'steige...aus', erSie: 'steigt...aus', irregular: false, trennbar: true },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'weit', translation: 'jauh',  example: 'Die Schule ist weit.' },
    { wortart: 'Adjektiv', de: 'nah',  translation: 'dekat', example: 'Der Bahnhof ist nah.' },
  ],

  examples: [
    { de: 'Ich fahre mit **dem Bus** zur Arbeit.',     id: 'Saya naik bus ke tempat kerja.' },
    { de: '**Der Zug** kommt um 10 Uhr an.',          id: 'Kereta tiba pukul 10.' },
    { de: 'Wo ist **die nächste Haltestelle**?',      id: 'Di mana halte terdekat?' },
    { de: '**Die Stadt** hat viele Straßen.',         id: 'Kota ini memiliki banyak jalan.' },
  ],

  exercises: [
    {
      question: '___ Bus fährt nach Berlin. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'der',
    },
    {
      question: '___ Straße ist sehr lang. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "der Zug"?',
      options: ['die Zugen', 'die Züge', 'die Zuges'],
      answer: 'die Züge',
    },
    {
      question: 'Apa arti kata "weit"?',
      options: ['dekat', 'cepat', 'jauh'],
      answer: 'jauh',
    },
  ],
};
