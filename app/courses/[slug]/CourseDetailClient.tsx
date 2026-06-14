"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import jalaali from "jalaali-js";

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

// Persian digits without thousands separator (for counts, dates).
const faDigits = (n: number) => n.toLocaleString("fa-IR", { useGrouping: false });

// Gregorian [y, m, d] → Jalali display string (e.g. «۲۴ تیر ۱۴۰۵»).
function formatJalali([gy, gm, gd]: [number, number, number]) {
  const j = jalaali.toJalaali(gy, gm, gd);
  return `${faDigits(j.jd)} ${persianMonths[j.jm - 1]} ${faDigits(j.jy)}`;
}

// slug is intentionally ignored — every course shows this same fake data.
const course = {
  title: "اصول طراحی داخلی مدرن",
  type: "حضوری" as "حضوری" | "آنلاین",
  level: "مقدماتی",
  price: 4800000,
  sessions: 12,
  sessionDuration: "۲ ساعت",
  schedule: "سه‌شنبه‌ها، ۱۷:۰۰ تا ۱۹:۰۰",
  location: "تهران، سعادت‌آباد، ساختمان IDI",
  prerequisite: "بدون پیش‌نیاز",
  startGregorian: [2026, 7, 15] as [number, number, number],
  capacityRemaining: 6,
  heroImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
  instructor: {
    name: "مریم رضایی",
    slug: "maryam-rezaei",
    specialty: "طراحی داخلی مسکونی",
    bio: "مریم رضایی با بیش از ده سال تجربه در طراحی داخلی فضاهای مسکونی و همکاری با استودیوهای معتبر، اکنون دانش عملی خود را در قالب دوره‌های کاربردی IDI با هنرجویان به اشتراک می‌گذارد.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  description: [
    "دوره‌ی «اصول طراحی داخلی مدرن» یک برنامه‌ی جامع و کاربردی است که شما را با مبانی، اصول و فرایند طراحی فضاهای داخلی مدرن آشنا می‌کند؛ از شکل‌گیری ایده تا ارائه‌ی یک پروژه‌ی کامل.",
    "در طول این دوره از مفاهیم پایه‌ای مانند ترکیب‌بندی، تناسبات، رنگ و نور شروع می‌کنیم و گام‌به‌گام تا اجرای یک پروژه‌ی واقعی پیش می‌رویم. تمرکز اصلی بر یادگیری عملی است، نه صرفاً تئوری.",
    "هر جلسه شامل تمرین‌های هدفمند و نقد پروژه‌ها در محیطی حرفه‌ای است، تا در پایان دوره بتوانید با اعتمادبه‌نفس یک فضای داخلی را از صفر طراحی و ارائه کنید.",
  ],
  syllabus: [
    {
      title: "مقدمه‌ای بر طراحی داخلی مدرن",
      desc: "آشنایی با تاریخچه، سبک‌ها و اصول بنیادین طراحی مدرن و جایگاه آن در فضای امروز.",
    },
    {
      title: "اصول ترکیب‌بندی و فضاسازی",
      desc: "نحوه‌ی چیدمان، تناسبات و ایجاد تعادل و ریتم بصری در فضای داخلی.",
    },
    {
      title: "رنگ، نور و متریال",
      desc: "انتخاب پالت رنگی هماهنگ، اصول نورپردازی و انتخاب متریال‌های متناسب با کاربری فضا.",
    },
    {
      title: "نقشه‌کشی و پلان‌بندی",
      desc: "ترسیم پلان، مبلمان‌چینی اصولی و بهینه‌سازی گردش و عملکرد فضا.",
    },
    {
      title: "اجرای پروژه‌ی نهایی",
      desc: "طراحی کامل یک فضای داخلی واقعی از ایده‌پردازی تا ارائه‌ی نهایی به کارفرما.",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      alt: "فضای داخلی کارگاه",
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      alt: "کلاس حضوری دوره",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      alt: "نمونه پروژه‌ی هنرجویان",
    },
    {
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
      alt: "دکوراسیون و چیدمان فضا",
    },
    {
      src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
      alt: "نورپردازی فضای داخلی",
    },
  ],
};

const startJalali = formatJalali(course.startGregorian);

type Review = {
  name: string;
  avatar?: string;
  rating: number;
  dateGregorian: [number, number, number];
  text: string;
  verified: boolean;
};

const seedReviews: Review[] = [
  {
    name: "آرش نیک‌پور",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    dateGregorian: [2026, 5, 20],
    text: "دوره فوق‌العاده کاربردی بود. از همان جلسه‌ی اول با یک پروژه‌ی واقعی کار کردیم و استاد رضایی با حوصله تک‌تک ایرادها را نقد می‌کرد.",
    verified: true,
  },
  {
    name: "الهام صبوری",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    dateGregorian: [2026, 5, 12],
    text: "بهترین چیزی که یاد گرفتم نحوه‌ی ترکیب رنگ و نور بود. الان با اعتمادبه‌نفس پروژه‌های مسکونی را شروع می‌کنم.",
    verified: true,
  },
  {
    name: "پریسا احمدی",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 4,
    dateGregorian: [2026, 4, 28],
    text: "محتوای دوره عالی بود، فقط کاش تعداد جلسات کمی بیشتر بود تا روی بخش متریال‌شناسی وقت بیشتری می‌گذاشتیم.",
    verified: true,
  },
  {
    name: "محمد رستمی",
    rating: 5,
    dateGregorian: [2026, 4, 15],
    text: "کیفیت کارگاه و دسترسی به نمونه‌های واقعی واقعاً تفاوت ایجاد کرد. کاملاً ارزشش را داشت و پیشنهاد می‌کنم.",
    verified: true,
  },
  {
    name: "نیلوفر کریمی",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 4,
    dateGregorian: [2026, 3, 30],
    text: "استاد کاملاً مسلط بود و پشتیبانی بعد از کلاس هم خوب بود. سرفصل‌ها منظم و پله‌پله جلو می‌رفت.",
    verified: true,
  },
  {
    name: "سینا مرادی",
    rating: 3,
    dateGregorian: [2026, 3, 10],
    text: "دوره خوب بود، ولی برای منی که کمی پیش‌زمینه داشتم، نیمه‌ی اول کلاس‌ها کمی کند پیش رفت.",
    verified: true,
  },
];

type RelatedCourse = {
  slug: string;
  title: string;
  instructor: string;
  type: "حضوری" | "آنلاین";
  level: string;
  price: number;
  image: string;
};

const relatedCourses: RelatedCourse[] = [
  {
    slug: "interior-lighting",
    title: "نورپردازی در فضای داخلی",
    instructor: "استاد علی محمدی",
    type: "آنلاین",
    level: "متوسط",
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  },
  {
    slug: "materials-and-decoration",
    title: "متریال‌شناسی و دکوراسیون",
    instructor: "استاد سارا کریمی",
    type: "حضوری",
    level: "متوسط",
    price: 5500000,
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  },
  {
    slug: "advanced-interior-architecture",
    title: "معماری داخلی پیشرفته",
    instructor: "استاد مریم رضایی",
    type: "حضوری",
    level: "پیشرفته",
    price: 6800000,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
];

const STAR_PATH =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

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

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={i <= rating ? "text-accent-warm" : "text-border-strong"}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          onMouseEnter={() => setHover(i)}
          aria-label={`${faDigits(i)} ستاره`}
          aria-pressed={value === i}
          className="p-0.5 transition-transform hover:scale-110"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={i <= shown ? "text-accent-warm" : "text-border-strong"}
          >
            <path d={STAR_PATH} />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewAvatar({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border-strong">
        <Image src={src} alt={name} fill sizes="44px" className="object-cover" />
      </span>
    );
  }
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong bg-accent text-base font-semibold text-white">
      {name.trim().charAt(0) || "؟"}
    </span>
  );
}

function SyllabusItem({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border bg-background shadow-[4px_4px_0_0_#5c5c5c]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-right transition-colors duration-300 ${
          open ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-semibold text-accent-warm">
            {faDigits(index + 1)}
          </span>
          <span className="text-base font-semibold text-text-primary">
            {title}
          </span>
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 py-4 pr-[3.75rem] leading-7 text-text-secondary">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <span className="shrink-0 text-sm text-text-secondary">{label}</span>
      <span className="text-left text-sm font-semibold text-text-primary">
        {value}
      </span>
    </div>
  );
}

function CourseGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* main image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background">
        <Image
          key={images[active].src}
          src={images[active].src}
          alt={images[active].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* thumbnails */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {images.map((img, i) => {
          const isActive = i === active;
          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`نمایش تصویر ${faDigits(i + 1)}`}
              aria-current={isActive}
              className={`relative aspect-square overflow-hidden border-2 transition ${
                isActive
                  ? "border-accent-warm"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CourseReviews({ initial }: { initial: Review[] }) {
  const [reviews, setReviews] = useState(initial);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [showAll, setShowAll] = useState(false);

  const count = reviews.length;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const average = count ? sum / count : 0;
  const averageLabel = average.toLocaleString("fa-IR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const n = reviews.filter((r) => r.rating === star).length;
    return { star, pct: count ? Math.round((n / count) * 100) : 0 };
  });

  const canSubmit = rating > 0 && text.trim().length > 0;

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    const now = new Date();
    const newReview: Review = {
      name: name.trim() || "کاربر مهمان",
      rating,
      dateGregorian: [now.getFullYear(), now.getMonth() + 1, now.getDate()],
      text: text.trim(),
      verified: false,
    };
    setReviews((prev) => [newReview, ...prev]);
    setRating(0);
    setName("");
    setText("");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* خلاصه‌ی امتیاز */}
      <div className="grid grid-cols-1 gap-8 border border-border bg-background p-6 sm:grid-cols-[auto_1fr] sm:gap-10">
        <div className="flex flex-col items-center justify-center gap-2 border-b border-border pb-6 sm:border-b-0 sm:border-l sm:pb-0 sm:pl-10">
          <span className="text-5xl font-bold text-accent-warm">
            {averageLabel}
          </span>
          <span className="text-xs text-text-muted">از ۵</span>
          <Stars rating={Math.round(average)} size={18} />
          <span className="text-sm text-text-secondary">
            {faDigits(count)} نظر
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          {distribution.map(({ star, pct }) => (
            <div key={star} className="flex items-center gap-3 text-sm">
              <span className="flex w-10 shrink-0 items-center gap-1 text-text-secondary">
                {faDigits(star)}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent-warm"
                  aria-hidden="true"
                >
                  <path d={STAR_PATH} />
                </svg>
              </span>
              <span className="h-2 flex-1 overflow-hidden bg-border">
                <span
                  className="block h-full bg-accent-warm"
                  style={{ width: `${pct}%` }}
                />
              </span>
              <span className="w-10 shrink-0 text-left text-text-muted">
                {faDigits(pct)}٪
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* فرم ثبت نظر */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-border bg-background p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary">
          نظر خود را ثبت کنید
        </h3>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-text-secondary">امتیاز شما</span>
          <StarRatingInput value={rating} onChange={setRating} />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام شما (اختیاری)"
          className="border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="تجربه‌ی خود از این دوره را بنویسید…"
          className="resize-none border border-border bg-surface px-4 py-2.5 text-sm leading-7 text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none"
        />
        <div>
          <button
            type="submit"
            disabled={!canSubmit}
            className="bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ثبت نظر
          </button>
        </div>
      </form>

      {/* فهرست نظرات */}
      <div className="flex flex-col gap-4">
        {visibleReviews.map((r, i) => (
          <article
            key={`${r.name}-${i}`}
            className="flex flex-col gap-3 border border-border bg-background p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <ReviewAvatar name={r.name} src={r.avatar} />
                <div className="flex flex-col gap-1.5">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-text-primary">
                      {r.name}
                    </span>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 bg-accent-warm/15 px-2 py-0.5 text-[11px] font-medium text-accent-warm">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        هنرجوی دوره
                      </span>
                    )}
                  </span>
                  <Stars rating={r.rating} size={14} />
                </div>
              </div>
              <span className="shrink-0 text-xs text-text-muted">
                {formatJalali(r.dateGregorian)}
              </span>
            </div>
            <p className="leading-7 text-text-secondary">{r.text}</p>
          </article>
        ))}

        {reviews.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="flex items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
          >
            {showAll
              ? "نمایش کمتر"
              : `نمایش ${faDigits(reviews.length - 3)} نظر دیگر`}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function CourseDetailClient() {
  const { instructor } = course;

  return (
    <div className="bg-background">
      {/* ۱. Hero — تصویر + عنوان و بِج‌ها روی گرادیان */}
      <section className="relative h-[24rem] w-full sm:h-[32rem]">
        <Image
          src={course.heroImage}
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
                  className={`px-3 py-1 text-xs font-semibold ${
                    course.type === "حضوری"
                      ? "bg-accent-warm text-black"
                      : "bg-accent text-white"
                  }`}
                >
                  {course.type}
                </span>
                <span className="bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {course.level}
                </span>
              </div>
              <h1 className="max-w-3xl text-3xl font-bold leading-snug text-white sm:text-4xl">
                {course.title}
              </h1>
              <p className="text-sm text-white/80">
                مدرس:{" "}
                <Link
                  href={`/instructors/${instructor.slug}`}
                  className="font-semibold text-accent-warm hover:underline"
                >
                  {instructor.name}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ۲. باکس مشخصات و ثبت‌نام */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="border border-border bg-surface p-6">
            <MetaRow
              label="قیمت دوره"
              value={`${course.price.toLocaleString("fa-IR")} تومان`}
            />
            <MetaRow
              label="تعداد جلسات"
              value={`${faDigits(course.sessions)} جلسه`}
            />
            <MetaRow label="مدت هر جلسه" value={course.sessionDuration} />
            <MetaRow label="روزهای برگزاری" value={course.schedule} />
            <MetaRow label="تاریخ شروع" value={startJalali} />
            <MetaRow label="محل برگزاری" value={course.location} />
            <MetaRow label="پیش‌نیاز" value={course.prerequisite} />
            <MetaRow
              label="ظرفیت باقی‌مانده"
              value={`${faDigits(course.capacityRemaining)} نفر`}
            />
            <button
              type="button"
              className="mt-6 w-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
            >
              ثبت‌نام در دوره
            </button>
          </div>
        </div>
      </section>

      {/* ۳. توضیحات دوره */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            درباره‌ی دوره
          </h2>
          <div className="flex flex-col gap-4">
            {course.description.map((p, i) => (
              <p key={i} className="leading-8 text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ۴. معرفی استاد */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            مدرس دوره
          </h2>
          <div className="flex flex-col gap-5 border border-border bg-surface p-6 sm:flex-row sm:items-start">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border-strong">
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {instructor.name}
              </h3>
              <p className="text-sm text-accent-warm">{instructor.specialty}</p>
              <p className="leading-7 text-text-secondary">{instructor.bio}</p>
              <Link
                href={`/instructors/${instructor.slug}`}
                className="mt-2 inline-block text-sm font-semibold text-accent-warm hover:underline"
              >
                مشاهده پروفایل کامل ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ۵. سرفصل‌ها */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            سرفصل‌های دوره
          </h2>
          <div className="flex flex-col gap-3">
            {course.syllabus.map((item, i) => (
              <SyllabusItem
                key={item.title}
                index={i}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ۶. گالری دوره */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            گالری دوره
          </h2>
          <CourseGallery images={course.gallery} />
        </div>
      </section>

      {/* ۷. نظرات دانشجویان */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            نظرات دانشجویان
          </h2>
          <CourseReviews initial={seedReviews} />
        </div>
      </section>

      {/* ۸. دوره‌های مرتبط */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            دوره‌های مرتبط
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((c) => (
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <p className="mt-2 text-sm text-text-secondary">
                    {c.instructor}
                  </p>
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
    </div>
  );
}
