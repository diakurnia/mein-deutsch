import type { GrammarTopic } from "@/content/types";

export const nebensatz: GrammarTopic = {
  id: "nebensatz",
  title: "Nebensatz: weil, dass, und wenn",
  level: "A1",
  order: 26,
  icon: "📎",
  explanation:
    "**Nebensatz** (anak kalimat / kalimat bawahan) adalah kalimat yang bergantung pada kalimat utama (*Hauptsatz*). Aturan paling penting Nebensatz: **kata kerja pindah ke akhir kalimat** (*Verbendstellung*).\n\n" +
    "Tiga konjunktor Nebensatz yang paling penting di level A1:\n\n" +
    "**weil** (karena) — menyatakan alasan:\n" +
    "*Ich lerne Deutsch, weil ich in Deutschland studieren **will**.* (Saya belajar bahasa Jerman karena saya ingin kuliah di Jerman.)\n\n" +
    "**dass** (bahwa) — menyatakan isi pikiran, perasaan, atau informasi:\n" +
    "*Ich glaube, dass er krank **ist**.* (Saya pikir bahwa dia sakit.)\n" +
    "*Ich freue mich, dass du kommst.* (Saya senang bahwa kamu datang.)\n\n" +
    "**wenn** (jika / ketika) — menyatakan syarat atau waktu yang berulang:\n" +
    "*Wenn ich Zeit **habe**, lese ich gern.* (Jika saya punya waktu, saya suka membaca.)\n" +
    "*Ruf mich an, wenn du ankommst!* (Telepon aku ketika kamu tiba!)\n\n" +
    "**Posisi Nebensatz dalam kalimat:**\n\n" +
    "Nebensatz bisa diletakkan di depan atau di belakang Hauptsatz. Jika Nebensatz di depan, seluruh Nebensatz dianggap satu unsur di posisi 1, sehingga Hauptsatz mulai langsung dengan kata kerja:\n\n" +
    "*Weil ich müde bin, **gehe** ich schlafen.* (kata kerja Hauptsatz langsung setelah koma)",
  notes:
    "Ingat: **weil vs. denn** — keduanya berarti 'karena' tetapi berbeda urutan kata. *weil* → kata kerja ke akhir (Nebensatz). *denn* → kata kerja tetap di posisi 2 (koordinat). Di ujian Goethe A1, soal *weil* sangat sering muncul di bagian menulis — kamu diminta menjelaskan alasan. Modalverben dan Perfekt di Nebensatz: kata kerja bantu selalu di posisi paling akhir: *..., weil ich arbeiten **muss**.*",
  tables: [
    {
      caption: "Perbandingan urutan kata: Hauptsatz vs. Nebensatz",
      headers: ["Jenis kalimat", "Contoh", "Posisi kata kerja"],
      rows: [
        ["Hauptsatz (kalimat utama)", "Ich gehe heute schlafen.", "Posisi 2 (normal)"],
        ["Nebensatz dengan weil", "..., weil ich müde bin.", "AKHIR kalimat ⚠️"],
        ["Nebensatz dengan dass", "..., dass er morgen kommt.", "AKHIR kalimat ⚠️"],
        ["Nebensatz dengan wenn", "..., wenn ich Zeit habe.", "AKHIR kalimat ⚠️"],
      ],
    },
    {
      caption: "Nebensatz di depan (Inversion di Hauptsatz)",
      headers: ["Nebensatz di depan", "Hasil", "Catatan"],
      rows: [
        ["Weil ich müde bin,", "gehe ich schlafen.", "Verb Hauptsatz langsung setelah koma"],
        ["Wenn du Zeit hast,", "können wir uns treffen.", "Verb Hauptsatz langsung setelah koma"],
        ["Dass er krank ist,", "weiß ich.", "Jarang, tapi mungkin"],
      ],
    },
    {
      caption: "Kata kerja kompleks di Nebensatz",
      headers: ["Tipe kata kerja", "Posisi di Nebensatz", "Contoh"],
      rows: [
        ["Modal + Infinitiv", "Modal di akhir", "..., weil ich arbeiten muss."],
        ["Perfekt (haben/sein + Partizip II)", "haben/sein di akhir", "..., weil er gegangen ist."],
        ["Trennbare Verben", "Tetap sebagai satu kata", "..., weil er anruft."],
      ],
    },
  ],
  examples: [
    { de: "Ich lerne Deutsch, weil es interessant ist.", id: "Saya belajar bahasa Jerman karena itu menarik." },
    { de: "Ich denke, dass das eine gute Idee ist.", id: "Saya pikir bahwa itu ide yang bagus." },
    { de: "Wenn das Wetter schön ist, gehen wir spazieren.", id: "Jika cuacanya bagus, kita jalan-jalan." },
    { de: "Er kommt nicht, weil er krank ist.", id: "Dia tidak datang karena dia sakit." },
    { de: "Ich bin froh, dass du da bist.", id: "Saya senang bahwa kamu ada di sini." },
    { de: "Weil ich müde bin, gehe ich früh schlafen.", id: "Karena saya lelah, saya tidur lebih awal. (Nebensatz di depan → inversion)" },
    { de: "Ich esse nicht, weil ich keinen Hunger habe.", id: "Saya tidak makan karena tidak lapar." },
    { de: "Ruf mich an, wenn du ankommst!", id: "Telepon aku ketika kamu tiba!" },
    { de: "Ich weiß, dass er Deutsch spricht.", id: "Saya tahu bahwa dia berbicara bahasa Jerman." },
    { de: "Wenn ich Zeit habe, lese ich gern.", id: "Jika saya punya waktu, saya suka membaca." },
  ],
  exercises: [
    {
      question: "Posisi kata kerja di Nebensatz adalah…",
      options: ["posisi 1", "posisi 2 (normal)", "akhir kalimat"],
      answer: "akhir kalimat",
    },
    {
      question: "'Ich schlafe früh, ___ ich morgen früh aufstehen muss.' (karena — Nebensatz)",
      options: ["denn", "weil", "aber"],
      answer: "weil",
    },
    {
      question: "'Ich glaube, ___ er heute nicht kommt.' (bahwa)",
      options: ["wenn", "weil", "dass"],
      answer: "dass",
    },
    {
      question: "Kalimat mana yang benar?",
      options: [
        "Ich bleibe zu Hause, weil ich bin müde.",
        "Ich bleibe zu Hause, weil ich müde bin.",
        "Ich bleibe zu Hause, weil bin ich müde.",
      ],
      answer: "Ich bleibe zu Hause, weil ich müde bin.",
    },
    {
      question: "'___ ich krank bin, bleibe ich zu Hause.' — setelah koma, kalimat utama dimulai dengan…",
      options: ["ich bleibe", "bleibe ich", "ich bin geblieben"],
      answer: "bleibe ich",
    },
    {
      question: "Dengan Modalverb di Nebensatz: '…, weil ich früh aufstehen ___.' (müssen)",
      options: ["muss", "müssen", "müsste"],
      answer: "muss",
    },
  ],
};
