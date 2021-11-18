import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   outputDir: path.join(process.cwd(), "test/e2e/results/local"),
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
         name: "Desktop Safari",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Safari"]
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
      },
      {
         name: "Mobile iOS",
         use: {
            locale: "es-ES",
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["iPhone 12"]
         }
      }
   ],
   reporter: [["html", { outputFolder: "test/e2e/reports/local", open: false }], ["list"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: "http://localhost:3000" },
   webServer: {
      command: "./node_modules/next/dist/bin/next dev",
      port: 3000,
      timeout: 120 * 1000,
      reuseExistingServer: true
   }
};

export default config;
