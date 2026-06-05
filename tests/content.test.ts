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

  it("getTopic mengembalikan topik sesuai id, atau undefined", () => {
    expect(getTopic("artikel-nominativ")?.id).toBe("artikel-nominativ");
    expect(getTopic("tidak-ada")).toBeUndefined();
  });
});
