import type { GrammarTopic } from "@/content/types";

export const satzklammer: GrammarTopic = {
  id: "satzklammer",
  title: "Satzklammer (Dua Posisi Tetap)",
  level: "A1",
  order: 15,
  icon: "🔗",
  explanation:
    "**Satzklammer** (bingkai kalimat) adalah struktur unik dalam tata bahasa Jerman di mana elemen kata kerja terbagi menjadi dua bagian yang mengapit elemen kalimat lainnya. Bagian pertama adalah kata kerja yang dikonjugasikan sesuai subjek di **Posisi 2**, sedangkan bagian kedua diletakkan tepat di **akhir kalimat** dalam bentuk tetap.\n\n" +
    "Struktur ini menciptakan sebuah 'bingkai' yang menahan informasi tambahan (objek, keterangan waktu, dll.) di dalamnya. Terdapat dua jenis utama **Satzklammer** di level A1: penggunaan **Modalverben** (kata kerja bantu di Posisi 2 + Infinitiv di akhir) dan **Trennbare Verben** (kata kerja dasar di Posisi 2 + prefiks di akhir).\n\n" +
    "Memahami **Satzklammer** sangat penting karena pembicara bahasa Jerman sering harus menunggu hingga akhir kalimat untuk memahami makna penuh sebuah pernyataan. Hal ini menuntut kita selalu meletakkan bagian kedua kata kerja tepat di urutan terakhir, tidak peduli seberapa panjang kalimatnya.",
  notes:
    "Bagian kata kerja di akhir kalimat (Infinitiv atau Prefiks) **tidak pernah dikonjugasikan** — bentuknya selalu tetap, apa pun subjeknya.",
  tables: [
    {
      caption: "Struktur Satzklammer dalam Kalimat",
      headers: ["Jenis", "Posisi 2 (dikonjugasi)", "Tengah", "Akhir (tetap)"],
      rows: [
        ["Modalverben", "Ich muss", "heute lange", "arbeiten."],
        ["Trennbare Verben", "Ich kaufe", "im Supermarkt", "ein."],
        ["Modal + Trennbar", "Ich will", "die Wohnung", "aufräumen."],
        ["Verb + Verb", "Wir gehen", "heute Nachmittag", "schwimmen."],
      ],
    },
  ],
  examples: [
    { de: "Wir müssen die Wohnung aufräumen.", id: "Kami harus merapikan apartemen." },
    { de: "Ich rufe dich morgen an.", id: "Saya akan meneleponmu besok." },
    { de: "Können Sie mir das bitte zeigen?", id: "Bisakah Anda tolong menunjukkan itu kepada saya?" },
    { de: "Am Sonntag wollen wir Fußball spielen.", id: "Di hari Minggu kami ingin bermain sepak bola." },
  ],
  exercises: [
    {
      question: "Ich ___ heute leider ___.",
      options: ["muss / arbeiten", "arbeite / muss", "muss / gearbeitet"],
      answer: "muss / arbeiten",
    },
    {
      question: "Wann ___ die Party ___?",
      options: ["fängt / an", "an / fängt", "fängt / ein"],
      answer: "fängt / an",
    },
    {
      question: "Wir ___ am Samstag ___ gehen.",
      options: ["wollen / schwimmen", "gehen / wollen", "wollen / schwimmt"],
      answer: "wollen / schwimmen",
    },
  ],
};
