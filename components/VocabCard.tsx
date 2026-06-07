import type { VocabItem } from '@/content/vocab-types';
import { SpeakButton } from '@/components/SpeakButton';

const ARTIKEL_STYLE: Record<'der' | 'die' | 'das', { border: string; badge: string }> = {
  der: { border: 'border-blue-400',  badge: 'bg-blue-50 text-blue-700' },
  die: { border: 'border-pink-400',  badge: 'bg-pink-50 text-pink-700' },
  das: { border: 'border-amber-400', badge: 'bg-amber-50 text-amber-700' },
};

const WORTART_STYLE: Record<string, string> = {
  Nomen:    'bg-green-50 text-green-700',
  Verb:     'bg-amber-50 text-amber-700',
  Adjektiv: 'bg-violet-50 text-violet-700',
};

const WORTART_LABEL: Record<string, string> = {
  Nomen:    'NOMEN',
  Verb:     'VERB',
  Adjektiv: 'ADJ',
};

export function VocabCard({ item }: { item: VocabItem }) {
  const borderClass =
    item.wortart === 'Nomen'
      ? ARTIKEL_STYLE[item.artikel].border
      : item.wortart === 'Verb'
      ? 'border-amber-400'
      : 'border-violet-300';

  return (
    <div className={`relative rounded-xl border-2 bg-white p-3 text-center ${borderClass}`}>
      {/* Wortart badge pojok kanan atas */}
      <span
        className={`absolute right-2 top-2 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${WORTART_STYLE[item.wortart]}`}
      >
        {WORTART_LABEL[item.wortart]}
      </span>

      {/* Konten atas */}
      {item.wortart === 'Nomen' && (
        <span className={`mb-1 inline-block rounded px-2 py-0.5 text-[10px] font-extrabold ${ARTIKEL_STYLE[item.artikel].badge}`}>
          {item.artikel}
        </span>
      )}

      {item.wortart === 'Verb' && item.trennbar && (
        <span className="mb-1 inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
          trennbar
        </span>
      )}

      <p className="mt-1 text-sm font-black text-slate-900">{item.de}</p>
      <p className="mb-2 text-[11px] text-slate-500">{item.translation}</p>

      <SpeakButton text={item.speakText ?? item.de} />

      {/* Konten bawah — adaptif per wortart */}
      <div className="mt-2 border-t border-dashed border-slate-100 pt-2">
        {item.wortart === 'Nomen' && (
          <div className="flex items-center justify-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wide text-slate-300">Pl.</span>
            {item.plural ? (
              <span className="text-[10px] font-bold text-slate-400">{item.plural}</span>
            ) : (
              <span className="text-[10px] italic text-slate-300">—</span>
            )}
          </div>
        )}

        {item.wortart === 'Verb' && (
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <div>
              <span className="font-bold text-amber-600">ich </span>
              <span className="text-slate-500">{item.ich}</span>
            </div>
            <div>
              <span className="font-bold text-amber-600">er </span>
              <span className={item.irregular ? 'font-bold text-amber-600' : 'text-slate-500'}>
                {item.erSie}{item.irregular ? ' ⚡' : ''}
              </span>
            </div>
          </div>
        )}

        {item.wortart === 'Adjektiv' && (
          <p className="text-[10px] italic text-slate-400">„{item.example}"</p>
        )}
      </div>
    </div>
  );
}
