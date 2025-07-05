// app/page.tsx
import { mdx } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Home() {
  const { content } = await mdx("cms/home.mdx");

  return <MDXRemote source={content} />;
}
