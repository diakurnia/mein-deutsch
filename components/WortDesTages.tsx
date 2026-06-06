import { getWordOfDay } from "@/content/wordOfDay";
import { SpeakButton } from "@/components/SpeakButton";

export function WortDesTages() {
  const w = getWordOfDay();
  const display = w.artikel ? `${w.artikel} ${w.wort}` : w.wort;

  return (
    <div className="rounded-2xl border border-teal-soft bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          Wort des Tages
        </p>
        <span className="text-sm">📖</span>
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-xl font-extrabold text-teal-deep">{display}</h3>
        <SpeakButton text={w.wort} />
      </div>

      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold text-slate-700">Artinya:</span> {w.arti}
      </p>
      <p className="mt-1 text-sm text-slate-500">
        <span className="font-semibold text-slate-700">Contoh:</span> {w.contoh}
      </p>
      <p className="text-xs italic text-slate-400">{w.contohArti}</p>
    </div>
  );
}
