"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, BookOpen, Award, User, LogOut } from "lucide-react";
import { user, AUTH_KEY } from "./data";

const initials = user.name
  .trim()
  .split(/\s+/)
  .map((part) => part[0] ?? "")
  .slice(0, 2)
  .join("");

const navItems = [
  { label: "داشبورد", href: "/dashboard", Icon: LayoutDashboard },
  { label: "دوره‌های من", href: "/dashboard/courses", Icon: BookOpen },
  { label: "گواهی‌ها", href: "/dashboard/certificates", Icon: Award },
  { label: "پروفایل", href: "/dashboard/profile", Icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // خروج فیک: وضعیت ورود پاک و کاربر به صفحه‌ی ورود برمی‌گردد
  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    router.push("/login");
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[16rem_1fr]">
        <aside className="h-fit border border-border bg-surface p-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3 border-b border-border pb-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
              {initials}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-semibold text-text-primary">
                {user.name}
              </span>
              <span dir="ltr" className="truncate text-right text-xs text-text-muted">
                {user.email}
              </span>
            </div>
          </div>

          <nav className="mt-5">
            <ul className="flex flex-col gap-1">
              {navItems.map(({ label, href, Icon }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-accent text-white shadow-[4px_4px_0_0_#5c5c5c]"
                          : "text-text-secondary hover:bg-surface-alt hover:text-text-primary"
                      }`}
                    >
                      <Icon size={18} aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-5 flex w-full items-center gap-3 border-t border-border px-3 pt-5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-warm"
          >
            <LogOut size={18} aria-hidden="true" />
            خروج
          </button>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
