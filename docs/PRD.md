# PRD — Mein-Deutsch

**Product Requirements Document**
**Versi:** 1.0 (MVP — Pilar Grammar)
**Tanggal:** 2026-06-05
**Status:** Draft untuk dibangun
**Dokumen terkait:** [Desain teknis](superpowers/specs/2026-06-05-mein-deutsch-design.md)

---

## 1. Ringkasan Produk

**Mein-Deutsch** adalah website belajar bahasa Jerman level A1 yang membantu pembelajar memahami **struktur bahasa (grammar)** secara mendalam dan terstruktur, dilengkapi pengucapan audio, mini-latihan, dan pelacakan kemajuan belajar.

MVP berfokus pada **Pilar Grammar**. Materi disusun dari ekstraksi ebook referensi menjadi data terstruktur yang konsisten.

---

## 2. Latar Belakang & Masalah

Pembelajar bahasa Jerman pemula (A1) menghadapi kesulitan umum:
- Grammar Jerman rumit (artikel der/die/das, deklinasi, kasus) dan sering tersebar di banyak sumber.
- Sulit menilai sendiri apakah sebuah konsep sudah benar-benar dipahami.
- Tidak ada catatan kemajuan — mudah lupa sudah belajar apa.
- Belajar pengucapan sering terpisah dari belajar teori.

**Mein-Deutsch** menyatukan penjelasan, contoh, pengucapan, latihan, dan pelacakan dalam satu alur belajar yang ringkas.

---

## 3. Tujuan & Non-Tujuan

### Tujuan (MVP)
- Menyediakan materi grammar A1 yang terstruktur dan mudah dipahami.
- Setiap topik mencakup penjelasan, tabel, contoh kalimat, catatan penting, dan mini-latihan.
- Menyediakan pengucapan audio untuk contoh kalimat.
- Melacak kemajuan belajar tiap pengguna.
- Mendukung beberapa pengguna (pemilik + teman/komunitas kecil).

### Non-Tujuan (di luar MVP)
- Sistem kuis penuh dengan skor & riwayat.
- Halaman statistik mendalam dan fitur streak.
- Pilar lain: vocabulary, listening mendalam, review/spaced-repetition.
- Audio kualitas suara native (Forvo / Cloud TTS).
- Monetisasi, level B1+, aplikasi mobile native.

---

## 4. Target Pengguna

| Persona | Deskripsi | Kebutuhan utama |
|---------|-----------|-----------------|
| **Pemilik (pembelajar A1)** | Sedang belajar Jerman dari nol, ingin memahami grammar secara mendalam | Materi terstruktur, bisa tandai progress, dengar pengucapan |
| **Teman/komunitas kecil** | Beberapa orang yang juga belajar A1 | Akun sendiri, progress terpisah |

Skala: kecil (multi-user kecil), non-komersial.

---

## 5. User Stories

**Autentikasi**
- Sebagai pengguna, aku bisa mendaftar & login agar progress-ku tersimpan dan terpisah dari pengguna lain.

**Belajar grammar**
- Sebagai pengguna, aku bisa melihat daftar topik grammar A1 beserta status belajarku.
- Sebagai pengguna, aku bisa membuka satu topik dan membaca penjelasan, tabel, contoh kalimat, dan catatan penting.
- Sebagai pengguna, aku bisa menekan tombol 🔊 pada contoh kalimat untuk mendengar pengucapannya.

**Latihan & progress**
- Sebagai pengguna, aku bisa mengerjakan mini-latihan di akhir topik dan langsung tahu jawabanku benar atau salah.
- Sebagai pengguna, aku bisa menandai sebuah topik sebagai "Selesai".
- Sebagai pengguna, aku bisa melihat ringkasan kemajuanku (berapa topik selesai dari total) di dashboard.

---

## 6. Requirement Fungsional

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| F1 | Pengguna dapat mendaftar & login (email + password) | Must |
| F2 | Progress tersimpan per pengguna | Must |
| F3 | Dashboard menampilkan daftar topik + status (belum/dipelajari/selesai) | Must |
| F4 | Dashboard menampilkan ringkasan progress (X/Y + progress bar) | Must |
| F5 | Halaman detail topik menampilkan: penjelasan, tabel, contoh kalimat, catatan, mini-latihan | Must |
| F6 | Tombol pengucapan audio (Web Speech API) pada contoh kalimat | Must |
| F7 | Mini-latihan memberi umpan balik benar/salah secara langsung | Must |
| F8 | Tombol "Tandai Selesai" memperbarui progress | Must |
| F9 | Materi grammar dikelola sebagai data terstruktur, mudah ditambah | Must |
| F10 | Fallback rapi jika browser tidak mendukung Web Speech API | Should |

---

## 7. Requirement Non-Fungsional

- **Kemudahan:** alur belajar jelas, minim klik, responsif untuk desktop & mobile.
- **Biaya:** gunakan tier gratis (Supabase, Vercel) selama mungkin.
- **Pemeliharaan:** materi terpisah dari kode; menambah topik tidak butuh ubah kode.
- **Keamanan:** kredensial pengguna ditangani oleh Supabase Auth; tidak ada token/secret di kode.
- **Hak cipta:** ebook dipakai sebagai sumber penyusunan materi, bukan distribusi utuh.

---

## 8. Lingkup Rilis

**Target awal mini:** 1 topik grammar A1 lengkap & berfungsi (mis. "Artikel & Nominativ") yang bisa dibaca, didengar, dilatih, dan ditandai selesai dengan progress tersimpan. Setelah itu, tambah topik secara bertahap.

---

## 9. Metrik Sukses

- Pengguna dapat menyelesaikan alur penuh satu topik tanpa kebingungan.
- Progress tercatat akurat dan bertahan antar sesi/perangkat.
- Menambah topik baru hanya butuh menambah data (tanpa ubah kode).
- Pemilik secara rutin memakainya untuk belajar (indikator kualitatif: terasa berguna).

---

## 10. Risiko & Asumsi

| Risiko / Asumsi | Mitigasi |
|-----------------|----------|
| Kualitas TTS Web Speech API terasa robotik | Cukup untuk A1; upgrade ke Forvo/Cloud TTS nanti tanpa bongkar data |
| Ekstraksi ebook makan waktu | Mulai dari 1 topik; proses bertahap per bab |
| Scope creep ke pilar lain | Kunci MVP pada grammar; fitur lain ditunda eksplisit |
| Hak cipta ebook | Susun materi sendiri, jangan salin-tempel utuh |

---

## 11. Roadmap (pasca-MVP)

1. **Pilar 2** — Vocabulary + artikel (der/die/das).
2. **Pilar 3** — Listening / pengucapan mendalam (audio native).
3. **Pilar 4** — Sistem kuis penuh + halaman statistik + streak + review terjadwal.
