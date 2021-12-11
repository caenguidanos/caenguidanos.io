import path from "path";
import { PlaywrightTestConfig } from "@playwright/test";

export const playwrightSharedConfig: Partial<PlaywrightTestConfig> = {
   preserveOutput: "always",
   testDir: path.join(process.cwd(), "pages-e2e"),
   testMatch: "**/*.spec.ts",
   timeout: 30000,
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
   use: { baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000", trace: { mode: "on" } }
};
