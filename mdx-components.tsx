import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="text-4xl font-semibold" />,
    h2: (props) => <h2 {...props} className="text-xl font-semibold" />,
    h3: (props) => <h3 {...props} className="text-lg font-medium" />,
    p: (props) => <p {...props} className="text-base leading-relaxed" />,
    a: (props) => <a {...props} className="text-blue-600 hover:underline" />,
    img: (props) => <img {...props} className="h-auto max-w-full" />,
    ...components,
  };
}
