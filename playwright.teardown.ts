import { PlaywrightTestConfig } from "@playwright/test";

import type { PlaywrightGlobal } from "./playwright.types";

export default function globalTeardown(_config: PlaywrightTestConfig): void {
   (globalThis as unknown as PlaywrightGlobal).playwrightServerController.abort();
}
