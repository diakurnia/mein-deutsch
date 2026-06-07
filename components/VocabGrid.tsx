import type { VocabItem } from '@/content/vocab-types';
import { VocabCard } from '@/components/VocabCard';

export function VocabGrid({ items }: { items: VocabItem[] }) {
  return (
    <div>
      {/* Legend artikel */}
      <div className="mb-3 flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-400" />der
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-pink-400" />die
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />das
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <VocabCard key={item.de} item={item} />
        ))}
      </div>
    </div>
  );
}
