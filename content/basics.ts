import type { BasicsTopic } from "@/content/basics-types";
import { alphabet } from "@/content/basics/alphabet";

const BASICS: BasicsTopic[] = [alphabet];

export function getAllBasics(): BasicsTopic[] {
  return [...BASICS].sort((a, b) => a.order - b.order);
}

export function getBasic(id: string): BasicsTopic | undefined {
  return BASICS.find((t) => t.id === id);
}
