import path from "path";
import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string =>
   path.resolve(process.cwd(), ...args);

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
] as PlaywrightTestConfig["projects"];

interface PlaywrightConfig {
   default: PlaywrightTestConfig;
   ci: PlaywrightTestConfig;
}

const playwrightConfig: PlaywrightConfig = {
   default: {
      outputDir: resolve("dist", "tests", "e2e", "results"),
      preserveOutput: "always",
      projects: commonConfigProjects,
      reporter: [
         [
            "html",
            {
               outputFolder: resolve("dist", "tests", "e2e", "reports"),
               open: "never"
            }
         ],
         ["list"]
      ],
      retries: 0,
      testDir: resolve("src"),
      testMatch: "**/*.page.spec.ts",
      timeout: 30000,
      use: { baseURL: "http://localhost:3000", trace: { mode: "on" } },
      webServer: {
         command: "NEXT_PUBLIC_XSTATE_VIZ='disabled' pnpm dev",
         port: 3000,
         timeout: 120 * 1000,
         reuseExistingServer: true
      }
   },
   ci: {
      outputDir: resolve("dist", "tests", "e2e", "results"),
      preserveOutput: "always",
      projects: commonConfigProjects,
      reporter: [
         [
            "html",
            {
               outputFolder: resolve("dist", "tests", "e2e", "reports"),
               open: "never"
            }
         ],
         ["list"]
      ],
      retries: 0,
      testDir: resolve("src"),
      testMatch: "**/*.page.spec.ts",
      timeout: 30000,
      use: { baseURL: process.env.PLAYWRIGHT_BASE_URL, trace: { mode: "on" } }
   }
};

let config: PlaywrightTestConfig = playwrightConfig.default;

if (process.env.PLAYWRIGHT_MODE === "ci") {
   config = playwrightConfig.ci;

   if (!process.env.PLAYWRIGHT_BASE_URL) {
      throw new Error("Playwright URL is required");
   }
}

export default config;
