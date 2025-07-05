import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 {...props} className="mb-6 text-4xl font-semibold text-neutral-50" />
    ),
    h2: (props) => <h2 {...props} className="mb-4 text-xl font-semibold" />,
    h3: (props) => <h3 {...props} className="mb-4 text-lg font-medium" />,
    p: (props) => <p {...props} className="mb-4 text-base" />,
    a: (props) => (
      <a
        {...props}
        className="hover:drop-shadow-glow text-neutral-50 transition hover:underline"
      />
    ),
    img: (props) => <img {...props} className="h-auto max-w-full" />,
    ...components,
  };
}
