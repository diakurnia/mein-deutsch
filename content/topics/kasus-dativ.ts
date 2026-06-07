import type { GrammarTopic } from "@/content/types";

export const kasusDativ: GrammarTopic = {
  id: "kasus-dativ",
  title: "Kasus Dativ",
  level: "A1",
  order: 17,
  icon: "🎁",
  explanation:
    "**Kasus Dativ** digunakan untuk menunjukkan **objek tidak langsung** dalam sebuah kalimat — yaitu orang yang menerima sesuatu atau menjadi sasaran tidak langsung dari sebuah tindakan. Selain itu, kasus ini wajib digunakan setelah kata kerja tertentu seperti **helfen** (membantu), **danken** (berterima kasih), dan **gefallen** (berkenan/disukai).\n\n" +
    "Dalam **Dativ**, terjadi perubahan artikel untuk semua gender. Artikel maskulin (*der*) dan netral (*das*) sama-sama berubah menjadi **dem**. Artikel feminin (*die*) berubah menjadi **der**, sedangkan bentuk jamak berubah menjadi **den**.\n\n" +
    "Aturan khusus yang perlu diperhatikan: pada bentuk jamak dalam Dativ, hampir semua kata benda mendapat tambahan **-n** di akhir kata, kecuali yang sudah berakhiran *-n* atau *-s* (seperti *Autos*). Banyak preposisi umum seperti **mit**, **nach**, **von**, dan **zu** juga selalu menuntut Dativ.",
  notes:
    "Preposisi + artikel sering melebur: **beim** (bei + dem), **vom** (von + dem), **zum** (zu + dem), **zur** (zu + der). Bentuk gabungan ini sangat umum dalam percakapan.",
  tables: [
    {
      caption: "Perubahan Artikel dalam Kasus Dativ",
      headers: ["Artikel", "Maskulin (der) ⚡", "Netral (das) ⚡", "Feminin (die) ⚡", "Plural ⚡"],
      rows: [
        ["Bestimmt", "dem", "dem", "der", "den (+n)"],
        ["Unbestimmt", "einem", "einem", "einer", "—"],
        ["Negasi (kein)", "keinem", "keinem", "keiner", "keinen (+n)"],
      ],
    },
    {
      caption: "Kata kerja yang selalu memakai Dativ (Wem?)",
      headers: ["Kata kerja", "Arti", "Contoh kalimat"],
      rows: [
        ["helfen", "membantu", "Ich helfe dem Kind."],
        ["danken", "berterima kasih", "Er dankt der Lehrerin."],
        ["gefallen", "disukai / berkenan", "Das Lied gefällt dem Mädchen."],
        ["gehören", "milik / kepunyaan", "Das Buch gehört dem Lehrer."],
        ["geben", "memberi (kpd seseorang)", "Ich gebe dem Mann ein Buch."],
        ["zeigen", "menunjukkan", "Er zeigt dem Kind den Weg."],
        ["schenken", "menghadiahi", "Sie schenkt der Freundin Blumen."],
        ["schreiben", "menulis (kpd seseorang)", "Ich schreibe dem Freund eine E-Mail."],
        ["sagen", "mengatakan (kpd seseorang)", "Er sagt dem Chef die Wahrheit."],
        ["empfehlen", "merekomendasikan", "Der Arzt empfiehlt dem Patienten Ruhe."],
      ],
    },
    {
      caption: "Kontraksi preposisi + Dativ artikel",
      headers: ["Asli", "Kontraksi", "Contoh"],
      rows: [
        ["bei + dem", "beim", "Ich bin beim Arzt."],
        ["von + dem", "vom", "Das ist nicht weit vom Bahnhof."],
        ["zu + dem", "zum", "Ich fahre zum Supermarkt."],
        ["zu + der", "zur", "Sie geht zur Schule."],
        ["an + dem", "am", "Er arbeitet am Computer."],
        ["in + dem", "im", "Wir sind im Restaurant."],
      ],
    },
  ],
  examples: [
    { de: "Ich helfe dem Mann.", id: "Saya membantu laki-laki itu. (der Mann → dem Mann)" },
    { de: "Das Lied gefällt der Frau sehr gut.", id: "Lagu itu sangat disukai wanita tersebut. (die Frau → der Frau)" },
    { de: "Ich fahre mit dem Bus zum Bahnhof.", id: "Saya naik bus ke stasiun. (mit + Dativ, zu + Dativ)" },
    { de: "Ich danke den Kindern für die Hilfe.", id: "Saya berterima kasih kepada anak-anak atas bantuannya." },
    { de: "Kannst du dem Mädchen helfen?", id: "Bisakah kamu membantu anak perempuan itu?" },
    { de: "Er schenkt der Mutter Blumen.", id: "Dia menghadiahi ibunya bunga." },
    { de: "Wir gehen jetzt zum Supermarkt.", id: "Kami sekarang pergi ke supermarket. (zu + dem = zum)" },
  ],
  exercises: [
    {
      question: "Wie geht es ___ Vater? (der Vater — maskulin)",
      options: ["dem", "den", "der"],
      answer: "dem",
    },
    {
      question: "Ich gratuliere ___ Freundin zum Geburtstag. (die Freundin — feminin)",
      options: ["dem", "der", "den"],
      answer: "der",
    },
    {
      question: "Ich spreche mit ___ Leuten. (die Leute — plural)",
      options: ["der", "dem", "den"],
      answer: "den",
    },
    {
      question: "Das Buch gehört ___ Kind. (das Kind — netral)",
      options: ["der", "den", "dem"],
      answer: "dem",
    },
    {
      question: "'zu + dem' menjadi kontraksi…",
      options: ["zur", "zum", "beim"],
      answer: "zum",
    },
  ],
};
