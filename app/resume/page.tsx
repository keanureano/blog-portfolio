import { getMdx } from "@/lib/mdx";
import Link from "next/link";

export default async function ResumePage() {
  const { frontmatter } = await getMdx("cms/home.mdx");
  return (
    <>
      <Link href={`${frontmatter.resume}/export?format=pdf&tab=t.0`}>
        <em className="ml-5">Download</em>
      </Link>
      <iframe
        src={`${frontmatter.resume}/preview?tab=t.0`}
        className="h-screen w-full border-0 invert"
        allowFullScreen
      />
    </>
  );
}
