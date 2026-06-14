import { Suspense } from "react";
import CoursesClient from "./CoursesClient";

// CoursesClient reads the `?type=` query string via useSearchParams, which
// requires a Suspense boundary when the page is statically exported.
export default function CoursesPage() {
  return (
    <Suspense>
      <CoursesClient />
    </Suspense>
  );
}
