import Link from "next/link";
import { BookOpen, BookMarked, Award } from "lucide-react";
import { user, myCourses, certificates, toPersian } from "../data";
import { CourseCard } from "../course-card";

const inProgress = myCourses.filter((c) => c.status === "در حال یادگیری");

const stats = [
  {
    label: "دوره‌های من",
    value: myCourses.length,
    Icon: BookOpen,
    href: "/dashboard/courses",
  },
  {
    label: "دوره‌های فعال",
    value: inProgress.length,
    Icon: BookMarked,
    href: "/dashboard/courses",
  },
  {
    label: "گواهی‌ها",
    value: certificates.length,
    Icon: Award,
    href: "/dashboard/certificates",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          سلام، {user.name} 👋
        </h1>
        <p className="text-text-secondary">
          به پنل کاربری IDI CENTER خوش آمدید؛ یادگیری را از همین‌جا ادامه دهید.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map(({ label, value, Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col gap-4 border border-border bg-surface p-6 transition-colors hover:border-border-strong"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="text-3xl font-bold text-text-primary">
                {toPersian(value)}
              </span>
            </div>
            <span className="text-sm text-text-secondary">{label}</span>
          </Link>
        ))}
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-primary">در حال یادگیری</h2>
          <Link
            href="/dashboard/courses"
            className="text-sm font-medium text-accent-warm hover:underline"
          >
            مشاهده دوره‌های من
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {inProgress.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
