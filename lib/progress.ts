export type ProgressStatus = "belum" | "dipelajari" | "selesai";

export type ProgressRow = {
  topic_id: string;
  status: ProgressStatus;
  completed_at?: string | null;
};

/**
 * Hitung aktivitas per hari untuk 7 hari terakhir.
 * Gunakan completed_at dari user_progress sebagai sumber aktivitas.
 * Kembalikan array 7 elemen [6 hari lalu, ..., hari ini].
 */
export function weeklyActivity(rows: ProgressRow[]): number[] {
  const counts: number[] = Array(7).fill(0);
  const now = new Date();

  for (const r of rows) {
    if (!r.completed_at) continue;
    const d = new Date(r.completed_at);
    const diffDays = Math.floor(
      (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays >= 0 && diffDays < 7) {
      counts[6 - diffDays] += 1; // index 6 = hari ini
    }
  }
  return counts;
}

/**
 * Berapa topik yang diselesaikan HARI INI (berdasarkan completed_at).
 */
export function completedTodayCount(rows: ProgressRow[]): number {
  const today = new Date().toISOString().slice(0, 10);
  return rows.filter(
    (r) => r.completed_at && r.completed_at.slice(0, 10) === today
  ).length;
}

/**
 * Hitung streak: berapa hari berturut-turut (ke belakang dari hari ini)
 * ada setidaknya 1 topik yang diselesaikan.
 */
export function calcStreak(rows: ProgressRow[]): number {
  const activeDays = new Set<string>();
  for (const r of rows) {
    if (!r.completed_at) continue;
    const d = new Date(r.completed_at);
    activeDays.add(d.toISOString().slice(0, 10)); // YYYY-MM-DD
  }

  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (activeDays.has(key)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function statusFor(rows: ProgressRow[], topicId: string): ProgressStatus {
  return rows.find((r) => r.topic_id === topicId)?.status ?? "belum";
}

export function summarize(rows: ProgressRow[], total: number) {
  const completed = rows.filter((r) => r.status === "selesai").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}

/**
 * Seperti summarize(), tapi hanya menghitung topik yang id-nya ada
 * dalam daftar `ids` (untuk progress per-pilar).
 */
export function summarizeFor(rows: ProgressRow[], ids: string[]) {
  const idSet = new Set(ids);
  const completed = rows.filter(
    (r) => r.status === "selesai" && idSet.has(r.topic_id)
  ).length;
  const total = ids.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
