import Image from "next/image";
import Link from "next/link";

// id is intentionally ignored — every profile shows this same fake data.
const instructor = {
  name: "مریم رضایی",
  title: "استاد طراحی داخلی مسکونی",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  specialties: [
    "طراحی داخلی مسکونی",
    "دکوراسیون",
    "نورپردازی فضا",
    "متریال‌شناسی",
  ],
  experienceYears: "۱۲",
  courseCount: "۸",
  studentCount: "+۲٬۵۰۰",
  bio: [
    "مریم رضایی طراح داخلی و معمارِ مسکونی با بیش از دوازده سال سابقه‌ی حرفه‌ای است. او در این سال‌ها ده‌ها پروژه‌ی مسکونی و تجاری را از مرحله‌ی ایده تا اجرا هدایت کرده و با استودیوهای معتبر داخلی و بین‌المللی همکاری داشته است.",
    "رویکرد او در طراحی، تلفیق زیبایی با کارکرد است؛ فضاهایی که هم چشم‌نواز باشند و هم پاسخ‌گوی نیاز واقعی زندگی روزمره. تمرکز اصلی او بر نورپردازی، ترکیب متریال و خلق فضاهای انسان‌محور است.",
    "مریم در کنار فعالیت حرفه‌ای، سال‌هاست که تدریس می‌کند و باور دارد آموزشِ پروژه‌محور و انتقال تجربه‌ی واقعی، مؤثرترین راه تربیت طراحان آینده است. دوره‌های او در IDI با همین نگاه طراحی شده‌اند.",
  ],
  education: [
    {
      year: "۱۳۹۴",
      degree: "دوره‌ی تخصصی طراحی داخلی پیشرفته",
      place: "آکادمی بین‌المللی طراحی، میلان",
    },
    {
      year: "۱۳۹۲",
      degree: "کارشناسی ارشد معماری داخلی",
      place: "دانشگاه هنر تهران",
    },
    {
      year: "۱۳۸۹",
      degree: "کارشناسی معماری",
      place: "دانشگاه تهران",
    },
  ],
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  courses: [
    {
      slug: "modern-interior-principles",
      title: "اصول طراحی داخلی مدرن",
      type: "حضوری" as "حضوری" | "آنلاین",
      level: "مقدماتی",
      price: "۴٬۸۰۰٬۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    },
    {
      slug: "advanced-interior-architecture",
      title: "معماری داخلی پیشرفته",
      type: "حضوری" as "حضوری" | "آنلاین",
      level: "پیشرفته",
      price: "۶٬۸۰۰٬۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    },
  ],
};

// All profiles render the same data, but static export needs the set of ids
// to pre-render. Keep in sync with the instructor list in app/instructors/page.tsx.
export function generateStaticParams() {
  return [
    { id: "maryam-rezaei" },
    { id: "ali-mohammadi" },
    { id: "sara-karimi" },
    { id: "reza-ahmadi" },
  ];
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

function StatItem({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-3xl font-bold text-text-primary">{value}</span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}

export default function InstructorProfilePage() {
  return (
    <div className="bg-background">
      {/* ۱. هدر — کارت منسجم: آواتار + هویت + شبکه‌های اجتماعی + آمار */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Breadcrumb name={instructor.name} />

          <div className="border border-border bg-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-right">
              {/* تصویر */}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-border-strong sm:h-36 sm:w-36">
                <Image
                  src={instructor.avatar}
                  alt={instructor.name}
                  fill
                  priority
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              {/* هویت: نام/عنوان + شبکه‌های اجتماعی (رو‌به‌روی نام)، تگ‌ها در ردیف بعد */}
              <div className="flex flex-1 flex-col items-center gap-4 sm:items-start">
                <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col items-center gap-1.5 sm:items-start">
                    <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
                      {instructor.name}
                    </h1>
                    <p className="text-accent-warm">{instructor.title}</p>
                  </div>

                  {/* شبکه‌های اجتماعی */}
                  <div className="flex shrink-0 gap-3">
                    <a
                      href={instructor.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="اینستاگرام"
                      className="flex h-10 w-10 items-center justify-center bg-accent text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href={instructor.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="لینکدین"
                      className="flex h-10 w-10 items-center justify-center bg-accent text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* تخصص‌ها */}
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
              </div>
            </div>

            {/* آمار (شامل سال‌های تجربه) */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <StatItem value={instructor.experienceYears} label="سال تجربه" />
              <StatItem
                value={instructor.courseCount}
                label="دوره فعال"
                className="border-x border-border"
              />
              <StatItem value={instructor.studentCount} label="دانشجو" />
            </div>
          </div>
        </div>
      </section>

      {/* ۲. بیو کامل */}
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

      {/* ۳. سوابق تحصیلی */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            سوابق تحصیلی
          </h2>
          <div className="flex flex-col gap-3">
            {instructor.education.map((item) => (
              <div
                key={item.degree}
                className="flex items-center gap-4 border border-border bg-background p-5"
              >
                <span className="shrink-0 border border-border-strong px-3 py-1.5 text-sm font-bold text-accent-warm">
                  {item.year}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ۴. دوره‌های فعال این استاد */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            دوره‌های فعال این استاد
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {instructor.courses.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group flex flex-col overflow-hidden border border-border bg-surface transition-shadow hover:shadow-lg"
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
                      className={`px-3 py-1 text-xs font-semibold ${
                        c.type === "حضوری"
                          ? "bg-accent-warm text-black"
                          : "bg-accent text-white"
                      }`}
                    >
                      {c.type}
                    </span>
                    <span className="bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {c.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {c.title}
                  </h3>
                  <div className="mt-auto pt-4">
                    <p className="text-base font-bold text-accent-warm">
                      {c.price}
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
    </div>
  );
}
