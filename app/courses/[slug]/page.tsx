import CourseDetailClient from "./CourseDetailClient";

// All courses render the same data, but static export needs the set of slugs
// to pre-render. Keep in sync with the course list in app/courses/page.tsx.
export function generateStaticParams() {
  return [
    { slug: "modern-interior-principles" },
    { slug: "interior-lighting" },
    { slug: "materials-and-decoration" },
    { slug: "autocad-3dsmax" },
    { slug: "advanced-interior-architecture" },
    { slug: "sketchup-3d-modeling" },
  ];
}

export default function CourseDetailPage() {
  return <CourseDetailClient />;
}
