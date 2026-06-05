import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { statusFor, summarize, type ProgressRow } from "@/lib/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { TopicCard } from "@/components/TopicCard";

export default async function GrammarPage() {
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
  const s = summarize(rows, topics.length);

  return (
    <main className="mx-auto max-w-2xl px-5 py-8">
      <section className="rounded-2xl bg-gradient-to-br from-teal-accent to-teal-brand p-5 text-teal-deep shadow">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-extrabold">Hallo! 👋</h1>
          <form action="/auth/signout" method="post">
            <button className="text-xs font-semibold underline">Keluar</button>
          </form>
        </div>
        <div className="mt-3">
          <ProgressBar percent={s.percent} />
          <p className="mt-1.5 text-xs font-medium">
            {s.completed}/{s.total} topik selesai
          </p>
        </div>
      </section>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {topics.map((t) => (
          <TopicCard key={t.id} topic={t} status={statusFor(rows, t.id)} />
        ))}
      </div>
    </main>
  );
}
