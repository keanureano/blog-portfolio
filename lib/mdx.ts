import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function mdx(filePath: string) {
  const absolutePath = path.join(process.cwd(), filePath);
  const fileContent = await readFile(absolutePath, "utf8");

  const { content, data } = matter(fileContent);

  return {
    frontmatter: data as Record<string, any>,
    content,
  };
}
