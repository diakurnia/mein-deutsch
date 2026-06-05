import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="text-6xl">🦉</div>
      <h1 className="text-3xl font-extrabold text-teal-deep">Mein-Deutsch</h1>
      <p className="text-slate-600">
        Belajar grammar bahasa Jerman A1 dengan penjelasan terstruktur,
        pengucapan, dan mini-latihan.
      </p>
      <Link
        href="/grammar"
        className="rounded-xl bg-teal-brand px-6 py-3 font-bold text-teal-deep shadow-md transition hover:brightness-105"
      >
        Mulai Belajar →
      </Link>
    </main>
  );
}
