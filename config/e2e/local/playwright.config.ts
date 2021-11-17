import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   preserveOutput: "failures-only",
   projects: [
      {
         name: "Desktop Edge",
         use: {
            locale: "es-ES",
            trace: "retain-on-failure",
            video: "retain-on-failure",
            screenshot: "only-on-failure",
            ...devices["Desktop Edge"]
         }
      },
      {
         name: "Desktop Chrome",
         use: {
            locale: "es-ES",
            trace: "retain-on-failure",
            video: "retain-on-failure",
            screenshot: "only-on-failure",
            ...devices["Desktop Chrome"]
         }
      },
      {
         name: "Desktop Firefox",
         use: {
            locale: "es-ES",
            trace: "retain-on-failure",
            video: "retain-on-failure",
            screenshot: "only-on-failure",
            ...devices["Desktop Firefox"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            locale: "es-ES",
            trace: "retain-on-failure",
            video: "retain-on-failure",
            screenshot: "only-on-failure",
            ...devices["Pixel 5"]
         }
      }
   ],
   reporter: [["html", { outputFolder: "docs/coverage-e2e-testing" }], ["list"]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "src"),
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
