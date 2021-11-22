import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const outputDir = path.join(process.cwd(), "dist/tests/e2e/results/local");
const baseURL: string = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";
const reporterOutputFolder = "dist/tests/e2e/reports/local";
const testDir: string = path.resolve(process.cwd(), "e2e");
const webServer = {
   command: "./node_modules/next/dist/bin/next dev",
   port: 3000,
   timeout: 120 * 1000,
   reuseExistingServer: true
};

const config: PlaywrightTestConfig = {
   outputDir,
   preserveOutput: "always",
   projects: [
      {
         name: "Desktop Chrome",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Chrome"]
         }
      },
      {
         name: "Mobile iOS",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["iPhone 12"]
         }
      }
   ],
   reporter: [["html", { outputFolder: reporterOutputFolder, open: "never" }], ["list"]],
   retries: 2,
   testDir,
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL, trace: { mode: "on" } },
   webServer
};

export default config;
