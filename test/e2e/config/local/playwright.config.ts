import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   outputDir: "test/e2e/results/ci",
   preserveOutput: "always",
   projects: [
      {
         name: "Desktop Edge",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Edge"]
         }
      },
      {
         name: "Desktop Chrome",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Chrome"]
         }
      },
      {
         name: "Desktop Firefox",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Firefox"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Pixel 5"]
         }
      }
   ],
   reporter: [["html", { outputFolder: "test/e2e/reports/local" }], ["list"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "test", "e2e", "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: "http://0.0.0.0:3000" },
   webServer: {
      command: "./node_modules/next/dist/bin/next dev",
      port: 3000,
      timeout: 120 * 1000,
      reuseExistingServer: true
   }
};

export default config;
