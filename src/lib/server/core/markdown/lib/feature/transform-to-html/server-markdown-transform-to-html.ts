import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import { Highlighter } from "shiki";

import { remarkShiki } from "../remark-shiki/server-markdown-remark-shiki-plugin";
import { remarkShikiCacheHighlighter } from "../../util/remark-shiki-cache/server-markdown-util-remark-shiki-cache";
import { remarkShikiThemes } from "../../util/remark-shiki-themes/server-markdown-util-remark-shiki-themes";

export interface TransformToHtmlOptions {
   input: string;
}

const getHighlighterCache = remarkShikiCacheHighlighter({ theme: remarkShikiThemes.github.light });

export async function transformToHtml(options: TransformToHtmlOptions): Promise<string> {
   try {
      const highlighter: Highlighter = await getHighlighterCache();

      const file = await unified()
         .use(remarkParse)
         .use(remarkShiki, { highlighter })
         .use(remarkGfm)
         .use(remarkRehype, { allowDangerousHtml: true })
         .use(rehypeRaw)
         .use(rehypeStringify)
         .process(options.input);

      return file.toString();
   } catch (error) {
      console.error(error);

      return "";
   }
}
