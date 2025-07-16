// app/page.tsx
import { getMdx } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "About | KN",
};

export default async function About() {
  const { content } = await getMdx("cms/about.mdx");
  return <MDXRemote source={content} />;
}
