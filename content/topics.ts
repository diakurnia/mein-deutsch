import type { GrammarTopic } from "@/content/types";
import { personalpronomen } from "@/content/topics/personalpronomen";
import { artikelNominativ } from "@/content/topics/artikel-nominativ";
import { konjugationPraesens } from "@/content/topics/konjugation-praesens";
import { verbenSeinHaben } from "@/content/topics/verben-sein-haben";
import { verbenMitVokalwechsel } from "@/content/topics/verben-mit-vokalwechsel";
import { modalverben } from "@/content/topics/modalverben";
import { trennbareVerben } from "@/content/topics/trennbare-verben";
import { reflexivverben } from "@/content/topics/reflexivverben";
import { nomenPlural } from "@/content/topics/nomen-plural";
import { wortpositionImSatz } from "@/content/topics/wortposition-im-satz";
import { wFragen } from "@/content/topics/w-fragen";
import { jaNeinFragen } from "@/content/topics/ja-nein-fragen";
import { imperativ } from "@/content/topics/imperativ";
import { negation } from "@/content/topics/negation";
import { satzklammer } from "@/content/topics/satzklammer";
import { kasusAkkusativ } from "@/content/topics/kasus-akkusativ";
import { kasusDativ } from "@/content/topics/kasus-dativ";
import { artikelKasusTabelle } from "@/content/topics/artikel-kasus-tabelle";
import { personalpronomenAkkusativDativ } from "@/content/topics/personalpronomen-akkusativ-dativ";
import { possessivartikel } from "@/content/topics/possessivartikel";
import { artikelInterrogativDemonstrativ } from "@/content/topics/artikel-interrogativ-demonstrativ";
import { adjektivePraedikativ } from "@/content/topics/adjektive-praedikativ";
import { komparativSuperlativ } from "@/content/topics/komparativ-superlativ";
import { praepositionen } from "@/content/topics/praepositionen";
import { konjunktionen } from "@/content/topics/konjunktionen";
import { nebensatz } from "@/content/topics/nebensatz";
import { praeteritumSeinHaben } from "@/content/topics/praeteritum-sein-haben";
import { perfektHabenSein } from "@/content/topics/perfekt-haben-sein";
import { partizip2 } from "@/content/topics/partizip-2";

const TOPICS: GrammarTopic[] = [
  personalpronomen,
  artikelNominativ,
  konjugationPraesens,
  verbenSeinHaben,
  verbenMitVokalwechsel,
  modalverben,
  trennbareVerben,
  reflexivverben,
  nomenPlural,
  wortpositionImSatz,
  wFragen,
  jaNeinFragen,
  imperativ,
  negation,
  satzklammer,
  kasusAkkusativ,
  kasusDativ,
  artikelKasusTabelle,
  personalpronomenAkkusativDativ,
  possessivartikel,
  artikelInterrogativDemonstrativ,
  adjektivePraedikativ,
  komparativSuperlativ,
  praepositionen,
  konjunktionen,
  nebensatz,
  praeteritumSeinHaben,
  perfektHabenSein,
  partizip2,
];

export function getAllTopics(): GrammarTopic[] {
  return [...TOPICS].sort((a, b) => a.order - b.order);
}

export function getTopic(id: string): GrammarTopic | undefined {
  return TOPICS.find((t) => t.id === id);
}
