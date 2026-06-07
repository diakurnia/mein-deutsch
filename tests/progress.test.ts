import { describe, it, expect } from "vitest";
import { summarize, statusFor, summarizeFor, type ProgressRow } from "@/lib/progress";

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

describe("summarizeFor", () => {
  const rows = [
    { topic_id: "a", status: "selesai" as const },
    { topic_id: "b", status: "selesai" as const },
    { topic_id: "x", status: "selesai" as const },
    { topic_id: "c", status: "dipelajari" as const },
  ];

  it("hanya menghitung selesai yang id-nya termasuk dalam daftar", () => {
    const res = summarizeFor(rows, ["a", "b", "c"]);
    expect(res.completed).toBe(2);
    expect(res.total).toBe(3);
    expect(res.percent).toBe(67);
  });

  it("mengembalikan 0 saat daftar id kosong", () => {
    const res = summarizeFor(rows, []);
    expect(res).toEqual({ completed: 0, total: 0, percent: 0 });
  });
});
