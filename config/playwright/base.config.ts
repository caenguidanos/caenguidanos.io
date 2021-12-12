import { PlaywrightTestConfig } from "@playwright/test";

import { playwrightDevices } from "./devices/devices.config";
import { playwrightSharedConfig } from "./shared.config";

const playwrightConfig: PlaywrightTestConfig = {
   ...playwrightSharedConfig,
   projects: playwrightDevices,
   retries: 2,
   webServer: {
      command: "pnpm dev",
      port: 3000,
      timeout: 30 * 1000,
      reuseExistingServer: true
   }
};

export default playwrightConfig;
