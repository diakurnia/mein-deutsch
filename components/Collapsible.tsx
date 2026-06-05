"use client";

import { useState } from "react";
import { RichText } from "@/components/RichText";

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
      <RichText text={open ? full : preview} />
      {full !== preview && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-1 text-sm font-semibold text-teal-deep"
        >
          {open ? "▴ Tutup" : "▾ Baca selengkapnya"}
        </button>
      )}
    </div>
  );
}
