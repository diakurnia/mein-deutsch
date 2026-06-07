import type { BasicsTopic } from "@/content/basics-types";
import { alphabet } from "@/content/basics/alphabet";
import { aussprache } from "@/content/basics/aussprache";
import { zahlen } from "@/content/basics/zahlen";
import { wochentageMonate } from "@/content/basics/wochentage-monate";
import { uhrzeit } from "@/content/basics/uhrzeit";
import { farben } from "@/content/basics/farben";
import { begruessung } from "@/content/basics/begruessung";

const BASICS: BasicsTopic[] = [
  alphabet,
  aussprache,
  zahlen,
  wochentageMonate,
  uhrzeit,
  farben,
  begruessung,
];

export function getAllBasics(): BasicsTopic[] {
  return [...BASICS].sort((a, b) => a.order - b.order);
}

export function getBasic(id: string): BasicsTopic | undefined {
  return BASICS.find((t) => t.id === id);
}
