"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// Cek kekuatan password
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

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const strength = passwordStrength(password);
  const passwordMismatch = mode === "up" && confirmPassword.length > 0 && password !== confirmPassword;

  function switchMode(next: "in" | "up") {
    setMode(next);
    setError(null);
    setSuccess(null);
    setPassword("");
    setConfirmPassword("");
  }

  async function handle() {
    setError(null);
    setSuccess(null);

    // Validasi sisi klien sebelum hit Supabase
    if (!email.includes("@")) {
      setError("Masukkan alamat email yang valid.");
      return;
    }

    if (mode === "up") {
      if (password.length < 8) {
        setError("Password minimal 8 karakter.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Konfirmasi password tidak cocok.");
        return;
      }
    }

    setLoading(true);
    try {
      const supabase = createClient();

      if (mode === "in") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          // Pesan error Supabase diterjemahkan agar lebih ramah
          if (error.message.includes("Invalid login credentials")) {
            setError("Email atau password salah. Silakan coba lagi.");
          } else if (error.message.includes("Email not confirmed")) {
            setError("Email belum dikonfirmasi. Cek kotak masuk emailmu.");
          } else {
            setError(error.message);
          }
          return;
        }
        router.push("/dashboard");
        router.refresh();

      } else {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
          if (error.message.includes("already registered")) {
            setError("Email ini sudah terdaftar. Silakan masuk.");
            setMode("in");
          } else {
            setError(error.message);
          }
          return;
        }
        if (data.session) {
          router.push("/dashboard");
          router.refresh();
        } else {
          setSuccess("Akun berhasil dibuat! Cek emailmu untuk konfirmasi, lalu masuk.");
          switchMode("in");
        }
      }
    } catch {
      setError("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6 py-10">
      {/* Logo */}
      <div className="mb-2 text-center">
        <div className="text-5xl">🦉</div>
        <p className="mt-2 text-sm font-semibold text-slate-400">Mein-Deutsch</p>
      </div>

      <h1 className="text-2xl font-extrabold text-teal-deep">
        {mode === "in" ? "Masuk" : "Buat Akun Baru"}
      </h1>

      {/* Email */}
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

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">
          Password {mode === "up" && <span className="text-slate-400">(min. 8 karakter)</span>}
        </label>
        <div className="relative">
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-teal-brand focus:ring-2 focus:ring-teal-brand/20"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            autoComplete={mode === "in" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && mode === "in" && handle()}
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

        {/* Indikator kekuatan password — hanya saat daftar */}
        {mode === "up" && password.length > 0 && (
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

      {/* Konfirmasi Password — hanya saat daftar */}
      {mode === "up" && (
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-500">Konfirmasi Password</label>
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
      )}

      {/* Pesan error & sukses */}
      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}
      {success && (
        <p className="rounded-lg border border-teal-soft bg-teal-bg px-3 py-2 text-sm text-teal-deep">
          {success}
        </p>
      )}

      {/* Tombol utama */}
      <button
        onClick={handle}
        disabled={loading || passwordMismatch}
        className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Memproses…" : mode === "in" ? "Masuk" : "Buat Akun"}
      </button>

      {/* Switch mode */}
      <p className="text-center text-sm text-slate-500">
        {mode === "in" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
        <button
          type="button"
          onClick={() => switchMode(mode === "in" ? "up" : "in")}
          className="font-semibold text-teal-deep hover:underline"
        >
          {mode === "in" ? "Daftar gratis" : "Masuk"}
        </button>
      </p>
    </main>
  );
}
