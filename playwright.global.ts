import { PlaywrightTestConfig } from "@playwright/test";

export default function setup(_config: PlaywrightTestConfig): void {
   console.log("Playwright setup...");
}
