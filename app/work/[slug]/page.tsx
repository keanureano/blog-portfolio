// app/work/[slug]/page.tsx

import { getMdx, getMdxFiles } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

type Params = Promise<{ slug: string[] }>;

export const metadata: Metadata = {
  title: "Work | KN",
};

export default async function WorkDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const { content } = await getMdx(`cms/work/${slug}.mdx`);
  return <MDXRemote source={content} />;
}

export async function generateStaticParams() {
  const works = await getMdxFiles("cms/work");
  return works.map((work) => ({ slug: work.slug }));
}
