"use client";

const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

/**
 * Bar chart aktivitas 7 hari terakhir + statistik ringkas.
 * data: array 7 angka [6 hari lalu ... hari ini] dari weeklyActivity()
 */
export function ActivityChart({
  data,
  streak,
  totalSessions,
}: {
  data: number[];
  streak: number;
  totalSessions: number;
}) {
  const max = Math.max(...data, 1); // hindari division by zero
  const todayIdx = 6;

  // Nama hari dimulai dari 6 hari lalu hingga hari ini
  const today = new Date();
  const labels = data.map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return DAYS[d.getDay() === 0 ? 6 : d.getDay() - 1]; // 0=Min→6, 1=Sen→0, dst
  });

  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-4">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-xs font-bold text-slate-700">Aktivitas 7 Hari Terakhir</h4>
        {streak > 0 ? (
          <span className="rounded-full border border-yellow-200 bg-yellow-50 px-2.5 py-1 text-xs font-bold text-yellow-600">
            🔥 {streak} hari
          </span>
        ) : (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-400">
            🔥 Streak
          </span>
        )}
      </div>

      {/* Bar chart */}
      <div className="mb-1 flex h-14 items-end gap-1.5">
        {data.map((val, i) => {
          const heightPct = max > 0 ? (val / max) * 100 : 0;
          const isToday = i === todayIdx;
          const hasActivity = val > 0;
          return (
            <div
              key={i}
              title={`${labels[i]}: ${val} topik selesai`}
              className="relative flex-1 rounded-t transition-all"
              style={{
                height: hasActivity ? `${Math.max(heightPct, 12)}%` : "8%",
                background: isToday && hasActivity
                  ? "#0f766e"
                  : hasActivity
                  ? "#2dd4bf"
                  : "#ccfbf1",
                boxShadow: isToday && hasActivity
                  ? "0 0 0 2px #fff, 0 0 0 3.5px #0f766e"
                  : undefined,
              }}
            />
          );
        })}
      </div>

      {/* Label hari */}
      <div className="mb-3 flex gap-1.5">
        {labels.map((l, i) => (
          <span
            key={i}
            className={`flex-1 text-center text-[9px] ${
              i === todayIdx ? "font-bold text-teal-deep" : "text-slate-400"
            }`}
          >
            {l}
          </span>
        ))}
      </div>

      {/* Chips statistik */}
      <div className="grid grid-cols-3 gap-1.5">
        <Chip value={String(totalSessions)} label="Total Sesi" />
        <Chip
          value={String(data.filter((v) => v > 0).length)}
          label="Hari Aktif"
        />
        <Chip
          value={String(data.reduce((a, b) => a + b, 0))}
          label="Topik/7 hari"
        />
      </div>
    </div>
  );
}

function Chip({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-teal-soft bg-teal-bg p-2 text-center">
      <div className="text-sm font-extrabold text-teal-deep">{value}</div>
      <div className="text-[9px] uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}
