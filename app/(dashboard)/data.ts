// داده‌ی فیک مشترکِ داشبورد — تنها منبعِ کاربر و دوره‌ها (بدون backend واقعی)

export const user = {
  name: "سپهر سیمیاری",
  mobile: "09121234567",
  email: "sepehr@idicenter.ir",
};

export type CourseStatus = "در حال یادگیری" | "تکمیل‌شده";

export type MyCourse = {
  title: string;
  instructor: string;
  progress: number;
  status: CourseStatus;
};

export const myCourses: MyCourse[] = [
  {
    title: "اصول طراحی داخلی مدرن",
    instructor: "استاد مریم رضایی",
    progress: 65,
    status: "در حال یادگیری",
  },
  {
    title: "نورپردازی در فضای داخلی",
    instructor: "استاد علی محمدی",
    progress: 30,
    status: "در حال یادگیری",
  },
  {
    title: "متریال‌شناسی پیشرفته",
    instructor: "استاد مریم رضایی",
    progress: 100,
    status: "تکمیل‌شده",
  },
];

export type Certificate = {
  course: string;
  issuedAt: string;
  code: string;
};

export const certificates: Certificate[] = [
  {
    course: "متریال‌شناسی پیشرفته",
    issuedAt: "۲۴ خرداد ۱۴۰۵",
    code: "IDI-2026-0042",
  },
];

// تبدیل ارقام انگلیسی به فارسی برای نمایش
export const toPersian = (value: number | string) =>
  String(value).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

// کلید ذخیره‌ی وضعیت ورودِ فیک در localStorage (بدون backend واقعی)
export const AUTH_KEY = "idi_auth";
