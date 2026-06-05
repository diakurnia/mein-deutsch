import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MiniExercise } from "@/components/MiniExercise";

const exercises = [
  { question: "___ Tisch ist groß.", options: ["der", "die", "das"], answer: "der" },
];

describe("MiniExercise", () => {
  it("menampilkan benar saat jawaban tepat", () => {
    render(<MiniExercise exercises={exercises} />);
    fireEvent.click(screen.getByRole("button", { name: "der" }));
    expect(screen.getByText(/Benar/i)).toBeInTheDocument();
  });

  it("menampilkan salah saat jawaban keliru", () => {
    render(<MiniExercise exercises={exercises} />);
    fireEvent.click(screen.getByRole("button", { name: "die" }));
    expect(screen.getByText(/Coba lagi/i)).toBeInTheDocument();
  });
});
