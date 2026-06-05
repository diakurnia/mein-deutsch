import { describe, it, expect } from "vitest";
import { summarize, statusFor, type ProgressRow } from "@/lib/progress";

const rows: ProgressRow[] = [
  { topic_id: "a", status: "selesai" },
  { topic_id: "b", status: "dipelajari" },
];

describe("progress helpers", () => {
  it("menghitung jumlah selesai dari total", () => {
    const s = summarize(rows, 5);
    expect(s.completed).toBe(1);
    expect(s.total).toBe(5);
    expect(s.percent).toBe(20);
  });

  it("statusFor mengembalikan status topik atau 'belum'", () => {
    expect(statusFor(rows, "a")).toBe("selesai");
    expect(statusFor(rows, "z")).toBe("belum");
  });
});
