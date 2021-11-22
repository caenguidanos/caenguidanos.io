import { EMPTY_STRING } from "$shared/constants";

import { transformToHtml } from "./transform-to-html";
import { markdownContentMock } from "./transform-to-html.mock";

describe("shared-markdown-util-transform-to-html", () => {
   it("should transform markdown to HTML", async () => {
      const result = await transformToHtml({ input: markdownContentMock.default });

      expect(result).toMatch(`<h1>Hello</h1>`);
      expect(result).toMatch(`<p>This is a mock content for unit testing.</p>`);
      expect(result).toMatch(`<pre class="shiki" style="background-color: #fff">`);
   });

   it("should not transform markdown to HTML if invalid input", async () => {
      const result = await transformToHtml({} as unknown as Record<"input", string>);

      expect(result).toBe(EMPTY_STRING);
   });
});
