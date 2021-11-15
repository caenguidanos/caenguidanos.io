import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
   testDir: "src",
   testMatch: "**/*.e2e.ts",
   retries: 2,
   timeout: 30000,
   use: { baseURL: "http://0.0.0.0:3000" },
   preserveOutput: "failures-only",
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
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
         name: "Mobile Chrome",
         use: {
            locale: "es-ES",
            trace: "retain-on-failure",
            video: "retain-on-failure",
            screenshot: "only-on-failure",
            ...devices["Pixel 5"]
         }
      }
   ]
};

export default config;
