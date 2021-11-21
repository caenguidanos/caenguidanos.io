import { getHighlighter, Highlighter } from "shiki";
import { nanoid } from "nanoid";

import { remarkShikiThemes } from "../../themes";

export const remarkShikiCacheHighlighterID = "__CACHE__";

export function remarkShikiComposeHighlighterCache(nextHighlighter: Highlighter) {
   const cacheID: string = nanoid();

   const highlighter = Object.assign({}, nextHighlighter);
   highlighter[remarkShikiCacheHighlighterID] = cacheID;

   return highlighter;
}

export function remarkShikiCreateHighlighter(): Promise<Highlighter> {
   return new Promise<Highlighter>((resolve, reject) => {
      getHighlighter({
         theme: remarkShikiThemes.github.light as unknown as string
      })
         .then((nextHighlighter) => {
            try {
               const highlighterWithCacheID = remarkShikiComposeHighlighterCache(nextHighlighter);

               resolve(highlighterWithCacheID);
            } catch (error) {
               throw new Error(error as string);
            }
         })
         .catch((err) => reject(err));
   });
}

export function remarkShikiCacheHighlighter(): () => Promise<Highlighter> {
   let highlighter: Highlighter;

   return async function cacheClosure() {
      if (!highlighter) {
         highlighter = await remarkShikiCreateHighlighter();
      }

      return highlighter;
   };
}
