import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   preserveOutput: "failures-only",
   projects: [
      {
         name: "Desktop Chrome",
         use: {
            ...devices["Desktop Chrome"]
         }
      },
      {
         name: "Desktop Firefox",
         use: {
            ...devices["Desktop Firefox"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            ...devices["Pixel 5"]
         }
      }
   ],
   reporter: [["html", { outputFolder: "coverage-e2e" }], ["list"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: process.env.PLAYWRIGHT_BASE_URL }
};

export default config;
