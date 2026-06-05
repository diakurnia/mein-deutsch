"use client";

import { useState } from "react";
import type { GrammarExercise } from "@/content/types";

function ExerciseItem({ ex }: { ex: GrammarExercise }) {
  const [picked, setPicked] = useState<string | null>(null);
  const correct = picked === ex.answer;
  return (
    <div className="mb-4">
      <p className="mb-2 text-slate-800">{ex.question}</p>
      <div className="flex flex-wrap gap-2">
        {ex.options.map((opt) => {
          const isPicked = picked === opt;
          const cls = isPicked
            ? opt === ex.answer
              ? "bg-teal-brand text-teal-deep border-teal-brand"
              : "bg-red-100 text-red-700 border-red-300"
            : "border-teal-accent text-teal-deep";
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setPicked(opt)}
              className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className={`mt-2 text-sm font-semibold ${correct ? "text-teal-deep" : "text-red-600"}`}>
          {correct ? "✓ Benar!" : "✗ Coba lagi"}
        </p>
      )}
    </div>
  );
}

export function MiniExercise({ exercises }: { exercises: GrammarExercise[] }) {
  return (
    <div>
      {exercises.map((ex, i) => (
        <ExerciseItem key={i} ex={ex} />
      ))}
    </div>
  );
}
