import { expect, describe, it } from "@jest/globals";

import { transformToHtml } from "./transform-to-html";

describe("SharedMarkdown :: Util transformToHtml", () => {
   it("should run", async () => {
      const result = await transformToHtml({
         input: "# Hi\n\n*Hello*, world!\n\n```ts\nconsole.log(67);\nconsole.log(89)\n```\n**Hola**"
      });

      expect(result).toBeTruthy();
   });
});
