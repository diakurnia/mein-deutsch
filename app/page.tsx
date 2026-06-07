import Link from "next/link";

const PILLARS = [
  {
    icon: "🧱",
    title: "Grundlagen",
    desc: "Fondasi wajib sebelum mulai: alfabet, pengucapan, angka, waktu, warna, dan salam. Kartu item + audio per kata.",
    available: true,
  },
  {
    icon: "📐",
    title: "Grammatik",
    desc: "Penjelasan mendalam, tabel konjugasi, contoh kalimat dengan audio, dan mini-latihan — topik demi topik.",
    available: true,
  },
  {
    icon: "📚",
    title: "Wortschatz",
    desc: "Kosakata tematik dengan artikel (der/die/das), bentuk jamak, dan contoh penggunaan dalam kalimat.",
    available: false,
  },
  {
    icon: "🎧",
    title: "Hören",
    desc: "Latihan mendengar percakapan nyata dan melatih telinga terhadap pengucapan bahasa Jerman.",
    available: false,
  },
  {
    icon: "✅",
    title: "Übungen & Quiz",
    desc: "Kuis lintas topik dan sistem pengulangan berkala untuk memastikan materi benar-benar melekat.",
    available: false,
  },
];

const SAMPLES = [
  { de: "Ich komme aus Indonesien.", id: "Saya berasal dari Indonesia." },
  { de: "Kannst du mir bitte helfen?", id: "Bisakah kamu membantuku?" },
  { de: "Wir haben heute keine Zeit.", id: "Kami tidak punya waktu hari ini." },
];

const STEPS = [
  { num: "1", title: "Buat akun gratis", desc: "Daftar dalam 30 detik — hanya butuh email dan password." },
  { num: "2", title: "Pilih topik", desc: "Mulai dari fondasi atau langsung ke grammar — sesuai kebutuhanmu." },
  { num: "3", title: "Belajar & pantau kemajuan", desc: "Baca, dengar, kerjakan latihan, dan tandai topik yang sudah selesai." },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-bg via-white to-teal-bg px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-6xl">🦉</div>
          <h1 className="mb-3 text-4xl font-extrabold text-teal-deep">
            Kuasai Bahasa Jerman,<br className="hidden sm:block" /> Langkah demi Langkah
          </h1>
          <p className="mb-2 text-lg font-semibold text-slate-700">
            Penjelasan yang benar-benar jelas, bukan sekadar hafalan.
          </p>
          <p className="mb-8 text-slate-500">
            Setiap topik dilengkapi penjelasan mendalam, audio pengucapan,
            mini-latihan, dan tracking kemajuan — semua gratis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/login"
              className="rounded-xl bg-teal-brand px-8 py-3 font-bold text-teal-deep shadow-md transition hover:brightness-105"
            >
              Mulai Belajar — Gratis →
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-teal-soft px-8 py-3 font-bold text-teal-deep transition hover:bg-teal-bg"
            >
              Sudah punya akun? Masuk
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-teal-soft px-6 py-8">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-center">
          {[
            { num: "36+", label: "Topik Tersedia" },
            { num: "2", label: "Pilar Aktif" },
            { num: "100%", label: "Gratis" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-teal-soft bg-white p-4">
              <div className="text-2xl font-extrabold text-teal-deep">{s.num}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-slate-900">
            Cara kerjanya sederhana
          </h2>
          <p className="mb-8 text-center text-sm text-slate-400">
            Mulai belajar dalam hitungan detik
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-teal-soft bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal-brand text-sm font-extrabold text-teal-deep">
                  {s.num}
                </div>
                <h3 className="mb-1 font-bold text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILAR */}
      <section className="bg-teal-bg px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-slate-900">
            Semua yang kamu butuhkan dalam satu tempat
          </h2>
          <p className="mb-8 text-center text-sm text-slate-400">
            2 pilar sudah tersedia · 3 pilar segera hadir
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border p-5 transition ${
                  p.available
                    ? "border-teal-soft bg-white shadow-sm hover:shadow-md"
                    : "border-slate-100 bg-white opacity-60"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                    {p.available ? (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-teal-deep">
                        ✓ Tersedia
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        Segera hadir
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW KALIMAT */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-slate-900">
            Lihat seperti apa materinya
          </h2>
          <p className="mb-6 text-center text-sm text-slate-400">
            Setiap kalimat dilengkapi terjemahan dan audio pengucapan 🔊
          </p>
          <div className="flex flex-col gap-3">
            {SAMPLES.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-teal-soft bg-white p-4 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-soft text-sm font-extrabold text-teal-deep">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-900">{s.de}</p>
                  <p className="text-sm text-slate-400">{s.id}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Audio pengucapan tersedia setelah kamu masuk dan mulai belajar.
          </p>
        </div>
      </section>

      {/* CTA BAWAH */}
      <section className="bg-gradient-to-br from-teal-bg to-teal-soft px-6 py-14 text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-3 text-4xl">🇩🇪</div>
          <h2 className="mb-2 text-2xl font-extrabold text-slate-900">
            Siap mulai perjalananmu?
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            Daftar gratis dalam 30 detik. Tidak perlu kartu kredit.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-xl bg-teal-deep px-8 py-3 font-bold text-white shadow-md transition hover:brightness-110"
          >
            Buat Akun Gratis →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-teal-soft px-6 py-5 text-center text-xs text-slate-400">
        <p className="mb-1 font-semibold text-slate-500">Mein-Deutsch</p>
        <p>
          <Link href="/privacy" className="hover:underline">Kebijakan Privasi</Link>
          {" · "}
          <Link href="/login" className="hover:underline">Masuk</Link>
          {" · "}
          <Link href="/login" className="hover:underline">Daftar</Link>
        </p>
      </footer>

    </div>
  );
}
