import { SpeakButton } from "@/components/SpeakButton";
import type { BasicsGroup } from "@/content/basics-types";

export function BasicsGrid({ groups }: { groups: BasicsGroup[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, gi) => (
        <div key={gi}>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-teal-deep">
            {group.caption}
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.items.map((item, ii) => (
              <div
                key={ii}
                className="flex items-start justify-between gap-2 rounded-xl border border-teal-soft bg-white p-2.5"
              >
                <div className="min-w-0 flex-1">
                  <b className="block break-words text-sm text-slate-900">{item.de}</b>
                  <span className="block break-words text-xs text-slate-400">{item.translation}</span>
                  {item.hint && (
                    <span className="block break-words text-[10px] text-teal-deep">{item.hint}</span>
                  )}
                </div>
                <SpeakButton text={item.speakText ?? item.de} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
