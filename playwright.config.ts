import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string => path.resolve(process.cwd(), ...args);

const baseURL: string = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

if (!baseURL) {
   throw new EvalError("Base URL don't exists in scope");
}

const testDir: string = resolve("e2e");
const outputDir: string = resolve("dist", "tests", "e2e", "results", "local");
const reporterDir = resolve("dist", "tests", "e2e", "reports", "local");

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
   reporter: [["html", { outputFolder: reporterDir, open: "never" }], ["list"]],
   retries: 0,
   testDir,
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL, trace: { mode: "on" } },
   webServer
};

export default config;
