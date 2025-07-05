import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import meta from "./cms/meta.json";
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: meta.name,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} bg-black text-neutral-50 antialiased`}
      >
        <BackgroundBeams />
        <Navbar />
        <main className="prose relative z-10 container mx-auto max-w-2xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
