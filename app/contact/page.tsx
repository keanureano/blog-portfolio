// app/page.tsx
import { getMdx } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "Contact | KN",
};

export default async function Contact() {
  const { content } = await getMdx("cms/contact.mdx");
  return <MDXRemote source={content} />;
}
