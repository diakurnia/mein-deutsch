import type { GrammarTopic } from "@/content/types";
import { artikelNominativ } from "@/content/topics/artikel-nominativ";

const TOPICS: GrammarTopic[] = [artikelNominativ];

export function getAllTopics(): GrammarTopic[] {
  return [...TOPICS].sort((a, b) => a.order - b.order);
}

export function getTopic(id: string): GrammarTopic | undefined {
  return TOPICS.find((t) => t.id === id);
}
