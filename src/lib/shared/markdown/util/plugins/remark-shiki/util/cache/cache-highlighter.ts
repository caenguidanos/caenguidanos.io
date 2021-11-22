import { getHighlighter, Highlighter } from "shiki";
import { nanoid } from "nanoid";

export const remarkShikiCacheHighlighterID = "__CACHE__";

export enum RemarkShikiCacheErrors {
   InvalidType = "nextHighlighter must be of type object"
}

export interface HighlighterWithCache extends Highlighter {
   [remarkShikiCacheHighlighterID]: string;
}

export interface RemarkShikiCacheHighlighter {
   theme: unknown;
}

export interface RemarkShikiCreateHighlighter {
   theme: unknown;
}

export function remarkShikiComposeHighlighterCache(
   nextHighlighter: Highlighter
): HighlighterWithCache {
   if (typeof nextHighlighter !== "object") {
      throw new TypeError(RemarkShikiCacheErrors.InvalidType);
   }

   const cacheID: string = nanoid();
   const highlighter: Highlighter = Object.assign({}, nextHighlighter);

   highlighter[remarkShikiCacheHighlighterID] = cacheID;

   return highlighter as HighlighterWithCache;
}

export function remarkShikiCreateHighlighter({
   theme
}: RemarkShikiCreateHighlighter): Promise<HighlighterWithCache> {
   return new Promise<HighlighterWithCache>((resolve, reject) => {
      getHighlighter({ theme: theme as string })
         .then((nextHighlighter) => {
            try {
               const highlighterWithCacheID: HighlighterWithCache =
                  remarkShikiComposeHighlighterCache(nextHighlighter);

               resolve(highlighterWithCacheID);
            } catch (error) {
               throw new Error(error as string);
            }
         })
         .catch((err) => reject(err));
   });
}

export function remarkShikiCacheHighlighter({
   theme
}: RemarkShikiCacheHighlighter): () => Promise<Highlighter> {
   let highlighter: Highlighter;

   return async function cacheClosure() {
      if (!highlighter) {
         highlighter = await remarkShikiCreateHighlighter({ theme });
      }

      return highlighter;
   };
}
