"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Smartphone, AtSign, Lock, Eye, EyeOff } from "lucide-react";
import { AUTH_KEY } from "@/app/(dashboard)/data";

// تبدیل ارقام فارسی/عربی به انگلیسی تا اعتبارسنجی موبایل درست کار کند
const toEnglishDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

const mobilePattern = /^09[0-9]{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldProps = {
  label: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  error?: string;
  password?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Field({ label, icon: Icon, error, password, id, ...inputProps }: FieldProps) {
  const [reveal, setReveal] = useState(false);
  const type = password ? (reveal ? "text" : "password") : inputProps.type;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-text-muted">
          <Icon size={18} />
        </span>
        <input
          id={id}
          {...inputProps}
          type={type}
          className={`w-full border bg-surface-alt py-3 pr-10 ${
            password ? "pl-10" : "pl-3"
          } text-sm text-text-primary placeholder:text-text-muted transition-colors focus:outline-none ${
            error
              ? "border-red-500/70 focus:border-red-500"
              : "border-border focus:border-accent"
          }`}
        />
        {password ? (
          <button
            type="button"
            onClick={() => setReveal((v) => !v)}
            aria-label={reveal ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"}
            className="absolute inset-y-0 left-2 flex items-center px-1 text-text-muted transition-colors hover:text-text-primary"
          >
            {reveal ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : null}
      </div>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

const btnPrimary =
  "w-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-all hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#5c5c5c]";

type FieldName = "name" | "mobile" | "email" | "password";
type Errors = Partial<Record<FieldName, string>>;

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const update =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};

    if (!form.name.trim()) next.name = "نام و نام خانوادگی را وارد کنید.";

    const mobile = toEnglishDigits(form.mobile.trim());
    if (!mobile) next.mobile = "شماره موبایل را وارد کنید.";
    else if (!mobilePattern.test(mobile))
      next.mobile = "شماره موبایل معتبر نیست. نمونه: ۰۹۱۲۱۲۳۴۵۶۷";

    if (form.email.trim() && !emailPattern.test(form.email.trim()))
      next.email = "ایمیل وارد شده معتبر نیست.";

    if (!form.password) next.password = "رمز عبور را وارد کنید.";
    else if (form.password.length < 6)
      next.password = "رمز عبور باید حداقل ۶ کاراکتر باشد.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      // فیک: بدون backend واقعی، وضعیت ورود ذخیره و به داشبورد هدایت می‌شود
      localStorage.setItem(AUTH_KEY, "1");
      router.push("/dashboard");
    }
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-text-primary"
          >
            IDI CENTER
          </Link>
          <h1 className="mt-5 text-2xl font-bold text-text-primary">
            ساخت حساب کاربری
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            برای ثبت‌نام در دوره‌ها، حساب کاربری خود را بسازید.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5 border border-border bg-surface p-8"
        >
          <Field
            id="name"
            label="نام و نام خانوادگی"
            icon={User}
            placeholder="مثلاً سپهر سیمیاری"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            error={errors.name}
          />
          <Field
            id="mobile"
            label="شماره موبایل"
            icon={Smartphone}
            type="tel"
            inputMode="numeric"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            autoComplete="tel"
            value={form.mobile}
            onChange={update("mobile")}
            error={errors.mobile}
          />
          <Field
            id="email"
            label="ایمیل (اختیاری)"
            icon={AtSign}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
          />
          <Field
            id="password"
            label="رمز عبور"
            icon={Lock}
            password
            placeholder="حداقل ۶ کاراکتر"
            autoComplete="new-password"
            value={form.password}
            onChange={update("password")}
            error={errors.password}
          />

          <button type="submit" className={`mt-1 ${btnPrimary}`}>
            ثبت‌نام
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          حساب داری؟{" "}
          <Link
            href="/login"
            className="font-semibold text-accent-warm hover:underline"
          >
            وارد شو
          </Link>
        </p>
      </div>
    </section>
  );
}
