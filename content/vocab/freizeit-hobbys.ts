import type { VocabTopic } from '@/content/vocab-types';

export const freizeitHobbys: VocabTopic = {
  id: 'freizeit-hobbys',
  order: 5,
  title: 'Freizeit & Hobbys',
  icon: '🎨',
  available: true,
  intro: 'Pelajari kosakata seputar waktu luang dan hobi dalam bahasa Jerman. Kosakata ini membantu kamu bercerita tentang kegiatan favorit dan cara menghabiskan waktu bebas.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Freizeit',  artikel: 'die', plural: null,              translation: 'waktu luang' },
    { wortart: 'Nomen', de: 'Hobby',     artikel: 'das', plural: 'die Hobbys',      translation: 'hobi' },
    { wortart: 'Nomen', de: 'Sport',     artikel: 'der', plural: null,              translation: 'olahraga' },
    { wortart: 'Nomen', de: 'Musik',     artikel: 'die', plural: null,              translation: 'musik' },
    { wortart: 'Nomen', de: 'Buch',      artikel: 'das', plural: 'die Bücher',      translation: 'buku' },
    { wortart: 'Nomen', de: 'Film',      artikel: 'der', plural: 'die Filme',       translation: 'film' },
    { wortart: 'Nomen', de: 'Spiel',     artikel: 'das', plural: 'die Spiele',      translation: 'permainan' },
    { wortart: 'Nomen', de: 'Reise',     artikel: 'die', plural: 'die Reisen',      translation: 'perjalanan' },
    { wortart: 'Nomen', de: 'Park',      artikel: 'der', plural: 'die Parks',       translation: 'taman' },
    { wortart: 'Nomen', de: 'Konzert',   artikel: 'das', plural: 'die Konzerte',    translation: 'konser' },
    { wortart: 'Nomen', de: 'Freund',    artikel: 'der', plural: 'die Freunde',     translation: 'teman laki-laki' },
    { wortart: 'Nomen', de: 'Freundin',  artikel: 'die', plural: 'die Freundinnen', translation: 'teman perempuan' },
    // Verb (4)
    { wortart: 'Verb', de: 'spielen', translation: 'bermain, memainkan', ich: 'spiele', erSie: 'spielt',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'lesen',   translation: 'membaca',            ich: 'lese',   erSie: 'liest',   irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'reisen',  translation: 'bepergian, wisata',  ich: 'reise',  erSie: 'reist',   irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'treffen', translation: 'bertemu',            ich: 'treffe', erSie: 'trifft',  irregular: true,  trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'interessant', translation: 'menarik',        example: 'Das Buch ist sehr interessant.' },
    { wortart: 'Adjektiv', de: 'langweilig',  translation: 'membosankan',    example: 'Der Film ist langweilig.' },
  ],

  examples: [
    { de: 'In meiner **Freizeit** lese ich gern **Bücher**.', id: 'Di waktu luangku, saya suka membaca buku.' },
    { de: '**Der Sport** ist gut für die Gesundheit.',        id: 'Olahraga baik untuk kesehatan.' },
    { de: 'Wir treffen **unsere Freunde** im **Park**.',      id: 'Kami bertemu teman-teman di taman.' },
    { de: '**Das Konzert** war sehr interessant.',            id: 'Konsernya sangat menarik.' },
  ],

  exercises: [
    {
      question: '___ Hobby macht Spaß. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '___ Reise war schön. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "das Buch"?',
      options: ['die Büche', 'die Buche', 'die Bücher'],
      answer: 'die Bücher',
    },
    {
      question: 'Apa arti kata "langweilig"?',
      options: ['menarik', 'menyenangkan', 'membosankan'],
      answer: 'membosankan',
    },
  ],
};
