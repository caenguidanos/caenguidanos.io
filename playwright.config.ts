import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
   testMatch: "*.e2e.ts",
   use: {
      baseURL: "http://localhost:3000"
   }
};

export default config;
