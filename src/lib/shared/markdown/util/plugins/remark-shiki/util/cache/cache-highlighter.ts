import { getHighlighter, Highlighter } from "shiki";
import { nanoid } from "nanoid";

import { remarkShikiThemes } from "../../themes";

export const remarkShikiCacheHighlighterID = "__CACHE__";

function remarkShikiCreateHighlighter(): Promise<Highlighter> {
   const cacheID: string = nanoid();

   return new Promise<Highlighter>((resolve, reject) => {
      getHighlighter({
         theme: remarkShikiThemes.github.light as unknown as string
      })
         .then((nextHighlighter) => {
            const highlighter = Object.assign({}, nextHighlighter);
            highlighter[remarkShikiCacheHighlighterID] = cacheID;
            resolve(highlighter);
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
