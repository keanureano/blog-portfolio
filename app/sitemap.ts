import type { MetadataRoute } from "next";
import meta from "./cms/meta.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return meta.links.map((link) => ({
    url: `${meta.url}${link.href}`,
    lastModified: new Date(),
    priority: link.href === "/" ? 1.0 : undefined,
  }));
}
