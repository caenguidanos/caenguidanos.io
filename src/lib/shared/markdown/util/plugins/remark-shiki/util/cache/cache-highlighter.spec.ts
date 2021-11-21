import { remarkShikiCacheHighlighter, remarkShikiCacheHighlighterID } from "./cache-highlighter";

describe("SharedMarkdown :: UtilPluginsRemarkShiki CacheHighlighter", () => {
   it("should cache shiki highlighter", async () => {
      const getHighligterCache = remarkShikiCacheHighlighter();

      const cachePool = [];

      for (let i = 0; i < 20; i++) {
         const highlighter = await getHighligterCache();
         cachePool.push(highlighter);
      }

      const [fCache, ...rest] = cachePool;

      const reference = fCache[remarkShikiCacheHighlighterID];

      expect(reference.length).toBe(21);
      expect(typeof reference).toBe("string");

      for (const kCache of rest) {
         expect(reference).toBe(kCache[remarkShikiCacheHighlighterID]);
      }
   });
});
