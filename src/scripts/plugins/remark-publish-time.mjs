import { execSync } from "child_process";


export default function remarkPublishedTime() {
  return function (tree, file) {
    const filepath = file.history[0];

    if (file.data.astro.frontmatter.draft === false) {
      const result = execSync(`git log -1 --pretty="format:%cI" ${filepath}`);
      file.data.astro.frontmatter.pubDate = result.toString();
    }

  };
}
