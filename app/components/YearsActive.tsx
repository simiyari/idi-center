"use client";

import { useEffect, useState } from "react";
import jalaali from "jalaali-js";

// IDI CENTER was founded in Jalali year 1395 (≈ 10 years before 1405/2026).
// The "years active" stat is derived from this so it rolls over on its own
// each Persian new year — no rebuild needed.
const FOUNDING_JALALI_YEAR = 1395;

function yearsActive() {
  const now = new Date();
  const { jy } = jalaali.toJalaali(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate()
  );
  return jy - FOUNDING_JALALI_YEAR;
}

export default function YearsActive() {
  // Initialise from the build-time value (matches the prerendered HTML), then
  // refresh on the client so a year that has rolled over since the last build
  // is reflected live.
  const [years, setYears] = useState(yearsActive);
  useEffect(() => setYears(yearsActive()), []);
  return <>{years.toLocaleString("fa-IR", { useGrouping: false })}</>;
}
