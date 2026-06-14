import Link from "next/link";
import InstructorAvatar from "@/app/components/InstructorAvatar";
import { instructors, coursesByInstructor } from "./data";

export default function InstructorsPage() {
  return (
    <div className="bg-background">
      {/* ۱. تیتر صفحه */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-text-primary">اساتید IDI</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            با تیم اساتید مجرب IDI آشنا شوید؛ طراحان و معمارانِ فعالِ صنعت که
            دانش عملی خود را در قالب دوره‌های تخصصی با هنرجویان به اشتراک
            می‌گذارند.
          </p>
        </div>
      </section>

      {/* ۲. گرید اساتید */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((person) => {
            const courseCount = coursesByInstructor(person.name).length;
            return (
              <Link
                key={person.id}
                href={`/instructors/${person.id}`}
                className="group flex flex-col items-center gap-4 border border-border bg-surface p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-strong">
                  <InstructorAvatar
                    name={person.name}
                    src={person.avatar}
                    sizes="112px"
                    className="object-cover text-4xl transition-transform duration-300 will-change-transform transform-gpu backface-hidden group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold text-text-primary">
                    {person.name}
                  </h2>
                  <p className="text-sm text-accent-warm">{person.title}</p>
                </div>
                <div className="mt-auto flex w-full flex-col items-center gap-4">
                  <p className="text-sm text-text-secondary">
                    {courseCount.toLocaleString("fa-IR")} دوره
                  </p>
                  <span className="block w-full bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity group-hover:opacity-90">
                    مشاهده پروفایل
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
