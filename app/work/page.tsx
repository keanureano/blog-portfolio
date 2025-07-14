import { getMdxFiles } from "@/lib/mdx";
import Link from "next/link";

export default async function WorkList() {
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
