// Jumlah topik pertama (berdasarkan `order`) yang bisa diakses tanpa login.
export const FREE_PREVIEW_LIMIT = 3;

export function isGuestLocked(order: number, user: unknown) {
  return !user && order > FREE_PREVIEW_LIMIT;
}
