import { redirect } from "next/navigation";
import { getAllBasics } from "@/content/basics";

export default function GrundlagenIndex() {
  const first = getAllBasics()[0];
  redirect(first ? `/grundlagen/${first.id}` : "/dashboard");
}
