"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handle(mode: "in" | "up") {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const fn =
      mode === "in"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });
    const { error } = await fn;
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/grammar");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6">
      <h1 className="text-2xl font-extrabold text-teal-deep">Masuk</h1>
      <input
        className="rounded-lg border border-teal-accent px-3 py-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="rounded-lg border border-teal-accent px-3 py-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        onClick={() => handle("in")}
        disabled={loading}
        className="rounded-xl bg-teal-brand px-4 py-2.5 font-bold text-teal-deep disabled:opacity-50"
      >
        Masuk
      </button>
      <button
        onClick={() => handle("up")}
        disabled={loading}
        className="text-sm font-semibold text-teal-deep"
      >
        Belum punya akun? Daftar
      </button>
    </main>
  );
}
