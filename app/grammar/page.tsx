import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { statusFor, summarize, weeklyActivity, calcStreak, type ProgressRow } from "@/lib/progress";
import { SECTIONS } from "@/lib/sections";
import { TopNav } from "@/components/TopNav";
import { ActivityChart } from "@/components/ActivityChart";

export default async function GrammarDashboard() {
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
  const summary = summarize(rows, topics.length);
  const activity = weeklyActivity(rows);
  const streak = calcStreak(rows);
  const totalSessions = rows.filter((r) => r.status === "selesai").length;

  // Topik untuk "Lanjutkan": topik pertama yang belum selesai, atau topik terakhir
  const continueTopic =
    topics.find((t) => statusFor(rows, t.id) !== "selesai") ??
    topics[topics.length - 1];

  return (
    <div className="min-h-screen">
      <TopNav activeSection="grammar" />

      <main className="mx-auto max-w-4xl px-6 py-6">
        {/* Sapaan + streak */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-extrabold text-slate-900">Hallo! 👋</h1>
            <p className="text-xs text-slate-400">Lanjutkan belajarmu hari ini</p>
          </div>
          {streak > 0 ? (
            <span className="flex items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-600">
              🔥 {streak} hari berturut
            </span>
          ) : (
            <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-400">
              🔥 Mulai streak hari ini!
            </span>
          )}
        </div>

        {/* Baris atas: kartu Lanjutkan + statistik berdampingan di layar lebar */}
        <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* Kartu Lanjutkan — span 2 kolom */}
          <Link
            href={`/grammar/${continueTopic.id}`}
            className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-teal-accent to-teal-brand p-5 text-teal-deep shadow transition hover:brightness-105 lg:col-span-2"
          >
            <span className="text-4xl">{continueTopic.icon}</span>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide opacity-75">
                Lanjutkan · Grammar A1
              </p>
              <h3 className="text-base font-extrabold leading-tight">
                {continueTopic.title}
              </h3>
            </div>
            <span className="rounded-lg bg-white px-3 py-2 text-sm font-extrabold text-teal-deep">
              Lanjut →
            </span>
          </Link>

          {/* Statistik — 1 kolom, 3 baris di layar lebar */}
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-2">
            <Stat value={String(summary.completed)} label="Selesai" />
            <Stat value={String(summary.total)} label="Total Topik" />
            <Stat value={`${summary.percent}%`} label="Progress" />
          </div>
        </div>

        {/* Baris bawah: grafik placeholder + materi belajar berdampingan */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Grafik aktivitas */}
          <ActivityChart
            data={activity}
            streak={streak}
            totalSessions={totalSessions}
          />

          {/* Daftar section — span 2 kolom */}
          <div className="lg:col-span-2">
            <p className="mb-2 text-sm font-semibold text-slate-500">Materi Belajar</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SECTIONS.map((s) => {
            // "grammar" = halaman saat ini, jadikan link ke topik lanjutan bukan ke dirinya sendiri
            const resolvedHref =
              s.id === "grammar" ? `/grammar/${continueTopic.id}` : s.href;
            const inner = (
              <>
                <span className="text-2xl">{s.icon}</span>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-slate-900">{s.label}</h5>
                  {s.id === "grammar" ? (
                    <>
                      <div className="mt-1.5 h-1 max-w-[200px] overflow-hidden rounded-full bg-teal-soft">
                        <div
                          className="h-full rounded-full bg-teal-brand"
                          style={{ width: `${summary.percent}%` }}
                        />
                      </div>
                      <small className="text-[10px] text-slate-400">
                        {summary.completed}/{summary.total} topik selesai
                      </small>
                    </>
                  ) : (
                    <small className="text-[10px] text-slate-400">Segera hadir</small>
                  )}
                </div>
                {s.available ? (
                  <span className="rounded-full bg-teal-soft px-2.5 py-1 text-[11px] font-bold text-teal-deep">
                    Aktif
                  </span>
                ) : (
                  <span className="text-sm text-slate-300">🔒</span>
                )}
              </>
            );
            const cls =
              "flex items-center gap-3 rounded-2xl border border-teal-soft bg-white p-3";
            return s.available && resolvedHref ? (
              <Link key={s.id} href={resolvedHref} className={`${cls} transition hover:bg-teal-bg`}>
                {inner}
              </Link>
            ) : (
              <div key={s.id} className={`${cls} opacity-60`}>
                {inner}
              </div>
            );
          })}
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-3 text-center">
      <div className="text-xl font-extrabold text-teal-deep">{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}
