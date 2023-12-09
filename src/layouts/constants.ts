

const createStringPair: StringMap = (property: keyof StringMap, value: string) => {
  return { [property]: value }
}
export const defaultCategory = "blogs";


export const categoryMaps = {
  about: "about",
  components: "components",
  blogs: "blogs",
  docs: "docs",
  tags: "tags",
  rss: "rss.xml"
};



export const dbMaps = {
  components: "/examples/*/*.{astro, svelte, html,tsx, jsx}",
  blogs: "/src/content/mdx/*.mdx",
};

export const Tags = {
  content: ["astro", "svelte", "tsx", "html", "jsx"],
  frontmatter: ["md", "mdx", "doc"],
};

export const getFiles = async () => {
  const modules = import.meta.glob(
    [
      "/src/components/elements/**/*.{astro,svelte,tsx,jsx,html}",
      "/src/content/**/*.{md,mdx}",
    ],
    { import: "default", eager: true },
  );

  const files = Object.entries(modules).map(([path, content]) => {
    const filename = path.split("/").pop();
    const [title, type] = filename.split(".");
    return {
      title,
      type,
      slug: path,
      content,
    };
  });

  return files;
};

export const getCategoryFromUrl = (url: URL) => {
  const [, category] = url.pathname.split("/");
  if (category in categoryMaps) return category as string;
  return defaultCategory;
};
