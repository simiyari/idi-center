import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InstructorAvatar from "@/app/components/InstructorAvatar";
import { instructors, getInstructor, coursesByInstructor } from "../data";

export function generateStaticParams() {
  return instructors.map((i) => ({ id: i.id }));
}

function Breadcrumb({ name }: { name: string }) {
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
      className="shrink-0 text-text-muted"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  return (
    <nav
      aria-label="مسیر"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm"
    >
      <Link
        href="/"
        className="text-text-secondary transition-colors hover:text-text-primary"
      >
        خانه
      </Link>
      <Separator />
      <Link
        href="/instructors"
        className="text-text-secondary transition-colors hover:text-text-primary"
      >
        اساتید
      </Link>
      <Separator />
      <span className="text-text-primary">{name}</span>
    </nav>
  );
}

function typeBadgeClass(type: "حضوری" | "آنلاین") {
  return type === "حضوری" ? "bg-accent-warm text-black" : "bg-accent text-white";
}

export default async function InstructorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const instructor = getInstructor(id);
  if (!instructor) notFound();

  const courses = coursesByInstructor(instructor.name);

  return (
    <div className="bg-background">
      {/* ۱. هدر — کارت هویت */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Breadcrumb name={instructor.name} />

          <div className="border border-border bg-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-right">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-border-strong sm:h-36 sm:w-36">
                <InstructorAvatar
                  name={instructor.name}
                  src={instructor.avatar}
                  sizes="144px"
                />
              </div>

              <div className="flex flex-1 flex-col items-center gap-4 sm:items-start">
                <div className="flex flex-col items-center gap-1.5 sm:items-start">
                  <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
                    {instructor.name}
                  </h1>
                  <p className="text-accent-warm">{instructor.title}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {instructor.specialties.map((s) => (
                    <span
                      key={s}
                      className="border border-border-strong px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-text-secondary">
                  <span className="font-bold text-text-primary">
                    {courses.length.toLocaleString("fa-IR")}
                  </span>{" "}
                  دوره فعال در IDI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ۲. بیو */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            درباره‌ی استاد
          </h2>
          <div className="flex flex-col gap-4">
            {instructor.bio.map((p, i) => (
              <p key={i} className="leading-8 text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ۳. دوره‌های این استاد */}
      {courses.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              دوره‌های این استاد
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {courses.map((c) => (
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
                      sizes="(max-width: 640px) 100vw, 50vw"
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
