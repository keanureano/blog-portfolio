// app/page.tsx
import { getMdx, getMdxFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function Home() {
  const { content } = await getMdx("cms/home.mdx");
  return <MDXRemote source={content} components={{ WorkList }} />;
}

async function WorkList() {
  const mdxFiles = await getMdxFiles("cms/work");
  return (
    <>
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
