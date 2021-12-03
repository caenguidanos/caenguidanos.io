import { resolve } from "./server-shared-io-util-resolve";

describe("shared-io resolve", () => {
   it("should build correct path", () => {
      const rootPath = process.cwd();
      const relativePath = "src";

      const result = resolve(relativePath);

      expect(result).toBe(`${rootPath}/${relativePath}`);
   });
});
