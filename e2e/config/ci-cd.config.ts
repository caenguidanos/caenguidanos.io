import path from "path";

import { PlaywrightTestConfig, devices } from "@playwright/test";

const resolve = (...args: string[]): string => path.resolve(process.cwd(), ...args);

const baseURL: string = process.env.PLAYWRIGHT_BASE_URL;

if (!baseURL) {
   throw new EvalError("Base URL don't exists in scope");
}

const testDir: string = resolve("e2e");
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
      }
   ],
   reporter: [["html", { outputFolder: reporterDir, open: "never" }], ["list"]],
   retries: 2,
   testDir,
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: { baseURL }
};

export default config;
