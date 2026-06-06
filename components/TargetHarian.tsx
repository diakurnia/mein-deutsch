/**
 * Target Harian.
 * Goal pertama NYATA (dari aktivitas hari ini), dua lainnya placeholder
 * karena fiturnya (kuis, vocabulary) belum ada.
 */
export function TargetHarian({ completedToday }: { completedToday: number }) {
  const goal1Done = completedToday >= 1;
  const goals = [
    { label: "Belajar 1 topik hari ini", done: goal1Done, available: true },
    { label: "Selesaikan 1 kuis", done: false, available: false },
    { label: "Pelajari 5 kosakata", done: false, available: false },
  ];
  const availableCount = goals.filter((g) => g.available).length;
  const doneCount = goals.filter((g) => g.available && g.done).length;
  const percent = Math.round((doneCount / availableCount) * 100);

  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-4">
      <p className="mb-3 text-sm font-bold text-slate-700">🎯 Target Harian</p>

      <div className="flex flex-col gap-2">
        {goals.map((g) => (
          <div
            key={g.label}
            className={`flex items-center gap-2 text-sm ${
              g.available ? "text-slate-600" : "text-slate-300"
            }`}
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] ${
                g.done
                  ? "border-teal-brand bg-teal-brand text-teal-deep"
                  : "border-slate-300"
              }`}
            >
              {g.done ? "✓" : ""}
            </span>
            <span className={g.done ? "line-through" : ""}>{g.label}</span>
            {!g.available && <span className="ml-auto text-[10px]">🔒</span>}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-teal-soft">
          <div
            className="h-full rounded-full bg-teal-brand"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[11px] font-semibold text-slate-400">
          {doneCount}/{availableCount}
        </span>
      </div>
    </div>
  );
}
