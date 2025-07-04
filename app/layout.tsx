import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import meta from "./cms/meta.json";

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
        className={`${geistMono.className} bg-neutral-950 text-neutral-50 antialiased`}
      >
        <ParticlesBackground />
        <Navbar />
        <main className="prose relative z-10 container mx-auto max-w-2xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
