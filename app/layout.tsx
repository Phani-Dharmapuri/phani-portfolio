import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorEffect from "../components/CursorEffect";
import ChatBot from "../components/ChatBot";

export const metadata: Metadata = {
  title: "Phani Kumar - AI Engineering Leader, Quality Engineering",
  description:
    "Portfolio of Phani Kumar, Principal SDET with 18 years of experience in test automation, CI/CD, and digital transformation for Fortune 500 companies."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen">
        <CursorEffect />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
