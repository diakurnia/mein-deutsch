import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getTopic, getAllTopics } from "@/content/topics";
import { statusFor, type ProgressRow } from "@/lib/progress";
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
    .eq("user_id", user.id)
    .eq("topic_id", topic.id);
  const done = statusFor((data ?? []) as ProgressRow[], topic.id) === "selesai";

  const firstPara = topic.explanation.split("\n\n")[0];

  return (
    <main className="mx-auto max-w-xl px-5 py-6">
      <Link href="/grammar" className="text-sm font-semibold text-teal-deep">
        ← Kembali
      </Link>
      <h1 className="mb-4 mt-2 text-xl font-extrabold text-slate-900">
        {topic.icon} {topic.title}
      </h1>

      <Section label="📖 Penjelasan">
        <Collapsible preview={firstPara} full={topic.explanation} />
      </Section>

      {topic.tables.map((tbl, i) => (
        <Section key={i} label={`📊 ${tbl.caption}`}>
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
        </Section>
      ))}

      <Section label="💬 Contoh Kalimat">
        {topic.examples.map((ex, i) => (
          <div key={i} className="mt-1 flex items-center justify-between">
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
    </main>
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
