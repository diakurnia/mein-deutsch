export type ProgressStatus = "belum" | "dipelajari" | "selesai";

export type ProgressRow = {
  topic_id: string;
  status: ProgressStatus;
};

export function statusFor(rows: ProgressRow[], topicId: string): ProgressStatus {
  return rows.find((r) => r.topic_id === topicId)?.status ?? "belum";
}

export function summarize(rows: ProgressRow[], total: number) {
  const completed = rows.filter((r) => r.status === "selesai").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
