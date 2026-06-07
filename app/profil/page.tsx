import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { summarizeFor, type ProgressRow } from "@/lib/progress";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
import DeleteAccountButton from "./DeleteAccountButton";

export default async function ProfilPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("user_progress")
    .select("topic_id, status, completed_at")
    .eq("user_id", user.id);
  const rows = (data ?? []) as ProgressRow[];

  const topics = getAllTopics();
  const basicsTopics = getAllBasics();
  const grammarSummary = summarizeFor(rows, topics.map((t) => t.id));
  const basicsSummary = summarizeFor(rows, basicsTopics.map((t) => t.id));
  const overall = summarizeFor(rows, [
    ...topics.map((t) => t.id),
    ...basicsTopics.map((t) => t.id),
  ]);

  const userName = (user.email ?? "user").split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  // Tanggal bergabung
  const joinDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric",
      })
    : "-";

  // Topik terakhir diselesaikan
  const lastCompleted = rows
    .filter((r) => r.completed_at)
    .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0];
  const lastDate = lastCompleted?.completed_at
    ? new Date(lastCompleted.completed_at).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric",
      })
    : null;

  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Link href="/dashboard" className="text-sm font-semibold text-teal-deep hover:underline">
          ← Dashboard
        </Link>
      </div>

      {/* Avatar + info */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-brand text-2xl font-extrabold text-teal-deep shadow">
          {userInitial}
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-slate-900">{userName}</h1>
          <p className="text-sm text-slate-400">{user.email}</p>
          <p className="text-xs text-slate-400">Bergabung {joinDate}</p>
        </div>
      </div>

      {/* Statistik belajar */}
      <section className="mb-4 rounded-2xl border border-teal-soft bg-white p-4">
        <h2 className="mb-3 text-sm font-bold text-slate-700">📊 Statistik Belajar</h2>
        <div className="grid grid-cols-3 gap-3">
          <StatBox value={String(overall.completed)} label="Topik Selesai" />
          <StatBox value={`${overall.percent}%`} label="Progress" />
          <StatBox value={String(rows.filter(r => r.status === "selesai").length)} label="Total Sesi" />
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <PilarBar label="🧱 Grundlagen" completed={basicsSummary.completed} total={basicsSummary.total} percent={basicsSummary.percent} />
          <PilarBar label="📐 Grammatik" completed={grammarSummary.completed} total={grammarSummary.total} percent={grammarSummary.percent} />
        </div>
        {lastDate && (
          <p className="mt-3 text-xs text-slate-400">Terakhir belajar: {lastDate}</p>
        )}
      </section>

      {/* Pengaturan akun */}
      <section className="mb-4 rounded-2xl border border-teal-soft bg-white p-4">
        <h2 className="mb-3 text-sm font-bold text-slate-700">⚙️ Pengaturan Akun</h2>
        <div className="flex flex-col gap-2">
          <Link
            href="/forgot-password"
            className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <span>🔑 Ubah Password</span>
            <span className="text-slate-300">→</span>
          </Link>
        </div>
      </section>

      {/* Zona berbahaya */}
      <section className="rounded-2xl border border-red-100 bg-white p-4">
        <h2 className="mb-1 text-sm font-bold text-red-600">⚠️ Zona Berbahaya</h2>
        <p className="mb-3 text-xs text-slate-400">
          Menghapus akun akan menghapus semua data progress belajarmu secara permanen dan tidak dapat dikembalikan.
        </p>
        <DeleteAccountButton />
      </section>

      {/* Link privacy */}
      <p className="mt-6 text-center text-xs text-slate-400">
        <Link href="/privacy" className="hover:underline">Kebijakan Privasi</Link>
        {" · "}
        <span>Mein-Deutsch</span>
      </p>
    </main>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-teal-soft bg-teal-bg p-3 text-center">
      <div className="text-lg font-extrabold text-teal-deep">{value}</div>
      <div className="text-[10px] text-slate-400">{label}</div>
    </div>
  );
}

function PilarBar({ label, completed, total, percent }: {
  label: string; completed: number; total: number; percent: number;
}) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span className="font-semibold text-slate-600">{label}</span>
        <span className="text-slate-400">{completed}/{total}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-teal-soft">
        <div className="h-full rounded-full bg-teal-brand" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
