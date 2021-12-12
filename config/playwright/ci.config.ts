import { PlaywrightTestConfig } from "@playwright/test";

import { playwrightDevices } from "./devices/devices.config";
import { playwrightSharedConfig } from "./shared.config";

const playwrightConfig: PlaywrightTestConfig = {
   ...playwrightSharedConfig,
   projects: playwrightDevices,
   retries: 2
};

export default playwrightConfig;
