// app/page.tsx
import { getMdx } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import WorkList from "./work/page";

export default async function Home() {
  const { content } = await getMdx("cms/home.mdx");
  return <MDXRemote source={content} components={{ WorkList }} />;
}
