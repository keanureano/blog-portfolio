import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";
import { mdx } from "@/lib/mdx";

const { frontmatter } = await mdx("cms/home.mdx");

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: frontmatter.name,
  description: frontmatter.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} bg-black text-neutral-400 antialiased selection:bg-neutral-900`}
      >
        <BackgroundBeams />
        <Navbar />
        <main className="animate-fade-in mdx relative z-10 container mx-auto min-h-screen max-w-2xl px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
