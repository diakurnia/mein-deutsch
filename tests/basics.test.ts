import { describe, it, expect } from "vitest";
import { getAllBasics, getBasic } from "@/content/basics";

describe("content basics", () => {
  it("mengembalikan topik fondasi berurutan", () => {
    const topics = getAllBasics();
    expect(topics.length).toBeGreaterThan(0);
    const orders = topics.map((t) => t.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("setiap jawaban latihan ada di dalam options", () => {
    for (const t of getAllBasics()) {
      for (const ex of t.exercises) {
        expect(ex.options).toContain(ex.answer);
      }
    }
  });

  it("setiap topik punya minimal 5 soal latihan", () => {
    for (const t of getAllBasics()) {
      expect(t.exercises.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("setiap topik punya minimal satu grup berisi item", () => {
    for (const t of getAllBasics()) {
      expect(t.groups.length).toBeGreaterThan(0);
      for (const g of t.groups) {
        expect(g.items.length).toBeGreaterThan(0);
      }
    }
  });

  it("getBasic mengembalikan topik sesuai id, atau undefined", () => {
    const first = getAllBasics()[0];
    expect(getBasic(first.id)?.id).toBe(first.id);
    expect(getBasic("tidak-ada")).toBeUndefined();
  });
});
