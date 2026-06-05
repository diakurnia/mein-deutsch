"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handle() {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const supabase = createClient();
      if (mode === "in") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) { setError(error.message); return; }
        router.push("/grammar");
        router.refresh();
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) { setError(error.message); return; }
        if (data.session) {
          // email confirmation dimatikan — langsung masuk
          router.push("/grammar");
          router.refresh();
        } else {
          // email confirmation aktif — minta cek email
          setSuccess("Akun berhasil dibuat! Cek email kamu untuk konfirmasi, lalu login.");
          setMode("in");
        }
      }
    } catch (e) {
      setError("Terjadi kesalahan, coba lagi.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6">
      <div className="text-center text-4xl">🦉</div>
      <h1 className="text-2xl font-extrabold text-teal-deep">
        {mode === "in" ? "Masuk" : "Daftar Akun Baru"}
      </h1>

      <input
        className="rounded-lg border border-teal-accent px-3 py-2 outline-none focus:ring-2 focus:ring-teal-brand"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handle()}
      />
      <input
        className="rounded-lg border border-teal-accent px-3 py-2 outline-none focus:ring-2 focus:ring-teal-brand"
        type="password"
        placeholder="Password (min. 6 karakter)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handle()}
      />

      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
      {success && <p className="rounded-lg bg-teal-soft px-3 py-2 text-sm text-teal-deep">{success}</p>}

      <button
        onClick={handle}
        disabled={loading}
        className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Memproses…" : mode === "in" ? "Masuk" : "Daftar"}
      </button>

      <button
        type="button"
        onClick={() => { setMode(mode === "in" ? "up" : "in"); setError(null); setSuccess(null); }}
        className="text-sm font-semibold text-teal-deep hover:underline"
      >
        {mode === "in" ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
      </button>
    </main>
  );
}
