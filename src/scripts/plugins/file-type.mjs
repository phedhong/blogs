import { statSync } from "node:fs";

const exculdes = ["", "src", "Users", "pro", "Desktop"];

export default function remarkFileType() {
  return function (tree, file) {
    const filepath = file.history[0];
    let filetags = filepath.split("/");

    const filename = filetags.pop();
    const [name, type] = filename.split(".");
    file.data.astro.type = type.toString();

    const tags = Object.keys(file.data.astro.frontmatter).includes("tags")
      ? [...file.data.astro.frontmatter.tags, ...filetags]
      : [...filetags];
    file.data.astro.frontmatter.tags = tags.filter(
      (tag) => !exculdes.includes(tag),
    );

    const isDraft = file.data.astro.frontmatter.draft
      ? file.data.astro.frontmatter.draft
      : false;
    file.data.astro.frontmatter.draft = isDraft;
  };
}
