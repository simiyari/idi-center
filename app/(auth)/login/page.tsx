"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Smartphone, AtSign, Lock, Eye, EyeOff } from "lucide-react";
import { AUTH_KEY } from "@/app/(dashboard)/data";

// تبدیل ارقام فارسی/عربی به انگلیسی تا اعتبارسنجی موبایل درست کار کند
const toEnglishDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

const mobilePattern = /^09[0-9]{9}$/;

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

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"otp" | "email">("otp");

  // حالت ورود با موبایل (OTP)
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [code, setCode] = useState(["", "", "", ""]);
  const codeRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [otpError, setOtpError] = useState<string>();

  // حالت ورود با ایمیل
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>();

  // فیک: بدون backend واقعی، وضعیت ورود ذخیره و به داشبورد می‌رود
  const goToDashboard = () => {
    localStorage.setItem(AUTH_KEY, "1");
    router.push("/dashboard");
  };

  const sendCode = () => {
    const m = toEnglishDigits(mobile.trim());
    if (!mobilePattern.test(m)) {
      setOtpError("شماره موبایل معتبر نیست. نمونه: ۰۹۱۲۱۲۳۴۵۶۷");
      return;
    }
    setOtpError(undefined);
    setOtpSent(true);
    setCode(["", "", "", ""]);
    setTimeout(() => codeRefs.current[0]?.focus(), 0);
  };

  const handleCodeChange = (index: number, value: string) => {
    const digit = toEnglishDigits(value).replace(/\D/g, "").slice(-1);
    setCode((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    if (digit && index < 3) codeRefs.current[index + 1]?.focus();
  };

  const handleCodeKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      codeRefs.current[index - 1]?.focus();
    }
  };

  const verifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some((d) => d === "")) {
      setOtpError("کد ۴ رقمی را کامل وارد کنید.");
      return;
    }
    goToDashboard();
  };

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password) {
      setEmailError("ایمیل/موبایل و رمز عبور را وارد کنید.");
      return;
    }
    setEmailError(undefined);
    goToDashboard();
  };

  const tabClass = (active: boolean) =>
    `flex-1 border-b-2 px-2 py-3 text-sm font-semibold transition-colors ${
      active
        ? "border-accent text-text-primary"
        : "border-transparent text-text-secondary hover:text-text-primary"
    }`;

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
            ورود به حساب
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            برای ادامه، یکی از روش‌های زیر را انتخاب کنید.
          </p>
        </div>

        <div className="border border-border bg-surface p-8">
          <div className="mb-6 flex border-b border-border">
            <button
              type="button"
              onClick={() => setTab("otp")}
              className={tabClass(tab === "otp")}
            >
              ورود با موبایل (OTP)
            </button>
            <button
              type="button"
              onClick={() => setTab("email")}
              className={tabClass(tab === "email")}
            >
              ورود با ایمیل
            </button>
          </div>

          {tab === "otp" ? (
            !otpSent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendCode();
                }}
                className="flex flex-col gap-5"
              >
                <Field
                  id="otp-mobile"
                  label="شماره موبایل"
                  icon={Smartphone}
                  type="tel"
                  inputMode="numeric"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  autoComplete="tel"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setOtpError(undefined);
                  }}
                  error={otpError}
                />
                <button type="submit" className={btnPrimary}>
                  ارسال کد
                </button>
              </form>
            ) : (
              <form onSubmit={verifyCode} className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-text-secondary">
                    کد تأیید به شماره{" "}
                    <span dir="ltr" className="font-medium text-text-primary">
                      {toEnglishDigits(mobile.trim())}
                    </span>{" "}
                    ارسال شد.
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false);
                      setCode(["", "", "", ""]);
                      setOtpError(undefined);
                    }}
                    className="shrink-0 font-medium text-accent-warm hover:underline"
                  >
                    ویرایش
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-center text-sm font-medium text-text-secondary">
                    کد ۴ رقمی را وارد کنید
                  </label>
                  <div dir="ltr" className="flex justify-center gap-3">
                    {code.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          codeRefs.current[i] = el;
                        }}
                        value={digit}
                        onChange={(e) => handleCodeChange(i, e.target.value)}
                        onKeyDown={(e) => handleCodeKeyDown(i, e)}
                        inputMode="numeric"
                        maxLength={1}
                        aria-label={`رقم ${i + 1}`}
                        className="h-14 w-14 border border-border bg-surface-alt text-center text-xl font-bold text-text-primary transition-colors focus:border-accent focus:outline-none"
                      />
                    ))}
                  </div>
                  {otpError ? (
                    <p className="text-center text-xs text-red-400">{otpError}</p>
                  ) : null}
                </div>

                <button type="submit" className={btnPrimary}>
                  ورود
                </button>
                <button
                  type="button"
                  onClick={sendCode}
                  className="text-center text-xs text-text-muted transition-colors hover:text-text-secondary"
                >
                  ارسال مجدد کد
                </button>
              </form>
            )
          ) : (
            <form onSubmit={submitEmail} className="flex flex-col gap-5">
              <Field
                id="identifier"
                label="ایمیل یا شماره موبایل"
                icon={AtSign}
                placeholder="you@example.com"
                autoComplete="username"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setEmailError(undefined);
                }}
              />
              <Field
                id="login-password"
                label="رمز عبور"
                icon={Lock}
                password
                placeholder="رمز عبور"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setEmailError(undefined);
                }}
              />
              {emailError ? (
                <p className="text-xs text-red-400">{emailError}</p>
              ) : null}
              <button type="submit" className={btnPrimary}>
                ورود
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-text-secondary">
          حساب نداری؟{" "}
          <Link
            href="/register"
            className="font-semibold text-accent-warm hover:underline"
          >
            ثبت‌نام کن
          </Link>
        </p>
      </div>
    </section>
  );
}
