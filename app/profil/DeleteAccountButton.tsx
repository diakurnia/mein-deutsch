"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DeleteAccountButton() {
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();

      // Hapus semua progress user (RLS memastikan hanya milik sendiri)
      const { error: progressError } = await supabase
        .from("user_progress")
        .delete()
        .neq("topic_id", ""); // hapus semua baris milik user ini

      if (progressError) throw progressError;

      // Hapus akun via API route (butuh service role, tidak bisa dari client)
      const res = await fetch("/api/delete-account", { method: "DELETE" });
      if (!res.ok) throw new Error("Gagal menghapus akun.");

      // Sign out dan redirect
      await supabase.auth.signOut();
      router.push("/?deleted=1");
    } catch (e) {
      console.error(e);
      setError("Gagal menghapus akun. Coba lagi atau hubungi kami.");
      setLoading(false);
    }
  }

  if (!confirm) {
    return (
      <button
        onClick={() => setConfirm(true)}
        className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
      >
        Hapus Akun
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
        <p className="text-sm font-bold text-red-600">Yakin ingin menghapus akun?</p>
        <p className="mt-1 text-xs text-red-400">
          Semua data progress akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.
        </p>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <div className="flex gap-2">
        <button
          onClick={() => setConfirm(false)}
          disabled={loading}
          className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Batal
        </button>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Menghapus…" : "Ya, Hapus Akun"}
        </button>
      </div>
    </div>
  );
}
