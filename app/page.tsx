import Link from "next/link";

const PILLARS = [
  {
    icon: "📐",
    title: "Grammar Terstruktur",
    desc: "21 topik A1 dengan penjelasan, tabel, dan catatan penting — dari Personalpronomen hingga Perfekt.",
    available: true,
  },
  {
    icon: "📚",
    title: "Vocabulary & Artikel",
    desc: "Kosakata lengkap dengan artikel (der/die/das), bentuk jamak, dan contoh penggunaan.",
    available: false,
  },
  {
    icon: "🎧",
    title: "Listening & Pengucapan",
    desc: "Latihan mendengar dan cara pengucapan kata serta kalimat Jerman yang benar.",
    available: false,
  },
  {
    icon: "✅",
    title: "Kuis & Review",
    desc: "Sistem kuis dan pengulangan berkala untuk memastikan materi benar-benar terserap.",
    available: false,
  },
];

const SAMPLES = [
  { de: "Ich komme aus Indonesien.", id: "Saya berasal dari Indonesia." },
  { de: "Kannst du mir bitte helfen?", id: "Bisakah kamu membantuku?" },
  { de: "Wir haben heute keine Zeit.", id: "Kami tidak punya waktu hari ini." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-bg via-white to-teal-bg px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-6xl">🦉</div>
          <h1 className="mb-3 text-4xl font-extrabold text-teal-deep">
            Mein-Deutsch
          </h1>
          <p className="mb-2 text-lg font-semibold text-slate-700">
            Belajar bahasa Jerman A1 dengan cara yang menyenangkan
          </p>
          <p className="mb-8 text-slate-500">
            Penjelasan terstruktur, tabel konjugasi, contoh kalimat dengan
            pengucapan audio, mini-latihan, dan tracking kemajuan — semuanya
            dalam satu tempat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-teal-brand px-8 py-3 font-bold text-teal-deep shadow-md transition hover:brightness-105"
            >
              Mulai Belajar →
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-teal-soft px-8 py-3 font-bold text-teal-deep transition hover:bg-teal-bg"
            >
              Masuk
            </Link>
          </div>
        </div>
      </section>

      {/* FITUR / PILAR */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-slate-900">
            Apa yang akan kamu pelajari?
          </h2>
          <p className="mb-8 text-center text-sm text-slate-400">
            4 pilar pembelajaran — Grammar sudah tersedia, sisanya segera hadir
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border p-5 transition ${
                  p.available
                    ? "border-teal-soft bg-white shadow-sm hover:shadow-md"
                    : "border-slate-100 bg-slate-50 opacity-70"
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                    {!p.available && (
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

      {/* PREVIEW CONTOH KALIMAT */}
      <section className="bg-teal-bg px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-slate-900">
            Contoh kalimat yang akan kamu pelajari
          </h2>
          <p className="mb-6 text-center text-sm text-slate-400">
            Setiap kalimat dilengkapi terjemahan dan tombol pengucapan 🔊
          </p>
          <div className="flex flex-col gap-3">
            {SAMPLES.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-teal-soft bg-white p-4 shadow-sm"
              >
                <div>
                  <p className="font-bold text-slate-900">{s.de}</p>
                  <p className="text-sm text-slate-400">{s.id}</p>
                </div>
                <span
                  title="Tersedia saat belajar"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-soft text-base"
                >
                  🔊
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-center">
          {[
            { num: "21", label: "Topik Grammar A1" },
            { num: "4", label: "Pilar Pembelajaran" },
            { num: "100%", label: "Gratis" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-teal-soft bg-white p-4">
              <div className="text-2xl font-extrabold text-teal-deep">{s.num}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAWAH */}
      <section className="px-6 py-12 text-center">
        <div className="mx-auto max-w-md">
          <p className="mb-2 text-xl font-extrabold text-slate-900">
            Siap mulai belajar? 🇩🇪
          </p>
          <p className="mb-6 text-sm text-slate-500">
            Buat akun gratis dan mulai dari topik pertama hari ini.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-xl bg-teal-brand px-8 py-3 font-bold text-teal-deep shadow-md transition hover:brightness-105"
          >
            Daftar Sekarang — Gratis →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-teal-soft px-6 py-4 text-center text-xs text-slate-400">
        Mein-Deutsch · Belajar bahasa Jerman A1
      </footer>
    </div>
  );
}
