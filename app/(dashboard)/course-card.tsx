import { CircleCheckBig } from "lucide-react";
import { type MyCourse, toPersian } from "./data";

export function CourseCard({ course }: { course: MyCourse }) {
  const done = course.status === "تکمیل‌شده";

  return (
    <article className="flex flex-col gap-4 border border-border bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-text-primary">{course.title}</h3>
          <p className="text-sm text-text-secondary">{course.instructor}</p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-1 text-xs font-semibold ${
            done
              ? "bg-accent-warm text-background"
              : "bg-surface-alt text-text-secondary"
          }`}
        >
          {done ? <CircleCheckBig size={14} aria-hidden="true" /> : null}
          {course.status}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="h-2 w-full overflow-hidden bg-surface-alt">
          <div
            className={`h-full ${done ? "bg-accent-warm" : "bg-accent"}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <span className="text-xs text-text-muted">
          {toPersian(course.progress)}٪ تکمیل‌شده
        </span>
      </div>
    </article>
  );
}
