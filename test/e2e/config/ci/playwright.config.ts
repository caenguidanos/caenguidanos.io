import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   outputDir: path.join(process.cwd(), "test/e2e/results/ci"),
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
         name: "Small Tablet Safari",
         use: {
            ...devices["iPad Mini"]
         }
      },
      {
         name: "Small Tablet Safari",
         use: {
            ...devices["iPad Pro"]
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
   reporter: [["html", { outputFolder: "test/e2e/reports/ci", open: false }], ["dot"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "test", "e2e", "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL },
   webServer:
      baseURL === "http://localhost:3000"
         ? {
              command: "./node_modules/next/dist/bin/next start",
              port: 3000,
              timeout: 120 * 1000,
              reuseExistingServer: false
           }
         : undefined
};

export default config;
