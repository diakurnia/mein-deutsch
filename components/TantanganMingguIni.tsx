/**
 * Tantangan Minggu Ini — NYATA, dihitung dari streak.
 * Target: belajar 5 hari berturut-turut.
 */
export function TantanganMingguIni({ streak }: { streak: number }) {
  const target = 5;
  const current = Math.min(streak, target);
  const percent = Math.round((current / target) * 100);
  const done = current >= target;

  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-bold text-slate-700">🚩 Tantangan Minggu Ini</p>
        <span className="text-2xl">{done ? "🏆" : "🎁"}</span>
      </div>

      <p className="text-xs text-slate-500">
        Belajar {target} hari berturut-turut
      </p>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-teal-soft">
          <div
            className="h-full rounded-full bg-teal-brand transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[11px] font-semibold text-teal-deep">
          {current}/{target} hari
        </span>
      </div>

      {done && (
        <p className="mt-2 text-xs font-semibold text-teal-deep">
          🎉 Selamat! Tantangan selesai.
        </p>
      )}
    </div>
  );
}
