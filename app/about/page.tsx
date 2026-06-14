import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  Globe,
  Library,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";

const story = [
  "IDI CENTER یک مرکز تخصصی طراحی داخلی است؛ مجموعه‌ای که با هدف ارتقای استانداردهای آموزش طراحی و معماری داخلی در کشور شکل گرفت و امروز به‌عنوان صاحب اولین کرسی آموزش تخصصی طراحی داخلی در ایران شناخته می‌شود.",
  "ما باور داریم طراحی داخلی، تلفیقِ دانش فنی، حس زیبایی‌شناسی و درک نیاز انسان است. به همین دلیل برنامه‌های آموزشی IDI بر پایه‌ی پروژه‌های واقعی و تجربه‌ی عملی بنا شده‌اند، نه صرفاً تئوری.",
  "از نخستین روزها تا امروز، صدها هنرجو در IDI آموزش دیده‌اند و بسیاری از آن‌ها اکنون در استودیوها و پروژه‌های معتبر داخلی و بین‌المللی مشغول به کارند.",
];

const values = [
  {
    Icon: GraduationCap,
    title: "آموزش آکادمیک",
    desc: "برنامه‌ی درسی منسجم و سطح‌بندی‌شده، بر پایه‌ی اصول علمی و استانداردهای روز طراحی داخلی.",
  },
  {
    Icon: Users,
    title: "اساتید مجرب",
    desc: "تدریس توسط طراحان و معماران فعالِ صنعت که تجربه‌ی واقعی پروژه را به کلاس می‌آورند.",
  },
  {
    Icon: Globe,
    title: "متد روز دنیا",
    desc: "به‌کارگیری متدها، نرم‌افزارها و رویکردهای آموزشیِ به‌روزِ مدارس معتبر بین‌المللی.",
  },
  {
    Icon: Library,
    title: "کتابخانه‌ی متریال",
    desc: "دسترسی به نمونه‌های واقعی متریال و کتابخانه‌ی تخصصی برای انتخاب آگاهانه در طراحی.",
  },
];

const stats = [
  { value: "۱۵", label: "سال فعالیت" },
  { value: "+۲٬۵۰۰", label: "دانشجو" },
  { value: "+۱۲۰", label: "دوره آموزشی" },
  { value: "۲۴", label: "استاد" },
];

const contact = {
  address: "تهران، خیابان سنایی، کوچه اعرابی، پلاک ۵",
  phones: [
    { label: "۰۲۱-۸۸۱۲۳۴۵۶", tel: "+982188123456" },
    { label: "۰۹۱۲-۱۲۳۴۵۶۷", tel: "+989121234567" },
  ],
  email: "info@idicenter.ir",
  hours: "شنبه تا چهارشنبه، ۹ تا ۱۸",
};

// لوکیشن واقعی IDI CENTER (برگرفته از لینک اشتراکیِ کاربر).
// نقشه با output=embed روی مختصات پین می‌شود؛ دکمه‌ی مسیریابی همان لینک کوتاه را باز می‌کند.
const mapShareUrl = "https://maps.app.goo.gl/g1kYuwAmoPGoNkR97";
const mapEmbedSrc =
  "https://maps.google.com/maps?q=35.716883,51.417538(IDI%20CENTER)&hl=fa&z=17&output=embed";
const mapDirectionsUrl = mapShareUrl;

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* ۱. Hero */}
      <section className="relative h-[26rem] w-full sm:h-[32rem]">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
          alt="فضای آموزشی IDI CENTER"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-5 px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            درباره IDI CENTER
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            مرکز تخصصی آموزش طراحی و معماری داخلی، با نگاهی آکادمیک و کاربردی به
            تربیت طراحان حرفه‌ای.
          </p>
        </div>
      </section>

      {/* ۲. داستان / معرفی */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold text-accent-warm">داستان ما</p>
            <h2 className="text-3xl font-bold leading-snug text-text-primary">
              صاحب اولین کرسی آموزش تخصصی طراحی داخلی در ایران
            </h2>
            <div className="flex flex-col gap-4">
              {story.map((p, i) => (
                <p key={i} className="leading-8 text-text-secondary">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80"
              alt="فضای آموزشگاه IDI"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ۳. فلسفه‌ی آموزشی */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-accent-warm">
              فلسفه‌ی آموزشی
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              آنچه IDI را متفاوت می‌کند
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 border border-border bg-surface p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-accent text-white">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ۴. آمار */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-16 text-center sm:grid-cols-4">
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

      {/* ۵. تماس و آدرس */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-accent-warm">
              تماس با ما
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              ما را پیدا کنید
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* اطلاعات تماس */}
            <div className="flex flex-col gap-6 border border-border bg-background p-8">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-0.5 shrink-0 text-accent-warm"
                  size={22}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    آدرس
                  </h3>
                  <p className="leading-7 text-text-secondary">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-0.5 shrink-0 text-accent-warm"
                  size={22}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    تلفن تماس
                  </h3>
                  {contact.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      dir="ltr"
                      className="text-text-secondary transition-colors hover:text-accent-warm"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="mt-0.5 shrink-0 text-accent-warm"
                  size={22}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    ایمیل
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    dir="ltr"
                    className="text-text-secondary transition-colors hover:text-accent-warm"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-0.5 shrink-0 text-accent-warm"
                  size={22}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    ساعات کاری
                  </h3>
                  <p className="text-text-secondary">{contact.hours}</p>
                </div>
              </div>

              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 self-start bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-opacity hover:opacity-90"
              >
                <Navigation size={18} aria-hidden="true" />
                مسیریابی در گوگل مپ
              </a>
            </div>

            {/* نقشه‌ی گوگل */}
            <div className="relative min-h-[22rem] overflow-hidden border border-border bg-background">
              <iframe
                src={mapEmbedSrc}
                title="موقعیت IDI CENTER روی نقشه"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ۶. CTA */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="ثبت‌نام در IDI CENTER"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            آماده‌اید مسیر حرفه‌ای‌تان را آغاز کنید؟
          </h2>
          <p className="max-w-xl text-lg text-white/80">
            برای انتخاب دوره‌ی مناسب یا دریافت مشاوره‌ی تخصصی، همین امروز با ما در
            ارتباط باشید.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="bg-accent px-8 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] transition-opacity hover:opacity-90"
            >
              مشاهده دوره‌ها
            </Link>
            <a
              href="tel:+982188123456"
              className="bg-neutral-200 px-8 py-3 text-base font-semibold text-neutral-900 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] transition-opacity hover:opacity-90"
            >
              تماس برای مشاوره
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
