import { Doto } from "next/font/google";
import Link from "next/link";
import meta from "../cms/meta.json";

const dotoMono = Doto({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link
        href="/"
        className={`${dotoMono.className} hover:drop-shadow-glow text-4xl font-bold text-neutral-50 transition`}
      >
        {meta.logo}
      </Link>
      <ul className="flex space-x-4">
        {meta.links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover hover:drop-shadow-glow text-neutral-400 transition hover:text-neutral-50"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
