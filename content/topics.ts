import type { GrammarTopic } from "@/content/types";
import { personalpronomen } from "@/content/topics/personalpronomen";
import { konjugationPraesens } from "@/content/topics/konjugation-praesens";
import { verbenSeinHaben } from "@/content/topics/verben-sein-haben";
import { verbenMitVokalwechsel } from "@/content/topics/verben-mit-vokalwechsel";
import { modalverben } from "@/content/topics/modalverben";
import { trennbareVerben } from "@/content/topics/trennbare-verben";
import { imperativ } from "@/content/topics/imperativ";
import { wFragen } from "@/content/topics/w-fragen";
import { jaNeinFragen } from "@/content/topics/ja-nein-fragen";
import { wortpositionImSatz } from "@/content/topics/wortposition-im-satz";
import { satzklammer } from "@/content/topics/satzklammer";
import { nomenPlural } from "@/content/topics/nomen-plural";
import { negation } from "@/content/topics/negation";
import { kasusAkkusativ } from "@/content/topics/kasus-akkusativ";
import { kasusDativ } from "@/content/topics/kasus-dativ";
import { possessivartikel } from "@/content/topics/possessivartikel";
import { artikelInterrogativDemonstrativ } from "@/content/topics/artikel-interrogativ-demonstrativ";

const TOPICS: GrammarTopic[] = [personalpronomen, konjugationPraesens, verbenSeinHaben, verbenMitVokalwechsel, modalverben, trennbareVerben, imperativ, wFragen, jaNeinFragen, wortpositionImSatz, satzklammer, nomenPlural, negation, kasusAkkusativ, kasusDativ, possessivartikel, artikelInterrogativDemonstrativ];

export function getAllTopics(): GrammarTopic[] {
  return [...TOPICS].sort((a, b) => a.order - b.order);
}

export function getTopic(id: string): GrammarTopic | undefined {
  return TOPICS.find((t) => t.id === id);
}
