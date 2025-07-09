import { readdir, readFile, stat } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getMdx(filePath: string) {
  const absolutePath = path.join(process.cwd(), filePath);
  const fileContent = await readFile(absolutePath, "utf8");

  const { content, data: frontmatter } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}

export async function getMdxFiles(dir: string) {
  const absoluteDir = path.join(process.cwd(), dir);
  const files = await readdir(absoluteDir);

  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const mdxData = await Promise.all(
    mdxFiles.map(async (file) => {
      const absolutePath = path.join(absoluteDir, file);
      const fileStat = await stat(absolutePath);
      const fileContent = await readFile(absolutePath, "utf8");
      const slug = file.replace(/\.mdx$/, "");
      const { content, data: frontmatter } = matter(fileContent);

      return {
        frontmatter,
        createdAt: fileStat.birthtime,
        content,
        slug,
      };
    }),
  );

  mdxData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return mdxData;
}
