import Image from "next/image";
import Link from "next/link";
import FaqItem from "./components/FaqItem";

const courses = [
  {
    slug: "modern-interior-principles",
    title: "اصول طراحی داخلی مدرن",
    instructor: "استاد مریم رضایی",
    type: "حضوری",
    price: "۴٬۸۰۰٬۰۰۰ تومان",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    slug: "interior-lighting",
    title: "نورپردازی در فضای داخلی",
    instructor: "استاد علی محمدی",
    type: "آنلاین",
    price: "۳٬۲۰۰٬۰۰۰ تومان",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  },
  {
    slug: "materials-and-decoration",
    title: "متریال‌شناسی و دکوراسیون",
    instructor: "استاد سارا کریمی",
    type: "حضوری",
    price: "۵٬۵۰۰٬۰۰۰ تومان",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  },
];

const features = [
  {
    title: "اساتید مجرب",
    desc: "تدریس توسط طراحان حرفه‌ای و فعالِ صنعت معماری و طراحی داخلی.",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    title: "مدرک معتبر",
    desc: "ارائه گواهی پایان دوره مورد تأیید، قابل ارائه در رزومه‌ی حرفه‌ای.",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
  },
  {
    title: "آموزش پروژه‌محور",
    desc: "یادگیری عملی با تمرین‌ها و پروژه‌های واقعی، نه صرفاً تئوری.",
    icon: (
      <>
        <path d="m12 2 9 4.5v9L12 22l-9-6.5v-9L12 2z" />
        <path d="m3 6.5 9 4.5 9-4.5M12 11v11" />
      </>
    ),
  },
  {
    title: "پشتیبانی دائم",
    desc: "همراهی و پاسخ‌گویی مدرسان حتی پس از پایان دوره.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
];

const inPersonPerks = [
  "تعامل مستقیم و چهره‌به‌چهره با استاد",
  "دسترسی به کارگاه، متریال و نمونه‌های واقعی",
  "کار گروهی و نقد پروژه‌ها در کلاس",
];

const onlinePerks = [
  "شرکت در کلاس از هر نقطه‌ی کشور",
  "دسترسی به ویدیوهای ضبط‌شده برای مرور",
  "انعطاف زمانی و صرفه‌جویی در رفت‌وآمد",
];

const instructors = [
  {
    id: "maryam-rezaei",
    name: "مریم رضایی",
    specialty: "طراحی داخلی مسکونی",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    id: "ali-mohammadi",
    name: "علی محمدی",
    specialty: "معماری داخلی و نورپردازی",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    id: "sara-karimi",
    name: "سارا کریمی",
    specialty: "دکوراسیون و متریال",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
];

const stats = [
  { value: "+۲٬۵۰۰", label: "دانشجو" },
  { value: "+۱۲۰", label: "دوره آموزشی" },
  { value: "۱۵", label: "سال فعالیت" },
];

const testimonials = [
  {
    name: "نگار حسینی",
    role: "دانشجوی دوره طراحی داخلی",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "دوره‌ها کاملاً کاربردی بودند و با پروژه‌های واقعی یاد گرفتم. الان با اعتمادبه‌نفس پروژه می‌گیرم.",
  },
  {
    name: "رضا احمدی",
    role: "دانشجوی دوره نرم‌افزار",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "کیفیت تدریس اساتید واقعاً بالا بود و پشتیبانی بعد از کلاس کمک زیادی به من کرد.",
  },
  {
    name: "سحر کاظمی",
    role: "دانشجوی دوره دکوراسیون",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    quote:
      "محیط آموزشی حرفه‌ای و دسترسی به متریال واقعی، تجربه‌ی یادگیری را کاملاً متفاوت کرد.",
  },
];

const faqs = [
  {
    q: "برای شرکت در دوره‌ها به دانش قبلی نیاز دارم؟",
    a: "خیر. بسیاری از دوره‌ها از سطح مقدماتی شروع می‌شوند و برای علاقه‌مندان بدون پیش‌زمینه طراحی شده‌اند. سطح هر دوره در صفحه‌ی آن مشخص شده است.",
  },
  {
    q: "آیا پس از پایان دوره مدرک ارائه می‌شود؟",
    a: "بله. در پایان هر دوره گواهی پایان دوره‌ی مورد تأیید IDI صادر می‌شود که قابل ارائه در رزومه‌ی حرفه‌ای است.",
  },
  {
    q: "تفاوت کلاس‌های حضوری و آنلاین چیست؟",
    a: "کلاس‌های حضوری شامل تعامل مستقیم با استاد و دسترسی به کارگاه و متریال است، در حالی که کلاس‌های آنلاین انعطاف زمانی و امکان شرکت از راه دور را فراهم می‌کنند.",
  },
  {
    q: "امکان پرداخت اقساطی شهریه وجود دارد؟",
    a: "برای برخی دوره‌ها امکان پرداخت مرحله‌ای فراهم است. برای اطلاع از شرایط، با پشتیبانی تماس بگیرید.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* ۱. Hero Section */}
      <section className="relative h-[36rem] w-full">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="فضای داخلی شیک"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            مرکز تخصصی طراحی داخلی
          </h1>
          <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
            آموزش آکادمیک معماری داخلی و طراحی داخلی
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] transition-opacity hover:opacity-90"
            >
              مشاهده دوره‌ها
            </Link>
            <Link
              href="/about"
              className="bg-neutral-200 px-8 py-3 text-base font-semibold text-neutral-900 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] transition-opacity hover:opacity-90"
            >
              درباره IDI
            </Link>
          </div>
        </div>
      </section>

      {/* ۲. چرا IDI — ویژگی‌ها */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-accent-warm">
              چرا IDI؟
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              یک قدم جلوتر از یک آموزش معمولی
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 border border-border bg-background p-5 sm:gap-4 sm:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-accent text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ۳. دوره‌های ویژه */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold text-accent-warm">
            آموزش تخصصی
          </p>
          <h2 className="text-3xl font-bold text-text-primary">
            دوره‌های برگزیده
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
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
                <span
                  className={`absolute right-3 top-3 px-3 py-1 text-xs font-semibold ${
                    course.type === "حضوری"
                      ? "bg-accent-warm text-black"
                      : "bg-accent text-white"
                  }`}
                >
                  {course.type}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-text-primary">
                  {course.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {course.instructor}
                </p>
                <p className="mt-1 text-base font-bold text-accent-warm">
                  {course.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
          >
            مشاهده همه دوره‌ها
          </Link>
        </div>
      </section>

      {/* ۴. کلاس‌های حضوری */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
              alt="کلاس حضوری"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute right-3 top-3 bg-accent-warm px-3 py-1 text-xs font-semibold text-black">
              حضوری
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold text-accent-warm">
              کلاس‌های حضوری
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              یادگیری از نزدیک، در فضای حرفه‌ای کارگاه
            </h2>
            <p className="leading-7 text-text-secondary">
              کلاس‌های حضوری IDI در فضایی استاندارد و مجهز برگزار می‌شوند؛ جایی
              که می‌توانید مستقیم با استاد در ارتباط باشید و با متریال و نمونه‌های
              واقعی کار کنید.
            </p>
            <ul className="flex flex-col gap-3">
              {inPersonPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-sm text-text-secondary"
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
                    className="shrink-0 text-accent-warm"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/courses?type=in-person"
                className="inline-block bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
              >
                دوره‌های حضوری
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ۵. کلاس‌های آنلاین */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-5 lg:order-1">
            <p className="text-sm font-semibold text-accent-warm">
              کلاس‌های آنلاین
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              آموزش با کیفیت، از هر جای ایران
            </h2>
            <p className="leading-7 text-text-secondary">
              اگر امکان حضور فیزیکی ندارید، دوره‌های آنلاین IDI همان کیفیت و
              محتوای حرفه‌ای را به‌صورت زنده و تعاملی در اختیار شما می‌گذارند.
            </p>
            <ul className="flex flex-col gap-3">
              {onlinePerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-sm text-text-secondary"
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
                    className="shrink-0 text-accent-warm"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/courses?type=online"
                className="inline-block bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
              >
                دوره‌های آنلاین
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80"
              alt="کلاس آنلاین"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute right-3 top-3 bg-accent px-3 py-1 text-xs font-semibold text-white">
              آنلاین
            </span>
          </div>
        </div>
      </section>

      {/* ۶. اساتید برتر */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-accent-warm">
              تیم ما
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              اساتید IDI
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {instructors.map((person) => (
              <Link
                key={person.id}
                href={`/instructors/${person.id}`}
                className="group flex flex-col items-center gap-4 border border-border bg-background p-8 text-center transition-shadow hover:shadow-lg"
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
                <h3 className="text-lg font-semibold text-text-primary">
                  {person.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {person.specialty}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/instructors"
              className="inline-block bg-neutral-200 px-8 py-3 text-base font-semibold text-neutral-900 shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
            >
              مشاهده همه اساتید
            </Link>
          </div>
        </div>
      </section>

      {/* ۷. آمار */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 py-16 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-accent-warm">
                {stat.value}
              </span>
              <span className="text-base text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ۸. نظرات دانشجویان */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold text-accent-warm">
            تجربه‌ی دانشجویان
          </p>
          <h2 className="text-3xl font-bold text-text-primary">
            آن‌ها از IDI چه می‌گویند
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col gap-5 border border-border bg-surface p-6"
            >
              <blockquote className="leading-7 text-text-secondary">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="relative h-11 w-11 overflow-hidden rounded-full border border-border-strong">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-text-primary">
                    {item.name}
                  </span>
                  <span className="text-xs text-text-muted">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ۹. سوالات متداول */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-accent-warm">
              سوالات متداول
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              پاسخ پرسش‌های پرتکرار
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ۱۰. دعوت به اقدام نهایی */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="ثبت‌نام در IDI"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            آماده‌ی شروع مسیر حرفه‌ای خود هستید؟
          </h2>
          <p className="max-w-xl text-lg text-white/80">
            همین امروز در دوره‌های تخصصی IDI ثبت‌نام کنید و اولین قدم را بردارید.
          </p>
          <Link
            href="/courses"
            className="bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] transition-opacity hover:opacity-90"
          >
            شروع کنید
          </Link>
        </div>
      </section>
    </div>
  );
}
