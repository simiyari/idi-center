import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simiyari.github.io/idi-center"),
  title: "IDI Center | مرکز تخصصی طراحی داخلی",
  description:
    "IDI Center؛ مرکز تخصصی آموزش طراحی و معماری داخلی و صاحب اولین کرسی آموزش تخصصی طراحی داخلی در ایران.",
  openGraph: {
    title: "IDI Center | مرکز تخصصی طراحی داخلی",
    description: "مرکز تخصصی آموزش طراحی و معماری داخلی — IDI Center.",
    siteName: "IDI Center",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "IDI Center — مرکز تخصصی طراحی داخلی",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
