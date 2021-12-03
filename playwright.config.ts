import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string => path.resolve(process.cwd(), ...args);

const commonConfigProjects = [
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
] as PlaywrightTestConfig["projects"];

const storybookConfig: PlaywrightTestConfig = {
   outputDir: resolve("dist", "tests", "e2e-storybook", "results"),
   preserveOutput: "always",
   projects: commonConfigProjects,
   reporter: [
      [
         "html",
         { outputFolder: resolve("dist", "tests", "e2e-storybook", "reports"), open: "never" }
      ],
      ["list"]
   ],
   retries: 0,
   testDir: resolve("src", "libs", "clients"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: "http://localhost:6006", trace: { mode: "on" } },
   webServer: {
      command: "pnpm storybook",
      port: 6006,
      timeout: 120 * 1000,
      reuseExistingServer: true
   }
};

const defaultConfig: PlaywrightTestConfig = {
   outputDir: resolve("dist", "tests", "e2e", "results"),
   preserveOutput: "always",
   projects: commonConfigProjects,
   reporter: [
      ["html", { outputFolder: resolve("dist", "tests", "e2e", "reports"), open: "never" }],
      ["list"]
   ],
   retries: 0,
   testDir: resolve("src-e2e"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: "http://localhost:3000", trace: { mode: "on" } },
   webServer: {
      command: "pnpm dev",
      port: 3000,
      timeout: 120 * 1000,
      reuseExistingServer: true
   }
};

const cicdConfig: PlaywrightTestConfig = {
   outputDir: resolve("dist", "tests", "e2e", "results"),
   preserveOutput: "always",
   projects: commonConfigProjects,
   reporter: [
      ["html", { outputFolder: resolve("dist", "tests", "e2e", "reports"), open: "never" }],
      ["list"]
   ],
   retries: 0,
   testDir: resolve("src-e2e"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL: process.env.PLAYWRIGHT_BASE_URL, trace: { mode: "on" } }
};

// --------------------------------------------------------------------------

const isStorybookConfig = process.env.PLAYWRIGHT_MODE === "storybook";
const isDefaultConfig = process.env.PLAYWRIGHT_MODE === "default";
const isCiCdConfig = process.env.PLAYWRIGHT_MODE === "ci-cd";

let config: PlaywrightTestConfig;

if (isStorybookConfig) {
   config = storybookConfig;
}

if (isDefaultConfig) {
   config = defaultConfig;
}

if (isCiCdConfig) {
   config = cicdConfig;

   if (process.env.PLAYWRIGHT_BASE_URL) {
      throw new Error("Playwright URL is required");
   }
}
export default config;
