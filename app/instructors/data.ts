// Real IDI instructors, derived from the course catalogue. Bios and
// specialties are written from what each person teaches (per app/courses/data).
// Photos are added later — `avatar` is optional and falls back to an initial.
import { courses, type Course } from "@/app/courses/data";

export type Instructor = {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string[];
  avatar?: string;
  // Real handles can be added per instructor later; until then the profile
  // page falls back to placeholder links so the icons still show.
  social?: { instagram?: string; linkedin?: string };
};

// Temporary gender-matched stock portraits, to be replaced with real photos.
const portrait = (id: string) => `https://images.unsplash.com/${id}?w=400&q=80`;

export const instructors: Instructor[] = [
  {
    id: "shiva-pouryousef",
    name: "شیوا پوریوسف",
    title: "طراح داخلی و راهبر آموزش",
    avatar: portrait("photo-1494790108377-be9c29b29330"),
    specialties: ["طراحی داخلی", "راهبری دوره‌ها", "منتورینگ پورتفولیو"],
    bio: [
      "شیوا پوریوسف طراح داخلی و راهبر آموزشی IDI است؛ طراح و ناظرِ بسیاری از دوره‌های مجموعه که نگاه آکادمیک و پروژه‌محور را در برنامه‌ی درسی نهادینه کرده است.",
      "او دوره‌ی جامع و تخصصی «منطقه» را تدریس می‌کند و در «اصلاح پورتفولیو کاری و تحصیلی» به‌عنوان منتور، هنرجویان را برای ورود حرفه‌ای به بازار کار و ادامه‌ی تحصیل همراهی می‌کند.",
    ],
  },
  {
    id: "mona-pouryousef",
    name: "مونا پوریوسف",
    title: "مدرس کارگاه طراحی داخلی",
    avatar: portrait("photo-1531123897727-8f129e1688ce"),
    specialties: ["طراحی داخلی", "کارگاه حضوری", "منتورینگ"],
    bio: [
      "مونا پوریوسف در آموزش عملی و کارگاه‌محورِ طراحی داخلی فعالیت می‌کند.",
      "او در کنار شیوا پوریوسف کارگاه حضوری دوره‌ی جامع و تخصصی «منطقه» را تدریس می‌کند؛ بخشی که مفاهیم آنلاین دوره را به تجربه‌ی عملی و رو‌در‌رو پیوند می‌زند.",
    ],
  },
  {
    id: "parmis-hedayati",
    name: "پارمیس هدایتی",
    title: "متخصص متریال و مودبورد",
    avatar: portrait("photo-1487412720507-e7ab37603c6f"),
    specialties: ["متریال", "مودبورد", "ترکیب سبک"],
    bio: [
      "پارمیس هدایتی بر متریال، مودبورد و زبان بصری سبک‌ها در طراحی داخلی متمرکز است.",
      "او دوره‌های «MattoBoard»، «کالبد» و «ترکیب سبک» را تدریس می‌کند؛ دوره‌هایی که مهارت انتخاب و ترکیب متریال و ساختِ پالت بصری منسجم را پرورش می‌دهند.",
    ],
  },
  {
    id: "nasrin-farahani",
    name: "نسرین فراهانی",
    title: "مدرس نرم‌افزارهای طراحی داخلی",
    avatar: portrait("photo-1438761681033-6461ffad8d80"),
    specialties: ["اتوکد", "فتوشاپ", "نرم‌افزار طراحی"],
    bio: [
      "نسرین فراهانی نرم‌افزارهای پایه‌ی طراحی داخلی را به‌صورت کاربردی و پروژه‌محور آموزش می‌دهد.",
      "او دوره‌های خصوصی «اتوکد برای طراحی داخلی» و «فتوشاپ برای طراحی داخلی» را تدریس می‌کند تا هنرجویان ابزارهای ترسیم فنی و ارائه‌ی بصری را حرفه‌ای به‌کار بگیرند.",
    ],
  },
  {
    id: "nasrin-motamedi",
    name: "نسرین معتمدی",
    title: "طراح و سازنده‌ی آبجکت دکوراتیو",
    avatar: portrait("photo-1534528741775-53994a69daeb"),
    specialties: ["آبجکت دکوراتیو", "ساخت و اجرا"],
    bio: [
      "نسرین معتمدی در حوزه‌ی طراحی و ساخت آبجکت‌های دکوراتیو فعالیت می‌کند.",
      "او کلاس حضوری «Object in Cast» را تدریس می‌کند؛ دوره‌ای عملی برای ساخت احجام و آبجکت‌های دکوراتیو در طول پنج جلسه.",
    ],
  },
  {
    id: "arian-hakiminejad",
    name: "آرین حکیمی‌نژاد",
    title: "متخصص بافت و متریال",
    avatar: portrait("photo-1500648767791-00dcc994a43e"),
    specialties: ["بافت و متریال", "مدل‌سازی", "اتوکد و راینو"],
    bio: [
      "آرین حکیمی‌نژاد بر بافت، متریال و فرم در طراحی داخلی تمرکز دارد.",
      "او کلاس حضوری «بافت‌یافت [Re-M]» را تدریس می‌کند؛ دوره‌ای که با پیش‌نیاز اتوکد یا راینو، نگاهی تخصصی به بافت و متریال را توسعه می‌دهد.",
    ],
  },
  {
    id: "mahgol-hosseini",
    name: "مهگل حسینی",
    title: "تحلیل‌گر ترند و گرایش‌های طراحی",
    avatar: portrait("photo-1544005313-94ddf0286df2"),
    specialties: ["ترند طراحی", "تحلیل گرایش‌ها"],
    bio: [
      "مهگل حسینی روی شناخت و تحلیل ترندهای روزِ طراحی داخلی کار می‌کند.",
      "او وبینار «تحلیل ترندهای ۲۰۲۵ و روندهای نوظهور ۲۰۲۶» را ارائه می‌دهد و نگاهی به‌روز به آثار طراحان برجسته‌ی جهان می‌گشاید.",
    ],
  },
  {
    id: "komeil-ghasemi",
    name: "کمیل قاسمی",
    title: "مدرس زیبایی‌شناسی و ادراک",
    avatar: portrait("photo-1506794778202-cad84cf45f1d"),
    specialties: ["زیبایی‌شناسی", "روان‌شناسی ادراک"],
    bio: [
      "کمیل قاسمی به پیوند علوم شناختی و زیبایی‌شناسی در طراحی می‌پردازد.",
      "او دوره‌ی ویدیویی «مغز زیباشناس» را تدریس می‌کند و توضیح می‌دهد مغز چگونه زیبایی را درک می‌کند و این شناخت چه کمکی به طراحان می‌کند.",
    ],
  },
  {
    id: "mahsa-arjvand",
    name: "مهسا ارجوند",
    title: "مدرس طراحی داخلی",
    avatar: portrait("photo-1573496359142-b8d87734a5a2"),
    specialties: ["طراحی داخلی", "آموزش گروهی"],
    bio: [
      "مهسا ارجوند در آموزش مبانی و فرایند طراحی داخلی فعالیت می‌کند.",
      "او در کنار پارمیس هدایتی دوره‌ی آنلاین گروهی «کالبد» را تدریس می‌کند؛ دوره‌ای شش‌جلسه‌ای برای شکل‌گیری نگاه پایه‌ای به طراحی فضا.",
    ],
  },
  {
    id: "ania-hassanzadeh",
    name: "آنیا حسن‌زاده",
    title: "مدرس کارگاه رنگ و متریال",
    avatar: portrait("photo-1517841905240-472988babdf9"),
    specialties: ["رنگ و متریال", "پالت‌چینی", "کارگاه حضوری"],
    bio: [
      "آنیا حسن‌زاده در حوزه‌ی رنگ و متریال و پالت‌چینی فعالیت می‌کند.",
      "او کارگاه حضوری «مماس» را در اردبیل تدریس می‌کند؛ کارگاهی برای تمرین عملی اصول رنگ و متریال.",
    ],
  },
];

export function getInstructor(id: string): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}

// Courses this person is involved in — as teacher, mentor, course designer,
// or workshop lead (the name may appear in `instructor` or a details row).
export function coursesByInstructor(name: string): Course[] {
  return courses.filter(
    (c) =>
      c.instructor?.includes(name) ||
      c.details.some((d) => d.value.includes(name))
  );
}
