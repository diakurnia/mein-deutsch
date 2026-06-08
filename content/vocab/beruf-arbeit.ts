import type { VocabTopic } from '@/content/vocab-types';

export const berufArbeit: VocabTopic = {
  id: 'beruf-arbeit',
  order: 4,
  title: 'Beruf & Arbeit',
  icon: '💼',
  available: true,
  intro: 'Pelajari kosakata seputar pekerjaan dan dunia kerja dalam bahasa Jerman. Kosakata ini sangat berguna untuk percakapan sehari-hari tentang profesi dan aktivitas di kantor.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Beruf',       artikel: 'der', plural: 'die Berufe',       translation: 'profesi, pekerjaan' },
    { wortart: 'Nomen', de: 'Arbeit',      artikel: 'die', plural: 'die Arbeiten',     translation: 'pekerjaan, kerja' },
    { wortart: 'Nomen', de: 'Büro',        artikel: 'das', plural: 'die Büros',        translation: 'kantor' },
    { wortart: 'Nomen', de: 'Chef',        artikel: 'der', plural: 'die Chefs',        translation: 'bos, atasan' },
    { wortart: 'Nomen', de: 'Kollege',     artikel: 'der', plural: 'die Kollegen',     translation: 'rekan kerja' },
    { wortart: 'Nomen', de: 'Gehalt',      artikel: 'das', plural: 'die Gehälter',     translation: 'gaji' },
    { wortart: 'Nomen', de: 'Besprechung', artikel: 'die', plural: 'die Besprechungen', translation: 'rapat, pertemuan' },
    { wortart: 'Nomen', de: 'Computer',    artikel: 'der', plural: 'die Computer',     translation: 'komputer' },
    { wortart: 'Nomen', de: 'Telefon',     artikel: 'das', plural: 'die Telefone',     translation: 'telepon' },
    { wortart: 'Nomen', de: 'E-Mail',      artikel: 'die', plural: 'die E-Mails',      translation: 'email', speakText: 'E-Mail' },
    { wortart: 'Nomen', de: 'Urlaub',      artikel: 'der', plural: 'die Urlaube',      translation: 'liburan, cuti' },
    { wortart: 'Nomen', de: 'Termin',      artikel: 'der', plural: 'die Termine',      translation: 'janji, jadwal' },
    // Verb (4)
    { wortart: 'Verb', de: 'arbeiten', translation: 'bekerja',        ich: 'arbeite',    erSie: 'arbeitet', irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'verdienen', translation: 'menghasilkan, mendapat', ich: 'verdiene', erSie: 'verdient', irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'anrufen',  translation: 'menelepon',      ich: 'rufe...an',  erSie: 'ruft...an', irregular: false, trennbar: true },
    { wortart: 'Verb', de: 'beginnen', translation: 'memulai',        ich: 'beginne',    erSie: 'beginnt',  irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'fleißig', translation: 'rajin',    example: 'Er ist sehr fleißig.' },
    { wortart: 'Adjektiv', de: 'müde',    translation: 'lelah, ngantuk', example: 'Ich bin nach der Arbeit müde.' },
  ],

  examples: [
    { de: '**Die Arbeit** beginnt um 8 Uhr.',          id: 'Pekerjaan dimulai pukul 8.' },
    { de: 'Mein **Büro** ist im dritten Stock.',        id: 'Kantorku di lantai tiga.' },
    { de: 'Ich rufe **den Chef** an.',                  id: 'Saya menelepon bos.' },
    { de: '**Der Urlaub** ist sehr wichtig.',           id: 'Liburan sangat penting.' },
  ],

  exercises: [
    {
      question: '___ Büro ist groß. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '___ Arbeit beginnt um acht. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Gehalt"?',
      options: ['die Gehalte', 'die Gehalten', 'die Gehälter'],
      answer: 'die Gehälter',
    },
    {
      question: 'Apa arti kata "fleißig"?',
      options: ['malas', 'rajin', 'lelah'],
      answer: 'rajin',
    },
    {
      question: 'Lengkapi konjugasi: "Sie ___ im Büro." (arbeiten, er/sie)',
      options: ['arbeitet', 'arbeite', 'arbeiten'],
      answer: 'arbeitet',
    },
  ],
};
