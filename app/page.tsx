// app/page.tsx
import { getMdx } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Work from "./work/page";

export default async function Home() {
  const { content } = await getMdx("cms/home.mdx");
  return <MDXRemote source={content} components={{ Work }} />;
}
