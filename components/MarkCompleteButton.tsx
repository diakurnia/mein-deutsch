"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function MarkCompleteButton({
  topicId,
  done,
}: {
  topicId: string;
  done: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function mark() {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    const { error } = await supabase.from("user_progress").upsert({
      user_id: user.id,
      topic_id: topicId,
      status: "selesai",
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    setLoading(false);
    if (error) {
      setError("Gagal menyimpan, coba lagi.");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={mark}
        disabled={loading || done}
        className="w-full rounded-xl bg-teal-brand px-4 py-3 font-extrabold text-teal-deep shadow-md transition hover:brightness-105 disabled:opacity-50"
      >
        {done ? "✓ Sudah Selesai" : "Tandai sebagai Selesai ✓"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
