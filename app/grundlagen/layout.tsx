import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAllTopics } from "@/content/topics";
import { getAllBasics } from "@/content/basics";
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
  if (!user) redirect("/login");

  const firstTopicId = getAllTopics()[0]?.id ?? "";
  const firstBasicsId = getAllBasics()[0]?.id ?? "";
  const email = user.email ?? "user";
  const userName = email.split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="lg:flex">
      <AppSidebar
        firstTopicId={firstTopicId}
        firstBasicsId={firstBasicsId}
        userInitial={userInitial}
        userName={userName}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
