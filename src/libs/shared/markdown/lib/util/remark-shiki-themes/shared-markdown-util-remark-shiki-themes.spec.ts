import { remarkShikiThemes } from "$shared/markdown";

describe("shared-markdown-util-plugins-remark-shiki-themes", () => {
   it("should get GithubLight theme", () => {
      expect(remarkShikiThemes.github.light).toBeTruthy();
      expect(remarkShikiThemes.github.light).toHaveProperty("name", "GitHub Light");
   });
});
