import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string => path.resolve(process.cwd(), ...args);

const baseURL: string = process.env.PLAYWRIGHT_BASE_URL;

if (!baseURL) {
   throw new EvalError("Base URL don't exists in scope");
}

const testDir: string = resolve("tests", "e2e");
const outputDir: string = resolve("dist", "tests", "e2e", "results", "ci-cd");
const reporterDir = resolve("dist", "tests", "e2e", "reports", "ci-cd");

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
         name: "Desktop Edge",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Edge"]
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
      }
   ],
   reporter: [["html", { outputFolder: reporterDir, open: "never" }], ["list"]],
   retries: 2,
   testDir,
   testMatch: "**/*.spec.ts",
   timeout: 30000,
   use: { baseURL }
};

export default config;
