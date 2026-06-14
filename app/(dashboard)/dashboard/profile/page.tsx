"use client";

import { useRef, useState } from "react";
import {
  User,
  Smartphone,
  AtSign,
  Lock,
  Eye,
  EyeOff,
  Camera,
  ShieldCheck,
  CircleCheckBig,
} from "lucide-react";
import { user } from "../../data";

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

function SuccessNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border border-accent-warm/40 bg-accent-warm/10 px-4 py-2.5 text-sm text-accent-warm">
      <CircleCheckBig size={16} aria-hidden="true" />
      {children}
    </div>
  );
}

const btnPrimary =
  "w-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#5c5c5c] transition-all hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#5c5c5c]";

const initialsOf = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .slice(0, 2)
    .join("");

export default function ProfilePage() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const [profile, setProfile] = useState({
    name: user.name,
    mobile: user.mobile,
    email: user.email,
    bio: "دانشجوی طراحی داخلی، علاقه‌مند به معماری مدرن و نورپردازی فضا.",
  });
  const [profileErrors, setProfileErrors] = useState<{
    name?: string;
    mobile?: string;
    email?: string;
  }>({});
  const [profileSaved, setProfileSaved] = useState(false);

  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [pwdError, setPwdError] = useState<string>();
  const [pwdSaved, setPwdSaved] = useState(false);

  const updateProfile =
    (field: "name" | "mobile" | "email" | "bio") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setProfile((prev) => ({ ...prev, [field]: e.target.value }));
      setProfileErrors((prev) => ({ ...prev, [field]: undefined }));
      setProfileSaved(false);
    };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // پیش‌نمایش محلی آواتار (بدون آپلود به سرور)
    setAvatarUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
    setProfileSaved(false);
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof profileErrors = {};

    if (!profile.name.trim()) next.name = "نام را وارد کنید.";

    const mobile = toEnglishDigits(profile.mobile.trim());
    if (!mobilePattern.test(mobile))
      next.mobile = "شماره موبایل معتبر نیست. نمونه: ۰۹۱۲۱۲۳۴۵۶۷";

    if (profile.email.trim() && !emailPattern.test(profile.email.trim()))
      next.email = "ایمیل وارد شده معتبر نیست.";

    setProfileErrors(next);
    if (Object.keys(next).length === 0) {
      // فیک: بدون backend واقعی، فقط پیام موفقیت نمایش داده می‌شود
      setProfileSaved(true);
    }
  };

  const updatePwd =
    (field: "current" | "next" | "confirm") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPwd((prev) => ({ ...prev, [field]: e.target.value }));
      setPwdError(undefined);
      setPwdSaved(false);
    };

  const handlePwdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pwd.current || !pwd.next || !pwd.confirm) {
      setPwdError("همه‌ی فیلدها را پر کنید.");
      return;
    }
    if (pwd.next.length < 6) {
      setPwdError("رمز جدید باید حداقل ۶ کاراکتر باشد.");
      return;
    }
    if (pwd.next !== pwd.confirm) {
      setPwdError("رمز جدید و تکرار آن یکسان نیستند.");
      return;
    }
    // فیک: بدون backend واقعی، فقط پیام موفقیت نمایش داده می‌شود
    setPwdError(undefined);
    setPwd({ current: "", next: "", confirm: "" });
    setPwdSaved(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          پروفایل کاربری
        </h1>
        <p className="text-text-secondary">اطلاعات حساب خود را ویرایش کنید.</p>
      </header>

      {/* ویرایش اطلاعات */}
      <form
        onSubmit={handleProfileSubmit}
        noValidate
        className="flex flex-col gap-6 border border-border bg-surface p-6 sm:p-8"
      >
        <div className="flex items-center gap-5">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-accent text-2xl font-bold text-white"
            style={
              avatarUrl
                ? {
                    backgroundImage: `url(${avatarUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            {!avatarUrl ? initialsOf(profile.name) : null}
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex w-fit items-center gap-2 border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-border-strong"
            >
              <Camera size={16} aria-hidden="true" />
              تغییر آواتار
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <span className="text-xs text-text-muted">
              JPG یا PNG، حداکثر ۲ مگابایت.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            id="profile-name"
            label="نام و نام خانوادگی"
            icon={User}
            value={profile.name}
            onChange={updateProfile("name")}
            error={profileErrors.name}
          />
          <Field
            id="profile-mobile"
            label="شماره موبایل"
            icon={Smartphone}
            type="tel"
            inputMode="numeric"
            value={profile.mobile}
            onChange={updateProfile("mobile")}
            error={profileErrors.mobile}
          />
          <Field
            id="profile-email"
            label="ایمیل"
            icon={AtSign}
            type="email"
            value={profile.email}
            onChange={updateProfile("email")}
            error={profileErrors.email}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="profile-bio"
            className="text-sm font-medium text-text-secondary"
          >
            بیو
          </label>
          <textarea
            id="profile-bio"
            rows={4}
            value={profile.bio}
            onChange={updateProfile("bio")}
            placeholder="درباره‌ی خودتان بنویسید..."
            className="w-full resize-none border border-border bg-surface-alt p-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
          />
        </div>

        {profileSaved ? (
          <SuccessNote>تغییرات با موفقیت ذخیره شد.</SuccessNote>
        ) : null}

        <button
          type="submit"
          className={`${btnPrimary} sm:w-fit sm:self-start sm:px-8`}
        >
          ذخیره تغییرات
        </button>
      </form>

      {/* تغییر رمز عبور */}
      <form
        onSubmit={handlePwdSubmit}
        noValidate
        className="flex flex-col gap-6 border border-border bg-surface p-6 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck size={22} className="text-accent-warm" aria-hidden="true" />
          <h2 className="text-xl font-bold text-text-primary">تغییر رمز عبور</h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <Field
            id="pwd-current"
            label="رمز عبور فعلی"
            icon={Lock}
            password
            placeholder="رمز فعلی"
            autoComplete="current-password"
            value={pwd.current}
            onChange={updatePwd("current")}
          />
          <Field
            id="pwd-next"
            label="رمز عبور جدید"
            icon={Lock}
            password
            placeholder="حداقل ۶ کاراکتر"
            autoComplete="new-password"
            value={pwd.next}
            onChange={updatePwd("next")}
          />
          <Field
            id="pwd-confirm"
            label="تکرار رمز عبور جدید"
            icon={Lock}
            password
            placeholder="رمز جدید را دوباره وارد کنید"
            autoComplete="new-password"
            value={pwd.confirm}
            onChange={updatePwd("confirm")}
          />
        </div>

        {pwdError ? <p className="text-sm text-red-400">{pwdError}</p> : null}
        {pwdSaved ? (
          <SuccessNote>رمز عبور با موفقیت تغییر کرد.</SuccessNote>
        ) : null}

        <button
          type="submit"
          className={`${btnPrimary} sm:w-fit sm:self-start sm:px-8`}
        >
          تغییر رمز عبور
        </button>
      </form>
    </div>
  );
}
