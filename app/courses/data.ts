// Single source of truth for the IDI course catalogue (real client data).
// Imported by the listing (CoursesClient), the detail page, and the home/about
// pages. Plain module — no "use client" — so server and client both consume it.
//
// Per-course fields vary a lot, so the heterogeneous specs live in `details`
// as ordered { label, value } rows. The fields the card and filters need
// (type, group, status, instructor, price) are first-class.
//
// NOTE: images are temporary Unsplash stock to be replaced with real photos.

export type CourseType = "حضوری" | "آنلاین";
export type CourseGroup = "کارگاه رنگ و متریال" | "کلاس حضوری" | "دوره آنلاین";

export type CourseDetail = { label: string; value: string };

export type Course = {
  slug: string;
  title: string;
  type: CourseType;
  group: CourseGroup;
  price: number; // تومان
  image: string;
  instructor?: string; // مدرس / منتور
  status?: string; // وضعیت برای بِج کارت: «در حال ثبت‌نام» / «برگزار شد» / …
  details: CourseDetail[];
};

export const courseGroups: CourseGroup[] = [
  "کارگاه رنگ و متریال",
  "کلاس حضوری",
  "دوره آنلاین",
];

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80`;

export const courses: Course[] = [
  // ───────────── کارگاه رنگ و متریال (حضوری) ─────────────
  {
    slug: "circle-markaz",
    title: "کارگاه دایره/ مرکز",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 12000000,
    image: img("photo-1586023492125-27b2c045efd7"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "پیش‌نیاز", value: "ندارد" },
      { label: "پالت‌چینی رنگ و متریال", value: "سطح اول" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "circle-shoaa",
    title: "کارگاه دایره/ شعاع",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 9000000,
    image: img("photo-1567538096630-e0c55bd6374c"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "پیش‌نیاز", value: "کارگاه مرکز" },
      { label: "پالت‌چینی رنگ و متریال", value: "سطح دوم" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "momas",
    title: "کارگاه مماس",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 2500000,
    image: img("photo-1556228453-efd6c1ff04f6"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "پیش‌نیاز", value: "ندارد" },
    ],
  },
  {
    slug: "jaygasht-mobleman",
    title: "کارگاه جای‌گشت/ مبلمان",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 18000000,
    image: img("photo-1497366754035-f200968a6e72"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "پالت‌چینی", value: "رنگ، متریال و مبلمان" },
      { label: "پیش‌نیاز", value: "کارگاه مرکز تا شعاع" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "jaygasht-tarkib-sabk",
    title: "کارگاه جای‌گشت/ ترکیب سبک",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 24000000,
    image: img("photo-1600210492493-0946911123ea"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "ساعت کارگاه", value: "۸ الی ۱۳" },
      { label: "پیش‌نیاز", value: "کارگاه مرکز تا شعاع" },
      { label: "پالت‌چینی", value: "ترکیب سبک" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "circle-markaz-ardabil",
    title: "کارگاه دایره/ مرکز- اردبیل",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 10000000,
    image: img("photo-1600607687939-ce8a6c25118c"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "ساعت کارگاه", value: "۹ تا ۱۴" },
      { label: "پیش‌نیاز", value: "ندارد" },
      { label: "پالت‌چینی رنگ و متریال", value: "سطح اول" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "circle-shoaa-ardabil",
    title: "کارگاه دایره/ شعاع- اردبیل",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 8000000,
    image: img("photo-1618221195710-dd6b41faaea6"),
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "ساعت کارگاه", value: "۹ تا ۱۴" },
      { label: "پیش‌نیاز", value: "کارگاه مرکز" },
      { label: "پالت‌چینی رنگ و متریال", value: "سطح دوم" },
      { label: "مدرک", value: "ارائه می‌شود" },
    ],
  },
  {
    slug: "momas-ardabil",
    title: "کارگاه مماس- اردبیل",
    type: "حضوری",
    group: "کارگاه رنگ و متریال",
    price: 2500000,
    image: img("photo-1524178232363-1fb2b075b655"),
    instructor: "آنیا حسن‌زاده",
    details: [
      { label: "نوع آموزش", value: "کارگاه حضوری" },
      { label: "پیش‌نیاز", value: "ندارد" },
      { label: "ساعت کارگاه", value: "۱۰ تا ۱۲" },
      { label: "طراح دوره", value: "شیوا پوریوسف" },
    ],
  },

  // ───────────── کلاس حضوری ─────────────
  {
    slug: "object-in-cast",
    title: "Object in Cast",
    type: "حضوری",
    group: "کلاس حضوری",
    price: 34000000,
    image: img("photo-1587620962725-abab7fe55159"),
    instructor: "نسرین معتمدی",
    details: [
      { label: "نوع آموزش", value: "کلاس حضوری" },
      { label: "زمان‌بندی", value: "چهارشنبه‌ها" },
      { label: "ساعت کارگاه", value: "۹ تا ۱۵" },
      { label: "پیش‌نیاز", value: "ندارد" },
      { label: "جلسات", value: "۵ جلسه در ۵ هفته" },
    ],
  },
  {
    slug: "baft-yaft-rem",
    title: "بافت‌یافت [Re-M]",
    type: "حضوری",
    group: "کلاس حضوری",
    price: 20000000,
    image: img("photo-1616486338812-3dadae4b4ace"),
    instructor: "آرین حکیمی‌نژاد",
    status: "در حال ثبت‌نام",
    details: [
      { label: "نوع آموزش", value: "کلاس حضوری" },
      { label: "زمان‌بندی", value: "جمعه‌ها" },
      { label: "تاریخ برگزاری", value: "۲ مرداد" },
      { label: "ساعت کارگاه", value: "۹ تا ۱۵" },
      { label: "پیش‌نیاز", value: "اتوکد و یا راینو" },
    ],
  },
  {
    slug: "portfolio-review",
    title: "اصلاح پورتفولیو کاری و تحصیلی",
    type: "حضوری",
    group: "کلاس حضوری",
    price: 8000000,
    image: img("photo-1600210492486-724fe5c67fb0"),
    instructor: "شیوا پوریوسف",
    details: [
      { label: "نوع آموزش", value: "خصوصی" },
      { label: "منتور", value: "شیوا پوریوسف" },
      { label: "مدت زمان هر جلسه", value: "۵۰ دقیقه" },
      { label: "تعداد جلسات", value: "۱ جلسه" },
      {
        label: "هماهنگی جلسات",
        value: "پس از ثبت‌نام، پیامکی جهت هماهنگی زمان مشاوره ارسال می‌شود",
      },
    ],
  },

  // ───────────── دوره آنلاین ─────────────
  {
    slug: "mattoboard",
    title: "MattoBoard",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 3000000,
    image: img("photo-1586023492125-27b2c045efd7"),
    instructor: "پارمیس هدایتی",
    status: "آفلاین",
    details: [
      { label: "نوع آموزش", value: "آفلاین" },
      { label: "پیش‌نیاز", value: "ندارد" },
    ],
  },
  {
    slug: "trends-2025-2026",
    title:
      "تحلیل ترندهای ۲۰۲۵ و نگاهی به روندهای نوظهور ۲۰۲۶ در آثار طراحان برجسته جهان",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 850000,
    image: img("photo-1567538096630-e0c55bd6374c"),
    instructor: "مهگل حسینی",
    details: [
      { label: "نوع آموزش", value: "وبینار" },
      { label: "طراح دوره", value: "شیوا پوریوسف" },
    ],
  },
  {
    slug: "kalbod",
    title: "کالبد",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 5800000,
    image: img("photo-1556228453-efd6c1ff04f6"),
    instructor: "پارمیس هدایتی، مهسا ارجوند",
    status: "برگزار شد",
    details: [
      { label: "نوع آموزش", value: "آنلاین گروهی" },
      { label: "جلسات", value: "۶ جلسه در ۶ هفته" },
      { label: "تاریخ شروع", value: "اواسط اردیبهشت" },
    ],
  },
  {
    slug: "mantaghe",
    title: "منطقه/ دوره‌ی جامع و تخصصی طراحی داخلی",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 46700000,
    image: img("photo-1497366754035-f200968a6e72"),
    instructor: "شیوا پوریوسف",
    status: "در حال ثبت‌نام",
    details: [
      { label: "نوع آموزش", value: "آنلاین + کارگاه حضوری" },
      { label: "مدت زمان دوره", value: "۲۷ ساعت آنلاین و ۳ ساعت حضوری" },
      { label: "تعداد جلسات", value: "۱۰ جلسه" },
      { label: "مدرس کارگاه", value: "شیوا و مونا پوریوسف" },
    ],
  },
  {
    slug: "tarkib-sabk",
    title: "ترکیب سبک",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 12000000,
    image: img("photo-1600210492493-0946911123ea"),
    instructor: "پارمیس هدایتی",
    status: "آنلاین/آفلاین",
    details: [
      { label: "نوع آموزش", value: "آفلاین/ آنلاین" },
      { label: "طراح دوره", value: "شیوا پوریوسف" },
      { label: "تاریخ برگزاری", value: "بعد از ثبت‌نام به جهت تدریس آفلاین" },
      { label: "تعداد جلسات", value: "۸ جلسه" },
    ],
  },
  {
    slug: "photoshop",
    title: "فتوشاپ برای طراحی داخلی",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 8000000,
    image: img("photo-1600607687939-ce8a6c25118c"),
    instructor: "نسرین فراهانی",
    status: "در حال ثبت‌نام",
    details: [
      { label: "نوع آموزش", value: "آنلاین خصوصی" },
      { label: "طراح دوره", value: "شیوا پوریوسف" },
      { label: "مدت دوره", value: "۱۲ ساعت" },
      { label: "تعداد جلسات", value: "۶ جلسه" },
    ],
  },
  {
    slug: "brain-aesthetics",
    title: "مغز زیباشناس",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 5000000,
    image: img("photo-1618221195710-dd6b41faaea6"),
    instructor: "کمیل قاسمی",
    status: "ویدیو",
    details: [
      { label: "نوع آموزش", value: "ویدیو ضبط‌شده" },
      { label: "تعداد جلسات", value: "۴ جلسه" },
      { label: "طول جلسات", value: "۱ ساعت و ۳۰ دقیقه" },
    ],
  },
  {
    slug: "autocad",
    title: "اتوکد برای طراحی داخلی",
    type: "آنلاین",
    group: "دوره آنلاین",
    price: 8000000,
    image: img("photo-1524178232363-1fb2b075b655"),
    instructor: "نسرین فراهانی",
    details: [
      { label: "نوع آموزش", value: "آنلاین خصوصی" },
      { label: "پیش‌نیاز", value: "ندارد" },
      { label: "مدت زمان دوره", value: "۱۶ ساعت" },
      { label: "تعداد جلسات", value: "۸ جلسه" },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
