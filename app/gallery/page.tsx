"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Category = "مسکونی" | "تجاری" | "پالت‌چینی";

type Project = {
  id: number;
  title: string;
  student: string;
  category: Category;
  image: string;
  // نسبت ابعاد کاشی؛ هم در گرید و هم در lightbox از همین استفاده می‌شود.
  ratio: { w: number; h: number };
};

const projects: Project[] = [
  // ───────────── مسکونی ─────────────
  {
    id: 1,
    title: "نشیمن مدرن",
    student: "سارا محمدی",
    category: "مسکونی",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80",
    ratio: { w: 4, h: 3 },
  },
  {
    id: 2,
    title: "آشپزخانه‌ی مینیمال",
    student: "رضا کریمی",
    category: "مسکونی",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&q=80",
    ratio: { w: 3, h: 4 },
  },
  {
    id: 3,
    title: "اتاق خواب آرام",
    student: "علی رضایی",
    category: "مسکونی",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80",
    ratio: { w: 4, h: 5 },
  },
  {
    id: 4,
    title: "سرویس بهداشتی مدرن",
    student: "لیلا کاظمی",
    category: "مسکونی",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1000&q=80",
    ratio: { w: 3, h: 4 },
  },
  // ───────────── تجاری ─────────────
  {
    id: 5,
    title: "کافه‌ی دنج",
    student: "امیر تهرانی",
    category: "تجاری",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80",
    ratio: { w: 4, h: 3 },
  },
  {
    id: 6,
    title: "رستوران مدرن",
    student: "بهرام یوسفی",
    category: "تجاری",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80",
    ratio: { w: 3, h: 2 },
  },
  {
    id: 7,
    title: "هتل بوتیک",
    student: "مریم احمدی",
    category: "تجاری",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1000&q=80",
    ratio: { w: 4, h: 3 },
  },
  {
    id: 8,
    title: "دفتر کار مدرن",
    student: "نگار حسینی",
    category: "تجاری",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1000&q=80",
    ratio: { w: 1, h: 1 },
  },
  // ───────────── پالت‌چینی ─────────────
  {
    id: 9,
    title: "پالت رنگ و متریال",
    student: "پریسا نوری",
    category: "پالت‌چینی",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1000&q=80",
    ratio: { w: 1, h: 1 },
  },
  {
    id: 10,
    title: "مودبورد طراحی",
    student: "کاوه صادقی",
    category: "پالت‌چینی",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1000&q=80",
    ratio: { w: 4, h: 5 },
  },
  {
    id: 11,
    title: "بافت و متریال",
    student: "الهام صبوری",
    category: "پالت‌چینی",
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1000&q=80",
    ratio: { w: 3, h: 2 },
  },
  {
    id: 12,
    title: "ترکیب رنگ و بافت",
    student: "سینا مرادی",
    category: "پالت‌چینی",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1000&q=80",
    ratio: { w: 4, h: 3 },
  },
];

const categories: ("همه" | Category)[] = [
  "همه",
  "مسکونی",
  "تجاری",
  "پالت‌چینی",
];

function CategoryBadge({ category }: { category: Category }) {
  return (
    <span className="inline-block bg-accent-warm px-2.5 py-1 text-[11px] font-semibold text-black">
      {category}
    </span>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<"همه" | Category>("همه");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    active === "همه"
      ? projects
      : projects.filter((p) => p.category === active);

  // close lightbox on Escape + lock body scroll while open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <div className="bg-background">
      {/* ۱. Page Header */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-text-primary">
            گالری پروژه‌ها
          </h1>
          <p className="mt-4 text-base text-text-secondary">
            نمونه کارهای دانشجویان IDI
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* ۲. فیلتر دسته‌بندی */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-white shadow-[4px_4px_0_0_#5c5c5c]"
                    : "border border-border-strong text-text-secondary hover:border-text-muted hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ۳. Masonry Grid (CSS columns) */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setLightbox(p)}
              aria-label={`نمایش پروژه‌ی ${p.title}`}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden border border-border text-right"
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${p.ratio.w} / ${p.ratio.h}` }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* hover overlay با اطلاعات */}
                <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CategoryBadge category={p.category} />
                  <h3 className="text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/75">{p.student}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ۴. Lightbox — همان نسبت ابعاد کاشی، بزرگ‌تر و جا‌شده در ویوپورت */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="بستن"
            className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              width="24"
              height="24"
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

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="relative overflow-hidden border border-border bg-surface"
              style={{
                aspectRatio: `${lightbox.ratio.w} / ${lightbox.ratio.h}`,
                width: `min(90vw, calc(72vh * ${lightbox.ratio.w} / ${lightbox.ratio.h}))`,
              }}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col items-center gap-2 text-center">
              <CategoryBadge category={lightbox.category} />
              <h2 className="text-xl font-bold text-white">{lightbox.title}</h2>
              <p className="text-sm text-white/75">{lightbox.student}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
