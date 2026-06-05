"use client";

import { useState } from "react";

function renderParagraph(text: string) {
  // Ubah **kata** menjadi highlight toska
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span
        key={i}
        className="rounded bg-teal-soft px-1 font-bold text-teal-deep"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((para, i) => (
        <p key={i} className="mb-3 leading-relaxed text-slate-700 last:mb-0">
          {renderParagraph(para)}
        </p>
      ))}
    </>
  );
}

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
