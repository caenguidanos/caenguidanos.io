import { transformToHtml } from "$lib/server/markdown";

export const content = {
   default: `
   # Hello

   This is a mock content for unit testing.

   \`\`\`typescript
   function sum(a: number, b: number): number {
      return (a + b) ** 2;
   }

   console.log('This is a code block');
   \`\`\`

   - Bye,
   - Bye
   `
};

describe("Server::Markdown::transformToHTML", () => {
   it("should transform markdown to HTML", async () => {
      const result = await transformToHtml({ input: content.default });

      expect(result).toMatch(`<h1>Hello</h1>`);
      expect(result).toMatch(`<p>This is a mock content for unit testing.</p>`);
      expect(result).toMatch(`<pre class="shiki" style="background-color: #fff">`);
   });

   it("should not transform markdown to HTML if invalid input", async () => {
      const result = await transformToHtml({} as unknown as Record<"input", string>);

      expect(result).toBe("");
   });
});
