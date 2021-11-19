import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";
const outputDir = path.join(process.cwd(), "dist/tests/e2e/results/ci");

const config: PlaywrightTestConfig = {
   outputDir,
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
         name: "Tablet iOS",
         use: {
            ...devices["iPad Mini"]
         }
      },
      {
         name: "Tablet Android",
         use: {
            ...devices["Galaxy Tab S4"]
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
   reporter: [["html", { outputFolder: "dist/tests/e2e/reports/ci", open: false }]],
   retries: 2,
   testDir: path.resolve(process.cwd(), "e2e", "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL }
};

export default config;
