import path from "path";

import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
   globalSetup: require.resolve("./playwright.global.ts"),
   globalTeardown: require.resolve("./playwright.teardown.ts"),
   reporter: [["html", { outputFolder: "coverage-e2e" }], ["list"]],
   retries: 3,
   testDir: path.resolve(process.cwd(), "src"),
   testMatch: "**/*.e2e.ts",
   timeout: 30000,
   use: {
      baseURL: "https://caenguidanos-io.vercel.app",
      browserName: "chromium",
      headless: true,
      locale: "es-ES"
   }
};

export default config;
