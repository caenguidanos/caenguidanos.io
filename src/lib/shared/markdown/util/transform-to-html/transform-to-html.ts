import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import { Highlighter } from "shiki";

import { EMPTY_STRING } from "$shared/constants";

import { remarkShiki, remarkShikiCacheHighlighter } from "../plugins";

interface TransformToHtmlOptions {
   input: string;
}

const getHighlighterCache = remarkShikiCacheHighlighter();

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

      return EMPTY_STRING;
   }
}
