import { Highlighter } from "shiki";

import { remarkShikiThemes } from "$lib/server/markdown";

import {
   HighlighterWithCache,
   RemarkShikiCacheErrors,
   remarkShikiCacheHighlighter,
   remarkShikiCacheHighlighterID,
   remarkShikiComposeHighlighterCache,
   remarkShikiCreateHighlighter
} from "$lib/server/markdown";

describe("Server::Markdown::RemarkShiki::Cache", () => {
   it("should create new highlighter", async () => {
      const result: Highlighter = await remarkShikiCreateHighlighter({
         theme: remarkShikiThemes.github.light
      });

      expect(result).toHaveProperty("codeToHtml");
      expect(result).toHaveProperty("codeToThemedTokens");
      expect(result).toHaveProperty("getTheme");
      expect(result).toHaveProperty("loadTheme");
      expect(result).toHaveProperty("loadLanguage");
      expect(result).toHaveProperty("getLoadedThemes");
      expect(result).toHaveProperty("getLoadedLanguages");
      expect(result).toHaveProperty("getForegroundColor");
      expect(result).toHaveProperty("getBackgroundColor");
   });

   it("should not create new highlighter with invalid theme", async () => {
      try {
         await remarkShikiCreateHighlighter({
            theme: "hey joe"
         });
      } catch (error) {
         expect(error).toBeTruthy();
      }
   });

   it("should assign cache property to highlighter", async () => {
      const highlighter: Highlighter = await remarkShikiCreateHighlighter({
         theme: remarkShikiThemes.github.light
      });

      const result: HighlighterWithCache = remarkShikiComposeHighlighterCache(highlighter);

      expect(result).toHaveProperty("codeToHtml");
      expect(result).toHaveProperty("codeToThemedTokens");
      expect(result).toHaveProperty("getTheme");
      expect(result).toHaveProperty("loadTheme");
      expect(result).toHaveProperty("loadLanguage");
      expect(result).toHaveProperty("getLoadedThemes");
      expect(result).toHaveProperty("getLoadedLanguages");
      expect(result).toHaveProperty("getForegroundColor");
      expect(result).toHaveProperty("getBackgroundColor");
      expect(result).toHaveProperty(remarkShikiCacheHighlighterID);
   });

   it("should not assign cache property to highlighter and throw TypeError", () => {
      expect(() => remarkShikiComposeHighlighterCache(77 as unknown as Highlighter)).toThrowError(
         RemarkShikiCacheErrors.InvalidType
      );
   });

   it("should cache shiki highlighter", async () => {
      const getHighligterCache = remarkShikiCacheHighlighter({
         theme: remarkShikiThemes.github.light
      });

      const cachePool = [];

      for (let i = 0; i < 20; i++) {
         const highlighter = await getHighligterCache();
         cachePool.push(highlighter);
      }

      const [fCache, ...rest] = cachePool;

      const reference = fCache[remarkShikiCacheHighlighterID];

      expect(reference).toHaveLength(21);

      for (const kCache of rest) {
         expect(reference).toBe(kCache[remarkShikiCacheHighlighterID]);
      }
   });
});
