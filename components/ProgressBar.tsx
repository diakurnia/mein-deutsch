export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-white/55">
      <div
        className="h-full rounded-full bg-white"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
