import type { GrammarTopic } from "@/content/types";
import { personalpronomen } from "@/content/topics/personalpronomen";
import { konjugationPraesens } from "@/content/topics/konjugation-praesens";

const TOPICS: GrammarTopic[] = [personalpronomen, konjugationPraesens];

export function getAllTopics(): GrammarTopic[] {
  return [...TOPICS].sort((a, b) => a.order - b.order);
}

export function getTopic(id: string): GrammarTopic | undefined {
  return TOPICS.find((t) => t.id === id);
}
