import { mdx } from "@/lib/mdx";
import { Doto } from "next/font/google";
import Link from "next/link";

const { frontmatter } = await mdx("cms/home.mdx");

const dotoMono = Doto({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <Link
        href="/"
        className={`${dotoMono.className} hover:drop-shadow-glow text-3xl font-bold text-neutral-50 transition`}
      >
        {frontmatter.logo}
      </Link>

      {/* Desktop menu */}
      <ul className="hidden space-x-4 lg:flex">
        {frontmatter.links.map((link: any) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:drop-shadow-glow transition hover:text-neutral-50"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger toggle */}
      <div className="group relative lg:hidden">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="flex cursor-pointer flex-col space-y-1 transition hover:brightness-75"
        >
          <span className="h-0.5 w-6 bg-neutral-300" />
          <span className="h-0.5 w-6 bg-neutral-300" />
          <span className="h-0.5 w-6 bg-neutral-300" />
        </label>

        {/* Mobile menu */}
        <ul className="absolute right-0 z-50 mt-2 hidden w-48 flex-col space-y-2 bg-black p-4 peer-checked:flex">
          {frontmatter.links.map((link: any) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:drop-shadow-glow block transition hover:text-neutral-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
