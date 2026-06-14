import { myCourses } from "../../data";
import { CourseCard } from "../../course-card";

const inProgress = myCourses.filter((c) => c.status === "در حال یادگیری");
const completed = myCourses.filter((c) => c.status === "تکمیل‌شده");

export default function MyCoursesPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          دوره‌های من
        </h1>
        <p className="text-text-secondary">
          دوره‌هایی که در آن‌ها ثبت‌نام کرده‌اید و وضعیت پیشرفت‌تان در هرکدام.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-text-primary">
          در حال یادگیری
          <span className="mr-2 text-sm font-normal text-text-muted">
            ({inProgress.length} دوره)
          </span>
        </h2>
        {inProgress.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-text-primary">
          تکمیل‌شده
          <span className="mr-2 text-sm font-normal text-text-muted">
            ({completed.length} دوره)
          </span>
        </h2>
        {completed.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </section>
    </div>
  );
}
