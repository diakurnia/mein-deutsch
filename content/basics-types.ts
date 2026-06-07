import type { GrammarExercise } from "@/content/types";

export type BasicsItem = {
  de: string;
  id: string;
  hint?: string;
};

export type BasicsGroup = {
  caption: string;
  items: BasicsItem[];
};

export type BasicsTopic = {
  id: string;
  title: string;
  level: string;
  order: number;
  icon: string;
  intro: string;
  groups: BasicsGroup[];
  exercises: GrammarExercise[];
};
