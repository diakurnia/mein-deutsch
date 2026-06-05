"use client";

import { useState, useEffect } from "react";

export function SpeakButton({ text }: { text: string }) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  function speak() {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <button
      type="button"
      onClick={speak}
      disabled={!supported}
      title={supported ? "Dengar pengucapan" : "Browser tidak mendukung audio"}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-soft text-teal-deep transition hover:brightness-95 disabled:opacity-40"
    >
      🔊
    </button>
  );
}
