import { getMdx } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | KN",
};

export default async function Resume() {
  const { frontmatter } = await getMdx("cms/home.mdx");
  return (
    <>
      <h2>
        <em>Resume</em>
      </h2>
      <Link href={`${frontmatter.resume}/export?format=pdf&tab=t.0`}>
        <strong className="ml-5">Download</strong>
      </Link>
      <iframe
        src={`${frontmatter.resume}/preview?tab=t.0`}
        className="h-screen w-full border-0 invert"
        allowFullScreen
      />
    </>
  );
}
