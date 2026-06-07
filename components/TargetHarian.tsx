/**
 * Target Harian.
 * Hanya menampilkan target yang tersedia (available: true).
 * Target yang belum ada fiturnya disembunyikan sepenuhnya.
 */
export function TargetHarian({ completedToday }: { completedToday: number }) {
  const goal1Done = completedToday >= 1;

  // Hanya daftarkan target yang fiturnya sudah ada
  const activeGoals = [
    { label: "Pelajari 1 topik hari ini", done: goal1Done },
  ];

  const doneCount = activeGoals.filter((g) => g.done).length;
  const total = activeGoals.length;
  const allDone = doneCount === total;
  const percent = Math.round((doneCount / total) * 100);

  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-bold text-slate-700">🎯 Tagesziel</p>
        {allDone && (
          <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-bold text-teal-deep">
            ✓ Erledigt!
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {activeGoals.map((g) => (
          <div key={g.label} className="flex items-center gap-2 text-sm text-slate-600">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] transition-colors ${
                g.done
                  ? "bg-teal-brand text-teal-deep border border-teal-brand"
                  : "border border-slate-300"
              }`}
            >
              {g.done ? "✓" : ""}
            </span>
            <span className={g.done ? "line-through text-slate-400" : ""}>{g.label}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-teal-soft">
          <div
            className="h-full rounded-full bg-teal-brand transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[11px] font-semibold text-slate-400">
          {doneCount}/{total}
        </span>
      </div>

      {/* Pesan motivasi */}
      <p className="mt-2 text-[11px] text-slate-400">
        {allDone
          ? "Super! Kamu sudah mencapai target hari ini. 🎉"
          : "Belajar 1 topik saja sudah luar biasa! 💪"}
      </p>
    </div>
  );
}
