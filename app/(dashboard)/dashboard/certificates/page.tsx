"use client";

import { useState } from "react";
import { Award, Download } from "lucide-react";
import { certificates } from "../../data";

export default function CertificatesPage() {
  // فیک: بدون backend واقعی، فایلی دانلود نمی‌شود
  const [downloaded, setDownloaded] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          گواهی‌های من
        </h1>
        <p className="text-text-secondary">
          گواهی دوره‌هایی که با موفقیت تکمیل کرده‌اید، اینجا قابل دریافت است.
        </p>
      </header>

      {certificates.length === 0 ? (
        <div className="flex flex-col items-center gap-3 border border-dashed border-border bg-surface p-12 text-center">
          <Award size={32} className="text-text-muted" aria-hidden="true" />
          <p className="text-text-secondary">
            هنوز گواهی‌ای دریافت نکرده‌اید. با تکمیل دوره‌ها، گواهی شما اینجا
            نمایش داده می‌شود.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {certificates.map((cert) => (
            <article
              key={cert.code}
              className="flex flex-col gap-4 border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white">
                  <Award size={24} aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-text-primary">
                    {cert.course}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    صادرشده در {cert.issuedAt} · کد گواهی:{" "}
                    <span dir="ltr">{cert.code}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDownloaded(cert.code)}
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Download size={16} aria-hidden="true" />
                دانلود گواهی
              </button>
            </article>
          ))}
        </div>
      )}

      {downloaded ? (
        <p className="text-sm text-text-muted">
          نمونه است — بدون backend واقعی، فایل گواهی دانلود نمی‌شود.
        </p>
      ) : null}
    </div>
  );
}
