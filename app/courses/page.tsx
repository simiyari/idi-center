"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CourseType = "حضوری" | "آنلاین";

type Course = {
  slug: string;
  title: string;
  instructor: string;
  type: CourseType;
  category: string;
  level: string;
  price: number;
  image: string;
};

const allCourses: Course[] = [
  {
    slug: "modern-interior-principles",
    title: "اصول طراحی داخلی مدرن",
    instructor: "استاد مریم رضایی",
    type: "حضوری",
    category: "طراحی داخلی",
    level: "مقدماتی",
    price: 4800000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    slug: "interior-lighting",
    title: "نورپردازی در فضای داخلی",
    instructor: "استاد علی محمدی",
    type: "آنلاین",
    category: "معماری داخلی",
    level: "متوسط",
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  },
  {
    slug: "materials-and-decoration",
    title: "متریال‌شناسی و دکوراسیون",
    instructor: "استاد سارا کریمی",
    type: "حضوری",
    category: "طراحی داخلی",
    level: "متوسط",
    price: 5500000,
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  },
  {
    slug: "autocad-3dsmax",
    title: "طراحی با AutoCAD و 3ds Max",
    instructor: "استاد رضا احمدی",
    type: "آنلاین",
    category: "نرم‌افزار",
    level: "مقدماتی",
    price: 2900000,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    slug: "advanced-interior-architecture",
    title: "معماری داخلی پیشرفته",
    instructor: "استاد مریم رضایی",
    type: "حضوری",
    category: "معماری داخلی",
    level: "پیشرفته",
    price: 6800000,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    slug: "sketchup-3d-modeling",
    title: "مدل‌سازی سه‌بعدی با SketchUp",
    instructor: "استاد نگار حسینی",
    type: "آنلاین",
    category: "نرم‌افزار",
    level: "متوسط",
    price: 3500000,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const typeOptions = ["همه", "حضوری", "آنلاین"];
const categoryOptions = ["همه", "معماری داخلی", "طراحی داخلی", "نرم‌افزار"];
const levelOptions = ["همه", "مقدماتی", "متوسط", "پیشرفته"];

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between border-y border-white/10 bg-black px-8 py-4"
      >
        <span className="text-base font-semibold text-white">
          {label}
        </span>
        <svg
          className={`text-neutral-400 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col py-2">
            {options.map((opt) => {
              const selected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onChange(opt)}
                  className={`flex w-full items-center gap-3 px-8 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                    selected
                      ? "font-medium text-white"
                      : "text-neutral-300"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      selected ? "border-white" : "border-white/30"
                    }`}
                  >
                    {selected && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function typeBadgeClass(type: CourseType) {
  return type === "حضوری"
    ? "bg-accent-warm text-black"
    : "bg-accent text-white";
}

export default function CoursesPage() {
  const [type, setType] = useState("همه");
  const [category, setCategory] = useState("همه");
  const [level, setLevel] = useState("همه");
  const [open, setOpen] = useState(false);

  const filtered = allCourses.filter(
    (c) =>
      (type === "همه" || c.type === type) &&
      (category === "همه" || c.category === category) &&
      (level === "همه" || c.level === level)
  );

  const activeCount = [type, category, level].filter((v) => v !== "همه").length;

  const resetFilters = () => {
    setType("همه");
    setCategory("همه");
    setLevel("همه");
  };

  // close on Escape + lock body scroll while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="bg-background">
      {/* ۱. Page Header */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-text-primary">دوره‌ها</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            مجموعه دوره‌های تخصصی IDI در حوزه معماری داخلی، طراحی داخلی و
            نرم‌افزارهای تخصصی — به‌صورت حضوری و آنلاین، زیر نظر اساتید مجرب.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* toolbar: filter trigger + result count */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
            فیلترها
            {activeCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-white">
                {activeCount.toLocaleString("fa-IR")}
              </span>
            )}
          </button>

          <p className="text-sm text-text-muted">
            {filtered.length.toLocaleString("fa-IR")} دوره
          </p>
        </div>

        {/* ۳. Grid دوره‌ها */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group flex flex-col overflow-hidden border border-border bg-surface transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* badges overlaid on the image — simple sharp rectangles, top corners */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold ${typeBadgeClass(
                        course.type
                      )}`}
                    >
                      {course.type}
                    </span>
                    <span className="bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {course.instructor}
                  </p>
                  <div className="mt-auto pt-4">
                    <p className="text-base font-bold text-accent-warm">
                      {course.price.toLocaleString("fa-IR")} تومان
                    </p>
                    <span className="mt-3 block bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity group-hover:opacity-90">
                      مشاهده دوره
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border-strong py-20 text-center text-text-secondary">
            دوره‌ای با این فیلترها یافت نشد.
          </div>
        )}
      </section>

      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ۲. فیلتر — slide-in sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="فیلتر دوره‌ها"
        className={`fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-black shadow-2xl transition-transform duration-300 ease-in-out sm:w-[560px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[73px] shrink-0 items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">فیلترها</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="بستن فیلترها"
            className="flex h-9 w-9 items-center justify-center text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-2">
          <FilterGroup
            label="نوع دوره"
            options={typeOptions}
            value={type}
            onChange={setType}
          />
          <FilterGroup
            label="دسته‌بندی"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />
          <FilterGroup
            label="سطح"
            options={levelOptions}
            value={level}
            onChange={setLevel}
          />
        </div>

        <div className="flex items-center gap-3 border-t border-white/10 px-6 py-4">
          <button
            type="button"
            onClick={resetFilters}
            className="flex-1 bg-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
          >
            پاک کردن
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex-1 bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
          >
            نمایش {filtered.length.toLocaleString("fa-IR")} دوره
          </button>
        </div>
      </aside>
    </div>
  );
}
