import path from "path";
import { PlaywrightTestConfig } from "@playwright/test";

export const playwrightSharedConfig: Partial<PlaywrightTestConfig> = {
   preserveOutput: "always",
   testDir: path.join(process.cwd(), "core"),
   testMatch: "**/*.e2e.ts",
   timeout: 30 * 1000,
   outputDir: path.join(process.cwd(), "dist", "e2e", "out"),
   reporter: [
      [
         "html",
         {
            outputFolder: path.join(process.cwd(), "dist", "e2e", "html"),
            open: "never"
         }
      ],
      ["list"]
   ],
   use: { baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000", trace: "retry-with-trace" }
};
