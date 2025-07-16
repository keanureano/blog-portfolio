import { getMdxFiles } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work | KN",
};

export default async function Work() {
  const mdxFiles = await getMdxFiles("cms/work");
  return (
    <>
      <h2>
        <em>Recent Work</em>
      </h2>
      <ul>
        {mdxFiles.map((file) => (
          <li key={file.slug}>
            <Link href={"work/" + file.slug}>{file.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
