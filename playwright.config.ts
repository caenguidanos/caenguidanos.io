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
         name: "Desktop Edge",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Edge"]
         }
      },
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
         name: "Desktop Firefox",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Firefox"]
         }
      },
      {
         name: "Desktop Safari",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Safari"]
         }
      },
      {
         name: "Tablet iOS",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["iPad Mini"]
         }
      },
      {
         name: "Tablet Android",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Galaxy Tab S4"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Pixel 5"]
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
