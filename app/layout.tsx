import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keanu Reaño",
  description: "I'm Keanu Reaño, a system developer and software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-neutral-50 antialiased blur-[.25px]`}
      >
        <ParticlesBackground />
        <main className="prose relative z-10 container mx-auto max-w-2xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
