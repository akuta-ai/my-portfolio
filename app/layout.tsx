import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description: "フロントエンドエンジニアのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
