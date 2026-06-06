"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  id: string;
  label: string;
  icon: string;
  href: string | null;
  available: boolean;
};

export function AppSidebar({
  firstTopicId,
  userInitial,
  userName,
}: {
  firstTopicId: string;
  userInitial: string;
  userName: string;
}) {
  const pathname = usePathname();

  const NAV: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: "🏠", href: "/dashboard", available: true },
    { id: "grammar", label: "Grammar", icon: "📐", href: `/grammar/${firstTopicId}`, available: true },
    { id: "vocabulary", label: "Vocabulary", icon: "📚", href: null, available: false },
    { id: "listening", label: "Listening", icon: "🎧", href: null, available: false },
    { id: "review", label: "Review & Quiz", icon: "✅", href: null, available: false },
  ];

  function isActive(id: string): boolean {
    if (id === "dashboard") return pathname === "/dashboard";
    if (id === "grammar") return pathname.startsWith("/grammar/");
    return false;
  }

  return (
    <aside className="flex shrink-0 flex-col border-b border-teal-soft bg-white lg:h-screen lg:w-60 lg:border-b-0 lg:border-r lg:sticky lg:top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-4">
        <span className="text-2xl">🇩🇪</span>
        <b className="text-lg font-extrabold text-slate-900">Mein-Deutsch</b>
      </div>

      {/* Nav */}
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {NAV.map((item) => {
          const active = isActive(item.id);
          const base =
            "flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition";
          if (!item.available) {
            return (
              <span
                key={item.id}
                title="Segera hadir"
                className={`${base} cursor-default text-slate-300`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="ml-auto hidden text-xs lg:inline">🔒</span>
              </span>
            );
          }
          return (
            <Link
              key={item.id}
              href={item.href!}
              className={`${base} ${
                active
                  ? "bg-teal-soft text-teal-deep"
                  : "text-slate-500 hover:bg-teal-bg"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Kartu promo (desktop saja) */}
      <div className="mx-3 mb-3 hidden rounded-2xl bg-gradient-to-br from-teal-bg to-teal-soft p-4 lg:block">
        <div className="mb-2 text-3xl">🏛️</div>
        <h4 className="text-sm font-bold text-slate-900">Belajar Bahasa Jerman</h4>
        <p className="mt-1 text-xs text-slate-500">
          Langkah kecil hari ini, kemajuan besar esok hari.
        </p>
      </div>

      {/* Profil user (desktop saja) */}
      <div className="hidden items-center gap-3 border-t border-teal-soft px-4 py-3 lg:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-brand text-sm font-extrabold text-teal-deep">
          {userInitial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900">{userName}</p>
          <p className="text-[11px] text-slate-400">A1 Beginner</p>
        </div>
        <form action="/auth/signout" method="post">
          <button
            title="Keluar"
            className="text-slate-400 transition hover:text-teal-deep"
          >
            ⏻
          </button>
        </form>
      </div>
    </aside>
  );
}
