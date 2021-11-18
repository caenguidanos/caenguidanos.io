import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   outputDir: "test/e2e/results/ci",
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
         name: "Desktop Safari",
         use: {
            ...devices["Desktop Safari"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            ...devices["Pixel 5"]
         }
      },
      {
         name: "Mobile iOS",
         use: {
            ...devices["iPhone 12"]
         }
      }
   ],
   reporter: [["html", { outputFolder: "test/e2e/reports/ci" }], ["list"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "test", "e2e", "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: process.env.PLAYWRIGHT_BASE_URL }
};

export default config;