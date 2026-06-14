"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { courses, type Course, type CourseType } from "../data";

function typeBadgeClass(type: CourseType) {
  return type === "حضوری" ? "bg-accent-warm text-black" : "bg-accent text-white";
}

function Breadcrumb({ title }: { title: string }) {
  const Separator = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-white/40"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  return (
    <nav aria-label="مسیر" className="flex flex-wrap items-center gap-2 text-sm">
      <Link href="/" className="text-white/70 transition-colors hover:text-white">
        خانه
      </Link>
      <Separator />
      <Link
        href="/courses"
        className="text-white/70 transition-colors hover:text-white"
      >
        دوره‌ها
      </Link>
      <Separator />
      <span className="line-clamp-1 text-white">{title}</span>
    </nav>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <span className="shrink-0 text-sm text-text-secondary">{label}</span>
      <span className="text-left text-sm font-semibold leading-6 text-text-primary">
        {value}
      </span>
    </div>
  );
}

// Up to 3 other courses in the same group (falling back to the same type).
function relatedCourses(course: Course): Course[] {
  const sameGroup = courses.filter(
    (c) => c.slug !== course.slug && c.group === course.group
  );
  const pool =
    sameGroup.length >= 3
      ? sameGroup
      : [
          ...sameGroup,
          ...courses.filter(
            (c) =>
              c.slug !== course.slug &&
              c.group !== course.group &&
              c.type === course.type
          ),
        ];
  return pool.slice(0, 3);
}

export default function CourseDetailClient({ course }: { course: Course }) {
  const [showContact, setShowContact] = useState(false);
  const related = relatedCourses(course);

  return (
    <div className="bg-background">
      {/* ۱. Hero — تصویر + عنوان و بِج‌ها روی گرادیان */}
      <section className="relative h-[24rem] w-full sm:h-[32rem]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-4xl flex-col justify-between px-6 py-8">
            <Breadcrumb title={course.title} />
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-3 py-1 text-xs font-semibold ${typeBadgeClass(
                    course.type
                  )}`}
                >
                  {course.type}
                </span>
                <span className="bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {course.group}
                </span>
                {course.status && (
                  <span className="bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {course.status}
                  </span>
                )}
              </div>
              <h1 className="max-w-3xl text-3xl font-bold leading-snug text-white sm:text-4xl">
                {course.title}
              </h1>
              {course.instructor && (
                <p className="text-sm text-white/80">
                  مدرس:{" "}
                  <span className="font-semibold text-accent-warm">
                    {course.instructor}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ۲. مشخصات دوره و ثبت‌نام */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            مشخصات دوره
          </h2>
          <div className="border border-border bg-surface p-6">
            <MetaRow
              label="قیمت دوره"
              value={`${course.price.toLocaleString("fa-IR")} تومان`}
            />
            {course.instructor && (
              <MetaRow label="مدرس" value={course.instructor} />
            )}
            {course.details.map((d) => (
              <MetaRow key={d.label} label={d.label} value={d.value} />
            ))}

            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="mt-6 w-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
            >
              ثبت‌نام در دوره
            </button>

            {showContact && (
              <div className="mt-4 border border-border bg-background p-5 text-sm leading-7 text-text-secondary">
                برای ثبت‌نام و هماهنگی، با ما در ارتباط باشید:
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href="tel:+982188123456"
                    dir="ltr"
                    className="self-start font-semibold text-accent-warm hover:underline"
                  >
                    ۰۲۱-۸۸۱۲۳۴۵۶
                  </a>
                  <a
                    href="mailto:info@idicenter.ir"
                    dir="ltr"
                    className="self-start font-semibold text-accent-warm hover:underline"
                  >
                    info@idicenter.ir
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ۳. دوره‌های مرتبط */}
      {related.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              دوره‌های مرتبط
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="group flex flex-col overflow-hidden border border-border bg-background transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold ${typeBadgeClass(
                          c.type
                        )}`}
                      >
                        {c.type}
                      </span>
                      {c.status && (
                        <span className="bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {c.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {c.title}
                    </h3>
                    {c.instructor && (
                      <p className="mt-2 text-sm text-text-secondary">
                        {c.instructor}
                      </p>
                    )}
                    <div className="mt-auto pt-4">
                      <p className="text-base font-bold text-accent-warm">
                        {c.price.toLocaleString("fa-IR")} تومان
                      </p>
                      <span className="mt-3 block bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity group-hover:opacity-90">
                        مشاهده دوره
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
