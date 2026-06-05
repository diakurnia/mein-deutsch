export type GrammarTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type GrammarExample = {
  de: string; // kalimat Jerman
  id: string; // terjemahan Indonesia
};

export type GrammarExercise = {
  question: string; // gunakan "___" sebagai tempat jawaban
  options: string[];
  answer: string; // harus salah satu dari options
};

export type GrammarTopic = {
  id: string; // slug, mis. "artikel-nominativ"
  title: string;
  level: string; // mis. "A1"
  order: number;
  icon: string; // emoji untuk kartu
  explanation: string; // markdown sederhana (paragraf dipisah \n\n)
  notes: string;
  tables: GrammarTable[];
  examples: GrammarExample[];
  exercises: GrammarExercise[];
};
