import { remarkShikiThemes } from "./shared-markdown-util-remark-shiki-themes";

describe("MarkdownUtilRemarkShikiThemes", () => {
   it("should get GithubLight theme", () => {
      expect(remarkShikiThemes.github.light).toBeTruthy();
      expect(remarkShikiThemes.github.light).toHaveProperty("name", "GitHub Light");
   });
});
