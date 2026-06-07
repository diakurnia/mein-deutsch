import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getBasic, getAllBasics } from "@/content/basics";
import { statusFor, summarize, type ProgressRow } from "@/lib/progress";
import { TopicSidebar, type SidebarItem } from "@/components/TopicSidebar";
import { RichText } from "@/components/RichText";
import { BasicsGrid } from "@/components/BasicsGrid";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";

export function generateStaticParams() {
  return getAllBasics().map((t) => ({ topic: t.id }));
}

export default async function BasicsTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getBasic(topicId);
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

  const topics = getAllBasics();
  const summary = summarize(rows, topics.length);
  const done = statusFor(rows, topic.id) === "selesai";

  const sidebarItems: SidebarItem[] = topics.map((t) => ({
    id: t.id,
    title: t.title,
    order: t.order,
    status: statusFor(rows, t.id),
  }));

  const idx = topics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;

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
          <div className="mb-3 flex items-center justify-between">
            <Link href="/dashboard" className="text-sm font-semibold text-teal-deep">
              ← Dashboard
            </Link>
            <div className="flex gap-1.5">
              {prev ? (
                <Link
                  href={`/grundlagen/${prev.id}`}
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
                  href={`/grundlagen/${next.id}`}
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
            <RichText text={topic.intro} />
          </Section>

          <Section label="📋 Daftar">
            <BasicsGrid groups={topic.groups} />
          </Section>

          <Section label="✏️ Mini-Latihan">
            <MiniExercise exercises={topic.exercises} />
          </Section>

          <MarkCompleteButton topicId={topic.id} done={done} />

          {next && (
            <Link
              href={`/grundlagen/${next.id}`}
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
