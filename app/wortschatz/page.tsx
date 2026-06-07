import { redirect } from "next/navigation";
import { getAvailableVocab } from "@/content/vocab";

export default function WortschatzIndex() {
  const first = getAvailableVocab()[0];
  redirect(first ? `/wortschatz/${first.id}` : "/dashboard");
}
