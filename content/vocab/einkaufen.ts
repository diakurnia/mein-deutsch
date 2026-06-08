import type { VocabTopic } from '@/content/vocab-types';

export const einkaufen: VocabTopic = {
  id: 'einkaufen',
  order: 9,
  title: 'Einkaufen',
  icon: '🛒',
  available: true,
  intro: 'Pelajari kosakata seputar belanja dalam bahasa Jerman. Kosakata ini berguna saat berbelanja di supermarket, pasar, atau toko di negara berbahasa Jerman.',

  items: [
    // Nomen (12)
    { wortart: 'Nomen', de: 'Supermarkt', artikel: 'der', plural: 'die Supermärkte',  translation: 'supermarket' },
    { wortart: 'Nomen', de: 'Markt',      artikel: 'der', plural: 'die Märkte',       translation: 'pasar' },
    { wortart: 'Nomen', de: 'Geld',       artikel: 'das', plural: null,               translation: 'uang' },
    { wortart: 'Nomen', de: 'Preis',      artikel: 'der', plural: 'die Preise',       translation: 'harga' },
    { wortart: 'Nomen', de: 'Kasse',      artikel: 'die', plural: 'die Kassen',       translation: 'kasir' },
    { wortart: 'Nomen', de: 'Tüte',       artikel: 'die', plural: 'die Tüten',        translation: 'kantong plastik' },
    { wortart: 'Nomen', de: 'Produkt',    artikel: 'das', plural: 'die Produkte',     translation: 'produk, barang' },
    { wortart: 'Nomen', de: 'Rabatt',     artikel: 'der', plural: 'die Rabatte',      translation: 'diskon, potongan harga' },
    { wortart: 'Nomen', de: 'Rechnung',   artikel: 'die', plural: 'die Rechnungen',   translation: 'tagihan, nota' },
    { wortart: 'Nomen', de: 'Einkauf',    artikel: 'der', plural: 'die Einkäufe',     translation: 'belanjaan' },
    { wortart: 'Nomen', de: 'Angebot',    artikel: 'das', plural: 'die Angebote',     translation: 'penawaran, promo' },
    { wortart: 'Nomen', de: 'Schlange',   artikel: 'die', plural: 'die Schlangen',    translation: 'antrian' },
    // Verb (4)
    { wortart: 'Verb', de: 'kaufen',    translation: 'membeli',    ich: 'kaufe',      erSie: 'kauft',     irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'bezahlen',  translation: 'membayar',   ich: 'bezahle',    erSie: 'bezahlt',   irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'kosten',    translation: 'berharga',   ich: 'koste',      erSie: 'kostet',    irregular: false, trennbar: false },
    { wortart: 'Verb', de: 'einkaufen', translation: 'berbelanja', ich: 'kaufe...ein', erSie: 'kauft...ein', irregular: false, trennbar: true },
    // Adjektiv (2)
    { wortart: 'Adjektiv', de: 'billig', translation: 'murah',  example: 'Das Produkt ist sehr billig.' },
    { wortart: 'Adjektiv', de: 'teuer',  translation: 'mahal',  example: 'Der Preis ist zu teuer.' },
  ],

  examples: [
    { de: 'Ich gehe in **den Supermarkt**.',          id: 'Saya pergi ke supermarket.' },
    { de: 'Was kostet **das Produkt**?',              id: 'Berapa harga produk ini?' },
    { de: 'Ich bezahle an **der Kasse**.',            id: 'Saya membayar di kasir.' },
    { de: '**Der Rabatt** ist heute 20 Prozent.',     id: 'Diskonnya hari ini 20 persen.' },
  ],

  exercises: [
    {
      question: '___ Markt ist groß. — Pilih artikel yang tepat:',
      options: ['der', 'die', 'das'],
      answer: 'der',
    },
    {
      question: '___ Kasse ist dort. — Pilih artikel yang tepat:',
      options: ['Der', 'Die', 'Das'],
      answer: 'Die',
    },
    {
      question: 'Apa bentuk plural dari "der Supermarkt"?',
      options: ['die Supermarkte', 'die Supermärkten', 'die Supermärkte'],
      answer: 'die Supermärkte',
    },
    {
      question: 'Apa arti kata "billig"?',
      options: ['bagus', 'mahal', 'murah'],
      answer: 'murah',
    },
    {
      question: 'Lengkapi kalimat: "Ich ___ an der Kasse." (bezahlen)',
      options: ['bezahle', 'bezahlt', 'bezahlen'],
      answer: 'bezahle',
    },
  ],
};
