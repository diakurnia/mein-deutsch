import type { GrammarTopic } from "@/content/types";

export const praepositionen: GrammarTopic = {
  id: "praepositionen",
  title: "Präpositionen: Lokal, Temporal, und mit Kasus",
  level: "A1",
  order: 24,
  icon: "📍",
  explanation:
    "**Präpositionen** (preposisi/kata depan) menghubungkan kata benda atau kata ganti dengan bagian kalimat lain dan menunjukkan hubungan tempat, waktu, atau lainnya. Di bahasa Jerman, setiap preposisi **menentukan kasus** kata benda setelahnya — ini wajib dihafal.\n\n" +
    "**Preposisi selalu Dativ:**\n\n" +
    "*mit* (dengan), *von* (dari/milik), *zu* (ke/menuju), *aus* (dari/keluar dari), *bei* (di tempat/di dekat), *nach* (setelah/ke — untuk kota/negara), *seit* (sejak), *gegenüber* (berseberangan)\n\n" +
    "**Preposisi selalu Akkusativ:**\n\n" +
    "*durch* (melalui/melewati), *für* (untuk), *gegen* (melawan/menabrak), *ohne* (tanpa), *um* (mengelilingi/pukul — untuk jam)\n\n" +
    "**Wechselpräpositionen** (dua kasus tergantung pertanyaan): *in, an, auf, über, unter, neben, vor, hinter, zwischen*\n\n" +
    "- **Dativ** untuk menjawab *Wo?* (di mana — posisi/keadaan diam)\n" +
    "- **Akkusativ** untuk menjawab *Wohin?* (ke mana — arah/gerakan)\n\n" +
    "*Ich bin in der Küche.* (Dativ — posisi) vs. *Ich gehe in die Küche.* (Akkusativ — gerakan)\n\n" +
    "**Preposisi temporal** — untuk waktu:\n\n" +
    "*um* (pukul — jam), *am* (pada hari/tanggal), *im* (pada bulan/musim/tahun 2000+), *in* (dalam waktu ... lagi), *vor* (... yang lalu), *nach* (setelah), *seit* (sejak), *von ... bis* (dari ... sampai)",
  notes:
    "Preposisi yang paling sering muncul di ujian Goethe A1: **mit, zu, in, an, auf, für, von, aus, nach**. Hafal kontraksi wajib: *an + dem = am*, *an + das = ans*, *in + dem = im*, *in + das = ins*, *zu + dem = zum*, *zu + der = zur*.",
  tables: [
    {
      caption: "Preposisi + Dativ (selalu)",
      headers: ["Preposisi", "Arti utama", "Contoh"],
      rows: [
        ["mit + Dat.", "dengan", "Ich fahre mit dem Bus."],
        ["von + Dat.", "dari / milik", "Das ist ein Buch von meiner Mutter."],
        ["zu + Dat.", "ke / menuju", "Ich gehe zum Arzt. (zu + dem)"],
        ["aus + Dat.", "dari (asal) / keluar dari", "Er kommt aus der Türkei."],
        ["bei + Dat.", "di tempat / di dekat", "Ich wohne bei meinen Eltern."],
        ["nach + Dat.", "setelah / ke (kota/negara tanpa artikel)", "Nach dem Essen gehe ich nach Hause."],
        ["seit + Dat.", "sejak (masih berlangsung)", "Ich lerne seit drei Jahren Deutsch."],
      ],
    },
    {
      caption: "Preposisi + Akkusativ (selalu)",
      headers: ["Preposisi", "Arti utama", "Contoh"],
      rows: [
        ["durch + Akk.", "melalui / melewati", "Wir fahren durch den Tunnel."],
        ["für + Akk.", "untuk", "Das Geschenk ist für dich."],
        ["gegen + Akk.", "melawan / menabrak", "Das Auto fährt gegen den Baum."],
        ["ohne + Akk.", "tanpa", "Ich trinke Kaffee ohne Zucker."],
        ["um + Akk.", "mengelilingi / pukul (jam)", "Der Zug fährt um 9 Uhr ab."],
      ],
    },
    {
      caption: "Wechselpräpositionen — Wo? (Dativ) vs. Wohin? (Akkusativ)",
      headers: ["Preposisi", "Wo? + Dativ", "Wohin? + Akkusativ"],
      rows: [
        ["in", "Ich bin in der Küche.", "Ich gehe in die Küche."],
        ["an", "Das Bild hängt an der Wand.", "Ich hänge das Bild an die Wand."],
        ["auf", "Das Buch liegt auf dem Tisch.", "Ich lege das Buch auf den Tisch."],
        ["über", "Die Lampe hängt über dem Tisch.", "Ich hänge die Lampe über den Tisch."],
        ["unter", "Die Katze sitzt unter dem Stuhl.", "Die Katze läuft unter den Stuhl."],
        ["neben", "Er steht neben dem Auto.", "Er stellt sich neben das Auto."],
        ["vor", "Das Auto steht vor dem Haus.", "Er fährt das Auto vor das Haus."],
        ["hinter", "Der Garten ist hinter dem Haus.", "Sie geht hinter das Haus."],
        ["zwischen", "Das Café ist zwischen der Bank und der Post.", "Stell den Stuhl zwischen den Tisch und die Wand."],
      ],
    },
    {
      caption: "Preposisi temporal (waktu)",
      headers: ["Preposisi", "Dipakai untuk", "Contoh"],
      rows: [
        ["um", "jam tepat", "Der Kurs beginnt um 9 Uhr."],
        ["am", "hari & tanggal", "Am Montag / Am 3. März"],
        ["im", "bulan, musim, tahun 2000+", "Im Januar / im Sommer / im Jahr 2026"],
        ["in", "dalam waktu ... lagi", "In drei Tagen fliege ich nach Berlin."],
        ["vor", "... yang lalu", "Vor zwei Jahren war ich in Deutschland."],
        ["nach", "setelah", "Nach der Arbeit gehe ich einkaufen."],
        ["seit", "sejak (masih berlangsung)", "Seit 2020 wohne ich hier."],
        ["von ... bis", "dari ... sampai", "Von Montag bis Freitag arbeite ich."],
      ],
    },
  ],
  examples: [
    { de: "Ich fahre mit dem Zug nach München.", id: "Saya naik kereta ke München." },
    { de: "Das Geschenk ist für meinen Vater.", id: "Hadiah itu untuk ayahku." },
    { de: "Das Buch liegt auf dem Tisch.", id: "Buku itu ada di atas meja. (Wo? → Dativ)" },
    { de: "Ich lege das Buch auf den Tisch.", id: "Saya meletakkan buku di atas meja. (Wohin? → Akkusativ)" },
    { de: "Seit drei Jahren lerne ich Deutsch.", id: "Sudah tiga tahun saya belajar bahasa Jerman." },
    { de: "Der Unterricht beginnt um halb neun.", id: "Pelajaran dimulai pukul setengah sembilan." },
  ],
  exercises: [
    {
      question: "'Ich fahre ___ Bus.' (dengan bus — Dativ)",
      options: ["durch den", "mit dem", "ohne den"],
      answer: "mit dem",
    },
    {
      question: "Preposisi yang selalu memakai Akkusativ adalah…",
      options: ["mit", "für", "von"],
      answer: "für",
    },
    {
      question: "'Das Buch liegt ___ Tisch.' (Wo? — di atas meja)",
      options: ["auf den", "auf dem", "über den"],
      answer: "auf dem",
    },
    {
      question: "Untuk menyebut hari digunakan preposisi…",
      options: ["im", "um", "am"],
      answer: "am",
    },
    {
      question: "'Ich gehe in ___ Küche.' (Wohin? — ke dalam dapur)",
      options: ["die", "der", "dem"],
      answer: "die",
    },
  ],
};
