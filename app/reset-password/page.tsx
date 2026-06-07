"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function passwordStrength(pw: string): { score: number; label: string; color: string } {
  if (pw.length === 0) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { score: 1, label: "Lemah", color: "bg-red-400" };
  if (score <= 2) return { score: 2, label: "Cukup", color: "bg-yellow-400" };
  if (score <= 3) return { score: 3, label: "Baik", color: "bg-teal-400" };
  return { score: 4, label: "Kuat", color: "bg-teal-deep" };
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);

  const strength = passwordStrength(password);
  const passwordMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  // Supabase mengirim token lewat URL hash — perlu dengarkan event onAuthStateChange
  useEffect(() => {
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setSessionReady(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handle() {
    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setError(error.message);
        return;
      }
      setDone(true);
      setTimeout(() => router.push("/dashboard"), 2500);
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

      {done ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-4xl">✅</div>
          <h1 className="text-xl font-extrabold text-teal-deep">Password berhasil diubah!</h1>
          <p className="text-sm text-slate-500">
            Mengalihkan ke dashboard dalam beberapa detik…
          </p>
        </div>
      ) : !sessionReady ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-4xl">⏳</div>
          <h1 className="text-xl font-extrabold text-slate-700">Memverifikasi link…</h1>
          <p className="text-sm text-slate-400">
            Jika halaman ini tidak berubah, linkmu mungkin sudah kedaluwarsa.
          </p>
          <Link href="/forgot-password" className="text-sm font-semibold text-teal-deep hover:underline">
            Minta link baru →
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-extrabold text-teal-deep">Buat Password Baru</h1>
          <p className="text-sm text-slate-500">
            Masukkan password baru untuk akunmu.
          </p>

          {/* Password baru */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500">
              Password Baru <span className="text-slate-400">(min. 8 karakter)</span>
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-teal-brand focus:ring-2 focus:ring-teal-brand/20"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                tabIndex={-1}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {password.length > 0 && (
              <div className="mt-1 flex items-center gap-2">
                <div className="flex flex-1 gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        i <= strength.score ? strength.color : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-[11px] font-semibold ${
                  strength.score <= 1 ? "text-red-500" :
                  strength.score === 2 ? "text-yellow-600" : "text-teal-deep"
                }`}>
                  {strength.label}
                </span>
              </div>
            )}
          </div>

          {/* Konfirmasi password */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500">Konfirmasi Password Baru</label>
            <input
              className={`rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 ${
                passwordMismatch
                  ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                  : "border-slate-200 focus:border-teal-brand focus:ring-teal-brand/20"
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handle()}
            />
            {passwordMismatch && (
              <p className="text-[11px] text-red-500">Password tidak cocok.</p>
            )}
            {!passwordMismatch && confirmPassword.length > 0 && (
              <p className="text-[11px] text-teal-deep">✓ Password cocok.</p>
            )}
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handle}
            disabled={loading || passwordMismatch}
            className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Menyimpan…" : "Simpan Password Baru"}
          </button>
        </>
      )}
    </main>
  );
}
