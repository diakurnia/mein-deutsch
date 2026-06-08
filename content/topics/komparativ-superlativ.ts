import type { GrammarTopic } from "@/content/types";

export const komparativSuperlativ: GrammarTopic = {
  id: "komparativ-superlativ",
  title: "Komparativ und Superlativ",
  level: "A1",
  order: 23,
  icon: "📈",
  explanation:
    "Untuk membandingkan dua hal atau menyatakan tingkatan tertinggi, bahasa Jerman menggunakan **Komparativ** dan **Superlativ**.\n\n" +
    "**Komparativ** (lebih ...): tambahkan akhiran **-er** pada kata sifat. Gunakan **als** (daripada) untuk membandingkan dua hal.\n\n" +
    "*klein* → *kleiner* (lebih kecil) | *Das Auto ist kleiner als das Haus.* (Mobilnya lebih kecil daripada rumah.)\n\n" +
    "**Superlativ** (paling ...): tambahkan **am** + akhiran **-sten** atau **-esten**. Gunakan setelah kata kerja sein.\n\n" +
    "*klein* → *am kleinsten* (paling kecil) | *Das ist am billigsten.* (Ini yang paling murah.)\n\n" +
    "**Perubahan Umlaut:** banyak kata sifat satu suku kata mengubah vokalnya menjadi umlaut saat Komparativ & Superlativ:\n\n" +
    "*alt* → *älter* → *am ältesten* | *groß* → *größer* → *am größten* | *jung* → *jünger* → *am jüngsten* | *warm* → *wärmer* → *am wärmsten*\n\n" +
    "**Bentuk tidak beraturan (paling sering dipakai):**\n\n" +
    "*gut* → *besser* → *am besten* | *viel* → *mehr* → *am meisten* | *gern* → *lieber* → *am liebsten*",
  notes:
    "Kata sifat berakhiran *-t, -d, -s, -ß, -sch, -z* mendapat akhiran **-esten** di Superlativ (bukan *-sten*) agar mudah diucapkan: *alt* → *am ältesten*, *groß* → *am größten*. Untuk ujian Goethe A1, bentuk tidak beraturan *gut/besser/am besten* dan *viel/mehr/am meisten* hampir selalu muncul.",
  tables: [
    {
      caption: "Pembentukan Komparativ dan Superlativ",
      headers: ["Grundform", "Komparativ (+er)", "Superlativ (am ...sten)", "Catatan"],
      rows: [
        ["klein", "kleiner", "am kleinsten", "reguler"],
        ["schnell", "schneller", "am schnellsten", "reguler"],
        ["billig", "billiger", "am billigsten", "reguler"],
        ["alt", "älter", "am ältesten", "umlaut + -esten"],
        ["groß", "größer", "am größten", "umlaut + -ten"],
        ["jung", "jünger", "am jüngsten", "umlaut"],
        ["warm", "wärmer", "am wärmsten", "umlaut"],
        ["gut", "besser", "am besten", "⚠ tidak beraturan"],
        ["viel", "mehr", "am meisten", "⚠ tidak beraturan"],
        ["gern", "lieber", "am liebsten", "⚠ tidak beraturan"],
      ],
    },
    {
      caption: "Struktur kalimat perbandingan",
      headers: ["Pola", "Contoh", "Arti"],
      rows: [
        ["A ist [Komp.] als B", "Berlin ist größer als Hamburg.", "Berlin lebih besar dari Hamburg."],
        ["A ist genauso [Adj.] wie B", "Sie ist genauso alt wie ich.", "Dia sama tuanya dengan saya."],
        ["A ist am [Sup.]", "Das ist am billigsten.", "Ini yang paling murah."],
        ["A ist nicht so [Adj.] wie B", "Er ist nicht so groß wie sie.", "Dia tidak setinggi dia."],
      ],
    },
  ],
  examples: [
    { de: "Der Zug ist schneller als der Bus.", id: "Kereta lebih cepat daripada bus." },
    { de: "Das Hotel ist teurer als die Pension.", id: "Hotel itu lebih mahal daripada penginapan." },
    { de: "Welches ist am billigsten?", id: "Yang mana paling murah?" },
    { de: "Mein Bruder ist jünger als ich.", id: "Adikku lebih muda dariku." },
    { de: "Ich lerne lieber Deutsch als Englisch.", id: "Saya lebih suka belajar bahasa Jerman daripada Inggris." },
  ],
  exercises: [
    {
      question: "Komparativ dari 'gut' adalah…",
      options: ["guter", "besser", "am besten"],
      answer: "besser",
    },
    {
      question: "'Das Hotel ist ___ als die Jugendherberge.' (lebih mahal)",
      options: ["teurer", "am teuersten", "teuer als"],
      answer: "teurer",
    },
    {
      question: "Superlativ dari 'viel' adalah…",
      options: ["mehrer", "am meisten", "am vielsten"],
      answer: "am meisten",
    },
    {
      question: "Untuk membandingkan dua hal dipakai kata…",
      options: ["als", "wie", "am"],
      answer: "als",
    },
    {
      question: "Komparativ dari 'alt' adalah…",
      options: ["älter", "alter", "am ältesten"],
      answer: "älter",
    },
  ],
};
