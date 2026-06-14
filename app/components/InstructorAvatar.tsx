import Image from "next/image";

// Renders the instructor photo, or an initial-based placeholder until a real
// photo is provided. The caller supplies the round, sized, overflow-hidden
// wrapper; this fills it.
export default function InstructorAvatar({
  name,
  src,
  sizes,
  className = "object-cover",
}: {
  name: string;
  src?: string;
  sizes: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image src={src} alt={name} fill sizes={sizes} className={className} />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-accent text-4xl font-bold text-white"
    >
      {name.trim().charAt(0)}
    </span>
  );
}
