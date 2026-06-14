import { notFound } from "next/navigation";
import { courses, getCourse } from "../data";
import CourseDetailClient from "./CourseDetailClient";

// Pre-render one static page per real course slug.
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseDetailClient course={course} />;
}
