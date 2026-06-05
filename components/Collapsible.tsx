"use client";

import { useState } from "react";

export function Collapsible({
  preview,
  full,
}: {
  preview: string;
  full: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className="whitespace-pre-line leading-relaxed text-slate-700">
        {open ? full : preview}
      </p>
      {full !== preview && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2 text-sm font-semibold text-teal-deep"
        >
          {open ? "▴ Tutup" : "▾ Baca selengkapnya"}
        </button>
      )}
    </div>
  );
}
