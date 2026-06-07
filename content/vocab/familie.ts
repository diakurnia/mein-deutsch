// content/vocab/familie.ts
import type { VocabTopic } from '@/content/vocab-types';

export const familie: VocabTopic = {
  id: 'familie',
  order: 1,
  title: 'Familie',
  icon: '👨‍👩‍👧',
  available: true,
  intro: 'Pelajari kosakata seputar keluarga dalam bahasa Jerman. Perhatikan artikel (der/die/das) dan bentuk pluralnya — keduanya harus dihafal bersama kata bendanya.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Mutter',      artikel: 'die', plural: 'die Mütter',      translation: 'ibu' },
    { wortart: 'Nomen', de: 'Vater',       artikel: 'der', plural: 'die Väter',       translation: 'ayah' },
    { wortart: 'Nomen', de: 'Kind',        artikel: 'das', plural: 'die Kinder',      translation: 'anak' },
    { wortart: 'Nomen', de: 'Schwester',   artikel: 'die', plural: 'die Schwestern',  translation: 'saudara perempuan' },
    { wortart: 'Nomen', de: 'Bruder',      artikel: 'der', plural: 'die Brüder',      translation: 'saudara laki-laki' },
    { wortart: 'Nomen', de: 'Großmutter',  artikel: 'die', plural: 'die Großmütter', translation: 'nenek', speakText: 'Großmutter' },
    { wortart: 'Nomen', de: 'Großvater',   artikel: 'der', plural: 'die Großväter',  translation: 'kakek', speakText: 'Großvater' },
    { wortart: 'Nomen', de: 'Familie',     artikel: 'die', plural: 'die Familien',   translation: 'keluarga' },
    { wortart: 'Nomen', de: 'Mann',        artikel: 'der', plural: 'die Männer',     translation: 'suami / pria' },
    { wortart: 'Nomen', de: 'Frau',        artikel: 'die', plural: 'die Frauen',     translation: 'istri / wanita' },
    { wortart: 'Nomen', de: 'Baby',        artikel: 'das', plural: 'die Babys',      translation: 'bayi' },
    { wortart: 'Nomen', de: 'Sohn',        artikel: 'der', plural: 'die Söhne',      translation: 'anak laki-laki' },
    // Verb (4)
    { wortart: 'Verb', de: 'heißen',  translation: 'bernama',      ich: 'heiße',  erSie: 'heißt',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'haben',   translation: 'memiliki',     ich: 'habe',   erSie: 'hat',    irregular: true,  trennbar: false },
    { wortart: 'Verb', de: 'wohnen',  translation: 'tinggal',      ich: 'wohne',  erSie: 'wohnt',  irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kommen',  translation: 'berasal dari / datang', ich: 'komme', erSie: 'kommt', irregular: false, trennbar: false },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'groß',  translation: 'besar / tinggi', example: 'Die Familie ist groß.' },
    { wortart: 'Adjektiv', de: 'klein', translation: 'kecil',          example: 'Das Kind ist klein.' },
  ],

  examples: [
    { de: '**Die Mutter** kocht das Essen.', id: 'Ibu memasak makanan.' },
    { de: '**Der Vater** kommt aus Berlin.', id: 'Ayah berasal dari Berlin.' },
    { de: '**Das Kind** ist klein.', id: 'Anak itu kecil.' },
    { de: 'Ich habe eine große **Familie**.', id: 'Saya punya keluarga yang besar.' },
  ],

  exercises: [
    {
      question: '„___ Kind spielt im Garten." — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'das',
    },
    {
      question: '„___ Frau heißt Maria." — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari „die Mutter"?',
      options: ['die Mutter', 'die Mütter', 'die Muttern'],
      answer: 'die Mütter',
    },
    {
      question: 'Apa arti kata kerja „wohnen"?',
      options: ['bekerja', 'tinggal', 'makan'],
      answer: 'tinggal',
    },
  ],
};
