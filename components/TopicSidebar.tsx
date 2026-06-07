"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProgressStatus } from "@/lib/progress";

export type SidebarItem = {
  id: string;
  title: string;
  order: number;
  status: ProgressStatus;
  locked?: boolean;
};

const BADGE: Record<ProgressStatus, string> = {
  belum: "⚪",
  dipelajari: "🔵",
  selesai: "✅",
};

export function TopicSidebar({
  items,
  activeId,
  completed,
  total,
  basePath = "/grammar",
  sectionLabel = "Grammar A1",
}: {
  items: SidebarItem[];
  activeId: string;
  completed: number;
  total: number;
  basePath?: string;
  sectionLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <>
      {/* Tombol toggle untuk mobile */}
      <button
        onClick={() => setOpen(true)}
        className="mb-3 flex items-center gap-2 rounded-lg border border-teal-soft bg-white px-3 py-2 text-sm font-semibold text-teal-deep lg:hidden"
      >
        ☰ Daftar Topik
      </button>

      {/* Overlay backdrop di mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-teal-soft bg-white transition-transform lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0`}
      >
        <div className="flex items-center justify-between border-b border-teal-soft/70 px-3 py-2.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            {sectionLabel}
          </h4>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 lg:hidden"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-1">
          {items.map((it) => {
            const isActive = it.id === activeId;
            if (it.locked) {
              return (
                <span
                  key={it.id}
                  className="flex cursor-default items-center gap-2 border-l-[3px] border-transparent px-3 py-2 text-xs text-slate-300"
                >
                  <span className="w-4 shrink-0 text-[10px] text-slate-300">{it.order}</span>
                  <span className="flex-1 leading-tight">{it.title}</span>
                  <span className="shrink-0 text-[11px]">🔒</span>
                </span>
              );
            }
            return (
              <Link
                key={it.id}
                href={`${basePath}/${it.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 border-l-[3px] px-3 py-2 text-xs transition ${
                  isActive
                    ? "border-teal-brand bg-teal-bg font-bold text-teal-deep"
                    : "border-transparent text-slate-600 hover:bg-teal-bg"
                }`}
              >
                <span className="w-4 shrink-0 text-[10px] text-slate-400">
                  {it.order}
                </span>
                <span className="flex-1 leading-tight">{it.title}</span>
                <span className="shrink-0 text-[11px]">{BADGE[it.status]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-teal-soft/70 px-3 py-2.5">
          <p className="text-[11px] text-slate-400">
            {completed}/{total} selesai
          </p>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-teal-soft">
            <div
              className="h-full rounded-full bg-teal-brand"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
