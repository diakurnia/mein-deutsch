import { describe, it, expect } from "vitest";
import { getAllTopics, getTopic } from "@/content/topics";

describe("content topics", () => {
  it("mengembalikan minimal satu topik berurutan", () => {
    const topics = getAllTopics();
    expect(topics.length).toBeGreaterThan(0);
    const orders = topics.map((t) => t.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("setiap jawaban latihan ada di dalam options", () => {
    for (const t of getAllTopics()) {
      for (const ex of t.exercises) {
        expect(ex.options).toContain(ex.answer);
      }
    }
  });

  it("setiap topik punya minimal 5 soal latihan", () => {
    for (const t of getAllTopics()) {
      expect(t.exercises.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("getTopic mengembalikan topik sesuai id, atau undefined", () => {
    const first = getAllTopics()[0];
    expect(getTopic(first.id)?.id).toBe(first.id);
    expect(getTopic("tidak-ada")).toBeUndefined();
  });
});
