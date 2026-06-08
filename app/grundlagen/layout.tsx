import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
import { getAvailableVocab } from "@/content/vocab";
import { AppSidebar } from "@/components/AppSidebar";

export default async function GrundlagenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const firstTopicId = getAllTopics()[0]?.id ?? "";
  const firstBasicsId = getAllBasics()[0]?.id ?? "";
  const firstVocabId = getAvailableVocab()[0]?.id ?? "";
  const email = user?.email ?? "tamu";
  const userName = email.split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="lg:flex">
      <AppSidebar
        firstTopicId={firstTopicId}
        firstBasicsId={firstBasicsId}
        firstVocabId={firstVocabId}
        userInitial={userInitial}
        userName={userName}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
