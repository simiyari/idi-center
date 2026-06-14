"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH_KEY } from "@/app/(dashboard)/data";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "دوره‌ها", href: "/courses" },
  { label: "اساتید", href: "/instructors" },
  { label: "گالری", href: "/gallery" },
  { label: "درباره IDI", href: "/about" },
];

// how far you must keep scrolling down before the bar collapses (~4 notches)
const HIDE_THRESHOLD = 320;

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  // وضعیت ورودِ فیک را بعد از هر جابه‌جایی بین صفحات از localStorage می‌خوانیم
  useEffect(() => {
    setAuthed(localStorage.getItem(AUTH_KEY) === "1");
  }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    let accumulated = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      if (delta > 0) {
        if (y <= 80) {
          accumulated = 0;
          return;
        }
        accumulated += delta;
        if (accumulated >= HIDE_THRESHOLD) setHidden(true);
      } else if (delta < 0) {
        accumulated = 0;
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu once the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // keep the bar visible while the mobile menu is open
  // آیا این لینکِ نوار، صفحه‌ی فعلی است؟ (تا خط آبی زیر آیتم جاری بماند)
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const isHidden = hidden && !open;

  return (
    <header
      style={{ willChange: "transform" }}
      className={`sticky top-0 z-50 transform-gpu border-b border-border bg-background/80 backdrop-blur-md transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-text-primary transition-colors hover:text-accent-warm"
        >
          IDI Center
        </Link>

        {/* desktop / tablet nav */}
        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative transition-colors after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 after:content-[''] ${
                        active
                          ? "text-text-primary after:scale-x-100"
                          : "text-text-secondary after:scale-x-0 hover:text-text-primary hover:after:scale-x-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href={authed ? "/dashboard" : "/login"}
            className="bg-accent px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {authed ? "حساب کاربری" : "ورود / ثبت‌نام"}
          </Link>
        </div>

        {/* hamburger toggle (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-end md:hidden"
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded bg-text-primary transition-transform duration-300 ${
                open ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-text-primary transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-text-primary transition-transform duration-300 ${
                open ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile dropdown panel */}
      <div
        className={`overflow-hidden border-border transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 py-3 text-base font-medium transition-colors ${
                    active
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span
                    className={`h-4 w-0.5 ${active ? "bg-accent" : "bg-transparent"}`}
                    aria-hidden="true"
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-6 pb-4 pt-1">
          <Link
            href={authed ? "/dashboard" : "/login"}
            onClick={() => setOpen(false)}
            className="block bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {authed ? "حساب کاربری" : "ورود / ثبت‌نام"}
          </Link>
        </div>
      </div>
    </header>
  );
}
