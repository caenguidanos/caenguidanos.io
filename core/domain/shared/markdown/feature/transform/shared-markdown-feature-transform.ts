import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import { Highlighter } from "shiki";

import { remarkShikiCacheHighlighter } from "../../util/remark-shiki-cache/shared-markdown-util-remark-shiki-cache";
import { remarkShikiThemes } from "../../util/remark-shiki-themes/shared-markdown-util-remark-shiki-themes";
import { remarkShiki } from "../remark-shiki/shared-markdown-feature-remark-shiki";
import { TransformOptions } from "../../entity/transform/shared-markdown-entity-transform";

const getHighlighterCache = remarkShikiCacheHighlighter({
   theme: remarkShikiThemes.github.light
});

export async function transform(options: TransformOptions): Promise<string> {
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
