import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllVocab, getAvailableVocab, getVocab } from "@/content/vocab";
import { statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";
import { TopicSidebar, type SidebarItem } from "@/components/TopicSidebar";
import { VocabGrid } from "@/components/VocabGrid";
import { MiniExercise } from "@/components/MiniExercise";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";
import { RichText } from "@/components/RichText";

export function generateStaticParams() {
  return getAvailableVocab().map((t) => ({ topic: t.id }));
}

export default async function VocabTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getVocab(topicId);
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

  const allTopics = getAllVocab();
  const availableTopics = getAvailableVocab();
  const summary = summarizeFor(rows, availableTopics.map((t) => t.id));
  const done = statusFor(rows, topic.id) === "selesai";

  const sidebarItems: SidebarItem[] = allTopics.map((t) => ({
    id: t.id,
    title: `${t.icon} ${t.title}`,
    order: t.order,
    status: statusFor(rows, t.id),
    locked: !t.available,
  }));

  const idx = availableTopics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? availableTopics[idx - 1] : null;
  const next = idx < availableTopics.length - 1 ? availableTopics[idx + 1] : null;

  return (
    <div className="min-h-screen">
      <div className="flex">
        <TopicSidebar
          items={sidebarItems}
          activeId={topic.id}
          completed={summary.completed}
          total={summary.total}
          basePath="/wortschatz"
          sectionLabel="Wortschatz A1"
        />

        <main className="mx-auto w-full max-w-xl px-5 py-6">
          <div className="mb-3 flex items-center justify-between">
            <Link href="/dashboard" className="text-sm font-semibold text-teal-deep">
              ← Dashboard
            </Link>
            <div className="flex gap-1.5">
              {prev ? (
                <Link
                  href={`/wortschatz/${prev.id}`}
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
                  href={`/wortschatz/${next.id}`}
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

          <Section label="📋 Kosakata">
            <VocabGrid items={topic.items} />
          </Section>

          {topic.examples.length > 0 && (
            <Section label="💬 Contoh Kalimat">
              <div className="flex flex-col gap-2">
                {topic.examples.map((ex, i) => (
                  <ExampleSentence key={i} de={ex.de} id={ex.id} />
                ))}
              </div>
            </Section>
          )}

          <Section label="✏️ Mini-Latihan">
            <MiniExercise exercises={topic.exercises} />
          </Section>

          <MarkCompleteButton topicId={topic.id} done={done} />

          {next && (
            <Link
              href={`/wortschatz/${next.id}`}
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

function ExampleSentence({ de, id }: { de: string; id: string }) {
  const parts = de.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="rounded-lg border-l-[3px] border-teal-brand bg-slate-50 px-3 py-2">
      <p className="text-sm italic text-slate-700">
        &ldquo;{parts.map((part, i) => {
          if (!part.startsWith("**")) return <span key={i}>{part}</span>;
          const word = part.slice(2, -2);
          const colorClass =
            word.startsWith("der ") || word.startsWith("Der ")
              ? "text-blue-600 font-bold not-italic"
              : word.startsWith("die ") || word.startsWith("Die ")
              ? "text-pink-600 font-bold not-italic"
              : word.startsWith("das ") || word.startsWith("Das ")
              ? "text-amber-600 font-bold not-italic"
              : "text-teal-deep font-bold not-italic";
          return (
            <span key={i} className={colorClass}>
              {word}
            </span>
          );
        })}&rdquo;
      </p>
      <p className="mt-0.5 text-xs text-slate-400">{id}</p>
    </div>
  );
}
