import Image from "next/image";
import Link from "next/link";

type Instructor = {
  id: string;
  name: string;
  specialty: string;
  courses: string;
  avatar: string;
};

const instructors: Instructor[] = [
  {
    id: "maryam-rezaei",
    name: "مریم رضایی",
    specialty: "طراحی داخلی مسکونی",
    courses: "۸",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "ali-mohammadi",
    name: "علی محمدی",
    specialty: "معماری داخلی و نورپردازی",
    courses: "۵",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: "sara-karimi",
    name: "سارا کریمی",
    specialty: "دکوراسیون و متریال",
    courses: "۶",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "reza-ahmadi",
    name: "رضا احمدی",
    specialty: "نرم‌افزارهای طراحی (AutoCAD و 3ds Max)",
    courses: "۴",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
];

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
          {instructors.map((person) => (
            <Link
              key={person.id}
              href={`/instructors/${person.id}`}
              className="group flex flex-col items-center gap-4 border border-border bg-surface p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-strong">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-300 will-change-transform transform-gpu backface-hidden group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-text-primary">
                  {person.name}
                </h2>
                <p className="text-sm text-accent-warm">{person.specialty}</p>
              </div>
              <div className="mt-auto flex w-full flex-col items-center gap-4">
                <p className="text-sm text-text-secondary">
                  {person.courses} دوره
                </p>
                <span className="block w-full bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity group-hover:opacity-90">
                  مشاهده پروفایل
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
