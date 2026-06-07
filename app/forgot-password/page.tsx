"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handle() {
    if (!email.includes("@")) {
      setError("Masukkan alamat email yang valid.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        setError(error.message);
        return;
      }
      setSent(true);
    } catch {
      setError("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6 py-10">
      <div className="mb-2 text-center">
        <div className="text-5xl">🦉</div>
        <p className="mt-2 text-sm font-semibold text-slate-400">Mein-Deutsch</p>
      </div>

      {sent ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-4xl">📬</div>
          <h1 className="text-xl font-extrabold text-teal-deep">Email terkirim!</h1>
          <p className="text-sm text-slate-500">
            Kami sudah kirim link reset password ke <b>{email}</b>. Cek kotak masukmu dan klik linknya.
          </p>
          <p className="text-xs text-slate-400">
            Tidak dapat email? Cek folder spam, atau{" "}
            <button
              type="button"
              onClick={() => setSent(false)}
              className="font-semibold text-teal-deep hover:underline"
            >
              coba lagi
            </button>
            .
          </p>
          <Link href="/login" className="mt-2 text-sm font-semibold text-teal-deep hover:underline">
            ← Kembali ke halaman masuk
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-extrabold text-teal-deep">Lupa Password?</h1>
          <p className="text-sm text-slate-500">
            Masukkan emailmu dan kami akan kirimkan link untuk membuat password baru.
          </p>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500">Email</label>
            <input
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-teal-brand focus:ring-2 focus:ring-teal-brand/20"
              type="email"
              placeholder="kamu@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handle()}
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handle}
            disabled={loading}
            className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Mengirim…" : "Kirim Link Reset"}
          </button>

          <Link
            href="/login"
            className="text-center text-sm font-semibold text-teal-deep hover:underline"
          >
            ← Kembali ke halaman masuk
          </Link>
        </>
      )}
    </main>
  );
}
