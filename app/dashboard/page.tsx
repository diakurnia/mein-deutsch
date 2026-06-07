import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
import {
  statusFor,
  summarizeFor,
  weeklyActivity,
  calcStreak,
  completedTodayCount,
  type ProgressRow,
} from "@/lib/progress";
import { SECTIONS } from "@/lib/sections";
import { ActivityChart } from "@/components/ActivityChart";
import { TargetHarian } from "@/components/TargetHarian";
import { WortDesTages } from "@/components/WortDesTages";
import { TantanganMingguIni } from "@/components/TantanganMingguIni";

export default async function GrammarDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const userName = (user.email ?? "user").split("@")[0];

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
  const continueBasics =
    basicsTopics.find((t) => statusFor(rows, t.id) !== "selesai") ??
    basicsTopics[basicsTopics.length - 1];
  const activity = weeklyActivity(rows);
  const streak = calcStreak(rows);
  const completedToday = completedTodayCount(rows);
  const totalSessions = rows.filter((r) => r.status === "selesai").length;

  const continueTopic =
    topics.find((t) => statusFor(rows, t.id) !== "selesai") ??
    topics[topics.length - 1];

  // Hero logic: tunjuk Grundlagen jika user belum pernah mulai grammar
  const grammarStarted = rows.some((r) => topics.some((t) => t.id === r.topic_id));
  const showGrundlagenHero = !grammarStarted;

  const heroTitle = showGrundlagenHero ? continueBasics.title : continueTopic.title;
  const heroHref = showGrundlagenHero
    ? `/grundlagen/${continueBasics.id}`
    : `/grammar/${continueTopic.id}`;
  const heroOrder = showGrundlagenHero ? continueBasics.order : continueTopic.order;
  const heroTotal = showGrundlagenHero ? basicsTopics.length : topics.length;
  const heroPilar = showGrundlagenHero ? "Grundlagen" : "Grammatik";

  // Deskripsi singkat untuk hero (strip markdown, potong)
  const heroSourceText = showGrundlagenHero
    ? continueBasics.intro
    : continueTopic.explanation;
  const heroDesc = heroSourceText
    .split("\n\n")[0]
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .slice(0, 100);

  return (
    <main className="px-5 py-5 sm:px-7">
      {/* Topbar */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Hallo, {userName}! 👋
          </h1>
          <p className="text-sm text-slate-400">
            Semangat belajar Bahasa Jerman hari ini!
          </p>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 ? (
            <span className="hidden items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-600 sm:flex">
              🔥 {streak} hari berturut-turut
            </span>
          ) : (
            <span className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-400 sm:flex">
              🔥 Mulai streak hari ini!
            </span>
          )}
          <span className="text-lg text-slate-300">🔔</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* ─── Kolom utama (2/3) ─── */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {/* Hero Lanjutkan Belajar */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-bg to-teal-soft p-6">
            <div className="relative z-10 max-w-md">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-deep">
                {showGrundlagenHero ? "Mulai dari Sini" : "Lanjutkan Belajar"} · {heroPilar}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                {heroTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{heroDesc}…</p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                <span>📖 Topik {heroOrder} dari {heroTotal}</span>
                <span>⏱️ Estimasi 5 menit</span>
              </div>

              <div className="mt-4">
                <Link
                  href={heroHref}
                  className="inline-block rounded-xl bg-teal-deep px-5 py-2.5 text-sm font-bold text-white shadow transition hover:brightness-110"
                >
                  {showGrundlagenHero ? "Mulai Belajar →" : "Lanjutkan Belajar →"}
                </Link>
              </div>
            </div>
            {/* Ilustrasi */}
            <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/60 text-6xl shadow-inner">
                {showGrundlagenHero ? "🧱" : "📖"}
              </div>
              <span className="absolute -right-1 -top-1 text-3xl">🇩🇪</span>
            </div>
          </div>

          {/* Aktivitas + Target Harian */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ActivityChart
              data={activity}
              streak={streak}
              totalSessions={totalSessions}
            />
            <TargetHarian completedToday={completedToday} />
          </div>

          {/* Materi Belajar */}
          <div>
            <p className="mb-2 text-sm font-bold text-slate-700">Materi Belajar</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SECTIONS.map((s) => {
                const resolvedHref =
                  s.id === "grammar"
                    ? `/grammar/${continueTopic.id}`
                    : s.id === "grundlagen"
                    ? `/grundlagen/${continueBasics.id}`
                    : s.href;
                const sectionSummary =
                  s.id === "grammar"
                    ? grammarSummary
                    : s.id === "grundlagen"
                    ? basicsSummary
                    : null;
                const inner = (
                  <>
                    <span className="text-2xl">{s.icon}</span>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-slate-900">{s.label}</h5>
                      {sectionSummary ? (
                        <>
                          <div className="mt-1.5 h-1 max-w-[180px] overflow-hidden rounded-full bg-teal-soft">
                            <div
                              className="h-full rounded-full bg-teal-brand"
                              style={{ width: `${sectionSummary.percent}%` }}
                            />
                          </div>
                          <small className="text-[10px] text-slate-400">
                            {sectionSummary.completed}/{sectionSummary.total} topik selesai
                          </small>
                        </>
                      ) : (
                        <small className="text-[10px] text-slate-400">Segera hadir</small>
                      )}
                    </div>
                    {s.available ? (
                      <span className="text-xs font-bold text-teal-deep">Lanjutkan</span>
                    ) : (
                      <span className="text-sm text-slate-300">🔒</span>
                    )}
                  </>
                );
                const cls =
                  "flex items-center gap-3 rounded-2xl border border-teal-soft bg-white p-3.5";
                return s.available && resolvedHref ? (
                  <Link
                    key={s.id}
                    href={resolvedHref}
                    className={`${cls} transition hover:bg-teal-bg`}
                  >
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

        {/* ─── Kolom kanan (1/3) ─── */}
        <div className="flex flex-col gap-4">
          {/* Progress Ringkasan — per pilar */}
          <div className="rounded-2xl border border-teal-soft bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-700">📊 Ringkasan Progress</p>
              <span className="text-lg font-extrabold text-teal-deep">{overall.percent}%</span>
            </div>

            {/* Overall bar */}
            <div className="mb-4 h-2 overflow-hidden rounded-full bg-teal-soft">
              <div
                className="h-full rounded-full bg-teal-brand transition-all"
                style={{ width: `${overall.percent}%` }}
              />
            </div>

            {/* Per pilar */}
            <div className="flex flex-col gap-3">
              <PilarProgress
                icon="🧱"
                label="Grundlagen"
                completed={basicsSummary.completed}
                total={basicsSummary.total}
                percent={basicsSummary.percent}
              />
              <PilarProgress
                icon="📐"
                label="Grammatik"
                completed={grammarSummary.completed}
                total={grammarSummary.total}
                percent={grammarSummary.percent}
              />
            </div>

            <p className="mt-3 text-center text-[11px] text-slate-400">
              {overall.completed} dari {overall.total} topik selesai
            </p>
          </div>

          <WortDesTages />
          <TantanganMingguIni streak={streak} />
        </div>
      </div>
    </main>
  );
}

function PilarProgress({
  icon,
  label,
  completed,
  total,
  percent,
}: {
  icon: string;
  label: string;
  completed: number;
  total: number;
  percent: number;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
          <span>{icon}</span> {label}
        </span>
        <span className="text-[11px] text-slate-400">{completed}/{total}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-teal-soft">
        <div
          className="h-full rounded-full bg-teal-brand transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
