import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string => path.resolve(process.cwd(), ...args);

let baseURL: string;
let webServer: PlaywrightTestConfig["webServer"];
let testDir: string;
let outputDir: string;
let reporterDir: string;

if (process.env.PLAYWRIGHT_MODE === "native") {
   testDir = resolve("src-e2e");
   outputDir = resolve("dist", "tests", "e2e", "results");
   reporterDir = resolve("dist", "tests", "e2e", "reports");

   // CI-CD Environment
   if (process.env.PLAYWRIGHT_BASE_URL) {
      baseURL = process.env.PLAYWRIGHT_BASE_URL;
   } else {
      // Local Environment
      baseURL = "http://localhost:3000";
      webServer = {
         command: "pnpm dev",
         port: 3000,
         timeout: 120 * 1000,
         reuseExistingServer: true
      };
   }
}

// Both Environments
if (process.env.PLAYWRIGHT_MODE === "storybook") {
   baseURL = "http://localhost:6006";
   testDir = resolve("src");
   outputDir = resolve("dist", "tests", "e2e-storybook", "results");
   reporterDir = resolve("dist", "tests", "e2e-storybook", "reports");
   webServer = {
      command: "pnpm storybook",
      port: 6006,
      timeout: 120 * 1000,
      reuseExistingServer: true
   };
}

if (!baseURL) {
   throw new EvalError("Base URL don't exists in scope");
}

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
