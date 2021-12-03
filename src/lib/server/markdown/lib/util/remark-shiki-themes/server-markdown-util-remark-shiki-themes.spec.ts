import { remarkShikiThemes } from "./server-markdown-util-remark-shiki-themes";

describe("Server::Markdown::RemarkShiki::Theme", () => {
   it("should get GithubLight theme", () => {
      expect(remarkShikiThemes.github.light).toBeTruthy();
      expect(remarkShikiThemes.github.light).toHaveProperty("name", "GitHub Light");
   });
});
