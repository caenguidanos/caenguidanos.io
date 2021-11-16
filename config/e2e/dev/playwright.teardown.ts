import { PlaywrightTestConfig } from "@playwright/test";

export default function teardown(_config: PlaywrightTestConfig): void {
   console.log("Playwright teardown...");
}
