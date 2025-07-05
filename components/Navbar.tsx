import { mdx } from "@/lib/mdx";
import { Doto } from "next/font/google";
import Link from "next/link";

const { frontmatter } = await mdx("cms/home.mdx");

const dotoMono = Doto({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link
        href="/"
        className={`${dotoMono.className} hover:drop-shadow-glow text-4xl font-bold text-neutral-50 transition`}
      >
        {frontmatter.logo}
      </Link>
      <ul className="flex space-x-4">
        {frontmatter.links.map((link: any) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover hover:drop-shadow-glow transition hover:text-neutral-50"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
