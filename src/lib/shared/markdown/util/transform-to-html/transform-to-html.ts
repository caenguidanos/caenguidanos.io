import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import { getHighlighter, Highlighter } from "shiki";

import remarkShiki from "../plugins/shiki-remark/plugin";
import remarkShikiTheme from "../plugins/shiki-remark/theme.json";

interface TransformToHtmlOptions {
   input: string;
}

function cacheHighlighter(): Promise<Highlighter> {
   let highlighter: Highlighter;

   return new Promise<Highlighter>((resolve) => {
      if (!highlighter) {
         getHighlighter({
            theme: remarkShikiTheme as unknown as string
         }).then((nextHighlighter) => {
            highlighter = nextHighlighter;

            resolve(highlighter);
         });
      } else {
         resolve(highlighter);
      }
   });
}

export async function transformToHtml(options: TransformToHtmlOptions): Promise<string> {
   const highlighter: Highlighter = await cacheHighlighter();

   const file = await unified()
      .use(remarkParse)
      .use(remarkShiki, { highlighter })
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(options.input);

   return file.toString();
}
