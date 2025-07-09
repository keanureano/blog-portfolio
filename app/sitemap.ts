import { getMdx } from "@/lib/mdx";
import type { MetadataRoute } from "next";

const { frontmatter } = await getMdx("cms/home.mdx");
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return frontmatter.links.map((link: any) => ({
    url: `${frontmatter.url}${link.href}`,
    lastModified: new Date(),
    priority: link.href === "/" ? 1.0 : undefined,
  }));
}
