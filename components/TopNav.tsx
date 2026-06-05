import Link from "next/link";
import { SECTIONS } from "@/lib/sections";

/**
 * Top navbar: logo + tautan antar-section + tombol keluar.
 * Section yang belum tersedia tampil terkunci (🔒).
 */
export function TopNav({ activeSection }: { activeSection: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-teal-soft bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-1 px-4">
        <Link href="/grammar" className="mr-3 flex shrink-0 items-center gap-2">
          <span className="text-xl">🦉</span>
          <b className="text-sm font-extrabold text-slate-900">Mein-Deutsch</b>
        </Link>

        <nav className="flex flex-1 items-center gap-1 overflow-x-auto">
          {SECTIONS.map((s) => {
            const isActive = s.id === activeSection;
            if (!s.available) {
              return (
                <span
                  key={s.id}
                  title="Segera hadir"
                  className="flex shrink-0 cursor-default items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300"
                >
                  {s.icon} {s.label} <span className="text-[10px]">🔒</span>
                </span>
              );
            }
            return (
              <Link
                key={s.id}
                href={s.href!}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-teal-soft text-teal-deep"
                    : "text-slate-400 hover:bg-teal-bg"
                }`}
              >
                {s.icon} {s.label}
              </Link>
            );
          })}
        </nav>

        <form action="/auth/signout" method="post" className="ml-2 shrink-0">
          <button className="text-xs font-semibold text-slate-400 hover:text-teal-deep">
            Keluar
          </button>
        </form>
      </div>
    </header>
  );
}
