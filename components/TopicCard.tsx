import Link from "next/link";
import type { GrammarTopic } from "@/content/types";
import type { ProgressStatus } from "@/lib/progress";

const BADGE: Record<ProgressStatus, { text: string; cls: string }> = {
  belum: { text: "⚪ Belum", cls: "bg-slate-100 text-slate-500" },
  dipelajari: { text: "🔵 Dipelajari", cls: "bg-sky-100 text-sky-700" },
  selesai: { text: "✓ Selesai", cls: "bg-teal-soft text-teal-deep" },
};

export function TopicCard({
  topic,
  status,
}: {
  topic: GrammarTopic;
  status: ProgressStatus;
}) {
  const badge = BADGE[status];
  return (
    <Link
      href={`/grammar/${topic.id}`}
      className="block rounded-2xl border border-teal-soft bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${badge.cls}`}>
        {badge.text}
      </span>
      <div className="mt-2 text-2xl">{topic.icon}</div>
      <h3 className="mt-1 font-bold text-slate-900">{topic.title}</h3>
      <p className="text-xs text-slate-400">
        {topic.level} · Topik {topic.order}
      </p>
    </Link>
  );
}
