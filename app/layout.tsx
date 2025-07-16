import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getMdx } from "@/lib/mdx";
import Background from "@/components/Background";

const { frontmatter } = await getMdx("cms/home.mdx");

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: frontmatter.title,
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
        className={`${geistMono.className} selection:bg-neutral-90 bg-black text-neutral-400 antialiased`}
      >
        <Background />
        <Navbar />
        <main className="animate-fade-in mdx relative z-10 mx-auto min-h-screen max-w-4xl px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
