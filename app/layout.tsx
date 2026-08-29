import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Phani - AI Engineering Leader, Quality Engineering",
  description:
    "Portfolio of Phani Kumar, Principal SDET with 18 years of experience in test automation, CI/CD, and digital transformation for Fortune 500 companies.",
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="text-white antialiased min-h-screen"
        style={{ backgroundColor: "#0a0a0a" }}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
