import unified from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import path from "path";

import { getHighlighter, loadTheme } from "shiki";

import remarkShiki from "./shiki-remark";

interface TransformToHtmlOptions {
   input: string;
}

export async function transformToHtml(options: TransformToHtmlOptions): Promise<string> {
   const highlighter = await getHighlighter({
      theme: await loadTheme(path.resolve(process.cwd(), "data", "shiki-theme", "gh-light.json"))
   });

   const file = await unified()
      .use(remarkParse)
      .use(remarkShiki({ highlighter }))
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(options.input);

   return file.toString();
}
