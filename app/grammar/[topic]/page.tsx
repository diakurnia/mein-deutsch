import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getTopic, getAllTopics } from "@/content/topics";
import { statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";
import { TopicSidebar, type SidebarItem } from "@/components/TopicSidebar";
import { SpeakButton } from "@/components/SpeakButton";
import { Collapsible } from "@/components/Collapsible";
import { RichText } from "@/components/RichText";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";

export function generateStaticParams() {
  return getAllTopics().map((t) => ({ topic: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("user_progress")
    .select("topic_id, status")
    .eq("user_id", user.id);
  const rows = (data ?? []) as ProgressRow[];

  const topics = getAllTopics();
  const summary = summarizeFor(rows, topics.map((t) => t.id));
  const done = statusFor(rows, topic.id) === "selesai";

  // Item untuk sidebar
  const sidebarItems: SidebarItem[] = topics.map((t) => ({
    id: t.id,
    title: t.title,
    order: t.order,
    status: statusFor(rows, t.id),
  }));

  // Prev / Next berdasarkan urutan
  const idx = topics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;

  const firstPara = topic.explanation.split("\n\n")[0];

  return (
    <div className="min-h-screen">
      <div className="flex">
        <TopicSidebar
          items={sidebarItems}
          activeId={topic.id}
          completed={summary.completed}
          total={summary.total}
        />

        <main className="mx-auto w-full max-w-xl px-5 py-6">
          {/* Navigasi atas */}
          <div className="mb-3 flex items-center justify-between">
            <Link href="/grammar" className="text-sm font-semibold text-teal-deep">
              ← Dashboard
            </Link>
            <div className="flex gap-1.5">
              {prev ? (
                <Link
                  href={`/grammar/${prev.id}`}
                  className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95"
                >
                  ← Sebelumnya
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">
                  ← Sebelumnya
                </span>
              )}
              {next ? (
                <Link
                  href={`/grammar/${next.id}`}
                  className="rounded-lg bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal-deep transition hover:brightness-95"
                >
                  Berikutnya →
                </Link>
              ) : (
                <span className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300">
                  Berikutnya →
                </span>
              )}
            </div>
          </div>

          <h1 className="mb-4 text-xl font-extrabold text-slate-900">
            {topic.icon} {topic.title}
          </h1>

          <Section label="📖 Penjelasan">
            <Collapsible preview={firstPara} full={topic.explanation} />
          </Section>

          {topic.tables.map((tbl, i) => (
            <Section key={i} label={`📊 ${tbl.caption}`}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {tbl.headers.map((h) => (
                        <th key={h} className="rounded bg-teal-soft p-1.5 text-teal-deep">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tbl.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="border-b border-slate-100 p-1.5 text-center">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          ))}

          <Section label="💬 Contoh Kalimat">
            {topic.examples.map((ex, i) => (
              <div key={i} className="mt-1 flex items-center justify-between gap-2">
                <div className="text-sm">
                  <b className="text-slate-900">{ex.de}</b>
                  <span className="block text-xs text-slate-400">{ex.id}</span>
                </div>
                <SpeakButton text={ex.de} />
              </div>
            ))}
          </Section>

          <Section label="📌 Catatan Penting">
            <RichText text={topic.notes} />
          </Section>

          <Section label="✏️ Mini-Latihan">
            <MiniExercise exercises={topic.exercises} />
          </Section>

          <MarkCompleteButton topicId={topic.id} done={done} />

          {/* Navigasi bawah */}
          {next && (
            <Link
              href={`/grammar/${next.id}`}
              className="mt-4 block rounded-xl border border-teal-soft bg-white p-3 text-center text-sm font-semibold text-teal-deep transition hover:bg-teal-bg"
            >
              Topik berikutnya: {next.icon} {next.title} →
            </Link>
          )}
        </main>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-3 rounded-2xl border border-teal-soft bg-white p-4">
      <span className="text-[11px] font-bold uppercase tracking-wide text-teal-deep">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </section>
  );
}
